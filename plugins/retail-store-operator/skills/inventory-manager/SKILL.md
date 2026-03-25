---
name: inventory-manager
description: >
  Optimize inventory levels and turnover through reorder calculations, dead stock liquidation, and data-driven buying plans.
  This skill should be used when the user asks to "calculate reorder points", "identify dead stock",
  "optimize inventory turnover", "plan seasonal buying", "conduct ABC analysis", "set up cycle counting",
  "vendor management", "optimize safety stock", or needs guidance on retail inventory management best practices.
version: 0.1.0
---

# Inventory Manager

Maximize inventory efficiency and capital deployment through data-driven reorder calculations, dead stock elimination, and strategic buying plans that balance stockouts and overstock.

## Reorder Point Calculations

Effective reorder points prevent stockouts (lost sales, disappointed customers) while minimizing excess inventory (cash tied up, markdown pressure). Use these three core calculations as the foundation for replenishment.

### Reorder Point (ROP) Formula

The ROP tells you when to trigger a replenishment order.

```
ROP = (Average Daily Usage × Lead Time in Days) + Safety Stock
```

**Average Daily Usage**: Expected units sold per day
- Calculate: Total units sold in past 90 days ÷ 90
- Example: Sold 450 units in 90 days = 5 units/day average

**Lead Time**: Days from order placement to stock arrival
- Vendor lead time: Ask vendor (typically 7–14 days for wholesale)
- Add 2–3 days buffer for unexpected delays
- Example: 10-day vendor lead time + 3-day buffer = 13 days

**Safety Stock**: Buffer inventory to protect against demand spikes or lead time delays
- See safety stock section below; typically 5–20 days of supply

**Example ROP Calculation**:
- Average daily usage: 5 units
- Lead time: 13 days
- Safety stock: 50 units (10 days of supply)
- ROP = (5 × 13) + 50 = 65 + 50 = **115 units**
- Interpretation: When inventory hits 115 units, place replenishment order

### Economic Order Quantity (EOQ)

EOQ determines the ideal order size to minimize total inventory costs (carrying costs + ordering costs).

```
EOQ = √[(2 × Annual Demand × Order Cost) / Carrying Cost per Unit per Year]
```

**Annual Demand**: Total units expected to sell in 12 months
- Example: 1,800 units/year

**Order Cost**: Cost to place and process one order
- Includes: Labor (buyer, receiving, processing), logistics coordination
- Typical range: $25–$75 per order depending on complexity
- Example: $50/order

**Carrying Cost per Unit per Year**: Cost to hold one unit in inventory for one year
- Includes: Warehouse space, insurance, shrinkage, obsolescence, capital cost
- Formula: Cost per unit × Carrying cost %
- Carrying cost % typically 20–40% of item cost
- Example: Item cost $20 × 25% = $5/unit/year carrying cost

**Example EOQ Calculation**:
- Annual demand: 1,800 units
- Order cost: $50
- Carrying cost/unit/year: $5
- EOQ = √[(2 × 1,800 × 50) / 5] = √[180,000 / 5] = √36,000 = **190 units**
- Interpretation: Optimal order size is 190 units. Order frequency: 1,800 ÷ 190 = ~9 times/year (every 5–6 weeks)

### Safety Stock Calculation

Safety stock buffers against demand variability and lead time uncertainty.

**Simple Method**: Days of Supply
```
Safety Stock = (Daily Usage × Lead Time Variability Buffer)
or
Safety Stock = Daily Usage × Number of Days Buffer
```

- For high-demand, predictable items: 5–7 days buffer
- For seasonal/variable items: 10–20 days buffer
- For slow-movers: 20–30 days buffer

Example: 5 units/day usage with 10-day buffer = 50 units safety stock

**Advanced Method**: Statistical Safety Stock (if historical demand data available)
```
Safety Stock = Z-score × Standard Deviation of Demand × √Lead Time
```

- Z-score: Risk tolerance (Z=1.65 for 95% service level, Z=2.33 for 99%)
- Standard deviation: Measure of demand variability (from historical data)
- Service level: Higher = more safety stock, fewer stockouts

