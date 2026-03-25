---
name: receiving-processor
version: 0.1.0
description: This skill should be used when the user asks about 'receiving process', 'inbound scheduling', 'dock scheduling', 'receiving checklist', 'quality inspection', 'put-away strategy', 'blind receiving', 'cross-docking', 'vendor compliance', 'receiving accuracy', 'inbound exceptions', or needs help managing the warehouse receiving and put-away process.
---

# Warehouse Receiving Processor

Receiving is the first operation in the warehouse value chain. Quality receiving — accurate count, proper inspection, fast dock-to-available time — sets the foundation for inventory integrity and customer fulfillment. This skill provides frameworks for inbound scheduling, receiving processes, quality control, and put-away strategies.

## Inbound Scheduling & Dock Capacity

### Appointment-Based Scheduling

All inbound shipments should be scheduled via appointment system. Walk-in shipments disrupt operations and reduce efficiency.

**Appointment booking**:
- Carrier confirms delivery window (e.g., Tuesday 8:00 AM – 10:00 AM).
- Warehouse confirms dock door assignment and trailer staging area.
- Appointment is recorded with expected carton/pallet count, weight, product type.

**Dock allocation**:
- Assign appointment to specific dock door (1, 2, 3, etc.).
- Avoid double-booking; provide 15–30 minute buffer between appointments per door.
- Prioritize by: expedited orders (Just-in-Time, perishables), high-value inventory, then FIFO.

### Dock Utilization Target

**Optimal utilization**: 80% of available dock hours.

**Calculation**:
- Total dock doors: 4
- Operating hours: 16 hours/day (6 AM – 10 PM, accounting for staffing)
- Available dock hours: 4 doors × 16 hours = 64 door-hours/day
- Average dock time per trailer: 2 hours (unload + paperwork)
- Trailers per day scheduled: 64 × 0.80 / 2 = 25.6, round to 25 trailers/day

**Why not 100%?**
- No buffer for exceptions (late arrival, oversized load, quality hold).
- No time for dock staging, equipment maintenance, cleaning.
- Staff needs breaks and transition time between trucks.
- At 100%, one delay cascades all day.

### Inbound Appointment Priority Rules

Prioritize appointments in this order:

1. **Expedited/Time-Sensitive**: Just-In-Time components, perishables (cold chain time limit), customer orders with tight deadlines.
2. **High-Value Inventory**: Items with highest dollar value or scarcity; reduce storage risk by receiving ASAP.
3. **Regular Scheduled**: Standard purchase orders, balanced across suppliers.
4. **Bulk/Seasonal**: Off-season inventory, slow-moving overstock (lowest priority; can defer if needed).

## Receiving Process Steps

Receiving flows through these steps:

1. **Appointment Check-In**: Confirm trailer identity, driver info, confirm appointment in system.
2. **Dock Assignment**: Assign parking spot for trailer (keep dock door clear if needed).
3. **Trailer Inspection**: Pre-unload safety and condition check.
4. **Offload**: Unload freight into staging area.
5. **Count Verification**: Count cartons/pallets; compare to PO and ASN (if available).
6. **Quality Inspection**: Visual inspection, sample inspection, or full inspection per plan.
7. **System Receipt**: Mark shipment "received" in WMS; adjust inventory.
8. **Discrepancy Resolution**: Address shortage, overage, damage, or incorrect items.
9. **Put-Away Direction**: Direct inventory to assigned location; or to quarantine if on hold.

### Step 1: Appointment Check-In (5 minutes)

- Verify trailer number and seal number match appointment.
- Record arrival time (track carrier appointment compliance).
- Collect Bill of Lading (BOL) and shipping paperwork.
- Note driver name and contact.
- If late, note delay reason (traffic, dock wait, etc.) for future scheduling adjustment.

**Exception**: Walk-in shipment with no appointment → assign available dock time; inform supervisor.

### Step 2: Dock Assignment (2 minutes)

- Assign available dock door.
- Provide parking instructions to driver (staging area).
- Position dock equipment (dock leveler, pallet jacks, etc.).
- Notify warehouse staff of incoming load (capacity, equipment type, special handling needed).

### Step 3: Trailer Inspection (5 minutes)

Conduct 10-point pre-unload inspection:

