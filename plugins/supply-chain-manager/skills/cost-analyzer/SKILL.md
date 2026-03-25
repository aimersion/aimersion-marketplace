---
name: cost-analyzer
version: 0.1.0
description: This skill should be used when the user asks to 'calculate total cost of ownership', 'TCO', 'landed cost', 'make vs buy analysis', 'should-cost', 'cost reduction', 'savings tracking', 'price analysis', 'cost breakdown', 'spend analysis', or needs help understanding and optimizing supply chain costs.
---

# Cost Analyzer Skill

Procurement accounts for 50-70% of total product cost in many industries. Strategic cost management drives profitability. This skill guides you through TCO analysis, cost breakdown, make-vs-buy decisions, and cost reduction initiatives.

## Total Cost of Ownership (TCO) Framework

TCO captures all costs of acquiring and using goods over their lifecycle — not just unit price.

### TCO Cost Categories

**1. Acquisition Costs (One-Time or Per-Transaction)**
- Product cost (unit price per invoice)
- Freight inbound (supplier to your dock)
- Customs duties & tariffs (for imported goods)
- Import taxes and broker fees
- Inspection & testing (incoming QA, certifications)
- Supplier qualification & onboarding (audit costs, tooling)

**2. Carrying Costs (Holding inventory)**
- Capital cost: Inventory value × cost of capital (typically 10-15% annually)
  - Example: $1M inventory × 12% = $120K/year tied up in inventory
- Storage cost: Warehouse space, utilities, labor
  - Typical: $2-5 per unit per year for standard goods
- Obsolescence & scrap: Write-offs for unsold or defective stock
  - Typical: 1-3% of inventory value annually
- Insurance: Inventory coverage
  - Typical: 0.5-1% of inventory value annually
- Shrinkage/Loss: Theft, damage, waste
  - Typical: 0.5-2% of inventory value annually

**Total annual carrying cost ≈ 20-30% of inventory value**

Example: $1M inventory
- Capital cost (12%): $120K
- Storage (varies): $20K
- Obsolescence (2%): $20K
- Insurance (0.75%): $7.5K
- Shrinkage (1%): $10K
- **Total: $177.5K (~18% of inventory)**

**3. Usage/Quality Costs**
- Rework & scrap (due to supplier quality failures)
- Warranty claims (cost to fix after sale)
- Field failures and recalls
- Customer returns
- Production downtime (if supplier delays impact production)

**4. End-of-Life Costs**
- Returns to supplier (not applicable for most commodities)
- Recycling or disposal (increasingly important for electronics, hazmat)
- Environmental remediation (if needed)
- Decommissioning costs

### TCO Calculation Template