Example calculation (95% service level):
- Z-score: 1.65
- Demand std dev: 2 units
- Lead time: 13 days
- Safety stock = 1.65 × 2 × √13 = 1.65 × 2 × 3.6 = **12 units**

### Lead Time and Inventory Parameters by Category

**High-demand items** (daily sales 10+)
- ROP: 2–3 weeks of supply
- Reorder frequency: Weekly to bi-weekly
- Safety stock: 7–10 days supply
- Vendor lead time: Standard (negotiate optimal terms)

**Medium-demand items** (daily sales 2–10)
- ROP: 3–4 weeks of supply
- Reorder frequency: Every 2–3 weeks
- Safety stock: 10–14 days supply
- Vendor lead time: Accept standard terms

**Slow-movers** (daily sales <2)
- ROP: 4–6 weeks of supply
- Reorder frequency: Monthly or less (be careful—risk of dead stock)
- Safety stock: 20–30 days supply or minimum order qty
- Vendor lead time: Negotiate flexible terms (drop-ship if available)

**Seasonal items** (sale >50% concentrated in 8–12 weeks)
- ROP: Build safety stock 6 weeks before season
- Reorder frequency: Bulk seasonal buys 1–2x/year
- Safety stock: Plan for peak demand; liquidate post-season
- Vendor lead time: Plan ahead; negotiate payment terms given season timing

## Inventory Turnover Optimization

Inventory turnover (how many times you sell and replace inventory per year) is a key profitability metric. Higher turnover = faster cash conversion, less markdown pressure.

### Calculating Inventory Turnover

```
Inventory Turnover = Cost of Goods Sold (COGS) / Average Inventory Value (at cost)
```

**Example**:
- Annual COGS: $300,000
- Average inventory value (at cost): $100,000
- Turnover = 300,000 / 100,000 = **3.0x**
- Interpretation: You sell and replace entire inventory 3 times per year (every ~121 days)

**Retail benchmarks**:
- Apparel: 2.5–3.5x (slower due to seasonality)
- Shoes/accessories: 3–4x
- General merchandise: 4–6x
- Grocery/perishables: 8–15x

### Days Inventory Outstanding (DIO)

The inverse of turnover; tells you how many days inventory sits before selling.

```
DIO = 365 / Inventory Turnover
```

Example: DIO = 365 / 3.0 = **~122 days**

**Goals**:
- Target: Lower is better; push turnover up
- Monitor by category; slow categories drag down overall performance
- Compare to competitors; if lower, you're more efficient with capital

### Strategies to Improve Turnover

**1. Right-size inventory levels**
- Reduce safety stock for reliable, high-turnover items
- Increase order frequency for popular items (smaller, fresher selections)
- Reduce stock depth for seasonal items (buy closer to season)

**2. Eliminate dead stock aggressively**
- Identify items not selling (see Dead Stock section below)
- Liquidate at 50–70% of cost within 30 days
- Better to recover 50% than pay carrying costs for 12 months

**3. Optimize assortment**
- Prune slow-moving SKUs; reallocate budget to winners
- ABC analysis (below) guides investment

**4. Markdown strategy**
- Early, aggressive markdowns on slow items vs. late, deep discounts
- Early markdown: Recover 70% of cost, clear in 4 weeks
- Late markdown: Recover 20% of cost, sits longer, consumes space

**5. Vendor negotiations**
- Shorter payment terms (improve cash flow)
- Return agreements for slow items (reduce risk)
- Markdown allowances for aged inventory (vendor shares risk)

**6. Promotions and bundling**
- Bundle slow items with bestsellers
- Flash sales on slow categories
- Flash sales create urgency; drive volume

## Dead Stock Identification and Liquidation

Dead stock drains profitability through carrying costs, markdown pressure, and obsolescence. Identify and liquidate quickly.

### Dead Stock Definition and Thresholds

**Definitions**:
- **Zero-turnover stock**: No sales in past 90 days
- **Slow-movers**: Sales <1 unit per 30 days
- **Obsolete stock**: Last season/year's inventory; out of date
- **Overstock**: Excess inventory of slow items

