# Lead Management System Specification

**AGIX Agribusiness & Agritech Expo 2027**
Friday 9 – Saturday 10 April 2027 | Amadeo Event Center, Ebeano Tunnel Road, Enugu, Nigeria
Organiser: AGIX Africa | www.agixafrica.com/expo2027

**Purpose:** This document defines the central lead-management system for all commercial and partnership pipelines (exhibitors, sponsors, delegate groups, media, partners, speakers, government and investors) for AGIX Agribusiness & Agritech Expo 2027. It specifies the data model, status taxonomy, scoring model, automation rules and review views so the system can run with minimal human involvement.

**Owner:** Virtual Marketing Assistant (autonomous) / **Human approval required for:** confirming deals or pricing, signing agreements, changes to lead statuses "Confirmed" or "Paid", deleting records, and any external communication flagged as sensitive.

**Document version:** 1.0 — 10 July 2026 (event is approximately 9 months away)

---

## 1. Field definitions

All leads are held in a single master tracker (one row per organisation-opportunity). Fields, formats and validation rules:

| # | Field | Data format | Validation rules |
|---|-------|-------------|------------------|
| 1 | Organisation | Free text, max 100 chars | Required. Official registered name where known; no abbreviations unless the abbreviation is the trading name. Duplicate check on entry (fuzzy match against existing rows). |
| 2 | Contact name | Free text, "Firstname Surname" | Required once status passes "New lead". Title (Dr, Chief, Engr, etc.) recorded in Notes, not in this field. |
| 3 | Position | Free text, max 60 chars | Job title as stated by the contact or their public profile. Use "[unconfirmed]" suffix if inferred. |
| 4 | Email | Valid email format (x@y.z) | Regex-validated on entry. One primary email only; additional addresses in Notes. Never guessed — use "[to obtain]" until verified. |
| 5 | Telephone | E.164 international format, e.g. +234 803 000 0000 | Country code mandatory. Blank permitted until obtained; never invented. |
| 6 | Country | ISO country name from controlled list | Dropdown. Default "Nigeria". Drives international-participation reporting. |
| 7 | Sector | Controlled list | One of: Machinery & equipment; Inputs (seed/fertiliser/agrochemicals); Livestock & poultry; Aquaculture; Crop production; Processing & packaging; Agritech / software; Irrigation & water; Finance & insurance; Logistics & cold chain; Renewable energy; Government / agency; Development / NGO; Media; Education & research; Other. |
| 8 | Lead type | Controlled list (see §3) | Exactly one of the eight defined lead types. |
| 9 | Source | Controlled list | One of: Outbound research; Inbound website form; Referral; Social media; Email campaign; Event/meeting; Media coverage; Partner introduction; Other (specify in Notes). |
| 10 | Interest | Free text, max 200 chars | What the lead has expressed or is presumed to want (e.g. "6 sqm booth, machinery zone [presumed]"). Mark presumptions with "[presumed]". |
| 11 | Estimated value | Number, NGN, no decimals | Proposed booking value in Naira. Use tier placeholder values pending approved pricing (see prospectus). 0 permitted for non-commercial leads (media, government). Never presented externally. |
| 12 | Last contact | Date, DD/MM/YYYY | Auto-updated whenever an outreach or reply is logged. Blank only for status "New lead". |
| 13 | Next action | Free text, max 120 chars | Required for every open lead (all statuses except Confirmed, Paid, Declined, Future opportunity). Verb-first, e.g. "Send prospectus follow-up". |
| 14 | Next action date | Date, DD/MM/YYYY | Required whenever Next action is populated. Must be ≥ today when set. |
| 15 | Lead score | Integer 0–100 | Calculated per §4; recalculated on every status or engagement change. Not hand-edited. |
| 16 | Status | Controlled list (see §2) | Exactly one status. Transitions follow §2 rules. |
| 17 | Notes | Free text, append-only log | Dated entries, newest first, format "DD/MM/YYYY — note". Never delete history. |
| 18 | Assigned owner | Controlled list | "Assistant" (default) or named human. Human assignment only for leads requiring meetings, calls or signatures. |
| 19 | Conversion outcome | Controlled list | Blank until closed, then one of: Won — Exhibitor; Won — Sponsor; Won — Other; Lost — Price; Lost — Timing; Lost — No budget; Lost — Chose alternative; Lost — No response; Deferred to future event. |

**Data hygiene principles:** no invented contact details; unverified data is bracketed "[to verify]"; one row per organisation-opportunity (an organisation may appear twice only if it has genuinely separate opportunities, e.g. exhibitor and speaker).

