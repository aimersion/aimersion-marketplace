---
name: shipping-coordinator
version: 0.1.0
description: This skill should be used when the user asks about 'shipping coordination', 'order prioritization', 'carrier selection', 'wave planning', 'pick wave', 'pack station', 'cartonization', 'shipping accuracy', 'cut-off time', 'dock scheduling', 'outbound logistics', 'parcel manifesting', or needs help managing outbound order fulfillment.
---

# Warehouse Shipping Coordinator

Shipping coordination is the final operational phase before customer delivery. Strategic wave planning, carrier selection, cartonization, and shipping accuracy directly impact cost per shipment, on-time delivery, and customer satisfaction. This skill provides frameworks for order prioritization, wave planning, cartonization, and shipping logistics.

## Wave Planning Fundamentals

A "wave" is a batch of orders planned for picking, packing, and shipping together (typically within a 1–2 hour time block). Efficient wave planning synchronizes labor capacity with carrier pickup times and order priorities.

### Wave Planning Objectives

1. **Minimize travel time**: Group orders by zone to reduce pick path distance.
2. **Meet carrier cut-offs**: Ensure orders are packed and ready before carrier pickup.
3. **Balance labor load**: Distribute pick/pack volume evenly across shifts to avoid bottlenecks.
4. **Prioritize urgent orders**: Expedited or SLA-sensitive orders take precedence.

### Wave Planning Process

1. **Gather order queue**: Pull all unshipped orders from order management system.
2. **Identify carrier cut-off times**: Group orders by carrier and service level (e.g., parcel 6 PM cut-off, LTL 5 PM cut-off).
3. **Work backward**: For each cut-off, calculate required pick start time.
   - Example: 6 PM cut-off, 1 hour to pack → pick by 5 PM → 2 hours to pick 200 lines → start picking at 3 PM.
4. **Assign priorities**: Expedites first, then by cut-off, then by tier/age within same cut-off.
5. **Balance zones**: Distribute line volume across zones to prevent overload in any single zone.
6. **Create wave batches**: Group orders into logical waves with defined start/end times.
7. **Communicate schedule**: Publish wave plan to picking, packing, and shipping teams.

### Example Wave Schedule (Day Shift)

| Wave | Time Window | Carrier | Cut-Off | Orders | Lines | Priority | Zones | Est. Pick Time |
|------|-----------|---------|---------|--------|-------|----------|-------|---|
| 1 | 8:00–10:00 AM | Parcel (UPS) | 10:00 AM | 150 | 450 | Expedite (5 orders) + next cut-off (145 orders) | A, B, C | 1.5 hrs |
| 2 | 10:30 AM–12:30 PM | Parcel (FedEx) | 1:00 PM | 120 | 360 | Regular + hold (consolidation) | A, B, C | 1.5 hrs |
| 3 | 2:00–5:00 PM | LTL / Parcel | 5:00 PM | 200 | 600 | Standard (end of day) | A, B, C | 2.5 hrs |
| 4 | 6:00–8:00 PM | Parcel (UPS) | 8:00 PM | 100 | 300 | Standard + small orders | B, C | 1.5 hrs |

**Daily summary**: ~570 orders, ~1,710 lines, 4 waves, ~7 hours picking + packing + shipping

---

## Order Prioritization Rules

Within each wave, prioritize orders using this hierarchy:

### Tier 1: Same-Day / Expedite
- **Flag**: "Ship today" or "Expedite" in order notes.
- **Action**: Pick immediately; highest priority.
- **Timeline**: Target pack within 1 hour of order receipt.
- **Carrier**: Premium overnight (UPS Next Day, FedEx Overnight).

### Tier 2: Service Level / SLA
- **Flag**: Customer contract specifies delivery SLA (e.g., 2-day delivery guarantee).
- **Action**: Work backward from SLA due date; prioritize orders due soonest.
- **Bucket orders into SLA tiers** (e.g., Tier 1 = 24–48 hr SLA, Tier 2 = 2–3 day SLA, Tier 3 = standard).

