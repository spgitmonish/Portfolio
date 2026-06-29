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
