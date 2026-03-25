---
name: "Compliance Monitor"
description: "Monitors corporate compliance obligations, tracks regulatory requirements, manages filing deadlines, and ensures timely execution of annual reporting and regulatory obligations."
version: 0.1.0
---

# Compliance Monitor Skill

## Overview

This skill assists corporate lawyers and business administrators with compliance monitoring and regulatory tracking. The compliance-monitor skill enables tracking of regulatory obligations, calendar management for filing deadlines, oversight of annual reporting requirements, securities compliance (if applicable), data privacy compliance, and establishment of procedures to ensure timely execution of regulatory requirements.

## Core Capabilities

### 1. Regulatory Compliance Framework

**Primary Regulatory Areas for Corporations**

Every corporation has multiple regulatory obligations depending on jurisdiction, industry, and size. Key areas include:

**State-Level Compliance:**
- Secretary of State annual reports and renewals
- Franchise tax compliance
- Business license maintenance
- Registered agent maintenance
- Annual governance filings

**Federal Tax Compliance:**
- Federal income tax returns (Form 1120 for C-Corps; Form 1040 for pass-throughs)
- Quarterly estimated tax payments
- Employment tax returns and deposits (Forms 941, 940, W-2)
- Excise tax returns (if applicable)

**State and Local Tax Compliance:**
- State income tax returns
- Franchise tax returns
- Sales and use tax returns and payments
- Payroll tax returns and deposits
- Property tax assessments

**Employment Law Compliance:**
- Wage and hour compliance
- Workplace safety (OSHA)
- Workers' compensation insurance
- FMLA compliance and notices
- EEO compliance
- Unemployment insurance

**Data Privacy Compliance:**
- CCPA (California Consumer Privacy Act) if California operations
- GDPR (EU) if processing EU personal data
- State privacy laws (Virginia, Colorado, Connecticut, etc.)
- HIPAA (if handling health information)
- GLBA (if handling financial information)
- PCI-DSS (if processing payment card data)

**Industry-Specific Compliance:**
- Financial services (banking regulations, SEC compliance)
- Healthcare (HIPAA, state medical boards)
- Pharmaceuticals (FDA regulations, clinical trial requirements)
- Environmental (EPA, state environmental agencies)
- Transportation (DOT, FAA)
- Telecommunications (FCC)

**Securities Compliance:**
- SEC reporting (10-K, 10-Q, 8-K if public or SEC filer)
- Beneficial ownership reporting (FinCEN, if required)
- Insider trading policies
- Corporate disclosure controls

### 2. Obligation Tracking System

**Create Compliance Calendar**

Establish master calendar documenting:
1. **Deadline** — Exact due date
2. **Obligation** — What must be filed/done
3. **Responsible Party** — Who owns the responsibility
4. **Lead Time** — When to start preparation
5. **Contact** — Where to file or whom to notify
6. **Status** — Track completion
7. **Notes** — Special requirements or considerations

**Annual Filing Calendar Template:**

```
COMPLIANCE FILING CALENDAR - [COMPANY NAME] - FISCAL YEAR [YEAR]

FEDERAL LEVEL:

Quarterly:
- Q1 (April 15): Est. Federal Tax Payment (Form 1040-ES or 1120-W)
- Q1 (April 30): Payroll Tax Return (Form 941-X, if corrections needed)
- Q2 (June 15): Est. Federal Tax Payment
- Q3 (Sept 15): Est. Federal Tax Payment
- Q4 (Jan 15 following year): Est. Federal Tax Payment

Annually:
- Jan 31: W-2 Wage Statements (to employees and IRS)
- March 15: Federal Income Tax Return (Corp: Form 1120; Pass-through: Form 1040)
- April 15: Federal Individual Tax Return (if owner files separately)

---

STATE LEVEL:

Annual (Varies by State):
- [Date]: Secretary of State Annual Report ([State Name])
- [Date]: Franchise Tax Return ([State Name])
- [Date]: Business License Renewal ([State Name])
- [Date]: Registered Agent Renewal ([State Name])

---

PAYROLL/EMPLOYMENT:

Ongoing:
- Monthly: Payroll tax deposits (federal, state)
- Quarterly: State unemployment insurance return
- Annual: Workers' compensation insurance renewal

---

INDUSTRY-SPECIFIC:

[List relevant deadlines for your industry]

---

COMPLIANCE CHECKLIST:

□ Federal income tax return filed and payment made
□ State income tax returns filed (all applicable states)
□ Payroll tax returns filed and payments made
□ Sales tax returns filed and payments made
□ Annual corporate filings and renewals completed
□ Business licenses and permits renewed
□ Insurance policies renewed
□ Regulatory compliance certifications updated
□ Data privacy policies and procedures current
□ Board minutes and records current
```

