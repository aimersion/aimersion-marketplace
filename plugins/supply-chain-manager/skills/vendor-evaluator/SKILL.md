---
name: vendor-evaluator
version: 0.1.0
description: This skill should be used when the user asks to 'evaluate a supplier', 'score a vendor', 'create an RFP', 'RFQ template', 'supplier scorecard', 'vendor selection', 'negotiate with a supplier', 'qualify a new vendor', 'supplier audit', or needs help with procurement sourcing decisions.
---

# Vendor Evaluator Skill

Vendor management is a critical supply chain function. This skill guides you through supplier segmentation, evaluation, selection, and negotiation to build a high-performing supplier base.

## Supplier Segmentation: The Kraljic Matrix

Not all suppliers deserve equal management attention. Use the Kraljic Matrix to segment suppliers by two dimensions: spend volume and supply risk.

**Strategic Suppliers (High Spend, High Risk)**
- Examples: specialized component manufacturers, sole-source materials
- Management approach: Long-term partnerships, dedicated relationship managers, joint improvement initiatives
- Spend focus: Total cost of ownership optimization, develop backup sources
- Risk mitigation: Safety stock, inventory buffers, long-term contracts with security clauses

**Leverage Suppliers (High Spend, Low Risk)**
- Examples: standard materials with multiple sources, commodity suppliers
- Management approach: Competitive bidding, volume-based negotiations, price benchmarking
- Spend focus: Aggressive negotiation, consolidation across business units, supplier cost reduction programs
- Risk mitigation: Preferred vendor lists, spot market monitoring

**Bottleneck Suppliers (Low Spend, High Risk)**
- Examples: niche specialists, single-source items with long lead times
- Management approach: Supplier development, qualify alternatives proactively
- Spend focus: Relationship focus over price, develop technical partnerships
- Risk mitigation: Contingency inventory, long-term agreements with penalty clauses

**Non-Critical Suppliers (Low Spend, Low Risk)**
- Examples: standard parts, widely available materials, MRO supplies
- Management approach: Efficient procurement, minimal admin overhead, catalog-based purchasing
- Spend focus: Process automation, tail spend consolidation
- Risk mitigation: Broad supplier base, low inventory levels acceptable

## Supplier Scorecard Framework

A comprehensive supplier scorecard combines quantitative data and qualitative assessment across five dimensions.

### Scoring Categories and Weights

**Quality (25%)**
- Defect rate (PPM or %). Target: <500 PPM for high-value components, <50 PPM for safety-critical
- First-pass yield (%). Captures manufacturing efficiency and process control
- Corrective action responsiveness. Time to respond to quality escapes, effectiveness of containment, prevention of recurrence
- Scoring: 1=poor quality, recurring issues; 3=meets minimum requirements; 5=best-in-class, continuous improvement culture

**Delivery (25%)**
- On-time delivery rate (%). Target: >98% of shipments within promised window
- Lead time reliability. Variance from quoted lead time. Measure: std dev of actual vs. promised
- Supply chain agility. Ability to accelerate delivery or handle volume swings
- Scoring: 1=chronic delays, frequent expedites needed; 3=acceptable, occasional expedites; 5=reliable partner, accommodates surge demand

**Cost (20%)**
- Price competitiveness. Compare to market benchmarks, should-cost models, and competitive quotes
- Total cost of ownership. Include freight, quality costs (rework, warranty), inventory carrying, obsolescence
- Cost reduction participation. Proactive price reductions, VA/VE ideas, continuous improvement savings
- Scoring: 1=prices above market, no cost improvement; 3=market-competitive pricing; 5=total cost leader, sustained cost reduction track record

**Service (15%)**
- Responsiveness. Time to answer inquiries, resolve issues, accommodate special requests
- Communication quality. Proactive notifications of delays, design changes, capacity constraints. Regular business reviews
- Issue resolution effectiveness. Root cause analysis, corrective action follow-through
- Scoring: 1=difficult to reach, reactive; 3=responsive, communicates adequately; 5=proactive partner, excellent account management

**Financial Stability (10%)**
- Credit rating or D&B score. 1=near default risk, 3=stable, 5=excellent
- Years in business and customer base stability. New entrants higher risk
- Debt/equity ratio and working capital trends
- Scoring: 1=high bankruptcy risk, customer concentration; 3=stable business; 5=strong financials, diversified customer base

**Innovation & Sustainability (5%)**
- R&D investment and technology roadmap alignment with your product roadmap
- ESG practices: environmental compliance, labor practices, governance, carbon reduction initiatives
- Intellectual property and process improvements
- Scoring: 1=no innovation, poor ESG; 3=meets compliance requirements; 5=innovation partner, ESG leader

### Scoring Methodology

1. Collect data for each sub-metric within each category
2. Score each sub-metric on a 1-5 scale based on rubric
3. Calculate category average (simple average of sub-metrics)
4. Apply weights: Category Score × Weight
5. Sum weighted scores across all categories to get Overall Score (0-100)

