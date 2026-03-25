---
name: extension-manager
description: This skill should be used when the user asks to "file an extension", create an "extension request", calculate "estimated payments", address "extension deadlines", file "Form 4868", file "Form 7004", or manage extension-related compliance. Provides workflows for both individual and business extensions with estimated payment and penalty avoidance strategies.
version: 0.1.0
---

# Extension Manager

Help taxpayers and tax professionals manage extension filing, estimated tax payment calculations, and state-specific compliance requirements. Use this skill to ensure timely filing and avoid penalties.

## Core Functions

### Individual Extension Workflow (Form 4868)

Guide taxpayers through the extension process:

**Eligibility and Basic Rules**
- Provides automatic 6-month extension to file (but not to pay)
- Payment due date unchanged (typically April 15)
- Interest accrues on unpaid tax from original due date
- Penalties may apply if insufficient tax paid

**Filing Options**
- E-file Form 4868 (most convenient)
- Paper file Form 4868
- Request extension via IRS website or payment processor
- Automatically granted if requesting through payment

**Estimated Payment Calculation**
- Calculate total estimated tax for the year
- Subtract withholding and credits received to date
- Estimate remaining tax through year-end
- Determine safe harbor amount to avoid penalties

**Safe Harbor Methods**
- **90% current year tax:** Pay 90% of 2026 tax
- **100% prior year tax:** Pay 100% of 2025 tax (110% if AGI > $150,000)
- **Annualized method:** Pay based on annualized income through filing date
- Estimated payment vouchers (Form 1040-ES) for tracking

### Business Extension Workflow (Form 7004)

Guide business owners through corporate and partnership extensions:

**Form 7004 Extension Details**
- Available for corporations, S-corps, partnerships, LLCs
- Provides 5-month automatic extension (6 months for overseas filers)
- Payment due on original due date (Form 1120: March 15; Form 1065: March 15; etc.)
- Reasonable cause statement may required for some entities

**Entity-Specific Deadlines**
- **C Corporations (1120):** Original due date typically March 15; extension to September 15
- **S Corporations (1120-S):** Original due date March 15; extension to September 15
- **Partnerships (1065):** Original due date March 15; extension to September 15
- **Trusts and Estates (1041):** Original due date April 15; extension to October 15

**Filing and Payment**
- E-file Form 7004 through authorized electronic filing provider
- Estimated tax payment due with extension filing
- Safe harbor calculations apply (90% current or 100% prior year)
- Failure to file or pay triggers penalties and interest

### Estimated Payment Calculations

Provide methods for calculating safe harbor amounts:

**90% Current Year Method (Easiest)**
- Calculate best estimate of 2026 total tax liability
- Multiply by 90%
- That's the minimum payment required
- Most common method used

**100% Prior Year Method (Conservative)**
- If 2025 AGI < $150,000: Pay 100% of 2025 tax
- If 2025 AGI > $150,000: Pay 110% of 2025 tax
- More conservative approach
- Useful if income varying significantly

**Quarterly Payment Schedule**
- Q1 (Jan-Mar): Due April 15
- Q2 (Apr-May): Due June 15
- Q3 (June-Aug): Due September 15
- Q4 (Sept-Dec): Due January 15 (following year)
- Equal quarterly amounts typically used

### Penalty Avoidance Strategies

Guide strategies to minimize penalties and interest:

**Underpayment Penalties**
- Calculated on quarterly basis
- Rate changes quarterly (adjusted for IRS rates + 3%)
- Can be waived for reasonable cause
- Annualized method may reduce penalties if uneven income

**Interest Accrual**
- Accrues from due date until paid
- Currently around 8% annually (varies quarterly)
- Compounds daily
- Not deductible for individuals; deductible for businesses

**Reasonable Cause Exception**
- Natural disaster or casualty
- Death, serious illness, or unavoidable absence
- First-time penalty abatement (First Time Abatement)
- Good compliance history

### State Extension Requirements

Provide state-specific extension information:

**State Extension Filing**
- Most states follow federal automatic extension
- Some states require separate state extension filing
- State e-file systems typically integrated with federal
- State payment often due with federal payment

**State-Specific Considerations**
- **No state income tax states:** No separate state extension needed
- **Reciprocal states:** May piggyback on federal extension
- **Non-reciprocal states:** Require separate Form and payment
- **Estimated payment states:** May have separate quarterly requirements

### Deadline Calendar Management

Create extension-related deadline reminders:

**Key Dates**
- Extension filing deadline (varies by entity type)
- Estimated payment deadline dates (quarterly)
- Final return filing deadline (after extension)
- Estimated payment voucher submission deadlines
- State extension filing deadlines (if different from federal)

**Client Communication**
- Extension filing notification to clients
- Payment amount confirmation
- Deadline reminders for quarterly estimated payments
- Return completion status updates
- Final filing deadline and document requirements

## Process

When user requests extension management:

1. Determine entity type (individual vs. business)
2. Verify extension eligibility and deadline
3. Calculate estimated payment using safe harbor method
4. Identify state extension requirements
5. Create payment and deadline schedule
6. Prepare extension form details
7. Document communication with client
8. Set reminders for critical dates

## Integration

Use with **client-organizer** for engagement letter extension provisions and with **review-process** for timely compliance verification.

