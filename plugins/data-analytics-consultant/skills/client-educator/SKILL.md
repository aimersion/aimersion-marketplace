---
name: client-educator
description: >
  This skill should be used when the user asks to "train clients on data",
  "run a data literacy workshop", "teach stakeholders to use a dashboard",
  "build a self-service analytics program", "create training materials for
  non-technical users", "help clients understand data", or needs to improve
  the analytical capability of the people they serve.
version: 0.1.0
---

# Client Education & Data Literacy

Frameworks for building data literacy and self-service analytics capability in client organizations.

## Data Literacy Maturity Model

### Level 1 — Dependent (receives reports)
- Consumers of pre-built dashboards and reports
- Cannot modify or filter data independently
- Asks questions through the data team

### Level 2 — Informed (reads and interprets)
- Navigates dashboards independently
- Applies filters and explores pre-built views
- Understands what metrics mean and how they're calculated
- Asks better, more specific questions

### Level 3 — Analytical (builds simple analyses)
- Creates their own views and calculations
- Performs basic ad-hoc analysis
- Can connect multiple data sources in self-service tools
- Evaluates data quality issues

### Level 4 — Self-Sufficient (drives data strategy)
- Defines metrics and data requirements
- Commissions analysis from data team based on clear briefs
- Evaluates and challenges analytical methodology
- Evangelizes data-driven culture to their team

**Most clients need to move from Level 1 to Level 2.** Moving from Level 2 to Level 3 requires sustained enablement.

## The ACES Teaching Framework

**A — Anchor to their role:** Always connect data concepts to decisions the learner makes. Don't teach statistics; teach "how to know if your campaign is working."

**C — Concrete before abstract:** Show real data from their business before explaining the underlying concept. Familiarity reduces cognitive load.

**E — Error-safe practice:** Create sandbox environments where learners can explore without fear of breaking things or seeing sensitive data.

**S — Spaced repetition:** Data skills decay without use. Structure follow-up touchpoints at 1 week, 1 month, and 3 months post-training.

## Training Program Structure

### Recommended Curriculum by Audience

**Executive Audience (2-hour session):**
- How to read and challenge data (30 min)
- The 5 metrics you own and how they're calculated (45 min)
- How to request analysis: giving good briefs (30 min)
- Q&A and live dashboard walkthrough (15 min)

**Operational Managers (half-day):**
- Dashboard navigation and filtering (60 min)
- Understanding metric definitions (45 min)
- Reading trends and spotting anomalies (45 min)
- When to escalate vs. investigate independently (30 min)
- Hands-on practice session (60 min)

**Power Users / Analysts (full day):**
- Data model and source understanding (90 min)
- Tool-specific training (Tableau, Power BI, Looker, etc.) (120 min)
- Building calculated fields and custom views (90 min)
- Data quality evaluation (60 min)
- Publishing and sharing standards (30 min)

## Dashboard Adoption Strategies

**1. The "First 5 Minutes" Rule**
The first time a user opens a dashboard, they should be able to answer their most pressing question within 5 minutes. Design onboarding to get them to their first win quickly.

**2. Champions Program**
Identify 1-2 power users per team. Give them advanced training. Let them be the internal advocates and first-level support.

**3. Office Hours**
Schedule monthly 30-minute drop-in sessions for teams to bring data questions. This is cheaper than one-on-one support and builds community.

**4. Data Glossary**
Every dashboard should link to a glossary of metric definitions. When users disagree on a number, the glossary is the arbiter.

**5. "What Changed?" Communication**
When dashboards are updated or metrics are recalculated, proactively communicate what changed and why. Silence breeds distrust.

## Common Data Literacy Gaps and How to Address Them

| Gap | Symptom | Fix |
|-----|---------|-----|
| Confusing correlation and causation | "Our ads caused sales to increase" | Teach the "third variable" concept with business examples |
| Cherry-picking time periods | Showing only the best quarter | Teach why trend context matters; enforce standard date ranges |
| Ignoring sample size | Making decisions on 5 data points | Introduce the concept of "statistically significant" in plain language |
| Metric inflation | Counting the same thing multiple ways | Enforce single definitions; use a glossary |
| Averages hiding distributions | "Average deal size is fine" | Show histograms; introduce median and percentiles |

## Reference Files

- **`references/training-materials.md`** — workshop agendas, exercises, assessment templates
