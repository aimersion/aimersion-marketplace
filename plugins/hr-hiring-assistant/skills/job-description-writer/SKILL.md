---
name: job-description-writer
description: Write job descriptions that actually attract qualified candidates — with salary transparency, inclusive language, and role-specific templates for engineering, sales, marketing, operations, design, finance, customer success, and executive roles. Use this skill whenever someone asks to "write a job posting", "create a job description", "JD for", "we're hiring a", "help me post a role", "job listing for", or needs help writing any job ad, req, or role description. Also trigger when someone shares a bad job description and wants it improved.
---

# Job Description Writer

Write job descriptions that attract top candidates instead of repelling them. Research shows that salary transparency, clear role expectations, and inclusive language dramatically increase application rates — this skill bakes all of that in.

## Why This Matters for Small Teams

At a 50-person company, every hire is 2% of your workforce. A bad job description wastes weeks of your time attracting the wrong people. This skill exists because most JDs are written by copying the last one someone posted — and they're usually terrible.

## The Job Description Framework

Every effective JD has these components, in this order (candidates scan top-to-bottom and drop off fast):

### 1. Hook (2-3 sentences)
What makes this role exciting? What will the person actually build, own, or change? Lead with impact, not company boilerplate.

**Bad:** "We are a leading provider of enterprise SaaS solutions seeking a talented individual to join our dynamic team."
**Good:** "You'll own the checkout experience for 2M monthly users — from first click to confirmation email. Our conversion rate is 3.2% and your job is to make it 5%."

### 2. What You'll Do (5-7 bullets)
Concrete responsibilities, not vague platitudes. Use active verbs. Each bullet should help the candidate picture a typical week.

**Bad:** "Responsible for various marketing initiatives"
**Good:** "Run our paid acquisition across Google and Meta — $50K/month budget, currently at $45 CAC, targeting $30"

### 3. What You Bring (split into Required vs. Nice-to-Have)
This is critical. Research shows women apply to jobs when they meet 100% of qualifications; men apply at 60%. Splitting required from nice-to-have directly impacts your diversity pipeline.

**Required:** 4-6 truly non-negotiable items
**Nice-to-Have:** 3-4 things that would be a bonus

### 4. Compensation & Benefits
Always include salary range. Postings with salary ranges get 30%+ more applications. Include:
- Salary range (be honest — if the range is $120-160K, don't put $80-200K)
- Equity (if applicable — share type, vesting schedule)
- Key benefits (health, PTO, remote policy, parental leave)

### 5. About the Team & Company
Brief context on team size, who they'd work with, company stage, and what makes your culture distinctive (not generic "we work hard and play hard").

### 6. How to Apply
Clear instructions. If there's an assessment or portfolio required, say so upfront.

## Role-Specific Templates

When writing a JD, select the closest role type and adapt. Read the appropriate template from the `references/` directory:

| Role Type | Reference File | Key Considerations |
|-----------|---------------|-------------------|
| Software Engineering | `references/jd-engineering.md` | Tech stack, system scale, on-call, code review culture |
| Sales | `references/jd-sales.md` | Quota, territory, deal size, sales methodology |
| Marketing | `references/jd-marketing.md` | Channels, budget, metrics ownership, brand vs. growth |
| Operations | `references/jd-operations.md` | Process scope, tools, cross-functional coordination |
| Design | `references/jd-design.md` | Portfolio expectations, design system, research involvement |
| Finance | `references/jd-finance.md` | Systems, reporting cadence, audit involvement |
| Customer Success | `references/jd-customer-success.md` | Book size, renewal targets, technical depth |
| Executive/Leadership | `references/jd-executive.md` | Scope, P&L, board interaction, team size |
| People/HR | `references/jd-people-ops.md` | Company stage, compliance, culture building |

## Inclusive Language Checklist

Before finalizing any JD, check for these common issues:

- Replace gendered language ("he/she" → "they", "manpower" → "workforce")
- Remove unnecessary degree requirements (does this role truly need a BS/BA?)
- Avoid aggressive/competitive language that research shows deters women and underrepresented candidates ("crush it", "rockstar", "ninja", "dominate")
- Remove age-coded language ("digital native", "young and hungry", "10+ years required" when 5 would do)
- Check for ability-coded language ("must be able to stand for 8 hours" — is that actually required?)
- Remove culture-fit language that can mask bias ("beer culture", "fits our vibe")

## Output Format

```markdown
# [Role Title] — [Team/Department]
**Location:** [City, State / Remote / Hybrid] | **Type:** [Full-time/Part-time/Contract]
**Salary Range:** $[X] - $[Y] | **Reports To:** [Title]

## The Opportunity
[2-3 sentence hook — what makes this role compelling]

## What You'll Do
- [Responsibility with specifics]
- [Responsibility with specifics]
- [5-7 total]

## What You Bring
**Required:**
- [Non-negotiable skill/experience]
- [4-6 total]

**Nice to Have:**
- [Bonus skill/experience]
- [3-4 total]

## Compensation & Benefits
- **Base Salary:** $[X] - $[Y]
- **Equity:** [Details if applicable]
- **Benefits:** [Key highlights]

## About [Company]
[2-3 sentences — stage, mission, team size, what makes you different]

## How to Apply
[Clear instructions]
```

## If Connectors Available

If **~~ATS** is connected:
- Create the requisition directly in the ATS
- Pull existing JD templates to customize
- Set up the interview pipeline stages

If **~~knowledge base** is connected:
- Pull company boilerplate, benefits details, and existing role descriptions