| # | Inspection Item | Check | Pass/Fail | Action if Fail |
|---|---|---|---|---|
| 1 | **Seal Integrity** | Seal number matches BOL; seal not broken | ✓ | Photo; do not unload; report to carrier |
| 2 | **Trailer Condition** | No dents, holes, or structural damage | ✓ | Photo; flag damage; note on receipt |
| 3 | **Floor Integrity** | Floor solid, not rotted or cracked | ✓ | Risk of cargo damage; unload carefully |
| 4 | **Temperature (if cold chain)** | Recorded temp within spec; plug-in active | ✓ | If out of spec, escalate to quality |
| 5 | **Odor/Pest** | No foul odor, no visible pest evidence | ✓ | Do not unload; report to carrier |
| 6 | **Lighting** | Lights functional for visibility | ✓ | Use portable lights; note issue |
| 7 | **Trailer Latches** | Rear doors close and latch fully | ✓ | Ensure safe opening; avoid spillage |
| 8 | **Load Visibility** | Can see freight clearly; not blocked | ✓ | Remove obstructions before unload |
| 9 | **Hazmat Labels (if applicable)** | Hazmat labels present and correct | ✓ | If missing, do not unload; report |
| 10 | **Weight (if scale available)** | Compare actual vs. BOL; major variance flag | ✓ | Investigate; possible short/overage |

**Result**: Pass all = unload. Fail on seal, odor, or hazmat = do not unload; escalate immediately.

### Step 4: Offload (30–90 minutes)

- Position trailer at dock.
- Deploy dock leveler; position pallet jacks or forklifts.
- Unload freight into dock staging area (keep organized by pallet/carton).
- Pallet jacks stage freight by department or location group.
- Apply receiving labels with date/time received if traceability needed.
- Return empty trailer from dock; park in staging.

**Staging area layout**: Organize freight by zone:
- Quality hold area (if inspection needed before receipt).
- Receiving area (count and verify).
- Put-away area (ready for location assignment).

### Step 5: Count Verification (10–30 minutes)

Compare physical count to:
- **Purchase Order (PO)**: Expected quantity at order placement.
- **Advance Ship Notice (ASN)**: Shipment details sent by vendor pre-delivery (if used).

**Verification method**:

| Method | Accuracy | Speed | Use Case |
|--------|----------|-------|----------|
| **Blind Receiving** | Highest (99%+) | Moderate | Standard; receiver counts without system info |
| **ASN-Based (Semi-Blind)** | High (98%+) | Fast | Trusting vendor; count to confirm; discrepancies only |
| **Non-Blind (System Match)** | Moderate (95%) | Very Fast | High-trust vendor; count optional if system matches |

**Blind Receiving Process** (Most Accurate):
1. Select receipt without viewing system PO quantity.
2. Count physical cartons/pallets.
3. Enter count into WMS.
4. System compares actual count to PO.
5. If variance, investigate before accepting.

**Example**:
- PO expected: 250 cartons
- Blind count actual: 248 cartons
- Variance: −2 cartons (shortage)
- Action: Recount; if confirmed, log shortage exception (see: Discrepancy Resolution)

### Step 6: Quality Inspection (5–45 minutes)

Quality inspection verifies that received goods meet specifications.

#### Inspection Types

**Visual Inspection** (5 min):
- Check carton/pallet condition (wet, crushed, torn).
- Verify labels match PO (correct SKU, expiration date, country of origin).
- Sample check: open 3–5 cartons per pallet; verify contents match label.
- Note any cosmetic defects (if quality-critical product).

**Quantity Check** (5 min):
- If order is by piece count (not carton), verify case count and piece count.
- Example: PO for 500 units in 10 cases of 50. Receive 10 cases; spot-check 2 cases → confirm 50 each.

**Dimensional Verification** (5 min):
- If applicable (furniture, appliances), measure samples to ensure correct dimensions.
- Cross-reference to PO or product spec.

**Certificate of Conformance (CoC)** (2 min):
- Verify vendor-supplied CoC documentation (for regulated products: food safety, pharmaceutical, electronics certification).
- File with receipt documentation.

**Sample Inspection (AQL)** (10–30 min):
- Use Acceptable Quality Level (AQL) sampling plan for statistical quality assurance.
- AQL defines acceptable defect rate for received lot.
- Sample size determined by lot size and AQL level.

#### AQL (Acceptable Quality Level) Sampling

AQL standards define:
- **Critical defects** (AQL 0.65–1.0): Safety or compliance risk; rare acceptance if found.
- **Major defects** (AQL 2.5): Functional or appearance issue; rare acceptance if found.
- **Minor defects** (AQL 4.0): Cosmetic; acceptable in small numbers.

**Sample Plan Example** (AQL 2.5, Major defects):

