---
name: requirements-gatherer
description: >
  This skill should be used when the user asks to "gather data requirements",
  "run a discovery session", "document stakeholder needs", "create a requirements doc",
  "interview stakeholders about data needs", "define KPIs for a project", or needs
  help structuring what data a dashboard or report should contain.
version: 0.1.0
---

# Requirements Gathering

A structured methodology for eliciting, documenting, and validating data requirements from business stakeholders.

## The Requirements Gathering Process

Requirements gathering has four phases: **Discover → Define → Document → Validate**

### Phase 1: Discover (Stakeholder Interviews)

Before writing anything, understand the business context through structured interviews.

**Opening questions:**
- "What decision will this data help you make?"
- "How are you answering this question today, and what's painful about it?"
- "Who else needs to see this information?"
- "What would 'good' look like in 6 months?"

**Metric discovery questions:**
- "If you could only see one number every morning, what would it be?"
- "What's the first thing you check when something goes wrong?"
- "What do you report to your leadership every week/month?"

**Data reality questions:**
- "Do you trust the data you currently have? Where does it break down?"
- "Who owns the data for [metric]?"
- "How often does this data refresh, and is that frequent enough?"

### Phase 2: Define (Metric Specification)

Every metric needs a canonical definition before any build begins.

**Metric definition template:**
```
Metric Name: [name]
Business Definition: [what it measures in plain English]
Formula: [exact calculation]
Data Source: [table.column or system]
Owner: [who is accountable for this number]
Refresh Frequency: [real-time / daily / weekly / monthly]
Benchmark/Target: [goal or comparison point]
Edge Cases: [how nulls, refunds, duplicates are handled]
```

**Common definition conflicts to resolve:**
- Revenue: gross vs. net, recognized vs. collected, including/excluding tax
- Customers: active definition (30-day? 90-day?), counting seats vs. accounts
- Conversion: from which step, within which window

### Phase 3: Document (Requirements Specification)

Structure the requirements document for both technical and business audiences.

**Required sections:**
1. Executive Summary (1 page max)
2. Business Objectives & Success Criteria
3. Data Source Inventory
4. Metric & KPI Definitions
5. Report/Dashboard Specifications
6. Data Quality Standards
7. Access & Security Requirements
8. Timeline & Milestones
9. Open Questions & Decisions Log

### Phase 4: Validate (Sign-off Process)

Requirements are not complete until stakeholders confirm them in writing.

**Validation checklist:**
- [ ] Each metric has a single agreed definition
- [ ] Data sources are confirmed accessible
- [ ] All stakeholders have reviewed their relevant sections
- [ ] Open questions are resolved or escalated
- [ ] Sign-off received from business owner and data owner

## Common Pitfalls

**Scope creep prevention:** Document what is explicitly OUT of scope. If it's not written down, it will be asked for.

**The "while you're at it" trap:** Each new request after sign-off requires a formal change request with timeline and effort impact.

**Vanity metrics:** If a metric can't drive a specific action, challenge whether it belongs in the dashboard.

## Reference Files

- **`references/requirements-templates.md`** — complete document templates, interview guides, stakeholder matrices
