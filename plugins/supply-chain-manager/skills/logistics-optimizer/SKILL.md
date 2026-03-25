---
name: logistics-optimizer
version: 0.1.0
description: This skill should be used when the user asks to 'optimize shipping', 'compare carriers', 'select shipping mode', 'freight analysis', 'route optimization', 'inbound logistics', 'outbound logistics', 'freight audit', 'LTL vs FTL', 'ocean vs air', 'landed cost', or needs help with transportation strategy and carrier selection.
---

# Logistics Optimizer Skill

Transportation and logistics represent 40-50% of total supply chain costs. This skill guides you through mode selection, carrier evaluation, freight cost management, and route optimization to build a cost-effective logistics network.

## Transportation Mode Selection Framework

Choose the right mode based on shipment characteristics: weight/volume, distance, urgency, value, service requirements.

### Air Freight

**Best for:** Urgent, high-value, small-volume shipments

Characteristics:
- Cost: $3-10 per kg (intercontinental); $1-3 per kg (regional) — highest mode cost
- Speed: 2-5 days door-to-door (globally), 1-2 days regional
- Capacity: Limited by aircraft size; typically <20,000 kg per shipment
- Reliability: High schedule adherence (>99%)
- Handling: Lower damage risk; good for fragile items

**When to use:**
- Time-critical (customer needs within 3-5 days)
- High-value products (value/weight ratio >$10/kg, or total >$50K)
- Small volumes (<5,000 kg)
- Emergency stock-outs requiring expedite fill

**Cost formula:**
Air freight cost = (Weight kg × Rate $/kg) + Handling fees + Fuel surcharge

Example:
- Shipment: 2,000 kg, from Shanghai to New York
- Base rate: $4/kg
- Handling: $500
- Fuel surcharge: 15%
- Total = (2,000 × 4 × 1.15) + 500 = $9,200 + $500 = $9,700

**Carbon footprint:** 5-10 tons CO2e per 1,000 kg (highest environmental impact)

---

### Ocean Freight — Full Container Load (FCL)

**Best for:** Large shipments, long lead time acceptable, lowest cost per unit

Characteristics:
- Cost: $1,000-5,000 per container (20ft or 40ft), or $50-200/ton
- Speed: 15-45 days depending on trade lane and port congestion
- Capacity: 20ft = 24-26 tons, 40ft = 24-28 tons typical
- Reliability: Subject to port delays, congestion, weather
- Handling: Container less-than-truckload (LCL) not an option; requires full container utilization

**When to use:**
- High-volume shipments (5,000+ kg)
- Lead time flexibility (15+ days acceptable)
- International trade
- Standard commodities, non-perishable goods
- Cost-sensitive customers

**Cost formula:**
FCL cost = Container rate ($) + Port charges (origin & destination) + Customs brokerage

Example:
- Route: Shanghai to Long Beach, 40ft container
- Container rate: $3,000
- Origin port charges: $300
- Destination port charges: $400
- Inland freight (port to customer): $1,500
- Customs brokerage: $200
- Total: $5,400 for 24 tons = $225/ton

**Trade lanes (seasonal rates):**
- Shanghai-Rotterdam (Asia to Europe): $2,500-5,000 per 40ft (winter higher)
- Shanghai-Los Angeles (Asia to US West): $1,500-3,500 per 40ft
- Rotterdam-Shanghai (reverse route): $800-2,000 per 40ft
- Intra-Asia (e.g., Shanghai-Bangkok): $400-1,000 per 40ft

**Carbon footprint:** 10-50 kg CO2e per ton (lowest environmental impact per unit)

**Port congestion:** Monitor for delays
- Port congestion index: Check ports' reported delays
- Season: Summer (June-Sept) and peak season (Oct-Nov) highest
- Mitigate: Book earlier, consider alternative ports, allow buffer in lead times

---

### Ocean Freight — Less Than Container Load (LCL)

**Best for:** Medium-volume shipments that don't fill a container, 500-5,000 kg

