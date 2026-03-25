---
name: churn-analyzer
description: >
  Analyze SaaS customer churn with cohort analysis, churn prediction models, and retention strategy frameworks. This skill should be used when the user asks about "churn rate", "customer retention", "why customers leave", "reduce churn", "cohort analysis", "retention strategy", "customer lifetime", "churn prediction", "logo churn", "revenue churn", "net retention", or needs help understanding and reducing customer attrition in a SaaS business. Also trigger when discussing renewal rates, customer health scores, or win-back campaigns.
---

# Churn Analyzer

Provide expert-level churn analysis and retention strategy for SaaS businesses.

## Core Analytical Framework

### Churn Metrics Taxonomy

Calculate and distinguish between these churn types — they tell very different stories:

**Logo (Customer) Churn**
- Formula: Customers lost in period / Customers at start of period
- Benchmarks by segment:
  - SMB: 3-5% monthly is common, <2% is excellent
  - Mid-market: 1-2% monthly, <1% excellent
  - Enterprise: <0.5% monthly, <5% annually is strong

**Gross Revenue Churn (GRC)**
- Formula: MRR lost from downgrades + cancellations / Starting MRR
- Healthy: <2% monthly for SMB, <1% for mid-market/enterprise

**Net Revenue Retention (NRR)**
- Formula: (Starting MRR + Expansion - Contraction - Churn) / Starting MRR
- This is the single most important SaaS health metric
- Benchmarks: >100% means growing without new customers, >120% is strong, >130% is elite

### Cohort Analysis Methodology

Build cohort tables with this approach:

1. **Define cohorts** by signup month (or other meaningful grouping like acquisition channel, plan type, company size)
2. **Track retention** at Month 1, 2, 3, 6, 12 intervals
3. **Identify patterns**:
   - Steep early drop-off → onboarding problem
   - Steady decline → value delivery problem
   - Cliff at specific month → may correlate with contract terms
   - Improving recent cohorts → product/process improvements working

4. **Segment analysis**: Break cohorts by plan tier, company size, acquisition channel, use case to find natural retention segments

### Churn Prediction Signals

Identify these leading indicators (typically 30-90 days before churn):

- **Usage decline**: >30% drop in core feature usage over 2 weeks
- **Login frequency drop**: Shift from daily to weekly, or weekly to monthly
- **Feature breadth decrease**: Using fewer features over time
- **Support pattern change**: Either surge in tickets (frustration) or zero engagement (abandonment)
- **Champion departure**: Key user/buyer leaves the customer's org
- **Payment failures**: Failed charges, downgrade requests
- **Competitive research signals**: Visiting competitor pages, asking about data export

### Retention Strategy Frameworks

For detailed frameworks and playbooks, read `references/churn-frameworks.md`.

**Quick-impact strategies** (implement in <2 weeks):
- Automated health score alerts
- At-risk customer outreach sequences
- Payment failure recovery (dunning) optimization
- Exit survey implementation

**Medium-term strategies** (2-8 weeks):
- Customer success program design
- Quarterly business reviews for key accounts
- Feature adoption campaigns
- Community building

**Strategic initiatives** (8+ weeks):
- Product-led retention features
- Customer education program
- Multi-product stickiness
- Annual contract incentives

## Financial Impact Modeling

Always quantify the revenue impact of churn improvements:

**Revenue saved formula:**
Revenue Impact = Current MRR × Current Churn Rate × Reduction % × 12

Example: $500K MRR × 5% monthly churn × 20% reduction = $60K/year saved, compounding

**LTV impact:** A 1% improvement in monthly retention can increase LTV by 10-20% depending on current rate.

## Output Guidelines

When producing churn analysis:
- Always include both logo and revenue churn
- Show trends, not just snapshots
- Benchmark against relevant stage/segment
- Prioritize recommendations by impact × ease
- Include financial impact estimates for top recommendations
- If data is provided, generate visualizations using Python
