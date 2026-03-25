---
description: Analyze churn patterns and generate retention strategies
allowed-tools: Read, Write, Edit, Bash
---

Perform a comprehensive churn analysis for the user's SaaS business.

Gather the following context from the user if not already provided:
- Current churn rate (monthly and/or annual)
- Customer segments or cohorts
- Available data (CSV files, spreadsheets, or manual input)
- Business model (B2B, B2C, usage-based, seat-based)
- Known churn reasons if any

Then deliver a structured churn analysis:

## 1. Churn Rate Calculation
Calculate and present gross churn, net churn, revenue churn, and logo churn. Show the math clearly.

## 2. Cohort Analysis
Build a cohort retention table showing:
- Monthly retention by signup cohort
- Identify which cohorts retain best and worst
- Highlight the critical "aha moment" window

## 3. Churn Risk Signals
Identify leading indicators of churn:
- Usage decline patterns
- Support ticket escalation
- Feature adoption gaps
- Engagement score drops
- Payment failures

## 4. Retention Strategy Recommendations
Provide 5-8 specific, actionable retention strategies ranked by expected impact and implementation effort. Each strategy should include:
- What to do
- Why it works (cite SaaS benchmarks where relevant)
- Implementation timeline
- Expected impact on churn rate

## 5. Financial Impact Model
Calculate the revenue impact of reducing churn by 1%, 3%, and 5% over 12 months.

If the user provides data files, analyze them using Python (pandas) to generate actual cohort tables and visualizations. Save any charts or reports as files the user can download.
