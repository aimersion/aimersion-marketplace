---
name: layout-optimizer
version: 0.1.0
description: This skill should be used when the user asks to 'optimize warehouse layout', 'slotting optimization', 'pick path analysis', 'improve storage utilization', 'reduce travel time', 'zone design', 'storage assignment', 'rack layout', 'slot products', or needs help improving warehouse flow and space efficiency.
---

# Warehouse Layout Optimizer

Warehouse layout and slotting optimization is the foundation of operational efficiency. Strategic layout design can reduce pick times by 30–50%, improve labor productivity by 20–30%, and increase available cube utilization from 70% to 85%+. This skill provides frameworks and methodologies for designing and optimizing warehouse layouts.

## Warehouse Flow Principles

Every warehouse must handle a consistent flow: **Receive → Store → Pick → Pack → Ship**. The physical layout must facilitate this flow with minimal congestion and cross-traffic.

**Critical principle:** Separate inbound and outbound traffic patterns. Inbound (receiving dock) should lead to bulk storage and replenishment zones. Outbound (shipping dock) should be fed by a fast, forward-pick zone. High-velocity SKUs should never cross traffic with inbound freight.

### Layout Zones

1. **Receiving Zone**: Dock doors (5–10% of facility), staging area for quality hold, check-in stations for paperwork, space to accumulate full pallets before put-away direction.

2. **Bulk Storage**: High-density storage of full pallets or cases. Replenishment feeds from here. Slower-moving SKUs stored here to preserve forward-pick space.

3. **Forward Pick Zone**: Primary pick face. Contains top-velocity SKUs (A-movers). High accessibility, replenishment-fed constantly throughout the shift. This zone drives labor productivity.

4. **Packing Zone**: Contiguous to forward pick zone. Pack stations arranged for ergonomics and efficiency. Access to shipping labels, void fill, scales, tape.

5. **Shipping Zone**: Dock doors (5–10% of facility), staging area for trailers, manifest and documentation control.

**Zone isolation**: Create physical or logical separation between zones to prevent bottlenecks. For example, a wall or clear demarcation between inbound and outbound prevents congestion.

## Slotting Optimization Methodology

Slotting is the assignment of SKUs to storage locations. Optimal slotting directly reduces pick travel time and increases picks per hour.

### ABC Velocity Classification

Rank all SKUs by pick frequency (picks per period, e.g., picks per month).

- **A-Movers (Top 20% of SKUs)**: Account for ~80% of total picks. These SKUs should occupy the premium locations in the forward-pick zone.
- **B-Movers (Next 30% of SKUs)**: Account for ~15% of picks. Secondary pick locations, middle racks.
- **C-Movers (Bottom 50% of SKUs)**: Account for ~5% of picks. Remote locations, top racks, or off-site storage.

### Golden Zone Placement

For A-movers, locate inventory in the **"golden zone"**: waist-to-shoulder height (36–54 inches above floor), closest to packing and shipping. Picking from this zone requires no bending or reaching and is fastest.

- **A-Movers**: Golden zone, close to pack/ship.
- **B-Movers**: Middle rack (54–72 inches), mid-distance.
- **C-Movers**: Top racks (72+ inches), far side of facility, or off-site reserve.

This tiered approach can reduce average pick time per line by 40–60% versus random slotting.

### Picking Pattern Analysis

Analyze the actual pick patterns in your facility:

1. Collect pick data for 4–8 weeks (sufficient to capture seasonal variation).
2. Calculate pick frequency for each SKU (total picks / days in analysis period).
3. Rank by frequency and assign ABC tier.
4. Map current locations and pick sequences.
5. Calculate average travel distance per pick using pick zone layout (zone-to-zone matrices).
6. Design optimized slotting and recalculate travel distance.
7. Estimate labor time savings: if average pick time drops from 3 minutes to 2 minutes, that's 33% faster, directly translating to higher picks per hour.

## Storage Type Selection

Different storage types serve different purposes. Select based on SKU volume, dimensions, weight, turnover, and access frequency.

### Selective Rack (Pallet Rack)

- **Configuration**: Two to six levels, typically 15–20 feet high.
- **Access**: Single-deep, direct access to every pallet.
- **Capacity**: Flexible quantity per location (limited by weight per level).
- **Best for**: General merchandise, frequent replenishment, mixed SKUs per bay.
- **Cost**: Low to moderate.
- **Density**: Moderate (60–80% cube utilization typical).

### Double-Deep Rack