```
TOTAL COST OF OWNERSHIP (TCO) ANALYSIS

Commodity: __________________  Supplier: __________________
Unit: ________________  Analysis Period: _____ year(s)  Annual Volume: ______ units

1. ACQUISITION COSTS

Item Cost:
- Supplier quoted unit price: $______ per unit
- Volume: ______ units
- Subtotal (units × price): $__________

Freight Inbound (Supplier → Your Dock):
- Freight mode: ______________ (Air / Ocean / Truck)
- Cost per unit: $______ or total freight: $__________
- Subtotal: $__________

Customs & Tariffs (if imported):
- Dutiable value per unit: $______
- Duty rate: ___% (from HTS code lookup)
- Duty per unit: $______ = $__________  (for ______ units)
- Broker fees & handling: $__________
- Subtotal: $__________

Inspection & Testing:
- Incoming inspection time (hours): ______ × labor rate $____/hour = $__________
- Test certificates or lab work: $__________
- Subtotal: $__________

Supplier Onboarding (Amortized):
- Audit cost: $__________
- Tooling/setup (amortized over volume): $__________
- Qualification testing: $__________
- Subtotal (amortized): $__________ / ______ units = $______ per unit

**TOTAL ACQUISITION COST PER UNIT: $__________**

2. CARRYING COSTS (Annual, assuming average inventory of 50% of annual purchase)

Average Inventory Value: (Units × Unit Cost) / 2 = $__________

Capital Cost (Cost of Money):
- Annual carrying cost rate: ___% (typical 10-15%)
- Capital cost = Average inventory × Rate = $__________ × ____% = $__________

Storage & Handling:
- Warehouse space (sq ft × cost/sq ft): $__________
- Handling labor (units moved per year × cost per move): $__________
- Utilities & overhead (allocated): $__________
- Subtotal: $__________

Obsolescence & Scrap:
- Historical obsolescence rate: ____% of inventory value
- Obsolescence cost: $__________ × ____% = $__________

Insurance:
- Inventory insurance rate: ____% of value (typical 0.5-1%)
- Insurance cost: $__________ × ____% = $__________

Shrinkage / Loss:
- Shrinkage rate: ____% (typical 0.5-2%)
- Loss cost: $__________ × ____% = $__________

**TOTAL ANNUAL CARRYING COST: $__________**
**Per Unit Carrying Cost: $__________ ÷ ______ units = $______ per unit**

3. QUALITY/USAGE COSTS (Annual)

Supplier Quality Escapes:
- Defect rate (PPM): ______ PPM (parts per million)
- Defects per year: ______ units × (______ PPM / 1M) = ______ defects
- Rework cost per defect: $______ (labor + material)
- Total rework cost: ______ defects × $______ = $__________

Supplier Delivery Failures:
- Late deliveries per year: ______ occurrences
- Production disruption cost per late delivery: $__________
- Total disruption cost: ______ × $__________ = $__________

Warranty / Field Failures:
- Historical field failure rate: ____% of units sold
- Cost to fix (labor, material, shipping): $______ per unit
- Total warranty cost: ______ units × ____% × $______ = $__________

Customer Returns (due to quality):
- Return rate: ____% of units sold
- Cost per return (retest, rework, credit): $______
- Total return cost: ______ units × ____% × $______ = $__________

**TOTAL ANNUAL QUALITY COST: $__________**
**Per Unit Quality Cost: $__________ ÷ ______ units = $______ per unit**

4. END-OF-LIFE COSTS (Per Unit)

Recycling/Disposal:
- Applicable? ☐ Yes ☐ No
- Cost per unit: $______ (for electronics, hazmat, etc.)

Environmental Remediation:
- Required? ☐ Yes ☐ No
- Estimated cost (amortized): $______

**TOTAL END-OF-LIFE COST PER UNIT: $__________**

TOTAL COST OF OWNERSHIP SUMMARY

Acquisition cost per unit:        $__________
Carrying cost per unit:           $__________
Quality cost per unit:            $__________
End-of-life cost per unit:        $__________
────────────────────────────────────────────
**TOTAL TCO PER UNIT:             $__________**

Supplier's Unit Price Only:       $__________
TCO Premium vs. Unit Price:       $__________ (____% increase)

KEY INSIGHTS
- TCO is ____% higher than unit price quoted
- Major cost drivers: _________________ (identify top 3)
- Opportunity for reduction: _________________ (suggest areas)
```

---

## Landed Cost Calculation

Landed cost is the all-in cost to receive goods at your warehouse (or first distribution point).

### Landed Cost Formula

**Landed Cost = Product Cost + International Freight + Customs + Inland Transport**

### Detailed Calculation

