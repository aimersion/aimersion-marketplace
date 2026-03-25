---
description: Generate pipeline tracking and loan status documentation
argument-hint: loan details or status info (borrower name, loan amount, current stage)
---

# Pipeline Status Command

Generate loan tracking documents and milestone status report.

## Instructions

Based on the loan details provided in $ARGUMENTS:

1. **Extract loan information**:
   - Borrower name (from $1 or $ARGUMENTS)
   - Loan amount (from $1 or $ARGUMENTS)
   - Current stage/milestone
   - Application date (or estimate)
   - Any pending items or conditions

2. **Identify current milestone**:
   - Application submitted
   - Processing
   - Underwriting submitted
   - Underwriting review
   - Conditions issued
   - Conditions cleared
   - Final approval
   - Clear to close
   - Closing scheduled
   - Funded
   - Determine from $ARGUMENTS or ask user

3. **Generate milestone status summary** showing:
   - Current status and when reached
   - Next expected milestone
   - Days since last milestone
   - Estimated timeline to closing
   - Any red flags or delays

4. **Create action items checklist** for current stage:
   - Use loan-lifecycle-milestones.md as reference
   - Include stage-specific actions
   - Identify items awaiting from borrower
   - Identify items awaiting from lender/third parties
   - Set deadlines for each item

5. **Document any conditions** (if in condition clearing stage):
   - List all conditions issued
   - Status of each (submitted, pending, cleared)
   - Due dates for missing conditions
   - Follow-up actions needed

6. **Create borrower communication template** appropriate to stage:
   - Use stage-appropriate template from pipeline-tracker skill
   - Include current status explanation
   - Next steps for borrower
   - Realistic timeline
   - Action items for borrower
   - Loan officer contact info

7. **Format as**:
   - Professional status summary
   - Timeline showing progress to date
   - Current milestone details
   - Action items (organized by owner: borrower/lender/broker)
   - Borrower communication template
   - Turn time tracking (days from application to current stage)

8. **Include turn time tracking**:
   - Application date
   - Dates of each completed milestone
   - Current elapsed days
   - Estimated remaining days
   - Comparison to industry benchmarks

Use loan-lifecycle-milestones.md from pipeline-tracker skill for structure, timelines, and communications.

## Output

Provide comprehensive pipeline status package:
- Current milestone status report
- Action items checklist with owners and deadlines
- Borrower communication email (ready to send)
- Turn time analysis
- Red flag identification (if any)
- Recommended next steps
