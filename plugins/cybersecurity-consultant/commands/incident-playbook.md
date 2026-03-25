---
description: Generate an incident response playbook for a specific threat scenario
allowed-tools: Read, Write, Edit, Bash
---

Generate a detailed incident response playbook.

Gather:
- Organization context (size, industry, IT environment)
- Threat scenario to plan for (or let user choose):
  - Ransomware attack
  - Business email compromise
  - Data breach / data exfiltration
  - Insider threat
  - DDoS attack
  - Supply chain compromise
  - Phishing campaign
  - Unauthorized access
- Current IR capabilities and team structure
- External IR retainer information (if any)
- Regulatory notification requirements

Produce a comprehensive IR playbook:

## 1. Playbook Overview
- Threat scenario description
- Typical attack chain and indicators
- Scope and applicability
- Last updated date

## 2. Preparation Phase
- Required tools and access
- Contact list (internal team, legal, PR, insurance, FBI/CISA)
- Pre-positioned response capabilities
- Communication templates (pre-drafted)

## 3. Detection and Analysis
- Indicators of compromise (IOCs) for this threat type
- Detection mechanisms and alerts
- Initial triage steps
- Severity classification criteria
- Evidence preservation procedures

## 4. Containment
- Immediate containment actions (short-term)
- Extended containment measures
- Decision trees: isolate vs. monitor
- Business impact considerations during containment

## 5. Eradication
- Root cause identification procedures
- Malware removal or threat elimination steps
- System hardening before restoration
- Verification that threat is eliminated

## 6. Recovery
- System restoration priority order
- Data restoration procedures
- Service verification checklist
- Monitoring for re-infection
- Gradual return to normal operations

## 7. Post-Incident
- Post-mortem timeline and template
- Lessons learned documentation
- Control improvements to implement
- Notification requirements (regulatory, customer, insurance)
- Legal considerations

## 8. Communication Templates
- Internal notification to leadership
- External notification to customers (if required)
- Regulatory notification template
- Media statement template (if needed)
- Employee communication

Save as a structured, actionable playbook document.
