# Interview Synthesis and Insights

*Source: [Customer Portal Research Synthesis (Aug 26)](https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-). Daniel Randolph ran a first AI pass, then the team did a manual clustering session on top of it, adding comments and re-grouping. Cross-cutting patterns also draw from Slack discussion in Sep 2026.*

The board has two parallel clustering passes over the same underlying interview quotes:

## Pass 1 — "Claude Sort" (AI first-pass clustering)

An AI-generated grouping of every extracted interview quote into topic buckets:

Customer [Feedback], Missing Features, Positive User [Feedback], User Adoption, Marketing & [Sales], UX & Information Architecture, Payments & Billing [Reliability], Multi-user Access [& Role Permissions], Competitive [Intel], Partner [Relationships], Monetization, Outliers, AI Rece[ption].

## Pass 2 — "Figma / Manual Sort" (team's own clustering)

The team's manual re-clustering, organized loosely by product/business area:

- **Growth & Marketing:** Adoption drivers and success stories, Adoption barriers and hesitation, Competitive differentiation, Pricing analysis, Onboarding, Content, Communication and messaging, Marketing tools
- **Core workflows:** Grain contracts and offers, Agronomy and field data, Energy and fuel, Payment processing, Cross-sell and cross-business opportunities, Relationship-driven [selling]
- **Platform & UX:** White label, Mobile experience, Account access, Navigation and UI usability, Input formatting and data issues, Data sync delays and reliability, Third-party integrations, Permissions and roles, Multi-user and account access issues
- **Org-specific themes** (grouped under business function icons): CRM, Payments, AI opportunities, Customer support, Reporting
- **Other** — ungrouped/one-off feedback

Both passes point at the same underlying issues from different angles — the AI sort is more feedback-type-oriented (positive/negative/feature request), the manual sort is more product-area-oriented. Below are representative verbatim quotes pulled directly from the board, organized by theme, to keep the qualitative texture rather than just the categories.

---

## Theme: Grain contracts and offers

- "There's target contracts. That gets confusing in the app because it shows it as a contract and not as a target. So sometimes it gets mixed up." — Ryan, South West Terminal (Tronia) · *pain*
- "We definitely need to send a notification. Hey, your grain offer has triggered." — Mary, NEW Coop (Control) · *request*
- "One other big thing that is missing on this customer portal that they added to my team hub is the expiration date." — Mary, NEW Coop (Control) · *request*
- "The one thing that we don't have in there is offers. There's no tab to be able to see, all right, I got this offer sitting out here." — Luke, Keystone Cooperative (Agvance) · *pain*
- "If the contract's been in there for X amount of days and they still haven't signed it, it would be nice if something could resend a notification." — Luke, Keystone Cooperative (Agvance) · *request*
- "If they're wanting to sell it right now it needs to be a market offer, not a limit offer. Having the option to toggle between the two." — Taylor, River Valley Coop (Agvance) · *request*
- "We need that approval buffer before growers can withdraw a grain offer — every offer is hedged, so if a grower deletes it without us catching it, we're left holding a hedge with no offsetting customer position." — Mary Montag, NEW Coop (Control) · *idea*
- "We want offers hosted on a marketing tab so that when you truly see something in the inbox, it means it's a call to action — something important for the grower to act on." — Russ Reich, Richardson Pioneer (Homegrown ERP) · *idea*
- "Getting percent sold under the portal would set us even farther apart from others in the industry. That'll really bring a new standard out there." — Taylor, River Valley Coop (Agvance) · *request*
- "If there was a way to add charts to either the futures price or the cash bid price, I've had a few people mention that." — Lisa, Heritage Cooperative (Advantage) · *request*

## Theme: Multi-user accounts & role permissions

*Shared farm accounts need differentiated, role-based permissions instead of one login per operation.*