---

## 2. Status taxonomy and transition rules

### 2.1 Status definitions

| Status | Definition |
|--------|------------|
| New lead | Identified and added to tracker; no outreach yet. |
| Contacted | First outreach sent; no reply yet. |
| Engaged | Lead has replied or interacted meaningfully (reply, call-back, form completion, meaningful social/email engagement). |
| Meeting requested | A meeting or call has been proposed by either side but not yet held. |
| Meeting completed | Meeting/call has taken place; outcome logged in Notes. |
| Proposal sent | Formal proposal, prospectus with pricing, or booking form has been sent. |
| Follow-up required | An agreed or scheduled follow-up is pending (used when the ball is in our court after any engaged stage). |
| Verbal commitment | Lead has verbally or in writing indicated intent to book/sponsor/attend, but nothing signed or paid. |
| Confirmed | Agreement signed / booking form completed. **Human approval required to set this status.** |
| Paid | Payment received and reconciled. **Human confirmation required to set this status.** |
| Declined | Lead has explicitly said no for this event. |
| No response | No reply after the defined outreach sequence is exhausted (see 2.2). |
| Future opportunity | Not viable for 2027 but worth retaining for future editions or other AGIX Africa activity. |

### 2.2 Automatic transition rules

| Trigger | Automatic action |
|---------|------------------|
| Row created | Status = New lead; Next action = "Send first outreach"; Next action date = today + 2 working days. |
| First outreach logged | New lead → Contacted; Last contact updated; follow-up scheduled at +5 working days. |
| Any reply or meaningful interaction logged | Contacted / No response → Engaged; score engagement points added. |
| Meeting proposed (either party) | Engaged → Meeting requested; human owner notified if a call is required. |
| Meeting logged as held | Meeting requested → Meeting completed; Next action required within 1 working day. |
| Proposal/prospectus-with-pricing sent | → Proposal sent; follow-up scheduled at +4 working days. |
| Lead asks for time / next step agreed | → Follow-up required with explicit Next action date. |
| Lead states intent to proceed | → Verbal commitment; item added to daily approval digest for human awareness. |
| Signed agreement received | Verbal commitment → Confirmed — **only on human approval**. |
| Payment reconciled | Confirmed → Paid — **only on human confirmation**. |
| Explicit "no" received | Any open status → Declined; Conversion outcome set. |
| 3 outreach attempts + 21 days with no reply | Contacted → No response. |
| No response + judged worth revisiting | No response → Future opportunity (with revisit date in Next action date). |
| Reply received after No response/Declined | Reopen to Engaged; Notes updated. |

Statuses may never skip directly from New lead to Confirmed. Downgrades (e.g. Verbal commitment back to Engaged) are permitted with a Notes entry explaining why.

---

## 3. Lead types

| Lead type | Description | Typical value field use |
|-----------|-------------|-------------------------|
| Exhibitor | Organisation that may book exhibition space. | Booth value at proposed tier pricing [pending approval]. |
| Sponsor | Organisation that may purchase a sponsorship package. | Package value [pending approval]. |
| Delegate-group | Organisation likely to bring a group of attendees (cooperatives, associations, universities, corporates). | 0 or group ticket value if ticketing applies. |
| Media | Press, broadcast, online media for coverage partnerships. | 0 (value is reach, tracked in KPI dashboard). |
| Partner | Trade associations, chambers, development programmes, ecosystem partners. | 0 unless paid partnership. |
| Speaker | Prospective conference/programme speakers. | 0. |
| Government | Ministries, agencies, state governments, parastatals. | 0 unless pavilion/sponsorship discussed. |
| Investor | Investors/funds relevant to agritech showcase or event investment. | 0 unless commercial package discussed. |

---

## 4. Lead scoring model (0–100)

Lead score = **Fit score (max 50)** + **Engagement score (max 50)**. Recalculated automatically on any relevant change.

### 4.1 Fit score (max 50)

| Criterion | Points |
|-----------|--------|
| Sector directly matches expo focus (machinery, inputs, agritech, processing, livestock, aquaculture, irrigation, finance for agriculture) | +15 |
| Organisation size/profile suggests budget for participation (multi-state or international presence, established brand) | +10 |
| Decision-maker contact identified (owner, director, head of marketing/BD) | +10 |
| History of exhibiting/sponsoring at comparable events (verified, not assumed) | +10 |
| Located in or actively targeting Nigeria/West Africa | +5 |