**Supplier Tier Classification:**
- Preferred: 80-100 (strategic partners, expand business)
- Approved: 60-79 (retain, managed procurement)
- Conditional: 40-59 (improvement plan required, limited use)
- Disqualified: 0-39 (exit plan or immediate improvement required)

## Request for Proposal (RFP) Structure

An RFP ensures suppliers understand your requirements and can be fairly compared. RFP sections:

**1. Business Overview & Scope**
- Your company, business division, product/service category
- Statement of work: what you're sourcing, volumes, timelines, success criteria
- Strategic direction and long-term vision

**2. Technical Specifications**
- Detailed specifications for product/service: dimensions, materials, performance specs, compliance requirements (UL, FDA, ISO, etc.)
- Quality standards: acceptable defect rate, inspection methods, certification requirements
- Sample requirements or testing protocols
- Design/engineering expectations: innovation, value engineering, design for manufacturability

**3. Commercial Requirements**
- Unit pricing and volume breakpoints
- Payment terms and conditions
- Pricing validity period and escalation clauses
- Currency (if international)
- Total contract value and volume projections

**4. Terms & Conditions**
- Intellectual property ownership and licensing
- Confidentiality and NDA requirements
- Liability and warranty terms
- Force majeure and business continuity expectations
- Sustainability and social responsibility requirements
- Financial stability and audit rights
- Technology requirements (EDI, forecasting systems, quality data sharing)

**5. Evaluation Criteria**
- Scoring rubric: weight each evaluation factor (Price 30%, Quality 30%, Delivery 20%, Service/Innovation 20%)
- How you'll score technical compliance, references, financial stability
- Timeline for evaluation

**6. Submission Requirements**
- RFP response format and completeness checklist
- Due date and time
- Submission method and contact
- Required documentation: references, financial statements, certifications, quality data, capacity/capability statement

**7. Timeline**
- RFP release date
- Deadline for questions
- Anticipated award date
- Expected contract start date

## RFQ vs. RFP vs. RFI: When to Use Each

**RFI (Request for Information)**: Market research phase
- When: evaluating capability and interest before formal procurement
- Used for: new categories, multiple supplier evaluation, market assessment
- Response depth: proposal level detail not required
- Typical volume: 10-20 suppliers

**RFQ (Request for Quote)**: Simple, tactical procurement
- When: procuring standard, well-defined items with established specifications
- Used for: repeat purchases, commodity items, straightforward sourcing
- Focus: Price and availability
- Typical volume: 3-5 suppliers

**RFP (Request for Proposal)**: Strategic, complex sourcing
- When: significant spend, new product launches, strategic partnerships, complex requirements
- Used for: engineering services, systems/solutions, long-term contracts, custom products
- Focus: Comprehensive evaluation of capability, quality, cost, service, innovation
- Typical volume: 5-10 suppliers

## Negotiation Preparation

Negotiation power comes from preparation. Structure your approach:

### BATNA (Best Alternative to Negotiated Agreement)
- Define your walk-away position: If negotiation fails, what's your alternative?
  - Example: Switch to alternate supplier, make internally, substitute material
  - Strengthen your BATNA: Line up backup sources, build dual qualification
- If your BATNA is weak, your negotiating position is weak

### Pricing Breakdown & Should-Cost Modeling
- Decompose supplier's quote into cost elements:
  - Raw material cost (benchmark against commodity prices or supplier cost data)
  - Direct labor (benchmark hourly rates by geography and skill level)
  - Manufacturing overhead (typically 50-100% of direct labor)
  - SG&A (typically 10-15% of COGS)
  - Profit margin (typically 5-15% depending on complexity)
- Compare to market benchmarks and your should-cost estimate
- Identify where supplier's cost differs from should-cost and why

### Negotiation Position Spreadsheet

For each negotiation item, establish three positions:

| Item | Opening Position | Target Position | Walk-Away Position |
|------|-----------------|-----------------|-------------------|
| Unit Price | Supplier's quote | Your should-cost + 8% | Supplier's quote - 5% |
| Lead Time | Supplier's quoted | Your need | Supplier's standard + buffer |
| Payment Terms | Net 30 (supplier request) | Net 45 (mutual benefit) | Net 60 (supplier request) |
| Defect Rate | <500 PPM | <200 PPM | <1000 PPM |
| Volume Commitment | No commitment | 1-year forecast | Rolling 3-month visibility |

### Negotiation Tactics

- **Volume leverage**: Consolidate purchases across business units to increase supplier's revenue at risk
- **Multi-year commitments**: Lock in pricing for 2-3 years, offer price increases in year 2-3 in exchange for deeper year-1 cuts
- **Total cost focus**: Move discussion away from unit price to total cost of ownership (include quality, delivery, inventory)
- **Competitive pressure**: Transparent that you have alternatives; share RFQ results (anonymized) to show market pricing
- **Bundling**: Trade concessions; accept higher lead time for lower price, accept lower volume for better terms
- **Relationship**: Emphasize long-term partnership potential to earn consideration for better terms

