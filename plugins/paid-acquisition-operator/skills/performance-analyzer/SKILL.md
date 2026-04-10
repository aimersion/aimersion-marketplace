---
name: performance-analyzer
description: >
  Analyze paid campaign performance, identify what to kill vs scale, and produce budget
  reallocation recommendations. This skill should be used when the user asks to "analyze
  our ad performance", "which campaigns are working", "what should I scale vs cut", "paid
  media performance review", "CPL analysis", "ROI of our ads", "where to reallocate budget",
  or needs to make data-driven decisions about which paid channels and campaigns to invest in.
version: 1.0.0
---

# Performance Analyzer

Cut what's not working, scale what is — systematic paid media performance management.

## The B2B Paid Performance Hierarchy

Measure in this order — never optimize for the wrong metric:
1. **Pipeline generated** — influenced pipeline value (the ultimate measure)
2. **MQL quality** — what % of leads are actually qualified
3. **Cost per MQL** — CPL ÷ MQL rate
4. **CPL** — cost per lead by channel and campaign
5. **Leading indicators** — CTR, CVR, CPM — as predictors only

## What to Measure by Funnel Stage

**TOFU campaigns:**
```
Primary: Engagement rate (0.5%+ is strong for LinkedIn)
Secondary: CPM — cost per 1000 impressions
Watch: View-through conversions (downstream influence on conversions)
Kill signal: CPM 3x+ benchmark with zero downstream conversion influence after 4 weeks
```

**MOFU campaigns:**
```
Primary: CPL (cost per lead)
Secondary: MQL rate (% of leads that qualify)
Derived: Cost per MQL = CPL ÷ MQL rate (most useful metric)
Kill signal: CPL 2x benchmark with MQL rate under 10% after 4 weeks
```

**BOFU campaigns:**
```
Primary: Cost per opportunity / pipeline influenced
Secondary: Demo show rate (% that actually attend after booking)
Watch: Close rate of demo-sourced opportunities
Kill signal: High demo volume but low show rate (signals wrong ICP) or low close rate
```

## Channel Benchmarks

| Channel | Good CPL | Acceptable CPL | Kill Threshold |
|---|---|---|---|
| LinkedIn Lead Gen | $80-150 | $150-250 | >$300 |
| LinkedIn Sponsored | $150-300 | $300-500 | >$600 |
| Google Search (branded) | $20-60 | $60-100 | >$150 |
| Google Search (category) | $60-150 | $150-250 | >$350 |
| Retargeting | $40-100 | $100-200 | >$300 |

*These are directional — benchmarks vary significantly by ACV, industry, and ICP*

## Weekly Review Process

Every Monday, review in this order:

```
1. Pacing — Are we spending on budget? (Over/under by >20% needs action)
2. Volume — How many leads/MQLs vs goal?
3. CPL by campaign — Which are efficient, which are not?
4. MQL rate by source — Which campaigns generate quality, not just volume?
5. Pipeline influenced — Did any paid leads become opportunities last week?

Decisions:
- Underpacing: Increase daily budget or expand audience
- CPL too high: Pause low performers, shift to winners
- High volume, low quality: Tighten audience targeting
- High quality, low volume: Expand audience or increase budget
```

## Budget Reallocation Model

### The 70/20/10 Rule

```
70% — Proven performers
  Campaigns with validated CPL and MQL rates
  Optimize continuously but don't change dramatically

20% — Growth bets
  Campaigns showing promise but not yet at full scale
  Enough budget to get statistically significant data (200+ leads)

10% — Experiments
  New channels, new formats, new audiences
  Small budgets, fast learning cycles, kill quickly if no signal
```

### Kill Signals (act immediately)

Kill a campaign when:
- CPL > 2x benchmark after 4+ weeks with 3+ creative tests
- MQL rate < 5% after 100+ leads
- LinkedIn CTR < 0.2% after 10,000+ impressions with 3+ creative variants
- Audience frequency > 8x/month (saturated — you've shown them everything)

### Scale Signals (increase budget 25-30% at a time)

Scale when:
- CPL is 20%+ below benchmark consistently for 3+ weeks
- MQL rate > 25%
- Pipeline influence is measurable and positive
- Audience frequency is under 4x/month (room to grow)

**Never double budget at once** — ad platform algorithms need 7-10 days to adjust to new spend levels.

## Performance Report Template (1-pager)

```
PAID ACQUISITION — WEEK OF [DATE]

SPEND: $[X] of $[Y] budget ([Z]% paced)

RESULTS:
  Leads: [X] | MQLs: [Y] ([Z]% MQL rate) | Cost per MQL: $[A]
  Pipeline influenced: $[X] from [Y] opportunities

TOP PERFORMERS: (Scale)
  [Campaign 1]: CPL $[X] / [Y]% MQL rate
  [Campaign 2]: CPL $[X] / [Y]% MQL rate

UNDERPERFORMERS: (Cut/Pause)
  [Campaign 3]: CPL $[X] / [Y]% MQL rate — [action]

NEXT WEEK:
  Move $[X] from [poor campaign] to [top performer]
  Launch [new test] at $[budget]
  Refresh creative for [campaign] — running [X] weeks without change
```
