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
