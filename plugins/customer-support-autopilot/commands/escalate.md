---
description: Package an escalation brief for engineering, product, or leadership
argument-hint: [issue description or ticket]
---

Package a support escalation using the escalation-packager skill.

**Issue / Context**:
$ARGUMENTS

Follow this process:

1. Assess whether escalation is warranted based on the escalation criteria in the escalation-packager skill.
2. Determine the appropriate severity (SEV1–SEV4) and target team (Engineering, Product, Leadership, Security).
3. Build the escalation brief with all required sections:
   - Summary (2–3 sentences)
   - Customer impact (affected customers, revenue at risk, churn signals)
   - Technical details (symptoms, reproduction steps, environment, timeline, frequency)
   - What has been tried (troubleshooting, workarounds, internal reproduction)
   - Business context (related tickets, commitments, urgency factors)
   - Recommended action (specific ask with timeline)
4. If the issue does not meet escalation criteria, explain why and suggest alternative actions.

Present the escalation brief in the structured output format from the escalation-packager skill. Make the brief self-contained — the receiving team should be able to act on it without additional context from support.
