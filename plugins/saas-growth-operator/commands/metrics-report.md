---
description: Generate a SaaS metrics dashboard and health report
allowed-tools: Read, Write, Edit, Bash
---

Generate a comprehensive SaaS metrics report.

Gather the user's data:
- MRR/ARR figures (current and historical if available)
- Customer count and growth rate
- Churn and expansion data
- CAC and marketing spend
- Sales cycle data

If the user provides CSV/spreadsheet data, analyze it programmatically with Python.

Deliver:

## 1. Revenue Metrics
- MRR and ARR (current, MoM growth, trend)
- MRR breakdown: New, Expansion, Contraction, Churned
- Net MRR growth rate
- Revenue run rate and forecast

## 2. Unit Economics
- LTV (Lifetime Value) by segment
- CAC (Customer Acquisition Cost) by channel
- LTV:CAC ratio (benchmark: >3:1)
- CAC payback period (benchmark: <12 months)
- Gross margin

## 3. Growth Efficiency
- Burn multiple
- Magic number
- Net Revenue Retention (NRR) — benchmark: >100%, elite: >130%
- Quick ratio (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR)

## 4. Customer Health
- Logo retention rate
- Revenue retention rate
- Expansion revenue %
- Customer concentration risk (top 10 customers as % of revenue)

## 5. Benchmarking
Compare all metrics against SaaS benchmarks for the user's stage:
- Pre-seed / Seed
- Series A
- Series B+
- Scale-up

## 6. Action Items
Identify the top 3-5 metrics that need attention and specific actions to improve each.

If data was provided, create visualizations (charts, tables) and save them as an HTML dashboard or report file.
