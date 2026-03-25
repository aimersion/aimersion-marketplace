---
description: Generate a department-specific onboarding plan with checklists and 30/60/90 goals
argument-hint: "<new hire name, role, and department>"
---

# /onboarding

Generate a comprehensive, department-specific onboarding plan. See the **onboarding-planner** skill for the full framework and department-specific additions.

## Usage

```
/onboarding $ARGUMENTS
```

## What I Need From You

- **New hire name**: Who's starting?
- **Role and department**: What position, which team?
- **Start date**: When do they start?
- **Manager**: Who's their manager?
- **Remote or in-office?**: This significantly changes the plan
- **Any special context**: Contractor conversion? Internal transfer? Senior leader?

## Output

A complete onboarding plan including:
- Pre-start checklist (everything to do before Day 1)
- Day 1 schedule (hour-by-hour)
- Week 1 priorities
- 30/60/90 day goals specific to the role and department
- Buddy assignment guidelines
- Key contacts matrix
- Tool access checklist
- Department-specific additions (engineering = dev environment setup; sales = CRM training + call shadowing; etc.)

## If Connectors Available

If **~~HRIS** is connected: Pull new hire details, auto-populate checklists
If **~~calendar** is connected: Create Day 1 and Week 1 calendar events
If **~~chat** is connected: Send welcome message to team channel
If **~~knowledge base** is connected: Link to onboarding docs and team wikis
