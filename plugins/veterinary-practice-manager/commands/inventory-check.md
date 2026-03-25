---
description: Generate an inventory status report with reorder recommendations
allowed-tools: Read, Write, Edit, Bash, WebSearch
---

Generate an inventory status report and reorder recommendations for the veterinary practice.

## Process

1. **Gather Current Inventory Data** — Ask the user for their current stock levels or connect to their ~~practice management system. Organize into categories:
   - **Vaccines** — Core (rabies, DHPP/DAPP, FVRCP) and non-core (Bordetella, Leptospirosis, Lyme, FeLV, CIV)
   - **Parasiticides** — Heartworm prevention, flea/tick products by weight class
   - **Pharmaceuticals** — Antibiotics, pain medications, anti-inflammatories, sedatives, anesthetics
   - **Controlled substances** — Track with DEA-compliant logging (ketamine, butorphanol, diazepam, hydromorphone)
   - **Surgical supplies** — Sutures, gloves, drapes, blade handles
   - **Diagnostics** — In-house test kits (SNAP tests), reference lab supplies, cytology supplies
   - **Nutrition** — Prescription diets by brand and formula
   - **Fluids and injectables** — IV fluids, injectable medications

2. **For Each Category, Report:**
   - Current quantity on hand
   - Minimum stock level (par level)
   - Average monthly usage (calculate from historical data if available)
   - Days of supply remaining
   - Items below par level (flag as URGENT)
   - Items approaching expiration within 90 days
   - Items with no movement in 90+ days (dead stock candidates)

3. **Reorder Recommendations:**
   - Priority A (order immediately): below par level
   - Priority B (order this week): within 2 weeks of par level
   - Priority C (monitor): adequate but trending down
   - Suggest order quantities based on usage patterns and lead times
   - Flag seasonal adjustments (increased flea/tick in spring/summer, increased boarding vaccines in holidays)

4. **Cost Optimization Notes:**
   - Identify opportunities for bulk ordering discounts
   - Flag products available through buying groups (GPOM, PSIvet)
   - Note manufacturer rebate programs
   - Suggest generic alternatives where appropriate
   - Calculate inventory turnover rate (target: 8-12 turns per year for pharmaceuticals)

5. **Controlled Substance Audit** — If applicable:
   - Current on-hand vs. log reconciliation
   - Usage patterns (flag any unusual spikes)
   - DEA license expiration reminder
   - State reporting requirements status

Format as a clear, actionable report the practice manager can hand directly to the person placing orders.
