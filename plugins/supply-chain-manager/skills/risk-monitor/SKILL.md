---
name: risk-monitor
version: 0.1.0
description: This skill should be used when the user asks to 'assess supply chain risk', 'contingency planning', 'supply chain disruption', 'single-source risk', 'supplier financial risk', 'geopolitical risk', 'risk register', 'business continuity', 'alternate sourcing', or needs help identifying and mitigating supply chain vulnerabilities.
---

# Risk Monitor Skill

Supply chain disruptions cost companies billions annually. A proactive risk management approach identifies vulnerabilities before they impact operations. This skill guides you through supply chain risk assessment, mitigation planning, and contingency development.

## Supply Chain Risk Taxonomy

Supply chain risks fall into seven categories:

### 1. Supply Risk
**Definition:** Risk that supplier cannot provide materials/services as required

**Causes:**
- Supplier bankruptcy or financial distress
- Quality failures or recalls
- Capacity constraints (unable to scale)
- Strikes or labor disputes
- Key person dependency (owner/engineer departure)
- Loss of key certifications

**Impact:** Production delays, quality escapes, emergency sourcing costs

**Mitigation:**
- Dual/multi-source critical items
- Supplier financial monitoring
- Quality audits and improvement programs
- Supply chain agreements with penalty clauses
- Alternate qualification in advance

---

### 2. Demand Risk
**Definition:** Risk that demand forecast is inaccurate or changes unexpectedly

**Causes:**
- Market shifts (consumer preference, economic downturn)
- Customer concentration (loss of major customer)
- Competitive disruption (new entrant, price war)
- Seasonality or promotional spike not forecasted
- Product obsolescence or replacement

**Impact:** Excess inventory, stockouts, working capital swings

**Mitigation:**
- Leading indicator monitoring
- Customer collaboration and transparency
- Sales pipeline review (S&OP process)
- Safety stock for high-variability items
- Flexible supply agreements (volume swings allowed)
- Product diversification

---

### 3. Operational Risk
**Definition:** Risk in manufacturing, logistics, or internal operations

**Causes:**
- Equipment failure
- Capacity constraints
- Process capability degradation (increase in scrap/rework)
- Key person loss (critical skill on team)
- System failure (ERP, planning system)
- Quality escapes

**Impact:** Production delays, cost overruns, customer dissatisfaction

**Mitigation:**
- Preventive maintenance programs
- Process capability studies (Cpk monitoring)
- Cross-training staff
- System redundancy and backup
- Continuous improvement culture

---

### 4. Logistics Risk
**Definition:** Risk in transportation, warehousing, or distribution

**Causes:**
- Carrier failure or bankruptcy
- Port strikes or congestion
- Customs delays or documentation issues
- Route disruption (accident, weather, congestion)
- Warehouse capacity or damage
- Fuel price spikes

**Impact:** Delivery delays, higher freight costs, customer service failures

**Mitigation:**
- Carrier diversification (avoid single carrier dependency)
- Alternative route planning
- Customs broker relationship + documentation prep
- Inventory buffers at strategic locations
- Fuel hedging strategies

---

### 5. Geopolitical Risk
**Definition:** Risk from political events, regulations, or international tensions

**Causes:**
- Tariffs or trade barriers
- Sanctions (e.g., Russia, Iran, North Korea)
- Political instability (coup, revolution, war)
- Regulatory changes (local content, environmental)
- Brexit, regional agreements shifts
- Supply chain nationalism policies

**Impact:** Increased costs, supply disruptions, market access loss

**Mitigation:**
- Geographic diversification of sourcing
- Supply chain mapping (visibility to Tier 2/3)
- Tariff planning and trade agreement optimization
- Compliance monitoring (denied orders, OFAC)
- Supply chain risk insurance
- Alternative sourcing on geopolitically exposed items

---

### 6. Financial Risk
**Definition:** Risk related to costs, currency, or supplier creditworthiness

**Causes:**
- Commodity price volatility (metals, fuel, food)
- Foreign exchange (FX) rate fluctuations
- Supplier credit risk (payment default)
- Interest rate increases (working capital costs)
- Inflation (wage, input cost pressures)

**Impact:** Cost overruns, working capital squeeze, supplier defaults

**Mitigation:**
- Commodity hedging strategies
- FX forward contracts for large international buys
- Supplier financial monitoring (D&B scores, payment history)
- Long-term contracts with price locks
- Supplier financing programs (help weaker suppliers)
- Inventory optimization (reduce working capital)

---