| Lot Size (Cartons) | Sample Size | Accept # | Reject # |
|---|---|---|---|
| 1–8 | 2 | 0 | 1 |
| 9–15 | 3 | 0 | 1 |
| 16–25 | 5 | 0 | 1 |
| 26–50 | 8 | 1 | 2 |
| 51–90 | 13 | 2 | 3 |
| 91–150 | 20 | 3 | 4 |
| 151–280 | 32 | 4 | 5 |
| 281–500 | 50 | 5 | 6 |
| 501–1200 | 80 | 7 | 8 |

**Example**: Receive 100 cartons with AQL 2.5.
- Per table: Sample size = 13.
- Randomly select 13 cartons.
- If find 0–2 defects: ACCEPT lot.
- If find 3+ defects: REJECT lot (return or renegotiate).

### Step 7: System Receipt (5 minutes)

Once all checks pass:
- Confirm receipt in WMS.
- Adjust inventory for received quantity.
- If variance (shortage/overage), record exception (see: Discrepancy Resolution).
- Close purchase order (if fully received) or mark as partial (if outstanding qty expected).

**Example WMS Entry**:
```
PO #: 54321
SKU: Widget-100
Expected Qty: 250 cartons
Received Qty: 248 cartons
Status: RECEIVED (with shortage exception)
Dock-to-Received Time: 1 hour 15 minutes (record for dock efficiency metric)
```

### Step 8: Discrepancy Resolution

Address variance before making inventory available.

| Exception Type | Resolution | Timeline | Escalation |
|---|---|---|---|
| **Shortage (−2 to −5%)** | Recount; if confirmed, log shortage; request vendor credit or expedited reship | 1 day | Purchasing manager |
| **Shortage (>−5%)** | Likely carrier claim; photograph packaging; file carrier claim within 30 days | Immediate | Carrier claims team; supplier |
| **Overage (+2 to +5%)** | Accept or return per vendor instructions; resolve in next PO | 1 day | Purchasing; confirm with vendor |
| **Overage (>+5%)** | Likely vendor billing error; contact supplier immediately | Immediate | Purchasing manager |
| **Wrong Item** | Do not accept; return to vendor immediately; file claim if freight prepaid | Immediate | Purchasing; carrier (if carrier error) |
| **Damage (cosmetic)** | Accept if product functional; note on receipt | — | Note for customer |
| **Damage (functional)** | Quarantine; obtain vendor RMA; return or scrap per RMA | Immediate | Quality manager; vendor |
| **Label Error** | Relabel with correct information (barcode, expiration, etc.) if acceptable; otherwise return | 1 day | Quality; purchasing |

**Shortage Example**:
- PO 54321 for 250 cartons received only 248.
- Recount confirms 248.
- Issue shortage exception in WMS.
- Notify purchasing; request vendor credit for 2 cartons (or reship if critical).
- Update forecast/inventory position.

**Damage Claim Example**:
- Receive pallet of 40 cartons; 3 cartons crushed (contents damaged).
- Photograph damage; document packaging and shipping method.
- Quarantine damaged cartons.
- Accept remaining 37 cartons.
- File damage claim with carrier (if freight prepaid) or vendor (if FOB vendor).
- Pursue $XX reimbursement per claim resolution process.

### Step 9: Put-Away Direction

Once received and inspected, direct inventory to storage location.

See: Put-Away Strategies (below).

---

## Quality Inspection Detail

### Receiving Quality Plan

Develop a receiving quality plan for each major supplier:

| Supplier | Product Category | Volume (ppm) | Inspection Level | AQL | Notes |
|----------|---|---|---|---|---|
| **ABC Supplier** | Electronics components | 5000 | Sample | 1.0 | Critical; high-value |
| **XYZ Foods** | Packaged goods | 50000 | Visual + sample | 2.5 | Expiration date check; temperature log |
| **QRS Furniture** | Assembled furniture | 200 | 100% check (dimensional, cosmetic) | 2.5 | Dimensions critical; cosmetic defects common |
| **LMN Packaging** | Corrugated boxes | 20000 | Visual | 4.0 | Low-risk; visual suffices |

**Inspection by risk tier**:
- **High-risk** (safety, regulatory, high-value): Sample inspection (AQL 1.0–1.5) or 100% inspection.
- **Medium-risk** (functional, moderate value): Sample inspection (AQL 2.5).
- **Low-risk** (commodity, low defect history): Visual inspection only (AQL 4.0).

### Receiving Inspection Report Template

