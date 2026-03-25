---
description: Build a rate comparison matrix for borrower scenario
argument-hint: loan details (amount, credit score, LTV, property type)
---

# Rate Comparison Command

Build a comprehensive rate comparison analysis for the borrower.

## Instructions

Use the borrower scenario provided in $ARGUMENTS to:

1. **Extract borrower profile**:
   - Loan amount
   - Credit score (or tier)
   - LTV (loan-to-value) ratio
   - Loan type (conventional/FHA/VA/USDA/jumbo)
   - Property type and occupancy
   - Desired loan term(s)
   - Current timeline to closing

2. **Create comparison matrix** showing:
   - Lender names (real or hypothetical competitive examples)
   - Interest rates (30-year and 15-year if requested)
   - Points/credits for each quote
   - APR (annual percentage rate)
   - Monthly payment impact (principal & interest)
   - Total estimated costs

3. **Analyze lock timing** by:
   - Assessing current market conditions
   - Recommending lock strategy (conservative/balanced/aggressive)
   - Explaining timeline considerations
   - Noting any float-down opportunities

4. **Provide recommendations**:
   - Best rate option
   - Best value option (considering fees)
   - Alternative products if applicable
   - Action timeline for borrower

5. **Format as**:
   - Professional summary with borrower details
   - Clear comparison table(s)
   - Market conditions section
   - Lock timing recommendation with rationale
   - Recommended lender/product
   - Next steps for borrower

Use the rate-comparison-matrix-template.md and lock-timing-frameworks.md from rate-shopper skill for structure and guidance.

## Output

Provide a complete rate comparison document ready to share with borrower, showing clear analysis and actionable recommendations.