```
LANDED COST CALCULATION

Sourcing Scenario: __________________  Product: __________________
Supplier Location: __________________  Destination: __________________

STEP 1: PRODUCT COST (Quoted Price Basis)

Supplier quoted price per unit: $______
Incoterm: EXW / FCA / CPT / CIF / DAP / DDP / Other: __________
  (Note: Incoterm determines who pays what)

If EXW or FCA (Seller pays nothing beyond product cost):
Product cost per unit: $__________

If CPT/CIF/DDP (Seller pays freight):
Product cost already includes: $__________
Deduct freight already included, add our selected freight (if different)

**Product cost per unit: $__________**

STEP 2: ORIGIN COUNTRY LOGISTICS (Supplier to Port/Airport)

Inland Freight (Supplier → Port of Departure):
- Distance: __________ km
- Mode: Truck / Rail / Barge
- Cost per unit: $______ or total: $__________

Export License / Documentation:
- License fee (if required): $__________
- Packing & labeling: $______ per unit

Local consolidation (if using consolidator):
- Consolidation fee: $__________
- Administrative: $__________

Port of Origin Charges:
- Warehouse/storage at origin: $__________
- Port handling / wharfage: $______ per unit

Subtotal — Origin Logistics per unit: $__________

STEP 3: INTERNATIONAL FREIGHT

Ocean LCL or FCL:
Mode: Ocean LCL / Ocean FCL / Air / Rail / Truck
Freight rate: $__________ per unit (or per CBM/ton)
Fuel surcharge: ____% of freight = $__________
Shipping insurance (if your cost): $__________
Subtotal — Ocean/Air freight per unit: $__________

STEP 4: DESTINATION PORT CHARGES

Port of Discharge (Destination):
- Port handling / wharfage: $__________
- Demurrage (container storage): $__________  [if delays]
- Port administration: $__________

Customs Brokerage:
- Broker fee (fixed or % of value): $__________
- Documentation processing: $__________

Subtotal — Destination port per unit: $__________

STEP 5: CUSTOMS & COMPLIANCE

Customs Duties:
- Dutiable value: $__________ (product + freight to port)
- Tariff rate (%): ___% (from HTS classification)
- Duty amount: $__________ × ___% = $__________

Anti-Dumping / Countervailing Duties (if applicable):
- Rate: ___% of value
- Additional duty: $__________

Excise/VAT (varies by country):
- Tax rate: ___% on dutiable value
- Tax amount: $__________

Import compliance (testing, inspection):
- Lab testing (if required): $__________
- Certificates of origin, compliance: $__________

Subtotal — Customs & duties per unit: $__________

STEP 6: INLAND DESTINATION TRANSPORT

Drayage (Port → Warehouse):
- Distance: __________ miles
- Drayage cost: $__________
- Drayage per unit: $__________ ÷ ______ units = $__________

Final Delivery:
- Delivery to warehouse: $__________
- Included in drayage? ☐ Yes ☐ No

Subtotal — Inland transport per unit: $__________

STEP 7: WORKING CAPITAL & CARRYING COST IN TRANSIT

Time in transit:
- Ocean / Air / Truck: ______ days
- Port processing: ______ days
- Customs clearance: ______ days
- **Total time in transit: ______ days**

Inventory carrying cost (while in transit):
- Annual carrying cost rate: 25% (0.25)
- Daily rate: 0.25 ÷ 365 = 0.000685 per day
- Cost per unit in transit: $__________ (landed cost so far) × 0.000685 × ______ days = $__________

**Subtotal — Carrying cost in transit per unit: $__________**

LANDED COST SUMMARY

Product cost:                   $__________
Origin logistics:              $__________
International freight:         $__________
Destination port charges:      $__________
Customs & duties:              $__________
Inland transport:              $__________
Carrying cost in transit:      $__________
────────────────────────────────────────────
**TOTAL LANDED COST PER UNIT: $__________**

Unit price quoted:             $__________
Landed cost premium:           $__________ (___% of unit price)

COST BREAKDOWN VISUALIZATION
Product cost:  ____% of landed cost
Freight & logistics: ____% of landed cost
Customs & duties: ____% of landed cost
Carrying cost: ____% of landed cost

OPTIMIZATION OPPORTUNITIES

1. Mode Selection:
   - Current: Ocean FCL, 30-day transit
   - Alternative: Air freight, 5-day transit
   - Impact: Carrying cost reduced by $______, freight increased by $______, net: $______

2. Incoterm Change:
   - Current: CIF (seller pays freight, we pay duties)
   - Alternative: DAP (seller delivers to US port)
   - Impact: Negotiate better freight rates, potential savings: $______

3. Consolidation:
   - Combine with other orders to achieve FTL vs. LCL
   - Frequency: Monthly consolidation could save $______ per shipment

4. Duty Optimization:
   - Current tariff: ___% (HTS ________)
   - Alternative classification: ___% (HTS ________)
   - Savings potential: $______ per unit if reclassified
   - (Note: Verify with trade counsel before claiming alternate classification)

5. Sourcing Diversification:
   - Consider USMCA/tariff-free countries: Mexico, Canada
   - Alternative: Vietnam (GSP eligible, 0% tariff on selected items)
   - Estimated duty savings: $______ per unit

Recommended Action: ________________________________________________________________
Expected savings: $____________________
Implementation timeline: __________________
```

