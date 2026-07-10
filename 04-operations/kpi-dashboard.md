# KPI Dashboard Specification

**AGIX Agribusiness & Agritech Expo 2027**
Friday 9 – Saturday 10 April 2027 | Amadeo Event Center, Ebeano Tunnel Road, Enugu, Nigeria
Organiser: AGIX Africa | www.agixafrica.com/expo2027

**Purpose:** This document specifies the marketing KPI dashboard for AGIX Agribusiness & Agritech Expo 2027: the full metric catalogue by funnel area, definitions and formulas, data sources, tracking frequencies, proposed baseline/target/stretch values, dashboard layout, a manual Google Sheets implementation guide, and red/amber/green thresholds.

**Owner:** Virtual Marketing Assistant (autonomous) / **Human approval required for:** signing off baseline/target/stretch values (all figures below are proposals PENDING APPROVAL), changing approved targets, and any external publication of performance figures.

**Important:** Every numeric value in this document is a **proposed first-edition scenario pending organiser approval**. None is a confirmed commitment, benchmark or historical figure. The organiser should adjust these based on budget, capacity of the venue, and commercial strategy, then sign them off via the approval register.

---

## 1. Metric catalogue

All values below are stated as **Baseline / Target / Stretch — PENDING APPROVAL**. "Baseline" is the minimum acceptable outcome for a first edition; "Target" is the planning objective; "Stretch" is the ambitious upside. Cumulative metrics are measured to event date (10 April 2027) unless stated.

### 1.1 Awareness

| Metric | Definition | Formula | Data source | Frequency | Baseline | Target | Stretch |
|--------|------------|---------|-------------|-----------|----------|--------|---------|
| Website visits (monthly) | Unique users on www.agixafrica.com/expo2027 per calendar month | GA4 "Users", expo pages | GA4 | Weekly | 1,000 | 2,500 | 5,000 |
| Website visits (cumulative) | Total unique users, launch to event | Sum of monthly users (deduplication accepted as limitation) | GA4 | Monthly | 10,000 | 20,000 | 40,000 |
| Social reach (monthly) | Accounts reached across all expo social channels per month | Sum of per-platform "accounts reached" | Meta Business Suite, LinkedIn, X analytics | Weekly | 20,000 | 50,000 | 100,000 |
| Social engagement rate | Engagements as share of reach | Total engagements ÷ total reach × 100 | Platform analytics | Weekly | 2% | 4% | 6% |
| Social followers (all platforms, cumulative) | Combined follower count on expo channels | Sum of platform follower counts | Platform analytics | Weekly | 3,000 | 7,500 | 15,000 |
| Media mentions (cumulative) | Distinct articles/broadcasts mentioning the expo | Manual count in media log | Media monitoring log (manual + alerts) | Monthly | 15 | 30 | 60 |

### 1.2 Database

| Metric | Definition | Formula | Data source | Frequency | Baseline | Target | Stretch |
|--------|------------|---------|-------------|-----------|----------|--------|---------|
| Email subscribers (cumulative) | Consented contacts in the email tool | Active list size (excl. unsubscribed/bounced) | Email platform | Weekly | 2,000 | 5,000 | 10,000 |
| Email open rate | Opens as share of delivered | Unique opens ÷ delivered × 100 | Email platform | Per campaign | 20% | 30% | 40% |
| Email click rate | Clicks as share of delivered | Unique clicks ÷ delivered × 100 | Email platform | Per campaign | 2% | 4% | 7% |
| List growth rate (monthly) | Net new subscribers per month | (Adds − losses) ÷ list size × 100 | Email platform | Monthly | 5% | 10% | 15% |

### 1.3 Exhibitor pipeline

| Metric | Definition | Formula | Data source | Frequency | Baseline | Target | Stretch |
|--------|------------|---------|-------------|-----------|----------|--------|---------|
| Qualified exhibitor leads (cumulative) | Exhibitor-type leads with score ≥ 40 | Count from lead tracker | Lead tracker | Weekly | 150 | 250 | 400 |
| Exhibitor conversions (cumulative) | Leads reaching Confirmed status | Count, Status = Confirmed/Paid, type = Exhibitor | Lead tracker | Weekly | — | — | — |
| Confirmed exhibitors (at event) | Signed exhibitors at event date | Count, Status = Confirmed or Paid | Lead tracker | Weekly | 40 | 60 | 80 |
| Exhibitor conversion rate | Confirmed as share of qualified leads | Confirmed ÷ qualified leads × 100 | Lead tracker | Monthly | 15% | 25% | 30% |

### 1.4 Sponsorship

| Metric | Definition | Formula | Data source | Frequency | Baseline | Target | Stretch |
|--------|------------|---------|-------------|-----------|----------|--------|---------|
| Sponsorship pipeline value | Sum of Estimated value for open sponsor leads (Engaged or later) | Σ Estimated value, type = Sponsor, open statuses | Lead tracker | Weekly | [₦ value pending approved pricing] | [₦] | [₦] |
| Confirmed sponsorship revenue | Sum of signed sponsorship agreements | Σ value, Status = Confirmed/Paid, type = Sponsor | Lead tracker + finance | Weekly | [₦] | [₦] | [₦] |
| Confirmed sponsors (count) | Number of signed sponsors | Count | Lead tracker | Weekly | 4 | 8 | 12 |

*Sponsorship value scenarios cannot be proposed until tier pricing is approved; placeholders remain until then.*

### 1.5 Delegates

