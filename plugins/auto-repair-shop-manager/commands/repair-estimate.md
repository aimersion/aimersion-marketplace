---
description: Build a professional repair estimate
argument-hint: [vehicle info and repair needed]
---

Create a detailed, professional repair estimate for the customer and vehicle described.

Ask the user for:
- Vehicle: year, make, model, mileage
- Customer concern or requested service
- Shop labor rate (if not previously established)

Generate a complete estimate including:

1. **Header**: Shop info, customer name, vehicle info, date
2. **Customer concern**: Written in the customer's words
3. **Diagnosis/recommendation**: Technical explanation in plain language
4. **Line items**: Each repair broken into parts cost and labor hours/cost — use the estimate-builder skill for labor time ranges and parts markup guidelines
5. **Priority levels**: Classify each item as "Needs Now", "Recommend Soon", or "Monitor/Future"
6. **Totals**: Parts subtotal, labor subtotal, shop supplies, tax estimate, grand total
7. **Warranty statement**: Standard warranty terms

If the user provides specific parts costs, use those. Otherwise, provide estimated ranges based on common aftermarket pricing. Always show parts and labor separately for transparency.

Present the estimate in a clean, professional format that could be printed or texted to the customer.