### 7. Environmental/Climate Risk
**Definition:** Risk from natural disasters, climate change, or environmental regulations

**Causes:**
- Earthquakes, floods, hurricanes, typhoons
- Droughts (affecting agriculture, water-dependent manufacturing)
- Temperature extremes (affecting semiconductor plants, agricultural yield)
- Regulatory restrictions (emissions, water use, waste)
- Supply base in climate-vulnerable regions
- Carbon pricing/trading (cost increases)

**Impact:** Supply disruptions, asset damage, cost increases, market access loss

**Mitigation:**
- Supply chain mapping for environmental hazards
- Supplier diversification across geographies
- Inventory buffers for climate-sensitive items
- ESG supplier requirements (reduce regulatory risk)
- Climate risk assessment of key suppliers
- Business continuity plans for natural disasters

---

## Risk Assessment Matrix

Assess each identified risk on two dimensions: probability and impact. Prioritize by overall risk score.

### Step 1: Define Probability & Impact Scales

**Probability (1-5 scale):**
- 1 = Rare (< 5% chance in next 12 months)
- 2 = Unlikely (5-20% chance)
- 3 = Possible (20-50% chance)
- 4 = Likely (50-80% chance)
- 5 = Almost certain (> 80% chance)

**Impact (1-5 scale):**
- 1 = Minimal: <$100K financial impact, <1% revenue impact, manageable within operations
- 2 = Low: $100K-$500K impact, 1-2% revenue impact
- 3 = Medium: $500K-$2M impact, 2-5% revenue impact, notable operational disruption
- 4 = High: $2M-$10M impact, 5-10% revenue impact, significant disruption (weeks of delay)
- 5 = Critical: >$10M impact, >10% revenue impact, major disruption (months of delay)

### Step 2: Calculate Risk Score

**Risk Score = Probability × Impact**

Risk score ranges from 1 (1×1) to 25 (5×5)

**Risk Prioritization:**
- **Critical (20-25):** Immediate action required; develop mitigation before risk materializes
- **High (15-19):** Significant action needed; implement mitigation and contingency plans
- **Medium (8-14):** Monitor closely; develop contingency plans, low-cost mitigations
- **Low (1-7):** Accept risk; minimal action; monitor for changes

### Step 3: Risk Register

Create a risk register tracking all identified risks:

```
SUPPLY CHAIN RISK REGISTER

Risk ID  Category    Risk Description    Probability  Impact  Score  Status
────────────────────────────────────────────────────────────────────────────
R-001    Supply      Sole supplier for   4 (Likely)   4 (High) 16    Active
         Risk        critical component  50-80%       $2-10M
                     (Acme Electronics)

R-002    Demand      Customer A          3 (Possible) 5        15    Active
         Risk        represents 25% of   20-50%       (Critical)
                     revenue; loss = $50M

R-003    Geo-        Tariff increase on  4 (Likely)   3        12    Active
         political   China imports       50-80%       $500K-2M

R-004    Financial   Commodity (steel)   3 (Possible) 3        9     Active
         Risk        price spike         20-50%       $500K-2M

R-005    Logistics   Port congestion     3 (Possible) 2        6     Monitor
         Risk        delays delivery     20-50%       $100-500K

R-006    Environ-    Flood risk at       2 (Unlikely) 4        8     Monitor
         mental      key supplier        5-20%        $2-10M
                     (Northeast US)

R-007    Operational Key supply planner  2 (Unlikely) 2        4     Accept
         Risk        departure           5-20%        $100-500K
```

---

## Single-Source Risk Analysis

Single-source items create concentrated risk. Develop multi-source strategy.

### Identify Single-Source Items

```
Single-Source Analysis Worksheet

Item/Commodity: __________________  Annual Spend: $__________________
Current Sole Supplier: __________ Years Supplied: ____ Relationship: Good/Fair/Poor

REVENUE AT RISK CALCULATION

Annual revenue dependent on this item: $__________________
Probability of supply disruption (from risk assessment): ____% (1-5 year period)

Potential financial impact:
- Revenue loss during disruption:
  Days to resolve: ______ days
  Daily revenue lost: $______
  Total revenue at risk: $______

- Emergency sourcing cost (premium freight, expedite, higher unit price):
  Premium vs. normal cost: $______ per unit
  Units needed for disruption period: ______
  Emergency sourcing cost: $______

- Indirect costs (expedite labor, expedite fees, lost customer confidence):
  Estimated indirect cost: $______

Total Revenue at Risk = Revenue loss + Emergency costs + Indirect = $__________

CRITICALITY ASSESSMENT

Criticality Score = Revenue at Risk × Probability × (1 - Time to resolve)

This item's criticality score: _____ (High scores = highest priority for multi-source)
```

