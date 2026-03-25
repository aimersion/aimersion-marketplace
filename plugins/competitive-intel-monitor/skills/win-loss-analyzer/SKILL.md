---
name: win-loss-analyzer
description: >
  Run structured win/loss analysis on deals to extract competitive patterns, improve sales
  effectiveness, and inform product and marketing strategy. This skill should be used when the user
  asks to "analyze a win or loss", "win/loss analysis", "why did we lose that deal", "why did we
  win", "deal retrospective", "competitive deal review", "post-mortem on a deal", "deal analysis",
  "lost deal analysis", "won deal review", or needs to understand patterns across won and lost deals.
  Also trigger when someone wants to understand why customers choose them vs. competitors, wants to
  improve win rates, or needs to brief leadership on competitive deal outcomes. Even if the user just
  describes a deal they won or lost and wants to understand what happened, this skill applies.
version: 2.0.0
---

# Win/Loss Analyzer

Turn deal outcomes into strategic intelligence. Win/loss analysis is the highest-signal source of competitive intelligence because it captures what actually drives purchase decisions — not what competitors say on their website, but what buyers experience in real evaluations.

## Why This Matters

Companies with consistent win/loss programs see 15-30% revenue increases and measurable win rate improvements. The key word is *consistent* — sporadic analysis produces anecdotes, not patterns.

## Analysis Workflow

### Step 1: Capture the Deal Context

Gather the raw material. Ask the user for:

**Deal basics:**
- Deal name/account
- Outcome: Won, Lost, or No Decision?
- If lost: Who did they choose? (competitor name, or stayed with status quo)
- Deal size and segment (SMB/mid-market/enterprise)
- Sales cycle length
- Key stakeholders involved (roles, not just names)

**The story:**
- How did the opportunity originate? (inbound, outbound, referral)
- Who else was evaluated? (full competitive set)
- What were the buyer's stated evaluation criteria?
- What happened at each stage? (key meetings, demos, POC, etc.)
- What was the final decision driver?
- Any surprises during the process?

### Step 2: Analyze Using the DECIDE Framework

Structure the analysis around six dimensions that cover the full buyer journey:

**D — Discovery & Fit**
- How well did we understand the buyer's problem?
- Did we position our solution to their specific needs?
- Were there early misalignment signals we missed?

**E — Evaluation Experience**
- How did our demo/POC compare to competitors?
- Was the evaluation process smooth or friction-filled?
- Did we make it easy to evaluate, or did we create unnecessary hoops?

**C — Champion & Stakeholders**
- Did we have a strong internal champion?
- Did we reach the economic buyer?
- Were there stakeholders we failed to engage or convince?

**I — Influence of Competition**
- What specific competitive dynamics affected the outcome?
- Did the competitor do something better, or did we do something worse?
- Was price the real differentiator, or a proxy for something else?

**D — Decision Process**
- Was the decision process transparent?
- Were there procurement/legal complications?
- Did the timeline change? If so, why?

**E — Economic & Value Case**
- Did we make a compelling business case / ROI argument?
- How did our pricing and packaging compare?
- Was total cost of ownership (including implementation, training, ongoing costs) a factor?

### Step 3: Classify the Outcome

Categorize the primary reason for the win or loss:

**Win categories:**
- Product/feature superiority
- Better fit for use case
- Stronger customer experience (sales process, support, onboarding)
- Price/value advantage
- Existing relationship / trust
- Competitor misstep

**Loss categories:**
- Product/feature gap
- Price too high (or value not demonstrated)
- Poor sales execution (missed stakeholders, weak demo, slow follow-up)
- Competitor had stronger relationship / incumbency
- Buyer went with status quo / no decision
- Timing misalignment
- Security/compliance gap

**Important**: The stated reason and the real reason often differ. "Price" is the most commonly cited loss reason, but deeper analysis usually reveals it was actually "we didn't demonstrate enough value to justify the price."

### Step 4: Extract Actionable Intelligence

For every deal, answer these four questions:

1. **What should Sales do differently?** (process changes, skill gaps, qualification improvements)
2. **What should Product know?** (feature gaps, capability requests, competitive technical advantages)
3. **What should Marketing do?** (positioning adjustments, content needs, competitive messaging gaps)
4. **What should CS/Implementation know?** (onboarding concerns, customer expectations, risk factors)

### Step 5: Deliver the Analysis

## Win/Loss Analysis Report Structure

