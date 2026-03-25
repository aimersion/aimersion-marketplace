---
name: bid-estimator
description: >
  Estimate construction project costs and generate bid proposals. This skill should be used when the user asks to
  "estimate a project", "create a bid", "calculate material costs", "price out a job", "build an estimate",
  "bid on a project", "cost breakdown", "generate a proposal", or needs help with construction cost estimation
  for residential or commercial projects.
version: 0.1.0
---

# Bid Estimator

Generate accurate construction cost estimates and professional bid proposals for residential and commercial projects.

## Estimation Workflow

1. **Gather project scope** — Ask for project type, square footage, location, and special requirements
2. **Select estimate template** — Match to the appropriate project category (see references)
3. **Calculate material costs** — Use current regional pricing data and quantity takeoffs
4. **Calculate labor costs** — Apply trade-specific labor rates and productivity factors
5. **Add overhead and profit** — Apply standard markups for insurance, permits, overhead, and profit margin
6. **Generate deliverable** — Produce a formatted estimate document

## Project Categories

Support these project types with category-specific templates:

- **New residential construction** — single-family, multi-family, custom homes
- **Residential renovation** — kitchen, bathroom, addition, whole-house
- **Commercial tenant improvement** — office buildout, retail, restaurant
- **Commercial new construction** — warehouse, retail, office, mixed-use
- **Site work** — grading, paving, utilities, landscaping

## Estimate Structure

Every estimate must include:

- **Project header** — client name, project address, date, estimate number
- **Scope of work** — narrative description of included work
- **Cost breakdown by division** — following CSI MasterFormat divisions
- **Material quantities and unit costs**
- **Labor hours and rates by trade**
- **Equipment costs** — rental or owned
- **Subcontractor allowances** — for specialty trades
- **Overhead** — typically 10-15% (general conditions, insurance, permits, supervision)
- **Profit margin** — typically 8-15% depending on project complexity and market
- **Contingency** — 5-10% for unforeseen conditions
- **Exclusions and qualifications** — what is NOT included
- **Payment terms and schedule**

## CSI MasterFormat Divisions (Common)

Use these standard divisions for organizing line items:

- Division 01: General Requirements
- Division 02: Existing Conditions (demolition)
- Division 03: Concrete
- Division 04: Masonry
- Division 05: Metals (structural steel)
- Division 06: Wood, Plastics, Composites (framing, finish carpentry)
- Division 07: Thermal & Moisture Protection (roofing, insulation, waterproofing)
- Division 08: Openings (doors, windows)
- Division 09: Finishes (drywall, paint, flooring, tile)
- Division 10: Specialties
- Division 22: Plumbing
- Division 23: HVAC
- Division 26: Electrical
- Division 31: Earthwork
- Division 32: Exterior Improvements

## Pricing Guidelines

When the user does not have specific pricing:

- Ask for the project's geographic region to adjust for local labor rates
- Use conservative mid-range material pricing
- Apply standard productivity rates (adjust for project complexity)
- Flag any assumptions clearly so the user can override with actual quotes

## Output Formats

- **Detailed estimate** — full line-item breakdown as a spreadsheet (.xlsx)
- **Bid proposal** — professional client-facing document (.docx or .pdf)
- **Quick budget** — high-level cost range for preliminary planning

## Additional Resources

Read `references/estimate-templates.md` for detailed templates by project type with typical cost ranges and line items.
