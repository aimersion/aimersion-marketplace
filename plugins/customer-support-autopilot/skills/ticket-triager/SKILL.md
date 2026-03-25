---
name: ticket-triager
description: >
  Categorize and prioritize incoming support tickets. This skill should be used when the user asks to
  "triage a ticket", "categorize this issue", "prioritize support requests", "assess ticket severity",
  "what priority is this ticket", or needs help classifying incoming customer issues by type, urgency,
  and routing destination.
version: 0.1.0
---

# Ticket Triager

Categorize, prioritize, and route incoming support tickets using a structured framework.

## Triage Process

1. **Read the ticket** — extract the customer's reported issue, any error messages, account details, and emotional tone.
2. **Classify the issue type** using the taxonomy below.
3. **Assign priority** (P1–P4) based on the severity/impact matrix.
4. **Recommend routing** to the appropriate team or individual.
5. **Flag special conditions** — VIP accounts, churn risk, security incidents, legal/compliance triggers.

## Issue Type Taxonomy

Classify each ticket into exactly one primary category and optionally one secondary category:

| Category | Description | Examples |
|----------|-------------|----------|
| Bug | Product not working as documented | Errors, crashes, data loss, broken features |
| Performance | Slowness or degraded experience | Timeouts, latency, load failures |
| Account | Billing, access, or account management | Login issues, plan changes, invoicing |
| How-To | Customer needs guidance | Feature usage questions, onboarding help |
| Feature Request | Customer wants new functionality | Enhancement suggestions, integration asks |
| Integration | Issues with third-party connections | API errors, webhook failures, SSO problems |
| Security | Potential security or privacy concern | Unauthorized access, data exposure, vulnerabilities |
| Outage | Service unavailability | Complete downtime, regional outages |

## Priority Matrix

| Priority | Criteria | SLA Target |
|----------|----------|------------|
| **P1 — Critical** | Service down for multiple customers, data loss, security breach | First response: 15 min. Resolution: 4 hours |
| **P2 — High** | Major feature broken, single customer blocked, revenue impact | First response: 1 hour. Resolution: 8 hours |
| **P3 — Medium** | Degraded experience, workaround available, non-blocking | First response: 4 hours. Resolution: 24 hours |
| **P4 — Low** | Minor cosmetic issue, feature request, general question | First response: 8 hours. Resolution: 72 hours |

### Escalation Signals

Automatically elevate priority by one level when any of these apply:

- Customer is on an enterprise or VIP plan
- Customer has explicitly mentioned churn or cancellation
- Issue affects a customer-facing demo or launch
- Issue involves data integrity or security
- Multiple tickets from different customers report the same root cause

## Routing Recommendations

| Issue Type | Default Route | Escalation Route |
|------------|--------------|------------------|
| Bug (P1/P2) | Engineering On-Call | Engineering Manager |
| Bug (P3/P4) | Support Engineering | — |
| Performance | Platform Team | SRE Lead |
| Account | Account Management | Finance/Billing |
| How-To | Tier 1 Support | — |
| Feature Request | Product Team | — |
| Integration | Integrations Team | Partner Engineering |
| Security | Security Team | CISO |
| Outage | Incident Commander | VP Engineering |

## Output Format

Present triage results as:

```
**Ticket Triage Summary**

- **Issue Type**: [Primary] / [Secondary if applicable]
- **Priority**: [P1–P4] — [Label]
- **Routing**: [Team/Individual]
- **SLA**: First response by [time], resolution by [time]
- **Flags**: [VIP, Churn Risk, Security, Duplicate, etc.]

**Rationale**: [1–2 sentence explanation of classification decisions]

**Suggested First Response**: [Brief outline of what to say in the initial reply]
```

## Reference Material

For detailed routing rules and SLA policies, see `references/routing-rules.md`.