---

## Should-Cost Modeling

Build a "should-cost" to benchmark supplier quotes against market-based costs.

### Should-Cost Structure

```
SHOULD-COST MODEL

Product: __________________  Specification: __________________
Annual Volume: ______ units  Your Target Price: $______

COST ELEMENT BREAKDOWN

RAW MATERIAL COST
Material 1 (___________):
- Specification/grade: __________
- Consumption per unit: ______ units of material per product unit
- Market commodity price: $______ per material unit
  (Source: commodity exchange, supplier quotes, market data)
- Cost per product unit: ______ units × $______ = $______

Material 2, 3, ... (repeat for each material)

Total raw material cost: $______
Scrap/waste factor (typical 5-10%): + $______
**Total Material Cost: $______**

DIRECT LABOR
Manufacturing Process: __________ (machining, assembly, molding, etc.)
Standard time per unit: ______ hours (labor content per unit)
Labor rate (all-in, including benefits): $______ per hour
  (Source: regional labor rates, supplier's labor cost data)
Direct labor cost: ______ hours × $______ = $______

**Total Direct Labor: $______**

MANUFACTURING OVERHEAD
Overhead rate: ____% of direct labor (typical 50-150% depending on industry)
  (Overhead includes: plant utilities, equipment depreciation, supervision, quality control)
Overhead cost: $______ × ____% = $______

**Total Manufacturing Overhead: $______**

VARIABLE MANUFACTURING COST (Sum of above): $______

SG&A (SELLING, GENERAL & ADMINISTRATIVE)
SG&A rate: ____% of COGS (typical 10-15%)
  (Includes: sales, accounting, admin, product development)
SG&A cost: $______ (COGS) × ____% = $______

**Total SG&A: $______**

PROFIT MARGIN
Target profit margin: ____% (varies by industry, supplier type; typical 8-15%)
Profit margin: ($______ COGS + $______ SG&A) × ____% = $______

**SHOULD-COST ESTIMATE: $______**

SUPPLIER QUOTE ANALYSIS

Supplier Quote: $______ per unit
Should-Cost: $______ per unit
Variance: $______ (______%) — Quote is ABOVE / BELOW should-cost

If ABOVE should-cost:
- Variance is: ____% (opportunity for negotiation)
- Potential negotiation target: Should-cost + 5-8% margin = $______

If BELOW should-cost:
- Caution: Supplier may be:
  ☐ Using lower-cost materials (quality risk?)
  ☐ Using more efficient process (competitive advantage)
  ☐ Operating at lower margin (sustainability risk?)
  ☐ Dumping pricing (unsustainable, risk of price increase later)
- Verify: Request cost breakdown, confirm specifications, assess quality risk

SENSITIVITY ANALYSIS
(How does should-cost change with key variables?)

Raw Material Cost:
- If material price ↑ 10%: Should-cost becomes $______ (↑ ___%)
- If material price ↓ 10%: Should-cost becomes $______ (↓ ___%)

Labor Cost:
- If labor rate ↑ 10%: Should-cost becomes $______ (↑ ___%)
- If labor rate ↓ 10%: Should-cost becomes $______ (↓ ___%)

Manufacturing Efficiency (cycle time):
- If time ↑ 20%: Should-cost becomes $______ (↑ ___%)
- If time ↓ 20%: Should-cost becomes $______ (↓ ___%)

Volume Impact (scale economies):
- At 50% volume: Overhead per unit ↑ 20%, should-cost = $______
- At 200% volume: Overhead per unit ↓ 15%, should-cost = $______

NEGOTIATION LEVERAGE
Based on should-cost analysis, we can justify target price of: $______ per unit
Negotiation strategy:
1. Share should-cost model components (not full model) with supplier
2. Identify cost reduction opportunities:
   - Can supplier reduce ___________? (material waste, labor, overhead)
   - Can we accept longer lead time for lower cost?
   - Can we increase volume to achieve better pricing?
3. Establish target price: Should-cost + 6% = $______
4. Walk-away price: Should-cost + 10% = $______

Supporting data for negotiation:
- Commodity price verification: $______ (current market)
- Competitive quotes: Supplier A quoted $______, Supplier B quoted $______
- Benchmark: Industry average price for similar product: $______
```