| Field | Example |
|-------|---------|
| **Date Received** | 3/20/2026 |
| **PO #** | 54321 |
| **Supplier** | ABC Electronics Inc. |
| **Carrier** | FedEx Freight |
| **Trailer #** | 85621 |
| **Expected Qty** | 250 cartons |
| **Actual Qty** | 248 cartons |
| **Inspection Method** | Sample (AQL 2.5) |
| **Sample Size** | 13 cartons |
| **Defects Found** | 1 (loose components in 1 carton) |
| **AQL Decision** | ACCEPT (1 defect ≤ 2 limit) |
| **Notes** | Minor issue; reworked carton; rest of lot acceptable. |
| **Dock Time** | 65 minutes |
| **Disposition** | Received as 248 cartons; shortage logged for vendor credit |
| **Inspector** | Maria García |
| **Date/Time** | 3/20/2026 10:45 AM |

---

## Put-Away Strategies

Put-away directs received inventory to its storage location. Strategic put-away preserves slotting optimization (see: layout-optimizer skill).

### Put-Away Methods

| Method | Speed | Accuracy | Slotting Preservation | Best Use |
|--------|-------|----------|---|---|
| **Directed Put-Away (System-Guided)** | Moderate | Highest | Excellent | Standard; system assigns optimal location |
| **Random Put-Away (Pickers Choose)** | Very Fast | Moderate | Poor | Small facilities, time-constrained |
| **Fixed Location (Same SKU → Same Location)** | Fast | Highest | Excellent | Limited SKU count; high reorder frequency |
| **Zone-Directed (Put-Away Team → Zone)** | Fast | High | Good | Large facilities; split responsibility by zone |

**Recommendation**: Use directed put-away as default to maintain slotting integrity.

### Directed Put-Away Process

1. **Receive and inspect** shipment (per receiving steps above).
2. **System directs location**: WMS analyzes:
   - SKU slotting rules (A-mover → golden zone, C-mover → remote).
   - Current inventory level in all locations for this SKU.
   - Available space in target locations.
   - Replenishment queue (forward pick depletion rate).
3. **Assign put-away task**: System displays task for put-away associate:
   - SKU, quantity, current location, target location.
   - Route (most efficient path to location).
4. **Verify put-away**: Associate places inventory in assigned location; scans location barcode to confirm.
5. **System confirms**: Inventory now "on hand" at target location, available for picking.

**Example system direction**:
```
Put-Away Task #3401
SKU: Widget-100 (A-mover)
Qty: 48 cartons
Current Loc: Dock A
Target Loc: Bay F-3, Rack 2, Level 2 (forward pick golden zone)
Route: Dock A → Main Aisle → Bay F → Location scan
Est. Time: 12 minutes
```

### Replenishment-Fed Put-Away

For high-velocity SKUs, use "replenishment feeding" to optimize the forward pick zone:

1. **Bulk storage** holds 5–10 day supply.
2. **Forward pick zone** holds 1–2 day supply at reorder trigger (e.g., <5 cases left).
3. **Replenishment queue** consolidates bulk cartons → replenishment unit → forward pick.

**Example**:
- SKU: Widget-100 (A-mover, 500 picks/day, 2 cartons/pick).
- Forward pick slot: 10-case location.
- Trigger: When <5 cases remaining, trigger replenishment.
- Replenishment put-away: Take 10 cases from bulk storage → replenish forward pick location to 10 cases.
- Benefit: Forward pick zone never depletes; picking always fast; no stock-out risk.

---

## Vendor Compliance Programs

Vendor compliance reduces receiving exceptions and improves supplier quality.

### Key Compliance Requirements

1. **Routing Guide Compliance**:
   - Specify approved carriers for each shipping lane.
   - Vendor must use approved carrier (controls freight cost and service level).
   - Non-compliance: assess chargeback.

2. **Labeling Requirements (UCC-128, GS1)**:
   - Each carton must have GS1 barcode (GTIN-14 for case, SSCC for pallet).
   - Label must show: GTIN, lot/batch, expiration date (if perishable), country of origin.
   - Incorrect labeling delays receiving; assess chargeback.

3. **Packing Standards**:
   - Cases packed to spec (weight tolerance ±3%, dimensions per PO).
   - Pallets stacked safely (max height, weight distribution).
   - Void fill to prevent cargo shifting.

4. **Advance Ship Notice (ASN) Timing**:
   - ASN must arrive 24 hours before shipment (enables faster receiving if blind ASN-based).
   - Late ASN delays receiving; assess chargeback.

