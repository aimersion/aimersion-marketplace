---
name: pipeline-tracker
description: This skill should be used when the user asks about "pipeline status", "loan milestones", "condition clearing", "loan tracking", "pipeline management", or "underwriting conditions". Provides loan lifecycle milestone tracking, condition clearing checklists, borrower communication templates at each stage, turn time benchmarking, and stale file management.
version: 0.1.0
---

# Pipeline Tracker Skill

## Overview
Monitor and manage loan lifecycle from application through funding, tracking milestones, managing underwriting conditions, maintaining communication with borrowers, and ensuring timely closing.

## Core Responsibilities

### Loan Lifecycle Milestone Tracking
Track progress through key stages including:
- **Application Submitted**: Initial loan submission with basic documentation
- **Processing**: Document collection and verification in progress
- **Underwriting Submitted**: Complete file sent to underwriter
- **Underwriting Review**: Underwriter analyzing and issuing conditions
- **Conditions Issued**: Underwriter requests specific documentation or explanations
- **Conditions Cleared**: Borrower provides requested documentation
- **Final Approval**: Loan approved pending final verification
- **Clear to Close**: All conditions satisfied; loan ready for closing
- **Closing Scheduled**: Closing date and time confirmed
- **Funded**: Loan funds delivered; transaction complete

Record status with date, underwriter notes, next action items, and expected timeline.

### Condition Clearing Guidance
Manage condition resolution by:
- **Organizing Conditions**: Categorize by type (documentation, verification, property, underwriting, appraisal)
- **Prioritizing Resolution**: Identify critical vs. standard timeline conditions
- **Documenting Requirements**: Clearly communicate what's needed and why
- **Tracking Submissions**: Record when conditions are submitted and by whom
- **Following Up**: Ensure timely re-submission if initial documentation insufficient
- **Clearing Timeline**: Target 2-5 days per condition; flag delays
- **Communicating Status**: Keep borrower informed of progress

Common condition types:
- Verification of deposit (bank statement questions)
- Verification of employment (updated letter from employer)
- Appraisal issues (property concerns requiring clarification)
- Title issues (lien or easement resolution)
- Credit explanation (late payment or collection account)
- Income documentation (additional pay stubs or tax returns)
- Property insurance (quote or binder)
- HOA documentation (financials, rules, special assessments)
- Underwriting clarification (loan purpose, debt obligations, etc.)

### Borrower Communication Templates
Provide templated communications for each milestone including:
- **Application Confirmation**: "We received your application"
- **Document Request**: "We need the following documents"
- **Processing Update**: "Here's where your loan stands"
- **Condition Notice**: "Underwriter has issued conditions"
- **Condition Follow-up**: "We haven't received your condition documentation"
- **Clear to Close Preparation**: "You're almost at closing; here's the timeline"
- **Final Walkthrough**: "Schedule your final walkthrough"
- **Closing Confirmation**: "Closing details and what to bring"
- **Post-Close**: "Thank you; here's your next steps"

Customize templates with:
- Specific borrower names and loan details
- Clear deadlines and expectations
- Specific documentation needs or explanations
- Timeline estimates for next stages
- Personal loan officer contact information

### Turn Time Benchmarking
Track and optimize closing timelines by:
- **Recording Application Date**: Start point for timeline measurement
- **Recording Each Milestone**: Date of each stage transition
- **Calculating Stage Duration**: Time from start to each milestone
- **Total Turn Time**: Application to funding duration
- **Industry Benchmarking**: Compare to [30-45] day standard
- **Identifying Bottlenecks**: Stages where delays consistently occur
- **Trending Analysis**: Monthly average turn time trending

Target timelines by loan type:
- **Conventional Loans**: 30-35 days
- **FHA Loans**: 32-38 days
- **VA Loans**: 32-38 days
- **USDA Loans**: 35-40 days
- **Jumbo Loans**: 35-45 days
- **Non-QM Loans**: 35-45 days

Report on actual vs. target and root cause analysis for variances.

### Stale File Management
Manage at-risk loans by:
- **Identifying Stale Files**: Loans with no activity >7 days
- **Root Cause Analysis**: Why is loan stalled (waiting for borrower, underwriter, appraiser, etc.)
- **Taking Action**: Contact borrower or missing party to re-activate
- **Escalation**: If stale >14 days, escalate to manager/underwriter
- **Prevention**: Proactive communication to avoid stagnation
- **Relock Considerations**: If timeline extends, discuss rate relock or float strategy

Stale file triggers:
- No condition submission after 5 days
- Awaiting appraisal report >10 days
- Underwriting review delayed >7 days
- Borrower communication unreturned >3 days
- Missing document >7 days without follow-up

## Workflow

1. **Application Intake**: Create loan file in system; record application date
2. **Initial Processing**: Collect and organize documents; assign underwriter
3. **Underwriting Submission**: Send complete file with processing summary
4. **Condition Management**: Track conditions; communicate with borrower; organize submissions
5. **Verification Completion**: Verify employment, deposits, appraisal completion
6. **Final Approval**: Underwriter approves upon condition clearance
7. **Clear to Close**: Prepare closing documents; schedule closing
8. **Closing Coordination**: Coordinate with closing agent; finalize details
9. **Funding**: Monitor for funding; notify borrower of completed transaction
10. **File Documentation**: Record all milestones and timeline metrics

## Key Outputs

- Loan milestone tracking dashboard (summary of all active loans)
- Condition clearing checklist (organized by priority)
- Borrower communication template library
- Turn time analysis report (monthly trend)
- Stale file management report (loans at risk)
- Clear-to-close documentation checklist
- Closing coordination timeline
- Post-close file archive documentation

## Best Practices

- Update loan status in tracking system daily
- Proactively communicate at every milestone transition
- Set clear deadlines for condition submission
- Follow up within 24 hours if deadline missed
- Provide borrowers with estimated closing timeline
- Respond to borrower questions within same business day
- Escalate stale files to management immediately
- Track metric data for performance analysis and improvement
- Maintain documentation of all borrower communications
- Use standardized checklists to ensure consistency
- Prepare clear-to-close documents in advance
- Coordinate with closing agent 7 days pre-closing
- Conduct final walkthrough 1-2 days before closing
- Monitor post-close for any funding issues or discrepancies
- Implement periodic loan file quality reviews
