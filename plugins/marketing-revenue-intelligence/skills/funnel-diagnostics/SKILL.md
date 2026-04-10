---
name: funnel-diagnostics
description: >
  Identify exactly where leads drop off in the marketing-to-revenue funnel, quantify the
  revenue impact of each drop-off, and prioritize fixes by ROI. This skill should be used
  when the user asks to "why aren't leads converting", "funnel analysis", "where are we
  losing leads", "conversion rate by stage", "funnel health check", "MQL to SQL rate is low",
  or needs to systematically diagnose which stage of the funnel is leaking the most revenue
  so they can fix the right thing first.
version: 1.0.0
---

# Funnel Diagnostics

Find the leak, quantify it in revenue terms, fix the highest-impact stage first.

## The B2B Funnel Model

```
Visitor → Lead → MQL → SQL → Opportunity → Closed Won

Each stage has:
- Conversion rate (% moving to next stage)
- Time-to-convert (average days)
- Drop-off rate (% exiting here)
- Drop-off reason (why they don't progress)
```

## Benchmark Conversion Rates

| Stage | Early Company | Growth Stage | Mature |
|---|---|---|---|
| Visitor → Lead | 1-3% | 3-7% | 5-10% |
| Lead → MQL | 10-20% | 20-35% | 30-50% |
| MQL → SQL | 20-40% | 30-50% | 40-60% |
| SQL → Opportunity | 50-70% | 60-80% | 70-90% |
| Opportunity → Close | 15-25% | 20-35% | 25-40% |

## Diagnostic Process

### Step 1: Map Your Actual Funnel

Fill in real numbers:
```
Monthly website visitors: [X]
  → Leads (form fills): [Y]  Conversion: [Y/X]%

Monthly leads: [Y]
  → MQLs: [Z]  Conversion: [Z/Y]%

Monthly MQLs: [Z]
  → SQLs: [A]  Conversion: [A/Z]%

Monthly SQLs: [A]
  → Opportunities: [B]  Conversion: [B/A]%

Monthly opportunities: [B]
  → Closed-Won: [C]  Conversion: [C/B]%

Average deal value: $[D]
Monthly marketing-sourced revenue: $[C x D]
```

### Step 2: Find the Biggest Gap vs Benchmark

Compare each conversion rate to benchmarks. The stage with the largest negative gap vs benchmark is your highest-priority fix.

**Triage by stage:**

```
Visitor → Lead below benchmark (<2%):
  Problem: Landing pages, offers, or forms not converting
  Fix path: CRO audit — headline, form, CTA (see conversion-optimizer)

Lead → MQL below benchmark (<15%):
  Problem: Wrong audience (traffic quality issue) OR scoring model too strict
  Fix path: Tighten targeting criteria OR review scoring thresholds

MQL → SQL below benchmark (<25%):
  Problem: Sales not working leads fast enough OR MQL definition too loose
  Fix path: Measure lead response time; review MQL criteria with sales

SQL → Opportunity below benchmark (<50%):
  Problem: Discovery call quality OR wrong ICP reaching SQL stage
  Fix path: Sales process review + ICP tightening

Opportunity → Close below benchmark (<20%):
  Problem: Sales execution, competitive positioning, or pricing
  Fix path: Win/loss analysis, objection handling content
```

### Step 3: Revenue Impact Model

Calculate what a 10% improvement at each stage is worth annually:

```
Formula:
Current monthly revenue = visitors × (v→l%) × (l→mql%) × (mql→sql%) × (sql→opp%) × (opp→close%) × ACV

Revenue at 10% improvement = recalculate with one stage multiplied by 1.1

Example:
Current: 10,000 visitors × 3% → 300 leads × 20% → 60 MQLs × 30% → 18 SQLs 
× 60% → 10.8 opps × 25% → 2.7 deals × $30K = $81K/month

10% improvement in MQL→SQL (33% instead of 30%):
→ 19.8 SQLs × 60% → 11.9 opps × 25% → 2.97 deals × $30K = $89.1K/month
Delta: +$8.1K/month = +$97K/year

Fix the stage with the biggest delta first.
```

## Scenario-Specific Diagnostics

### "We have lots of leads but few MQLs"
Diagnostic questions:
- What's the title/company distribution of our leads vs ICP?
- Which lead sources generate the highest MQL rate?
- How many leads have we manually reviewed that should have qualified?

Likely causes:
1. Lead magnet too broad — attracting non-ICP
2. Scoring model too strict — qualified leads not reaching threshold
3. Missing behavioral data — not tracking enough to score properly

### "Good MQL volume but low SQL rate"
Diagnostic questions:
- What's average time from MQL to first sales contact?
- What % of MQLs does sales attempt to contact within 24 hours?
- What rejection reasons does sales give? Are they consistent?

Likely causes:
1. Speed-to-lead problem — 24+ hours before first contact
2. MQL definition too loose — marketing inflating volume
3. Handoff gap — leads fall through the CRM

### "Good pipeline, low close rate"
Diagnostic questions:
- What's the firmographic profile of deals that close vs deals that don't?
- At what stage do most lost deals exit? (Discovery? Proposal? Decision?)
- What objections appear most in lost deals?

Likely causes:
1. ICP fit issues in pipeline
2. Competitive positioning weakness (losing to a specific competitor)
3. Sales process breakdown (proposal stage abandonment)
4. Pricing/value disconnect

## Funnel Health Scorecard

Track monthly and trend over 6 months:

```
Stage              | Rate  | Benchmark | Status
Visitor → Lead     | 3.2%  | 3-7%      | OK
Lead → MQL         | 18%   | 20-35%    | Watch
MQL → SQL          | 28%   | 30-50%    | Watch
SQL → Opportunity  | 65%   | 60-80%    | OK
Opp → Close        | 22%   | 20-35%    | OK

Trend: [Improving / Stable / Declining] per stage
```
