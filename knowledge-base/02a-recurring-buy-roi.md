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
