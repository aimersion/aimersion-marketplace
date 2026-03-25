---
description: Generate a warehouse KPI performance report
allowed-tools: Read, Write
---

## Instructions

Generate a comprehensive KPI performance report for a specified reporting period (daily, weekly, or monthly). Measure actual performance against targets, identify trends, and provide analysis with recommendations for improvement.

### Step 1: Gather Performance Data

Collect data for the reporting period across all KPI categories:

**Safety**:
- Recordable incidents (OSHA-reportable)
- Lost-time incidents (LTI)
- Near-miss reports filed
- Safety audit findings

**Quality**:
- Perfect orders (correct items, quantities, no damage)
- Total orders shipped
- Shipping accuracy % calculation
- Inventory cycle count results
- Receiving accuracy (perfect receipts vs. total)

**Productivity**:
- Units shipped (total volume)
- Labor hours worked (total)
- Pick lines processed
- On-time shipments (before carrier cut-off)
- Orders requiring expedited / rework

**Cost**:
- Total warehouse operating cost (labor, rent, utilities, equipment)
- Outbound freight cost
- Labor hours by activity

**Inventory**:
- Cost of goods sold (COGS)
- Average inventory value
- Cycle count results
- Shrinkage variance

**Data Example**:
```
Month: March 2026

Safety:
- Recordable incidents: 1 (slip hazard, lost-time)
- Near-miss reports: 12

Quality:
- Total orders shipped: 2,850
- Perfect orders: 2,832
- Shipping accuracy: 2,832 / 2,850 = 99.4%
- Cycle count: 98.2% accuracy

Productivity:
- Units shipped: 42,000
- Labor hours: 335
- Picks processed: 8,540 lines
- On-time: 2,773 / 2,850 = 97.3%

Cost:
- Operating cost: $18,500
- Freight: $7,200
- Labor: $10,200

Inventory:
- COGS: $150,000
- Avg inventory: $400,000
- Shrinkage: -0.8%
```

### Step 2: Calculate Key Metrics

**Formula**:

| Metric | Formula | Calculation | Result |
|--------|---------|---|---|
| **Order Accuracy** | Perfect / Total × 100 | 2,832 / 2,850 × 100 | 99.4% |
| **Shipping Accuracy** | Perfect shipments / Total | Same as above | 99.4% |
| **Receiving Accuracy** | Perfect receipts / Total receipts | [Gather data] | __ % |
| **Inventory Accuracy** | Correct locations / Total counted | [Cycle count data] | 98.2% |
| **On-Time Shipment %** | On-time orders / Total | 2,773 / 2,850 × 100 | 97.3% |
| **Return Rate %** | Returned units / Shipped units | [Gather data] | __ % |
| **Units per Labor Hour** | Units / Hours | 42,000 / 335 | 125.4 units/hr |
| **Cost per Unit** | Total cost / Units shipped | $18,500 / 42,000 | $0.44/unit |
| **Inventory Turns** | COGS / Avg inventory | $150,000 / $400,000 | 0.375 × 12 = 4.5 turns/yr |

### Step 3: Compare to Target & Prior Period

Build comparison table:

| KPI | Target | This Period | Prior Period | Variance | Trend | Status |
|-----|--------|-----------|---|---|---|---|
| **Order Accuracy** | >99.5% | 99.4% | 99.2% | −0.1% | → (stable) | 🟡 Yellow |
| **On-Time Ship** | >98% | 97.3% | 97.8% | −0.5% | ↓ (declining) | 🟡 Yellow |
| **Cost/Unit** | $5.50 | $5.80 | $5.95 | +$0.15 | ↑ (improving) | 🟡 Yellow |
| **Units/Hour** | 130 | 125.4 | 122 | +3.4 | ↑ (improving) | 🟢 Green |
| **Inventory Accuracy** | >99% | 98.2% | 98.0% | +0.2% | ↑ (improving) | 🟡 Yellow |

### Step 4: Assess Status (Green/Yellow/Red)

**Green (Target Met)**:
- Metric equals or exceeds target
- Trend stable or improving
- Action: Continue current practices; monitor

**Yellow (Caution, Minor Miss)**:
- Metric 1–2% below target, or
- Declining trend despite close to target
- Action: Investigate; implement corrective action

**Red (Critical Miss)**:
- Metric >2% below target, or
- Rapidly declining trend
- Action: Escalate; urgent corrective action needed

### Step 5: Identify Top 3 Issues

Analyze the biggest gaps or concerns:

