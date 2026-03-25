---
description: Draft a care update for a patient's family
allowed-tools: Read, Write, Edit
argument-hint: [patient name or context]
---

Use the patient-family-communicator skill to create a care update for a patient's family.

1. Ask the user for:
   - Patient name and relationship of the recipient
   - Current status summary (how the patient is doing)
   - Any changes to the care plan, schedule, or caregiver assignments
   - Milestones achieved or goals being worked on
   - Anything the family needs to know or do

2. Generate the communication in the user's preferred format:
   - Email update (default)
   - Text message (brief version)
   - Formal progress report (for family meetings or discharge planning)

3. Use plain language (8th-grade reading level), lead with the most important information, and include a clear next step or contact for questions.

4. Include a HIPAA reminder about verifying authorization for the recipient.

5. Save the communication to a document or display it for the user to send.

If $ARGUMENTS include context, use it to pre-populate the update.