Characteristics:
- Cost: $150-400/ton (higher per-unit than FCL, lower than air)
- Speed: 20-50 days (includes time for consolidation and deconsolidation)
- Capacity: Pay for space actually used, shared container with other shippers
- Reliability: Consolidator schedules matter; less predictable than FCL
- Handling: Consolidator breakage risk, additional handling points

**When to use:**
- Volume too large for air but too small for FCL
- Budget-constrained
- Consolidator consolidation timelines acceptable
- Multiple shipments to same destination can be consolidated

**Cost formula:**
LCL cost = (Weight (CBM) × Rate $/CBM) + Port charges + Consolidation fees + Drayage

CBM (cubic meters) calculation:
- If weight-limited: CBM = Weight / density (typical 600-1000 kg/m³)
- If volume-limited: CBM = Length × Width × Height (in meters)
- Charge is higher of weight-based or volume-based

Example:
- Shipment: 3 tons (3,000 kg), Shanghai to Los Angeles
- Chargeable weight: 3,000 kg ÷ 800 kg/m³ = 3.75 CBM (weight-limited)
- LCL rate: $120/CBM
- Port/handling: $400
- Total: (3.75 × 120) + 400 = $450 + 400 = $850 for 3 tons = $283/ton

**Carbon footprint:** 20-80 kg CO2e per ton (mid-range environmental impact)

---

### Rail Freight

**Best for:** Domestic, long-distance (>500 miles), bulk commodities, predictable volumes

Characteristics:
- Cost: $0.03-0.08 per ton-mile (diesel), lower than truck for long distances
- Speed: 3-10 days depending on distance and train schedule
- Capacity: Car capacity 80-120 tons typical; economies of scale at 50+ tons
- Reliability: Fixed schedules; less flexible than truck
- Handling: Loading/unloading at dedicated rail facilities

**When to use:**
- Distance >500 miles (rail more economical than truck)
- Bulk commodities: coal, ore, grain, chemicals
- Predictable volumes for dedicated train cars
- Cost-sensitive, timeline flexible
- Environmental consideration (fuel-efficient mode)

**Cost formula:**
Rail cost = (Weight tons × Rate $/ton-mile × Distance miles) + Terminal charges

Example:
- Shipment: 50 tons, Chicago to Los Angeles (1,500 miles)
- Unit rate: $0.05/ton-mile
- Terminal charges: $1,000
- Total: (50 × 0.05 × 1,500) + 1,000 = $3,750 + 1,000 = $4,750 = $95/ton

**Carbon footprint:** 5-20 kg CO2e per ton (very low environmental impact)

---

### Less Than Truckload (LTL)

**Best for:** Smaller domestic shipments, 150-15,000 lbs (70-6,800 kg), single or multiple stops

Characteristics:
- Cost: $0.80-2.00 per lb typical, or $50-150/cwt (hundredweight)
- Speed: 2-7 days depending on distance and carrier network
- Capacity: Shared trailer with multiple shippers
- Reliability: High reliability (>98% on-time for major carriers)
- Handling: 1-2 hub transfers, moderate damage risk

**When to use:**
- Weight/volume less than FTL threshold
- Regional or multi-stop deliveries
- Standardized commodity, easy handling
- Just-in-time replenishment
- Occasional shipments (not regular high-volume)

**Cost formula:**
LTL cost = (Weight lbs × Rate $/lbs) + Freight class adjustment + Accessorial charges

Freight classes (1-18) based on density, value, handling:
- Class 50-100: High-density, stable (steel, ore) — base rate
- Class 100-125: Standard (machinery, tools)
- Class 200-250: Electronics, furniture, appliances (common)
- Class 300-500: Low-density, specialized handling (clothing, plastic foam)

Accessorials (additional charges):
- Liftgate: +$75-150 (loading equipment required)
- Residential delivery: +$50-200 (not commercial location)
- Inside delivery: +$100-300 (delivery to building interior)
- Detention: +$50-75 per day (driver waiting time >1 hour)
- Hazmat: +$50-300 (hazardous materials handling)
- Appointment delivery: +$25-50 (scheduled time window)