- "Some farms only have one email address and multiple people use that email address. The downfall is we can't have multiple accounts with that email address." — Rachelle, South West Terminal (Tronia) · *pain*
- "The husband wants access to the portal, but his wife also wants grain pricing sent from their account." — Pam, South West Terminal (Tronia) · *pain*
- "It would be nice if we could do both on one account. Maybe he wants the pricing and to see all stuff, but she wants to go online and pay." — Pam, South West Terminal (Tronia) · *request*
- "The request access piece is great, but if our accounting information doesn't match exactly, they can't log in." — Bailie, CVA · NE Merchant · *pain*
- "One thing that I really wish that we had in the portal as it pertains to customer use is roles by the type of individual." — Bailie, CVA · NE Merchant · *request*
- "If someone has been a customer before, we have to delete their phone number and email address off them as a client when we put them in as a user." — Stephanie, CenDak Coop (Agvance) · *pain*
- "None of our salesmen were tied to the right growers. It was a lot of back and forth linking." — NEW Coop (Control) · *pain*
- "Grower roles and permissions — 3rd party firms, etc." — Bailie

## Theme: Payments & billing reliability

*ACH billing after account reactivation, and inconsistent invoice sync/notifications, are the top unresolved frustrations.*

- Multiple partners flagged: getting funds after signup takes too long (up to a week in one case), invoice sync stopping or timing out, and growers "shocked" by incorrect balances when notifications don't fire consistently.
- CVA (NE Merchant) specifically called out concentrated payments-reliability problems — consistent with this being flagged separately in the ERP pattern analysis below.

## Theme: UX & information architecture

- "I really don't understand how to flag the highs and the lows on the app and who's doing what and who's not." — Rachelle, South West Terminal (Tronia) · *pain*
- "Just the dashboard at the customer portal level, it's just not intuitive. It's got to be easy to use, and there are pieces it's not for a grower." — Dan, NEW Coop (Control) · *pain*
- "Agronomy is our largest revenue generator and it wasn't even worthy of its own tile on the home screen. And contracts, prepays, bookings aren't in it right now." — Dan, NEW Coop (Control) · *pain*
- "Equity — you have to dig and dig and dig to get to it. That's the money the farmer's got in the company, and nobody knows where to go to find that right now." — Dan, NEW Coop (Control) · *pain*
- "Every time you change the sorting, every time you go back to that screen, it resets. So you have to then adjust your sorting again." — Brian, Heritage Cooperative (Advantage) · *pain*
- "That's three additional clicks every time I go to that folder — a pain in my ass." — Brian, Heritage Cooperative (Advantage) · *pain*
- "It'd be nice if we could default one booking over. They log in and say I don't see any of my bookings." — Kelsey, NEW Coop (Control) · *request*
- "Navigation opinions split by usage frequency — for those in the portal daily the tile grid is fine, but for invoices/bookings and purchase history/quotes/statements it all looks visually identical at first glance, so less frequent or older users have to work harder to find things." — Brian Worsley, Heritage Cooperative (Advantage) · *pain*

## Theme: Agronomy, field data & third-party integrations

- "I don't know if you could tie it somehow into their John Deere or their CNH deal, so as soon as they say that field's done planted it's shot over to Connect." — Trevar, Keystone Cooperative (Agvance) · *idea*
  - **Context:** This came up under "recurring complaints/questions." Trevar framed it as a two-way field-status workflow, not a complaint: growers want to mark a field "planted" in the portal (or just switch fields in their equipment display) and have that automatically notify the Keystone rep to schedule the next pass (e.g., spraying) — replacing the current phone call/email. He then floated piggybacking on the grower's existing John Deere or CNH equipment account, reasoning the planting data "is already going to a cloud most of the time anyways," so it could be relayed into Connect instead of requiring manual entry. He separately tied this to a second ask: merging their own spray/as-applied maps onto the grower's fields in-portal, both for transparency ("keeping us honest") and to flag skipped areas.
  - **Corroborating signal:** Ryan, Frontier Ag & Turf (Software: n/a — ERP not logged) independently named John Deere as-applied data (soil sampling, yield, planting, harvest — "90% of custom application") as Frontier's biggest portal wish, currently delivered manually via emailed PDFs, and said he's "aware of Keystone / field analytics rumors and is patiently waiting" — i.e., a second partner wants the same John Deere data pipeline and is already expecting Keystone/AgVend to build it. *(See `transcripts/2026-08-07-frontier-ryan.md`.)*
  - Note: Mary (NEW Coop) also mentions "John Deere" in her transcript, but that's about a John Deere Financial (JDF) tile next to CFA financing on the portal — a different, unrelated request, not field data/telematics.

