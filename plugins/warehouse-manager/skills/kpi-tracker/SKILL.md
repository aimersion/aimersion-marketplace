---
name: kpi-tracker
version: 0.1.0
description: This skill should be used when the user asks about 'warehouse KPIs', 'warehouse metrics', 'shipping accuracy', 'receiving accuracy', 'order accuracy', 'on-time shipping', 'inventory accuracy', 'cycle count', 'throughput', 'cost per unit', 'warehouse performance dashboard', or needs help measuring and improving warehouse operations performance.
---

# Warehouse KPI Tracker

Key Performance Indicators (KPIs) are the vital signs of warehouse health. Tracking KPIs provides visibility into operational efficiency, quality, cost, and customer impact. This skill provides comprehensive KPI frameworks, benchmarks, and measurement methodologies.

## Warehouse KPI Framework

Organize KPIs by operational area. A balanced scorecard includes safety, quality, productivity, cost, and inventory metrics.

### Safety KPIs

**Recordable Incident Rate**

$$\text{Recordable Incident Rate} = \frac{\text{OSHA-Recordable Injuries} \times 200,000}{\text{Total Hours Worked}}$$

- **Formula notes**: Multiply by 200,000 to annualize (standard 40-hour work week × 50 weeks/year).
- **Benchmark**: <1.0 (world-class); <2.0 (acceptable); >3.0 (poor).
- **Root cause**: Slips/falls, forklift incidents, repetitive strain, overexertion.

**Lost-Time Injury Rate (LTIR)**

$$\text{LTIR} = \frac{\text{Injuries Resulting in Lost Days} \times 200,000}{\text{Total Hours Worked}}$$

- **Target**: <0.5 (world-class).
- **Focus**: Most costly injuries; indicate severity.

**Near-Miss Reporting Rate**

$$\text{Near-Miss Rate} = \frac{\text{Near-Miss Reports}}{{\text{Total Labor Hours}} / 1000}$$

- **Target**: >10 near-misses per 1,000 hours (indicates safety awareness culture).
- **Low near-miss rate** indicates either safety excellence or under-reporting; investigate.

---

### Quality KPIs

**Order Accuracy %**

$$\text{Order Accuracy} = \frac{\text{Perfect Orders}}{\text{Total Orders}} \times 100$$

A perfect order = correct items, correct quantities, no damage, correct address, shipped on time.

- **Target**: >99.5% (less than 1 error per 200 orders).
- **Impact**: Each order error costs ~$100 in handling/recovery.
- **Root causes**: Picking errors (wrong SKU), quantity errors (short/overage), damage (packing, transit), address errors (system entry, label misprint).

**Inventory Accuracy %**

$$\text{Inventory Accuracy} = \frac{\text{Locations with Correct Count}}{\text{Total Locations Counted}} \times 100$$

Measured via cycle counting program.

- **Target**: >99% (less than 1% variance). <99% indicates inventory control breakdown.
- **Benchmark**: World-class manufacturers maintain 99%+.
- **Variance threshold**: Accept <$100 variance per location; escalate >$500 (investigate root cause).

**Shipping Accuracy %**

$$\text{Shipping Accuracy} = \frac{\text{Shipments with Zero Errors}}{\text{Total Shipments}} \times 100$$

- **Target**: >99.5%.
- **Errors tracked**: Wrong item, quantity shortage, overage, damage, incorrect carrier, missing documentation.

**Receiving Accuracy %**

$$\text{Receiving Accuracy} = \frac{\text{Perfect Receipts (qty + quality + inspection)}}{{\text{Total Receipts}}} \times 100$$

- **Target**: >99.5%.
- **Perfect receipt**: Quantity matches PO, quality inspection passed, documentation correct.

---

### Productivity KPIs

**Units Shipped Per Labor Hour**

$$\text{Throughput} = \frac{\text{Total Units Shipped}}{\text{Total Labor Hours}}$$

