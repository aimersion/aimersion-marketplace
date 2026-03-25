---
description: Categorize and prioritize a support ticket
argument-hint: [ticket text or description]
---

Triage the following support ticket using the ticket-triager skill.

**Ticket Content**:
$ARGUMENTS

Perform the full triage process:

1. Read the ticket carefully — extract the reported issue, error messages, account details, and customer tone.
2. Classify the issue type (Bug, Performance, Account, How-To, Feature Request, Integration, Security, Outage).
3. Assign priority P1–P4 using the severity/impact matrix.
4. Recommend routing to the appropriate team.
5. Flag any special conditions (VIP, churn risk, security, duplicate pattern).

Present the full triage summary in the structured output format from the ticket-triager skill. Include a suggested first response outline that the agent can use as a starting point.
