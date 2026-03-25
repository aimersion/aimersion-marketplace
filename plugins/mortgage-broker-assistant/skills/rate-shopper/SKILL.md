---
name: rate-shopper
description: This skill should be used when the user asks to perform "rate comparison", "rate shopping", "lock timing", "rate analysis", "compare rates", or "rate strategy". Helps mortgage brokers build comprehensive rate comparison matrices, analyze lock timing strategies, evaluate float-down options, compare par rates with points/credits, and provide rate trend analysis for client advisement.
version: 0.1.0
---

# Rate Shopper Skill

## Overview
Assist mortgage brokers in conducting thorough rate comparisons across multiple lenders and loan products, making informed lock timing decisions, and providing data-driven rate analysis to clients.

## Core Responsibilities

### Rate Comparison Matrix Building
Construct comprehensive rate comparison frameworks that organize rate quotes by:
- Lender name and loan type
- Loan amount and loan-to-value (LTV) ratio
- Credit score tier
- Loan term (15-year, 30-year, adjustable products)
- Points and credits associated with each rate
- Par rate (zero points/credits baseline)
- Effective rate calculation (APR)

Present comparisons in clear tabular format showing rate, points/credits, and monthly payment impact.

### Lock Timing Decision Frameworks
Evaluate lock timing strategy by analyzing:
- Current market rate trends and recent movement
- Historical rate volatility patterns
- Client timeline and closing deadline constraints
- Lock period options (15, 30, 45, 60 days)
- Rate lock costs and benefits
- Fallout risk assessment
- Broker margin and profit considerations

Provide probabilistic lock recommendations based on client risk tolerance (conservative, balanced, aggressive).

### Float-Down Options Analysis
Assess float-down option value by:
- Comparing initial lock rate versus float-down terms
- Calculating break-even points for rate improvement
- Evaluating market conditions that would trigger float-down
- Comparing float-down costs versus simple relock
- Documenting float-down eligibility constraints
- Quantifying borrower benefit in basis points (bps)

### Par Rate vs. Points/Credits Tradeoffs
Analyze compensation structures by:
- Identifying par rate for client profile
- Calculating net impact of points paid or credits received
- Comparing breakeven period for point purchases
- Evaluating lender rebates and wholesale pricing
- Creating scenarios showing different point/credit combinations
- Presenting borrower cost comparisons across options

### Rate Trend Analysis
Provide market insights including:
- Recent rate movement analysis (daily, weekly, monthly trends)
- Economic indicators affecting mortgage rates
- Secondary market activity and MBS price movement
- Comparison of current rates to historical averages
- Rate forecast considerations for client advisement
- Market sentiment summary from industry sources

## Workflow

1. **Gather Client Information**: Collect loan amount, credit score, LTV, property type, occupancy, and timeline
2. **Request Rate Quotes**: Compile quotes from 3-5 lenders for relevant loan products
3. **Normalize Data**: Convert all quotes to standard comparison format with consistent assumptions
4. **Build Matrices**: Create comparison tables showing rate, points, APR, and monthly payment impact
5. **Analyze Lock Timing**: Review market trends and recommend lock strategy with rationale
6. **Evaluate Float-Down**: Calculate float-down option value if available
7. **Present Recommendations**: Deliver findings with clear action items and rationale

## Key Outputs

- Rate comparison matrix (formatted table)
- Lock timing recommendation with probability assessment
- Float-down analysis with quantified benefit
- Payment impact summary across scenarios
- Market trend briefing for client education
- Recommended lender and loan product selection

## Best Practices

- Update rate comparisons daily or when market conditions shift significantly
- Always disclose all fees, points, and credits in comparison
- Document rate lock date, pricing date, and expiration
- Maintain historical rate tracking for trend analysis
- Consider operational factors (processing time, underwriting capacity) alongside pricing
- Educate clients on difference between interest rate and APR
- Lock rates when client is ready and timeline is firm
- Monitor rate movements post-lock for float-down opportunities
