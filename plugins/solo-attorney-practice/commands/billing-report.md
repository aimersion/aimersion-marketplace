---
description: Generate a billing summary or invoice
allowed-tools: [Read, Write, Edit, Bash]
---

# Generate Billing Report or Invoice

Your task: Create a professional billing statement or invoice for a client based on the user's matter details and time entries.

**Step 1: Collect billing information**
Ask the user for:
- Client name and matter name
- Invoice date and due date
- Date range for billing period (start and end dates)
- Billing type: hourly, flat fee, retainer + overage, contingency, or mixed
- Attorney name and bar number (for signature line)
- Firm name, address, phone, email for letterhead
- Any firm letterhead/logo file (optional)

**Step 2: Gather work entries**
For hourly billing, ask:
- Time entries (date, attorney/staff, hours, description, billing code if applicable)
- Hourly rates for different fee earners
- Any non-billable time to exclude
- Retainer amount applied (if applicable)

For flat or fixed fees, ask:
- Agreement details (what's included in flat fee)
- Any additional costs/expenses
- Payment schedule

**Step 3: Calculate and format**
- Sum all billable hours and calculate total time charge
- Organize work by date or by task/matter phase
- Add itemized expenses with detail and date
- Calculate subtotal
- Apply retainer credit if applicable
- Add trust account balance (if maintaining trust account)
- Calculate total due
- Include payment terms and methods

**Step 4: Create professional invoice**
Use a clean format with:
- Firm letterhead (or placeholder for [FIRM LETTERHEAD])
- Invoice title and number
- Invoice date, due date, period covered
- "Bill To:" section with client info
- Detailed line items with date, description, hours, rate, amount
- Subtotal, less retainer, less payments received, balance due
- Payment instructions (check, ACH, credit card, etc.)
- 1099 threshold notice if applicable ($600+)
- Firm signature line

**Step 5: Save and offer options**
- Save as markdown and offer to export as PDF, Word, or Google Docs
- Provide filename: `invoice-[clientname]-[daterange].md`
- Offer email-ready version with subject line
- Option to save as a template for future invoicing

Include notes on:
- Trust account compliance (all funds held in trust per ethics rules)
- Unbilled time warning (if significant work done this period)
- Late payment interest terms (if firm policy permits under state rules)
- Collection rights statement
