---
name: structured-interviewing
description: Design complete structured interview processes with behavioral, technical, and culture-add question banks, STAR-method scoring rubrics, interviewer calibration guides, and debrief frameworks. Use this skill whenever someone asks to "set up an interview process", "interview questions for", "how should we interview", "interview loop for", "design an interview", "panel interview", "behavioral questions", "technical interview", "culture fit interview", or needs help making their hiring process more consistent and less biased. Also use when someone says their interviews feel random or they keep making bad hires.
---

# Structured Interviewing

Design interview processes that actually predict job performance. Meta-analyses show structured interviews nearly double predictive validity compared to unstructured ones, reduce bias, and improve candidate experience. This skill gives you everything you need to run interviews like a company 10x your size.

## Why Structure Matters

At a 50-person company, the cost of a bad hire is devastating — typically 30-50% of the role's annual salary in direct costs, plus months of lost productivity and team morale damage. Structured interviews are the single highest-ROI improvement most small companies can make to their hiring.

## The Interview Loop Architecture

Every role needs an interview loop — a sequence of conversations that collectively evaluate all the competencies you care about. Here's the framework:

### Step 1: Define Role Competencies (4-6 per role)

Before writing a single question, define what you're actually evaluating. Read `references/competency-frameworks.md` for role-specific competency maps.

| Competency Category | Examples |
|---------------------|----------|
| **Technical/Functional** | Coding ability, financial modeling, design thinking |
| **Problem-Solving** | Analytical reasoning, ambiguity tolerance, debugging |
| **Communication** | Written clarity, presentation, stakeholder management |
| **Collaboration** | Cross-functional work, conflict resolution, feedback |
| **Leadership** | Decision-making, delegation, mentoring (even for ICs) |
| **Role-Specific** | Customer empathy, sales acumen, operational rigor |

### Step 2: Design the Interview Loop

A typical loop for a mid-level hire at a growing company:

| Round | Format | Duration | Evaluates | Interviewer |
|-------|--------|----------|-----------|-------------|
| 1. Recruiter/Hiring Manager Screen | Video call | 30 min | Basic fit, motivation, logistics | Hiring manager |
| 2. Technical/Functional | Exercise + discussion | 60 min | Core job skills | Senior IC in the function |
| 3. Behavioral | Structured behavioral | 45 min | Collaboration, problem-solving, growth | Cross-functional peer |
| 4. Culture-Add | Conversational structured | 30 min | Values alignment, team dynamics | Team member |
| 5. Hiring Manager Deep-Dive | Discussion | 45 min | Role vision, growth, decision-making | Hiring manager |

Adjust based on seniority:
- **Junior roles:** Skip round 5, shorten round 2 to a take-home or pair exercise
- **Senior/Staff roles:** Add a system design or case study round
- **Leadership roles:** Add a skip-level panel and a presentation round

### Step 3: Build the Question Bank

For each competency, create questions using three formats:

**Behavioral Questions (STAR Method)**
These ask about past behavior — the best predictor of future behavior.
- "Tell me about a time you [competency-related situation]"
- Follow-up: "What specifically did you do?" "What was the outcome?" "What would you do differently?"

**Situational Questions**
These present a hypothetical relevant to the role.
- "Imagine you [realistic scenario]. How would you approach it?"
- Follow-up: "What would you do if [complication]?" "How would you prioritize?"

**Technical/Functional Questions**
Role-specific skill evaluation — coding challenges, case studies, portfolio reviews, writing samples.

See `references/question-banks.md` for 100+ ready-to-use questions organized by competency and seniority level.

### Step 4: Create Scoring Rubrics

Every question gets a 1-4 rubric (not 1-5 — odd scales create a "safe middle"):

| Score | Label | Meaning |
|-------|-------|---------|
| 1 | Does Not Meet | No evidence of the competency; concerning gaps |
| 2 | Partially Meets | Some evidence but significant gaps or inconsistency |
| 3 | Meets | Clear, consistent evidence; would perform well |
| 4 | Exceeds | Exceptional evidence; would elevate the team |

For each score level, provide **behavioral anchors** — specific descriptions of what a 1, 2, 3, or 4 answer looks like for that question. This is what turns a scorecard from theater into a real decision-making tool.

**Example Rubric for "Tell me about a time you had to influence a decision without authority":**

| Score | Behavioral Anchor |
|-------|-------------------|
| 1 | Cannot provide an example, or describes simply escalating to their manager |
| 2 | Describes one attempt; limited stakeholder awareness; outcome unclear |
| 3 | Clear example with multiple stakeholders; adapted approach based on audience; achieved desired outcome |
| 4 | Navigated complex political dynamics; built coalition; established a repeatable process; influenced organizational change |

### Step 5: Calibration

Before the interview loop starts, hold a 30-minute calibration session:
1. Review the competencies and rubric together
2. Score 1-2 sample answers as a group
3. Discuss disagreements — this surfaces hidden assumptions
4. Confirm the "bar" — what score profile leads to a hire?

### Step 6: Debrief Framework

After all interviews, run a structured debrief:

1. **Independent scoring first** — Every interviewer submits their scorecard before the debrief meeting. This prevents anchoring bias.
2. **Round-robin share** — Each interviewer shares their scores and top observations (2 minutes each, no interruptions).
3. **Discussion** — Discuss score discrepancies (>1 point difference on any competency).
4. **Decision** — Hiring manager makes the final call. Options: Strong Hire, Hire, No Hire, Strong No Hire.

**Red flags to discuss explicitly:**
- Any interviewer scored a "1" on any competency
- Scores diverge by 2+ points on the same competency
- "Culture fit" concerns that might mask bias
- Enthusiasm without evidence ("I just really liked them")

## Output

When asked to design an interview process, produce:

```markdown
## Interview Process: [Role Title]

### Competencies Being Evaluated
| # | Competency | Weight | Interview Round |
|---|-----------|--------|----------------|
| 1 | [Competency] | [High/Med] | Round [X] |

### Interview Loop
[Table with rounds, format, duration, evaluator]

### Question Bank by Round
#### Round [X]: [Name]
**Competency: [Name]**
Q1: [Question]
- Follow-up: [Probe]
- Rubric: [1-4 anchors]

### Scorecard Template
[Printable/fillable scorecard]

### Debrief Template
[Structured debrief agenda]

### Candidate Communication Templates
- [Scheduling email]
- [Rejection email — specific and kind]
- [Moving forward email]
```
