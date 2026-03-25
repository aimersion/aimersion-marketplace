---
description: Prioritize and sequence outbound shipments
allowed-tools: Read, Write
---

## Instructions

Build a prioritized shipping queue and wave plan for today's outbound orders. Analyze order backlog, prioritize by SLA/cut-off, and create a detailed wave schedule to meet carrier pickup windows.

### Step 1: Gather Outbound Order Queue

Collect all unshipped orders with:

**Order Information**:
- Order ID / PO number
- Customer name and delivery address
- Order date / time received
- Order size (line count, unit count)
- Special requirements (fragile, cold-chain, hazmat, signature required)

**Shipping Requirements**:
- Desired service level (overnight, 2-day, ground, LTL)
- Preferred carrier (if specified)
- Delivery SLA (due date)

**Order Status**:
- All items in stock? (Yes / No — if no, note backorder qty/date)
- Quality hold? (Yes / No — if yes, release date)
- Priority flag (expedite, VIP, regular)

**Example Data**:
```
Order: ORD-4501
- Customer: ABC Corp, Denver CO
- Received: 3/24 9:15 AM
- Lines: 8
- Units: 125
- Service: 2-day
- Carrier: UPS (preferred)
- SLA: Ship by 4 PM today
- Status: In stock, ready to pick
- Priority: Expedite (customer call)
```

### Step 2: Identify Carrier Cut-Off Times

Map all carriers with pickup today and their cut-off times:

| Carrier | Service | Cut-Off Time | Pickup Location | Notes |
|---------|---------|---------|---|---|
| UPS | Next Day | 6:00 PM | Dock 1 | Pickups at 6 PM sharp |
| UPS | Ground | 5:00 PM | Dock 1 | Earlier cutoff than overnight |
| FedEx | 2-Day | 5:30 PM | Dock 2 | Will pick both early/late |
| FedEx | Overnight | 7:00 PM | Dock 2 | Latest pickup today |
| USPS | Priority | 4:00 PM | Mailbox | Leave packages by 3:45 PM |
| LTL | Regional | 4:00 PM | Dock 3 | Consolidates; tight cutoff |
| | | | | |

**Work Backward**:
- FedEx 7:00 PM cut-off
  - Dock load by: 6:45 PM
  - Packing complete by: 6:00 PM
  - Picking complete by: 4:00 PM
  - **Picking start**: 2:00 PM (2 hrs for ~600 lines = ~300 lines/hour pace needed)

### Step 3: Prioritize Orders Using Hierarchy

Assign priority ranking to each order using this decision tree:

**Tier 1: Same-Day / Expedite**
- Flag: Expedite, rush, customer VIP, or "ship today"
- Cut-off: Must ship before end of day
- **Priority ranking: 1–5**
- Action: Pick immediately; highest priority

**Tier 2: Service Level / SLA**
- Bucket orders by delivery SLA (e.g., 24-hr SLA, 48-hr SLA, 72-hr SLA)
- Orders with nearest SLA due date within SLA window → pick next
- **Priority ranking: 6–20** (within SLA tier, order by due date ascending)
- Action: Ensure picked before cut-off

**Tier 3: Carrier Cut-Off Time**
- Orders for earlier cut-off → higher priority
- Orders for later cut-off → lower priority
- **Priority ranking: 21–50** (orders with same SLA; bucket by cut-off)
- Action: Respect cut-off timing

**Tier 4: Order Age (FIFO Within Same Tier)**
- Orders received earlier → pick first
- Orders received later → pick later
- **Priority ranking: 51+** (orders with same cut-off; FIFO)
- Action: Move long-pending orders

**Tier 5: Order Size (Optimization)**
- Smaller orders (<5 lines) → fill gaps between large orders
- Larger orders → batch for efficiency
- **Priority ranking: Within same tier, size secondary**
- Action: Smaller orders can be picked in parallel/gaps

### Step 4: Create Prioritized Order Queue

Build a table ranking all orders:

| Priority | Order ID | Customer | Lines | Units | Service | Carrier | Cut-Off | Received | SLA Due | Reason for Priority |
|----------|----------|----------|-------|-------|---------|---------|---------|----------|-------|---|
| 1 | ORD-4501 | ABC Corp | 8 | 125 | Overnight | UPS | 6:00 PM | 9:15 AM | TODAY 4 PM | Expedite (customer call) |
| 2 | ORD-4505 | XYZ Inc | 12 | 200 | Overnight | FedEx | 7:00 PM | 10:30 AM | TODAY 8 PM | SLA due today 8 PM |
| 3 | ORD-4512 | QRS Ltd | 15 | 300 | 2-Day | UPS | 6:00 PM | 8:00 AM | TOMORROW 2 PM | Same cut-off as 1&2; older |
| 4 | ORD-4515 | LMN Corp | 6 | 90 | 2-Day | FedEx | 5:30 PM | 11:00 AM | TOMORROW 5 PM | Smaller order; fill gap |
| 5 | ORD-4520 | Standard | 20 | 400 | Ground | UPS | 5:00 PM | 7:30 AM | STANDARD (5 days) | Large order; earlier cutoff |
| ... | ... | | | | | | | | | |

**Notes**:
- Tier 1 (expedites): Orders 1–2
- Tier 2 (SLA today): Order 5 (ground 5 PM)
- Tier 3 (carrier cut-off): Orders 1–3 cluster by 6 PM cutoff
- Tier 4 (FIFO within): Order 3 older than 2; pick before 2
- Tier 5 (size): Order 4 smallest; pick in gaps

### Step 5: Group Orders into Waves

Batch orders into logical waves based on:
- Carrier cut-off time
- Zone balance (distribute picks across all zones)
- Labor availability

**Wave Planning**:

| Wave | Time Window | Carrier(s) | Cut-Off | Orders | Lines | Unit Load | Pick Zones | Est Pick Time | Pick Start | Est. Completion |
|------|---|---|---|---|---|---|---|---|---|---|
| 1 | 8:00–10:00 | USPS Priority | 4:00 PM | ORD-4507, 4509, 4511 | 18 | 200 | A, B | 1.5 hrs | 8:00 AM | 9:30 AM |
| 2 | 10:00 AM–12:00 PM | UPS/FedEx | 5:00–6:00 PM | ORD-4501, 4512, 4515, 4520 | 41 | 700 | A, B, C | 2.0 hrs | 10:00 AM | 12:00 PM |
| 3 | 1:00–3:00 PM | FedEx/LTL | 5:30–7:00 PM | ORD-4505, 4522, 4525, 4530 | 52 | 1,000 | A, B, C | 2.5 hrs | 1:00 PM | 3:30 PM |
| 4 | 3:30–4:30 PM | Standard/Backlog | 5:00+ PM | Late-arriving orders | 15 | 250 | A, C | 1.0 hr | 3:30 PM | 4:30 PM |

**Zone Balance**:
- Wave 1: Zones A/B (USPS small items typically in forward pick)
- Wave 2: Zones A/B/C (mixed; larger orders spread across facility)
- Wave 3: All zones (largest volume; full facility engaged)
- Wave 4: Opportunistic zones (fill any gaps, pick slow-moving C items)

### Step 6: Identify At-Risk Orders

Flag orders that may miss cut-off due to insufficient time or constraints:

| Order ID | Reason | Cut-Off | Pick Start | Pick Time | Projected Complete | Buffer | Risk Level |
|----------|--------|---------|-----------|-----------|---|---|---|
| ORD-4520 | High line count; complex order | 5:00 PM | 10:00 AM | 2.0 hrs | 12:00 PM | 5 hrs | 🟢 Low |
| ORD-4550 | Received late (2:45 PM); must ship today | 5:00 PM | 3:00 PM | 1.5 hrs (slow) | 4:30 PM | 0.5 hrs | 🟡 Medium |
| ORD-4560 | Expedite; tight cut-off; staffing tight | 5:30 PM | 2:00 PM | 1.0 hr (fast) | 3:00 PM | 2.5 hrs | 🟡 Medium (if slowed) |

**At-Risk Mitigation**:
- **ORD-4550**: Accelerate picking; consider batch pick method instead of zone; assign top picker
- **ORD-4560**: Cross-staff to ensure dedicated picking; pre-stage zone; ready to pack immediately

### Step 7: Build Wave Schedule Output

Create a detailed, actionable wave schedule:

