---
name: process-documenter
description: >
  Document software development agency workflows including development processes, QA procedures, deployment pipelines, and operational runbooks. This skill should be used when the user asks to "document our process", "create a runbook", "write development guidelines", "QA process", "deployment procedure", "code review process", "onboarding documentation", "development workflow", "CI/CD documentation", "incident response plan", or needs help creating structured process documentation for a software development agency. Also trigger when discussing developer handbooks, team playbooks, or operational procedures.
---

# Process Documenter

Create clear, actionable process documentation for software development agency operations.

## Documentation Principles

1. **Write for the new hire.** If someone joining next week can follow it, it's good documentation.
2. **Be specific.** "Follow best practices" is not documentation. Name the tool, the command, the step.
3. **Include the why.** People follow processes better when they understand the reasoning.
4. **Keep it maintainable.** Simple documents that get updated beat elaborate ones that go stale.
5. **Use templates.** Consistency makes documentation easier to write, read, and maintain.

## Process Documentation Types

### Development Workflow
- Git branching strategy and naming conventions
- Code review standards and checklist
- PR template and merge requirements
- Sprint ceremony runbooks (planning, standup, retro)
- Definition of Done

### QA Process
- Testing strategy (unit, integration, E2E, manual)
- Test environment management
- Bug reporting and triage workflow
- Regression testing checklist
- UAT coordination with clients

### Deployment Process
- CI/CD pipeline documentation
- Environment promotion flow (dev → staging → production)
- Release checklist
- Rollback procedures
- Monitoring and alerting setup

### Operational Runbooks
- Incident response procedure
- On-call rotation and escalation
- Client communication during outages
- Post-mortem template
- Disaster recovery plan

For detailed process templates and examples, read `references/process-templates.md`.

## Document Structure

Every process document should include:
1. **Purpose**: Why this process exists
2. **Scope**: What it covers and what it doesn't
3. **Roles**: Who does what
4. **Steps**: Numbered, actionable instructions
5. **Tools**: What software/services are used
6. **Exceptions**: When to deviate from the standard process
7. **Revision history**: When it was last updated and by whom

## Output Guidelines

When creating process documentation:
- Use numbered steps for sequential processes
- Include screenshots or diagrams where helpful
- Add checklists for complex multi-step procedures
- Link to related documents and tools
- Include contact information for escalation
- Date-stamp everything and note the owner
