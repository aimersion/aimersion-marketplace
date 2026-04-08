---
name: cover-letter-writer
description: >
  Write a compelling, personalized cover letter for a specific job application. Trigger when the user
  says "write a cover letter", "draft a cover letter", "I need a cover letter for", "write my cover letter",
  "create a cover letter", or when preparing a complete application package for a role.
  Also trigger when the user asks if they need a cover letter (answer: yes, when the role or company
  is important enough to spend the extra 10 minutes).
version: 1.0.0
---

# Cover Letter Writer

Write cover letters that actually get read — specific, compelling, and human. Most cover letters are ignored because they're generic. These won't be.

## The Cover Letter Philosophy

A cover letter has ONE job: make the reader want to meet you.

It does NOT need to summarize your resume. It needs to answer three questions the hiring manager has:
1. **Why this role?** (Not "I'm passionate about..." — specific and credible)
2. **Why this company?** (Show you know them, not generic praise)
3. **Why you?** (Your single most relevant credential for THIS job)

**Length**: 3-4 paragraphs max. Under 300 words is fine. If you can't say it in 300 words you haven't focused enough.

## Inputs Required

1. **The job posting** — full text or URL
2. **The candidate's background** — resume or key facts
3. **Company research** — use company-researcher output if available, or pull key facts
4. **Any personal connection**: Referral name, event where you met someone, specific product experience
5. **Tone preference**: Formal / conversational / startup casual

## Research Before Writing

Before drafting, pull these facts about the company:
- Recent news (funding, product launch, expansion, leadership change)
- Their stated mission/values (use their exact language)
- Specific product or initiative relevant to this role
- Any connection between the candidate's work and the company's work

This research is what makes a cover letter feel real instead of templated.

## Cover Letter Structure

### Opening (1-2 sentences) — Hook, not throat-clearing

**Never start with:**
- "I am writing to express my interest in..."
- "I was excited to see your posting for..."
- "My name is [Name] and I am applying for..."

**Start with one of these patterns instead:**

**The Credential Hook:**
> "In my last role at [Company], I [specific achievement directly relevant to what they need]. That's why [Company Name]'s [specific role/initiative] caught my attention."

**The Connection Hook:**
> "[Mutual contact] suggested I reach out — she thought my background in [X] would be a strong fit for what you're building with [specific initiative]."

**The Insight Hook:**
> "Most [role] teams I've seen struggle with [specific problem this company has]. At [previous company] I solved it by [specific approach] — and I'd like to bring that to [Company]."

**The Timing Hook:**
> "I've been following [Company]'s [recent news/product launch] closely, and the [Head of X] role opening feels like the right moment to reach out."

### Body Paragraph 1 — The Proof (3-4 sentences)

Your single most relevant career story for THIS role. Use the STAR format briefly:
- **Situation**: Where you were, what the challenge was
- **Action**: What YOU specifically did (not the team)
- **Result**: The number, the outcome, the impact

This paragraph should make the hiring manager think: "That's exactly what we need someone to do here."

```
Example:
"At [Company], I inherited a marketing pipeline that was 60% dependent on 
a single channel going into a key growth phase. Over 18 months, I diversified 
across three new channels, reduced CAC by 34%, and grew qualified pipeline 
from $4M to $11M — while keeping the existing channel healthy. That kind 
of cross-channel orchestration is exactly what the JD is asking for."
```

### Body Paragraph 2 — The Company Signal (2-3 sentences)

Show specific knowledge of the company. This is what separates you from 90% of applicants.

Reference ONE of:
- A specific product feature or recent launch
- A business challenge you read about / inferred from their growth stage
- Something their CEO/leadership said publicly
- How your experience maps to their specific market position

```
Example:
"What draws me specifically to [Company] is the move into enterprise you 
announced last quarter. I spent three years building the enterprise motion 
at [Previous Company] from scratch — from zero process to $8M ARR in new 
enterprise logos — so I understand both the opportunity and the operational 
challenges you're about to hit."
```

### Closing (2-3 sentences) — Clear, confident, no begging

**Don't:**
- "I would be grateful for the opportunity..."
- "Please let me know if I'm a good fit..."
- "I look forward to hopefully hearing from you..."

**Do:**
- Be confident about the fit
- State a clear next step
- Make it easy for them to say yes

```
Example:
"I'm confident I can hit the ground running here and drive the kind of 
pipeline results you're targeting. I'd welcome 30 minutes to discuss — 
[Name] has my availability, or feel free to grab time at [calendly link]."
```

## Variations by Scenario

### Referral Application
Lead immediately with the referral name in sentence 1. It's your most valuable asset — don't bury it.

### Career Change
Acknowledge it briefly, then bridge hard: "While my background is in [X], the skills that drive success there — [specific transferable skills] — are exactly what this role requires, and I've spent the last [X] months building toward this transition by [specific action]."

### Overqualified Signal
Address it if obvious: "I'm aware this role is a step back in title from my current position. I'm making that choice deliberately because [specific reason about this company/mission/stage that's worth it to them believing]."

### Gap in Employment
Don't mention in cover letter — address only if directly asked. The cover letter is not the place.

### Startup / Founder / Early Stage
Go more casual. Drop the formal structure. These companies often value self-awareness and hustle over polish. Be direct about your scrappiness.

## Output Format

Deliver:
1. **Cover letter** — ready to paste, with [Name], [Date], [Hiring Manager Name] placeholders filled where known
2. **Email subject line** — for email applications: `[Role Title] — [Your Name] | [1 differentiating credential]`
3. **30-word LinkedIn message version** — for InMail or connection request accompanying the application
4. **Variation flag** — note if any assumptions were made about company/role that user should verify

```
COVER LETTER — [Company] [Role]

[Your Name]
[Date]

[Hiring Manager Name or "Hiring Team"],

[Letter body]

[Your Name]
[Phone] | [Email] | [LinkedIn]

---
EMAIL SUBJECT: Senior PM — Jane Smith | Scaled PLG from 0 to $12M ARR at SaaS Co

LINKEDIN INMAIL (28 words):
"Hi [Name] — I just applied for the Senior PM role. Led PLG 0-$12M at 
[Company]. Happy to share context on the fit if useful."
```
