---
description: Plan inventory and pricing for an upcoming season or event
allowed-tools: Read, Write, Bash, WebSearch, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_search, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_fetch, mcp__f5773182-1e91-4d48-8bde-f44e840a2614__gcal_create_event
---

Create a complete seasonal plan for inventory and pricing.

## Steps

1. **Identify the season/event**:
   - Ask what season, holiday, or event they're planning for
   - Determine the peak period dates
   - Identify which products are affected

2. **Forecast seasonal demand** using the demand-forecaster and seasonal-adjuster skills:
   - Calculate seasonal indices from historical data (or industry defaults)
   - Adjust base demand by seasonal factors
   - Account for growth trends

3. **Plan inventory levels**:
   - Calculate how much additional stock is needed
   - Determine order dates based on supplier lead times
   - Set up increased safety stock for the peak period

4. **Plan pricing strategy**:
   - Pre-season pricing (early bird offers?)
   - Peak pricing (standard, bundle, tiered?)
   - End-of-season markdown schedule

5. **Create the timeline**:
   - Week-by-week action plan from now through end of season
   - Offer to create calendar events for key dates

6. **Present the complete plan**

## Output Format

```
📅 SEASONAL PLAN: [Season/Event Name]
Peak Period: [dates]
Planning Horizon: [now] through [end date]

## DEMAND FORECAST
[Product-by-product seasonal demand projections]

## INVENTORY PLAN
[What to order, how much, and when]

## PRICING PLAN
- Pre-season: [strategy]
- Peak: [strategy]
- Wind-down: [markdown schedule]

## TIMELINE
Week 1: [actions]
Week 2: [actions]
[etc.]

## BUDGET
Total investment: $[X]
Expected revenue: $[X]
Expected margin: $[X] ([X]%)

Shall I create calendar reminders for the key dates?
```