- **Configuration**: Two-pallet-deep, requires specialized reach truck.
- **Access**: Front pallet always accessible; rear pallet requires moving front first.
- **Capacity**: High — double the pallet count in same footprint.
- **Best for**: Slower-moving SKUs, cases, carton flow integration.
- **Cost**: Moderate (reach truck required).
- **Density**: High (80–85% cube utilization).
- **Limitation**: Access to rear pallet is slower.

### Push-Back Rack (LIFO)

- **Configuration**: Pallets push back on inclined rails; each new pallet pushes prior one deeper.
- **Access**: Last-in-first-out (LIFO) — reload from same side.
- **Capacity**: 4–6 pallets deep per location.
- **Best for**: SKUs with stable demand (not mixed FIFO requirement), high-volume, moderate variety.
- **Cost**: Moderate.
- **Density**: Very high (85–90% cube utilization).
- **Limitation**: Cannot access intermediate pallets without removing top ones.

### Flow Rack (Carton Flow / Case Flow)

- **Configuration**: Inclined rollers or wheels; pallets/cases roll forward under gravity.
- **Access**: FIFO — take from front, load from back.
- **Capacity**: High density, supports replenishment feeding.
- **Best for**: Case or carton handling, high-velocity SKUs, forward-pick feeding, cross-docking.
- **Cost**: Moderate to high.
- **Density**: Very high (85–90%).
- **Labor benefit**: Greatly reduces replenishment labor — load once from back, pickers always access the oldest stock.

### Pallet Flow Rack

- **Configuration**: Heavy-duty roller system, inclined 4–6 degrees.
- **Access**: FIFO.
- **Capacity**: 5–12 pallets deep per location.
- **Best for**: High-throughput, bulk case or pallet picking, standard pallet handling.
- **Cost**: High.
- **Density**: Very high (90%+).
- **Throughput**: Excellent for fast-moving inventory.

### Drive-In / Drive-Through Rack

- **Configuration**: No aisles; forklift enters rack structure, positions palletsinto locations.
- **Access**: LIFO (drive-in) or FIFO (drive-through with exits on opposite end).
- **Capacity**: Extremely high density (lowest aisles of any system).
- **Best for**: Few SKUs, high volume, seasonal inventory (e.g., holiday merchandise).
- **Cost**: High (limited flexibility, long construction lead time).
- **Density**: 90%+ cube utilization.
- **Limitation**: Limited SKU variety (long replenishment cycles per SKU), slower access than selectiveor double-deep.

### Mezzanine / Second Floor

- **Configuration**: Platform above primary warehouse floor, accessed by stairs or lifts.
- **Best for**: Off-season inventory, slow-moving SKUs, small-part storage with bin shelving.
- **Cost**: Very high (construction, building codes, fire suppression).
- **Benefit**: Effectively doubles usable cube without expanding footprint.

### Bin Shelving (Small Parts)

- **Configuration**: Multi-level shelving, typically 6–8 feet high, suitable for hand-pick small parts, tools, fasteners.
- **Best for**: Small items, high SKU count, piece-pick operations, kitting.
- **Access**: Direct hand access, no equipment needed.
- **Density**: Moderate to high, depending on bin sizing and organization.

## Aisle Configuration and Equipment

Aisle width is determined by material handling equipment type.

| Equipment | Aisle Width Required | Density | Speed | Notes |
|-----------|---------------------|---------|-------|-------|
| Counterbalance Forklift | 12–14 ft | Moderate | Moderate | Standard; works in wider aisles, slower turn radius |
| Reach Truck | 8–10 ft | High | Good | Lifted mast, can reach into racks |
| Very Narrow Aisle (VNA) Turret Truck | 5–7 ft | Very High | Moderate–High | Maximum density; single-deep picking only; high cost |
| Walkie Pallet Jack | 6–8 ft | Moderate–High | Slow | Manual or powered; lower cost |
| Walkie Stacker | 6–8 ft | Moderate–High | Moderate | Lifts 4–6 feet; good for lower-level replenishment |

**Design decision**: Trade-off between aisle width (cube loss) and throughput. Wider aisles = less cube utilization but faster, more flexible operations. Narrower aisles = higher density but potentially bottlenecks in high-activity zones.

## Replenishment Strategy

Replenishment feeds the forward-pick zone from bulk storage. Timing and method affect picking productivity.

### Replenishment Modes

