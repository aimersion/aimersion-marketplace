---
name: compliance-mapper
description: >
  Map security controls to compliance frameworks including SOC 2, ISO 27001, CMMC, NIST 800-53, HIPAA, PCI-DSS, and GDPR. This skill should be used when the user asks about "compliance mapping", "SOC 2 readiness", "ISO 27001 controls", "CMMC level", "NIST 800-53", "HIPAA compliance", "PCI compliance", "GDPR requirements", "audit preparation", "compliance gap analysis", "control mapping", "compliance framework", or needs help understanding, mapping, or achieving compliance with cybersecurity regulatory frameworks. Also trigger when discussing audit evidence collection, policy writing for compliance, or cross-framework control mapping.
---

# Compliance Mapper

Map security controls across cybersecurity compliance frameworks and guide organizations to audit readiness.

## Supported Frameworks

### SOC 2
- Applies to: Service organizations processing customer data
- Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy
- Audit type: Type I (point-in-time) and Type II (period of time, typically 6-12 months)
- Effort to achieve: 3-12 months depending on maturity

### ISO 27001
- Applies to: Any organization seeking international security certification
- Structure: Annex A controls (93 controls in ISO 27001:2022)
- Certification: Accredited certification body audit
- Effort to achieve: 6-18 months

### CMMC 2.0
- Applies to: DoD contractors and subcontractors
- Levels: Level 1 (Foundational), Level 2 (Advanced), Level 3 (Expert)
- Based on NIST SP 800-171 (Level 2) and 800-172 (Level 3)
- Assessment: Self-assessment (Level 1), C3PAO assessment (Level 2), Government assessment (Level 3)

### HIPAA Security Rule
- Applies to: Covered entities and business associates handling PHI
- Categories: Administrative, Physical, and Technical Safeguards
- No formal certification — but OCR audits and enforcement
- Effort: 3-9 months for initial compliance

### PCI-DSS v4.0
- Applies to: Organizations handling payment card data
- 12 requirements covering network security, data protection, access control, monitoring, and more
- Assessment: SAQ (self-assessment) or QSA audit depending on merchant level
- Effort: 3-12 months depending on scope

For detailed framework requirements and cross-mapping, read `references/compliance-frameworks.md`.

## Cross-Framework Mapping Approach

Many controls satisfy multiple frameworks. When building compliance programs:

1. **Start with one framework** — usually the one with the most immediate business need
2. **Map to NIST CSF** as the common language
3. **Identify overlapping controls** — often 60-80% overlap between frameworks
4. **Fill in framework-specific gaps** — unique requirements per standard
5. **Build once, comply many** — design controls to satisfy multiple frameworks

### High-Overlap Control Areas
- Access control → SOC 2 CC6.1, ISO A.9, CMMC AC, HIPAA §164.312(a)
- Encryption → SOC 2 CC6.7, ISO A.10, CMMC SC, HIPAA §164.312(a)(2)(iv)
- Incident response → SOC 2 CC7.3-7.4, ISO A.16, CMMC IR, HIPAA §164.308(a)(6)
- Risk assessment → SOC 2 CC3.2, ISO 6.1.2, CMMC RA, HIPAA §164.308(a)(1)(ii)(A)

## Evidence Collection

### Types of Evidence Auditors Expect
- **Policies**: Written, approved, dated, and accessible
- **Procedures**: Step-by-step documented processes
- **Screenshots**: Point-in-time proof of configuration
- **Reports**: Periodic reviews, vulnerability scans, penetration test results
- **Logs**: Access logs, change logs, incident logs
- **Training records**: Completion certificates, attendance records
- **Third-party reports**: SOC 2 reports from vendors, pen test reports

## Output Guidelines

When producing compliance mappings:
- Use clear matrices showing requirements vs. control status
- Calculate an overall readiness percentage
- Prioritize gaps by audit risk (what will an auditor flag first?)
- Provide specific evidence examples for each control
- Include effort and cost estimates for remediation
- Note cross-framework benefits (one control = multiple checkboxes)
