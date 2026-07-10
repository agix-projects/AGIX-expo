# Human Approval and Escalation Register

**AGIX Agribusiness & Agritech Expo 2027**
Friday 9 – Saturday 10 April 2027 | Amadeo Event Center, Ebeano Tunnel Road, Enugu, Nigeria
Organiser: AGIX Africa | www.agixafrica.com/expo2027

**Purpose:** This document defines the boundary between autonomous assistant work and decisions reserved for the organiser. It sets out decision categories, response SLAs and fallbacks, the escalation workflow (daily digest format), a running register template, and the standing-approvals mechanism. The operating model is at least 90% automation with human involvement limited to strategic approvals, sensitive statements, credentials, key meetings/calls, signatures and legally or technically human-required matters.

**Owner:** Virtual Marketing Assistant (autonomous) / **Human approval required for:** every item in the "Approval required" table below; changes to this register itself; granting or revoking standing approvals.

---

## 1. Decision categories

### 1.1 Approval required (human decision before action)

| # | Category | Examples | SLA for human response | Fallback if no response |
|---|----------|----------|------------------------|--------------------------|
| A1 | Spending money | Ad budgets, tool subscriptions, printing, paid listings | 2 working days | No spend occurs. Item re-presented daily; opportunity cost noted in weekly report. |
| A2 | Signing agreements | Exhibitor contracts, sponsorship agreements, MoUs, vendor contracts | 3 working days | Counterparty told signature is in process; polite holding reply sent; escalated as URGENT after SLA. |
| A3 | Legal commitments | Terms and conditions, refund policies, data-protection statements, liability wording | 3 working days | Draft held; no publication. Interim language avoids commitment ("subject to final terms"). |
| A4 | Politically sensitive statements | Comments touching government, policy, subsidies, elections, land matters | 1 working day | Not published. Neutral factual alternative used or topic omitted. |
| A5 | Confirming high-profile speakers | Publicly announcing ministers, governors, CEOs, international figures | 2 working days | Speaker listed internally as "[invited, unconfirmed]"; no public announcement. |
| A6 | Announcing partners | Naming any organisation as partner, sponsor or supporter publicly | 2 working days | No announcement; partner asked to confirm logo/wording usage in writing meanwhile. |
| A7 | Sharing confidential information | Pricing negotiations, lead lists, financials, unpublished plans | 1 working day | Information withheld; requester told it requires organiser clearance. |
| A8 | Unverifiable claims | Any statistic, superlative or attendance/impact claim without a citable source | 2 working days | Claim removed or reworded to verifiable/qualified language before publication. |
| A9 | High-reputational-risk communications | Crisis responses, complaint handling in public, competitor comparisons, refund disputes | Same working day (target 4 hours) | Holding statement from pre-approved library only; no substantive reply. |
| A10 | Changes to dates, venue, pricing or advertised benefits | Any alteration to event dates, Amadeo Event Center booking, tier pricing, package contents | 3 working days | No change communicated anywhere; all materials keep last approved facts. |

### 1.2 Autonomous (assistant proceeds without prior approval, with full logging)

| # | Category | Notes |
|---|----------|-------|
| B1 | Drafting content of any kind | Drafts are drafts until approved where publication rules require it. |
| B2 | Building and maintaining calendars | Content calendar, campaign calendar, milestone countdowns. |
| B3 | Researching and building outreach lists | Target lists from public sources; no fabricated contact data. |
| B4 | Preparing outreach emails as drafts | Sending follows the approved-template rule: emails matching an approved template and category may be sent autonomously; novel or sensitive emails go to the digest. |
| B5 | Social posts within the approved calendar | Once a content batch is approved (see standing approvals), scheduling and publishing that batch is autonomous. |
| B6 | Routine follow-ups | Follow-ups using approved sequences and templates. |
| B7 | Lead organisation | Tracker hygiene, scoring, status transitions (except Confirmed/Paid), views. |
| B8 | Producing reports | Daily, weekly, monthly reports per `reporting-templates.md`. |
| B9 | Scheduling approved content | Loading approved items into scheduling tools. |
| B10 | Monitoring | Analytics, inboxes, social listening, media mentions, competitor activity. |
| B11 | Making recommendations | Strategy suggestions, target adjustments, tool proposals — presented, never self-executed where they touch A-categories. |