**Identification**:
1. Pull inventory report sorted by "days since last sale"
2. Flag items with >90 days no sales
3. For items >30 days slow: Check if seasonal (if yes, may not be dead)
4. Verify current cost value in inventory system

### Liquidation Strategy

**Tier 1 (Most Recent Zero-Turnover)**: 91–120 days no sales
- **Action**: Aggressive markdown (30–50% off)
- **Timeline**: 2-week flash sale
- **Goal**: Move units quickly; recover 60–70% of cost
- **Fallback**: Donation for tax benefit if no takers

**Tier 2 (Extended Zero-Turnover)**: 121–180 days no sales
- **Action**: Deep discount (50–70% off) or clearance
- **Timeline**: 3-week clearance event
- **Goal**: Recover 40–50% of cost; free up shelf space
- **Fallback**: Donation + tax benefit

**Tier 3 (Aged Zero-Turnover)**: 180+ days no sales
- **Action**: Liquidation sale (70–90% off) or wholesale
- **Timeline**: 2-week liquidation; sell to discount retailers
- **Goal**: Recover 20–30% of cost; clear completely
- **Fallback**: Donation; remove from store

### Liquidation Mechanics

**Markdown Cascades** (if not selling at first discount):
- Week 1: 25% off
- Week 2: 40% off
- Week 3: 60% off
- Week 4: Clearance (final markdown; must clear)

**Wholesale/Bulk Options**:
- Liquidation wholesalers: Buy inventory at 20–40% of cost in bulk
- Off-price retailers: Will take excess seasonal at 40–50% of cost
- Online liquidators: eBay, Amazon seller, Mercari (time-intensive)

**Donation and Tax Benefits**:
- Donate to nonprofit; request donation letter
- Deduct fair market value (not cost) on taxes
- Requires documentation and valuation

**Prevention Measures**:
- Stricter buying decisions on new inventory
- Earlier markdowns on slow items (prevent deep aged inventory)
- Vendor negotiations: Return privileges, markdown allowances
- Reorder discipline: Don't restock repeatedly slow items

## ABC Analysis for Inventory Investment

ABC analysis prioritizes inventory management effort based on financial impact. Focus your tightest controls on high-value A-items.

### ABC Methodology

**Step 1: Calculate annual value per SKU**
- Annual value = Unit cost × Units sold annually
- Example: Item costs $20, sells 200/year = $4,000 annual value

**Step 2: Rank all SKUs by annual value (highest to lowest)**

**Step 3: Calculate cumulative % of total inventory value**
- Identify the SKU where cumulative total reaches 80% (these are A-items)
- Identify where it reaches 95% (these are B-items)
- Remaining 5% are C-items

**Step 4: Categorize**
- **A-items**: Top 10–20% of SKUs, representing ~80% of inventory value
- **B-items**: Next 20–30% of SKUs, representing ~15% of inventory value
- **C-items**: Remaining 50–70% of SKUs, representing ~5% of inventory value

### Management Strategy by Tier

**A-Items** (highest priority)
- Reorder discipline: Daily or weekly monitoring
- Service level target: 98–99% (aggressive safety stock)
- Lead time: Negotiate shortest possible
- Cycle counting: Weekly or bi-weekly
- Markdown discipline: Minimal; these are your winners
- Vendor focus: Negotiate best terms, shortest lead times
- System: Real-time tracking (not manual counts)

**B-Items** (medium priority)
- Reorder discipline: Weekly monitoring
- Service level target: 95% (moderate safety stock)
- Lead time: Standard vendor terms
- Cycle counting: Monthly
- Markdown discipline: Standard markdowns; acceptable markdown rates
- Vendor focus: Standard negotiations
- System: Weekly inventory reconciliation

**C-Items** (lowest priority)
- Reorder discipline: Monthly or less
- Service level target: 90% (conservative; acceptable stockouts)
- Lead time: Accept longer; drop-ship if available
- Cycle counting: Quarterly
- Markdown discipline: Aggressive on slow-movers; accept losses
- Vendor focus: Minimal; negotiate easy returns or consignment
- System: Manual counts acceptable; monitor for dead stock

