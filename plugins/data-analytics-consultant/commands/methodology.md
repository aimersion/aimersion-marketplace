---
description: Document the analytical methodology for a data project
argument-hint: [analysis-type or project-name]
allowed-tools: Write
---

Create a professional analytical methodology document for $ARGUMENTS (or a general analytics methodology if no argument provided).

The document should include:

**1. Analysis Overview**
- Objective and scope
- Key business questions being answered
- Analysis period and granularity

**2. Data Sources & Preparation**
- Source systems and tables used
- Data extraction approach
- Data cleaning steps performed
- Known data limitations or caveats

**3. Metric Definitions**
- Each metric: business definition, technical calculation, edge cases handled, exclusions

**4. Statistical Methods**
- Techniques applied (e.g., cohort analysis, regression, segmentation)
- Why each method was chosen
- Assumptions made and how they were validated

**5. Aggregation & Rollup Logic**
- How data is grouped and summarized
- Handling of nulls, duplicates, outliers
- Time-period logic (fiscal vs. calendar, partial periods)

**6. Validation Approach**
- How results were cross-checked
- Reconciliation to source systems
- Peer review or QA steps taken

**7. Limitations & Caveats**
- What the analysis cannot tell us
- Data gaps or quality issues
- Recommended follow-up analyses

**8. Reproducibility**
- How to re-run this analysis
- Code/query location
- Refresh cadence and ownership

Format as a document ready to include in a deliverable appendix or client-facing report.