### Tier 3: Carrier Cut-Off
- **Flag**: Carrier pickup time (e.g., UPS at 6 PM, FedEx at 7 PM).
- **Action**: Orders for earlier cut-off times take priority within same wave.
- **Example**: 10 AM cut-off orders picked before 2 PM cut-off orders.

### Tier 4: Order Age (FIFO Within Same Tier)
- **Flag**: Order receive/entry date.
- **Action**: Older orders prioritized to reduce inventory hold time and improve delivery time perception.
- **Example**: Two Tier 3 orders with same cut-off; pick the one received 2 hours earlier first.

### Tier 5: Order Size (Optimization)
- **Flag**: Line count or unit count.
- **Action**: Smaller orders (<5 lines) processed faster, can fill gaps between large orders.
- **Rationale**: Faster throughput, reduces "long tail" of pending orders.

### Example Prioritization Sequence

| Priority | Order ID | Tier | Lines | Cut-Off | Receive Time | Pick Sequence |
|----------|----------|------|-------|---------|--------------|---|
| 1 | ORD-4521 | Expedite | 8 | Today 2 PM | 10:15 AM | 1 (pick first) |
| 2 | ORD-4512 | SLA 24-hr | 12 | Tomorrow 5 PM | 9:30 AM | 2 |
| 3 | ORD-4515 | Carrier 6 PM | 6 | Today 6 PM | 10:00 AM | 3 |
| 4 | ORD-4518 | Carrier 6 PM | 15 | Today 6 PM | 11:00 AM | 4 (same cut-off, larger order) |
| 5 | ORD-4520 | Standard | 4 | Std (5-day) | 10:30 AM | 5 (standard tier, small; fill gap) |

---

## Pick Methods & Wave Execution

### Single Order Picking (Pick-To-Order)

**Process**: One picker, one complete order.

- **Accuracy**: Highest (~99.9%, single picker owns order).
- **Productivity**: Lower (60–80 lines/hour; more travel per line).
- **When to use**: Small facilities, high-mix, customer-specific requirements, fragile items.

### Batch Picking

**Process**: One picker, multiple orders grouped by location sequence.

Example: Picker picks Item A (in 5 orders), moves to Item B location (in 8 orders), picks, moves to Item C location (in 3 orders), picks. One trip picks multiple orders.

- **Accuracy**: Moderate (~98%, higher error due to multi-order consolidation).
- **Productivity**: Higher (120–150 lines/hour; fewer location trips).
- **Labor**:  1 picker + 1–2 sorters to consolidate picks.
- **Best for**: High-velocity, medium mix, dedicated sort area.

### Zone Picking

**Process**: Warehouse divided into zones; each zone picker picks all items in that zone for multiple orders simultaneously.

Example: Zone A picker picks all Zone A items for all orders in wave. Orders then pass to Zone B picker, etc. Orders accumulate and merge at packing.

- **Accuracy**: High (~98.5%, zone-focused, fewer distractions).
- **Productivity**: High (120–150 lines/hour per zone).
- **Labor**: 3–4 pickers (one per zone) + 1 merger/consolidator.
- **Best for**: Large facilities, clear zone separation, standard SKU distribution.

### Wave Picking

**Process**: All zones pick simultaneously; picks merge at consolidation/pack station.

Similar to zone picking but coordinated; wave starts in all zones at same time, ensuring synchronization.

- **Accuracy**: High (~98.5%, focused by zone).
- **Productivity**: Very High (150+ lines/hour).
- **Throughput**: Excellent; all zones working in parallel.
- **Best for**: Large high-volume facilities, synchronized carrier windows.

### Method Selection Matrix

