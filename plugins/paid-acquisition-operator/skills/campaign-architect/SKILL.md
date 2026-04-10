---
name: campaign-architect
description: >
  Design the full structure of a B2B paid acquisition program — funnel stages, channel
  selection, budget allocation, and campaign hierarchy. This skill should be used when the
  user asks to "build a paid acquisition strategy", "structure our ad campaigns", "allocate
  our ad budget", "launch a paid program", "which channels should we advertise on", "paid
  media strategy", or needs to architect a B2B paid program from scratch or restructure an
  existing one that isn't generating pipeline.
version: 1.0.0
---

# Campaign Architect

Design B2B paid acquisition programs that generate pipeline, not vanity metrics.

## The B2B Paid Acquisition Model

Most B2B paid programs fail because they run B2C tactics (drive traffic → get leads) on B2B buying cycles (6-18 months, multiple stakeholders, high ticket). The right model: use paid to compress awareness + consideration + intent stages, not just capture existing demand.

## Three-Stage Paid Architecture

### Stage 1: Create Demand (TOFU) — 30% of budget
Goal: Get in front of ICP who don't know you exist.

**Channels:** LinkedIn Sponsored Content, YouTube pre-roll, programmatic display
**What to run:** Insight/opinion content (not product ads), pain-led posts, webinar promos
**Do NOT:** Gate content, ask for demo, mention pricing
**KPI:** Reach, impressions, engagement rate, video view rate

### Stage 2: Capture Consideration (MOFU) — 45% of budget
Goal: Convert interested ICP into known leads.

**Channels:** LinkedIn Lead Gen Forms, Google Search (category keywords), retargeting
**What to run:** Gated frameworks/guides/research, webinar registrations, assessments
**KPI:** CPL, lead quality score, MQL rate from paid

### Stage 3: Accelerate Decision (BOFU) — 25% of budget
Goal: Win evaluators who are actively choosing between vendors.

**Channels:** Google Search (competitor/high-intent keywords), LinkedIn retargeting, InMail
**What to run:** Demo offers, "best [competitor] alternative" ads, case study promotions
**KPI:** Demo requests, pipeline influenced, cost per opportunity

## Channel Selection Matrix

| Channel | Best For | Min Effective Budget | ICP Precision |
|---|---|---|---|
| LinkedIn Sponsored | TOFU + MOFU, account targeting | $3K+/mo | Excellent |
| Google Search | MOFU + BOFU, intent capture | $2K+/mo | Good |
| LinkedIn Lead Gen | MOFU, low-friction leads | $2K+/mo | Excellent |
| Retargeting (Display) | MOFU + BOFU, warm audience | $1K+/mo | Good |
| LinkedIn InMail | BOFU, ABM, high-intent accounts | $1K+/mo | Excellent |

## Budget Allocation by Company Stage

**Early stage ($5K-$15K/month):**
- 60% Google Search (captures existing demand, fastest ROI)
- 30% LinkedIn (build ICP awareness)
- 10% Retargeting (maximize existing traffic)

**Growth stage ($15K-$50K/month):**
- 40% LinkedIn (scale demand creation)
- 35% Google Search (expand keyword coverage)
- 15% Retargeting (multi-touch nurture)
- 10% Testing (new channels, new formats)

**Scale stage ($50K+/month):**
- 35% LinkedIn (awareness + ABM programs)
- 30% Google (search + display)
- 20% Retargeting + ABM
- 15% Experimental

## Campaign Hierarchy

```
Account: [Company + Quarter]
  Campaign: [Channel + Stage + Objective]
    Ad Set: [Audience Segment]
      Ad: [Creative Variant A]
      Ad: [Creative Variant B]

Example:
Q2 Paid Acquisition
  LinkedIn TOFU — Brand Awareness
    VP Sales, 201-1000 employees, SaaS
      Ad A: "Why reps lose deals in month 3" (pain-led)
      Ad B: "The hidden cost of long ramp time" (stat-led)
  LinkedIn MOFU — Lead Gen
    VP Sales at Tier A accounts
      Lead form: "Sales Ramp Benchmark Report"
  Google Search BOFU — Demo
    High-intent keywords
      Ad: Demo offer + proof point
```

## Pre-Launch Checklist

- [ ] ICP audience defined with specific targeting parameters
- [ ] Ad copy written for each funnel stage
- [ ] Landing pages match ad message (message match)
- [ ] UTM parameters documented and applied
- [ ] Conversion tracking verified in analytics
- [ ] Budget caps and daily pacing configured
- [ ] Negative keyword list built (Google)
- [ ] Exclusion audiences defined (existing customers, wrong titles)
- [ ] A/B test structure documented before launch
