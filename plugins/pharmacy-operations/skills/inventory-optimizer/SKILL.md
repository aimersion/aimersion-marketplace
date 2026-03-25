---
name: inventory-optimizer
description: >
  Track and optimize pharmacy inventory including fast/slow mover analysis,
  seasonal demand prediction, and cost reduction strategies. This skill should
  be used when the user asks about "inventory management", "drug inventory",
  "reorder point", "slow movers", "dead stock", "inventory turns",
  "wholesaler pricing", "drug costs", "purchasing optimization",
  "generic alternatives", or needs help with any pharmacy inventory management.
version: 1.0.0
---

# Inventory Optimizer

Fast/slow mover tracking, seasonal demand prediction, and cost optimization for independent pharmacies.

## Inventory Management Fundamentals

### Key Metrics

| Metric | Formula | Target | Why It Matters |
|--------|---------|--------|---------------|
| Inventory Turnover | Annual COGS / Average Inventory Value | 12-18 | Higher = less cash tied up in stock |
| Days of Supply | (Inventory Value / Annual COGS) × 365 | 20-30 days | Lower = less risk of expiration |
| Gross Margin | (Revenue - COGS) / Revenue | 22-28% | Profitability per dollar dispensed |
| Fill Rate | Rxs filled from stock / Total Rxs | > 96% | Patient satisfaction and retention |
| Expired Product Rate | Expired write-offs / Total inventory value | < 0.5% | Waste indicator |
| Return Rate | Value of returns / Total purchases | < 2% | Ordering accuracy |

### ABC Analysis

Classify inventory by annual dollar volume:
- **A items** (top 20% of items = ~80% of cost): Monitor daily. Optimize ordering frequency and quantity. These are your critical items.
- **B items** (next 30% = ~15% of cost): Review weekly. Standard reorder protocols.
- **C items** (bottom 50% = ~5% of cost): Review monthly. Consider min/max ordering. Watch for dead stock.

### Reorder Point Calculation

**Reorder Point** = (Average Daily Usage × Lead Time in Days) + Safety Stock

**Safety Stock** = Average Daily Usage × Safety Days (typically 3-7 days depending on criticality and lead time variability)

**Example:** Lisinopril 10mg tablets
- Average daily usage: 30 tablets
- Lead time: 1 day (primary wholesaler)
- Safety stock: 30 × 3 = 90 tablets
- Reorder point: (30 × 1) + 90 = 120 tablets

### Economic Order Quantity (EOQ) — Simplified

For high-volume items, calculate the order quantity that minimizes total ordering + holding costs:

Balance between:
- Ordering too frequently → higher ordering costs, more staff time
- Ordering too much → higher carrying costs, expiration risk

For most community pharmacies, ordering from primary wholesaler daily or every-other-day with automated reorder points is the practical optimum.

## Cost Reduction Strategies

### 1. Generic Substitution Maximization
- Target Generic Dispensing Rate (GDR): 88-92%
- Review brand-only dispensing monthly — are there generics now available?
- Work with prescribers to switch therapeutic alternatives when appropriate
- Patient education on generic equivalence (same active ingredient, FDA-approved)

### 2. Wholesaler Optimization
- Maintain 90-95% purchasing compliance with primary wholesaler for best tier pricing
- Use secondary wholesaler for price shopping on high-cost generics (price variability can be extreme)
- Negotiate contract terms annually
- Leverage GPO membership for additional discounts

### 3. Short-Dated and Returns Management
- Pull short-dated stock (< 6 months to expiration) monthly
- Return eligible items to wholesaler before return window closes
- For items that can't be returned: dispense first (FIFO), discount to other pharmacies, or use reverse distribution company

### 4. 340B Program (if eligible)
- Covered entities (FQHCs, certain hospitals, Ryan White clinics) can purchase drugs at 340B ceiling prices — often 25-50% below wholesale
- Requires meticulous compliance tracking
- Software solutions: 340B ESP, Sentry, Apexus

## Seasonal Demand Planning

| Month | Increased Demand | Stock Up On |
|-------|-----------------|-------------|
| Jan-Feb | Flu continuation, cold season peak | Oseltamivir, OTC cold products, tissues |
| Mar-Apr | Allergy season starts | Antihistamines (OTC and Rx), nasal steroids, eye drops |
| May-Jun | Summer prep | Sunscreen, aloe, anti-itch, EpiPens (outdoor activities) |
| Jul-Aug | Back-to-school immunizations | Vaccines (Tdap, HPV, MCV4, flu early stock) |
| Sep-Oct | Flu season start | Influenza vaccines (all formulations), Tamiflu |
| Nov-Dec | Holiday season, open enrollment | Insulin, diabetes supplies, new insurance plan transitions |

## Reference Files

- **`references/purchasing-guide.md`** — Wholesaler negotiation and purchasing best practices
