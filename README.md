# AGIX Agribusiness & Agritech Expo 2027 — Landing Page

A professional, responsive landing page with registration data collection for the
**AGIX Agribusiness & Agritech Expo 2027** — 28–30 January 2027, International
Conference Centre (ICC), Enugu, Nigeria. Organised by Africa Growth Industries
Exchange (AGIX Africa) Ltd.

## Structure

```
index.html                 Landing page (hero, about, highlights, venue, FAQ, registration form)
css/styles.css             All styling (responsive, mobile-first breakpoints)
js/main.js                 Countdown, mobile nav, form validation & submission
admin/registrations.html   Local admin view — browse/export registrations as CSV or JSON
```

No build step, no dependencies — plain HTML/CSS/JS. Host it anywhere
(GitHub Pages, Netlify, Vercel, cPanel, S3…).

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Registration data collection

The form collects: name, email, phone/WhatsApp, organisation, job title, country,
attendee category, areas of interest, referral source, message, and contact consent
(each record is timestamped).

Two modes, controlled by `FORM_ENDPOINT` at the top of `js/main.js`:

1. **Remote endpoint (recommended for production).** Set `FORM_ENDPOINT` to a URL
   that accepts a JSON `POST`, and every submission is sent there (a local backup
   copy is also kept in the visitor's browser):
   - **Formspree** — create a form at [formspree.io](https://formspree.io) and use
     `https://formspree.io/f/<your-form-id>`.
   - **Google Sheets** — create a Google Apps Script Web App bound to a sheet that
     appends `e.postData.contents` rows, deploy it with "Anyone" access, and use the
     `https://script.google.com/macros/s/<id>/exec` URL.
   - **Your own API** — any endpoint accepting `application/json`.

2. **Local capture (default, works out of the box).** With `FORM_ENDPOINT` empty,
   submissions are stored in the browser's `localStorage`. Open
   `admin/registrations.html` **in the same browser** to view them and download
   CSV/JSON. This is fine for demos and on-site kiosk registration desks, but data
   stays on that one device — configure a remote endpoint before public launch.

If the remote endpoint is unreachable, the submission falls back to local storage so
no registration is lost.

## Event details used

| Item | Value |
| --- | --- |
| Event | AGIX Agribusiness & Agritech Expo 2027 |
| Dates | Thursday 28 – Saturday 30 January 2027 |
| Venue | International Conference Centre (ICC), Enugu 400102, Nigeria |
| Organiser | Africa Growth Industries Exchange (AGIX Africa) Ltd |
| Endorsement | Federal Ministry of Agriculture & Food Security (federal lead partner) |
| Contact | hello@agixafrica.com · +234 702 642 1626 |
| Official site | https://agribizagritechexpo.agixafrica.com/ |

To change dates or contact details later, update `index.html` (hero, venue, FAQ,
footer) and the `EVENT_START` constant in `js/main.js` (countdown).