```
# Win/Loss Analysis: [Deal Name]
Date: [date]
Outcome: [Won / Lost to [Competitor] / No Decision]
Deal Value: [amount]
Segment: [SMB / Mid-Market / Enterprise]
Sales Cycle: [duration]

## Executive Summary
[3-5 sentences: What happened, why, and the single most important lesson.
Lead with the actionable insight.]

## Deal Timeline
[Chronological key events — keep to 5-8 milestones max]
- [Date]: [Event] — [Significance]
- [Date]: [Event] — [Significance]

## DECIDE Analysis

### Discovery & Fit
[Assessment of how well we understood and addressed the buyer's needs]
**Score**: [Strong / Adequate / Weak]
**Key finding**: [one sentence]

### Evaluation Experience
[Assessment of demo, POC, and evaluation process]
**Score**: [Strong / Adequate / Weak]
**Key finding**: [one sentence]

### Champion & Stakeholders
[Assessment of our stakeholder strategy]
**Score**: [Strong / Adequate / Weak]
**Key finding**: [one sentence]

### Influence of Competition
[Assessment of competitive dynamics]
**Score**: [Strong / Adequate / Weak]
**Key finding**: [one sentence]

### Decision Process
[Assessment of how the buying process unfolded]
**Score**: [Strong / Adequate / Weak]
**Key finding**: [one sentence]

### Economic & Value Case
[Assessment of our pricing, packaging, and value story]
**Score**: [Strong / Adequate / Weak]
**Key finding**: [one sentence]

## Primary Outcome Driver
**Category**: [from classification list above]
**Explanation**: [2-3 sentences on the real reason — which may differ from the stated reason]
**Stated reason vs. real reason**: [note any divergence]

## Competitive Intelligence Extracted
[What we learned about the competitor from this deal]
- [Intel point 1 — with confidence level]
- [Intel point 2]

## Action Items

### For Sales
- [ ] [Specific action with owner and timeline]

### For Product
- [ ] [Specific action with owner and timeline]

### For Marketing
- [ ] [Specific action with owner and timeline]

### For CS/Implementation
- [ ] [Specific action with owner and timeline]

## Pattern Check
[How does this deal relate to patterns seen in other wins/losses?
Does it confirm or contradict existing assumptions?]
```

## Batch Analysis: Cross-Deal Patterns

When analyzing multiple deals together (quarterly reviews, pattern analysis):

### Pattern Detection Framework

Look for patterns across these dimensions:
- **By competitor**: Which competitors do we consistently win/lose against? Why?
- **By segment**: Do we perform differently in SMB vs. enterprise? Why?
- **By use case**: Are there use cases where we always win or always lose?
- **By deal size**: Does win rate change with deal size?
- **By source**: Do inbound vs. outbound deals have different competitive outcomes?
- **By sales cycle stage**: Where do deals go wrong — early qualification, mid-deal evaluation, or late-stage negotiation?

### Cross-Deal Report Additions

```
## Pattern Summary (N = [number of deals analyzed])

### Win Rate by Competitor
| Competitor | Deals | Wins | Losses | Win Rate | Trend |
|-----------|-------|------|--------|----------|-------|
| [Comp A] | | | | | ↑/→/↓ |

### Top 3 Win Drivers
1. [Driver] — appeared in [X]% of wins
2. [Driver] — appeared in [X]% of wins
3. [Driver] — appeared in [X]% of wins

### Top 3 Loss Drivers
1. [Driver] — appeared in [X]% of losses
2. [Driver] — appeared in [X]% of losses
3. [Driver] — appeared in [X]% of losses

### Systemic vs. One-Off Issues
**Systemic** (fix these — they affect many deals):
- [Issue]: Appeared in [X] deals. Root cause: [analysis]

**One-off** (note but don't over-index):
- [Issue]: Unique to [specific deal context]
```

## Interview Best Practices

If the user wants to set up buyer interviews for deeper win/loss insights, share these guidelines:

- **Timing**: Interview within 14 days of decision for best recall. By 30 days, narratives compress. By 60 days, nuance is lost.
- **Who conducts**: Ideally someone NOT involved in the deal — a neutral party gets more honest answers.
- **Duration**: 20-30 minutes. Respect the buyer's time.
- **Win AND loss**: Interview both — understanding why you win is as valuable as understanding why you lose.
- **No-decisions too**: Deals that stalled reveal different insights (timing, priority, internal politics).

## References

See `references/interview-guide.md` for buyer interview question templates and analysis worksheets.