---

## ERP-correlated pattern (Daniel Randolph, Sep 2, 2026)

> "The clearest ERP-correlated signal isn't really 'ERP X is buggy' — it's that **integration age matters more than which ERP it is**. Control (newest, first-ever integration) shows the most friction and it's explicitly framed by all four people as 'growing pains,' while Tronia and Agvantage (older, more established) show fewer raw sync bugs and more 'this whole category of data was never connected' gaps. Merchant is the outlier — a single, concentrated reliability problem in payments specifically, worth a closer look regardless of how 'mature' that integration is."

## Summary: pain points, feature requests, and ideas ("What would you want to change?", Daniel Randolph, Sep 2, 2026)

**Pain points**
- Internal agronomy team adoption is lagging behind grower-side enthusiasm.
- ACH behavior on inactive/reactivating accounts is a top unresolved frustration.

**Feature requests**
- Invoice filters, fuel offer self-service, grain offer expiration dates, and a delete-request workflow.
- Staff want automated CRM/sales reports to eliminate double-entry, plus scouting reports integrated into the platform.

**Ideas & future priorities**
- Automated, segmented marketing journeys (customer lifecycle) — a high-priority opportunity across ag, energy, and retail.
- Continued refinement of Goose/AI smart suggestions and Nexus supplier onboarding.
- Onboarding new users with a walkthrough meeting plus a screenshot pamphlet, to ease adoption.

## Other findings worth carrying forward

- Loyalty/rewards program discoverability is poor: a grower enrolled in a CPI points program found it "kind of hard to figure out how to earn points" despite the rules being documented — once shown, she found them well-explained. Points to a **discoverability**, not content, problem.
- SWT (a newer, largely satisfied partner) produced comparatively little critical feedback. The team retro concluded the open-questions method may under-elicit feedback from happy customers, and testing concrete concepts (e.g., a grower profitability calculator) might work better. Directly relevant to Phase 2 methodology (see `04-next-phase-grower-research-plan.md`).

## Cross-cutting patterns

These sit above the theme lists. They are still staff-reported.

- **Integration age, not ERP identity, predicts friction.** Newer integrations (Control) show growing pains. Older ones (Tronia, Agvantage) show gaps in what was never connected. Merchant is a payments-specific outlier. See Daniel's Sep 2 note above.
- **Shared-account / role-permission friction is systemic.** It shows up as one login per household, no split between pricing visibility and payment access, account data mismatches that block login, and stale phone or email tied to former users.
- **Notification reliability, not notification design, is the core payments complaint.** Staff and (by their report) growers want confirmation the system did what it said: offer triggered, invoice posted, balance correct.
- **Discoverability beats functionality in a few places.** Loyalty rules exist and are clear once found. Some "missing feature" complaints are features that already exist on another line of business.
- **Portal engagement predicts retention.** Valley Ag data: 2.82% churn for engaged portal users vs. 8.61% for non-engaged. That is a business case for closing adoption gaps, not only a UX one.

## Still untested with growers

Everything above is partner-staff reported. None of it has been heard directly from growers. That is the job of the next phase (see `04-next-phase-grower-research-plan.md`).

- Agronomy-side adoption lagging grower-side enthusiasm has not been explored from the grower's seat: trust, workflow fit, or something else.
- The open-questions method under-elicited feedback from satisfied partners (South West Terminal). Phase 2 should pair discovery with a few concrete concept probes.