- **Target**: 50–200 units/hour (varies by facility type and automation).
- **Benchmark**: Parcel facilities 100+ units/hour; manual picking 60–100 units/hour.
- **Trend**: Should be stable or improving month-over-month (declining = process degradation).

**Picks (or Lines) Per Hour**

$$\text{Picking Productivity} = \frac{\text{Total Lines Picked}}{\text{Picking Labor Hours}}$$

- **Target**: 100–150 lines/hour (depends on pick method, slotting, product density).
- **Comparison**: Zone picking and batch picking outperform single-order picking.

**Dock-to-Stock Time (Hours)**

Time from trailer arrival at dock to inventory marked "available" in WMS.

- **Target**: <3 hours (from dock to shelf).
- **Benchmark**: World-class: <2 hours.
- **Bottleneck indicator**: If >3 hours, investigate quality inspection or WMS receipt process delays.

**On-Time Shipment %**

$$\text{On-Time \%} = \frac{\text{Orders Shipped Before Carrier Cut-Off}}{\text{Total Orders}} \times 100$$

- **Target**: >98% (shipped before cut-off; missing cut-off = 24-hour delay).
- **Impact**: Missed cut-offs directly impact customer delivery SLA.

**Order Cycle Time (Hours)**

Time from order receipt to shipment.

- **Target B2B**: <24 hours (standard 1-day turnaround).
- **Target B2C**: <same day (by evening or next morning).
- **Benchmark**: Same-day shipping increasingly expected (Amazon effect).

---

### Cost KPIs

**Cost Per Unit Shipped**

$$\text{Cost/Unit} = \frac{\text{Total Warehouse Operating Cost}}{\text{Units Shipped}}$$

Where total cost includes: labor (50–70%), rent/occupancy (10–15%), utilities (3–5%), equipment/maintenance (5–10%), transportation (5–10%), other (5%).

- **Target**: $2–15/unit (varies widely by industry).
- **Benchmark**: E-commerce/3PL $3–8; high-touch distribution $8–15.
- **Trend**: Should be flat or declining (efficiency improving). Increasing = cost inflation or reduced throughput.

**Labor Cost as % of Revenue**

$$\text{Labor \%} = \frac{\text{Total Labor Cost}}{\text{Revenue}} \times 100$$

- **Target**: 10–20% of revenue (varies by margin).
- **Benchmark**: High-margin (30%+ gross): labor 10–15% acceptable. Low-margin (<15% gross): labor 15–20% challenging.

**Freight Cost Per Unit**

$$\text{Freight Cost/Unit} = \frac{\text{Total Outbound Freight Cost}}{\text{Units Shipped}}$$

- **Target**: $0.50–3.00/unit (depends on product weight, destination distance, carrier mix).
- **Optimization**: Consolidation, carrier negotiation, residential vs. commercial delivery, zone analysis.

---

### Inventory KPIs

**Inventory Turns (Turnover)**

$$\text{Turns} = \frac{\text{COGS (Cost of Goods Sold)}}{\text{Average Inventory Value}}$$

Or: $$\text{Turns} = \frac{365}{\text{Days on Hand}}$$

- **Target**: 4–12 turns/year (product-dependent; fashion higher, food even higher, machinery lower).
- **Benchmark**: E-commerce typically 6–8 turns/year.
- **Too low** (<3): Excess inventory, carrying cost burden, obsolescence risk.
- **Too high** (>15): Risk of stock-outs, missed sales, customer dissatisfaction.

**Days on Hand**

$$\text{Days on Hand} = \frac{365}{\text{Inventory Turns}}$$

- **Example**: 6 turns/year = 60.8 days on hand (average product sits 2 months).
- **Trend**: Should align with demand and supply chain strategy.

**Shrinkage Rate %**

$$\text{Shrinkage \%} = \frac{\text{Book Inventory Value} - \text{Physical Count Value}}{\text{Book Inventory Value}} \times 100$$

Measured during annual physical inventory or cycle counts.