### Develop Multi-Source Strategy

**For each single-source item:**

1. **Qualify backup suppliers** (3-6 months lead time)
   - Audit and approval process
   - Run small production batches to validate quality
   - Lock in contingency capacity (fee may apply)

2. **Implement dual-source strategy**
   - Primary supplier: 70-80% volume
   - Secondary supplier: 20-30% volume (keeps secondary qualified and confident in capability)
   - Split annual procurement across both

3. **Contingency agreements**
   - Document supplier agreement that includes surge capacity commitment
   - Fee for maintaining contingency capacity (typically 1-2% of annual spend)
   - Trigger conditions for contingency activation
   - Lead time to activate contingency (should be rapid, <24 hours ideal)

4. **Risk-based inventory buffer**
   - Safety stock for single-source items reflects disruption risk
   - Increase safety stock by 25-50% vs. dual-source items
   - Buffer size = Days to requalify new supplier + lead time

Example:
- If lead time = 8 weeks and requalification = 4 weeks
- Total disruption window = 12 weeks
- Carry 12 weeks of inventory as additional buffer (vs. 2-4 weeks for dual-source)

---

## Supply Chain Mapping & Concentration Risk

Map your supply chain to Tier 2 and Tier 3 suppliers to identify hidden concentration risk.

### Concentration Risk Metrics

**Supplier concentration:**
- Top 5 suppliers as % of spend: Target <50%
- Top 10 suppliers as % of spend: Target <75%
- If concentrated, risk is high; geographic/industry diversification needed

**Geographic concentration:**
- Single country supply: High risk (geopolitical, trade)
- Concentration in region: Consider alternative geographies
- Optimal: Distributed across 3+ geographies

**Industry concentration:**
- All suppliers in single industry: Industry downturn affects all
- Product concentration: Single component from multiple tiers
- Example risk: Semiconductor shortage affects multiple product lines

### Supply Chain Mapping Template

```
SUPPLY CHAIN MAPPING

Product Line: __________________  Review Date: __________________

TIER 1 SUPPLIERS (Direct Suppliers)
Supplier        Commodity           Annual Spend   Country   Risk Score
─────────────────────────────────────────────────────────────────────
_________       __________          $________      _______   High/Med/Low
_________       __________          $________      _______   High/Med/Low
_________       __________          $________      _______   High/Med/Low
_________       __________          $________      _______   High/Med/Low

Total Tier 1 Spend: $_________

TIER 2 SUPPLIERS (Sub-component Suppliers - Top 10 Only)
Supplier        Component          Tier 1 Supplier  Country   Risk Score
─────────────────────────────────────────────────────────────────────────
_________       __________         __________       _______   High/Med/Low
_________       __________         __________       _______   High/Med/Low
_________       __________         __________       _______   High/Med/Low

Single-Source Tier 2 Items at Risk:
- Item: __________________  via Supplier: __________  Impact: High/Med/Low
- Item: __________________  via Supplier: __________  Impact: High/Med/Low

GEOGRAPHIC CONCENTRATION
By Country:
- Country 1 (____): ___% of spend (High risk if >50%)
- Country 2 (____): ___% of spend
- Country 3 (____): ___% of spend
- Country 4 (____): ___% of spend

Geopolitical Risk Exposure:
- Items sourced from high-risk geographies: _____________________
- Tariff exposure: Estimated impact $______/year if 25% tariff imposed
- Mitigation: Develop alternate sourcing in Mexico/USMCA? Alternative countries?

RISK SUMMARY
High-risk items needing mitigation: _____ (target <5% of spend in high-risk)
Concentration risk: ☐ Low (<50% top 5) ☐ Medium (50-70% top 5) ☐ High (>70% top 5)
Single-source critical items: _____ (target 0, max 1-2)
Geographic diversification: ☐ Strong (3+ countries) ☐ Adequate (2 countries) ☐ Weak (1 country)

Action Items:
1. Qualify alternate source for item: __________ by date: __________
2. Shift ___% volume to supplier: __________ to reduce concentration
3. Negotiate contingency agreement with supplier: __________ by date: __________
```

---

## Supplier Financial Health Monitoring

Supplier financial distress is an early warning sign of supply disruption. Monitor regularly.

### Early Warning Indicators