### 3. State Annual Reporting Requirements

**Secretary of State Annual Reports**

Most states require annual report filed with Secretary of State (or state corporate authority) to maintain good standing. Requirements vary significantly by state.

**Typical Annual Report Information:**
- Business name and registered office address
- Registered agent name and address
- Principal place of business
- Names and addresses of directors/managers/members
- Officer information
- Federal tax ID number
- List of states where doing business

**Common Annual Report Filing Deadlines by State:**

| State | Deadline | Form | Filing Fee |
|-------|----------|------|-----------|
| Delaware | June 30 | Annual Report | $25-300 (varies by cap) |
| California | Biennial (varies) | Statement of Info | $20-800 (LLC franchise tax) |
| New York | Annual | Biennial Statement | $0-4,500 (varies) |
| Texas | May 15 | Annual Report | $0 (no fee) |
| Nevada | June 1 | Annual List | $0 (no fee) |
| Wyoming | Annual | Biennial Report | $0 (no fee) |

**Failure to File Consequences:**
- Loss of good standing
- Inability to enforce contracts
- Personal liability shield may be pierced
- Administrative dissolution (company ceased to exist)
- Penalties and late fees
- Difficulty obtaining EIN or business licenses

**Compliance:** Calendar deadline for each state; delegate filing to counsel or company secretary; confirm filing receipt.

### 4. Tax Compliance Calendar

**Federal Income Tax Returns**

**C-Corporations (Form 1120):**
- Deadline: March 15 (or 15th day of 3rd month after fiscal year end)
- Preparation: Start in January; coordinate with CPA
- Extensions: File Form 7004 for 6-month extension (to September 15)
- Quarterly estimates: Form 1040-ES (if expected tax not met via withholding)

**Pass-Through Entities (LLC, S-Corp, Partnership):**
- Form 1040 Schedule C (Sole Proprietor)
- Form 1120-S (S-Corporation)
- Form 1065 (Partnership/LLC)
- Deadline: March 15 (or 15th day of 3rd month after fiscal year end)
- Partner/member K-1s: Due 60 days before return deadline
- Extensions: Form 7004 extends to September 15

**Individual Owner Tax Returns:**
- Deadline: April 15
- File alongside corporate return to coordinate
- Estimated tax payments due quarterly (April 15, June 15, Sept 15, Jan 15)

**Payroll Tax Returns (Form 941):**
- Deadline: Quarterly (usually last month of quarter + 15 days)
- Forms W-2 due: Jan 31 (to employees); Feb 28 (to IRS)
- Form 940 (annual unemployment): Jan 31
- Deposits: Based on lookback period; usually semi-weekly or monthly

### 5. Beneficial Ownership Reporting (FinCEN BOI)

**New Requirement (Effective 2024)**

The Corporate Transparency Act (CTA) requires most corporations to report beneficial ownership information to FinCEN (Financial Crimes Enforcement Network) by January 1, 2024.

**Who Must Report:**
- Corporations incorporated in U.S.
- LLCs, partnerships formed in U.S.
- Foreign corporations/entities operating in U.S.
- Subject to exceptions for large operating companies, public companies, nonprofits

**What to Report (Beneficial Ownership Interests):**
- Each person owning 25%+ interest
- Name, date of birth, address
- Taxpayer identification number
- FinCEN ID (if previously reported)

**Deadline:** January 1, 2024 (for existing entities); within 30 days of formation (for new entities)

**Compliance:** Report via FinCEN BOI portal; retain documentation in company records; update if ownership changes.

### 6. Data Privacy Compliance

**CCPA (California Consumer Privacy Act)**