5. **Purchase Order Compliance**:
   - Ship exact PO quantity (no unilateral overs or shorts).
   - Ship correct SKU (no substitutions).
   - Ship by PO due date (late shipment disrupts demand).

### Chargeback Structure

Example chargeback schedule for non-compliance:

| Violation | Chargeback | Frequency | Notes |
|-----------|-----------|-----------|-------|
| **Late ASN** | $25 | Per shipment | Charged if ASN <24 hrs before arrival |
| **Incorrect Labeling** | $50 | Per carton | Relabeling required; increases labor cost |
| **Packing Damage** | Actual + 25% | Per shipment | Restock cost + handling |
| **Routing Non-Compliance** | $100 | Per shipment | Freight cost overage charged back |
| **Overage Without PO** | Actual value + 20% | Per shipment | Unsolicited goods; restocking cost |
| **Quality Failure** | Return + freight | Per incident | Full return; vendor reimburses freight |

**Communication**: Notify vendor of chargeback within 5 days; request corrective action; repeat offenders flagged for contract review.

---

## Cross-Docking Strategy

Cross-docking is a receiving-to-shipping pass-through with minimal or no storage.

### Cross-Docking Flow

1. **Receive**: Inbound truck arrives; unload into staging area sorted by destination zone.
2. **Sort**: Consolidate freight by outbound trailer assignment (no system receipt, no inventory storage).
3. **Stage**: Group outbound shipments by trailer assignment.
4. **Load**: Direct load from inbound staging to outbound trailer (within 2–4 hours).
5. **Ship**: Outbound truck departs.

### Cross-Docking Advantages

- **Speed**: Order delivery time compressed (no storage/retrieve cycle).
- **Cost**: Minimal storage cost; lower inventory carrying cost.
- **Throughput**: High-volume, fast-moving inventory handled efficiently.

### Cross-Docking Requirements

- **Tight ASN accuracy**: Must know destination before unload.
- **Synchronized timing**: Inbound and outbound trucks must align (typically within 2–4 hour window).
- **Staging space**: Dedicated inbound/outbound staging area (~20% of facility cube).
- **Labor agility**: Ability to sort and consolidate freight quickly.
- **IT integration**: Real-time visibility to outbound demand and carrier assignments.

### When to Cross-Dock

**Best for**:
- High-velocity, standard SKUs (A-movers).
- Predictable demand (few SKU mix variations).
- Time-sensitive orders (just-in-time manufacturing, perishables).
- Large-volume suppliers (consolidation opportunities).

**Avoid for**:
- Low-velocity or slow movers.
- Unpredictable demand mix.
- Hazmat or special handling (complexity increases).

---

## Receiving KPI Targets

Track and measure receiving performance:

| KPI | Formula | Target | Notes |
|---|---|---|---|
| **Receiving Productivity** | Cartons processed / labor hours | 60–100 cartons/hour | Depends on verify detail |
| **Receiving Accuracy** | # perfect receipts / total receipts × 100 | >99.5% | Blind receiving preferred |
| **Dock-to-Stock Time** | Time from dock arrival to WMS inventory | <3 hours | From dock to available status |
| **Dock Utilization %** | Actual dock time / available dock capacity | 80% (target) | Never exceed 90% |
| **Appointment Compliance %** | Carriers arriving on time / total appts | >95% | Vendor/carrier performance |
| **Discrepancy Rate %** | Shortage + overage + damage / receipts | <1% | Indicator of vendor quality |
| **Quality Inspection Pass %** | Lots passed inspection / total lots | >98% | AQL-based; adjusts for risk tier |

---

## Summary: Receiving Best Practices

1. **Schedule all inbound** via appointments; maintain 80% dock utilization.
2. **Inspect all trailers** (seal, condition, temperature, hazmat) pre-unload.
3. **Verify count** using blind receiving method (highest accuracy).
4. **Inspect quality** using risk-based sampling (AQL plans for high/medium risk).
5. **Resolve discrepancies** immediately; assign accountability (vendor vs. carrier vs. internal).
6. **Direct put-away** to preserve slotting optimization; use replenishment feeding for fast movers.
7. **Enforce vendor compliance** with routing guide, labeling, ASN, packing standards; use chargeback program.
8. **Consider cross-docking** for high-velocity, synchronized demand.
9. **Measure KPIs** — receiving accuracy, dock-to-available time, dock utilization, discrepancy rate.

**Expected outcomes**: >99.5% receiving accuracy, dock-to-stock <3 hours, discrepancy rate <1%, appointment compliance >95%.
