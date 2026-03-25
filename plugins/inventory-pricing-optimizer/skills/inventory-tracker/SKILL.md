---
name: inventory-tracker
description: >
  Monitor stock levels, calculate inventory health metrics, and flag items needing
  attention using ABC analysis. This skill should be used when the user asks to "check
  inventory", "stock levels", "what's running low", "inventory status", "stock audit",
  "inventory health", "which products need attention", "ABC analysis", "inventory
  classification", "overstocked items", "dead stock", or needs visibility into their
  current inventory position and which items need action.
version: 2.0.0
---

# Inventory Tracker

Monitor inventory health, classify products using ABC analysis, and flag items needing immediate attention — from stockout risks to dead stock that's tying up capital.

## Why This Matters

Inventory distortion costs businesses $818 billion globally per year — 52% from stockouts and 44% from overstock. Small businesses that lack real-time visibility are essentially flying blind. ABC classification alone can reduce carrying costs by 20-30% by focusing attention where it matters most.

## Core Workflow

1. **Collect inventory data** — from spreadsheets, user input, or connected sources
2. **Classify products** — ABC analysis based on revenue contribution
3. **Calculate health metrics** — stock levels, turnover, days of supply
4. **Flag action items** — stockout risks, overstock, dead stock, reorder alerts
5. **Present the dashboard** — clear, actionable inventory health report

## Data Requirements

At minimum, ask the user for:
- Product names/SKUs
- Current stock quantity
- Unit cost (what they pay)
- Selling price
- Average monthly sales (units)

Nice to have:
- Supplier lead time (days)
- Minimum order quantities
- Historical sales data (3-12 months)
- Storage cost per unit

## ABC Analysis

The Pareto principle (80/20 rule) applied to inventory: 20% of items drive 80% of revenue.

### Classification Rules

| Class | Revenue Share | Item Share | Management Approach |
|-------|-------------|-----------|-------------------|
| **A Items** | Top 70-80% of revenue | ~10-20% of SKUs | Tight control, frequent review, accurate forecasting, safety stock |
| **B Items** | Next 15-20% of revenue | ~20-30% of SKUs | Moderate control, monthly review, standard reorder points |
| **C Items** | Bottom 5-10% of revenue | ~50-70% of SKUs | Simple controls, larger safety stock, less frequent review |

### How to Calculate

1. For each product: `Annual Revenue = Units Sold × Selling Price`
2. Sort products by annual revenue (highest first)
3. Calculate cumulative percentage of total revenue
4. Classify: A = cumulative 0-80%, B = cumulative 80-95%, C = cumulative 95-100%

### ABC Output Format

```
## ABC Classification Summary

Total SKUs analyzed: [X]

### A Items ([X] SKUs — [X]% of revenue)
| Product | Annual Revenue | % of Total | Monthly Sales | Stock Level | Status |
|---------|---------------|-----------|--------------|-------------|--------|
| [name] | $[X] | [X]% | [X] units | [X] units | [status] |

### B Items ([X] SKUs — [X]% of revenue)
[same table format]

### C Items ([X] SKUs — [X]% of revenue)
[same table format, abbreviated if many items]
```

## Inventory Health Metrics

### Per-Product Metrics

| Metric | Formula | What It Tells You |
|--------|---------|-------------------|
| **Days of Supply** | Current Stock / Daily Sales Rate | How many days until stockout |
| **Turnover Rate** | Annual Sales / Average Inventory | How fast product moves |
| **Carrying Cost** | Unit Cost × Holding Rate × Avg Inventory | Annual cost to hold this stock |
| **Stock Status** | Days of Supply vs. Lead Time | Whether reorder is needed |

### Stock Status Categories

| Status | Condition | Action |
|--------|-----------|--------|
| 🔴 **CRITICAL** | Days of supply < Lead time | Reorder immediately |
| 🟠 **LOW** | Days of supply < Lead time + Safety days | Reorder soon |
| 🟢 **HEALTHY** | Stock is within optimal range | No action needed |
| 🟡 **OVERSTOCKED** | Stock > 3× monthly sales | Consider discounting or returning |
| ⚫ **DEAD STOCK** | Zero sales in 90+ days | Liquidate, bundle, or write off |

## Inventory Health Dashboard

```
# Inventory Health Dashboard
Date: [date]
Total SKUs: [X]
Total Inventory Value: $[X]

## Overall Health Score: [A/B/C/D/F]

## Stock Status Summary
🔴 Critical (reorder now): [X] items worth $[X]
🟠 Low (reorder soon): [X] items worth $[X]
🟢 Healthy: [X] items worth $[X]
🟡 Overstocked: [X] items worth $[X] in excess
⚫ Dead stock: [X] items worth $[X] tied up

## Top Priority Actions
1. [Most urgent reorder]
2. [Second priority]
3. [Overstock to address]

## ABC Summary
A Items: [X] SKUs, $[X] revenue, [average turnover]
B Items: [X] SKUs, $[X] revenue, [average turnover]
C Items: [X] SKUs, $[X] revenue, [average turnover]

## Key Metrics
Average Turnover Rate: [X]x per year
Average Days of Supply: [X] days
Total Carrying Cost (est.): $[X]/year
Stockout Risk Items: [X]
```

## References

See `references/inventory-formulas.md` for all calculation formulas and worked examples.