1. **Trigger-Based (Min/Max)**:
   - Set minimum inventory level for a location.
   - When inventory falls below minimum, replenishment is triggered automatically.
   - Refill to maximum.
   - Formula: Min = Safety Stock + (Lead Time Demand); Max = Min + Order Quantity.
   - Advantage: Inventory never runs out; requires accurate system data.

2. **Time-Based (Scheduled)**:
   - Replenish on fixed schedule (e.g., every 4 hours).
   - Regardless of current level, refresh to maximum.
   - Advantage: Predictable labor schedule; simple to execute.
   - Disadvantage: May overfill fast-moving items, underfill slow movers.

3. **Demand-Driven**:
   - Use wave planning or order forecast to anticipate demand.
   - Replenish forward-pick zone before waves start.
   - Advantage: Right inventory, right time.
   - Disadvantage: Requires accurate demand visibility.

### Replenishment Zone Design

Create a **replenishment zone** between bulk storage and forward pick. Consolidate multiple cases or pallets into smaller picks for forward-pick restocking. This reduces the number of trips from bulk to forward pick.

Example: A SKU in forward pick is a single-case location. When it falls below 2 cases, trigger a replenishment of 6 cases from bulk into the replenishment zone, then forward pick will pull cases as needed.

## Space Utilization Metrics

### Storage Utilization %

$$\text{Storage Utilization} = \frac{\text{Positions Used}}{\text{Total Positions}} \times 100$$

Where "positions" = storage slots (pallet locations, bin slots, etc.).

**Target**: 85–90%. Never design for 100% utilization. You need flexibility for:
- SKU growth/new items
- Seasonal surges
- Quality holds (quarantine area)
- Replenishment staging
- Damaged goods reserve

**Below 70%**: Indicates oversized facility or poor demand. Opportunity to consolidate, reduce rent, or grow the business.

### Cube Utilization %

$$\text{Cube Utilization} = \frac{\text{Actual Volume Stored}}{\text{Available Cubic Footage}} \times 100$$

**Target**: 70–80% (accounting for aisles, equipment, height limitations).

**Calculation**:
- Available cube = building length × width × 85% of clear height (reserve 15% for equipment overhead, ventilation, lighting).
- Actual cube = sum of (case/pallet dimensions × quantity on hand) for all SKUs.

A facility storing 50,000 cubic feet of inventory in a 100,000-cubic-foot building = 50% cube utilization. Flag for consolidation or growth.

## Receiving-to-Storage Flow

Design receiving to feed storage efficiently:

1. **Dock doors**: Quantity determined by inbound appointments (see: receiving-processor skill). Rule of thumb: capacity = (trucks/day × 2 hours average dock time) / operating hours.

2. **Quality hold area**: Adjacent to receiving, 3–5% of dock area. Quarantine items failing inspection until disposition.

3. **Staging**: Consolidate pallets by destination zone before put-away. Reduces congestion at racks.

4. **Put-away direction**: System-directed put-away assigns optimal location (guided by slotting rules). Random put-away (pickers choose any open location) is faster short-term but breaks slotting optimization.

## Example Slotting Recommendation Output

**SKU**: Widget A-100
- **Current Location**: Section G, Rack 8, Level 2 (moderate accessibility)
- **Pick Frequency**: 450 picks/month (A-mover, top 15% of volume)
- **Current Pick Time**: 2.8 min/line (includes walk from zone, locate, pick, return)
- **Recommended Location**: Forward Pick Zone, Bay F-3, Level 2 (golden zone, 25 ft from pack station)
- **Projected Pick Time**: 1.5 min/line (46% improvement)
- **Annual Picks**: 5,400
- **Labor Savings**: ~87 hours/year (5,400 × 1.3 min saved / 60 min/hr)
- **Cost Savings**: 87 hours × $20/hr labor = $1,740/year

---

## Summary: Layout Optimization Workflow

1. **Analyze current state**: Collect pick data, measure travel times, assess space utilization, identify congestion points.
2. **Classify inventory**: ABC by velocity, identify A-movers that drive 80% of picks.
3. **Design layout**: Golden zone for A-movers, strategic storage types, separate inbound/outbound.
4. **Estimate impact**: Recalculate travel distance and labor time with optimized slotting.
5. **Plan execution**: Phased slotting reset (analyze, design, plan, execute, measure).
6. **Measure results**: Track picks per hour, dock-to-available time, space utilization, labor productivity before/after.

Expected outcomes: **30–50% reduction in pick travel time, 20–30% improvement in labor productivity, 85%+ cube utilization.**
