---
name: seasonal-adjuster
description: >
  Plan inventory and pricing adjustments for seasonal demand fluctuations, holidays,
  and peak periods. This skill should be used when the user asks to "plan for the
  holidays", "seasonal inventory", "prepare for peak season", "holiday planning",
  "seasonal pricing", "summer inventory", "winter planning", "Black Friday prep",
  "seasonal adjustments", "end of season clearance", "seasonal demand", or needs
  help adjusting inventory levels and pricing for upcoming seasonal changes.
version: 2.0.0
---

# Seasonal Adjuster

Plan inventory levels, pricing strategies, and supplier coordination for seasonal demand shifts — from holiday peaks to slow-season troughs and everything in between.

## Why This Matters

Two-thirds of holiday shoppers start buying before Black Friday, and 37% of holiday spending occurs in September-October. Businesses that don't plan 2-3 months ahead for seasonal shifts end up with stockouts during peaks and overstock during troughs. Seasonal planning is the difference between record profits and costly markdowns.

## Core Workflow

1. **Identify the seasonal event** — which season, holiday, or demand shift is coming
2. **Analyze historical patterns** — how did demand change in past seasons
3. **Calculate adjusted inventory needs** — how much to increase/decrease
4. **Plan pricing adjustments** — seasonal pricing, promotions, markdowns
5. **Coordinate with suppliers** — ensure supply chain can deliver
6. **Create the timeline** — week-by-week action plan
7. **Plan the transition** — how to handle end-of-season inventory

## Seasonal Calendar

### Major Retail Seasons

| Season | Planning Starts | Peak Period | Wind-Down |
|--------|---------------|------------|-----------|
| **Spring** | January | March-April | May |
| **Summer** | March | June-August | September |
| **Back to School** | May | July-August | September |
| **Fall** | July | September-October | November |
| **Holiday** | August-September | November-December | January |
| **Winter Clearance** | December | January-February | March |

### Key Shopping Events

| Event | Date | Planning Lead Time | Typical Demand Lift |
|-------|------|-------------------|-------------------|
| Valentine's Day | Feb 14 | 6-8 weeks | 50-200% (category specific) |
| Mother's Day | May (2nd Sun) | 4-6 weeks | 30-100% |
| Father's Day | Jun (3rd Sun) | 4-6 weeks | 20-60% |
| Independence Day | Jul 4 | 4-6 weeks | 20-50% (outdoor/food) |
| Back to School | Jul-Aug | 8-12 weeks | 50-150% (category specific) |
| Halloween | Oct 31 | 8-10 weeks | 100-300% (costumes, candy) |
| Black Friday/Cyber Monday | Late Nov | 10-14 weeks | 200-500% |
| Christmas | Dec 25 | 12-16 weeks | 100-400% |
| New Year | Jan 1 | 4-6 weeks | 30-100% (fitness, organization) |

## Seasonal Inventory Adjustment Process

### Step 1: Calculate Seasonal Indices

```
Seasonal Index = Month's Average Sales / Overall Monthly Average

Example for a product with annual sales of 1,200 (100/month average):
- November sales (3yr avg): 150 → Index = 1.50
- January sales (3yr avg): 60 → Index = 0.60
```

### Step 2: Adjust Inventory Targets

```
Seasonal Order Quantity = Base Monthly Demand × Seasonal Index × (1 + Growth Factor)

Example:
Base demand: 100 units/month
November index: 1.50
Year-over-year growth: 10%
November target: 100 × 1.50 × 1.10 = 165 units
```

### Step 3: Adjust Reorder Points

```
Seasonal Reorder Point = (Seasonal Daily Sales × Peak Lead Time) + Increased Safety Stock

Peak lead times are typically 20-40% longer during busy seasons due to supplier
backlogs and shipping delays.
```

### Step 4: Supplier Coordination Timeline

```
T-minus 12 weeks: Confirm seasonal forecasts with suppliers
T-minus 10 weeks: Place initial bulk orders for peak inventory
T-minus 8 weeks: Confirm delivery dates and backup suppliers
T-minus 6 weeks: Receive and verify first shipments
T-minus 4 weeks: Place top-up orders based on early demand signals
T-minus 2 weeks: Final fill orders, set up displays/marketing
Peak: Monitor daily, reorder fast-sellers, activate backup suppliers
T-plus 2 weeks: Assess remaining seasonal inventory
T-plus 4 weeks: Begin markdowns on remaining seasonal stock
T-plus 8 weeks: Final clearance, write off unsellable items
```

## Seasonal Pricing Strategies

### Pre-Season
- **Early bird pricing**: 10-15% discount for early purchasers (generates cash flow for bulk buying)
- **Pre-orders**: Gauge demand before committing to full inventory

### Peak Season
- **Standard pricing**: Full margin — demand supports regular prices
- **Bundle pricing**: Combine seasonal items with everyday items to increase basket size
- **Tiered promotions**: "Buy 2 get 10% off, buy 3 get 20% off"

### End of Season
- **Progressive markdowns**: Start small (15-20%) and increase every 1-2 weeks
- **Flash sales**: 24-48 hour deep discounts to move bulk quickly
- **Bundle clearance**: Package remaining seasonal items together at steep discount
- **Donate and deduct**: For truly unsellable items, donate for tax benefit

### Markdown Timing Guide

| Weeks After Peak | Markdown Level | Target |
|-----------------|---------------|--------|
| 0-2 weeks | 0% (full price) | Sell to late buyers |
| 2-4 weeks | 15-25% off | Move moderate volume |
| 4-6 weeks | 30-40% off | Accelerate clearance |
| 6-8 weeks | 50-60% off | Clear remaining stock |
| 8+ weeks | 70%+ off or liquidate | Recover any value possible |

## Seasonal Planning Report Format

```
# Seasonal Plan: [Season/Event Name]
Planning Date: [date]
Peak Period: [start] to [end]

## Demand Forecast
| Product | Base Demand | Seasonal Index | Peak Demand | Stock Needed |
|---------|-----------|---------------|-------------|-------------|
| [name] | [X]/month | [X.XX] | [X]/month | [X] total units |

## Inventory Actions
| Action | Product(s) | Quantity | By Date | Supplier | Est. Cost |
|--------|-----------|---------|---------|----------|-----------|
| Order | [name] | [X] units | [date] | [supplier] | $[X] |

## Pricing Plan
| Phase | Dates | Strategy | Products Affected |
|-------|-------|---------|-------------------|
| Pre-season | [dates] | [strategy] | [products] |
| Peak | [dates] | [strategy] | [products] |
| Wind-down | [dates] | [strategy] | [products] |
| Clearance | [dates] | [strategy] | [products] |

## Timeline
[Week-by-week action plan]

## Budget Summary
Total seasonal inventory investment: $[X]
Expected seasonal revenue: $[X]
Expected seasonal margin: $[X] ([X]%)
Markdown budget (estimated): $[X]
```

## References

See `references/seasonal-playbooks.md` for industry-specific seasonal planning guides.
