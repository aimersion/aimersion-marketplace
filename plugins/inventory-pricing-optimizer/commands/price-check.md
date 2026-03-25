---
description: Pricing analysis with competitive benchmarks and margin optimization
allowed-tools: Read, Write, Bash, WebSearch, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_search, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_fetch
---

Analyze pricing for the user's products with competitive benchmarking and margin optimization recommendations.

## Steps

1. **Gather pricing data**:
   - Current product prices and costs from the user or connected sources
   - Search for competitor pricing via web search
   - Identify the user's industry for benchmark margins

2. **Calculate current margins** using the pricing-optimizer skill:
   - Gross margin percentage for each product
   - Markup percentage
   - Weighted average margin across all products

3. **Competitive benchmarking**:
   - Search for competitor prices on similar products/services
   - Position the user's pricing vs. the market
   - Identify products that are under-priced or over-priced

4. **Generate recommendations**:
   - Products where price increases are justified
   - Products where price decreases could drive volume
   - Products to markdown for clearance
   - Pricing strategy recommendations (cost-plus, value-based, competitive)

5. **Model profit impact**:
   - Show before/after profit for each recommended change
   - Calculate total monthly/annual impact

## Output Format

```
💰 PRICING ANALYSIS — [Date]

## Margin Summary
Average Gross Margin: [X]% (Industry benchmark: [X]%)
Best margin product: [name] at [X]%
Worst margin product: [name] at [X]%

## Competitive Position
[Summary of how prices compare to competitors]

## Recommendations

📈 RAISE PRICES (Margin Opportunity)
[Table: Product, Current, Recommended, Expected Impact]

📉 CONSIDER LOWERING (Volume Opportunity)
[Table: Product, Current, Recommended, Expected Volume Lift]

🏷️ MARKDOWN (Clear Overstock)
[Table: Product, Current, Recommended, Reason]

## Profit Impact
Current monthly profit: $[X]
After changes: $[X]
Improvement: +$[X] ([X]%)
```
