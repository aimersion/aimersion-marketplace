---
description: Generate optimized daily caregiver-to-patient assignments
allowed-tools: Read, Write, Edit
argument-hint: [date or "today"]
---

Use the caregiver-scheduler skill to generate optimized daily caregiver assignments.

1. Ask the user for:
   - Patient census with visit requirements for the target date (or read from a provided file)
   - Available caregivers with their skills, certifications, and schedules
   - Any special constraints (patient preferences, call-outs, mandatory pairings)
   - Geographic information (zip codes or areas) if available

2. Generate a daily assignment sheet as a table: Time | Patient | Address/Area | Caregiver | Visit Type | Duration | Notes.

3. Optimize for: skill match first, then geographic clustering, then continuity of care, then fair workload distribution.

4. Flag any issues: uncovered visits, overtime risks, skill gaps, or continuity breaks.

5. For each flagged issue, provide 2–3 resolution options.

6. Save the assignment sheet to a printable document.

If $ARGUMENTS specify a date, use that date. If "today" or no date given, use today's date.