| # | Issue | Metric Impact | Root Cause (Hypothesis) | Business Impact | Owner |
|---|-------|---|---|---|---|
| 1 | On-time shipping 97.3% (miss 77 orders) | Missing 1.7% of cut-offs | Wave planning delays; dock congestion 4–5 PM | Customer SLA misses; potential penalties | Shipping Lead |
| 2 | Order accuracy 99.4% (17 errors) | 0.1% below target | Wrong-item picks (slotting confusion) | Customer dissatisfaction; return handling cost | Quality Lead |
| 3 | Cost/unit $5.80 (vs. $5.50 target) | +$0.30 per unit overage | Freight rate increases; temp labor premium | $12,600 monthly overage | Finance Lead |

### Step 6: Investigate Root Causes (5 Why if Needed)

For each major issue, conduct 5-Why analysis:

**Issue #1: On-Time Shipping 97.3%**

| # | Why | Answer |
|---|-----|--------|
| 1 | Why did 77 orders miss shipping? | Did not ship before carrier cut-off time |
| 2 | Why were they not ready before cut-off? | Picking/packing delayed; not completed in time |
| 3 | Why was picking/packing delayed? | Wave planning started too late; insufficient picking speed |
| 4 | Why did wave planning start late? | Receiving didn't complete until 2:00 PM; feeding delay |
| 5 | Why did receiving delay? | Inbound volume higher than forecast (18 vs. 14 trucks); dock congestion |

**Root Cause**: Inbound volume forecasting underestimated; dock capacity insufficient for surge.

**Corrective Action**: Improve demand forecast; negotiate earlier carrier appointment windows; consider 2nd shift inbound staffing on high-volume days.

### Step 7: Compile Dashboard Report

Structure the report with scorecard, narrative, and recommendations:

---

## OUTPUT: KPI PERFORMANCE DASHBOARD REPORT

**Facility**: Memphis Distribution Center
**Reporting Period**: March 2026
**Report Date**: 4/1/2026
**Prepared By**: Operations Manager

---

### EXECUTIVE SCORECARD (One-Page Summary)

#### By Category

| Category | Overall Status | Detail |
|----------|---------|--------|
| **Safety** | 🟡 YELLOW | 1 LTI YTD (acceptable); near-miss rate healthy |
| **Quality** | 🟡 YELLOW | Accuracy 99.4% (0.1% below target); trending stable |
| **Productivity** | 🟢 GREEN | Units/hour 125.4 (96% of target); trending up |
| **Cost** | 🔴 RED | Cost/unit $5.80 (5.5% above target); freight rates up |
| **Inventory** | 🟢 GREEN | Accuracy 98.2% (edging toward 99%); shrinkage 0.8% |

**Overall**: 2 GREEN, 2 YELLOW, 1 RED; requires targeted action on cost and on-time shipping.

---

### QUALITY DASHBOARD

#### Order Accuracy & Shipping Performance

| Metric | Target | March | Variance | YTD | Trend | Status |
|--------|--------|-------|----------|-----|---|---|
| **Order Accuracy** | >99.5% | 99.4% | −0.1% | 99.3% | → Stable | 🟡 |
| **Shipping Accuracy** | >99.5% | 99.4% | −0.1% | 99.3% | → Stable | 🟡 |
| **On-Time Shipment** | >98% | 97.3% | −0.7% | 97.4% | ↓ Declining | 🟡 |
| **Return Rate** | <1% | 0.8% | −0.2% | 0.85% | ↑ Improving | 🟢 |
| **Receiving Accuracy** | >99.5% | 99.6% | +0.1% | 99.55% | → Stable | 🟢 |

**Summary**: Shipping accuracy and order accuracy both at 99.4% (just below target). On-time shipping at 97.3% represents largest gap (−0.7%). Returns improving (0.8%, good trend).

**Top 3 Error Types**:
1. Wrong item picked (6 orders, 0.35%) — Slotting layout confusion
2. Quantity shortage (5 orders, 0.29%) — Picking scale variance
3. Damage (6 orders, 0.35%) — Packing void fill insufficient

**Action**: Increase scan-verification at pack; revalidate slotting layout; audit packing material.

---

### PRODUCTIVITY SUMMARY

| Metric | Target | March | Variance | Trend | Status |
|--------|--------|-------|----------|---|---|
| **Units/Labor Hour** | 130 | 125.4 | −3.6 units/hr | ↑ Improving | 🟢 Green |
| **Picks/Hour** | 140 | 135 | −5 lines/hr | ↑ Improving | 🟢 Green |
| **Dock-to-Stock Time** | <3 hours | 3.2 hours | +0.2 hours | → Stable | 🟡 Yellow |
| **On-Time Shipment** | >98% | 97.3% | −0.7% | ↓ Declining | 🟡 Yellow |
| **Order Cycle Time** | <4 hours | 3.8 hours | −0.2 hours | ↑ Improving | 🟢 Green |