Red flags for financial distress:

```
SUPPLIER FINANCIAL HEALTH CHECKLIST

☐ Payment History
  ☐ Late payments to vendors (ask their suppliers)
  ☐ Bounced checks or payment delays
  ☐ Requesting extended payment terms (sign of cash flow problems)
  ☐ Requesting prepayment (sign of distress)

☐ Operational Signals
  ☐ Increasing quality escapes (cost-cutting measures)
  ☐ Delivery delays increasing (can't afford expedite)
  ☐ Capacity not expanding (no capex budget)
  ☐ Customer concentration increasing (losing customers)
  ☐ Employee turnover increasing (losing key people)
  ☐ Reduced marketing/sales activity

☐ Financial Indicators
  ☐ D&B rating declining
  ☐ Credit limit reduced by bank
  ☐ Higher interest rates on new debt (lender concern)
  ☐ Increasing days sales outstanding (DSO — customers paying late)
  ☐ Increasing inventory (can't sell product)
  ☐ Working capital deteriorating

☐ Structural Issues
  ☐ Owner/CEO transition (stability risk)
  ☐ Key engineer or production manager departure
  ☐ Loss of major customer (revenue collapse)
  ☐ Regulatory investigation or compliance issues
  ☐ Lawsuit or litigation (operational distraction)

☐ Communication Changes
  ☐ Reduced responsiveness to inquiries
  ☐ Account rep turnover
  ☐ Evasiveness about capacity or timeline
  ☐ Not attending scheduled business reviews
```

### Financial Monitoring Program

```
SUPPLIER FINANCIAL MONITORING SCORECARD

Supplier: __________________  Review Date: __________________
Annual Spend: $__________     Criticality: High / Medium / Low

FINANCIAL METRICS (Most Recent Data)
                        Current    Prior Year    Trend      Assessment
Dun & Bradstreet Score  ___/100    ___/100       →/↑/↓      Green/Yellow/Red
Years in Business       _____      _____         →/↑/↓      Green/Yellow/Red
Customer Concentration  ____%      ____%         →/↑/↓      Green/Yellow/Red
  (Top 3 customers)

Debt-to-Equity Ratio    ___x       ___x          →/↑/↓      Green/Yellow/Red
  (target <1.5x)

Current Ratio           ___x       ___x          →/↑/↓      Green/Yellow/Red
  (target >1.5x)

Operating Margin %      ____%      ____%         →/↑/↓      Green/Yellow/Red
  (target >8%)

Cash Flow (Years)       Positive/  Positive/     →/↑/↓      Green/Yellow/Red
                        Negative   Negative

OPERATIONAL SIGNALS
Payment History         Good/Fair/Poor
Delivery Performance    Good/Fair/Poor
Quality Escapes Trend   Stable/Increasing
Capacity Concerns       No/Yes (describe: _______)
Key Personnel Stability Good/Fair/Poor
Customer Concentration  Healthy/Moderate/High Risk

OVERALL FINANCIAL HEALTH RATING
☐ Excellent (Green): Low bankruptcy risk, healthy financials, stable business
☐ Good (Green): Stable financials, acceptable risk
☐ Concerning (Yellow): Some warning signs, monitor closely, contingency planning
☐ High Risk (Red): Significant distress indicators, immediate action required

IF YELLOW OR RED RATING:
Actions taken: _________________________________________________________________
Contingency supplier identified: ___________________
Requalification timeline: ___________________
Frequency of monitoring (increase from annual): ____ months
Executive escalation: ☐ Yes (CFO/CPO notified) ☐ No
```

---

## Contingency Planning & Business Continuity

Develop playbooks to execute rapidly if disruption occurs.

### Contingency Plan Structure

