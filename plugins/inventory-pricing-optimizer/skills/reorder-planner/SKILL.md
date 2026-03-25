---
name: reorder-planner
description: >
  Calculate reorder points, safety stock levels, and economic order quantities for
  each product to prevent stockouts and minimize carrying costs. This skill should
  be used when the user asks to "what should I reorder", "reorder point", "when to
  reorder", "safety stock", "how much to order", "EOQ", "economic order quantity",
  "purchase order", "restock", "running low on stock", "order quantity", or needs
  help determining when and how much of each product to reorder.
version: 2.0.0
---

# Reorder Planner

Calculate optimal reorder points, safety stock levels, and order quantities for every product — ensuring you never run out of best-sellers while avoiding excess inventory on slow movers.

## Why This Matters

Manually managing purchase orders leads to errors, miscommunication with suppliers, and delayed restocking. Businesses using calculated reorder points see significant reductions in both stockouts and overstock. The math is straightforward — the hard part is doing it consistently.

## Core Workflow

1. **Gather product data** — sales velocity, lead times, costs, current stock
2. **Calculate reorder points** — when to order for each product
3. **Calculate safety stock** — buffer for demand and supply variability
4. **Calculate order quantities** — how much to order (EOQ or practical quantity)
5. **Generate the reorder report** — what needs ordering now vs. soon vs. later
6. **Create purchase order drafts** — ready to send to suppliers

## Data Requirements

For each product, collect:

| Data Point | Required? | Where to Find It |
|-----------|-----------|-----------------|
| Average daily/weekly/monthly sales | Required | Sales records or POS data |
| Supplier lead time (days) | Required | Past orders or ask supplier |
| Current stock level | Required | Physical count or inventory system |
| Unit cost | Required | Supplier invoices |
| Minimum order quantity (MOQ) | Helpful | Supplier terms |
| Ordering cost per PO | Helpful | Admin time + shipping (estimate $25-75) |
| Holding cost rate | Helpful | Typically 20-30% of unit cost/year |

## Reorder Point Calculation

```
Reorder Point = (Average Daily Sales × Lead Time in Days) + Safety Stock
```

### Step-by-Step

1. **Average Daily Sales**: Total units sold last 90 days / 90
2. **Lead Time**: Average days from placing order to receiving stock
3. **Safety Stock**: Buffer for variability (see below)
4. **Reorder Point**: When stock hits this number, place an order

**Example:**
- Sells 8 units/day on average
- Supplier delivers in 10 days
- Safety stock: 25 units
- Reorder point: (8 × 10) + 25 = **105 units**

When stock drops to 105, it's time to order.

## Safety Stock Calculation

### Simple Method (Good for Most Small Businesses)

```
Safety Stock = (Max Daily Sales - Average Daily Sales) × Average Lead Time
```

**Example:**
- Average daily sales: 8 units
- Maximum daily sales (busiest day): 15 units
- Average lead time: 10 days
- Safety stock: (15 - 8) × 10 = **70 units**

### ABC-Adjusted Method (Recommended)

Different ABC classes warrant different safety levels:

| ABC Class | Service Level Target | Safety Days | Rationale |
|-----------|---------------------|-------------|-----------|
| **A Items** | 98-99% | 5-7 days | Can't afford stockouts on top sellers |
| **B Items** | 95% | 7-14 days | Moderate buffer |
| **C Items** | 90% | 14-21 days | Larger buffer, lower cost items |

```
Safety Stock = Average Daily Sales × Safety Days (from ABC class)
```

### Variable Demand Method (Most Accurate)

For products with significant demand variability:

```
Safety Stock = Z × σd × √L

Z = Service level factor:
  90% service level: Z = 1.28
  95% service level: Z = 1.65
  98% service level: Z = 2.05
  99% service level: Z = 2.33

σd = Standard deviation of daily demand
L = Lead time in days
```

## Economic Order Quantity (EOQ)

```
EOQ = √(2 × D × S / H)

D = Annual demand (units)
S = Ordering cost per order ($)
H = Holding cost per unit per year ($)
H = Unit Cost × Annual Holding Rate (typically 0.20-0.30)
```

### When EOQ Doesn't Work Well

- **MOQ exceeds EOQ**: Order the MOQ instead
- **Quantity discounts available**: Compare total cost at EOQ vs. discount quantity
- **Perishable goods**: Order based on shelf life, not EOQ
- **Highly seasonal**: Use seasonal-adjusted demand, not annual average
- **Very low-volume items**: Just order as needed, don't overthink it

### Practical Order Quantity

```
Practical Order Qty = MAX(EOQ, MOQ, Minimum Shipping Quantity)

Also consider:
- Round up to full case/pack quantities
- Combine orders to meet free shipping thresholds
- Coordinate with other products from the same supplier
```

## Reorder Report Format

```
# Reorder Report
Date: [date]
Products analyzed: [X]

## 🔴 ORDER NOW (Stock below reorder point)

| Product | Current Stock | Reorder Point | Days Left | Order Qty | Est. Cost |
|---------|-------------|--------------|-----------|-----------|-----------|
| [name] | [X] units | [X] units | [X] days | [X] units | $[X] |

## 🟠 ORDER SOON (Stock approaching reorder point — within 2 weeks)

| Product | Current Stock | Reorder Point | Days Left | Order Qty | Est. Cost |
|---------|-------------|--------------|-----------|-----------|-----------|
| [name] | [X] units | [X] units | [X] days | [X] units | $[X] |

## 🟢 HEALTHY (No action needed)

[X] products have sufficient stock for [X]+ days

## Purchase Order Summary

### Supplier: [Supplier Name]
Items to order: [X]
Total estimated cost: $[X]
Expected delivery: [date based on lead time]

| Product | Quantity | Unit Cost | Line Total |
|---------|---------|-----------|------------|
| [name] | [X] | $[X] | $[X] |

### Supplier: [Supplier Name 2]
[Same format]
```

## Reorder Automation Tips

Help the user set up simple systems:
- **Calendar reminders**: Schedule weekly inventory review on a specific day
- **Spreadsheet alerts**: Conditional formatting that highlights items at/below reorder point
- **Email alerts**: Set up email drafts to suppliers for recurring orders
- **Par level labels**: Physical labels on shelves showing reorder points

## References

See the inventory-tracker skill's `references/inventory-formulas.md` for all calculation formulas and worked examples.
