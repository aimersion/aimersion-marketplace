---
description: Run a Medicare compliance check on patient documentation
allowed-tools: Read, Write, Edit, WebSearch
argument-hint: [patient name or file]
---

Use the compliance-documenter skill to audit patient documentation for Medicare compliance.

1. If $ARGUMENTS reference a file, read it. Otherwise, ask the user to provide the patient's documentation details or file.

2. Check against the Medicare compliance checklist:
   - Homebound status documented and justified
   - Skilled need clearly established
   - Physician face-to-face encounter documented within required timeframe
   - Plan of care (485) signed and dated by physician
   - OASIS assessment transmitted within required timeframe
   - Visit frequency matches ordered plan of care
   - Aide supervisory visits completed per schedule

3. For each item, mark as: Compliant, Non-Compliant, or Needs Review.

4. For non-compliant items, provide specific remediation steps and deadlines.

5. Generate a compliance summary report with an overall risk assessment.

6. Save the audit results to a document.

Always note that this is a documentation guidance tool, not a substitute for a certified compliance officer.