- **Target**: <0.5% (world-class); <1.0% (acceptable); >2.0% (investigate).
- **Root causes**: Theft, damage, recording errors, obsolescence, counting errors.
- **Action**: Shrinkage >1% → security review, cycle count process audit, system audit.

---

## Industry Benchmarks by Warehouse Type

### Parcel / E-Commerce Fulfillment (B2C)

| KPI | Low | Acceptable | World-Class |
|-----|-----|-----------|---|
| **Order Accuracy** | <98% | 98–99.5% | >99.5% |
| **On-Time Shipping** | <95% | 95–98% | >98% |
| **Inventory Accuracy** | <98% | 98–99% | >99% |
| **Cost/Unit Shipped** | >$8 | $4–8 | $2–4 |
| **Picks/Hour** | <80 | 80–120 | >120 |
| **Dock-to-Stock** | >4 hrs | 2–4 hrs | <2 hrs |
| **Return Rate** | >2% | 1–2% | <1% |
| **Recordable Incident Rate** | >3.0 | 1–3 | <1 |

### B2B Distribution / 3PL

| KPI | Low | Acceptable | World-Class |
|-----|-----|-----------|---|
| **Order Accuracy** | <98.5% | 98.5–99.5% | >99.5% |
| **On-Time Shipping** | <95% | 95–98% | >98% |
| **Inventory Accuracy** | <98.5% | 98.5–99.5% | >99.5% |
| **Cost/Unit Shipped** | >$12 | $6–12 | $3–6 |
| **Lines/Hour** | <100 | 100–150 | >150 |
| **Dock-to-Stock** | >4 hrs | 2–4 hrs | <2 hrs |
| **Inventory Turns** | <3 | 3–6 | 6–12 |

---

## Cycle Counting Program

Cycle counting is ongoing, continuous inventory verification (vs. annual physical count).

### Cycle Count Strategy: Stratification

Divide inventory into tiers by value (ABC method):

- **A items** (top 20% by value = 80% of value): Count monthly (12× annually).
- **B items** (next 30% by value = 15% of value): Count quarterly (4× annually).
- **C items** (bottom 50% by value = 5% of value): Count annually (1× annually).

**Benefit**: Continuous validation; identify issues quickly; minimal disruption (not counting entire inventory at once).

### Cycle Count Process

1. **Select locations**: Determine which locations to count today (random or systematic).
2. **Blind count**: Associate counts physical inventory without viewing WMS quantity (prevents bias).
3. **Enter count**: Count is recorded in system.
4. **System reconciliation**: WMS compares count to book quantity.
5. **Variance investigation**:
   - If variance <±3% or <$100: Accept count, update system.
   - If variance >±3% or >$100: Investigate root cause (mislocation, system error, shrinkage).
6. **Adjust inventory**: Update WMS to match physical count.

### Cycle Count Discrepancy Root Causes

| Discrepancy | Cause | Remediation |
|---|---|---|
| **Shortage (count < system)** | Picking error, theft, damage, transaction error | Recount; investigate picking; review security |
| **Overage (count > system)** | Receiving not recorded, return not recorded, count error | System audit; recount |
| **Location mismatch** | Misplaced inventory, receiving put to wrong location | Train put-away; audit locations |
| **Serial/lot mismatch** | Lot tracking error, expiration date management | System audit; retrain on lot tracking |

### Cycle Count Schedule (Weekly Example)

| Day | Locations | Item Count | Expected Qty | Target Count |
|-----|-----------|-----------|---|---|
| Monday | Forward pick zone (A-movers) | 50 SKU | 1,200 units | 100% |
| Tuesday | Secondary zone (B-movers) | 40 SKU | 600 units | 100% |
| Wednesday | Bulk storage (C-movers + overstock) | 30 SKU | 400 units | 100% |
| Thursday | High-value cage, hazmat area | 20 SKU | 150 units | 100% |
| Friday | Receiving, quarantine, damaged goods areas | 25 SKU | 200 units | 100% |

