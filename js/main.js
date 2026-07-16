/* AGIX Agribusiness & Agritech Expo 2027 — site scripts */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * CONFIG — registration data collection
   *
   * Set FORM_ENDPOINT to a URL that accepts a JSON POST to collect
   * registrations remotely, e.g.:
   *   - Formspree:            https://formspree.io/f/<your-form-id>
   *   - Google Apps Script:   https://script.google.com/macros/s/<id>/exec
   *   - Your own API:         https://api.example.com/registrations
   *
   * If left empty, submissions are saved to this browser's localStorage
   * and can be reviewed/exported as CSV from admin/registrations.html.
   * (See README.md for step-by-step backend setup.)
   * ------------------------------------------------------------------ */
  var FORM_ENDPOINT = "";
  var STORAGE_KEY = "agix_expo_registrations";

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    siteNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Countdown to opening day ---------- */
  var EVENT_START = new Date("2027-01-28T09:00:00+01:00"); // WAT

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function tickCountdown() {
    var els = {
      days: document.getElementById("cd-days"),
      hours: document.getElementById("cd-hours"),
      mins: document.getElementById("cd-mins"),
      secs: document.getElementById("cd-secs")
    };
    if (!els.days) return;

    var diff = EVENT_START.getTime() - Date.now();
    if (diff <= 0) {
      els.days.textContent = "0";
      els.hours.textContent = "00";
      els.mins.textContent = "00";
      els.secs.textContent = "00";
      return;
    }
    var secs = Math.floor(diff / 1000);
    els.days.textContent = String(Math.floor(secs / 86400));
    els.hours.textContent = pad(Math.floor((secs % 86400) / 3600));
    els.mins.textContent = pad(Math.floor((secs % 3600) / 60));
    els.secs.textContent = pad(secs % 60);
  }

  tickCountdown();
  setInterval(tickCountdown, 1000);

  /* ---------- "Book a Stand" pre-selects the Exhibitor category ---------- */
  document.querySelectorAll("[data-category]").forEach(function (link) {
    link.addEventListener("click", function () {
      var select = document.getElementById("category");
      if (!select) return;
      var wanted = link.getAttribute("data-category");
      Array.prototype.forEach.call(select.options, function (opt) {
        if (opt.text.indexOf(wanted) !== -1) select.value = opt.value || opt.text;
      });
    });
  });

  /* ---------- Registration form ---------- */
  var form = document.getElementById("registration-form");
  var statusEl = document.getElementById("form-status");
  var submitBtn = document.getElementById("submit-btn");

  if (!form) return;

  function setStatus(message, kind) {
    statusEl.textContent = message;
    statusEl.className = "form-status" + (kind ? " " + kind : "");
  }

  function collectData() {
    var data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      organization: form.organization.value.trim(),
      jobTitle: form.jobTitle.value.trim(),
      country: form.country.value,
      category: form.category.value,
      interests: Array.prototype.filter
        .call(form.querySelectorAll('input[name="interests"]'), function (cb) { return cb.checked; })
        .map(function (cb) { return cb.value; }),
      hearAbout: form.hearAbout.value,
      message: form.message.value.trim(),
      consent: form.consent.checked,
      submittedAt: new Date().toISOString(),
      event: "AGIX Agribusiness & Agritech Expo 2027"
    };
    return data;
  }

  function validate() {
    var ok = true;
    var firstInvalid = null;

    ["firstName", "lastName", "email", "phone", "country", "category"].forEach(function (name) {
      var field = form[name];
      var valid = field.value.trim() !== "";
      if (name === "email" && valid) {
        valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      }
      field.classList.toggle("invalid", !valid);
      if (!valid) {
        ok = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    if (!form.consent.checked) {
      ok = false;
      if (!firstInvalid) firstInvalid = form.consent;
      setStatus("Please complete the required fields and accept the contact consent.", "error");
    } else if (!ok) {
      setStatus("Please complete the highlighted required fields.", "error");
    }

    if (firstInvalid) firstInvalid.focus();
    return ok;
  }

  function saveLocally(data) {
    try {
      var existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.push(data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      return true;
    } catch (err) {
      return false;
    }
  }

  function sendRemote(data) {
    return fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    setStatus("", "");

    if (!validate()) return;

    var data = collectData();
    var successMsg =
      "Thank you, " + data.firstName + "! Your registration has been received. " +
      "A confirmation will be sent to " + data.email + ".";

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";

    function done(ok, msg) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Registration";
      if (ok) {
        form.reset();
        setStatus(msg || successMsg, "success");
      } else {
        setStatus(msg, "error");
      }
    }

    if (FORM_ENDPOINT) {
      sendRemote(data)
        .then(function () {
          saveLocally(data); // local backup copy
          done(true);
        })
        .catch(function () {
          // Endpoint unreachable — keep the registration locally so it isn't lost.
          var saved = saveLocally(data);
          done(
            saved,
            saved
              ? successMsg
              : "Something went wrong submitting your registration. Please try again or email hello@agixafrica.com."
          );
        });
    } else {
      var saved = saveLocally(data);
      done(
        saved,
        saved
          ? successMsg
          : "Something went wrong submitting your registration. Please try again or email hello@agixafrica.com."
      );
    }
  });
})();