---

## Make vs. Buy Analysis

Decide whether to manufacture in-house or outsource.

### Make vs. Buy Decision Framework

```
MAKE vs. BUY ANALYSIS

Product: __________________  Current Status: ☐ Make (In-house)  ☐ Buy (Outsourced)

COST COMPARISON (5-Year Analysis)

MAKE (In-House Manufacturing)

Variable Costs (Per Unit):
- Raw material: $______
- Direct labor: $______
- Utilities/supplies: $______
- Quality control: $______
Total variable cost per unit: $______

Annual variable cost: $______ per unit × ______ units/year × 5 years = $__________

Fixed Costs (Annual):
- Facility lease/depreciation: $__________
- Equipment maintenance: $__________
- Supervision/management: $__________
- Quality systems: $__________
- Engineering/process improvement: $__________
Total annual fixed cost: $__________

5-Year fixed costs: $__________ × 5 years = $__________

Capital Investment (One-Time):
- Equipment purchase: $__________
- Tooling / fixtures: $__________
- Facility modifications: $__________
- Software / systems: $__________
Total capital investment: $__________

**TOTAL 5-YEAR MAKE COST: $____________**

Allocation of costs:
- Variable costs: ____%
- Fixed costs: ____%
- Capital: ____%

BUY (Outsource)

Variable Costs:
- Supplier unit price: $______
- Inbound freight: $______
- Inspection/testing: $______
- Quality issues/rework: $______
Total variable cost per unit: $______

Annual variable cost: $______ per unit × ______ units/year × 5 years = $__________

Fixed Costs (Annual):
- Supplier management (headcount): $__________
- Contract administration: $__________
- Contingency management / second-source qualification: $__________
- Engineering liaison (interface with supplier): $__________
Total annual fixed cost: $__________

5-Year fixed costs: $__________ × 5 years = $__________

Capital Investment:
- Supplier tooling contribution (if any): $__________ (may be covered by supplier)
Total capital investment: $__________

**TOTAL 5-YEAR BUY COST: $____________**

Allocation of costs:
- Variable costs: ____%
- Fixed costs: ____%
- Capital: ____%

FINANCIAL COMPARISON

Make cost (5 years): $____________
Buy cost (5 years):  $____________
Difference: $____________

Cost advantage: ☐ Make (by $________) ☐ Buy (by $________) ☐ Breakeven

Sensitivity: Breakeven at ______ units/year

STRATEGIC FACTORS (Scored 1-5, where 5 = strong advantage for that option)

                                        Make    Buy
Core Competency?                        ___     ___
(Is this part of your strategic capability?)

Quality Control?                        ___     ___
(Can you control quality better in-house vs. supplier?)

Lead Time / Flexibility?                ___     ___
(Need fast turnaround or volume swings?)

Technology / R&D?                       ___     ___
(Need tight engineering integration?)

Confidentiality / IP Risk?              ___     ___
(Sensitive design, risk of supplier sharing knowledge?)

Capacity / Scalability?                 ___     ___
(Can you scale capacity for growth?)

Supply Risk / Dependency?               ___     ___
(Single-source risk if outsourced?)

Employee Impact?                        ___     ___
(Organizational capability, headcount impact?)

Working Capital?                        ___     ___
(Better inventory management in-house vs. supplier buffer?)

QUALITATIVE ASSESSMENT

Strategic Fit:
☐ Make aligns with core competency (manufacturing is strategic advantage)
☐ Buy aligns with strategy (focus on sales/design, outsource commodity manufacturing)

Quality Assessment:
☐ Make enables superior quality control (critical for product quality)
☐ Buy supplier quality adequate (standard quality acceptable)

Technology Assessment:
☐ Make keeps engineering close (need tight integration with design)
☐ Buy allows supplier innovation (supplier is technology leader)

Risk Assessment:
☐ Make mitigates supply risk (internal control)
☐ Buy increases risk (dependency on external supplier) — requires dual-source mitigation

RECOMMENDATION

Overall Assessment:
☐ MAKE is financially and strategically superior
  - Cost advantage: $______ (5-year)
  - Strategic alignment: __________ (core competency / strategic importance)
  - Risk mitigation: __________ (reduce dependency)

☐ BUY is financially and strategically superior
  - Cost advantage: $______ (5-year)
  - Strategic alignment: __________ (free up capital, focus on core)
  - Supplier advantage: __________ (best-in-class supplier capability)

☐ BREAKEVEN (financially similar; decision based on strategic factors)
  - Recommended option: __________ based on __________ (strategic reason)

IMPLEMENTATION PLAN

If recommendation is to SWITCH from Make to Buy:
- Transition timeline: __________ months
- Supplier identification: __________
- Transition support: Phase out internal capacity or redeploy
- Financial impact: One-time transition cost $__________, ongoing savings $__________/year

If recommendation is to SWITCH from Buy to Make:
- Capital investment required: $__________
- Timeline to reach full production: __________ months
- Payback period: __________ years (at $__________ annual savings)
- Key risks to manage: __________ (ramp-up, quality, capacity)

If recommendation is to MAINTAIN current strategy:
- Continue regular review (annual) to monitor cost trends
- Develop contingency plans (backup supplier if buying, backup capacity if making)
```

