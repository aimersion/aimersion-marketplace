---
description: Explain a treatment plan in patient-friendly language
allowed-tools: Read, Write, Edit
argument-hint: [condition or treatment details]
---

Use the care-plan-communicator skill to translate a chiropractic treatment plan into clear, patient-friendly communication.

1. Ask the user for:
   - The patient's primary complaint and diagnosis
   - Recommended visit frequency and duration (phases of care)
   - Key examination findings
   - Any home care or co-therapies
   - Known patient concerns or objections

2. Use the CARE framework (Condition, Action, Results, Evidence) to structure the explanation.

3. Generate the requested output format(s). If the user doesn't specify, produce:
   - A one-page take-home handout summarizing the care plan
   - An email version the patient can reference later
   - A brief report-of-findings talking script for the doctor

4. Include prepared responses for common objections ("Why so many visits?", "How long until I'm better?").

5. Save deliverables to files. Use plain, empathetic language throughout — no clinical jargon unless paired with a simple explanation.

If $ARGUMENTS are provided, treat them as the condition or treatment details to work from.
