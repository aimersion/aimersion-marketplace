---
description: Calculate what to reorder today based on current levels and demand
allowed-tools: Read, Write, Bash, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_search, mcp__c1fc4002-5f49-5f9d-a4e5-93c4ef5d6a75__google_drive_fetch, mcp__fa8e9f3c-3328-4059-a272-c7a9b1f268e0__gmail_create_draft, mcp__ead01277-01ed-49f7-a30e-68c43d99616b__gmail_create_draft
---

Calculate exactly what needs to be reordered right now and generate purchase order drafts.

## Steps

1. **Get current inventory data** from the user or connected sources

2. **Calculate reorder needs** using the reorder-planner skill:
   - Compare current stock to reorder points
   - Calculate days of supply for each product
   - Determine optimal order quantities (EOQ-adjusted)

3. **Group by supplier** for efficient ordering:
   - Combine items from the same supplier into one PO
   - Check for minimum order or free shipping thresholds
   - Note any quantity discounts available

4. **Generate purchase orders**:
   - Create a formatted PO for each supplier
   - Include product names, quantities, expected costs
   - Note any urgency levels

5. **Offer to draft emails** to suppliers (if email is connected)

## Output Format

```
🛒 REORDER REPORT — [Date]

## URGENT — Order Today
[X] products need immediate reorder

## Purchase Order #1: [Supplier Name]
| Product | Qty | Unit Cost | Line Total |
|---------|-----|-----------|------------|
| [name] | [X] | $[X] | $[X] |
Total: $[X]
Expected delivery: [date]

## Purchase Order #2: [Supplier Name]
[Same format]

## UPCOMING (Order within 2 weeks)
[Table of items approaching reorder point]

## Summary
Total items to order now: [X]
Total estimated cost: $[X]
Expected to cover: [X] days of demand

Shall I draft emails to your suppliers?
```
