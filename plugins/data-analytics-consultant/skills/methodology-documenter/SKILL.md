---
name: methodology-documenter
description: >
  This skill should be used when the user asks to "document the methodology",
  "write up the approach", "explain how the analysis was done", "create a methods
  section", "describe the statistical approach", "document assumptions", "write
  an appendix for the analysis", or needs to explain analytical decisions to
  a technical or skeptical audience.
version: 0.1.0
---

# Methodology Documentation

Standards and templates for documenting analytical methodology in a way that is transparent, reproducible, and defensible.

## Why Methodology Documentation Matters

Good methodology documentation:
- Enables reproducibility (someone else can re-run the analysis and get the same answer)
- Builds credibility (shows rigor and intentionality)
- Creates institutional memory (the analyst who built this may leave)
- Satisfies audit requirements (some industries require methodology disclosure)
- Prevents "but what about..." questions (you've already addressed it)

## The TRED Framework

Document methodology using four elements: **Technique → Rationale → Evidence → Decisions**

**Technique:** What analytical method was used (e.g., cohort analysis, regression, A/B test)?

**Rationale:** Why was this technique appropriate for this question?

**Evidence:** What data was used, and how was it prepared?

**Decisions:** What judgment calls were made, and why? What alternatives were considered?

## Methodology Documentation Levels

### Level 1 — Executive Summary (1 paragraph)
For stakeholder reports. Non-technical. Focuses on what was done and why the approach is sound.

"We analyzed 18 months of transaction data across 125,000 customers, using cohort analysis to isolate the effect of onboarding changes from underlying market trends. Results were validated against our financial system and reviewed by the data engineering team."

### Level 2 — Methods Section (1-2 pages)
For client deliverables. Semi-technical. Covers approach, data, assumptions, limitations.

### Level 3 — Technical Specification (full document)
For internal use and reproducibility. Fully technical. Includes code references, exact queries, validation steps.

## Key Sections to Document

### Data Sources
- System names and versions
- Date ranges extracted
- Filters applied during extraction
- Row counts before and after filtering
- Known data quality issues

### Data Preparation
- Cleaning steps (null handling, deduplication, outlier treatment)
- Derived fields and their calculations
- Join logic and potential join issues
- Time zone handling
- Currency normalization

### Analytical Methods
- Method name and brief description
- Why it was chosen over alternatives
- Key parameters or settings
- Software/tools used
- Validation approach

### Assumptions
Every analysis makes assumptions. Document them explicitly:
- "We assume customers who haven't purchased in 90+ days are inactive."
- "We exclude the first 7 days after signup from activation rate calculations."
- "Revenue figures exclude refunds and chargebacks."

### Limitations
Be honest about what the analysis cannot tell you:
- Sample size limitations
- Data availability gaps
- Confounding variables not controlled for
- Generalizability constraints
- Time lag in data

## Caveats vs. Hedging

**Appropriate caveat:** "This analysis covers web traffic only; mobile app behavior is not included."

**Inappropriate hedging:** "The results might be somewhat accurate, approximately, depending on various factors..."

State limitations specifically, then stand behind your findings confidently.

## Reference Files

- **`references/methodology-templates.md`** — full methodology document templates by analysis type
