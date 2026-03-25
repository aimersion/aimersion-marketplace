---
name: deduction-finder
description: This skill should be used when the user asks to identify "missed deductions", conduct a "deduction review", explore "tax savings", use a "deduction finder", find "commonly missed" items, or "maximize deductions". Provides profession-specific and situation-specific deduction guidance with analysis of above-the-line vs. below-the-line opportunities and state-specific benefits.
version: 0.1.0
---

# Deduction Finder

Help taxpayers and tax professionals identify commonly overlooked deductions based on profession, life situation, and income sources. Use this skill to maximize legitimate tax benefits and reduce tax liability.

## Core Functions

### Profession-Specific Deductions

Identify industry-specific deductions for:
- **Medical professionals:** continuing education, professional liability insurance, medical equipment
- **Real estate professionals:** licensing costs, professional development, vehicle expenses, office equipment
- **Educators:** classroom supplies, professional development, teaching materials, tuition for job-related education
- **Military service members:** housing allowances, relocation costs, professional military education
- **Gig workers/1099 contractors:** home office, equipment depreciation, mileage, software subscriptions
- **Small business owners:** business meals (50%), home office, vehicle expenses, professional services
- **Artists/creatives:** studio expenses, materials, equipment, continuing education, portfolio development
- **Transportation workers:** vehicle maintenance, fuel (if not reimbursed), professional licensing

### Life Situation Deductions

Guide discovery of deductions by life circumstances:
- **Homeowners:** mortgage interest, property taxes, home improvements (if capital asset), homeowner insurance (not deductible but affects itemizing decision)
- **Parents:** dependent exemptions, child tax credits, childcare expenses, education credits
- **Students:** student loan interest, education credits, qualified education expenses
- **Retirees:** IRA contributions, charitable remainder trusts, required minimum distribution impacts
- **Charitable givers:** cash donations, non-cash donations, vehicle donations, charitable mileage
- **Investors:** investment expenses, advisory fees, investment losses (carryback/carryforward)
- **Divorced/separated:** alimony paid, legal fees (partially), property settlement analysis

### Deduction Categories and Rules

**Above-the-Line Deductions (reduces AGI):**
- Standard or itemized deductions
- Student loan interest (up to $2,500)
- IRA contributions (traditional)
- HSA contributions
- Self-employment tax deduction
- Educator expenses (up to $300)
- Qualifying business losses (up to limit)

**Below-the-Line Deductions (itemized):**
- Mortgage interest
- Property taxes (SALT cap $10,000)
- State income tax
- Charitable contributions
- Medical expenses (over 7.5% AGI threshold)
- Investment expenses
- Miscellaneous deductions

**Credits vs. Deductions Analysis:**
- Explain difference between credits (dollar-for-dollar) and deductions (percentage of AGI)
- Identify which benefits are more valuable based on tax situation
- Flag phase-out thresholds and income limits

### State-Specific Opportunities

Identify deductions and credits by state:
- State-specific education credits
- State charitable deduction enhancements
- State property tax deduction rules
- State business incentives
- State earned income credit supplements
- State workforce training credits

### QBI Deduction Analysis

Guide Qualified Business Income (Section 199A) deduction optimization:
- Eligibility determination (pass-through entity income)
- W-2 wage limitation calculation
- Qualified property basis limitations
- Professional service business limitations
- Deduction calculation (up to 20% of QBI)
- Phase-out thresholds and phase-in period

### Home Office Calculation Methods

Compare deduction methods:
- **Simplified method:** $5 per square foot (up to 300 sq ft = $1,500 max)
- **Regular method:** allocate portion of home expenses (rent/mortgage, utilities, insurance, maintenance, depreciation)
- Determine which method yields greater benefit
- Depreciation recapture considerations on sale

## Common Overlooked Deductions

Guide review of frequently missed opportunities:
- Dependent care FSA elections and usage
- Unreimbursed employee business expenses (limited)
- Professional development and continuing education
- Professional licensing and certification renewal
- Union dues and professional memberships
- Investment advisory and management fees
- Tax preparation and planning fees
- Legal and professional service costs
- Casualty and theft losses (narrow rules post-2017)
- Hobby loss limitations vs. business classification

## Process

When user requests deduction analysis:

1. Gather information about profession, income sources, and life situation
2. Reference detailed profession and situation guides in /references
3. Identify both obvious and commonly-missed deductions
4. Explain above-the-line vs. below-the-line impact
5. Highlight documentation requirements
6. Note phase-out thresholds and limits
7. Provide cost-benefit analysis where relevant
8. Suggest record-keeping methods

## Integration

Use with **client-organizer** for documentation requirements and with **review-process** for deduction substantiation verification.