---

## OUTPUT: SHIPPING PRIORITY QUEUE & WAVE SCHEDULE

**Facility**: Memphis Distribution Center
**Date**: 3/24/2026
**Prepared**: 8:00 AM

---

### SUMMARY

- **Total Orders in Queue**: 24
- **Total Lines**: 178
- **Total Units**: 3,200
- **Primary Carriers**: UPS (12 orders), FedEx (8 orders), USPS (2 orders), LTL (2 orders)
- **Waves Planned**: 4
- **Estimated Completion**: 4:30 PM

---

### WAVE 1: EARLY PARCEL (USPS Priority)

**Time Window**: 8:00 AM – 9:30 AM
**Carrier**: USPS Priority Mail
**Cut-Off Time**: 4:00 PM
**Staffing**: 2 pickers, 2 packers

| Order | Customer | Lines | Units | Priority | Status |
|-------|----------|-------|-------|----------|--------|
| ORD-4507 | Small Biz A | 4 | 40 | Tier 2 | Ready |
| ORD-4509 | Small Biz B | 7 | 80 | Tier 2 | Ready |
| ORD-4511 | Small Biz C | 7 | 80 | Tier 2 | Ready |

**Picking Details**:
- Zones: A (forward pick), small items
- Est. time: 1.5 hours (120 lines/hour pace)
- Packing time: 1.0 hour (3 orders, 54 units)
- **Stage ready**: 9:45 AM
- **Ship ready**: 10:00 AM (leaving 6 hours before 4 PM cut-off)

---

### WAVE 2: MORNING CARRIERS (UPS/FedEx Ground & 2-Day)

**Time Window**: 10:00 AM – 12:00 PM
**Carriers**: UPS Ground (5:00 PM), FedEx 2-Day (5:30 PM)
**Staffing**: 4 pickers, 3 packers

| Order | Customer | Lines | Units | Service | Carrier | Cut-Off | Priority | Status |
|-------|----------|-------|-------|---------|---------|---------|----------|--------|
| ORD-4501 | ABC Corp | 8 | 125 | Overnight | UPS | 6:00 PM | 1 (EXPEDITE) | Ready |
| ORD-4512 | QRS Ltd | 15 | 300 | 2-Day | UPS | 6:00 PM | 3 (SLA today) | Ready |
| ORD-4515 | LMN Corp | 6 | 90 | 2-Day | FedEx | 5:30 PM | 4 (Smaller, fill gap) | Ready |
| ORD-4520 | Standard Client | 20 | 400 | Ground | UPS | 5:00 PM | 5 (Larger, high vol) | Ready |
| ORD-4535 | Regional | 4 | 60 | 2-Day | FedEx | 5:30 PM | 3.5 (Smaller) | Ready |

**Picking Details**:
- Zones: A, B, C (balanced; largest wave)
- Lines: 53
- Est. picking time: 2.0 hours (typical 120 lines/hour but zone diversity slower = 100 lines/hour)
- Packing: 5 orders × 1.5 min/carton = 7.5 minutes sorting/packing
- **Picking complete**: 12:00 PM
- **Packing complete**: 12:10 PM
- **Stage ready**: 12:30 PM (4.5 hrs before 5 PM UPS cut-off, 5 hrs before FedEx)

---

### WAVE 3: AFTERNOON CARRIERS (FedEx Overnight)

**Time Window**: 1:00 PM – 3:30 PM
**Carrier**: FedEx Overnight (7:00 PM cut-off)
**Staffing**: 5 pickers, 3 packers

| Order | Customer | Lines | Units | Service | Cut-Off | Priority | Status |
|-------|----------|-------|-------|---------|---------|----------|--------|
| ORD-4505 | XYZ Inc | 12 | 200 | Overnight | 7:00 PM | 2 (SLA today 8 PM) | Ready |
| ORD-4522 | Large Customer | 25 | 500 | Overnight | 7:00 PM | 6 (Vol, standard tier) | Ready |
| ORD-4525 | Retail Partner | 18 | 300 | Overnight | 7:00 PM | 7 (Standard, medium) | Ready |
| ORD-4530 | Distribution | 22 | 400 | 2-Day | 7:00 PM | 8 (Larger order) | Ready |