## Supplier Qualification Process

A structured qualification ensures consistent, high-quality supplier onboarding.

### Audit Types

**Self-Assessment**: Supplier completes questionnaire on capabilities, quality systems, capacity, certifications
- Cost: Low
- Risk: Accuracy depends on supplier honesty
- Timeline: 2-4 weeks

**Desk Audit**: Review of documentation without on-site visit
- Documents reviewed: ISO/quality certifications, financial statements, customer references, org charts, equipment lists
- Cost: Low
- Risk: Limited visibility into actual practices
- Timeline: 3-6 weeks

**On-Site Audit**: Physical inspection of facilities, processes, quality systems
- Assess: Equipment capability, process controls, quality documentation, training records, inventory management, EHS practices
- Cost: Higher (travel, time)
- Risk: Comprehensive assessment
- Timeline: 4-12 weeks

### Qualification Decision Criteria

- Minimum requirements: ISO 9001 certification, acceptable financial health, adequate capacity, relevant experience
- Capability match: Equipment, processes, and expertise aligned with product requirements
- Quality system maturity: Documented procedures, statistical process control (SPC), preventive maintenance
- Capacity: Sufficient to meet your volume without exhausting supplier's total capacity
- References: Contact existing customers for quality, delivery, and service feedback
- Strategic fit: Supplier's growth plans, technology investments, geographic location

### Approved Vendor List (AVL) Management

- **Tier 1 (Preferred)**: Recommended for new sourcing, proven capability and performance
- **Tier 2 (Approved)**: Acceptable for use, may have some limitations or conditional approvals
- **Tier 3 (Conditional)**: Limited use, improvement plan in place, re-qualification required
- **Tier 4 (Inactive/Disqualified)**: Do not use, removed from active sourcing
- Review status annually; update based on performance scorecard data and audit results

## Output Formats

### Supplier Scorecard Table
```
Supplier: ABC Manufacturing | Category: Precision Components | Spend: $2.3M

| Dimension | Sub-Metric | Score | Weight | Weighted |
|-----------|-----------|-------|--------|----------|
| Quality | Defect Rate (PPM) | 4 | 40% | 1.6 |
| Quality | First-Pass Yield | 3 | 30% | 0.9 |
| Quality | CAPA Responsiveness | 4 | 30% | 1.2 |
| Quality Category Average | | | 25% | 3.7 |
| Delivery | On-Time % | 3 | 50% | 1.5 |
| Delivery | Lead Time Reliability | 4 | 50% | 2.0 |
| Delivery Category Average | | | 25% | 8.75 |
| [Continue for Cost, Service, Financial Stability, Innovation] |
| OVERALL SUPPLIER SCORE | | | 100% | 78 |

Tier Classification: APPROVED (60-79)

Top Strengths:
1. Lead time reliability - supplier consistently meets quoted lead times
2. On-time delivery - 97.5% on-time, excellent logistics coordination
3. Responsive account management - quick issue resolution, proactive communication

Top Improvement Areas:
1. Quality: defect rate trending up, needs root cause analysis
2. Cost: pricing 8% above market benchmarks for comparable specs
3. Innovation: limited involvement in design engineering and VA/VE

Development Plan:
- Quality: Joint problem-solving workshop on defect root causes; implement SPC on critical processes
- Cost: Supplier cost reduction program; benchmark material costs, labor productivity
- Innovation: Include in new product design reviews; support engineering capability development
```

### RFP Template
See references document for comprehensive RFP template with all sections and guidelines.

### Negotiation Brief
```
Supplier: ABC Manufacturing
Category: Precision Components
Negotiation Date: [Date]
Negotiation Team Lead: [Lead]; Team: [Members]

Negotiation Items & Positions:
[Table as shown above]

Key Message:
"We value ABC Manufacturing as a strategic partner and see significant growth potential.
To lock in a multi-year agreement, we need to close the cost gap to market rates, improve
defect rates to <200 PPM, and accelerate lead time from 10 to 8 weeks."

Supporting Data:
- Should-cost model shows competitive pricing at $X (vs. quote of $Y)
- Market benchmarks: 5 comparable suppliers quote $X ± 5%
- Quality benchmark: industry average <250 PPM for this component
- Our capacity: growth from 50K to 150K units over 3 years

BATNA:
- Backup supplier (XYZ Corp) quoted $X and <250 PPM, but +2 week lead time
- Internal make option available at $X but requires $500K capex investment
- Recommend: Lock in ABC if they hit targets, proceed with XYZ qualification in parallel

Concessions We Can Offer:
- Volume commitment: 1-year forecast + rolling 3-month visibility (supplier requested)
- Payment terms: Net 45 (vs. our preferred Net 30) if targets are met
- Multi-year: 3-year agreement with modest price increases years 2-3
- Business review: Quarterly joint reviews + quarterly cost reduction initiatives

Walk-Away Thresholds:
- Maximum unit price: $X (8% above should-cost)
- Minimum on-time delivery: 95%
- Maximum lead time: 12 weeks
```