```
SUPPLY CHAIN CONTINGENCY PLAN

Item/Supplier at Risk: _________________ Risk Category: __________________
Annual Impact if Disrupted: $________    Lead Time: _____ weeks

TRIGGER CONDITIONS
This contingency activates if:
1. __________________________________________________________________
   (Condition 1: Specific, measurable — e.g., "Supplier notifies of >30% capacity loss")
2. __________________________________________________________________
   (Condition 2: Second confirmation, if needed)

DECISION AUTHORITY
Contingency activation decision made by: _________________ (Role/Title)
Backup decision-maker: _________________ (if primary unavailable)
Escalation: Notify CFO, CEO within ___ hours of activation

RESPONSE TEAM
Role                    Owner Name            Contact Number    Availability
Incident Commander      ____________          ____________      24/7 / Business hours
Supply Chain Lead       ____________          ____________      24/7 / Business hours
Operations Lead         ____________          ____________      24/7 / Business hours
Procurement Lead        ____________          ____________      24/7 / Business hours
Customer Communication  ____________          ____________      24/7 / Business hours
Finance/Accounting      ____________          ____________      Business hours
Legal (if needed)       ____________          ____________      On-call

RESPONSE PLAYBOOK (Execute in order)

Hour 0: Immediate Actions (Within 2 hours of trigger)
☐ Confirm disruption (contact supplier directly, verify situation)
☐ Activate contingency team (conference call within 30 minutes)
☐ Assess current inventory (units available, days of supply)
☐ Evaluate production impact:
  - When will we run out of material? _____ days
  - Can we reduce production? ☐ Yes (reduce to ___%) ☐ No
  - What's the minimum we must ship to key customers? $____/day or ___ units
☐ Identify recovery timeline (when will disruption resolve? Ask supplier)

Hour 2-8: Activation & Communication
☐ Engage alternate supplier (if pre-qualified):
  - Contact _________ (backup supplier name)
  - Request emergency capacity: _____ units
  - Quote timeline for first shipment: _____ days
  - Cost premium: ____% above normal
☐ Activate supplier contingency agreement (if applicable):
  - Notify current supplier of contingency activation
  - Request their recovery plan + timeline
☐ Customer notification (if impact expected >5 days):
  - Key customers to notify: ________________, ________________
  - Message: "We are experiencing supply disruption with [supplier]. We are implementing contingency plans to minimize impact. Estimated impact: [X days delay] on shipments. We will provide daily updates."
  - Frequency of updates: Daily until resolved

Day 2-3: Tactical Actions
☐ Expedite freight from alternate supplier:
  - Air freight if needed (accept higher cost)
  - Authorize emergency expedite fees
  - Coordinate with logistics team on delivery timing
☐ Adjust production schedule:
  - Prioritize delivery to high-margin/key customers
  - Defer non-essential orders
  - Use buffer inventory strategically
☐ Finance impact assessment:
  - Calculate total cost of contingency (expedite fees, expedite freight, opportunity cost)
  - Track variance vs. normal costs
☐ Continue customer communication (daily updates)

Day 7+: Resolution & Stabilization
☐ Assess recovery timeline:
  - When will primary supplier resume normal supply?
  - Gradually shift back to primary supplier (don't abruptly)
☐ Transition back to normal operations
☐ Post-incident review:
  - What happened? (Root cause analysis)
  - What went well? (Document lessons learned)
  - What could improve? (Process improvements)
  - Was contingency plan adequate?
☐ Update contingency plan with learnings

ESTIMATED COSTS & IMPACT

Contingency Cost Summary:
- Expedite freight cost: $__________
- Alternate supplier premium: $__________
- Production adjustment/downtime: $__________
- Total cost of contingency: $__________

Impact if no contingency (no mitigation):
- Production delay: _____ weeks
- Revenue loss: $__________
- Customer relationship damage: $__________
- Brand impact: High / Medium / Low

NET BENEFIT of contingency = Impact avoided - Contingency cost
= $__________ - $__________ = $__________ (benefit/cost analysis)
```

---

## Early Warning Indicator Dashboard

Monitor key risk metrics monthly to enable early detection.

```
SUPPLY CHAIN RISK DASHBOARD

Reporting Month: __________________  Review Date: __________________

SUPPLIER FINANCIAL HEALTH
Supplier with declining D&B score: None / __________ (Score: __ → __)
Supplier with payment difficulties: None / __________
Supplier customer concentration >50%: None / __________ (Need: <50%)
Number of suppliers in financial yellow/red status: _____ (Target: 0)

DEMAND VOLATILITY
Forecast accuracy (MAPE): ____% (Target: <15%)
Demand plan adjustments last month: _____ times (Target: <2)
Safety stock level vs. plan: _____% (Monitor for creep)
Customer concentration in Top 10: ____% (Target: <70%)

LOGISTICS & SUPPLY
Carrier on-time delivery: ____% (Target: >98%)
Port congestion alerts (origin ports): None / __________
Supplier quality escapes (PPM): _____ (Target: <500 PPM)
Supplier on-time delivery: ____% (Target: >98%)

GEOPOLITICAL & REGULATORY
Trade policy changes affecting sourcing: None / __________
Tariff rate changes (pending): None / __________
Country instability affecting suppliers: None / __________
Compliance alerts (sanctions, IP, export control): None / __________

ENVIRONMENTAL / CLIMATE
Natural disaster alerts for supplier regions: None / __________
Climate-vulnerable region concentration: ____% (Target: <30%)
Supplier ESG/regulatory compliance issues: None / __________

INVENTORY & WORKING CAPITAL
Inventory days on hand: _____ days (Target: _____ days)
Working capital as % of revenue: ____% (Target: <___%)
Slow-moving inventory: $__________ (Target: <5% of total)

SUMMARY & ACTION
Yellow Alerts (require monitoring/action): _____ (Target: 0)
Red Alerts (require immediate action): _____ (Target: 0)

Priority Actions for Next Month:
1. __________________________________________________________________
2. __________________________________________________________________
3. __________________________________________________________________

Approval/Review: _________________________ Date: __________
```