Example:
- Shipment: 2,000 lbs from Atlanta to Miami (350 miles)
- Base rate: $1.20/lb for class 200 freight
- Liftgate required: +$100
- Total: (2,000 × 1.20) + 100 = $2,400 + 100 = $2,500

**Carbon footprint:** 100-200 kg CO2e per ton (moderate environmental impact)

---

### Full Truckload (FTL)

**Best for:** Large domestic shipments, 24,000+ lbs (11,000 kg) or 15+ pallets, single origin/destination

Characteristics:
- Cost: $1,500-5,000 per truck depending on distance and lane
- Speed: 1-3 days (direct shipment, no consolidation)
- Capacity: 40,000-44,000 lbs (GVWR limit per regulations)
- Reliability: High reliability (>98% on-time for major carriers)
- Handling: Direct shipment, minimal handling, lower damage risk
- Flexibility: Dedicated capacity; can accommodate special needs

**When to use:**
- Weight/volume exceeds FTL threshold (typically 15+ pallets or 20,000+ lbs)
- Direct shipment (single origin, single or few destinations)
- Time-sensitive (direct delivery beats consolidation)
- High-value or sensitive goods (dedicated, secure transport)
- Regular lanes with predictable demand

**Cost formula:**
FTL cost = Base rate ($/mile) × Distance + Accessorials

Average FTL rates (per mile, varies by lane and season):
- High-demand lanes (e.g., California origin): $2.00-3.00 per mile
- Standard lanes (regional): $1.50-2.50 per mile
- Low-demand lanes: $1.00-1.50 per mile

Spot market (one-time shipments) typically 10-30% premium vs. contract rates.

Accessorials:
- Tarping (covering open freight): +$50-100
- Waiting time: +$50-75 per hour after 1 hour
- Detention (weekend/holiday): +$100-200 per day
- Lumper services (unloading labor): +$100-300

Example:
- Shipment: 40,000 lbs (full truck), Atlanta to Los Angeles (2,200 miles)
- FTL rate: $2.25/mile
- Total: 2,200 × $2.25 = $4,950

FTL breakeven vs. LTL:
- LTL: 40,000 lbs × $0.08/lb = $3,200
- FTL: $4,950
- But FTL is faster (direct) and more secure
- FTL is better if speed matters or shipment is high-value

**Carbon footprint:** 50-100 kg CO2e per ton (moderate environmental impact)

---

### Parcel/Small Package

**Best for:** E-commerce, final-mile, packages <150 lbs, consumer shipments

Characteristics:
- Cost: $5-50 per shipment depending on weight and destination
- Speed: 1-3 days for most destinations (express available)
- Capacity: Weight limit 150 lbs typical per package
- Reliability: Very high (>99%)
- Handling: Multiple sort facilities, highest handling risk

**Major carriers:** UPS, FedEx, DHL, Regional carriers

**When to use:**
- E-commerce and B2C shipments
- Small packages, individual orders
- Cost-sensitive with flexible timelines
- International parcel (vs. larger modes)

**Cost formula:**
Parcel cost = Base rate (weight/zone) + Surcharges (fuel, handling)

Shipping cost by weight (sample Ground rates):
- 1 lb, 100 miles: $8-12
- 1 lb, 1,000 miles: $10-15
- 5 lbs, 1,000 miles: $20-30
- 50 lbs, 1,000 miles: $80-120

Volume discounts: 10-25% for high-volume shippers (1000+ packages/month)

**Carbon footprint:** 200-400 kg CO2e per ton (high environmental impact due to multiple handling)

---

## Mode Selection Decision Matrix

