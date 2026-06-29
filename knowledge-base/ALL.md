# Monish Sunku Prabhakar — Knowledge Base

A structured, single-source-of-truth knowledge base of the work and frameworks behind the portfolio at **monishsunkuprabhakar.com**.

## Why this exists

- **For Monish:** one place to keep case study facts straight as the portfolio evolves
- **For recruiters / hiring managers:** a deeper-than-resume reference you can share directly
- **For AI tools:** can be pasted as context into ChatGPT, Claude, or any LLM for interview prep, cover-letter generation, or behavioral-question rehearsal
- **For the chat widget on the portfolio:** the system prompt that powers `/api/chat` draws from this content

## Structure

| File | What's in it |
|------|--------------|
| `00-about.md` | Current roles, background, positioning, education, recognition, contact |
| `01-growth-org.md` | Case Study 01 — Building Gemini's Growth Organization |
| `02-recurring-buy.md` | Case Study 02 — Recurring Buy at Gemini |
| `02a-recurring-buy-roi.md` | Recurring Buy ROI model deep dive |
| `03-credit-card-cross-sell.md` | Case Study 03 — Credit Card Cross-Sell |
| `04-referrals.md` | Case Study 04 — Referrals program (incl. $75 LTO) |
| `05-experimentation-platform.md` | Case Study 05 — In-house experimentation platform |
| `10-earlier-work.md` | Whisper AI, Ample, Seagate |
| `20-frameworks.md` | Reusable PM frameworks (5 operating principles, A/D/F, build-vs-buy rule, conservative-input modeling) |
| `30-voice-and-positioning.md` | Tone, pull quotes, things to avoid claiming |
| `ALL.md` | Concatenation of everything — paste this into an LLM for full context |

## How to use it

### Paste into Claude / ChatGPT for interview prep
```
"You are helping me prep for an interview for a Head of Product role at [Company].
Here is everything about my background — refer to it as needed:
[paste contents of ALL.md]

Now ask me a behavioral question typical for this role and grade my answer."
```

### Share with a recruiter as deeper-than-resume context
Send `02-recurring-buy.md` (or any specific case study) as a follow-up after a conversation where they wanted more depth.

### Power the chat widget on the portfolio site
The `_worker.js` system prompt in `deploy/` is a summarized version of these facts. When this knowledge base gets significantly updated, regenerate the system prompt from `ALL.md`.

## Keeping it current

When you ship a new case study or update numbers:
1. Update the relevant case-study file here
2. Update the corresponding HTML in `deploy/`
3. Regenerate `ALL.md` if needed (just `cat *.md > ALL.md` from this folder)
4. Update the system prompt in `deploy/_worker.js`
# About Monish Sunku Prabhakar

## Positioning

Product executive with a **15-year track record** driving product-led growth, revenue strategy, and organizational scale across FinTech, AI, and SaaS. Built and led product organizations from the ground up at multiple companies, establishing the strategy, operating models, and team culture that turned early-stage products into scaled platforms delivering **$75M+ in cumulative business impact**.

**Distinguishing framing:** a product-minded leader who came up through engineering, not an engineer who switched to product. Three-way fluency in Product, Business, and Tech.

## Current roles

**Associate Director of Product, Growth — Gemini** (January 2024 → present)
- Leading U.S. cryptocurrency exchange
- San Francisco
- Reports to VP of Product
- Leads a global PM team within a cross-functional pod spanning engineering, design, data, infrastructure, and marketing
- Drives product-led growth (PLG) strategy for Gemini's consumer platform

**Consulting VP of Product — Stealth Startup (Agentic AI healthcare platform, part-time, March 2025 → present)**
- Working MVP live with 4 enterprise clients
- Pipeline tracking toward 30 enterprise clients by Q1 2027
- Owns organizational design and long-term platform strategy as the most senior product leader
- Shapes investor narrative and executive product positioning in direct partnership with the founding team

## Open to

**Senior product leadership roles in fintech and AI:**
- Head of Product
- Group Product Manager (GPM)
- Director of Product
- VP of Product

Primary search focus: fintech, AI-native finance, and AI infrastructure.

## Education

| Degree | Institution | Location |
|--------|-------------|----------|
| MBA | UCLA Anderson School of Management | Los Angeles, CA |
| M.S. Electrical & Computer Engineering | University of Colorado | Boulder, CO |
| B.E. Electrical Engineering | Visvesvaraya Technological University | Bangalore, India |

## Recognition

- **U.S. Patent #20170220264** — Zone Forward Management (2017). Efficient methods of data caching, steering, mapping, and migration to reduce write amplification and command latency.
- **2nd Place, HPE Case Competition** — Morrison Center for Marketing & Data Analytics, UCLA Anderson (2026). Developed AI-driven models on HPE enterprise data to surface account expansion, churn, and cross-sell signals.

## Core skills

**Leadership:** Organizational Building & Hiring · Executive Stakeholder Alignment · OKR & Portfolio Strategy

**Product:** Product-Led Growth · Go-to-Market & Commercialization · Experimentation & A/B Testing

**Technical:** AI/ML & Generative AI · APIs & Platform Architecture · FinTech & Data Infrastructure

## Career trajectory

```
2011–2018  Seagate Technology       — Firmware engineer → Technical Product Lead
2018–2020  Ample (EV battery swap)  — Director of Product (first product hire)
2020–2021  Whisper AI (hearing aid) — Director of Product (sole PM at 60-person co)
2021–2023  Gemini                   — Technical Product Lead, Growth
2024–...   Gemini                   — Associate Director of Product, Growth
2025–...   Stealth Startup          — Consulting VP of Product (concurrent)
```

## Contact

