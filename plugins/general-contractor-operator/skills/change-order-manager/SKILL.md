---
name: change-order-manager
description: >
  Track construction scope changes, calculate cost and schedule impact, and draft professional change orders.
  This skill should be used when the user asks to "create a change order", "track a scope change",
  "price a change", "calculate change order cost", "document a change", "scope creep",
  "client wants to add", "owner-requested change", or needs help managing construction project
  scope modifications and their financial and schedule impacts.
version: 0.1.0
---

# Change Order Manager

Track, price, and document construction project scope changes with professional change order documents.

## Change Order Workflow

1. **Document the change** — Describe what changed and why (owner request, field condition, design error, code requirement)
2. **Categorize the change** — Owner-initiated, contractor-initiated, unforeseen condition, design clarification
3. **Calculate cost impact** — Material, labor, equipment, subcontractor, markup
4. **Calculate schedule impact** — Additional days, critical path effect
5. **Draft the change order** — Professional document for client approval
6. **Track approval status** — Pending, approved, rejected, revised

## Change Order Types

- **Owner-Requested Change (ORC)** — Client wants something different or additional
- **Construction Change Directive (CCD)** — Directed change, pricing TBD
- **Field Order** — Minor change handled in the field, typically under a threshold amount
- **Unforeseen Condition** — Hidden conditions discovered during construction
- **Design Error/Omission** — Architect or engineer drawing issue
- **Code-Required Change** — Inspector-mandated modification

## Cost Calculation Method

### Direct Costs
- **Material** — quantity x unit cost, including waste factor and sales tax
- **Labor** — hours x rate, including burden (taxes, insurance, benefits = typically 30-45% of base rate)
- **Equipment** — rental rates or ownership costs for additional equipment time
- **Subcontractor** — sub's quoted price for the changed work

### Markups (apply to direct costs)
- **Overhead** — 10-15% (covers project management, supervision, admin)
- **Profit** — 10-15%
- **Bond premium increase** — if bonded, typically 1-2% of change amount

### Credit Changes
When removing scope, calculate credit using the same method but:
- Markup on credits is typically reduced (5-10% OH&P, not full markup)
- Note: labor already mobilized may not be fully creditable

## Change Order Document Contents

Every change order must include:

- **CO Number** — sequential numbering (CO-001, CO-002, etc.)
- **Date** — date of submission
- **Project name and number**
- **Description of change** — detailed narrative of what changed
- **Reason for change** — categorized (owner request, field condition, etc.)
- **Cost breakdown** — itemized direct costs plus markups
- **Schedule impact** — additional calendar days, effect on completion date
- **Revised contract amount** — original + all approved COs + this CO
- **Signature lines** — contractor and owner/owner's representative

## Schedule Impact Assessment

For each change, evaluate:

- Is the changed work on the critical path?
- Does it affect predecessor/successor relationships?
- Does it require re-sequencing other trades?
- Are there long-lead material implications?
- Impact in calendar days (not just work days)

## Change Order Log

Maintain a running log tracking:

| CO # | Date | Description | Category | Cost | Schedule Days | Status | Revised Contract |
|------|------|-------------|----------|------|---------------|--------|-----------------|

## Best Practices

- Document every change immediately, no matter how small
- Get written approval BEFORE performing changed work when possible
- Photograph existing conditions before changes
- Reference original contract scope to justify pricing
- Include "time is of the essence" language for schedule impacts
- Track cumulative contract value and schedule changes

## Output Formats

- **Change order document** — formal CO for client signature (.docx or .pdf)
- **Change order log** — running spreadsheet of all changes (.xlsx)
- **Cost impact summary** — quick pricing for verbal discussion
