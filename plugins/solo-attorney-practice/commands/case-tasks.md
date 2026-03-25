---
description: Generate a task list for a case type
allowed-tools: [Read, Write]
---

# Generate Case Task List and Timeline

Your task: Create a comprehensive task checklist for a specific case type, tailored to the current case stage.

**Step 1: Identify case parameters**
Ask the user for:
- Case type (personal injury, family law, criminal defense, contract dispute, estate probate, real estate transaction, business formation, other)
- Current stage (intake/engagement, investigation/discovery, negotiation, litigation/court, settlement, trial, post-judgment)
- Client type (individual or business entity)
- Jurisdiction (state, if relevant for statute of limitations and procedural rules)
- Special factors (appeals, multiple parties, class action, prior litigation, etc.)

**Step 2: Generate comprehensive task list**
Using the references, pull from task-lists-by-case-type.md and create a detailed checklist that includes:
- **Immediate actions** (within 1 week) — things that can't wait
- **Short-term actions** (weeks 1-4) — initial case development
- **Medium-term actions** (weeks 4-12) — investigation and preparation
- **Long-term actions** (beyond 12 weeks) — preparation for resolution
- **Ongoing actions** — items that repeat throughout the case

For each task include:
- Task name and description
- Responsible party (attorney, paralegal, client)
- Deadline or trigger date
- Notes on why this matters
- Related statute of limitations warning if relevant

**Step 3: Integrate deadline tracking**
- Flag all statutory deadlines (filing deadlines, response deadlines, statute of limitations)
- Add court-specific deadlines if known
- Include calculation instructions for relative deadlines (e.g., "Response due within 20 days of service")
- Note which deadlines are non-waivable
- Add reminder buffer dates (typically 5 business days before actual deadline)

**Step 4: Organize by theme**
Structure tasks in logical workflow order:
1. Client and case management
2. Legal research and analysis
3. Investigation and fact development
4. Document gathering and discovery
5. Negotiation/settlement communications
6. Formal motions or pleadings
7. Settlement or trial preparation
8. Post-resolution administration

**Step 5: Add context and notes**
- Statute of limitations expiration date (calculate if dates provided)
- Court rules or local practice notes
- Forms needed for this jurisdiction
- Cross-references to applicable templates in the document drafting skill
- Estimated time commitment for major tasks
- Cost implications (filing fees, expert fees, etc.)

**Step 6: Output options**
- Provide checklist in markdown with checkboxes [ ]
- Offer as task import format for common tools (~~Todoist, ~~Asana, ~~Monday.com)
- Include timeline visualization (early, mid, late phases)
- Filename: `tasks-[casetype]-[stage].md`

Include warnings about:
- Non-waivable vs. waivable deadlines
- Consequences of missing key dates
- State bar rules on diligence and communication
- Recommended review schedule with client
