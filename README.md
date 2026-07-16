# AGIX Agribusiness & Agritech Expo 2027 — Event Website

A professional, responsive event website with registration data collection for the
**AGIX Agribusiness & Agritech Expo 2027** — 9–10 April 2027, Amadeo Event Centre,
Ebeano Tunnel Rd, Achara – Enugu, Nigeria. Organised by Africa Growth Industries
Exchange (AGIX Africa) Ltd.

## Structure

```
index.html                 Landing page (hero, why attend, audience, partners, testimonials, venue, FAQ, registration form)
about.html                 About the Expo — why it matters, figures, coordinating partners, sectors, venue
exhibitors.html            Why Exhibit — audience, booth packages (Standard/Premium/Custom), add-ons, exhibitor services
sponsors.html              Why Sponsor — ROI, sponsorship tiers & partner categories, sponsor benefits
travel.html                Travel, Logistics & Visa Assistance — visas, flights, ground transport, exhibitor logistics
css/styles.css             All styling (responsive, mobile-first breakpoints)
js/main.js                 Countdown, mobile nav, form validation & submission, ?category= pre-selection
admin/registrations.html   Local admin view — browse/export registrations as CSV or JSON
```

All registration CTAs across the site feed the form on `index.html#register`. Links
like `index.html?category=Exhibitor#register` pre-select the matching category, so
"Book a Stand" and "Become a Sponsor" enquiries are captured with the right label.

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

**Every registration is emailed to `peace.ezema@agixafrica.com`.** `FORM_ENDPOINT`
in `js/main.js` points at [FormSubmit](https://formsubmit.co)'s relay
(`https://formsubmit.co/ajax/peace.ezema@agixafrica.com`), which delivers each
submission as a formatted table email — no account or server required.

> **One-time activation:** after the very first submission from the live site,
> FormSubmit sends an activation email to peace.ezema@agixafrica.com. It must be
> confirmed once; until then submissions are not delivered. Send a test
> registration after deploying and click the activation link.

Other options (swap `FORM_ENDPOINT` in `js/main.js`):

- **Formspree** — create a form at [formspree.io](https://formspree.io) and use
  `https://formspree.io/f/<your-form-id>` (also delivers by email; dashboard + CSV
  export on paid tiers).
- **Google Sheets** — a Google Apps Script Web App bound to a sheet that appends
  `e.postData.contents` rows, deployed with "Anyone" access.
- **Your own API** — any endpoint accepting `application/json`.
- **Local capture only** — set `FORM_ENDPOINT = ""`; submissions stay in the
  browser's `localStorage` (fine for demos or kiosk desks).

In every mode a backup copy is kept in the visitor's browser, viewable via
`admin/registrations.html` on that device. If the email relay is unreachable, the
visitor is told their registration hasn't reached the team and asked to retry or
email peace.ezema@agixafrica.com directly — nothing is silently lost.

## Event details used

| Item | Value |
| --- | --- |
| Event | AGIX Agribusiness & Agritech Expo 2027 |
| Dates | Friday 9 – Saturday 10 April 2027 |
| Venue | Amadeo Event Centre, Ebeano Tunnel Rd, Achara – Enugu, Nigeria |
| Organiser | Africa Growth Industries Exchange (AGIX Africa) Ltd — RC 9014701 (Nigeria), Companies House No. 111-878215 (UK) |
| Endorsement | Officially endorsed by the Federal Ministry of Agriculture and Food Security · Official Federal Lead Partner |
| Key figures | 3,000+ participants · 100+ exhibitors · 20+ speakers · 30+ countries |
| Contact | hello@agixafrica.com · +234 702 642 1626 (NG) · +44 7442 797 645 (UK) |
| Official site | https://agribizagritechexpo.agixafrica.com/ |

To change dates or contact details later, update `index.html` (hero, venue, FAQ,
footer) and the `EVENT_START` constant in `js/main.js` (countdown).