```
Shipment Weight  Distance   Urgency    Value Density    Recommended Mode(s)
<150 lbs         Any        Any        Any              Parcel (USPS/UPS/FedEx)
150-500 lbs      <500 miles Next day   High             Air freight or FedEx Ground
150-500 lbs      500-1500   3-5 days   Medium/Low       FedEx Ground or UPS Ground
500 lbs-5K lbs   <500 miles 2-3 days   High             LTL with expedited service
500 lbs-5K lbs   500-1500   3-7 days   Medium           LTL Standard
500 lbs-5K lbs   International 1-2 wks  Medium/High      Air freight
5K-20K lbs       <500 miles 2-3 days   Any              FTL or LTL
5K-20K lbs       500-1500   3-5 days   Any              FTL Standard or LTL
5K-20K lbs       International 10+ days Any              Ocean LCL or FCL
20K-44K lbs      Any        2-5 days   Any              FTL
45K+ lbs         International 15+ days Any              Ocean FCL

Legend: Air = urgent/high-value | FTL = cost-efficient large volume | LTL = medium volume
Ocean = long lead acceptable | Rail = bulk commodities, long distance
```

---

## Carrier Selection Criteria

Evaluate carriers on six key dimensions:

### 1. On-Time Delivery Performance
- **Metric:** % of shipments delivered within promised window
- **Target:** >98% for core lanes, >95% acceptable for secondary lanes
- **Data sources:** Carrier reporting, freight audit, customer feedback
- **Weight:** 25% of overall scorecard

On-time delivery by carrier (industry benchmarks):
- Major national carriers (XPO, YRC, J.B. Hunt): 97-98%
- Regional carriers (varies): 92-97%
- LTL: 94-98%
- FTL: 97-99%
- International: 85-95% (more variability)

### 2. Claims & Damage Ratio
- **Metric:** % of shipments with filed damage/loss claims
- **Target:** <0.5% for standard freight, <0.1% for high-value
- **Data sources:** Claims history, insurance records
- **Weight:** 20% of overall scorecard

Claims ratio benchmark:
- Excellence: <0.1%
- Good: 0.1-0.5%
- Acceptable: 0.5-1.0%
- Poor: >1.0%

### 3. Pricing & Cost Management
- **Metric:** $/lb or $/mile vs. market benchmarks, fuel surcharge structure
- **Target:** Competitive pricing, fuel surcharge <15% of base rate
- **Data sources:** Quote analysis, market surveys, freight auctions
- **Weight:** 20% of overall scorecard

Pricing competitiveness:
- Get 3+ quotes per lane; rate best available and negotiate
- Monitor market rates monthly; escalation tied to indices preferred
- Fuel surcharges: Fixed or floating, tied to industry benchmarks

### 4. Capacity & Flexibility
- **Metric:** Ability to accept surge volumes, accommodate special requests
- **Target:** +50% surge capacity available, <2 days notice
- **Data sources:** Carrier communication, past performance
- **Weight:** 15% of overall scorecard

Capacity assessment:
- Ask: "Can you handle 50% volume increase?" for surge periods
- Lead time: How much notice required for special equipment, hazmat, etc.?
- Coverage: Geographic reach and service areas

### 5. Technology & Visibility
- **Metric:** Tracking capability, EDI integration, proactive communications
- **Target:** Real-time tracking, automated notifications, API integration
- **Data sources:** System trial, integration testing
- **Weight:** 10% of overall scorecard

Technology capabilities:
- Real-time shipment tracking (GPS for TL)
- Automated delivery notifications (email/SMS)
- EDI 997 confirmation and 856 advanced ship notice
- Web-based reporting and analytics
- API for integration with your TMS or ERP

### 6. Financial Stability & Insurance
- **Metric:** D&B rating, years in business, insurance coverage
- **Target:** D&B score >70, insurance $1M minimum
- **Data sources:** Dun & Bradstreet, carrier financials, insurance verification
- **Weight:** 10% of overall scorecard

Financial health:
- Request D&B report; review credit rating
- Verify insurance: General liability $1M+, cargo $500K+, auto $1M+
- Check operating authority with DOT (USDOT license, MC number)
- Industry experience: >5 years preferred for stability

---

## Freight Audit Process

Auditing freight bills catches errors and ensures correct billing. Studies show 10-15% of freight bills contain errors.

### Freight Bill Audit Checklist

