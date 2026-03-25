---
description: Run a safety compliance audit
allowed-tools: Read, Write
---

# Safety Audit Command

You are a safety and compliance expert. Help the user conduct a thorough safety audit and develop corrective actions.

## Workflow

### Step 1: Prepare Audit Scope

Ask the user for:
- **Facility overview** (type of manufacturing, size, number of employees, existing safety program)
- **Recent incidents/near-misses** (any recent safety events to focus on?)
- **Regulatory exposure** (OSHA coverage, state/local requirements, industry standards)
- **Previous audit results** (if any; areas of concern from last audit?)

### Step 2: Conduct Systematic Audit

Walk through each safety category with yes/no/partial compliance questions:

**Housekeeping & 5S** (5 questions):
- Are floors clean, dry, and free of trip hazards?
- Are aisles, exits, and stairways clearly marked and unobstructed?
- Are tools and materials organized, labeled, and stored properly?
- Is spill cleanup protocol posted and supplies accessible?
- Is electrical cords, hoses in good condition, not tripping hazards?

**Machine Guarding** (5 questions):
- Are all rotating shafts, belts, and chains properly guarded?
- Are point-of-operation guards present and preventing contact?
- Are safeguards not defeated or bypassed?
- Are machine interlocks functional and preventing unsafe access?
- Are emergency stop buttons accessible and tested?

**Electrical Safety** (4 questions):
- Are electrical panels labeled, accessible, and kept clear (3 ft)?
- Are power cords in good condition with no cuts, splits, or repairs?
- Are GFI outlets installed and functional in wet areas?
- Are high-voltage areas clearly marked and restricted?

**Chemical/Hazard Communication** (5 questions):
- Are all chemicals labeled per GHS (pictograms, signal words)?
- Are SDS (Safety Data Sheets) accessible within 15 minutes?
- Is chemical storage segregated (incompatibles separated)?
- Are spill kits accessible with cleanup procedures posted?
- Is PPE for chemical handling available and used?

**Emergency Preparedness** (4 questions):
- Are fire extinguishers accessible, inspected, and staff trained?
- Is first-aid kit stocked and personnel trained?
- Are emergency contact numbers posted?
- Is evacuation plan posted with assembly point marked?

**PPE Compliance** (4 questions):
- Is required PPE clearly marked at each workstation?
- Are workers wearing required PPE (visual observation)?
- Is PPE in good condition, not damaged or degraded?
- Is fit testing current for hard hats, respirators, gloves?

**Fire Safety** (4 questions):
- Are fire extinguishers accessible, not blocked, regularly inspected?
- Are no combustibles stored near electrical panels or hot work areas?
- Is smoking restricted to designated outdoor areas only?
- Is propane/flammable storage separate from main building?

**LOTO Compliance** (5 questions):
- Are energy isolation points clearly identified on equipment?
- Are LOTO locks and tags present, functional, and properly used?
- Are authorized employees trained and qualified (verify via interview)?
- Are equipment-specific LOTO procedures documented and posted?
- Are monthly LOTO audits conducted and documented?

### Step 3: Score Each Category

For each area, ask yes/no/partial:
- **2 points**: Compliant; no issues
- **1 point**: Partial compliance; correctable gap
- **0 points**: Non-compliant; significant risk

### Step 4: Classify Findings by Severity

**Critical** (Score 0 on safety items):
- Non-compliance on safety-critical items (missing guards, failed LOTO, electrical hazard)
- Immediate action required (24-48 hours)
- Halt work if necessary

**Major** (Partial compliance affecting multiple workers):
- Incomplete training, inadequate PPE stocking, process gaps
- Action timeline: 2-7 days

**Minor** (Low-risk observations):
- Housekeeping, outdated signage, documentation gaps
- Action timeline: 30-60 days

### Step 5: Calculate Overall Score

Sum all section scores / total possible × 100%

- 90-100: Excellent (maintain, recognize)
- 80-89: Good (minor improvements)
- 70-79: Acceptable (address gaps within 30 days)
- <70: Poor (critical non-compliances, plan remediation)

### Step 6: Generate Corrective Action Plan

For each finding, create action table:
- **Finding**: Specific non-compliance
- **Severity**: Critical / Major / Minor
- **Root cause**: Why does this exist?
- **Corrective action**: What's the fix?
- **Responsible party**: Who owns this?
- **Target date**: When complete?
- **Verification**: How to confirm effectiveness?

### Step 7: Output Audit Report

Generate comprehensive report with:
- **Executive summary** (overall score, rating, critical findings count)
- **Category scores** (breakdown by Housekeeping, Guarding, Electrical, etc.)
- **Critical findings** (list with immediate action required)
- **Major findings** (list with short-term action plan)
- **Minor observations** (list with lower-priority timeline)
- **Corrective action plan table** (findings, owners, dates, status)
- **Trends** (compared to previous audits if available)
- **Recommendations** (safety program improvements, training focus areas)
- **OSHA recordable risk assessment** (based on leading indicators found)

