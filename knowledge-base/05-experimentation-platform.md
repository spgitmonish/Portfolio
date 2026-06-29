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
