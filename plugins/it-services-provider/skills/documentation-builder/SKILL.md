---
name: documentation-builder
description: >
  Create IT documentation including network diagrams, runbooks, disaster recovery plans, and standard operating procedures for MSP environments. This skill should be used when the user asks to "document the network", "create a runbook", "write a DR plan", "disaster recovery documentation", "network documentation", "IT procedures", "standard operating procedures", "SOP", "knowledge base article", "technical documentation", "system documentation", or needs help creating structured IT documentation for MSP client environments. Also trigger when discussing IT onboarding documentation, client environment documentation, or technical handoff documents.
---

# Documentation Builder

Create comprehensive IT documentation for MSP client environments.

## Documentation Hierarchy

### Tier 1: Critical (must have)
- Network diagram (physical and logical)
- Password and credential management documentation
- Backup and disaster recovery plan
- Client contact and escalation information
- Site/location information

### Tier 2: Important (should have)
- Standard operating procedures for common tasks
- Runbooks for critical systems
- Configuration baselines
- Asset inventory
- Vendor and licensing information

### Tier 3: Nice to Have
- Knowledge base articles for known issues
- Training documentation
- Architecture decision records
- Historical change log

## Documentation Standards

### Every Document Should Include
- **Title and purpose**: What is this document and why does it exist?
- **Scope**: What environment, systems, or processes does it cover?
- **Last updated**: Date and person who last reviewed/updated
- **Owner**: Who is responsible for keeping this current?
- **Review cycle**: How often should this be reviewed? (quarterly recommended)

### Writing Style for IT Documentation
- Use numbered steps for procedures (not bullet points)
- Include screenshots with annotations
- Note expected outcomes at each step
- Highlight warnings and prerequisites prominently
- Write for the technician who will use this at 2 AM during an outage

For detailed IT documentation templates, read `references/it-doc-templates.md`.

## Output Guidelines

When creating IT documentation:
- Follow the documentation standard structure above
- Use clear headings and table of contents for long documents
- Include revision history table
- Make procedures testable — someone should be able to follow them step by step
- Include verification steps ("confirm you see X before proceeding")
- Save in a format suitable for the client's documentation platform
