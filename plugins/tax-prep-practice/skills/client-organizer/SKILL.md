---
name: client-organizer
description: This skill should be used when the user asks to generate "tax document checklists", review "tax organizers", create "engagement letters", conduct "client intake", request "document lists", or assemble "tax prep checklists". Covers all return types from individual 1040s to entity returns, with templates for engagement letters and intake questionnaires.
version: 0.1.0
---

# Client Organizer

Assist tax professionals in organizing client documentation and setting engagement expectations. Use this skill to generate comprehensive document checklists, create engagement letters, and manage client intake processes.

## Core Functions

### Generate Document Checklists

Provide detailed checklists by return type. For each return type listed below, include specific documents needed, optional documents based on client situation, and organization tips:

**Individual Returns (Form 1040)**
- W-2 returns: W-2s from all employers, verification of income
- Self-employed: Schedule C documentation, quarterly estimated payments, business expense records
- Rental income: Schedule E documentation, property details, maintenance records, mortgage statements
- Investment income: 1099-DIV, 1099-INT, 1099-B, brokerage statements, basis information

**Business Entity Returns**
- C Corporations (1120): Corporate resolutions, officer information, shareholder details
- S Corporations (1120-S): Shareholder K-1s, basis calculations, business income/loss
- Partnerships (1065): Partnership agreements, capital account information, member details
- LLCs: Operating agreements, member classification elections

**Specialty Returns**
- Nonprofits (Form 990): governance documents, conflict of interest policies, financial records
- Estates (Form 706): death certificate, asset valuations, beneficiary information
- Gift returns (Form 709): donor information, gift valuations, prior-year gift records

### Create Engagement Letters

Generate engagement letter templates by service type:
- Tax preparation services
- Tax planning and consulting
- Bookkeeping and accounting services
- Quarterly estimated payment reviews
- State tax compliance

Include standard sections: scope of work, client responsibilities, fee structure, deadline expectations, document requirements.

### Client Intake Questionnaires

Design intake forms covering:
- Basic client information and entity type
- Prior-year tax return status
- Life changes (marriage, divorce, children, home purchase)
- Income sources and preliminary amounts
- Deduction and credit eligibility
- Business structure and major changes
- State residency and domicile

### Year-Over-Year Comparison

Create comparison checklists to identify:
- New income sources or business activities
- Changes in dependents or filing status
- Significant life events affecting taxation
- Prior-year items requiring adjustment or carryforward
- Estimated payment adjustments needed

## Process

When user requests a checklist or document template:

1. Clarify the specific return type or situation
2. Reference the detailed templates in /references
3. Customize for client-specific circumstances if provided
4. Highlight which items are required vs. optional
5. Provide organizational and collection tips
6. Suggest follow-up items or areas requiring attention

## Integration

Use with **extension-manager** for deadline management and with **review-process** for documentation quality checks.