- **Email:** monishsp@gmail.com
- **LinkedIn:** [linkedin.com/in/monishsp](https://linkedin.com/in/monishsp)
- **Portfolio:** [monishsunkuprabhakar.com](https://monishsunkuprabhakar.com)
- **Location:** Los Angeles, CA
# Case Study 01 — Building Gemini's Growth Organization

**Role:** Associate Director, Product · Growth
**Company:** Gemini (cryptocurrency exchange)
**Window:** Q1 2024 → ongoing
**Portfolio URL:** monishsunkuprabhakar.com/growth-org

## Headline

Built the org behind every other case study. **+50% engineering delivery velocity**, **−30% time-to-market**, **3 PMs hired and coached**, **$75M+ cumulative business impact** across the growth portfolio. Partnered with VP of Product on quarterly and company-level strategy.

## The gap

When Monish stepped into Associate Director in Q1 2024, growth at Gemini was a collection of **individual PM heroics**. The shipped work was strong, but each win ran on the spine of one person making it happen. Velocity ceilings, prioritization debates, and re-litigation of decisions consumed more energy than the work itself. The org had no operating system.

The choice was the obvious one: hire, then build, or build, then hire. He picked the harder one.

## The bet

> *"Without an operating system, hiring just multiplies the chaos."*

Frameworks before people. Five operating principles, set in sequence: experimentation as default, business-goal alignment as the prioritization gate, metrics + VOC rituals, AI layered through every workflow, and high ownership as the cultural floor.

Then hire into the framework, not around it. Each new PM stepped into a defined surface with defined success metrics on day one.

## The five operating principles

### 01 · Experimentation (default)
Every initiative runs as an experiment. Clear hypothesis upfront, dashboard owned by the PM, results owned end-to-end. Hypothesis-to-analysis is the work, not a layer on top of it.
*Signal:* 100% hypothesis-driven

### 02 · Goal Alignment (gate)
Roadmap and business-goal alignment as the prioritization gate. If it doesn't ladder up to a company goal, it doesn't ship. Sharper tradeoffs, fewer debates, no orphan work.
*Signal:* every initiative ladders to a company KPI by construction

### 03 · Metrics + VOC (ritual)
Metrics review and Voice of the Customer as recurring rituals everyone joins. Bring perspectives, not just consume readouts. Team stays grounded in numbers and user reality at the same cadence.
*Signal:* weekly shared signal

### 04 · AI-Native (multiplier)
AI layered through every workflow:
- Enterprise AI licenses across the team
- **Linear MCP** for AI-driven project management
- AI wireframing for faster design + eng iteration

*Signal:* +50% delivery velocity

### 05 · Ownership (culture)
High ownership as the floor, bias to execution as the ceiling. Decisions get made and shipped, lessons get captured, nothing waits on permission. Owning the outcome, not orchestrating around it.
*Signal:* −30% time-to-market

## Outcomes

| Metric | Value |
|--------|-------|
| Engineering delivery velocity | +50% |
| Time-to-market | −30% |
| PMs hired and coached | 3 (globally) |
| Cumulative business impact | $75M+ across the growth portfolio |
| Partnership cadence | Quarterly with VP of Product on company-level strategy |

## The strategic positioning

> *"You stop shipping the product. You start shipping the system that ships the product."*

The four other case studies on the portfolio (Recurring Buy, Credit Card Cross-Sell, Referrals, Experimentation Platform) are the visible output. The less visible output is that any one of them is now **reproducible by the next PM in the seat** on the rituals and frameworks the org runs on.

## When this case study comes up in an interview

- For Director/VP roles where leadership of a multi-PM team is required — this is the headline case study
- When asked about organizational design, OKR frameworks, or operating cadence
- When asked about AI integration in product workflows
- When asked about hiring/coaching PMs
# Case Study 02 — Recurring Buy at Gemini

**Role:** Associate Director, Growth
**Company:** Gemini
**Window:** 2025
**Team:** 1 PM · 1 Design · 6 Eng · 1 Data · 1 Marketing
**Portfolio URL:** monishsunkuprabhakar.com/recurring-buy
**Companion deep dive:** monishsunkuprabhakar.com/recurring-buy/roi

## Headline

From **0.2% to 10% of MTUs** on a recurring buy — a **50× lift in adoption rate**. Recurring-buy users moved from **600 to 33,000** — a **55× lift in absolute users**. Education-first, ROI-positive by construction.

## Strategic frame

**Strategy type:** Proactive
**Sources of insight:** Strategic Insight · Data Insight

A **proactive** bet. Identified a gap in recurring-revenue-generating users through cohort data, with the strategic opportunity to move the company's north-star KPI: **Monthly Transacting Users**.

## The gap

Gemini's north-star was Monthly Transacting Users (MTU). The team had been pushing on the top of the funnel for a year. Numbers crept up; the shape of the line stayed the same.

A different number was the unlock. Of all monthly transacting users, only **0.2%** had a recurring buy active. The product existed — well-built, well-priced, and almost no one was using it. That was the gap.

## The bet

> *"Recurring buy isn't a feature. It's a habit, and habits don't respond to ads."*

Treat Recurring Buy not as a feature but as a multi-week **growth experience**. Education first, incentive second.

Written hypothesis: replace the conversion-first surface with an education-first one, back it with an ROI-positive incentive, and move from 0.2% to 10% of MTUs within two quarters. A 50× bet.

## The diagnosis — three root causes

0.2% adoption isn't one problem, it's three. Before designing the experience, Monish asked which gap was binding:
- Did users **know** the feature existed? (Awareness)
- Could they **find** it when they wanted it? (Discoverability)
- Could they actually **commit**? (Friction)

**All three were broken. We attacked all three.**

### Pillar 01 · Awareness
**Problem.** Most users didn't know recurring buy existed. The feature lived inside the trade flow.

**Fix.** Dedicated in-app surfaces and an education email arc. Framed around outcomes (what compounding looks like), not features.

→ In-app + email education

### Pillar 02 · Discoverability
**Problem.** The entry point was buried two taps deep, behind a default state that always landed on one-time buys.

**Fix.** Promoted recurring buy to a dedicated card on the home screen — the first surface every user sees on app open. No more hunting.

→ Home-screen card placement

### Pillar 03 · Friction
**Problem.** Setup demanded an amount and asset with no preview of outcomes. Most users didn't see the value.

**Fix.** A calculator built into the commit flow: pick an amount and asset, see what the same plan would have returned over 5 years on real historical prices. Education at the moment of decision, easy commit on the other side.

→ Simulator + one-tap commit

## Experience structure — the two phases shipped

### Phase 01 · Education (3 weeks)
Slider-driven simulator. Pick an amount, pick an asset, see what the same plan would have returned over 5 years on real historical prices. CTA pressure deliberately undersold.

**Result:** 4× conversion lift vs. control

### Phase 02 · Reward (up to 12 months)
If a user hadn't committed, they entered the reward track: payouts at 3-, 6-, and 12-month milestones. Capped at $150 (max realistic $135). Tuned with finance until provably ROI+.

**Result:** 8× conversion lift vs. control

## The numbers — two distinct outcomes

### Fully attributable (direct outputs of the initiative)

| Metric | Before | After | Lift |
|--------|--------|-------|------|
| Recurring-buy adoption | 0.2% | 10% of MTUs | **50× in adoption rate** |
| Recurring-buy users | 600 | 33,000 | **55× in absolute users** |

### Contributed to (one lever among several)

| Metric | Before | After |
|--------|--------|-------|
| MTU base | ~300K | ~330K |

Frame as "contributed to," not "drove" — recurring buy was a retention lever; the base grew over the same period.

### Experimental lifts (causal, A/B vs. control)

| Phase | Cost | Conversion lift vs. control |
|-------|------|----------------------------|
| Education (simulator only) | $0 CAC | **4×** |
| Reward (milestones on top) | ~$24 / user | **8×** |

The reward layer added 2× *incremental* lift on top of education. Half the conversion was narrative, half was money applied surgically at the right milestones.

## The strategic positioning

> *"Recurring buy isn't a feature. It's a habit, and habits don't respond to ads."*

The simulator was the **soul** of the thing — tuned across 11 internal builds. The reward design was the **discipline** — every payout band modeled against retention curves and per-user revenue share.

The deeper ROI math is broken down in the companion appendix: `02a-recurring-buy-roi.md` (or on the portfolio at `/recurring-buy/roi`).

## When this case study comes up in an interview

- Activation, retention, engagement product roles
- Behavior-change product roles
- Anything involving incentive design or reward economics
- When asked about diagnosing low-adoption features
- Fintech / crypto product roles (the autopilot investing context)
# Recurring Buy · ROI Modeling Deep Dive

**Scope:** Unit economics + reward design
**Horizon:** 12 months, transaction fees only
**Result:** 18.7% ROI per enrolled user (the conservative floor)
**Portfolio URL:** monishsunkuprabhakar.com/recurring-buy/roi

## Framework — the rule that gated the program

**Each enrolled user must be profitable on transaction fees alone, within 12 months, with the full incentive loaded as a cost.**

Not LTV. Not MTU retention lift. Not strategic upside. Just one user, one year, fees in minus reward out.

That rule did two things:
1. Forced the model to be defensible to finance on the weakest input set we could justify.
2. Made scale a non-question: ROI is a per-user margin, so if the unit economics work at one user, they work at thirty thousand.

> **Decision rule:** Ship if revenue per enrolled user over 12 months exceeds incentive spend per enrolled user. If profit per user is positive on transaction fees alone, the program is ROI-positive by construction, not by volume.

## The conservative input set

| Input | Value | Why this value |
|-------|-------|----------------|
| MTU base (post-initiative) | 330,000 | Actual achieved base; pre-initiative was ~300K |
| Average monthly buy | $100 | Conservative floor; real users transact in this range and above |
| Fee rate per side | 2.5% | Standard published rate |
| Sell-side multiplier | 1.0× | Both sides of a trade are fee-bearing. Symmetric is conservative-to-neutral |
| Churn per period | 30% | Drawn from the weakest historical cohort, not the average |
| Incentive cap | $150 / user | Hard guardrail; actual expected spend far below |

## The math — per-user unit economics (churn-weighted)

```
Active fraction at each period:
  Active(0–3)   = (1 − 0.30)^1  = 0.70
  Active(4–6)   = (1 − 0.30)^2  = 0.49
  Active(7–12)  = (1 − 0.30)^3  = 0.343

Fee per user-month (both sides combined):
  $100 × 2.5% × 2 sides = $5.00

Revenue per enrolled user (12-mo, churn-weighted):
  Months 0–3:    0.70   × 3 mo × $5.00 = $10.50
  Months 4–6:    0.49   × 3 mo × $5.00 =  $7.35
  Months 7–12:   0.343  × 6 mo × $5.00 = $10.29
  TOTAL REVENUE PER USER             = $28.14

Incentive per enrolled user (churn-weighted milestone payouts):
  3-mo:    0.70   × $15.00 = $10.50
  6-mo:    0.49   × $20.00 =  $9.80
  12-mo:   0.343  × $9.95  =  $3.41
  TOTAL INCENTIVE PER USER          = $23.71

Profit per enrolled user = $28.14 − $23.71 = $4.43
ROI on incentive spend   = $4.43 / $23.71 = 18.7%
```

## The payout structure

### 3- and 6-month milestones (flat)
| Milestone | Per active user | Active fraction | Expected per enrolled |
|-----------|----------------|----------------|----------------------|
| Month 3 | $15.00 | 70% | $10.50 |
| Month 6 | $20.00 | 49% | $9.80 |
| Month 12 | $9.95 (tiered, see below) | 34.3% | $3.41 |
| **TOTAL** | | | **$23.71** |

### 12-month milestone — tiered by engagement
The 12-month milestone is **tiered** to concentrate spend on the highest-LTV cohort. The heaviest users get the largest payout; the long tail gets a small one.

| Engagement tier | % of active 12-mo users | Payout | Contribution to blended |
|-----------------|------------------------|--------|------------------------|
| Top | 1% | $100 | $1.00 |
| High | 10% | $25 | $2.50 |
| Mid | 40% | $10 | $4.00 |
| Long tail | 49% | $5 | $2.45 |
| **Blended** | **100%** | — | **$9.95** |

### Max realistic payout per user
- A user who hits every milestone and lands in the top 12-month tier collects **$15 + $20 + $100 = $135** over the year
- The **$150 cap** sits above that as a hard guardrail against design drift
- The model expects ~$24 per enrolled user; the cap was never approached

## Scenarios — modeled cases vs. what shipped

| Scenario | Conv. lift | Enrolled | Revenue | Incentive | Profit | ROI |
|----------|-----------|----------|---------|-----------|--------|-----|
| Base Case | 2× | 6,000 | $169K | $142K | $27K | 18.7% |
| Upside Case | 4× | 12,000 | $338K | $285K | $53K | 18.7% |
| Result Case | 8× | 24,000 | $675K | $569K | $106K | 18.7% |
| **Actual Shipped** | — | **33,000** | **$929K** | **$782K** | **$146K** | **18.7%** |

### What the table proves
- ROI is identical across every row
- ROI is per-user margin; volume changes profit, not ROI
- **The Base Case still clears.** Even at the conservative 2× conversion-lift scenario, the program was profitable. That made it shippable on math alone, before any belief in upside.

### Actual exceeded Result Case
Shipped result landed at 33,000 enrolled users — above the modeled Result Case of 24,000. The model used a 300K MTU base; actual base grew to 330K over the same window. Per-user economics held; profit scaled with user count.

## In-market validation (the experiments)

| Phase | Cost | Conversion lift vs. control |
|-------|------|----------------------------|
| Education | $0 CAC | 4× (simulator narrative effect only) |
| Reward | ~$24/user | 8× (incremental on top of education) |

The reward layer added 2× incremental lift on top of education. Confirmed the band design: half the conversion was narrative, half was money applied surgically at the right milestones.

## The 18.7% is the floor

The model deliberately ignores everything that makes recurring buy genuinely valuable:
- **LTV beyond month 12** — recurring-buy users transact for years, not one
- **MTU retention lift on the base** — model attributes none of the ~300K → ~330K growth
- **Downstream behavior** — referrals, credit card cross-sell, other product adoption
- **The compounding behavior itself** — every adopter transacts automatically thereafter

**The 18.7% is the worst case. The real return is multiples higher.**

Building the floor model first was deliberate: it took the strategic argument off the table and made the program defensible on math alone.

## What this proved as a reusable artifact

ROI-positive incentive design isn't a guess. It's modeled, and the model has to clear on the most conservative input set you can defend.

The per-user unit-economics framework here — fees only, 12-month horizon, fully-loaded incentive — became the template every retention and activation incentive the growth org has shipped on since. **Same math, different products.**

The version of incentive design worth scaling is the one where you can prove the floor before anyone has to believe in the upside.
# Case Study 03 — Credit Card Cross-Sell at Gemini

**Role:** Associate Director, Growth
**Company:** Gemini
**Window:** 2024
**Team:** 1 PM · 1 Design · 4 Eng · 1 Data
**Portfolio URL:** monishsunkuprabhakar.com/credit-card

## Headline

Grew Gemini's credit card holders from **~1,000 to ~30,000** — a **30× lift**. Not by changing the product, but by moving the cross-sell to **peak intent**: the final step of onboarding, after a user had already crossed the highest-friction barrier on the platform.

## Strategic frame

**Strategy type:** Proactive
**Sources of insight:** User Insight · Data Insight

A **proactive** bet driven by user + data insight. The data showed peak application intent at the **end of onboarding** (right after KYC and funding); user research confirmed surfacing the card there felt like a finishing gift, not an interruption.

## The problem

Gemini's crypto rewards credit card was a strong product on paper: real cashback, clear retention value, a natural fit for the existing user base. It was also invisible. Roughly **1,000** users had it.

The card lived outside the core trading experience. The cross-sell, when it ran, fired in the middle of a session, when the user's mind was on a trade and the card looked like a distraction.

**This was not a product problem. It was a distribution and timing problem.**

## The bet

> *"The card wasn't failing on its merits. It was failing on its moment."*

A user who had just completed identity verification and funded their account had crossed the highest-friction barrier on the platform. They had demonstrated commitment. They had also just experienced the full weight of *setup work* and were maximally receptive to additional value.

Move the cross-sell from mid-session to the **final step of onboarding**. Find peak intent. Test relentlessly into placement, framing, and conversion mechanics until we found the variant that compounded.

## The placement — funnel anchoring

```
Sign up  →  Identity  →  Fund account  →  CROSS-SELL  →  First trade
[low]      [rising]     [committed]      [PEAK INTENT]   [activated]
```

The cross-sell moved to the moment **after** funding (committed) and **before** first trade. The user had paid the friction cost; the marginal commitment to also opt-in for a card felt small.

## The experiment

A/B/n across three axes:
1. **Placement** — mid-session vs. end-of-onboarding
2. **Framing** — rewards-first vs. utility-first vs. portfolio-first
3. **Conversion mechanics** — single-tap apply vs. educational lead-in

### The winning variant
- **End-of-onboarding** placement
- **Rewards-first** framing
- **Single-tap apply** with a lightweight rewards calculator inline

Anything that read like an *interruption* lost. Anything that read like *a finishing gift* won.

## The outcome

| Metric | Before | After | Lift |
|--------|--------|-------|------|
| Card holders | ~1,000 | ~30,000 | **30×** |

The qualitative win was bigger than the quantitative one: card holders became more engaged platform users overall, lifting MTU and contributing to the broader north-star.

## The strategic reframe

Strategically, this rewrote the role of onboarding at Gemini. It stopped being a one-time setup task and became a **multi-product adoption moment**. That framing now anchors how the company thinks about every new product launched into the existing user base.

## When this case study comes up in an interview

- Distribution / placement problems
- Onboarding optimization
- Cross-sell and multi-product adoption
- "How do you decide between fixing a product vs. fixing how it's surfaced?" questions
- Funnel design
# Case Study 04 — Referrals at Gemini

**Role:** Associate Director, Growth
**Company:** Gemini
**Window:** Q4 2023 → ongoing
**Team:** PM · Design · Eng · Data · Legal · Marketing
**Portfolio URL:** monishsunkuprabhakar.com/referrals

## Headline

Built the foundational referral system during crypto winter (late 2023) when paid acquisition collapsed. **$35M+ in directly attributed revenue** since inception. Multi-surface: exchange + credit card. **Best flat payout referral offer in the industry** at $50 standard.

## Strategic frame

**Strategy type:** Reactive
**Sources of insight:** Strategic Insight · Data Insight

A **reactive** bet. With paid acquisition collapsing in crypto winter (CPMs rising, ROAS falling — data signal), used **product-led growth** as the strategic lever to keep the user base growing through the downturn.

## The gap — late 2023

Late 2023 was the trough of **crypto winter**. Trading volumes had collapsed, exchange revenue with them. Across the industry every growth team had its paid budget cut to the bone.

Gemini's acquisition mix was overweighted on paid. CPMs kept rising while ROAS kept falling. The answer wasn't to spend smarter — it was to **build a channel that didn't depend on spend**.

Every healthy consumer fintech had an organic acquisition motion that paid for itself. Gemini didn't. So Monish proposed building one.

## The bet

> *"In a winter market, you don't out-bid. You out-build."*

The thesis: every existing user is a latent distribution channel. In a market where you can't outbid Meta or Google, the cheapest user is the one your users *bring you*.

Framed referrals as **performance-based CAC paid to users**, not a marketing campaign. The economics had to be ROI-positive on a per-referral basis from day one. No incentive paid out unless the referred user generated real, qualified revenue: a funded trade or an approved card.

And it had to be **infrastructure, not a one-off promotion** — a foundational system Gemini could compound on for years.

## Evolution

### v1 · Foundational (Q4 2023)
- Built the foundational referral system on the core exchange surface
- $50 reward, paid only when the referee completed a qualifying trade
- Tracking, attribution, payouts, and abuse controls all designed once, designed to last

### v2 · Multi-surface
- Extended the system to the credit card surface
- Same $50, same referrer, new qualifying event: an approved card
- Reused the v1 plumbing rather than rebuilding — what made the multi-surface story possible at all

### Ongoing · Tuning
- Reward economics, eligibility windows, and abuse controls re-tuned as market dynamics shift
- Paid acquisition appetite returns and recedes; the referral channel keeps compounding underneath

## Latest proof point — $75 Limited-Time Offer (recent campaign)

Tested an elevated $75 flat payout to see how the foundational system would respond to a sharper incentive. **In under a month**, the offer drove:

### Absolute totals
| Metric | Total |
|--------|-------|
| New accounts | 13,580 (~522/day) |
| Unique referrers | 4,619 (avg 3 referrals each) |
| First-time trades (FTTs) | 7,850 |
| Qualified for bonus | 6,675 (~302/day) — traded $100+ to qualify |

### vs. 2024 baseline
| Daily rate | 2024 baseline | $75 LTO (30 days) | Lift |
|-----------|---------------|-------------------|------|
| New accounts / day | 33 | 522 | **16×** |
| Qualified FTTs / day | 11 | 302 | **27×** |
| Qualification rate | 25% | 49.2% | **~2×** |

### Important caveats
- **Numbers are still moving.** Referred users have a 30-day window to complete the trading requirement and qualify for payout, so the qualified count keeps rising past the offer end.
- **Tracking revenue cohort-over-cohort** to confirm profitability before testing further high-value offers.
- **Standard reward transitions back to $50** — still the best flat payout referral in the industry.

## Outcomes

| Metric | Value |
|--------|-------|
| Direct revenue attribution (cumulative) | $35M+ since inception |
| Surfaces | 2 (Exchange + Credit Card) |
| Standard reward | $50 |
| Operating duration | Q4 2023 → ongoing |
| Industry positioning | Best flat payout referral offer in industry |

## The strategic positioning

> *"Built the channel paid couldn't buy."*

We came out of crypto winter with a **permanent organic channel** sitting alongside paid, sized large enough to matter, and architected to extend to whatever surface Gemini launches next.

The credit card extension was the proof: the system was **infrastructure, not a campaign**.

## When this case study comes up in an interview

- Growth marketing / acquisition channel building
- Crypto/fintech context
- "Tell me about a time you built something during a downturn" behaviorals
- Channel diversification questions
- Infrastructure-vs-feature decisions
- Multi-surface platform thinking
# Case Study 05 — Experimentation Platform at Gemini

**Role:** Lead PM
**Company:** Gemini
**Window:** 2022 (pre-AI era)
**Team:** 1 Lead PM + 3 Engineers (4 total)
**Duration:** 6 months to ship
**Portfolio URL:** monishsunkuprabhakar.com/experimentation-platform

## Headline

Killed a **$500K Optimizely contract** — a quarter of total IT budget — with an in-house **API-first** platform that did what the vendor structurally couldn't: connect experiments directly to our data lake. **10× experiment velocity** (1–2 per month → tens per month). Pays for itself on maintenance and infra alone, every year.

## Strategic frame

**Strategy type:** Proactive
**Sources of insight:** Strategic Insight · Data Insight

A **proactive** cost-cutting bet on a **$500K** under-utilized vendor (data signal), backed by the strategic insight that connecting experiments to **customer-360 data** would unlock the value Optimizely structurally couldn't deliver.

## The gap

Gemini was paying Optimizely roughly **$500K** a year, about **a quarter of total IT budget**, for a platform doing the basics of experimentation: feature flags, A/B splits, a UI to spin up tests.

The fatal limitation wasn't price. It was that the vendor lived outside our data perimeter. Exposure events couldn't join cleanly to our Snowflake tables. Real impact analysis — the part that turns experiments into compounding learning — was effectively out of reach.

So we were paying premium price for the *cheapest* half of the value: running tests. The expensive half — *understanding* them — was on us to build anyway.

## The bet

> *"Build vs. buy isn't a debate when the vendor can't see your data."*

Make the case to build it ourselves. Even modest savings against a $500K contract paid back the team in year one. The product case was the harder argument, and the more important one.

Thesis: an in-house platform, **API-first**, would do everything Optimizely did at parity uptime, and add the one thing it structurally couldn't: exposure events flowing directly into our data lake, joined to every other source we already had in Snowflake.

**Discipline was the whole strategy.** 4 domains, no scope creep. Features, experiments, attributes, audiences. A clean OpenAPI spec for each. Anything outside those four was a no.

## Build vs. buy comparison

### Optimizely ($500K/yr)
- Feature flags, A/B splits, UI
- Vendor-side analytics, walled off from our data
- Exposure events stranded outside Snowflake
- 1–2 experiments per month, ceiling enforced by analysis cost
- 1/4 of total IT budget, every year

### In-House Platform (infra only)
- Same flags, splits, audiences, plus 4 clean API domains
- **Exposure logging into Kinesis → Snowflake**, joined to everything
- Looker dashboards on real exposed-user cohorts
- Tens of experiments per month, self-service
- Pays for itself in year one, compounds after

## Execution — 3 phases, no scope creep

### Phase 01 · Replace (Match)
Stand up the four API domains and the portal. Hit feature parity with what teams were already using on Optimizely. Match uptime. Cut nothing.

*Result: Parity on day one*

### Phase 02 · Exceed (Differentiate)
Wire exposure logging from the frontends into Kinesis, on into Snowflake. Looker on top. Every experiment now joins back to every other source of truth we own.

*Result: Δ vs. vendor capability — exposure events now joinable to all data*

### Phase 03 · Compound (Scale)
Self-service rollout. Teams spin up experiments without PM or infra bottlenecks. Velocity compounds. Platform earns its keep on capability, not just savings.

*Result: 10× monthly experiment count*

## Technical architecture (high level)

### Application
- **Play Framework Scala** application — HTTP CRUD with strong OpenAPI spec
- Endpoints divided by domain: `features`, `experiments`, `attributes`, `audiences`

### Storage + serving
- **DynamoDB** for entities (features, experiments, attributes, audiences) + JSON config snapshot
- **S3 + CloudFront** for the JSON config endpoint (publicly available)
- Timestamped older versions retained for restoration

### Pipeline
- **Kinesis Data Streams** ingesting exposure events, segmented by user ID
- **Kinesis Firehose** transforming and loading into the data lake
- **Snowflake** as the data lake
- **Looker** for analysis dashboards, pulling in Mixpanel + SQL DBs alongside

### Infrastructure
- Artifactory (Docker images) → Jenkins (compose + publish) → Harness (deployment heartbeat) → Kubernetes (auto-scaling)
- Frontend: S3 with VPC endpoint, ALB termination, private DNS — secure-by-default
- Custom CI/CD for FE: PR → tests → S3 on merge

## Outcomes

| Metric | Value |
|--------|-------|
| Experiment velocity | 1–2/month → tens/month (**10×**) |
| Budget impact | $500K vendor → infra-only run-rate (**~$X savings**) |
| Team size | 4 people (1 Lead PM + 3 Eng) |
| API domains | 4 (features, experiments, attributes, audiences) |
| Uptime | Matched the vendor |
| Status | Shipped, self-funding, still operating |

## The strategic positioning

> *"Strategically, this is a clean case study of the build vs. buy decision. The rule: build when both impact and total cost of ownership beat the buy alternative. Both held here — capability the vendor structurally couldn't deliver, at a TCO well below the contract it replaced."*

## When this case study comes up in an interview

- Build-vs-buy decisions
- Platform/infrastructure PM roles
- Lead PM scope (small team, big problem)
- Scope-discipline questions ("how do you avoid scope creep?")
- API-first / platform thinking
- Cost-optimization stories
- Cross-functional pre-AI execution
# Earlier Work — Pre-Gemini Career

Compact summaries of the three pre-Gemini roles. These support the positioning of "product-minded leader who came up through engineering."

---

## Whisper AI

**Role:** Director of Product
**Window:** August 2020 → September 2021
**Company:** AI-powered hearing aid startup (acquired by Meta in 2023)
**Size:** 60-person startup, sole PM
**Location:** San Francisco, CA

### What he owned
Built the entire product function from scratch — no prior PM infrastructure, processes, or product discipline. Owned product strategy and delivery timelines that directly gated the commercial motion.

### Headline accomplishments
- Built and defined the operating model, development workflow, and product standards the entire org operated against
- Led a 6-person cross-functional team (firmware, testing, engineering)
- Replaced manual testing processes with an **end-to-end testing product**
  - **4× iteration speed** improvement
  - **33% OpEx savings** annually
- Accelerated validation timelines — a key driver of readiness behind Whisper's acquisition by Meta

### Why this matters
The acquisition by Meta was the strategic outcome. The internal capability he built (the testing platform) was the operational enabler. Without faster iteration cycles, the product wouldn't have been audit-ready for a Meta deal.

### When this comes up
- AI/ML product roles
- Hardware × software integration
- Startup acquisitions
- Building product function from zero
- "Tell me about a time you were the only PM" behaviorals

---

## Ample

**Role:** Director of Product (promoted from generalist)
**Window:** September 2018 → August 2020
**Company:** EV battery-swapping startup, Series B/C
**Size:** Joined sub-10 employees; promoted to Director as company scaled to 100
**Location:** San Francisco, CA

### What he owned
First product hire at a pre-Series A startup with no product function, no roadmap process, and no PM infrastructure. Player-coached a 6-person cross-functional team (mechanical, electrical, testing engineers) as sole PM across hardware, software, and go-to-market tradeoffs.

### Headline accomplishments
- Productized a **computer vision system** (neural network image classification + 3D point cloud) to automate robotic battery swap localization
  - Improved reliability **from 50% to 100% at GA**
- Achieved a **sub-10-minute battery swap** validated in production with **40 live Uber vehicles**
- Enabled the Uber partnership and directly contributed to Series B and Series C fundraising

### Why this matters
Hardware × software × deployment × commercial partnership — all four had to work. The CV reliability improvement is what turned a demo into a deployable system; the Uber 40-car deployment is what made it a fundable story.

### When this comes up
- Hardware product roles
- Computer vision / ML productization
- Early-stage / Series A-B-C product leadership
- "How do you operate when nothing is defined" behaviorals
- Mobility / EV / transportation product roles

---

## Seagate Technology

**Role:** Started as firmware engineer, promoted to Technical Product Lead
**Window:** January 2011 → September 2018 (7+ years)
**Company:** Global data storage company
**Customers:** Google, Microsoft (hyperscale data center)
**Location:** Boulder, CO

### What he owned
Began as a firmware engineer and was promoted to Technical Product Lead. Owned cross-functional delivery across engineering and hyperscale customers. Led Seagate's engagement with Google and Microsoft on $1B+ multi-year hyperscale storage programs.

### Headline accomplishments
- Owned hyperscale storage programs end-to-end, leading a **12-person cross-functional team across the US, Thailand, and Singapore**
- Translated hyperscale requirements into roadmaps deployed across global cloud infrastructure
- Defined performance requirements for next-generation storage products — engineering specifications across **multiple billion-dollar products**
- Built a hyperscale storage product framework from scratch where no standard existed
  - Preserved the contracts
  - Established a new benchmark adopted across enterprise clients
  - Led to a **U.S. Patent award (#20170220264)** — Zone Forward Management
- Led hyperscale data center software development that reduced **client total cost of ownership by $50M/year**

### Why this matters
This is the **engineering depth** anchor of the positioning. Firmware engineer → Technical Product Lead → patent → $50M/yr customer impact. It's the credential that makes "came up through engineering" not just a phrase.

### When this comes up
- "Tell me about your technical background"
- Data infrastructure / storage product roles
- Hyperscale / cloud product roles
- Patent / innovation discussions
- Long-tenure roles ("how did you grow over 7 years")
# Reusable Frameworks

The transferable PM thinking that emerges across the case studies. These are useful answers to behavioral and "how do you approach X" interview questions, and they're the substance behind why the case studies worked.

---

## 1. Five Operating Principles (Growth Org)

**Context:** The operating system Monish built for Gemini's growth product organization.
**Origin case study:** `01-growth-org.md`

| # | Principle | One-line |
|---|-----------|----------|
| 01 | **Experimentation as default** | Every initiative runs as an experiment. Clear hypothesis upfront, PM owns the dashboard end-to-end. |
| 02 | **Goal alignment as gate** | If it doesn't ladder up to a company goal, it doesn't ship. Prioritization without debate. |
| 03 | **Metrics + VOC rituals** | Weekly metrics review + Voice of Customer. Everyone participates. Team stays grounded. |
| 04 | **AI-native multiplier** | Enterprise licenses, Linear MCP for AI-driven project mgmt, AI wireframing. +50% delivery velocity. |
| 05 | **Ownership culture** | Bias to execution. Decisions get made and shipped. No re-litigation. |

**The thesis:** *Frameworks before people. Without an operating system, hiring just multiplies the chaos.*

**Apply to interview questions:**
- "How would you build a product org from scratch?"
- "What's your management philosophy?"
- "How do you scale a team?"
- "Walk me through a typical week"

---

## 2. Awareness → Discoverability → Friction (A/D/F)

**Context:** Diagnostic framework for low-adoption features.
**Origin case study:** `02-recurring-buy.md` (Recurring Buy at Gemini)

When adoption is low, it's rarely one problem. It's some combination of three:

| Pillar | The question | The fix pattern |
|--------|--------------|-----------------|
| **Awareness** | Do users **know** the feature exists? | Surface it: in-app messaging, email, education arc. Frame around outcomes, not features. |
| **Discoverability** | Can users **find** it when they want it? | Move it: prominent placement, home-screen card, default-state changes. |
| **Friction** | Can users **commit** once they get there? | Reduce or convert friction into value: simulators, calculators, education-at-decision-point. |

**The rule:** *0.2% adoption isn't one problem, it's three. Diagnose which gap is binding before designing the experience.*

**At Gemini specifically — Recurring Buy:**
- Awareness fix → dedicated in-app surfaces + education email arc
- Discoverability fix → promoted to home-screen card
- Friction fix → simulator built into commit flow (5-year historical returns calculator)

**Apply to interview questions:**
- "We have a feature with low adoption. How would you diagnose?"
- "How do you decide between marketing the feature vs. changing it?"
- "Walk me through how you'd think about [X feature] adoption."

---

## 3. Build vs. Buy Decision Rule

**Context:** Strategic decision framework for vendor replacement.
**Origin case study:** `05-experimentation-platform.md` (Experimentation Platform at Gemini)

> **Build when both impact and total cost of ownership beat the buy alternative.**

Both clauses must hold:
1. **Impact** — Can you build something the vendor structurally can't deliver? (e.g., capability beyond the vendor's reach)
2. **Total cost of ownership** — Is your run-rate (build cost amortized + maintenance + infra) materially below the vendor contract?

If only one holds, you're either building a worse vendor or paying more for parity. If both hold, you have a defensible build.

**At Gemini specifically — Experimentation Platform:**
- Impact: ✓ — Optimizely structurally couldn't join exposure events to Snowflake data
- TCO: ✓ — In-house run-rate was a fraction of $500K/yr Optimizely contract
- Verdict: Build. Both held.

**Apply to interview questions:**
- "When have you decided to build vs. buy?"
- "How do you justify in-house infrastructure investments?"
- "When have you killed a vendor relationship?"

---

## 4. Conservative-Input Modeling (ROI Floor)

**Context:** How to model program economics so finance can't haggle.
**Origin case study:** `02a-recurring-buy-roi.md` (Recurring Buy ROI)

> **Build the floor model first. Take the strategic argument off the table by making the program defensible on math alone.**

The discipline:
1. **Pick every input at its weakest defensible value** — weakest historical cohort for churn, conservative floor for revenue, etc.
2. **Truncate the model at a short horizon** — e.g., 12 months, ignore LTV
3. **Load every cost fully** — incentive treated as full payout, no discount
4. **If the program clears ROI under these assumptions, ship it** — anything you ignored is real upside on top

The strategic effect: when finance asks "what if X is worse?" you can say "the model already assumes X is worse than reality."

**At Gemini specifically — Recurring Buy:**
- 30% churn per period (weakest cohort)
- $100/mo buy (floor)
- 12-month horizon (ignored LTV)
- Full incentive loaded as cost
- Result: 18.7% per-user ROI as the floor. Real return multiples higher.

**Apply to interview questions:**
- "How did you build the business case?"
- "How do you defend an investment to finance?"
- "Walk me through your unit economics work"

---

## 5. ROI-Positive by Construction (Per-User Margin)

**Context:** Why per-user margin economics matters more than aggregate ROI.
**Origin case study:** `02a-recurring-buy-roi.md`

> **If ROI is a per-user margin, volume changes profit but never ROI. The bet doesn't depend on scale.**

The point: when you can prove unit economics clear at the per-user level, scale becomes risk-free. You don't need a volume bet to justify shipping. Each user pays back on their own; scale just multiplies a positive number.

The downstream effect: the program is shippable at any forecasted adoption level — Base Case, Upside Case, or actual. The Base Case still clears.

**At Gemini specifically:**
- Per-user ROI = 18.7% (constant)
- Modeled at 6,000 / 12,000 / 24,000 / 33,000 enrolled users
- ROI identical across every row of the scenario table

**Apply to interview questions:**
- "How do you de-risk a large investment?"
- "How do you think about unit economics?"
- "How do you model uncertainty in adoption forecasts?"

---

## 6. Distribution vs. Product Problem

**Context:** Diagnostic for stalled product success.
**Origin case study:** `03-credit-card-cross-sell.md` (Credit Card Cross-Sell)

> **The card wasn't failing on its merits. It was failing on its moment.**

A strong product with weak adoption is usually a **distribution problem, not a product problem**. The fix isn't to change the product; it's to move where, when, or how it's surfaced.

The diagnostic:
- Is the product genuinely good? (Does it retain users who do adopt?)
- Is it positioned at peak intent? (Where in the user journey is it surfaced?)
- Does the surfacing read like value or interruption?

If the product is good but adoption is bad, the answer is almost always **move the moment**.

**At Gemini specifically — Credit Card:**
- Strong product (real cashback, retention value)
- Surfaced mid-session as an interruption
- Moved to end-of-onboarding (peak intent) → 30× growth

**Apply to interview questions:**
- "How do you decide if a feature needs more marketing vs. a redesign?"
- "Tell me about a time you didn't change the product but the metric still moved"
- "Distribution vs. product debates — how do you resolve them?"

---

## 7. Infrastructure vs. Campaign

**Context:** When to build a system vs. run a one-off.
**Origin case study:** `04-referrals.md` (Referrals at Gemini)

> **A referral program shouldn't be a campaign. It should be infrastructure other campaigns run on.**

The trade-off:
- **Campaign:** ships fast, generates one batch of results, dies. Each next campaign starts from zero.
- **Infrastructure:** takes longer to ship, but every future campaign reuses the plumbing. Compounds.

Build infrastructure when:
- The motion will run repeatedly (acquisition, retention, referrals)
- Multiple surfaces or products will use it
- The metric is one you'll be optimizing for years

**At Gemini specifically — Referrals:**
- v1 (exchange): foundational system, designed for reuse
- v2 (credit card): reused the plumbing, slotted into new surface with minimal work
- $75 LTO: just a configuration change on existing rails, drove 16-27× lift

**Apply to interview questions:**
- "When have you chosen to build infrastructure vs. ship faster?"
- "How do you decide between fast vs. durable?"
- "Tell me about a time you compounded returns"
# Voice, Tone, and Positioning

The way Monish frames his work matters as much as the work itself. This file captures the deliberate choices made about voice, the recurring phrases that have earned their place, and the things to *not* claim.

## Core positioning

> **Product-minded leader who came up through engineering — not an engineer who switched to product.**

This framing matters because the senior PM market reads "ex-engineer" as either:
- (a) tech-strong but business-weak, or
- (b) a leader who can speak Engineering, Product, and Business equally

The framing puts Monish in bucket (b). Three-way fluency: Product · Business · Tech.

## Voice principles

### Specific over abstract
- ❌ "Helped scale a fintech platform significantly"
- ✓ "Helped scale a fintech platform from 300K to 600K MAUs"

### Quantified over qualitative
Every claim has a number. If there's no number, it's a positioning line, not a claim.

### Attribution clear
- ✓ "Fully attributable: 0.2% → 10% of MTUs (50× lift)"
- ✓ "Contributed to: MTU base 300K → 330K"
- ❌ "Drove MTU growth" (when it was one lever among several)

The discipline: *fully attributable* vs. *contributed to*. Don't blur the line.

### Conservative on numbers
- 8× conversion lift, not 8.4×
- $35M+, not $40M
- "~3 referrals per referrer on average"
- "in under 30 days," not "in 28 days"

The pattern: round defensibly down. Recruiters and HMs can math-check; soft rounding builds trust.

### Engineering depth visible, not bragged
- ✓ "Started as firmware engineer at Seagate, promoted to Technical Product Lead"
- ✓ "U.S. Patent #20170220264 (Hyperscale Storage)"
- ❌ "Deep technical skills"

The depth speaks for itself when the artifacts are visible (the patent number, the firmware origin, the API-first platform). Bragging undercuts it.

## Recurring pull quotes (earned)

These have shown their value on the portfolio. They're the line a recruiter remembers and texts to a colleague.

### Growth Org
> *"Without an operating system, hiring just multiplies the chaos."*

> *"You stop shipping the product. You start shipping the system that ships the product."*

### Recurring Buy
> *"Recurring buy isn't a feature. It's a habit, and habits don't respond to ads."*

> *"0.2% adoption isn't one problem, it's three."*

### Recurring Buy ROI
> *"ROI-positive by construction. Not by scale."*

> *"The version of incentive design worth scaling is the one where you can prove the floor before anyone has to believe in the upside."*

### Credit Card
> *"The card wasn't failing on its merits. It was failing on its moment."*

> *"A distribution problem, solved."*

### Referrals
> *"In a winter market, you don't out-bid. You out-build."*

> *"Built the channel paid couldn't buy."*

### Experimentation Platform
> *"Build vs. buy isn't a debate when the vendor can't see your data."*

## Things to NOT claim

### Don't blur attribution
- The $30K MTU base growth (300K → 330K) was *contributed to* by Recurring Buy, among other levers. Not "drove."
- The Whisper acquisition by Meta was *enabled* by faster iteration cycles. Not "caused."

### Don't conflate metrics
- 50× is the adoption *rate* lift (0.2% → 10%)
- 55× is the *absolute users* lift (600 → 33,000)
- Don't use them in the same sentence — pick one framing per claim.

### Don't oversell team size
- Recurring Buy team: 1 PM + 1 design + 6 eng + 1 data + 1 mktg (10 people)
- Experimentation Platform team: 1 Lead PM + 3 eng (4 people)
- Credit Card team: 1 PM + 1 design + 4 eng + 1 data (7 people)

Each is small, on purpose. Don't pad.

### Don't claim things outside the model
- Recurring Buy ROI of 18.7% is *floor* on fees only. Don't claim "100% ROI" because LTV beats it — that's the upside, not the floor.

### Don't reference real-world competitor analysis or roadmap items
- Anything about Coinbase's product, Robinhood's positioning, etc. — not on the portfolio
- Anything about future Gemini roadmap items — not on the portfolio
- Stick to *shipped, measured, attributable* work.

## Style notes

### No em-dashes
Removed from the entire portfolio. Use commas, periods, or colons instead.

### Hyphenated terms stay together
"out-bid," "out-build," "build-vs-buy" — use `white-space: nowrap` so they don't break across lines.

### MTU vs. MAU
- MTU = Monthly Transacting Users (the Gemini-specific north-star)
- MAU = Monthly Active Users (the broader platform user base)
- Be precise. Don't substitute.

### Numbers formatting
- $35M+ (not $35M or $35,000,000)
- 30× (× character, not 'x')
- 0.2% (not .2%)
- 18.7% (not ~19%)
- 13,580 (comma)
- ~$24 / user (tilde for "approximately")

### Section flow on case study pages
The narrative arc is consistent across case studies:
1. **THE GAP** (symptom)
2. **PULL QUOTE** (insight)
3. **THE BET** (strategy)
4. **DIAGNOSIS / PILLARS** (root causes, if applicable)
5. **PHASES / EXECUTION** (what shipped)
6. **EXPERIENCE / DEPTH** (the discipline, if applicable)
7. **THE OUTCOME** (results)
8. **GO DEEPER** (link to appendix, if applicable)
9. **NEXT** (link to next case)

## When in doubt

- Use a number. If you don't have one, don't make the claim.
- Be specific about what was attributable vs. contributed.
- Cut the qualifier. If it's not load-bearing, it's noise.
- Defer to email contact for anything that needs Monish's voice directly.
