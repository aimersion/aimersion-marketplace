---
description: Draft an offer letter with compensation breakdown and negotiation guidance
argument-hint: "<role, level, and candidate name>"
---

# /draft-offer

Draft a complete offer letter with compensation breakdown, benefits summary, and negotiation guidance for the hiring manager. See the **offer-negotiation** skill for the full negotiation playbook.

## Usage

```
/draft-offer $ARGUMENTS
```

## What I Need From You

- **Role and title**: What position?
- **Level**: Junior, Mid, Senior, Staff, etc.
- **Candidate name**: Who's the offer for?
- **Location**: Where will they be based? (affects comp and tax)
- **Compensation**: Base salary, equity, signing bonus (if applicable)
- **Start date**: When should they start?
- **Hiring manager**: Who will they report to?
- **Special circumstances**: Contractor conversion? Relocation? Competing offer to beat?

If you don't have all details, I'll help you think through them using market benchmarks.

## Output

```markdown
## Offer Letter Draft: [Role] — [Level]
**Candidate:** [Name] | **Start Date:** [Date]

### Compensation Package
| Component | Details | Annual Value |
|-----------|---------|-------------|
| Base Salary | $[X]/year | $[X] |
| Equity | [X shares], [vesting schedule] | $[X] (est.) |
| Signing Bonus | $[X] | $[X] |
| Target Bonus | [X]% of base | $[X] |
| **Total First-Year Comp** | | **$[X]** |

### Benefits Highlights
[Key benefits — health, PTO, 401k, remote stipend, etc. with estimated value]

### Terms
[Start date, reporting structure, location, employment type]

### Offer Letter Text
[Complete, professional offer letter ready to send]

### Hiring Manager Cheat Sheet
- Where this offer sits in the comp band
- Room for negotiation (and what levers to pull)
- Talking points for the verbal offer call
- How to handle common negotiation scenarios
- Offer expiration recommendation
```

## If Connectors Available

If **~~HRIS** is connected: Pull comp bands and benefits details automatically
If **~~ATS** is connected: Update candidate status and attach offer letter
If **~~email** is connected: Send the offer letter directly
