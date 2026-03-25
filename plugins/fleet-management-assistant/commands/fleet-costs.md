---
description: Analyze fleet operating costs and trends
argument-hint: [period: monthly, quarterly, or annual]
---

Generate a comprehensive fleet cost analysis report for the specified period.

Ask the user for:
- Reporting period (month, quarter, or year)
- Cost data available (fuel, maintenance, repairs, insurance, etc.)
- Number of vehicles and miles driven
- Budget figures (for variance analysis)

Generate a detailed cost report using the cost-analyzer skill:

1. **Cost summary**: Total operating cost by category with month-over-month and year-over-year comparisons
2. **Cost per mile analysis**: Fleet average and per-vehicle CPM breakdown
3. **Fuel analysis**: Total gallons, average price, fleet MPG, and efficiency outliers
4. **Maintenance breakdown**: Scheduled vs. unscheduled repair ratio and trend
5. **Top cost vehicles**: Identify the 5 highest-cost vehicles with root cause analysis
6. **Budget variance**: Actual vs. budget by category with explanations
7. **Recommendations**: Specific actions to reduce costs based on the data

Include trend charts described in text format (increasing/decreasing arrows and percentages). Flag any vehicles that may be approaching the replacement cost threshold.