**Summary**: Productivity trending positive (units/hr +3.4 from Feb). On-time shipment declining (missing 77 orders); primary issue.

**Bottleneck Analysis**:
- Dock-to-stock 3.2 hours (target <3): Receiving quality inspection adding 30 minutes
- On-time 97.3%: Wave 3 (4–6 PM) starting too late due to inbound delay; missing FedEx 7 PM cut-off

---

### COST TRACKER

| Metric | Target | March | Variance | Trend | Status |
|--------|--------|-------|----------|---|---|
| **Cost/Unit Shipped** | $5.50 | $5.80 | +$0.30 (5.5%) | ↑ Worsening | 🔴 Red |
| **Labor % of Cost** | 55% | 58% | +3% | ↑ Worsening | 🟡 Yellow |
| **Freight Cost/Unit** | $1.00 | $1.18 | +$0.18 (18%) | ↑ Worsening | 🟡 Yellow |

**Cost Breakdown**:
- Operating cost: $18,500 (vs. $16,200 budget = +14% over)
- Labor: $10,200 (58% of cost; temporary staffing premium)
- Freight: $7,200 (zone rate increase; heavier order mix)

**Root Causes**:
1. Freight rate increase: FedEx zone rates up 8% this month
2. Labor premium: Temporary workers at $24/hr vs. perm staff $18/hr
3. Utilization: Slightly lower volume (42k units vs. 44k forecast) = fixed costs spread thin

**Mitigation Actions**:
- Rate-shop FedEx; negotiate volume discount for Q2
- Forecast volume accurately; adjust staffing plan
- Review product mix; identify opportunities for consolidation

---

### INVENTORY HEALTH

| Metric | Target | March | Variance | Trend | Status |
|--------|--------|-------|----------|---|---|
| **Inventory Accuracy** | >99% | 98.2% | −0.8% | ↑ Improving | 🟡 Yellow |
| **Shrinkage Rate** | <0.5% | 0.8% | −0.3% | ↑ Worsening | 🟡 Yellow |
| **Inventory Turns** | 6–8/yr | 4.5/yr | (annualized) | → Stable | 🟢 Green |
| **Days on Hand** | 45–60 days | 81 days | +21 days | ↑ Increasing | 🟡 Yellow |

**Summary**: Inventory accuracy improving toward 99% target. Days on hand increasing (81 vs. 60 target), indicating slower turnover or demand shift. Shrinkage 0.8% above target.

**Cycle Count Progress**: 95% complete for March; 12 variances >$100 investigated:
- 3 shortages (picking errors)
- 4 overages (receiving lag)
- 5 location mismatches (put-away errors)

---

### KEY ISSUES & ROOT CAUSE SUMMARY

| Priority | Issue | Impact | Root Cause | Owner | Target |
|----------|-------|--------|-----------|-------|--------|
| 1 | **On-Time Shipping 97.3%** | Missing 77 orders; SLA risk | Receiving delay → wave start late | Shipping Lead | 98%+ by 4/15 |
| 2 | **Cost/Unit $5.80 (budget $5.50)** | $12,600 monthly overage | Freight rates up + temp labor premium | Finance Lead | $5.50 by 5/31 |
| 3 | **Inventory Accuracy 98.2%** | Slower improvement; shrinkage 0.8% | Put-away errors; location mismatches | Quality Lead | 99%+ by 4/30 |

---

### RECOMMENDED ACTIONS

#### Immediate (This Week)

1. **On-Time Shipping** (Shipping Lead)
   - Move Wave 3 pick start from 2:45 PM → 2:15 PM
   - Stagger inbound appointments (reduce 4–5 PM congestion)
   - Target: 98%+ on-time by 4/15

2. **Cost Control** (Finance Lead)
   - Contact FedEx for volume discount negotiation
   - Review temp labor allocation; reduce if volume normalizes
   - Target: $5.50/unit by 5/31

#### Short-Term (Next 2 Weeks)

3. **Inventory Accuracy** (Quality Lead)
   - Revalidate slotting layout (pick errors root cause)
   - Audit put-away rule compliance; retrain staff
   - Target: 99%+ by 4/30

4. **Demand Forecasting** (Operations)
   - Reconcile March forecast vs. actual; adjust April
   - Improve communication with sales (spike visibility)
   - Prevent future inbound delays

---

### CONCLUSION

March performance mixed: Productivity and inventory health improving; cost and on-time shipping require urgent focus. Primary bottleneck is inbound receiving feeding delays. Recommend immediate staffing/timing adjustments to on-time shipping; parallel freight rate negotiation to control cost.

**Next Review**: Monthly dashboard review scheduled for 5/1/2026

---

**Report Signed**: Operations Manager ________________ Date: ___________
