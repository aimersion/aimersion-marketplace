---
name: candidate-scorecard
description: Generate candidate evaluation scorecards with role-specific rubrics, weighted competencies, behavioral anchors at each score level, and side-by-side candidate comparison matrices. Use this skill when someone asks for a "scorecard", "rubric", "evaluation form", "candidate comparison", "interview feedback form", "how to evaluate candidates", "hiring decision matrix", or needs a structured way to compare candidates after interviews. Also trigger when someone says they're struggling to choose between candidates or their team can't agree on a hire.
---

# Candidate Scorecard

Create scorecards that turn subjective gut feelings into structured, defensible hiring decisions. This is especially critical at small companies where there's no recruiting team to enforce consistency — the scorecard IS your process.

## Scorecard Components

### 1. Role Header
- Position, level, department, hiring manager
- Date, candidate name, interviewer name
- Interview round and type

### 2. Competency Ratings

Use a 4-point scale (not 5 — it eliminates the meaningless middle):

| Score | Label | Decision Signal |
|-------|-------|-----------------|
| 1 | Does Not Meet | Likely disqualifying for this competency |
| 2 | Partially Meets | Concerns that need discussion |
| 3 | Meets Expectations | Would succeed in this area |
| 4 | Exceeds Expectations | Would raise the bar for the team |

Each competency needs:
- **Definition:** One sentence explaining what this competency means for this role
- **Behavioral anchors:** What a 1, 2, 3, and 4 looks like (specific to this role)
- **Evidence field:** Space for the interviewer to write specific observations, not just a number
- **Weight:** High, Medium, or Low importance for this role

### 3. Overall Assessment

After scoring all competencies:
- **Weighted score calculation** (High = 3x, Medium = 2x, Low = 1x)
- **Overall recommendation:** Strong Hire / Hire / No Hire / Strong No Hire
- **Key strengths** (cite specific evidence from the interview)
- **Key concerns** (cite specific evidence)
- **Would you want this person on your team?** (gut check question — valid data point alongside the structured scores)

### 4. Candidate Comparison Matrix

When comparing multiple candidates for the same role:

```
## Candidate Comparison: [Role]

| Competency (Weight) | [Candidate A] | [Candidate B] | [Candidate C] |
|---------------------|---------------|---------------|---------------|
| [Competency 1] (High) | 3 — [brief note] | 4 — [brief note] | 2 — [brief note] |
| [Competency 2] (High) | 3 | 3 | 4 |
| [Competency 3] (Med) | 2 | 3 | 3 |
| **Weighted Total** | **X.X** | **X.X** | **X.X** |
| **Recommendation** | Hire | Strong Hire | No Hire |

### Decision Summary
[Who to hire and why, acknowledging tradeoffs]

### Risk Factors
- [Candidate A]: [What could go wrong]
- [Candidate B]: [What could go wrong]
```

## Pre-Built Competency Sets by Role Family

Rather than starting from scratch, use these as starting points:

**Engineering Roles:**
Technical skills, system design, code quality, debugging, collaboration, communication, ownership

**Sales Roles:**
Discovery/qualification, objection handling, pipeline management, relationship building, business acumen, resilience

**Marketing Roles:**
Strategic thinking, analytical skills, creative execution, channel expertise, cross-functional collaboration, project management

**Operations Roles:**
Process design, analytical rigor, stakeholder management, prioritization, documentation, systems thinking

**Customer-Facing Roles:**
Empathy, product knowledge, problem-solving, communication clarity, de-escalation, proactiveness

**Leadership Roles:**
Vision and strategy, talent development, decision-making, organizational influence, execution, culture building

See `references/competency-frameworks.md` for detailed behavioral anchors for each.

## Anti-Bias Safeguards

Build these into every scorecard:

1. **Score before discussing** — Interviewers submit scores independently before any group debrief
2. **Evidence required** — A score without a specific observation is not valid
3. **Calibrated rubrics** — Behavioral anchors prevent "I know a 4 when I see one" reasoning
4. **Flag vague concerns** — "Not a culture fit" requires specifics about which competency is lacking
5. **Track patterns** — If a particular interviewer consistently rates certain demographics lower, that's signal

## Output

Produce a complete, ready-to-use scorecard as a markdown document or .docx file (if requested), including all sections above, pre-filled with the relevant competencies and anchors for the specific role.