---

## Spend Analysis & Cost Reduction

Analyze spending patterns to identify cost reduction opportunities.

### Spend Analysis Methodology

```
SPEND ANALYSIS

Review Period: ____________________  Total Company Spend: $__________

STEP 1: CATEGORIZE SPEND

Spend by Category:
Category                Annual Spend    % of Total    Strategic Importance
─────────────────────────────────────────────────────────────────────────
Raw materials           $__________     ____%        High / Medium / Low
Packaging               $__________     ____%        High / Medium / Low
MRO (Maintenance)       $__________     ____%        High / Medium / Low
Services/Outsourcing    $__________     ____%        High / Medium / Low
Professional services   $__________     ____%        High / Medium / Low
Freight/Logistics       $__________     ____%        High / Medium / Low
Energy/Utilities        $__________     ____%        High / Medium / Low
Travel/Other            $__________     ____%        High / Medium / Low

Total: $__________

STEP 2: IDENTIFY TAIL SPEND (High-Volume, Low-Value Transactions)

Tail spend analysis (invoices <$1,000):
- Number of invoices: __________
- Total spend: $__________ (typically 20-30% of total spend)
- Number of suppliers: __________ (typically 3000+ suppliers)
- Opportunity: Consolidate to reduce supplier count and admin overhead
- Estimated savings: 5-15% of tail spend = $__________

Fragmented spending:
- Example: Spending on same product with 10+ different suppliers
- Identified opportunities:
  - Consolidate to 2-3 preferred suppliers
  - Leverage volume for discounts
  - Estimated savings: $__________

STEP 3: SUPPLIER CONCENTRATION ANALYSIS

Top 10 Suppliers:
Supplier             Spend        % of Total     Strategic?   Performance
────────────────────────────────────────────────────────────────────────
1. __________        $________    ____%         High/Low     Good/Fair
2. __________        $________    ____%         High/Low     Good/Fair
...
10. __________       $________    ____%         High/Low     Good/Fair

Total Top 10: $__________ (typically 60-70% of total spend)

Concentration Assessment:
- Top 5 suppliers represent: ___% of spend (target <50%)
- Supplier diversification: ☐ Good (spread)  ☐ Moderate  ☐ High concentration risk

Single-supplier spend:
- Items with only 1 supplier: $__________ (typically 5-15%)
- Opportunity: Identify for multi-source strategy
- Estimated impact: Negotiate 5-10% price reduction through competition

STEP 4: SAVINGS OPPORTUNITY IDENTIFICATION

High-Impact Categories (Focus on 20% of spend that accounts for 80% of value):

1. Commodity Price Exposure
   Category: __________
   Annual spend: $__________
   Market volatility: High / Medium / Low
   Opportunity: Hedging, longer-term contracts, index-linked pricing
   Estimated savings: ________% × $__________ = $__________

2. Supplier Performance Issues
   Supplier with >5% price premium to market: __________
   Current price: $______ vs. market $______ (______% premium)
   Annual impact: $__________
   Opportunity: Negotiate to market rate or switch to competitive supplier
   Estimated savings: $__________

3. Consolidation Opportunities
   Category: __________ (e.g., MRO, packaging, services)
   Current suppliers: ______ (fragmented)
   Spend split: Top supplier ___%, others _____%
   Opportunity: Consolidate to top 2 suppliers for volume discount
   Current volume discount: ____% → Target: ____% (industry standard)
   Estimated savings: $__________

4. Process/Specification Optimization
   Area: __________ (e.g., oversized packaging, premium specifications not required)
   Current spend: $__________
   Proposed change: __________________ (right-size spec)
   Estimated savings: ________% × $__________ = $__________

5. Make vs. Buy / Insource Opportunity
   Service currently outsourced: __________
   Current cost: $__________
   In-house capability: ☐ Exists  ☐ Can be built  ☐ Not feasible
   Cost to insource: $__________
   Estimated savings: $__________

6. Tail Spend Consolidation
   Current: ______ invoices from ______ suppliers for tail items
   Proposed: Consolidate to ______ suppliers via catalog/framework
   Admin savings: ________% reduction in processing
   Volume savings: ____% price reduction through consolidation
   Estimated savings: $__________

SUMMARY OF SAVINGS OPPORTUNITIES

Opportunity                          Annual Savings   Implementation Time
────────────────────────────────────────────────────────────────────────
1. __________________                $__________      ____ months
2. __________________                $__________      ____ months
3. __________________                $__________      ____ months
4. __________________                $__________      ____ months
5. __________________                $__________      ____ months

TOTAL ANNUAL SAVINGS POTENTIAL:      $__________      (____% of total spend)

IMPLEMENTATION ROADMAP

Year 1 Quick Wins (0-3 months):
- Opportunity: __________________ (Est. savings: $__________)
- Opportunity: __________________ (Est. savings: $__________)
  Year 1 Total: $__________

Year 1-2 Medium-Term (3-12 months):
- Opportunity: __________________ (Est. savings: $__________)
- Opportunity: __________________ (Est. savings: $__________)
  Year 1-2 Total: $__________

Year 2+ Strategic (12+ months):
- Opportunity: __________________ (Est. savings: $__________)
  Requires: __________________ (e.g., supplier qualification, contract negotiation)
  Year 2+ Total: $__________

TOTAL SAVINGS PLAN:                 $__________ (cumulative impact after full implementation)

Measurement & Tracking:
- Baseline (current state): $__________
- Target (post-implementation): $__________ (baseline - savings)
- Frequency: Track monthly; report quarterly to management
- Verification: Independent audit of savings realization
```