### 4.2 Engagement score (max 50)

| Behaviour | Points |
|-----------|--------|
| Replied to outreach | +10 |
| Requested prospectus / further information | +10 |
| Meeting requested or held | +10 |
| Proposal requested or discussed pricing | +10 |
| Verbal commitment given | +10 |
| Negative signals: unsubscribe, "not this year", bounce | −10 each (floor 0) |

### 4.3 Score bands

| Band | Score | Handling |
|------|-------|----------|
| Hot | 70–100 | Follow-up within 1 working day; surfaced daily. |
| Warm | 40–69 | Follow-up within 3 working days. |
| Cool | 20–39 | Standard nurture sequence. |
| Cold | 0–19 | Low-frequency nurture; quarterly review. |

---

## 5. Urgent follow-up rules (automatic flags)

A lead is flagged **URGENT** in the daily digest when any rule fires:

| Rule | Condition |
|------|-----------|
| U1 | Status = Engaged and no contact logged in 7 days. |
| U2 | Status = Meeting requested and no meeting scheduled within 5 days. |
| U3 | Status = Proposal sent and no follow-up in 5 days. |
| U4 | Status = Verbal commitment and no contact in 5 days (highest priority — protect committed revenue). |
| U5 | Next action date is in the past (overdue action), any open status. |
| U6 | Hot-band lead (score ≥ 70) with no next action set. |
| U7 | Inbound enquiry (Source = Inbound website form) not contacted within 1 working day. |

---

## 6. Daily and weekly hygiene automation

**Daily (automated, each working morning):**
1. Recalculate all lead scores.
2. Apply automatic status transitions (§2.2) including No-response timeouts.
3. Generate urgent-follow-up list (§5) and overdue-actions list.
4. Validate new rows (required fields, email format, duplicates) and flag defects.
5. Update Last contact fields from logged activity.
6. Produce daily pipeline snapshot (counts by status, total estimated value) for the daily report.

**Weekly (automated, Friday):**
1. Full duplicate scan and merge proposals (merges executed only after listing in digest).
2. Stale-lead sweep: any open lead untouched for 14+ days listed for review.
3. Data-completeness report: % of leads with email, phone, sector, next action.
4. Pipeline movement report: status changes week-on-week, new leads added, leads closed.
5. Backup: dated copy of the tracker saved to the archive folder in cloud storage.

---

## 7. Pipeline review views

The tracker must support these saved views (filters/pivots):

| View | Contents | Frequency |
|------|----------|-----------|
| By status | Count and total estimated value per status (funnel shape). | Daily |
| By value | Open leads sorted by estimated value, descending; top 20 highlighted. | Weekly |
| By sector | Leads and conversions per sector — informs floor-plan zoning and content targeting. | Weekly |
| By lead type | Exhibitor vs sponsor vs other pipelines side by side. | Weekly |
| Overdue actions | All rows where Next action date < today, sorted oldest first. | Daily |
| Urgent flags | All rows matching §5 rules. | Daily |
| By country | Domestic vs international split for the international-participation KPI. | Monthly |
| Closed analysis | Conversion outcomes with loss reasons. | Monthly |

---

## 8. Implementation options and migration path

| Phase | Tool | Rationale |
|-------|------|-----------|
| Now (July 2026) | Google Sheets master tracker (template: `lead-tracker-template.csv` in this folder) with data-validation dropdowns, conditional formatting for urgency flags, and pivot-table views. | Zero cost, immediate, fully controllable, adequate for the expected first-phase volume. |
| When volume or sequencing needs grow (indicatively 300+ active leads or multi-step email sequences) | Migrate to HubSpot Free CRM or Zoho CRM (free tier) [choice pending approval]. | Native pipelines, activity logging, email integration, reminders. |

**Migration note:** the field set in §1 is deliberately mapped 1:1 to standard CRM properties (Organisation → Company, Contact name → Contact, Status → Deal stage, Estimated value → Deal amount). Export the Sheet as CSV, import companies/contacts/deals in that order, then retire the Sheet to read-only archive. Statuses map to a custom deal pipeline created with the exact taxonomy in §2 so no historical meaning is lost. Migration is proposed as a decision point at the first monthly review after lead volume passes the threshold, and requires human approval before execution (tool sign-up and credentials are human-provided).

---

*Related documents: `lead-tracker-template.csv`, `kpi-dashboard.md`, `approval-escalation-register.md`, `martech-automation-architecture.md`.*
