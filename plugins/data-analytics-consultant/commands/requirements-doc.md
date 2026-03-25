---
description: Generate a data requirements document from stakeholder input
argument-hint: [project-name or context]
allowed-tools: Read, Write
---

Generate a comprehensive data requirements document for a data analytics project.

If $ARGUMENTS is provided, use it as the project name/context. Otherwise, create a general template.

Structure the document with these sections:
1. **Project Overview** — business objective, success metrics, key stakeholders
2. **Data Sources** — list each source with owner, format, refresh frequency, access method
3. **Key Metrics & KPIs** — metric name, business definition, calculation formula, data source, owner
4. **Dimensions & Filters** — how data will be sliced (time, geography, segment, product, etc.)
5. **Report/Dashboard Requirements** — each view with audience, purpose, key questions answered
6. **Data Quality Requirements** — completeness, accuracy, freshness, validation rules
7. **Access & Security** — who sees what, row-level security needs, PII handling
8. **Timeline & Milestones** — discovery, build, UAT, launch phases
9. **Open Questions** — items requiring stakeholder clarification
10. **Sign-off Section** — stakeholder approval table

Make the document specific, professional, and immediately usable. Include example entries in each section to guide completion.

Save the output to a file named `[project-name]-requirements.md` (or `data-requirements.md` if no project name provided).
