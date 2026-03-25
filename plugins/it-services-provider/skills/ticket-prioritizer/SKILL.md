---
name: ticket-prioritizer
description: >
  Triage and prioritize IT support tickets with SLA tracking for managed service providers. This skill should be used when the user asks to "triage a ticket", "prioritize a support request", "classify an IT issue", "check SLA compliance", "helpdesk triage", "ticket categorization", "support ticket priority", "incident classification", "service desk triage", or needs help classifying, prioritizing, and routing IT support tickets according to MSP SLA frameworks. Also trigger when discussing ticket queues, response time targets, or escalation procedures.
---

# Ticket Prioritizer

Expert IT support ticket triage and SLA management for MSPs and IT service providers.

## Priority Classification Framework

### Priority Levels

**P1 — Critical (Emergency)**
- Complete system outage or security breach
- Revenue-generating systems down
- All users in a location unable to work
- Active security incident
- SLA: Respond in 15 min, resolve in 4 hours

**P2 — High**
- Major system degraded but partially functional
- Multiple users affected, no workaround
- Single VIP/executive unable to work
- Email system issues affecting >50% of users
- SLA: Respond in 30 min, resolve in 8 hours

**P3 — Medium**
- Single user issue, no workaround available
- Non-critical system issue affecting few users
- Performance degradation
- Software installation or configuration request
- SLA: Respond in 2 hours, resolve in 24 hours

**P4 — Low**
- Single user issue with workaround available
- Cosmetic or preference issues
- How-to questions
- Feature requests or enhancement asks
- SLA: Respond in 4 hours, resolve in 72 hours

### Escalation Matrix

| Level | Handles | Escalation Trigger |
|-------|---------|-------------------|
| L1 | Password resets, basic troubleshooting, known issues | Cannot resolve in 30 minutes |
| L2 | Advanced troubleshooting, system configuration, networking | Requires infrastructure changes |
| L3 | Architecture decisions, complex networking, security incidents | Vendor engagement needed |
| Vendor | Product-specific bugs, hardware warranty, licensing | Per vendor SLA |

For detailed SLA frameworks and escalation procedures, read `references/sla-frameworks.md`.

## Ticket Categorization

### Primary Categories
- **Hardware**: Desktops, laptops, printers, peripherals, mobile devices
- **Software**: OS issues, application errors, installations, updates
- **Network**: Connectivity, VPN, Wi-Fi, DNS, firewall
- **Security**: Phishing, malware, unauthorized access, policy violations
- **Access**: Account creation, password resets, permissions, MFA
- **Email**: Outlook, Exchange, mail flow, calendar
- **Cloud**: Microsoft 365, Azure, AWS, SaaS applications
- **Telephony**: VoIP, Teams calling, conference rooms

## Output Guidelines

When triaging tickets:
- Assign both priority AND category
- Calculate SLA deadlines based on client tier
- Provide initial troubleshooting steps
- Draft a professional user response
- Flag any tickets that may indicate larger systemic issues
