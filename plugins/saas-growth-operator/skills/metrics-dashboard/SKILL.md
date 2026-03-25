---
name: metrics-dashboard
description: >
  Track and report on essential SaaS metrics including MRR, ARR, LTV, CAC, NRR, and growth efficiency ratios. This skill should be used when the user asks about "MRR", "ARR", "monthly recurring revenue", "annual recurring revenue", "LTV", "lifetime value", "CAC", "customer acquisition cost", "NRR", "net revenue retention", "SaaS metrics", "SaaS dashboard", "metrics report", "burn multiple", "magic number", "quick ratio", "unit economics", "revenue growth", or needs help calculating, tracking, interpreting, or presenting SaaS business metrics. Also trigger for investor reporting, board deck metrics, or fundraising metrics preparation.
---

# SaaS Metrics Dashboard

Calculate, interpret, and report on the metrics that matter for SaaS businesses.

## Tier 1: Revenue Metrics

### MRR (Monthly Recurring Revenue)
The heartbeat of any SaaS business.

**MRR Components:**
- **New MRR**: Revenue from new customers this month
- **Expansion MRR**: Revenue increase from existing customers (upgrades, add-ons, seat additions)
- **Contraction MRR**: Revenue decrease from existing customers (downgrades)
- **Churned MRR**: Revenue lost from cancelled customers
- **Net New MRR** = New + Expansion - Contraction - Churned

**ARR** = MRR × 12 (simple annualization for reporting purposes)

### MRR Growth Rate
- MoM Growth = (Current MRR - Previous MRR) / Previous MRR
- Benchmarks: 10-20% MoM for early stage, 5-10% for growth stage, 2-5% for scale

### Revenue Run Rate
- Current MRR × 12
- Use cautiously — only meaningful with stable or growing MRR

## Tier 2: Unit Economics

### LTV (Customer Lifetime Value)
- **Simple**: ARPA × Gross Margin % / Monthly Churn Rate
- **ARPA** = Average Revenue Per Account = MRR / Active Customers
- Example: $200 ARPA × 80% margin / 3% churn = $5,333 LTV

### CAC (Customer Acquisition Cost)
- Total Sales & Marketing Spend / New Customers Acquired (in same period)
- Include: salaries, tools, ad spend, events, commissions
- Calculate by channel for optimization

### LTV:CAC Ratio
- **Target: >3:1** (payback in < 1/3 of lifetime)
- **<1:1**: Losing money on every customer — unsustainable
- **1-3:1**: Viable but tight; optimize CAC or improve retention
- **>5:1**: May be underinvesting in growth

### CAC Payback Period
- CAC / (ARPA × Gross Margin %)
- Benchmark: <12 months for venture-backed, <18 months for bootstrapped
- <6 months indicates efficient growth engine

## Tier 3: Retention & Expansion

### Net Revenue Retention (NRR)
The single most important SaaS metric for long-term viability.

- NRR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR
- **>100%**: Growing from existing customers alone
- **>120%**: Strong — typical of best-in-class B2B SaaS
- **>130%**: Elite — land-and-expand working exceptionally well
- **<100%**: Leaking revenue — must fix before scaling acquisition

### Gross Revenue Retention (GRR)
- GRR = (Starting MRR - Contraction - Churn) / Starting MRR
- Maximum is 100% (no expansion included)
- **>90%**: Healthy
- **>95%**: Excellent
- If GRR is low but NRR is high, expansion is masking a retention problem

## Tier 4: Growth Efficiency

### Burn Multiple
- Net Burn / Net New ARR
- **<1x**: Exceptional efficiency
- **1-1.5x**: Great
- **1.5-2x**: Good
- **>2x**: Investigate — spending too much relative to growth

### Magic Number
- Net New ARR (quarter) / Sales & Marketing Spend (previous quarter)
- **>1.0**: Efficient — invest more in S&M
- **0.5-1.0**: Acceptable — optimize before scaling
- **<0.5**: Inefficient — fix unit economics

### SaaS Quick Ratio
- (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR)
- **>4**: Very healthy growth
- **2-4**: Good but watch churn
- **<2**: Growth is struggling against churn

For detailed metrics guides and benchmarking data, read `references/saas-metrics-guide.md`.

## Output Guidelines

When producing metrics reports:
- Always show the formula used for each calculation
- Include benchmarks for the company's stage
- Highlight metrics that are above or below benchmark
- Show MoM and QoQ trends when data is available
- Visualize with charts when data is provided
- Flag contradictions (e.g., high NRR but low GRR)
- End with prioritized action items tied to specific metrics
