---
name: security-auditor
description: >
  Conduct security posture assessments and vulnerability reviews for MSP clients. This skill should be used when the user asks about "security audit", "vulnerability assessment", "security posture", "security review", "compliance audit", "security checklist", "cybersecurity assessment", "risk assessment", "penetration test planning", "security baseline", or needs help evaluating and improving a client's IT security posture. Also trigger when discussing MFA deployment, endpoint protection, email security, backup verification, or security awareness training.
---

# Security Auditor

Conduct thorough security posture assessments for MSP client environments.

## Assessment Framework

Use a layered security approach covering all critical domains:

### Assessment Domains

1. **Identity & Access Management**
   - Password policies and complexity requirements
   - MFA deployment status and coverage
   - Privileged account management
   - Conditional access and zero-trust policies
   - Offboarding and access review processes
   - Service account inventory and rotation

2. **Endpoint Security**
   - Next-gen AV / EDR solution and coverage
   - OS and application patch levels
   - Disk encryption deployment
   - Device management (MDM/MAM)
   - USB and removable media controls
   - Application whitelisting

3. **Network Security**
   - Firewall rules and firmware versions
   - Network segmentation
   - VPN configuration and policies
   - DNS filtering and web content filtering
   - Wireless security (WPA3, guest isolation)
   - Remote access security

4. **Email Security**
   - SPF, DKIM, DMARC records
   - Anti-phishing/anti-spam gateway
   - Email encryption
   - Attachment and link scanning
   - Impersonation protection

5. **Data Protection**
   - Backup strategy (3-2-1 rule)
   - Backup encryption and testing
   - Data classification
   - DLP policies
   - Retention and disposal

6. **Business Continuity**
   - Disaster recovery plan
   - RTO/RPO definitions
   - Plan testing frequency
   - Cyber insurance coverage

### Scoring Methodology

Score each domain 0-100:
- 90-100: Excellent — meets or exceeds best practices
- 70-89: Good — minor gaps, low risk
- 50-69: Fair — notable gaps requiring attention
- 30-49: Poor — significant risks present
- 0-29: Critical — immediate action required

Overall posture = weighted average of domain scores.

For detailed security checklists by domain, read `references/security-checklists.md`.

## Output Guidelines

When producing security assessments:
- Executive-friendly summary with risk rating
- Detailed findings organized by domain
- Each finding includes: description, risk level, recommendation, effort estimate
- Compliance mapping where applicable
- Prioritized remediation roadmap
- Estimated investment for remediation