**Picking Details**:
- Zones: A, B, C (full facility, largest volume)
- Lines: 77
- Est. picking time: 2.5 hours (77 / 100 lines/hour = 0.77 hrs actual, but higher complexity = 2.5 hrs with consolidation)
- Packing: 4 orders × 2 min/carton = 8 minutes prep
- **Picking complete**: 3:30 PM
- **Packing complete**: 3:40 PM
- **Stage ready**: 4:00 PM (3 hours before 7 PM cut-off)

---

### WAVE 4: LATE ARRIVALS / BACKLOG

**Time Window**: 3:30 PM – 4:30 PM
**Carriers**: Standard/Backlog (5:00+ PM or tomorrow)
**Staffing**: 2 pickers (opportunistic), 1 packer

| Order | Customer | Lines | Units | Service | Cut-Off | Priority | Status |
|-------|----------|-------|-------|---------|---------|----------|--------|
| ORD-4550 | Express Customer | 10 | 150 | Overnight | 5:00 PM | 1.5 (RUSH) | Hold for immediate pick |
| ORD-4560 | On-Demand | 8 | 120 | Standard | 5:00 PM | Standard | Ready |
| ORD-4595 | Late Arrival | 6 | 100 | Standard | TOMORROW | Backlog | Hold for tomorrow |

**Picking Details**:
- Zones: C (slow movers, optimization fill)
- Lines: 24
- Est. picking time: 1.0 hour
- Packing: 3 orders
- **Picking complete**: 4:30 PM
- **Packing complete**: 4:45 PM (tight for 5 PM carriers; may hold until next day)

**Note**: Late orders arriving after main waves are queued for next available wave or held for next day.

---

### CARRIER SCHEDULE & MANIFEST

| Carrier | Service | Cut-Off | Staging by | Dock | Manifest Line Items | Comments |
|---------|---------|---------|-----------|------|---|---|
| **USPS** | Priority | 4:00 PM | 3:45 PM | Mailbox | 3 orders, 18 lines, 200 units | Earliest; must ship first |
| **UPS** | Ground | 5:00 PM | 4:45 PM | Dock 1 | 2 orders (4520, 4560) + backlog | ~400 units |
| **UPS** | Overnight | 6:00 PM | 5:45 PM | Dock 1 | 2 orders (4501, 4512) | ~425 units |
| **FedEx** | 2-Day | 5:30 PM | 5:15 PM | Dock 2 | 2 orders (4515, 4535) | ~450 units |
| **FedEx** | Overnight | 7:00 PM | 6:45 PM | Dock 2 | 4 orders (4505, 4522, 4525, 4530) | ~1,400 units |
| **LTL** | Regional | — | — | — | None today | Hold for consolidation next day |

---

### AT-RISK ORDERS (ALERT)

| Order | Risk | Cut-Off | Mitigation |
|-------|------|---------|-----------|
| **ORD-4550** | Received 2:45 PM; tight timeline for Wave 4 | 5:00 PM | Assign top picker; expedite picking immediately upon receipt; pre-stage zone |
| **ORD-4560** | Wave 4 completion 4:45 PM; 5:00 PM cut-off only 15 min | 5:00 PM | Monitor closely; ready to manually load if needed; confirm packing speed |

---

### CONTINGENCIES

**If Wave 1 Delayed**: Hold USPS orders, ship via UPS Next Day instead (still arrive on time, SLA maintained)

**If Wave 2 Delayed >30 min**: May miss 5:00 PM UPS Ground cut-off; escalate to carrier for possible 5:30 PM hold or reroute via FedEx

**If Staffing Short**: Reduce Wave 3 target to 50 lines instead of 77; defer lower-priority orders (ORD-4530) to next day

**If Equipment Down** (conveyor, pallet jack): Reduce packing capacity by 50%; stagger waves further apart

---

### END OF SCHEDULE

**Instructions**:
1. **Distribute** this schedule to picking and packing teams by 8:00 AM
2. **Monitor** actual progress against plan; update timeline if slippage
3. **Escalate** any at-risk orders to supervisor within 30 minutes of risk identification
4. **Debrief** at end of day: Compare actual vs. planned; capture lessons for tomorrow's planning