```
FREIGHT BILL AUDIT FORM

Bill Number: ________________  Audit Date: ________________
Carrier: ____________________  Amount: ____________________

BASIC INFORMATION
☐ Shipper name matches shipment
☐ Carrier name matches booked carrier
☐ Bill date within 30 days of delivery
☐ Amount matches approved rate quote

SHIPMENT DETAILS
☐ Weight matches bill of lading (BOL)
☐ Dimensions/cubic feet correct
☐ Freight class appropriate for commodity
☐ Density calculation checked (weight ÷ volume)
☐ Piece count matches BOL
☐ Hazmat designation (if applicable) matches commodity
☐ Special equipment (pallet, skid, crate) correctly billed

RATE VERIFICATION
☐ Base rate matches contracted rate for lane
☐ Rate applies to correct shipment weight
☐ Fuel surcharge ≤15% of base rate
☐ Discount or volume rate applied correctly
☐ Accessorial charges individually verified (see below)

ACCESSORIAL CHARGES
☐ Liftgate: ☐ Required ☐ Charged correctly ☐ Remove if not needed
☐ Residential delivery: ☐ Required ☐ Charged correctly ☐ Remove if not needed
☐ Inside delivery: ☐ Required ☐ Charged correctly ☐ Remove if not needed
☐ Detention: ☐ Justified ☐ Reasonable rate ☐ Question if excessive
☐ Hazmat: ☐ Required ☐ Documented ☐ Rate appropriate
☐ Appointment: ☐ Required ☐ Charged correctly
☐ Other: ______________________ ☐ Justified ☐ Remove if not needed

UNUSUAL CHARGES
Any charges >$50 not explained by rate card:
- Charge description: _______________________________________
- Justification: ___________________________________________
- Action: ☐ Approve ☐ Request credit ☐ Escalate to carrier

AUDIT RESULT
Total billable weight/dimension: _______ lbs
Total billable charges: $_________
Audit correction: $_________
Corrected total: $_________

Audit Finding: ☐ Correct ☐ Overcharge (request credit) ☐ Undercharge (informational)
Credit request amount: $_________
Reason: ___________________________________________________________________
```

### Common Freight Bill Errors

| Error Type | Frequency | Impact | Prevention |
|---|---|---|---|
| Incorrect freight class | 5-8% | +10-25% overcharge | Verify class matches commodity |
| Duplicate accessorial charges | 3-5% | +$50-200 overcharge | Audit each charge individually |
| Weight rounding | 2-4% | +5-10% overcharge | Verify exact weight on BOL |
| Fuel surcharge error | 1-3% | +$50-500 overcharge | Check fuel formula; verify rate cap |
| Inapplicable discount | 2-4% | -$100-500 shortage | Confirm discount eligibility |
| Delivery to wrong address | <1% | Full shipment cost | Verify delivery confirmation |

### Freight Audit Program Setup

1. **Select audit partner or software:**
   - In-house: Review 10-20% of bills monthly (sample audit)
   - Third-party auditor: 20-30% recovery, take 50% split typically
   - Automated software: Real-time bill checking, $500-2,000/month SaaS

2. **Establish baseline:**
   - Audit 3 months of bills to measure error rate
   - Calculate potential annual savings (error rate × annual freight spend)
   - ROI = Annual savings - Audit cost

3. **Monitor trends:**
   - Track errors by carrier; escalate carriers with >5% error rate
   - Monthly reporting to procurement and finance
   - Address systemic issues (e.g., carrier using wrong rate card)

4. **Implement corrective actions:**
   - Request credits for identified errors
   - Review contracts to prevent future errors
   - Update rate cards and accessorial guidelines

---

## Incoterms 2020: Responsibility Boundaries

Incoterms define who is responsible for cost and risk of goods during transit. Misunderstanding leads to disputes.

### Incoterms 2020 Summary Table