**Weekly total**: ~165 locations, ~2,550 units counted. Annualized: A-items 4–12×, B-items 1–4×, C-items 1×.

---

## KPI Dashboard Design

A KPI dashboard provides real-time visibility to operations team.

### Dashboard Sections

**Section 1: Safety Scorecard**
- Recordable incident rate (YTD)
- Lost-time incidents (YTD)
- Near-miss reports (week)
- Days since last incident
- Safety audit completion rate

**Section 2: Quality Dashboard**
- Order accuracy % (daily, trend)
- Shipping accuracy % (daily, trend)
- Receiving accuracy % (daily, trend)
- Return rate % (weekly)
- Top 3 error types (pie chart)

**Section 3: Productivity Summary**
- Units shipped today vs. target
- Picks/hour by shift
- Dock-to-stock time (average)
- On-time shipment % (daily, trend)
- Order cycle time (average hours)

**Section 4: Cost Tracker**
- Cost per unit YTD vs. target
- Labor % of cost
- Freight cost per unit
- Budget variance % (actual vs. forecast)

**Section 5: Inventory Health**
- Inventory accuracy % (from last cycle count)
- Cycle count status (% complete this week)
- Inventory turns YTD
- Shrinkage rate % (YTD)
- Obsolete inventory alert

---

## Root Cause Analysis Framework

When KPI misses occur, conduct structured 5 Why investigation.

### 5 Why Template

**Example**: Shipping accuracy dropped to 98% (target 99.5%).

| Why # | Question | Answer |
|-------|----------|--------|
| 1 | Why did accuracy drop? | 5 orders shipped with wrong items. |
| 2 | Why were wrong items packed? | Picker selected from wrong bin location. |
| 3 | Why did picker select from wrong bin? | Slotting change (SKU A moved from Zone B to Zone C) not communicated. |
| 4 | Why wasn't change communicated? | Layout optimizer sent slotting change to WMS but didn't brief picking team. |
| 5 | Why wasn't brief provided? | Process gap: no formal communication step in slotting reset SOP. |

**Root cause**: Missing communication step in process.

**Corrective action**: Update slotting reset SOP to require (1) WMS update, (2) picking team briefing, (3) floor signage.

**Verification**: Measure accuracy 2 weeks post-correction; target >99.5% recovery.

---

## Continuous Improvement Connection

Use KPI trends to prioritize improvement projects.

### Improvement Project Prioritization Matrix

| Project | Estimated Impact | Implementation Complexity | ROI | Priority |
|---------|---|---|---|---|
| **Layout/Slotting Optimization** | Picks/hr +20% | Medium | 12 months | HIGH |
| **Incentive Program** | Productivity +15% | Low | 3 months | HIGH |
| **Wave Planning Refinement** | On-time +5% | Low | 2 months | MEDIUM |
| **Quality Inspection Automation** | Accuracy +1% | High | 18 months | LOW |
| **Warehouse Automation (conveyor)** | Throughput +50% | Very High | 24+ months | STRATEGIC |

**Decision**: Prioritize high ROI, medium complexity projects (layout, incentives). Phase larger projects over time.

---

## Summary: KPI Framework Best Practices

1. **Establish baseline**: Measure current performance across safety, quality, productivity, cost, inventory.
2. **Set targets**: Define world-class benchmarks; establish stretch goals (1–3 year roadmap).
3. **Measure continuously**: Real-time dashboards (not just monthly reviews).
4. **Investigate variance**: Use 5 Why for any KPI miss; assign corrective action ownership.
5. **Link to strategy**: Connect KPI improvements to business objectives (cost reduction, service improvement, growth).
6. **Communicate openly**: Share KPI results with team; celebrate wins; address misses collaboratively.
7. **Iterate**: Cycle management should review KPIs weekly/monthly; adjust actions; track progress.

**Expected outcomes**: Sustainable performance improvements, data-driven decision-making, proactive issue identification, strong operational culture.