### ABC Analysis Example

| Rank | SKU | Item | Unit Cost | Annual Sales Qty | Annual Value | Cumulative $ | % of Total | Category |
|------|-----|------|-----------|------------------|--------------|------------|-----------|----------|
| 1 | A001 | Best-seller shirt | $15 | 500 | $7,500 | $7,500 | 15% | A |
| 2 | B002 | Popular jeans | $35 | 300 | $10,500 | $18,000 | 36% | A |
| 3 | C003 | Key accessory | $8 | 400 | $3,200 | $21,200 | 42% | A |
| 4 | D004 | Seasonal item | $20 | 150 | $3,000 | $24,200 | 48% | B |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |
| 50 | Z050 | Slow-mover | $5 | 10 | $50 | $50,000 | 100% | C |

**Interpretation**: Top 10 SKUs = ~80% of value (A-items); next 15 SKUs = ~15% of value (B-items); remaining 25 SKUs = ~5% of value (C-items).

## Cycle Counting Procedures

Cycle counting (ongoing, targeted inventory counts) provides real-time accuracy without needing a full annual physical inventory shutdown.

### Cycle Count Schedule

**A-Items**: Weekly
- Counts are quick; reconcile immediately
- Any variance >1% investigated same day
- Purpose: Ensure system accuracy for high-value items

**B-Items**: Bi-weekly to monthly
- Full category count
- Variance >2% investigated within 2 days
- Purpose: Maintain accuracy for mid-value items

**C-Items**: Quarterly
- Spot-check 20–30% of items each quarter (full coverage in 12 months)
- Variance >5% investigated (likely system error or dead stock)
- Purpose: Monitor for dead stock and system drift

### Cycle Count Procedures

**Preparation**:
1. Select category or SKU list for count
2. Pull system inventory quantities
3. Assign to two counters (separate counts, then reconcile)

**Execution**:
1. Physical count of all items in category
2. Record counts on count sheet (or mobile app)
3. Do NOT rely on system counts; count physically
4. When counts disagree, recount to determine true count

**Reconciliation**:
1. If counts match: Confirm count to system
2. If counts differ by <1%: Average and update system
3. If counts differ by >1%: Recount; investigate discrepancy
4. Update system with agreed count

**Investigation** (for variances >1%):
- Receiving: Items received but not logged?
- Markdown: Items marked down but not physical removed?
- Damage: Items damaged but not written off?
- Theft/Loss: Unexplained variance?
- System error: POS/inventory system mismatch?

### Documentation

Create a cycle count log:
- Date, category, items counted, variances found, root causes, corrective actions
- Monthly summary: Total variances, common causes, trends

**Goal**: Maintain inventory accuracy >98% (variance <2% per count)

## Seasonal Buying Plans

Seasonal inventory requires advance planning to maximize sales and minimize post-season excess.

### Seasonal Planning Timeline

**6 months prior**:
- Analyze prior year demand for season
- Forecast demand (factor in growth, trends, competition)
- Set sales targets and initial buy quantities

**4 months prior**:
- Finalize vendor commitments
- Negotiate lead times and payment terms
- Confirm delivery windows

**2 months prior**:
- First replenishment order placed
- Early delivery of core items to allow ramp-up
- Monitor early sell-through

**1 month prior**:
- Peak season inventory in place
- Staffing and operations prepped
- Promotional signage ready

**During peak season**:
- Monitor daily sell-through vs. forecast
- Adjust reorders for winners; hold for laggards
- Flexible markdown on items not performing

**Post-season** (2 weeks after demand cliff):
- Aggressive clearance on remaining inventory
- Consolidate slow items; group for deeper discounts
- Establish liquidation pricing (target: clear by 60 days post-season)

### Seasonal Buy Calculation

**Prior Year Analysis**:
- Total units sold in season (last year)
- Unit price distribution (% at different price points)
- Highest-selling items and their % of total
- Seasonal duration (when sales peaked/declined)

**Demand Forecast**:
- Adjust prior year for: Store growth, market trends, new items, competition
- Example: Prior year 1,000 units + 10% growth forecast = 1,100 unit target

