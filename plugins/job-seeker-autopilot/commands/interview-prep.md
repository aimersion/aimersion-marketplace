---
description: Full interview preparation for a specific company and role
argument-hint: [company name, role, interview stage/type]
allowed-tools: WebSearch, Read, Write
---

Prepare comprehensively for an upcoming job interview.

Parse interview details from `$ARGUMENTS`:
- Company name
- Role title
- Interview stage (phone screen / HM / panel / final / case)
- Who you're meeting (if known)
- Date/time (to set urgency level)

## Prep Sequence

### Step 1: Company Brief
Use company-researcher to build a fresh brief:
- Recent news to reference in the interview
- Culture signals and what the company cares about
- Smart questions to ask them

### Step 2: Role Analysis
Analyze the job description:
- Core competencies being evaluated
- Likely questions based on the role and stage
- What "great" looks like for this specific role

### Step 3: Story Bank Review
Use interview-coach to:
- Surface the 3-4 most relevant stories from the user's background for this role
- Help structure them in STAR+ format
- Practice weak points in the narrative

### Step 4: Question Preparation
Generate a tailored set of:
- 8-10 expected questions for this stage + role
- Model answers using the user's actual experience
- 5 strong questions to ask them (based on company research)

### Step 5: Mock Interview (optional)
If user wants to practice: run through 5 questions with real-time feedback on structure, specificity, and length.

### Step 6: Interview Day Checklist
Deliver a ready-to-print prep sheet:
- Key talking points
- Stories to tell
- Questions to ask
- Logistics checklist

## Output
```
INTERVIEW PREP — [Company] [Role] | [Date]
Stage: [Stage] | Meeting: [Person/Panel]

COMPANY BRIEF (key points for this interview):
[Condensed from company-researcher]

LIKELY QUESTIONS & STRONG ANSWERS:
[8-10 Q&As tailored to this role and stage]

STORIES TO TELL:
[3-4 STAR stories mapped to expected questions]

QUESTIONS TO ASK THEM:
[5 specific, researched questions]

CHECKLIST:
[Day-of logistics and prep items]
```
