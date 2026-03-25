---
description: Inventory health dashboard — stock levels, alerts, and reorder recommendations
allowed-tools: Read, Write, Bash, WebSearch, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_search, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_fetch, mcp__fa8e9f3c-3328-4059-a272-c7a9b1f268e0__gmail_search_messages
---

Generate a comprehensive inventory health dashboard.

## Steps

1. **Gather inventory data**:
   - Check if the user has previously shared inventory data
   - Search Google Drive for inventory spreadsheets
   - Search email for recent supplier invoices or order confirmations
   - Ask the user for current stock levels if not available from other sources

2. **Run ABC analysis** using the inventory-tracker skill:
   - Classify all products into A, B, and C categories
   - Calculate revenue contribution for each category

3. **Calculate health metrics** for each product:
   - Days of supply remaining
   - Stock status (critical, low, healthy, overstocked, dead)
   - Turnover rate
   - Carrying cost estimate

4. **Generate reorder alerts** using the reorder-planner skill:
   - Flag items below reorder point
   - Flag items approaching reorder point
   - Calculate recommended order quantities

5. **Present the dashboard** with clear action items

## Output Format

```
📦 INVENTORY HEALTH DASHBOARD — [Date]

## Overall Score: [A/B/C/D/F]
Total SKUs: [X] | Total Value: $[X]

🔴 CRITICAL ([X] items) — Reorder Now
[Table of items below reorder point]

🟠 LOW ([X] items) — Reorder Soon
[Table of items approaching reorder point]

🟢 HEALTHY ([X] items)
[Summary]

🟡 OVERSTOCKED ([X] items) — Worth $[X] in excess
[Table of overstocked items with markdown recommendations]

⚫ DEAD STOCK ([X] items) — $[X] tied up
[Table of items with zero sales in 90+ days]

📊 ABC SUMMARY
A Items: [X] SKUs → [X]% of revenue
B Items: [X] SKUs → [X]% of revenue
C Items: [X] SKUs → [X]% of revenue

✅ ACTION ITEMS
1. [Most urgent reorder]
2. [Second priority]
3. [Overstock/dead stock action]
```
