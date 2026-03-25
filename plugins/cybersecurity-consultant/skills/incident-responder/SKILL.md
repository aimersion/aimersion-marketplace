---
name: incident-responder
description: >
  Create incident response playbooks, forensic checklists, and communication templates for cybersecurity incidents. This skill should be used when the user asks about "incident response", "IR playbook", "ransomware response", "data breach response", "security incident", "forensic investigation", "incident communication", "breach notification", "cyber incident", "IR plan", "incident management", "threat response", or needs help planning for or responding to cybersecurity incidents. Also trigger when discussing tabletop exercises, IR team structure, evidence preservation, or post-incident reviews.
---

# Incident Responder

Create comprehensive incident response playbooks and support cybersecurity incident management.

## IR Lifecycle (NIST SP 800-61)

### Phase 1: Preparation
This is the most important phase — done before any incident occurs.

**Team Structure:**
- Incident Commander: Owns the response, makes decisions
- Technical Lead: Directs technical investigation
- Communications Lead: Internal and external messaging
- Legal Counsel: Advises on notification obligations
- Executive Sponsor: Approves business decisions (pay/don't pay, disclosure)

**Pre-Positioned Resources:**
- IR retainer with external firm (if applicable)
- Forensic imaging tools and jump bags
- Communication templates (pre-drafted)
- Contact lists (internal team, legal, PR, insurance, law enforcement)
- Evidence collection procedures and chain of custody forms
- Encrypted communication channel (for IR team)

### Phase 2: Detection & Analysis
- Initial alert triage and verification
- Scope assessment (how many systems, what data)
- Indicator of Compromise (IOC) identification
- Attack vector determination
- Timeline construction
- Severity classification

### Phase 3: Containment, Eradication, Recovery
- Short-term containment (isolate, block)
- Evidence preservation (before making changes)
- Extended containment (monitoring, additional controls)
- Eradication (remove threat actor access, malware)
- Recovery (restore systems, verify clean)

### Phase 4: Post-Incident Activity
- Post-mortem / lessons learned meeting
- Report writing
- Control improvements
- Process updates
- Regulatory notification (if required)

For detailed playbooks by incident type, read `references/ir-playbooks.md`.

## Severity Classification

| Level | Name | Definition | Response |
|-------|------|-----------|----------|
| SEV-1 | Critical | Active breach, data exfiltration, ransomware encryption | All hands, war room, 15-min updates |
| SEV-2 | High | Confirmed compromise, no active exfiltration yet | IR team activated, hourly updates |
| SEV-3 | Medium | Suspicious activity, potential compromise indicators | Investigation, daily updates |
| SEV-4 | Low | Policy violation, minor security event | Standard handling, weekly report |

## Evidence Preservation

**Golden Rules:**
1. Never investigate on the live system if you can image it
2. Document everything you do (timestamped notes)
3. Maintain chain of custody for all evidence
4. Hash all evidence files (SHA-256)
5. Use write-blockers for disk imaging
6. Capture volatile data first (memory > disk > network)

**Volatile Data Priority:**
1. System memory (RAM)
2. Network connections and routing tables
3. Running processes and services
4. Login sessions and users
5. Open files and registry (Windows)

## Output Guidelines

When creating IR playbooks:
- Make them actionable under stress — clear steps, decision trees
- Include communication templates ready to fill in
- Define roles and contact information
- Add checklists for evidence preservation
- Include regulatory notification requirements by jurisdiction
- Test with tabletop exercises before an incident occurs