---

## Risk Management Governance

Establish roles, responsibilities, and review cadence.

```
SUPPLY CHAIN RISK GOVERNANCE FRAMEWORK

ROLES & RESPONSIBILITIES

Chief Supply Chain Officer (CSCO) / VP Supply Chain
- Owns overall supply chain risk strategy
- Chairs monthly risk review meetings
- Escalates critical risks to CEO/Board
- Allocates resources for risk mitigation

Risk Manager / Supply Chain Planning Manager
- Maintains risk register and early warning indicators
- Coordinates contingency plan development and testing
- Conducts risk assessments with cross-functional team
- Reports monthly to CSCO

Procurement / Vendor Management
- Monitors supplier financial health and performance
- Manages supplier relationships and development
- Responsible for alternate source qualification
- Coordinates contingency agreements with suppliers

Operations / Manufacturing
- Assesses operational risks and process capability
- Manages inventory buffers and safety stock
- Communicates capacity and production constraints
- Executes contingency plans during disruption

Logistics / Supply Chain Planning
- Monitors carrier and port congestion
- Manages freight costs and shipping mode strategy
- Plans transportation network resilience
- Supports contingency logistics (expedite, alternate routes)

Finance / Accounting
- Analyzes financial impact of risks and mitigations
- Tracks cost of contingencies and mitigation investments
- Monitors working capital and inventory costs
- Manages hedging strategies (commodity, FX)

MEETING CADENCE

Monthly Risk Review (1st Tuesday of month, 1 hour)
- Attendees: CSCO, Risk Manager, Procurement, Operations, Logistics, Finance
- Agenda: Review early warning dashboard, discuss emerging risks, approve new mitigations
- Output: Risk register update, action items

Quarterly Risk Assessment (1st week of Q, 2 hours)
- Full cross-functional team review
- Deep-dive on top 5-10 risks
- Contingency plan review and testing
- Output: Updated risk heat map, revised contingency plans

Annual Risk Strategy (Q1, 4 hours)
- Executive leadership (CEO, CFO, COO, CSCO)
- Review top 20 risks and mitigation status
- Approve budget for risk mitigation investments
- Set risk appetite (acceptable level of risk)
- Output: Annual risk management plan

RISK APPETITE STATEMENT

Our organization accepts the following level of risk in supply chain operations:

Financial Risk: We are willing to accept losses up to $_____ million in a single supply chain disruption. We will maintain contingency plans and insurance for disruptions exceeding this threshold.

Service Level Risk: We maintain minimum service levels of __% on-time delivery. We accept that supply disruptions may reduce this temporarily, but aim to recover to baseline within _____ days.

Operational Risk: We invest in process capability (Cpk >1.33) and quality systems to maintain <500 PPM defect rate. We accept occasional spikes but require rapid corrective action.

Supply Risk: We dual-source all critical items where possible. We accept up to __% of supply from single-source suppliers, with contingency plans and higher safety stock.

Geopolitical Risk: We maintain supply chain visibility to Tier 2/3 suppliers. We accept tariff and trade policy changes as normal business risk and manage through pricing and sourcing diversification.
```

---

## Output: Risk Assessment Report

Present risks clearly with:
1. **Executive summary** (top 5-10 risks and recommended actions)
2. **Risk register** (all identified risks with scores and mitigation status)
3. **Risk heat map** (visual 5×5 probability-impact matrix)
4. **Single-source analysis** (items and revenue at risk)
5. **Supply chain map** (Tier 1, Tier 2, geographic concentration)
6. **Contingency plans** (for critical risks)
7. **Early warning dashboard** (current metrics and trends)
8. **Budget & ROI** (mitigation costs and expected risk reduction)
