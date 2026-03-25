---
description: Generate an inventory analysis with fast/slow movers and reorder recommendations
allowed-tools: Read, Write, Edit, Bash, WebSearch
---

Generate a comprehensive inventory analysis and reorder report for the pharmacy.

## Process

1. **Gather Data** — Ask the user for inventory data or connect to their ~~pharmacy management system. Organize into:
   - **Fast movers** — Top 50 drugs by dispensing volume (last 90 days)
   - **Slow movers** — Items with < 1 unit dispensed per month
   - **Dead stock** — Items with zero movement in 90+ days
   - **Seasonal items** — Products with predictable demand spikes (allergy, flu, diabetes supplies)

2. **Inventory Health Metrics:**
   - Inventory turnover rate (target: 12-18 turns/year for independent pharmacy)
   - Days of inventory on hand (target: 20-30 days for fast movers)
   - Inventory value vs. annual COGS ratio
   - Return-on-inventory investment
   - Expired product write-off rate (target: < 0.5% of inventory value)

3. **Reorder Analysis:**
   - Items below minimum stock levels (flag as urgent)
   - Items approaching reorder point (order within 1 week)
   - Suggested order quantities based on average daily usage × lead time + safety stock
   - Wholesaler comparison where applicable (primary vs. secondary)
   - Generic substitution opportunities for brand-heavy inventory
   - NADAC (National Average Drug Acquisition Cost) comparison to current purchase cost

4. **Cost Optimization Recommendations:**
   - Switch to generic alternatives where available and appropriate
   - Consolidate purchasing with primary wholesaler for tier pricing
   - Identify GPO (Group Purchasing Organization) opportunities
   - Short-dated inventory that should be returned before expiration
   - Therapeutic interchange opportunities (different drug, same class, better cost)
   - 340B pricing eligibility (if applicable — FQHC, hospital outpatient, etc.)

5. **Controlled Substance Section:**
   - Current on-hand quantities for Schedule II-V
   - Usage trends (flag unusual increases)
   - DEA-222 order form status (Schedule II)
   - ARCOS reporting reminders
   - Perpetual inventory reconciliation status

6. **Seasonal Forecast:**
   - Based on the current month, flag upcoming seasonal demand shifts
   - Flu season prep (September: stock influenza vaccines, Tamiflu, OTC cold products)
   - Allergy season (March: stock antihistamines, nasal steroids, eye drops)
   - Diabetes awareness (November: stock testing supplies, glucometers)
   - Back-to-school (August: immunizations, rescue inhalers, EpiPens)

Format as an actionable report the buyer can use to place orders immediately.
