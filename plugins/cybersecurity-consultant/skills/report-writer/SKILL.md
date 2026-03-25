---
name: report-writer
description: >
  Write professional cybersecurity reports including penetration test reports, vulnerability assessments, risk assessment reports, and executive security summaries. This skill should be used when the user asks to "write a security report", "penetration test report", "vulnerability assessment report", "security findings report", "executive security summary", "audit report", "assessment report", "risk report", "security brief for executives", "board presentation on security", or needs help creating professional cybersecurity deliverables. Also trigger when discussing report formatting, finding severity ratings, remediation recommendations, or translating technical findings for executives.
---

# Report Writer

Create professional, polished cybersecurity reports and deliverables.

## Report Writing Principles

1. **Two audiences, one document.** Every report needs an executive summary for leadership AND technical detail for implementers.
2. **Findings-first, not methodology-first.** Lead with what you found, not how you found it.
3. **Severity drives structure.** Present critical findings first, always.
4. **Be specific and reproducible.** Findings should include enough detail to reproduce and remediate.
5. **Recommendation quality matters.** Vague recommendations ("improve security") are useless. Specific actions with effort estimates are valuable.

## Report Types

### Penetration Test Report
For detailed templates, read `references/report-templates.md`.

**Structure:**
1. Executive Summary (1-2 pages)
2. Scope and Methodology
3. Findings Summary (severity distribution chart)
4. Detailed Findings (ordered by severity)
5. Remediation Recommendations (prioritized)
6. Appendix (tools used, raw output)

### Vulnerability Assessment Report
**Structure:**
1. Executive Summary
2. Assessment Scope
3. Vulnerability Distribution (by severity, by host, by type)
4. Critical and High Findings (detailed)
5. Medium and Low Findings (summarized)
6. Remediation Priority Matrix
7. Appendix (scan results, false positive analysis)

### Risk Assessment Report
**Structure:**
1. Executive Summary
2. Assessment Scope and Methodology
3. Risk Register (full matrix)
4. Risk Heat Map (visual)
5. Top Risks (detailed analysis)
6. Current vs. Target State
7. Remediation Roadmap
8. Investment Estimate

### Executive Security Brief
**Structure (max 5 pages):**
1. Security posture summary (score or rating)
2. Key risks in business terms
3. Progress since last report
4. Top 3 recommendations with business justification
5. Investment ask

## Finding Severity Scale

| Severity | CVSS Range | Definition |
|----------|-----------|-----------|
| Critical | 9.0-10.0 | Immediate exploitation likely, complete system compromise |
| High | 7.0-8.9 | Significant risk, exploitation probable |
| Medium | 4.0-6.9 | Moderate risk, exploitation requires conditions |
| Low | 0.1-3.9 | Minor risk, limited impact |
| Informational | N/A | Best practice deviation, no direct risk |

## Individual Finding Format

### [SEVERITY] Finding Title
**ID:** [VULN-001]
**Severity:** [Critical/High/Medium/Low/Info]
**CVSS Score:** [if applicable]
**Affected Assets:** [systems, applications, URLs]
**Status:** [Open/Remediated/Accepted Risk]

**Description:**
[Clear explanation of the vulnerability in 2-3 sentences]

**Evidence:**
[Screenshots, command output, or proof of concept — sanitized]

**Business Impact:**
[What an attacker could achieve by exploiting this, in business terms]

**Recommendation:**
[Specific remediation steps, ordered by preference]

**Effort Estimate:** [Low/Medium/High]
**Remediation Timeline:** [Immediate/30 days/90 days]

## Output Guidelines

When writing cybersecurity reports:
- Professional formatting with consistent styling
- Include a findings summary table or dashboard early
- Use color coding for severity consistently
- Redact sensitive information appropriately
- Include methodology section (but keep it brief)
- Date everything with assessment period
- Include disclaimers and scope limitations
- Deliver as a formatted, downloadable document
