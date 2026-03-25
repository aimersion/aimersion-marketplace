---
name: risk-assessor
description: >
  Conduct NIST CSF cybersecurity risk assessments with risk matrices, gap analysis, and remediation roadmaps. This skill should be used when the user asks about "risk assessment", "NIST CSF", "cybersecurity assessment", "security risk analysis", "risk matrix", "gap analysis", "risk register", "threat assessment", "vulnerability assessment", "security posture review", "cyber risk", "risk scoring", or needs help evaluating an organization's cybersecurity risk posture. Also trigger when discussing security maturity models, risk quantification, risk appetite definition, or board-level security reporting.
---

# Risk Assessor

Conduct professional cybersecurity risk assessments using the NIST Cybersecurity Framework and industry best practices.

## NIST CSF 2.0 Framework

The NIST CSF organizes cybersecurity activities into six core functions:

### Govern (GV) — New in CSF 2.0
Establishes and monitors the organization's cybersecurity risk management strategy, expectations, and policy.
- Organizational context
- Risk management strategy
- Roles, responsibilities, and authorities
- Policy
- Oversight
- Cybersecurity supply chain risk management

### Identify (ID)
Understanding the organization's cybersecurity risk.
- Asset management
- Business environment
- Governance
- Risk assessment
- Risk management strategy
- Supply chain risk management

### Protect (PR)
Implementing safeguards to ensure delivery of critical services.
- Identity management, authentication, and access control
- Awareness and training
- Data security
- Information protection processes and procedures
- Maintenance
- Protective technology

### Detect (DE)
Identifying the occurrence of a cybersecurity event.
- Anomalies and events
- Security continuous monitoring
- Detection processes

### Respond (RS)
Taking action regarding a detected cybersecurity incident.
- Response planning
- Communications
- Analysis
- Mitigation
- Improvements

### Recover (RC)
Maintaining plans for resilience and restoring capabilities.
- Recovery planning
- Improvements
- Communications

## Risk Scoring Methodology

### Likelihood Scale (1-5)
| Score | Level | Definition |
|-------|-------|-----------|
| 1 | Very Low | Unlikely to occur in the next 3 years |
| 2 | Low | May occur once in the next 3 years |
| 3 | Moderate | May occur once per year |
| 4 | High | May occur multiple times per year |
| 5 | Very High | Expected to occur frequently |

### Impact Scale (1-5)
| Score | Level | Definition |
|-------|-------|-----------|
| 1 | Negligible | Minimal effect on operations |
| 2 | Minor | Limited operational disruption, no data loss |
| 3 | Moderate | Significant disruption, potential data exposure |
| 4 | Major | Severe disruption, confirmed data breach |
| 5 | Critical | Existential threat, massive data loss, regulatory action |

### Risk Score Matrix
Risk Score = Likelihood × Impact

| | Impact 1 | Impact 2 | Impact 3 | Impact 4 | Impact 5 |
|--|---------|---------|---------|---------|---------|
| **Likelihood 5** | 5 (M) | 10 (H) | 15 (H) | 20 (C) | 25 (C) |
| **Likelihood 4** | 4 (L) | 8 (M) | 12 (H) | 16 (H) | 20 (C) |
| **Likelihood 3** | 3 (L) | 6 (M) | 9 (M) | 12 (H) | 15 (H) |
| **Likelihood 2** | 2 (L) | 4 (L) | 6 (M) | 8 (M) | 10 (H) |
| **Likelihood 1** | 1 (L) | 2 (L) | 3 (L) | 4 (L) | 5 (M) |

**Risk Levels:** Critical (C): 20-25, High (H): 10-19, Moderate (M): 5-9, Low (L): 1-4

For detailed NIST CSF controls and subcategories, read `references/nist-csf-controls.md`.

## Maturity Assessment

### NIST CSF Implementation Tiers
- **Tier 1 — Partial**: Ad hoc, reactive, limited awareness
- **Tier 2 — Risk Informed**: Awareness exists, practices not organization-wide
- **Tier 3 — Repeatable**: Formal policies, consistently implemented
- **Tier 4 — Adaptive**: Continuous improvement, lessons learned drive changes

### Maturity Scoring per Function
Score each CSF subcategory against tiers. Aggregate by function for dashboard reporting.

## Output Guidelines

When producing risk assessments:
- Always include an executive summary accessible to non-technical stakeholders
- Use visual risk matrices (color-coded)
- Prioritize findings by risk score
- Include both current state and target state
- Provide specific, actionable remediation recommendations
- Estimate costs for remediation initiatives
- Map to relevant compliance frameworks
