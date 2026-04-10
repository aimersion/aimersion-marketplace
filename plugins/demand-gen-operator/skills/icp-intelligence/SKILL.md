---
name: icp-intelligence
description: >
  Build and refine ICP (Ideal Customer Profile) segments from pipeline data, closed-won deals,
  and win/loss signals. This skill should be used when the user asks to "define our ICP",
  "identify target accounts", "build a pain-point database", "analyze win/loss patterns",
  "refine our messaging pillars", "segment our market", or needs to understand who to target
  and why they buy.
version: 1.0.0
---

# ICP Intelligence

Build data-driven ICP definitions, messaging pillars, and pain-point databases from real pipeline and customer signals.

## What This Skill Does

ICP intelligence is the foundation of all demand generation. Vague targeting wastes budget. Precise ICP definition means your content, ads, and outreach reach people with actual buying intent and budget.

## Inputs to Gather

Ask the user for whichever inputs they have available:

**Pipeline signals:**
- Closed-won deals: company size, industry, tech stack, deal size, sales cycle length
- Closed-lost deals: why lost (price, competitor, no decision, wrong fit)
- Current pipeline: what stage, what's stalling, what's converting

**Customer signals:**
- Top 3 customers: what made them buy, what pain were they solving, who championed internally
- Churned customers: what went wrong, what they switched to
- Expansion customers: what triggered upsell, what outcome did they achieve

**Qualitative signals:**
- What phrases do buyers use to describe their pain (exact words)
- What they tried before finding you
- What made them not look at competitors

## ICP Segment Framework

Build segments across these dimensions:

### Firmographic Profile
```
Company size: [employees / revenue range]
Industry verticals: [primary / secondary]
Geography: [regions / countries]
Business model: [B2B / B2C / enterprise / SMB]
Growth stage: [startup / scaleup / enterprise]
Tech stack indicators: [tools that signal fit]
```

### Psychographic Profile (decision-maker level)
```
Title / role: [who buys vs who uses vs who blocks]
Tenure in role: [new hire vs established]
Career motivation: [prove ROI / reduce risk / innovate / cut costs]
Information consumption: [LinkedIn / podcasts / conferences / peer communities]
Buying trigger: [what event causes them to start looking]
```

### Pain-Point Database Structure

For each ICP segment, build a pain database with three levels:

| Pain Level | Pain Description | Business Impact | Emotional Impact |
|---|---|---|---|
| Surface | What they say in meetings | Metric they're measured on | How it makes them feel |
| Business | Underlying process/system failure | Revenue/cost impact | Career risk |
| Root | Why the underlying failure exists | Strategic consequence | Identity threat |

**Example (B2B SaaS sales leader):**
| Level | Pain | Business Impact | Emotional Impact |
|---|---|---|---|
| Surface | "Our ramp time is too long" | 6+ months to first quota | Frustrated, behind |
| Business | "We can't scale rep quality" | Revenue predictability gone | Embarrassed in QBRs |
| Root | "We hired for headcount, not capability" | Growth ceiling hit | Fear of being seen as the problem |

## Messaging Pillars Framework

Build 3-5 messaging pillars that map to ICP pain levels:

```
Pillar 1: [Pain-led — speaks to surface pain]
Headline: [What they're experiencing]
Proof: [How you solve it]
Proof point: [Specific outcome/metric]

Pillar 2: [Outcome-led — speaks to business impact]
Headline: [What they want to achieve]
Proof: [How you get them there]
Proof point: [Customer result]

Pillar 3: [Insight-led — challenges their current thinking]
Headline: [Reframe their problem]
Proof: [Why conventional approach fails]
Proof point: [Data or case study]
```

## Account Scoring Model

Score accounts 1-10 on:
- Firmographic fit (size, industry, stage): 40% weight
- Technographic signals (complementary tools): 30% weight
- Intent signals (content consumption, hiring patterns): 20% weight
- Timing signals (funding, leadership changes): 10% weight

**Tier A (8-10):** Direct outreach + targeted content + paid ABM
**Tier B (5-7):** Content nurture + retargeting
**Tier C (1-4):** Mass content only

## Output Format

Always deliver:
1. **ICP Segment Card** — firmographic + psychographic profile
2. **Pain-Point Database** — 3-tier pain map per segment
3. **Messaging Pillars** — 3-5 pillars with headlines and proof
4. **Account Scoring Criteria** — what makes a Tier A vs B vs C account
5. **Content Direction Brief** — what content themes resonate with this ICP
6. **Exclusion Criteria** — who is definitively NOT a fit (saves everyone time)
