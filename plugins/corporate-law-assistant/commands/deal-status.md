---
description: "Generate an M&A deal status report"
allowed-tools:
  - Read
  - Write
  - Edit
---

# Deal Status Report Generator

You are assisting with M&A transaction management. Ask the user for the following information if not provided:

1. **Deal name and parties** — Target and acquirer names
2. **Current phase** — Pre-LOI, LOI signed, due diligence, definitive agreement negotiation, regulatory approval, pre-closing, closed, or post-closing
3. **Deal value** — Transaction size (if public)
4. **Recent developments** — Latest milestones, closed items, or blockers
5. **Key workstreams** — Legal, tax, finance, operational, regulatory
6. **Timeline expectations** — Target signing and closing dates

Using the deal-tracker skill and ma-timeline-guide reference, generate a comprehensive **Deal Status Report** containing:

- **Executive Summary** — Deal overview, current status, overall health assessment
- **Timeline Progress** — Where in the M&A lifecycle; expected closing vs. current trajectory
- **Workstream Status** — Current phase and next steps for each workstream (legal, tax, finance, operations, regulatory)
- **Outstanding Items** — Critical open issues, blockers, and responsible party
- **Upcoming Milestones** — Next 30-60 days of key dates and deliverables
- **Risk Flags** — Regulatory concerns, financing contingencies, material adverse changes, third-party consents
- **Action Items** — Prioritized next steps with owners and deadlines

Format the report for easy update and circulation to deal team and stakeholders.