**Boundary rule:** where a task spans both lists, the A-category governs. If genuinely unclear, treat as approval-required and present it in the digest — mis-escalating is acceptable; mis-executing is not.

---

## 2. Escalation workflow

### 2.1 How items reach the human

1. Approval-required items are **batched into one daily digest** (sent each working morning) rather than interrupting through the day — except A9 (reputational risk) and anything time-critical, which escalate immediately.
2. Each digest item states: what is proposed, why, category, risk level, recommendation, deadline, and the exact fallback that occurs if no decision arrives by SLA.
3. Human responds with Approve / Reject / Amend per item (a one-word reply per item number is sufficient).
4. Decisions are logged in the running register (§3) the same day; approved items execute within one working day.
5. Items unanswered past SLA trigger the stated fallback and are re-presented at the top of the next digest, marked OVERDUE.

### 2.2 Daily digest template

```
APPROVAL DIGEST — [DD/MM/YYYY] — [n] items ([n] overdue)

ITEM 1
  Proposal:        [one-sentence description of the action requested]
  Category:        [A1–A10]
  Risk level:      [Low / Medium / High]
  Context:         [2–3 sentences: background and why now]
  Recommendation:  [assistant's recommended decision and reason]
  Needed by:       [date — consequence of delay]
  If no response:  [fallback that will apply]
  Attachments:     [links to drafts/documents]

ITEM 2 …

STANDING-APPROVAL ITEMS EXECUTED YESTERDAY (for awareness, no action needed):
  - [list]
```

---

## 3. Running register (template)

Maintained as a table (or sheet tab) appended to daily; never edited retrospectively except to add the decision.

| Date | Item | Category | Risk level | Presented to | Decision | Date decided | Notes |
|------|------|----------|------------|--------------|----------|--------------|-------|
| DD/MM/YYYY | [Short description with link] | A1–A10 | Low/Med/High | [Name] | Approved / Rejected / Amended / Pending / Lapsed-to-fallback | DD/MM/YYYY | [Conditions, amendments, follow-up] |
| | | | | | | | |

Register conventions: one row per item; "Lapsed-to-fallback" recorded when an SLA expires; monthly summary (counts by category and average decision time) included in the monthly strategic report to show whether the ≤10% human-involvement budget is holding.

---

## 4. Standing approvals

The organiser may pre-approve **categories of recurring work** so individual instances no longer require case-by-case sign-off. Standing approvals convert A-category items into B-category execution within defined limits.

| Standing approval (proposed) | Scope | Limits | Review cycle |
|------------------------------|-------|--------|--------------|
| Weekly social content batches | Publish the week's posts once the batch is approved each [Friday] | No A4/A6/A8 content inside batches; any such post pulled into the digest individually | Weekly batch approval |
| Outreach email templates | Send approved templates to leads in the tracker | New templates and any pricing statements still need approval | Monthly template review |
| Follow-up sequences | Automated follow-up cadence per lead status | Sequence copy pre-approved; no discounting or new claims | Monthly |
| Routine media responses | Factual replies from the approved event fact sheet | Anything beyond the fact sheet escalates (A9) | Monthly |
| Micro-spend allowance | [Optional: small recurring tool costs up to ₦(amount) per month — pending organiser decision] | Itemised in every weekly report | Monthly |

Granting, amending or revoking a standing approval is itself an approval-required decision, recorded in the running register with an explicit scope statement.

---

*Related documents: `reporting-templates.md` (digest is delivered within the daily output), `lead-management-system.md` (Confirmed/Paid status gates), `kpi-dashboard.md` (red-status escalations).*