---

## Savings Tracking & Verification

Verify and track realized savings to ensure ROI.

### Savings Calculation Methods

**Hard Savings (Reduces Actual Spend):**
- Unit price negotiation: (Old price - New price) × Annual volume
- Supplier consolidation: Reduction in number of suppliers, lower freight/admin costs
- Payment term improvement: Longer terms free up cash

**Soft Savings (Cost Avoidance):**
- Price increase avoidance: If market price increased 5% but we locked in 0%
- Avoided expedite costs: By forecasting better, we reduce premium freight
- Productivity improvements: Better processes reduce labor per unit

**Process Savings:**
- Reduced invoice count (tail spend consolidation): Lower admin overhead
- Reduced audit/inspection: Better supplier quality = less QC cost
- Improved planning: Reduced safety stock = lower inventory carrying cost

### Savings Verification Template

```
SAVINGS TRACKING LOG

Cost Reduction Initiative: ___________________________
Sponsor: ________________  Start Date: ________________
Category: ____________  Target Savings: $________________

INITIATIVE DESCRIPTION
Background: ________________________________________________________________
Objective: _________________________________________________________________
Approach: ________________________________________________________________

BASELINE (Before Initiative)
                            Metric              Value           Source
Unit Price:                 $/unit              $______         Supplier invoice
Annual Volume:              units/year          ______          Procurement system
Supplier:                   Name                _______         Contract
Payment Terms:              Days                _____           Contract
Other metrics:              ________________    ______          _________

CURRENT STATE (Post-Initiative)
                            Metric              Value           Source
Unit Price:                 $/unit              $______         Supplier invoice
Annual Volume:              units/year          ______          Procurement system
Supplier:                   Name                _______         Contract
Payment Terms:              Days                _____           Contract
Other metrics:              ________________    ______          _________

SAVINGS CALCULATION

Type of Savings: ☐ Hard (actual spend reduction)  ☐ Soft (cost avoidance)

Hard Savings Calculation:
(Previous price - New price) × Annual volume = Savings
($_____ - $_____) × ______ units = $__________

OR

Consolidation: Previous admin cost - New admin cost = Savings
$__________ - $__________ = $__________

Soft Savings Calculation:
Market price increase (avoided) × Annual volume = Soft savings
(Increase ___% × Previous price $_____) × ______ units = $__________

OR

Cost avoidance: Expedite cost avoided = Soft savings
__________ premiums @ $_________ per expedite = $__________

ANNUALIZED SAVINGS

First year (if initiative started mid-year): $__________
Annual recurring savings: $__________
Multi-year cumulative savings (3 years): $__________

ADJUSTMENTS FOR VOLUME CHANGES

If volume changed from baseline to current:
Baseline volume: ______ units
Current volume: ______ units
Volume change: ___% (increase / decrease)

Normalized savings (at baseline volume):
($__________ savings / Current units) × Baseline units = $__________

PAYBACK & ROI

One-time implementation cost: $__________
  (Supplier qualification, system changes, training, etc.)
Annual savings: $__________
Payback period: $__________ ÷ $__________ = _____ months
ROI (Year 1): ($__________ - $__________) ÷ $__________ = _____%

VERIFICATION & AUDIT

Savings verification method: ☐ Supplier data  ☐ Invoice comparison  ☐ Internal system
Data sources reviewed:
- ☐ Supplier invoice history (prior 12 months)
- ☐ New invoice documentation
- ☐ Procurement system records
- ☐ Finance/accounting records
- ☐ Independent audit

Verification result: ☐ VERIFIED (Savings confirmed)  ☐ PARTIAL (___% verified)  ☐ DISPUTED

Notes: _________________________________________________________________

SIGN-OFF & APPROVAL

Calculated by: _____________________  Date: __________
Verified by: _______________________  Date: __________
Finance approved: ___________________  Date: __________
Management approval: ________________  Date: __________

Implementation Status: ☐ Planned  ☐ In Progress  ☐ Completed  ☐ Realized & Verified

Next Review Date: __________
```

---

## Output: Cost Analysis Report

Present cost analysis with:
1. **TCO breakdown** (all cost categories and impact)
2. **Landed cost analysis** (for international sourcing)
3. **Should-cost model** (benchmark for supplier quotes)
4. **Spend analysis** (consolidation and reduction opportunities)
5. **Make vs. buy assessment** (financial and strategic comparison)
6. **Savings tracking** (realized savings vs. target)
7. **Cost reduction roadmap** (prioritized opportunities and timeline)