**Buy Breakdown**:
- **Tier 1 (hero items)**: 40% of budget; items that sold well last season or are trend-driven
  - Deeper stock; aggressive promotion
  - Reorder capability (or strategic vendors with quick replenishment)

- **Tier 2 (proven performers)**: 40% of budget; solid sellers from prior year
  - Moderate depth; standard promotion

- **Tier 3 (test/newness)**: 20% of budget; new items, trends, limited quantities
  - Shallow stock; feature/event promotion; expect some risk

**Reorder Cadence**:
- Weeks 1–4 of season: Monitor daily sell-through; prepare reorders for Tier 1 winners
- Weeks 5–8: Second reorder for top performers; reduce weak items
- Weeks 9–12: Final reorder of last-chance items; begin markdown planning
- Weeks 13+: Clearance/liquidation phase

### Example Seasonal Plan (Back-to-School, August 1–September 30)

**Forecast**: 2,000 units total, $60,000 buy

| Category | Prior Year % | This Year Units | Budget | Reorder Ready? |
|----------|--------------|-----------------|--------|----------------|
| Apparel (tops, bottoms) | 40% | 800 | $24,000 | Yes; 2-week lead |
| Shoes | 20% | 400 | $12,000 | Yes; 3-week lead |
| Accessories (bags, jewelry) | 25% | 500 | $15,000 | Yes; fast |
| Specialty (uniforms, themed) | 15% | 300 | $9,000 | No; custom orders |
| **TOTAL** | 100% | 2,000 | $60,000 | |

**Execution**:
- Week 1: All inventory arriving
- Week 2–3: Monitor sell-through; reorder apparel and shoes if 60%+ sold
- Week 4: Final reorder for top 50% of items
- Week 5+: Begin markdowns on items <50% sell-through
- Week 9: Aggressive clearance on bottom 30% performers
- Week 10+: Liquidation phase

## Vendor Management for Retail Buyers

Strong vendor relationships provide negotiating leverage and flexibility.

### Key Vendor Metrics

Evaluate vendors on:
- **Lead time**: Standard lead time and consistency
- **Quality**: % of acceptable goods on receipt
- **Fill rate**: % of order shipped as requested
- **Flexibility**: Willingness to accommodate last-minute changes
- **Cost**: Unit cost and minimum order quantities
- **Terms**: Payment terms, return privileges, markdown allowances

### Negotiation Priorities

**1. Payment terms** (biggest lever for small retailers)
- Standard: Net 30 (pay within 30 days)
- Negotiate: Net 45 or 60 (improves cash flow)
- Seasonal: Terms beyond season end (pay in November for August delivery)

**2. Minimum order quantities (MOQ)**
- Negotiate: Lower MOQs for seasonal or test items
- Leverage: Higher-volume, proven items for standard MOQs

**3. Lead time**
- Standard: 10–14 days
- Negotiate: Expedited options for emergency reorders
- Drop-ship: Consider for slow-movers (reduce holding)

**4. Markdown allowances**
- Negotiate: 5–10% of purchase price if items don't sell
- Purpose: Shares slow-mover risk

**5. Return privileges**
- Negotiate: Return of unsold items for credit (limit: 10–20%)
- Purpose: Reduces downside on new vendors/items

### Vendor Evaluation and Performance

Create a scorecard:

| Vendor | Lead Time | Fill Rate | Quality | Cost | Flexibility | Overall Score |
|--------|-----------|-----------|---------|------|-------------|----------------|
| Vendor A | 10 days | 98% | 95% | Good | High | 9/10 |
| Vendor B | 14 days | 92% | 92% | Better | Moderate | 7/10 |
| Vendor C | 21 days | 88% | 85% | Lowest | Low | 5/10 |

**Action**: Concentrate buys with highest-scoring vendors; negotiate improvements with lower-performing vendors; consider alternatives if no improvement in 2 quarters.

## Additional Resources

Consult `references/reorder-formulas.md` for calculation worksheets, inventory management templates, and dead stock liquidation playbooks.
