# Survey Insights Baseline (Pre-Existing Data)

*Imported from AgVend OS knowledge base (`Knowledge/Product/_shared/Grower-Portal-Survey-Insights.md`), last updated there 2026-03-30. This is quantitative background the interview-based research (2026 partner interviews) builds on and largely confirms.*

## Overview

Analysis of 2,015+ grower survey responses spanning 25+ ag retail partners from September 2022 through March 2025. Responses collected via in-portal survey prompt after grower login.

Raw data: [Google Sheet](https://docs.google.com/spreadsheets/d/1tJ_R7-ELaQ82Sv0iAZypGnCdT8uasxXXFOTNronAaOc/edit)
Summary doc: [Google Doc](https://docs.google.com/document/d/1e0Ug9tXAuo0QtTz62Y5TIqAFguAxivsiKN3Y8qSvCoo/edit)

## Top themes (ranked by frequency)

1. **Invoices, Billing and Payments (~220 mentions)** — the single biggest topic across all partners and time periods. Growers want easier online bill pay (especially ACH), clearer statements, better visibility into prepay balances and finance charges, and a prominent "pay bill" button. Newer responses add custom payment amounts, PayPal support, and card-on-file without fees.
2. **Generally Happy / No Complaints (~150)** — a healthy chunk of responses are simply positive, consistent across all partner cohorts.
3. **Pricing and Contracts (~135)** — real-time grain bids, delivery-location comparison, product pricing, and in-portal contract management. Cash price tickers and CME futures (including cattle) are recurring asks.
4. **Mobile App Demand (~125)** — strong recurring ask for a native mobile app; Android-specific UX issues called out in newer responses.
5. **Ease of Use Praise (~110)** — many responses specifically call out the portal as easy to navigate — a good UX signal.
6. **Login and Access Friction (~100)** — password resets, phone verification codes not sending, difficulty accessing multiple accounts. A classic onboarding/auth pain point, persistent across all time periods.
7. **Multi-Portal and Multi-Account Confusion (~50)** — growers managing multiple accounts (often post-acquisition) struggle to switch between them.
8. **Product and Inventory Info (~50)** — availability, stock levels, catalog/product lookup by need.
9. **Confusing Navigation (~45)** — the flip side of #5. Finding current balance due is a specific repeated pain point; load details and credit applications also called out.
10. **Better Communication and Notifications (~40)** — delivery/order status alerts, billing reminders, proactive communication.
11. **Energy and Propane Needs (~25)** — emerged more strongly in late 2024/early 2025. Remote tank monitoring, fuel ordering in-portal, faster invoice sync after propane fills (lag of "days" is a pain point).
12. **Field Data and Maps (~15, high signal)** — a smaller but passionate group wants soil samples, as-applied maps, VRT recs, satellite imagery, and nutritrak data alongside account info.

## NPS signal

73 responses were numeric scores only (likely NPS), averaging 6.9/10 with a cluster at 9–10 (36 responses) — a bimodal pattern: people either love it or have specific friction points.

## Notable partner-specific patterns

- **MFA** (joined late 2024): strong billing/payment focus; a marketing-awareness gap (grower suggested QR codes/signage).
- **Premier Ag** (joined late 2024): acute multi-portal confusion, likely post-acquisition; higher proportion of billing confusion.
- **River Valley Coop**: grain marketing power users — most sophisticated feature requests (multi-location bid comparison, CME futures, basis color coding). *(Also interviewed directly in the 2026 qualitative research — see 03/04.)*
- **CFS**: precision ag data requests concentrated here (soil samples, VRT recs).

## Product implications (from the original analysis)

1. **Payments is table stakes.** ACH, card-on-file, and a clear "pay now" flow should be frictionless — the #1 theme by a wide margin.
2. **Multi-account/multi-portal confusion is an acquisition tax.** As AgVend onboards acquired partners, portal consolidation and account switching need first-class support.
3. **Energy use cases are distinct** from grain/crop workflows (tank monitoring, fuel ordering, real-time invoice sync).
4. **Mobile is expected, not optional.**
5. **Login friction is a retention risk** — if a grower can't get in on the first try, the portal is dead to them.

## How this connects to the 2026 interview research

The 2026 partner interviews (see `03-interview-synthesis.md`) independently surface several of the same themes at a deeper, more mechanistic level — e.g., billing/ACH issues are now understood down to specific triggers (account reactivation), and multi-account confusion is now understood as a **shared-login / role-permissions** problem rather than a UI navigation problem. This is a good validation signal for Phase 2 (grower interviews): several hypotheses are already partner-confirmed and ready to test directly with growers.
