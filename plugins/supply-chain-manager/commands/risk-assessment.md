---
description: Assess supply chain risks and build mitigation plan
allowed-tools: Read, Write
---

## Instructions for Claude

You are conducting a supply chain risk assessment. Follow these steps:

1. **Gather Supply Chain Profile Information**
   - Top 20 suppliers by spend (names, commodity, annual spend, location)
   - Single-source items (commodities supplied by only one vendor)
   - Geographic concentration (what % of supply from each country/region)
   - Longest lead time items (what supplies take >12 weeks)
   - Key commodities or critical components
   - Major customers (concentration risk on demand side)

2. **Identify Risk Categories**
   Systematically assess risks across seven categories:
   - Supply Risk: Supplier failure, quality, capacity
   - Demand Risk: Forecast error, customer concentration, market shifts
   - Operational Risk: Capacity, equipment, quality, key person
   - Logistics Risk: Carrier, port, customs, route disruption
   - Geopolitical Risk: Tariffs, sanctions, political instability
   - Financial Risk: Commodity prices, FX, supplier creditworthiness
   - Environmental/Climate Risk: Natural disaster, climate impacts

3. **Assess Each Risk**
   For each identified risk:
   - Describe the risk clearly
   - Estimate Probability (1-5 scale): 1=Rare, 3=Possible, 5=Almost certain
   - Estimate Impact (1-5 scale): 1=Minimal, 3=Medium, 5=Critical
   - Calculate Risk Score = Probability × Impact (1-25 scale)
   - Classify: Critical (20-25), High (15-19), Medium (8-14), Low (1-7)

4. **Single-Source Risk Analysis**
   For each single-source item:
   - Annual spend/revenue dependent on item
   - Probability of supply disruption
   - Financial impact if disrupted (revenue loss, emergency sourcing cost)
   - Calculate revenue at risk = Impact × Probability
   - Prioritize for multi-source qualification

5. **Supply Chain Mapping**
   - Map Tier 1 suppliers (direct) by commodity and spend
   - Identify Tier 2 single-source concentration
   - Assess geographic concentration (% of supply by country)
   - Identify high-risk regions (geopolitical, natural disaster, climate)

6. **Develop Mitigation Plans**
   For top 10 highest-risk items:
   - Recommend immediate mitigation actions (0-3 months)
   - Recommend contingency plans (trigger conditions, response playbook)
   - Recommend buffer inventory for high-risk items
   - Identify alternate sourcing options and qualification timeline

7. **Create Risk Register**
   - Document all identified risks
   - Assign owner and status
   - Track mitigation progress
   - Schedule reviews

8. **Calculate Total Risk Exposure**
   - Sum revenue at risk across all supply disruption scenarios
   - Estimate total potential financial impact
   - Quantify risk reduction from recommended mitigations

9. **Format Output**
   - Executive summary: Top 10 risks, recommended actions, investment required
   - Risk register table: Risk ID, Category, Description, Probability, Impact, Score, Owner, Mitigation, Status
   - Risk heat map: 5×5 probability-impact matrix with risks plotted
   - Single-source analysis: Items at risk, revenue exposure, mitigation recommendations
   - Supply chain map: Tier 1/2 suppliers, geographic concentration
   - Contingency plans: For each Critical/High risk (trigger, response team, action steps, timeline)
   - Early warning indicators: What to monitor and reforecast triggers
   - Financial summary: Total revenue at risk, mitigation investment, expected risk reduction

Present as risk management strategy document suitable for executive/board review.
