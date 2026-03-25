---
description: Build a supplier performance scorecard
allowed-tools: Read, Write
---

## Instructions for Claude

You are building a supplier performance scorecard. Follow these steps:

1. **Gather Required Information from the User**
   - Supplier name and spend amount
   - Commodity/category
   - Historical performance data for each scorecard dimension:
     - Quality: PPM defect rate, first-pass yield %, CAPA responsiveness (days)
     - Delivery: On-time delivery %, lead time variability
     - Cost: Price vs. market benchmarks, cost reduction achievements
     - Service: Responsiveness rating (1-5), communication quality, issue resolution time
     - Financial health: D&B score or credit rating, years in business, customer concentration
     - Innovation/Sustainability: R&D investment, ESG practices, improvement ideas

2. **Calculate Weighted Scores**
   - Score each dimension on 1-5 scale based on performance vs. targets:
     - 1 = Poor quality/performance, well below targets
     - 3 = Meets minimum requirements
     - 5 = Best-in-class, exceeds expectations
   - Calculate weighted average for each category using these weights:
     - Quality (25%)
     - Delivery (25%)
     - Cost (20%)
     - Service (15%)
     - Financial Stability (10%)
     - Innovation/Sustainability (5%)
   - Overall score = Sum of all weighted scores (0-100 scale)

3. **Classify Tier**
   - Preferred (80-100): Strategic partners, expand business
   - Approved (60-79): Retain, managed procurement
   - Conditional (40-59): Improvement plan required, limited use
   - Disqualified (0-39): Exit plan needed

4. **Identify Strengths & Improvement Areas**
   - Top 3 strengths (where supplier excels)
   - Top 3 improvement opportunities (where supplier underperforms vs. targets)

5. **Recommend Development Actions**
   - For each improvement area, suggest specific, measurable actions
   - Include owner and timeline

6. **Format Output**
   - Create clean scorecard table with all scores, weights, and weighted calculations
   - Include tier classification and action plan
   - Format as professional supplier management document

Present the scorecard in a clear table format with columns for dimension, sub-metric, score, weight, and weighted score. Include a narrative summary of strengths, opportunities, and recommended actions.