| Method | Accuracy | Productivity | Facility Size | Setup Cost | Best Use |
|--------|----------|--------------|---|---|---|
| **Single Order** | 99.9% | 60–80 lines/hr | Small (<100 SKU) | Low | High-value, custom |
| **Batch** | 98% | 120–150 lines/hr | Medium (100–1000 SKU) | Moderate | Standard multi-order |
| **Zone** | 98.5% | 120–150 lines/hr | Large (1000+ SKU) | Moderate–High | Specialized zones |
| **Wave** | 98.5% | 150+ lines/hr | Large with defined flow | High | High-volume synchronized |

---

## Pack Station Optimization

Pack stations are where orders are assembled into cartons, labeled, and made ready for shipping.

### Pack Station Layout

**Ergonomic design**:

1. **Incoming conveyor**: Delivers picks to station (or manual staging if no conveyor).
2. **Work surface** (36–42 inches height): For assembly and scanning.
3. **Carton dispensers**: Multiple sizes (small, medium, large) within arm's reach.
4. **Packing material station**: Void fill (tissue, air pillows, paper), tape dispensers.
5. **Scale**: For weight verification and DIM weight calculation.
6. **Barcode printer/scanner**: For label generation and scanning.
7. **Outgoing conveyor**: Moves packed cartons to shipping.
8. **Label station**: Separate area for label generation if not integrated.

### Cartonization Algorithm (Box Selection)

Select the smallest carton that fits items + buffer.

**Process**:
1. Determine total item dimensions (length × width × height).
2. Add buffer (typically 1 inch on each dimension) for handling.
3. Select carton from inventory that accommodates packed size + buffer.
4. Calculate DIM weight (see: DIM Weight Calculation).
5. Bill shipment on whichever is greater: actual weight or DIM weight.

### Example Cartonization

**Order contents**:
- Item 1: Book, 8" × 5" × 1", weight 0.5 lbs
- Item 2: Phone case, 6" × 4" × 0.5", weight 0.2 lbs

**Packed dimensions** (items stacked):
- Length: 8" (Item 1 longer)
- Width: 5" (Item 1 wider)
- Height: 1.5" (Item 1 1" + Item 2 0.5")
- Add 1" buffer: 9" × 6" × 2.5"

