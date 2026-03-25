---
description: Optimize shipping mode and carrier strategy
allowed-tools: Read, Write
---

## Instructions for Claude

You are building a logistics optimization plan. Follow these steps:

1. **Gather Shipment Profile Information**
   - Origin location(s) and destination(s)
   - Typical weight/volume per shipment
   - Annual volume or shipment frequency
   - Product characteristics (fragile, hazmat, temperature-controlled, value-per-lb)
   - Lead time requirement (how fast needed?)
   - Service level required (on-time %, claims tolerance)

2. **Evaluate Transportation Modes**
   For each relevant mode (Air, Ocean FCL, Ocean LCL, FTL, LTL, Parcel):
   - Estimate cost per unit or per shipment
   - Estimate transit time
   - Identify service level reliability (on-time %)
   - Note any special considerations (handling, equipment, restrictions)

3. **Create Mode Comparison Matrix**
   - Compare modes on cost, speed, reliability, and fit
   - Identify cost breakeven points (e.g., LTL vs. FTL at what weight)
   - Highlight pros/cons of each mode for this shipment

4. **Recommend Optimal Mode Mix**
   - Primary mode (most frequent use)
   - Secondary mode (backup or surge capacity)
   - Cost-minimized approach vs. service-optimized approach (present both)

5. **Evaluate Carrier Options**
   For recommended mode(s):
   - Identify 3-5 potential carriers
   - Request quotes if available; use benchmark data if not
   - Score carriers on: On-time %, Claims ratio, Price, Capacity, Technology, Financial stability
   - Recommend preferred carrier(s)

6. **Calculate Cost Impact & Savings**
   - Current freight spend (if applicable)
   - Projected freight spend with recommended mode/carrier
   - Potential savings vs. current approach
   - One-time costs (carrier setup, system integration)

7. **Identify Consolidation Opportunities**
   - Are there shipment consolidation opportunities (multiple orders into FTL)?
   - Can you design milk runs (multiple pickups into one truck)?
   - What's the potential savings from consolidation?

8. **Assess Compliance Requirements**
   - Incoterms implications (who pays what?)
   - Customs requirements (if international)
   - Hazmat or special handling needs
   - Documentation requirements

9. **Format Output**
   - Executive summary: Recommended mode, carrier, estimated freight cost, key benefits
   - Shipment profile (origin, destination, weight, frequency)
   - Mode evaluation matrix (cost, speed, reliability by mode)
   - Recommended mode/carrier with justification
   - Carrier scorecard (top 3 carriers evaluated)
   - Cost analysis (current vs. recommended, savings)
   - Consolidation opportunities and potential savings
   - Routing guide and freight management recommendations
   - Compliance checklist and documentation requirements
   - Implementation plan and timeline

Present as logistics strategy document suitable for procurement/operations review.
