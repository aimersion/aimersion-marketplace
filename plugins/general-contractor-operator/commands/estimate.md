---
description: Generate a construction cost estimate for a project
argument-hint: [project-type-or-description]
allowed-tools: Read, Write, Edit, Bash
---

Generate a construction cost estimate for: $ARGUMENTS

Follow these steps:

1. Read the bid-estimator skill for estimation methodology and reference templates
2. Ask clarifying questions if not provided: project type, square footage, location/region, quality level, any special requirements
3. Select the appropriate estimate template from the references
4. Build a detailed line-item estimate organized by CSI MasterFormat divisions
5. Calculate subtotals for material, labor, equipment, and subcontractor costs
6. Apply standard markups: overhead, profit, insurance, permits, contingency
7. Generate two deliverables:
   - A detailed estimate spreadsheet (.xlsx) with all line items
   - A professional bid proposal summary document

Present the total estimate range and key assumptions to the user before generating files.