| Metric | Definition | Formula | Data source | Frequency | Baseline | Target | Stretch |
|--------|------------|---------|-------------|-----------|----------|--------|---------|
| Delegate registrations (cumulative) | Completed registrations for the expo | Registration form/platform count, deduplicated | Registration tool | Weekly | 1,500 | 2,500 | 4,000 |
| Cost per registration | Marketing spend attributable to registrations ÷ registrations | Attributed spend ÷ registrations | Budget log + registration tool | Monthly | [₦ pending budget approval] | [₦] | [₦] |
| Registration-to-attendance rate (post-event) | Attendees as share of registrations | Check-ins ÷ registrations × 100 | On-site check-in | Post-event | 50% | 65% | 75% |

### 1.6 Efficiency

| Metric | Definition | Formula | Data source | Frequency | Baseline | Target | Stretch |
|--------|------------|---------|-------------|-----------|----------|--------|---------|
| Lead-to-conversion rate (overall commercial) | Confirmed exhibitors + sponsors as share of all qualified commercial leads | Confirmed ÷ qualified × 100 | Lead tracker | Monthly | 12% | 20% | 28% |
| Cost per lead | Marketing spend ÷ qualified leads generated | Attributed spend ÷ qualified leads | Budget log + lead tracker | Monthly | [₦ pending budget] | [₦] | [₦] |
| ROMES (return on marketing expenditure) | Revenue attributable to marketing ÷ marketing spend | (Confirmed exhibitor + sponsor + ticket revenue) ÷ total marketing spend | Finance + budget log | Monthly | 3:1 | 5:1 | 8:1 |

### 1.7 Partnerships and international participation

| Metric | Definition | Formula | Data source | Frequency | Baseline | Target | Stretch |
|--------|------------|---------|-------------|-----------|----------|--------|---------|
| Active partners (cumulative) | Partner-type leads at Confirmed status (MoU/agreement in place) | Count | Lead tracker | Monthly | 5 | 10 | 15 |
| Partner referrals | Leads with Source = Partner introduction | Count | Lead tracker | Monthly | 20 | 50 | 100 |
| International participation — exhibitors | Confirmed exhibitors headquartered outside Nigeria | Count, Country ≠ Nigeria | Lead tracker | Monthly | 4 | 8 | 15 |
| International participation — countries | Distinct countries represented among confirmed participants | Distinct Country count | Lead tracker + registrations | Monthly | 3 | 6 | 10 |

---

## 2. Dashboard layout

### 2.1 Weekly operations view (tab: "Weekly Ops")

Audience: assistant self-management plus organiser skim (2 minutes). Contents:

1. **Headline strip** — confirmed exhibitors, confirmed sponsors, delegate registrations, email list size, days to event (calculated from 9 April 2027; milestone flags at 9 January, 8 February, 10 March, 26 March and 2 April 2027).
2. **Funnel snapshot** — leads by status (count and value) with week-on-week movement arrows.
3. **This week vs last week** — website visits, social reach, engagement rate, new subscribers, new qualified leads.
4. **Urgent items** — overdue follow-ups and urgent flags carried from the lead tracker.
5. **RAG summary row** — every §1 metric shown as red/amber/green against its approved target trajectory.

### 2.2 Monthly strategic view (tab: "Monthly Strategic")

Audience: organiser decision-making. Contents:

1. Progress vs approved targets — each metric plotted against a straight-line trajectory from launch to event date.
2. Budget utilisation vs plan [pending budget approval].
3. Pipeline value trend and conversion-rate trend (3-month view).
4. Sector and country mix of confirmed participants.
5. Top risks and decisions required (linked to the approval register).

---

## 3. Manual Google Sheets implementation guide

1. **Create one workbook** — "AGIX Expo 2027 — KPI Dashboard" — in the shared Drive folder.
2. **Tabs:** `Data-Entry` (one row per week per metric: Date, Metric, Value, Source, Notes), `Targets` (metric, baseline, target, stretch, approval date), `Weekly Ops`, `Monthly Strategic`, `Reference` (metric definitions from §1).
3. **Data entry cadence:** every Friday the assistant records the week's values in `Data-Entry` from GA4, platform analytics, the email tool and the lead tracker. Lead-tracker metrics pull automatically via `IMPORTRANGE`/`QUERY` from the master tracker where possible; platform metrics are keyed in manually until API automation is approved.
4. **Views:** `Weekly Ops` and `Monthly Strategic` are built entirely from `QUERY`/`SPARKLINE`/pivot formulas over `Data-Entry` — no hand-typed numbers on the view tabs.
5. **RAG formatting:** conditional formatting compares each metric's latest value with its expected on-track value (linear interpolation between launch value and target by event date) using thresholds in §4.
6. **Days-to-event counter:** `=DATE(2027,4,9)-TODAY()` with milestone conditional highlights.
7. **Version control:** a dated PDF snapshot of both views is exported monthly to the archive folder alongside the monthly strategic report.

---

## 4. Red/amber/green thresholds

Applied to each metric against its **expected on-track value** (pro-rata trajectory toward the approved target):

| Rating | Rule | Response |
|--------|------|----------|
| Green | ≥ 95% of on-track value | Continue plan. |
| Amber | 75–94% of on-track value | Assistant proposes corrective actions in the weekly report. |
| Red | < 75% of on-track value, or a metric red for 2+ consecutive weeks at amber | Escalated in the daily digest as a decision item; corrective options with trade-offs presented for human approval. |

Inverse metrics (cost per lead, cost per registration) apply the thresholds in reverse (green when ≤ 105% of planned cost, amber 106–133%, red > 133%).

---

*All baseline/target/stretch values above are first-edition proposals for the organiser to confirm, amend or replace. Sign-off is requested via `approval-escalation-register.md`.*