| Term | Seller Responsibility | Buyer Responsibility | Risk Passes | Best For |
|------|---|---|---|---|
| **EXW** Exworks | Load goods on buyer's vehicle at seller facility | Everything after pickup | Buyer pickup | Buyer has logistics control |
| **FCA** Free Carrier | Deliver to named carrier; clear export docs | Carrier onward + import | Carrier receipt | Domestic or multimode |
| **CPT** Carriage Paid To | Pay freight to destination; clear export docs | Import docs + unload | Carrier receipt | Multimode with cost prepay |
| **CIP** Carriage & Insurance Paid | Pay freight + insurance to destination; export docs | Import docs + unload | Carrier receipt | Multimode with insurance |
| **DAP** Delivered at Place | Deliver to named destination (uncleared); export docs | Import customs + unload | Destination arrival | Buyer clears customs |
| **DPU** Delivered at Place Unloaded | Deliver & unload at destination; export docs | Import customs | After unload | Low-risk buyer (most seller cost) |
| **DDP** Delivered Duty Paid | Full delivery, unload, cleared for import, paid duties | Unload only | After unload | Most seller responsibility |

**EXW → DDP = increasing seller responsibility (and cost)**

### Incoterms 2020 Risk Allocation Matrix

```
                    Domestic       Ocean LCL/FCL     Air             Multimode
FOR INBOUND (Purchasing)
Prefer as Buyer:    CIF/CPT        CIF/CPT          CIP            DPU/DAP
Prefer as Seller:   EXW/FCA        FOB/CFR          CIF            EXW/FCA
Standard (Fair):    FCA/CPT        CIF/CPT          CIP            CPT/DAP

FOR OUTBOUND (Selling)
Prefer as Seller:   EXW/FCA        FOB/CFR          CIF            EXW/FCA
Prefer as Buyer:    DDP/DAP        CIF/CPT          CIP            DDP/DAP
Standard (Fair):    FCA/CPT        CFR/CIF          CIP            CPT/DAP
```

### Recommendation by Trade Lane

**Domestic:**
- Standard: FCA (Seller pays loading; Buyer pays transport)
- Seller-friendly: EXW (no seller cost)
- Buyer-friendly: DAP (seller responsible until delivery)

**Ocean Export (Asia to US/Europe):**
- CFR/CIF (Seller pays freight, Buyer pays insurance)
- CIP (Seller pays freight + insurance; Buyer clears customs)
- Trend: Shifting to DDP for e-commerce/B2C

**Ocean Import (US/Europe to Asia):**
- CIF (Cost, Insurance, Freight included)
- DAP (Seller delivers to port; Buyer clears customs)
- Trend: CIF most common for Asia sourcing

**Air freight:**
- CIP (Carriage and Insurance Paid To) standard
- DDP for high-value/B2C shipments

---

## Route Optimization & Network Design

Optimize transportation network to minimize cost while maintaining service.

### Network Design Principles

**Consolidation Opportunities:**
- Consolidate multiple LTL shipments into FTL when feasible
- Regional consolidation points for milk-run pickups
- Consolidate multiple customer orders into single shipment

**Milk Run Design:**
- Design pickup routes to visit multiple suppliers in sequence
- Reduces per-unit transport cost through consolidation
- Example: Daily pickup route visiting 3-5 local suppliers, one full truck to distribution center

**Cross-Docking:**
- Break incoming full trucks by destination
- Repalletize for specific customers
- Reduce inventory holding (goods in motion, not warehouse)
- Use for high-velocity products, multiple distribution points

**Hub-and-Spoke vs. Direct:**
- Hub-and-spoke: All traffic flows through central hub (lower cost, less direct)
- Direct: Origin to destination without intermediate stop (faster, higher cost)
- Decision: Cost vs. speed trade-off

Example:
- 5 regional distribution centers, 100 retail stores
- Hub-and-spoke: Centralized DC → Regional DCs → Stores (3 legs, lower cost)
- Direct delivery: Centralized DC → Stores (1 leg, higher cost but faster)

**Mode Mix Optimization:**
- Blend FTL, LTL, air based on service level and cost
- Fast-moving products: FTL + direct (highest cost, highest service)
- Slow-moving: LCL/LTL with consolidation (lower cost, acceptable lead time)

### Transportation KPI Dashboard

Key metrics to track:

```
KPI                                Target      Current    Status
Freight Cost per Unit               <$2.00      $2.15     Red (target exceeded)
On-Time Delivery %                  >98%        96.5%     Yellow (close to target)
Freight as % of COGS                <8%         7.2%      Green
Carrier On-Time %                   >98%        97.2%     Green
Claims Rate (damage/loss)           <0.5%       0.8%      Red (above target)
Freight Cost per $ Sales            <0.8%       0.75%     Green
Network Utilization (LTL as FTL wt) >85%        82%       Yellow
FTL Fill Rate (% of capacity)       >85%        88%       Green
Average Lead Time (days)            <5          4.8       Green
Customer Satisfaction - Delivery    >95%        94%       Yellow
```

---

## Landed Cost Calculation

Landed cost is the total cost of goods from supplier to your distribution center or customer location.

### Landed Cost Formula

Landed Cost = Product Cost + Transportation + Customs & Compliance + Overhead

**Detailed breakdown:**

**1. Product Cost (CIF basis)**
- Unit price per supplier quote
- Freight from supplier to origin port (inbound logistics)
- Insurance (if seller not responsible)

**2. Ocean/Air Freight**
- Main freight (FCL, LCL, or air)
- Fuel surcharge
- Port handling and wharfage
- Customs brokerage fee
- Documentation (invoicing, certification)

**3. Customs & Compliance**
- Customs duties (tariff rate × dutiable value)
- Excise taxes (if applicable)
- Inspections and certifications

**4. Inland Transportation**
- Drayage from origin port to inland point
- Destination drayage (port to warehouse/customer)
- Final mile delivery (if applicable)

**5. Compliance & Overhead**
- Import license/permits
- Testing and inspection (if required)
- Inventory carrying cost in-transit

### Landed Cost Calculation Example

```
Product: Electronic components, sourced from China

Per-Unit Landed Cost Calculation:

1. Product & Supplier Logistics
   Supplier quoted price (EXW):           $50.00
   Inland freight China (to port):         $2.00
   Supplier's local consolidation:         $0.50
   Origin port charges:                    $1.00
   Subtotal:                              $53.50

2. International Freight
   Ocean freight (40ft container, 1000 units per container):
   Container cost: $3,000 ÷ 1,000 units     $3.00

   Fuel surcharge (12%):                    $0.36
   Port charges (origin):                   $0.50
   Customs brokerage (per shipment, allocated):  $0.20
   Subtotal:                                $4.06

3. Destination Port Charges
   Port handling (US destination):          $1.00
   Drayage to warehouse (300 miles):        $2.00
   Subtotal:                                $3.00

4. Customs & Compliance
   Duties (25% of dutiable value):
   Dutiable value ($53.50 + freight $4.06) = $57.56
   Duty (25% × $57.56):                    $14.39

   HTS codes and documentation:             $0.10
   Subtotal:                               $14.49

5. Working Capital & Carrying Cost
   Time in transit: 30 days + 5 days warehouse
   Annual carrying cost rate: 25%
   Inventory carrying for 35 days: $57.56 × 25% × (35/365):  $1.38

TOTAL LANDED COST PER UNIT: $53.50 + $4.06 + $3.00 + $14.49 + $1.38 = $76.43
Retail price: $150 (assuming 50% gross margin)
```

### Landed Cost Optimization Strategies

1. **Source from duty-free countries** (USMCA, AFTA, etc.) → Save 15-25% on duties
2. **Consolidate shipments** (FCA/FOB basis, split costs) → Save $500-2,000 per shipment
3. **Select lowest-cost port** → East Coast (higher volume) vs. West Coast (faster to inland)
4. **Negotiate incoterm** → DDP shifts some cost to supplier
5. **Reduce transit time** → Decreases carrying cost (time-sensitive products)
6. **Increase container utilization** → Full FCL vs. LCL saves 20-30%

---

## Output: Logistics Plan

Present freight strategy with:
1. **Shipment profile** (origin, destination, weight, frequency)
2. **Mode evaluation** (cost/speed/reliability for each mode)
3. **Recommended mode & carrier**
4. **Freight budget** (cost by mode, total annual)
5. **Service level & KPIs** (on-time %, lead time, claims rate)
6. **Contingency & risk** (disruption plans, alternative carriers)
7. **Implementation** (contract terms, booking process, system integration)
