---
name: review-process
description: This skill should be used when the user asks about "tax review", "quality review", "error checking", "review checklists", "QC review", "return review", or "common errors". Provides multi-tier review processes, common error identification by return type, and quality assurance guidance to prevent e-file rejections and ensure accurate returns.
version: 0.1.0
---

# Review Process

Help tax professionals implement quality control procedures for tax return preparation. Use this skill to catch errors before filing, prevent e-file rejections, and ensure accurate, compliant returns.

## Core Functions

### Multi-Tier Review Process

Implement a structured review workflow:

**Tier 1: Preparer Self-Review (Quality Gate 1)**
- Preparer reviews own work before submitting
- Verify all required fields completed
- Check math and formula accuracy
- Confirm documentation supports entries
- Basic consistency checks (name/SSN throughout)
- Identify missing or incomplete information

**Tier 2: Technical Reviewer (Quality Gate 2)**
- Experienced tax professional reviews return
- Verify tax law application and accuracy
- Check deductions and credits for eligibility
- Review calculations and formula logic
- Confirm documentation adequacy
- Flag unusual items for further review
- Verify entity type and form selection

**Tier 3: Final Approver (Quality Gate 3)**
- Senior CPA or manager review
- Overall reasonableness check
- Verification of prior-year items and carryforwards
- Consistency across related schedules
- Risk assessment (audit-prone items)
- Client communication and engagement review
- Signature authorization (e-file approval)

### Common Error Categories by Return Type

Organize errors by return type for targeted review:

**1040 Individual Returns:**
- Dependent eligibility and documentation
- Math errors on basic return
- Withholding and credit calculations
- Schedule consistency (1099s vs. Schedules)
- Filing status determination errors
- Missing or incorrect SSNs

**Business Returns (1120/1120-S/1065):**
- Entity classification errors
- Pass-through income allocation
- Shareholder/partner basis calculations
- Depreciation and amortization errors
- Related-party transaction issues
- Guaranteed payment calculations

**Rental Property (Schedule E):**
- Depreciation recapture calculations
- Passive activity limitation errors
- Basis tracking (additions/distributions)
- Professional vs. hobby classification
- Repair vs. improvement distinction
- Mortgage interest and property tax allocation

### Math Verification Checkpoints

Create verification processes for calculation accuracy:

**Arithmetic Checks:**
- All addition and subtraction verified
- Subtotal to total line flow-through
- Schedule totals tie to main form
- Carryover amounts match source schedules
- Calculator or spreadsheet verification

**Formula Accuracy:**
- Percentage calculations (AGI-based thresholds)
- Phase-out calculations (income limits)
- Depreciation methods and conventions
- Estimated tax safe harbor calculations
- Business profit allocation percentages

**Cross-Schedule Verification:**
- Schedule totals match main form
- Dependent SSNs consistent throughout
- Income amounts match 1099s/W-2s
- Carryforward amounts tracked correctly
- Prior-year adjustments properly applied

### E-File Rejection Prevention

Identify common e-file rejection causes:

**Format and Data Entry Errors:**
- Invalid SSNs or EINs (syntax errors)
- Missing required fields
- Incorrect date format
- Invalid character entries
- Exceeds field length limits

**Business Rule Violations:**
- Negative income when not allowed
- Dependent age or relationship errors
- Filing status inconsistencies
- Withholding greater than income
- Credit amount exceeding limitation

**Documentation and Substantiation:**
- Missing required forms (1098, 1099)
- AOTC without Form 1098-T
- Dependent care credit without provider info
- EIC claim without required documentation
- Child tax credit without valid dependent SSN

**Prior-Year and Amendment Issues:**
- Amended return duplicate issue
- Prior-year loss carryforward incorrectly applied
- Tax year mismatch
- Prior return information incorrect
- Conflicting e-file information

### Prior-Year Comparison and Flags

Develop process for identifying unusual changes:

**Income Analysis:**
- Significant increase or decrease from prior year
- Unusual income sources not present prior year
- W-2 vs. 1099 income shift
- Business income changes requiring explanation
- Suspiciously zero income when prior year had earnings

**Deduction and Credit Analysis:**
- Dramatically higher deductions than prior year
- Credits previously claimed now missing
- Home office or business deduction newly claimed
- Charitable deductions significantly increased
- Medical expenses substantially higher

**Entity-Level Changes:**
- Changes to S-Corp election
- Entity classification changes
- Accounting method changes
- Shareholder/partner changes
- Depreciation method changes

**Red Flags Requiring Investigation:**
- Multiple years of business losses
- Extremely high home office deduction
- Unusual hobby loss claims
- Very high charitable deductions relative to income
- Inconsistent dependent claims between years

### Identity Verification and AOTC/CTC Due Diligence

Verify taxpayer identity and validate dependent claims:

**Identity Verification Steps:**
- Confirm taxpayer SSN on government-issued ID
- Cross-reference taxpayer address
- Verify SSN validity (not deceased, etc.)
- Check for duplicate returns filed
- Validate phone number and contact information

**Child Tax Credit (CTC) Due Diligence:**
- Dependent SSN must be valid (not duplicate)
- Dependent relationship verified (child, stepchild, etc.)
- Dependent lived with taxpayer required time (½ year)
- Dependent age requirements met (under 17)
- Citizenship status verified
- No duplicate claims (only one SSN per dependent)

**American Opportunity Tax Credit (AOTC) Due Diligence:**
- Student's SSN valid and unique
- Enrollment status confirmed (half-time or more)
- Degree-seeking verification
- First 4 years of post-secondary education verified
- Form 1098-T received or education expense documentation
- No duplicate claims across returns

**Earned Income Credit (EIC) Due Diligence:**
- Income limits verified
- Dependent relationship and residency confirmed
- Work requirement met for all filers
- Correct filing status for EIC eligibility
- No duplicate dependent claims
- Valid SSNs for all claimants

### Consistency Checks Across Schedules

Develop systematic approach to verify schedule coordination:

**Schedule Coordination Examples:**
- Schedule C income ties to 1040 line
- Schedule D and Form 8949 total to Schedule D summary
- Schedule E income totals match Form 1040
- Business use percentage consistently applied (Schedule C, home office, vehicle)
- Depreciation schedules support balance sheet and Schedule D

**Dependent and Filing Status Consistency:**
- Dependent SSN appears on all relevant schedules
- Dependent claimed only once (not on multiple returns)
- Filing status consistent with dependent claims
- Spouse SSN matches spouse signature
- Head of household qualifying dependent documented

**Income Source Consistency:**
- All 1099s accounted for and included
- W-2 income matches employer statements
- Self-employment income supported by Schedule C
- Partnership K-1 income included on Schedule E
- Interest and dividend income matches 1099s

## Process Implementation

**When conducting return review:**

1. Determine return type and complexity level
2. Verify all required documentation received
3. Conduct Tier 1 preparer self-review
4. Route to Tier 2 technical reviewer
5. Escalate unusual items or errors
6. Conduct Tier 3 final approval review
7. Verify e-file submission readiness
8. Address any rejections or corrections needed
9. Confirm final accuracy before filing
10. Document review process and approval

## Integration

Use with **client-organizer** for documentation requirements verification and with **deduction-finder** for deduction eligibility and substantiation verification.