Applies to for-profit entities doing business in California and collecting personal information of California residents.

**Key Obligations:**
- Disclose categories of personal information collected
- Disclose business purpose for collection
- Right to delete (upon request, subject to exceptions)
- Right to know what information collected
- Opt-out right for sale/sharing of personal information
- Non-discrimination protection (can't penalize for exercising rights)
- Annual privacy audit

**Documentation Required:**
- Privacy policy updated for CCPA compliance
- Procedures for handling consumer requests (deletion, access)
- Vendor/service provider data sharing agreements
- Records retention procedures

**Compliance:** Implement privacy policy; establish request procedures; audit annually; document compliance efforts.

---

**GDPR (General Data Protection Regulation)**

Applies to organizations processing personal data of EU residents.

**Key Obligations:**
- Lawful basis for processing
- Privacy notice to data subjects
- Data Protection Impact Assessment (for high-risk processing)
- Data Processing Agreement with processors
- Breach notification (within 72 hours)
- Data subject rights (access, deletion, portability)
- Privacy by design
- Data retention limits

**Compliance:** Data Processing Agreement; privacy notices; breach response plan; DPIA for high-risk processing.

---

**State Privacy Laws:**

Multiple states have enacted privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, others). Generally require:
- Clear privacy disclosures
- Consumer rights (access, deletion, opt-out)
- Service provider agreements
- Security standards

**Compliance:** Audit operations against each applicable state law; implement unified privacy program meeting strictest state requirements.

### 7. Regulatory Filing Procedures

**Establish Filing Process:**

1. **Identification** — Identify all applicable regulatory filings and deadlines
2. **Calendar** — Document deadlines in compliance calendar with lead times
3. **Preparation** — Assign responsibility for preparation; gather required information
4. **Review** — Legal counsel reviews for accuracy and compliance
5. **Submission** — File via appropriate channel (eFiling system, mail, in-person)
6. **Confirmation** — Confirm receipt; track filing ID
7. **Records** — Maintain copy in corporate files
8. **Updates** — Monitor for changes; update filing if required

**Common Filing Errors to Avoid:**
- Missing deadline (establishes administrative dissolution risk)
- Incorrect information (names, addresses, officer details)
- Incomplete filing (missing required attachments)
- Wrong jurisdiction (filing in wrong state)
- Wrong form (using outdated form version)
- Insufficient payment (incorrect filing fee)
- Unsigned/unattested documents

### 8. Compliance Monitoring and Audit

**Quarterly Compliance Review:**

- Review compliance calendar
- Confirm all deadlines met
- Check for any regulatory inquiries or notices
- Verify filing confirmations received
- Assess compliance status

**Annual Compliance Audit:**

- Comprehensive review of all regulatory obligations
- Confirm all filings current and accurate
- Review regulatory correspondence and requests
- Update compliance procedures and calendar
- Verify insurance coverage adequate
- Assess emerging compliance obligations

**Documentation:**

Maintain file for each compliance area including:
- Applicable regulations and guidance
- Deadline and filing requirements
- Copy of filed documents
- Filing confirmations
- Any correspondence or notices
- Compliance procedures

## Application Framework

Use this skill to:

1. **Map Compliance Obligations** — Identify all regulatory requirements applicable to company
2. **Establish Filing Calendar** — Document all deadlines with lead times and responsible parties
3. **Implement Procedures** — Create processes for timely preparation, review, and filing
4. **Monitor Compliance** — Track deadline progress; escalate delays immediately
5. **Document Filings** — Maintain records of all filings and confirmations
6. **Audit Compliance** — Conduct periodic audits to ensure all obligations met
7. **Update Calendar** — Refresh calendar annually and when regulations change
8. **Escalate Issues** — Alert business leadership to missed deadlines or compliance gaps

## Reference Materials

Consult **regulatory-tracking-guide.md** for detailed guidance on tracking regulatory obligations by area (SEC, state reporting, beneficial ownership, data privacy, tax compliance) with specific requirements and deadlines.

Consult **filing-deadline-calendar.md** for template annual compliance calendar with common federal, state, payroll, tax, and SEC filing deadlines, organized by jurisdiction and filing type.
