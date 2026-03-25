---
name: escalation-packager
description: >
  Package support escalations with full context for engineering, product, or leadership. This skill should
  be used when the user asks to "escalate this issue", "package an escalation", "write an escalation brief",
  "send this to engineering", "this needs to be escalated", "create an incident report", or needs help
  structuring an escalation with reproduction steps, business impact, and recommended actions.
version: 0.1.0
---

# Escalation Packager

Structure and package support escalations for engineering, product, or leadership with full context, reproduction steps, and business impact assessment.

## When to Escalate

Use the following criteria to determine if escalation is warranted:

| Signal | Escalation Target |
|--------|-------------------|
| Bug affecting multiple customers | Engineering |
| Data integrity or security concern | Security + Engineering |
| Feature gap blocking a deal | Product |
| Customer threatening churn (enterprise) | Leadership + Account Management |
| SLA breach or repeated failures | Support Leadership |
| Issue with no known workaround (P1/P2) | Engineering On-Call |
| Pattern of related tickets (3+ in 24 hours) | Engineering + Product |

## Escalation Brief Structure

Every escalation must include these sections:

### 1. Summary (2–3 sentences)
- What is happening
- Who is affected
- How severe is it

### 2. Customer Impact
- Number of affected customers (or accounts)
- Revenue at risk (if quantifiable)
- Customer tier (enterprise, SMB, free)
- Any explicit churn signals or deadlines

### 3. Technical Details
- Exact error messages or symptoms
- Steps to reproduce (numbered, specific)
- Environment details (browser, OS, API version, etc.)
- When it started (first report timestamp)
- Frequency (constant, intermittent, pattern-based)

### 4. What Has Been Tried
- Troubleshooting steps already attempted
- Workarounds offered to customers
- Whether the issue was reproduced internally

### 5. Business Context
- Related tickets (list IDs)
- Customer communication history
- Any commitments or timelines given to the customer
- Upcoming events that increase urgency (demos, renewals, launches)

### 6. Recommended Action
- Specific ask: fix, investigate, hotfix, rollback, etc.
- Suggested priority and timeline
- Who should own the investigation

## Severity Classification

| Severity | Definition | Expected Response |
|----------|-----------|-------------------|
| **SEV1** | Service down, data loss, security breach | Immediate — all hands |
| **SEV2** | Major feature broken, significant customer impact | Within 2 hours |
| **SEV3** | Degraded experience, workaround exists | Within 1 business day |
| **SEV4** | Minor issue, improvement needed | Next sprint |

## Output Format

```
# Escalation Brief

**Severity**: [SEV1–SEV4]
**Target Team**: [Engineering / Product / Leadership / Security]
**Date**: [Today's date]
**Escalated By**: [Agent name]

## Summary
[2–3 sentences]

## Customer Impact
- **Affected Customers**: [count and tier]
- **Revenue at Risk**: [amount or "not quantified"]
- **Churn Signals**: [yes/no — details]

## Technical Details
- **Symptoms**: [description]
- **Steps to Reproduce**:
  1. [step]
  2. [step]
  3. [step]
- **Environment**: [details]
- **First Reported**: [timestamp]
- **Frequency**: [constant/intermittent/pattern]

## Attempted Remediation
- [What was tried and the result]

## Business Context
- **Related Tickets**: [IDs]
- **Customer Commitments**: [any timelines given]
- **Urgency Factors**: [demos, renewals, etc.]

## Recommended Action
[Specific ask with suggested timeline]
```

## Reference Material

For escalation routing rules and SLA policies, see `references/escalation-policies.md`.