**Available cartons**:
- Small (10" × 8" × 4"): FITS ✓ (sufficient, not excessive)
- Medium (12" × 10" × 6"): Oversized (void fill required)
- Large (16" × 12" × 8"): Oversized (excessive void fill, higher DIM)

**Selection**: Small carton (10" × 8" × 4")

**Total weight**: 0.5 + 0.2 = 0.7 lbs

**DIM weight calculation** (see next section).

---

## DIM Weight Calculation

DIM weight (dimensional weight) is a charge applied when a light, bulky item exceeds its dimensional threshold. Carriers use whichever is greater: actual weight or DIM weight.

### DIM Weight Formula

$$\text{DIM Weight} = \frac{\text{Length (inches)} \times \text{Width (inches)} \times \text{Height (inches)}}{\text{DIM Factor}}$$

**DIM Factors**:
- **Domestic parcel** (UPS, FedEx, USPS): DIM factor = 139
- **International parcel**: DIM factor = 166 (generally; confirm with carrier)
- **LTL freight**: DIM factors vary by carrier; typically 200+

### DIM Weight Examples

**Example 1**: Pillow
- Dimensions: 20" × 16" × 8"
- Actual weight: 1.5 lbs
- DIM weight: (20 × 16 × 8) / 139 = 2,560 / 139 = **18.4 lbs**
- **Billable weight**: 18.4 lbs (DIM weight much higher; carrier charges for space)
- **Implication**: Light, bulky items incur premium freight cost.

**Example 2**: Book Package
- Dimensions: 12" × 9" × 3"
- Actual weight: 5 lbs
- DIM weight: (12 × 9 × 3) / 139 = 324 / 139 = **2.3 lbs**
- **Billable weight**: 5 lbs (actual weight higher; charge for weight)
- **Implication**: Dense items billed on actual weight.

### DIM Weight Impact on Packaging

**Strategy**:
- Minimize carton dimensions to reduce DIM weight (tighter packing, smaller cartons).
- Use DIM weight calculation in cartonization decision (select smallest adequate carton).
- Communicate DIM charges to customer service / sales (impacts shipping cost strategy).

### DIM Avoidance Tactics

1. **Compact packaging**: Use appropriately sized cartons; avoid oversized boxes.
2. **Consolidation**: Combine multiple orders if compatible (reduces total cartons, total DIM).
3. **Carrier negotiation**: High-volume customers may negotiate DIM factor discounts.
4. **Customer communication**: Educate customers on DIM weight; explain cost transparency.

---

## Carrier Selection & Service Levels

### Carrier Types by Service Level

| Carrier Type | Cost | Speed | Volume Range | Best For |
|---|---|---|---|---|
| **Parcel (UPS, FedEx, USPS)** | $$–$$ (high per unit, rates by zone) | 1–7 days | < 150 lbs (typical) | Small packages, fast delivery, residential |
| **LTL (Less Than Truckload)** | $$–$$$ (lower per pound, higher minimum) | 2–5 days | 150–15,000 lbs | Medium shipments, regional distribution |
| **FTL (Full Truckload)** | $$$–$$$$ (lowest per pound, high fixed) | 1–3 days | 15,000–45,000 lbs | Large shipments, dedicated lanes |

### Service Level Selection by Order Profile

| Order Scenario | Recommended Carrier | Service Level | Rationale |
|---|---|---|---|
| Small parcel, residential, 1–2 days | UPS / FedEx | Next Day, 2-Day | Speed critical, residential delivery capability |
| Small parcel, business, standard | USPS / FedEx Ground | Priority Mail, Ground | Cost-effective, standard delivery |
| Medium regional, 2–5 days | FedEx LTL, ABF | LTL Regional | Cost-efficient for 200–5,000 lbs |
| Large consolidated, weekly | FedEx Freight, YRC | LTL, FTL | Negotiated rates, regular schedules |
| Full truckload, dedicated lane | ABF, JB Hunt, XPO | FTL | Lowest per-pound cost, dedicated equipment |

### Multi-Carrier Strategy

Recommended approach for mid-large facilities:

1. **Negotiate contracts** with 2–3 carriers per service level (parcel, LTL, FTL).
2. **Rate shop each order**: At pack time, calculate cost via each carrier, select lowest rate.
3. **Carrier allocation rules**:
   - UPS for premium zones, fastest service.
   - FedEx for standard/regional, balanced cost-speed.
   - USPS for lightweight, residential, cost-only.
   - LTL carriers for regional consolidation.

**Benefits**:
- Cost reduction: 5–15% through rate competition.
- Service redundancy: If one carrier overbooked, use alternate.
- Negotiating leverage: Higher volume spreads across multiple carriers.

---

## Shipping Documentation

### Bill of Lading (BOL)

The BOL is the legal shipment contract between shipper and carrier. For LTL/FTL shipments.

**Required fields**:
- **Shipper info**: Name, address, phone.
- **Consignee info**: Customer name, address, phone.
- **Shipment details**: Weight, dimensions, commodity description, hazmat (if applicable).
- **Freight charges**: Prepaid (shipper pays) vs. Collect (consignee pays).
- **Special instructions**: Delivery notes, equipment requests.

**Template section**:
```
SHIPPER: [Company Name], [Address]
CONSIGNEE: [Customer Name], [Address]
Commodity: [Description]
Weight: [Total lbs] | Dimensions: [L×W×H]
Pieces: [# of pallets/cartons]
Hazmat: ☐ Yes ☐ No (if yes, class and labels required)
Freight Prepaid ☐ | Collect ☐
```

### Packing List

Detailed list of items in shipment for verification by receiving party.

**Includes**:
- Order number, PO number (if B2B).
- Item SKU, description, quantity, unit price.
- Line-by-line list (for picking verification).
- Total value, weight, dimensions.

### Commercial Invoice (International)

For international shipments; declares shipment value for customs.

**Includes**:
- Detailed item list with unit price and extended value.
- Total declared value.
- HS codes (Harmonized Tariff System) for customs classification.
- Country of origin per item.
- Currency.

### Hazmat Documentation

For hazardous materials shipments.

**Required**:
- Hazmat placards on carton and vehicle (if FTL).
- Hazmat class label (Class 3, 8, 9, etc.).
- Emergency contact phone number.
- Shipping name and technical name of hazardous material.
- Carrier hazmat certification.

**Responsibility**: Shipper ensures correct classification; carrier audits.

---

## Cut-Off Time Management

Cut-off times are carrier pickup times. Missing a cut-off delays shipment by 24 hours (next day pickup).

### Cut-Off Time Strategy

**Step 1: Identify carrier cut-off times** (typically):
- Parcel (UPS, FedEx): 5–7 PM (evening pickup).
- LTL regional: 4–5 PM (regional terminal closes).
- FTL: 8 AM (morning depart for next-day delivery).

**Step 2: Build backward schedule**:
- Carrier cut-off: 6:00 PM.
- Pack time buffer (15 min to scan labels, move to dock): 5:45 PM.
- Pack window: 1 hour (assume 1 hr to pack 50 cartons).
- Pick end time: 4:45 PM.
- Pick window: 2 hours (assume 2 hrs to pick 200 lines).
- **Pick start time: 2:45 PM**.

**Step 3: Publish pick schedule**:
- Wave 1 (early morning): Standard orders, slow carriers.
- Wave 2 (late morning): Medium-volume, afternoon cut-offs.
- Wave 3 (afternoon): Rush orders, evening cut-offs (2:45 PM start).

**Step 4: Exception handling**:
- Expedite orders received after Wave 3 start → evaluate for holding to next day or premium overnight.
- Repeated cut-off misses → investigate capacity constraints (understaffing, picking inefficiency).

### Sample Daily Schedule (Parcel Facility)

| Time | Activity | Detail |
|------|----------|--------|
| 2:00 PM | Wave 3 Picks Start | 200 lines, 50 orders (5 PM, 6 PM cut-off) |
| 4:00 PM | Wave 3 Picks Complete | Bring to pack station |
| 4:00–5:00 PM | Wave 3 Packing | 50 cartons packed, labeled, sorted by carrier |
| 5:00–5:45 PM | Dock Staging & Final Scan | Stage cartons by carrier; final barcode verification |
| 5:45–6:00 PM | Carrier Pickup | UPS, FedEx arrive; load trailers |
| 6:00 PM+ | Late Orders | New orders received after 6 PM → hold for next wave (tomorrow) |

---

## Returns Management

Returns are critical to customer satisfaction and impact inventory accuracy.

### Return Authorization (RA) Process

1. **Customer initiates return**: Contacts customer service; provides reason.
2. **Evaluation**: Inspect for damage/missing items; verify eligibility (within return window, correct condition).
3. **RA assignment**: Generate RA # (authorization); send to customer with label and instructions.
4. **Customer ships back**: Customer applies label; returns via carrier.
5. **Return inbound**: Receive at warehouse with RA #; inspect; disposition.

### Return Disposition Decision Tree

| Condition | Disposition | Action | Inventory Treatment |
|---|---|---|---|
| **Unopened, saleable** | Restock | Return to bin; quality check | Add back to on-hand |
| **Opened, like-new** | Refurbish | Clean, repackage, inspect | Return to inventory (marked refurbished) |
| **Damaged, repairable** | Refurbish | Repair, inspect, repackage | Return to inventory (marked "as-is" or discount) |
| **Damaged, unrepairable** | Scrap / Liquidate | Liquidate for parts / bulk sale | Remove from inventory; book loss |
| **Defective** | Vendor Return | Return to supplier per RMA | Remove from inventory; apply vendor credit |
| **Wrong item** | Return to Supplier | Return to vendor; obtain credit | Remove from inventory; credit PO |

### Example Return Flow

- Customer ORD-4500 returns Item A (defective electronic).
- RA-08521 generated; customer ships item back.
- Warehouse receives 2 weeks later.
- Quality inspects: confirms defective (will not power on).
- Disposition: Return to supplier under 30-day warranty.
- Credit memo issued by supplier: $45.
- Inventory adjusted: −1 unit Item A; +1 unit in supplier return queue.

### Return Rate Tracking

**KPI**: Return Rate % = (Total units returned / Total units shipped) × 100

- **Target**: <1% return rate (industry standard).
- **Acceptable range**: 0.5–1.5%.
- **Investigate**: Return rate >2% indicates quality issue, product misrepresentation, or customer dissatisfaction.

---

## Shipping Accuracy

Shipping accuracy is the % of orders shipped with correct items, quantities, and no damage.

### Shipping Accuracy Definition

**Perfect shipment** = All items picked correctly, quantities match, no damage, correct address, label correct.

$$\text{Shipping Accuracy \%} = \frac{\text{Perfect Shipments}}{\text{Total Shipments}} \times 100$$

**Target**: >99.5% (less than 1 error per 200 shipments).

### Accuracy Verification Methods

**Method 1: Scan-Pack (Verify-at-Pack)**
- As items are packed, barcode scanner confirms item matches order.
- If scan mismatch → alert packer immediately.
- Advantage: Catches errors before shipping.
- Disadvantage: Adds 30 seconds per carton to pack time.

**Method 2: Weigh-and-Ship (Post-Pack Verification)**
- After packing complete, weigh carton; compare to expected weight.
- If weight variance >5%, open and verify contents.
- Faster than scan-pack but misses some errors (doesn't catch wrong-item if similar weight).

**Method 3: Audit / Sampling**
- Randomly sample 2–5% of cartons daily.
- Open and inspect contents vs. label.
- If defects found, adjust quality estimate; investigate root cause.

**Recommended**: Scan-pack for high-value, critical orders; weigh-and-ship for standard; audit for trend identification.

### Root Cause Analysis for Accuracy Misses

| Error Type | Root Cause | Prevention |
|---|---|---|
| **Wrong item picked** | Similar SKU confusion, poor slotting, fatigue | Scan verification, zone picking, break policy |
| **Wrong quantity** | Picking scale miscalibration, count error, oversized bin | Calibrate scales, recount verification, bin sizing |
| **Wrong address** | System entry error, customer typo, label misprinting | Address verification before label, carrier validation |
| **Damage in transit** | Inadequate packing, carton damage, carrier mishandling | Void fill quality, DIM awareness, carrier audit |
| **Duplicate shipment** | System error, manual override, duplicate order entry | System controls, audit, clear duplicate detection rules |

---

## Summary: Shipping Coordination Best Practices

1. **Plan waves** by carrier cut-off and order priority (expedite → SLA → cut-off → age → size).
2. **Choose pick method** appropriate to facility (single for small, wave for large).
3. **Optimize pack stations** for ergonomics, carton selection, and DIM efficiency.
4. **Calculate DIM weight** on light, bulky items; select appropriately sized cartons.
5. **Manage cut-off times** with backward scheduling; publish clear pick/pack timeline.
6. **Select carriers** strategically; negotiate rates, use multi-carrier rate shopping.
7. **Verify shipping accuracy** via scan-pack or weigh-and-ship; target >99.5%.
8. **Track returns** with RA process; manage disposition; monitor return rate <1%.

**Expected outcomes**: On-time shipping >98%, shipping accuracy >99.5%, cost per unit shipped minimized, customer satisfaction high.
