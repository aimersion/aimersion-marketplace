---
name: "Form Prep Assistant"
description: "Organizes client data for USCIS form completion, provides field-by-field guidance for common forms, identifies frequent errors, clarifies signature and filing requirements across diverse visa categories"
version: 0.1.0
---

# Form Prep Assistant Skill

USCIS forms are complex documents where small errors can delay cases or cause RFEs. The Form Prep Assistant skill guides attorneys and clients through form completion with detailed field-level guidance, error prevention strategies, and signature/filing requirement clarity for all major immigration forms.

## Core Capabilities

### Form Completion Workflow

**Pre-Filing Review Checklist:**

1. **Form Version Verification**
   - Confirm current form version (forms are periodically updated; old versions may not be accepted)
   - Check USCIS.gov for latest version and edition date
   - Forms must be submitted with current edition date

2. **Beneficiary/Applicant Information Consistency**
   - Name spelling and order must match across all forms (beneficiary, petitioner, sponsor)
   - Date of birth must be consistent
   - Immigration status and visa classification consistent
   - Name variants documented if applicable (maiden name, nicknames, cultural naming conventions)

3. **Legal Signatures and Declarations**
   - Identify who must sign form (beneficiary, petitioner, sponsor, attorney, witnesses)
   - Signatures must be in blue ink (when submitted by mail) or digital signature (when filed electronically)
   - Dates of signature must be after form preparation but before filing
   - Joint signatures (both spouses) on appropriate forms
   - Notarization requirements if applicable

4. **Required Supporting Documentation**
   - Verify all required documents attached
   - Confirm documents are in correct order and pages numbered
   - Ensure foreign documents translated and certified
   - Medical exam in sealed envelope (Form I-693)
   - All signatures, initials, and dates present

5. **Fee and Filing Calculations**
   - Confirm filing fee (may change annually)
   - Determine if fee waiver applicable (Form I-912)
   - Confirm check/money order made to USCIS
   - Multiple forms may require separate fees

### Major USCIS Forms - Purpose and Overview

**Form I-130 (Petition for Alien Relative)**
- **Purpose:** Establishes family relationship (parent-child, spouse, sibling)
- **Who Files:** U.S. citizen or green card holder
- **Visa Categories:** Immediate relatives (IR), family preference (F2A-F4)
- **Processing:** 3-36 months depending on visa category
- **Filing Fee:** $585 (subject to change; check current fee)
- **Key Sections:**
  - Petitioner information (U.S. citizen or permanent resident)
  - Beneficiary information (family member being sponsored)
  - Relationship information (birth certificate, marriage certificate)
  - Relative classification (IR-2, IR-3, F2A, F2B, F3, F4)

**Form I-485 (Application to Register Permanent Residence or Adjust Status)**
- **Purpose:** Apply for permanent resident status (green card)
- **Who Files:** Beneficiary of approved I-130 or employment-based petition
- **Visa Categories:** All family and employment-based categories
- **Processing:** 12-24 months
- **Filing Fee:** $640 (plus biometric fee; subject to change)
- **Key Sections:**
  - Applicant information
  - Immigrant classification
  - Medical examination (Form I-693)
  - Police and criminal history
  - Inadmissibility questions
  - Address history (last 5 years)
  - Employment history (last 5 years)
  - Travel history

**Form I-864 (Affidavit of Support)**
- **Purpose:** Sponsor guarantees financial support for beneficiary
- **Who Files:** Sponsor (petitioner, employer, or other relative)
- **Visa Categories:** All family-based cases; some employment-based cases
- **Duration:** 10-year legal obligation
- **Key Sections:**
  - Sponsor information
  - Household composition
  - Income calculation (from tax return or current income)
  - Asset calculation (if used to meet income requirement)
  - Beneficiary and derivative beneficiary information
  - Poverty line threshold for household size

**Form I-765 (Application for Employment Authorization)**
- **Purpose:** Obtain work authorization while application pending
- **Who Files:** Adjustment applicant or refugee/asylee
- **Visa Categories:** Adjustment applicants; refugees; asylees; DACA applicants
- **Processing:** 2-5 months
- **Filing Fee:** $410 (subject to change) or free for refugees/asylees
- **Key Sections:**
  - Applicant information
  - Category of eligibility (adjustment applicant, asylee, refugee, DACA)
  - Category code (EAD category)
  - Employment information
  - Address and phone

**Form I-131 (Application for Travel Document/Advance Parole)**
- **Purpose:** Obtain permission to travel outside U.S. while application pending
- **Who Files:** Adjustment applicant, refugee, asylee, certain visa applicants
- **Visa Categories:** Adjustment applicants; refugees; asylees; humanitarian purposes
- **Processing:** 1-6 months
- **Filing Fee:** $575 or free for refugees/asylees
- **Key Sections:**
  - Applicant information
  - Document requested (advance parole, re-entry permit, refugee travel document, emergency travel document)
  - Reason for travel
  - Countries to be visited

**Form N-400 (Application for Naturalization)**
- **Purpose:** Apply for U.S. citizenship
- **Who Files:** Permanent resident meeting eligibility requirements
- **Eligibility:** 5 years as permanent resident (3 years if married to U.S. citizen)
- **Processing:** 8-18 months
- **Filing Fee:** $645 (plus biometric fee; subject to change)
- **Key Sections:**
  - Applicant information
  - Residence history (last 5 years)
  - Employment history
  - Marital history
  - Children information
  - Moral character and eligibility questions
  - English and civics test results

**Form I-140 (Immigrant Petition for Alien Worker)**
- **Purpose:** Employer sponsors foreign worker for permanent residence
- **Who Files:** Employer or in EB-1 cases, self-petitioner
- **Visa Categories:** EB-1, EB-2, EB-3 employment-based categories
- **Processing:** 6-36 months depending on category
- **Filing Fee:** $715 (subject to change)
- **Key Sections:**
  - Petitioner (employer) information
  - Beneficiary information
  - Employment classification
  - Job title and description
  - Prevailing wage
  - Education and experience requirements

**Form I-129 (Petition for Nonimmigrant Worker)**
- **Purpose:** Employer petitions for temporary foreign worker
- **Who Files:** Employer
- **Visa Categories:** H-1B, L-1, O-1, P-1, E, R, H-3, TN (some categories)
- **Processing:** 2-6 months (15 calendar days with premium processing)
- **Filing Fee:** $460-$1,150 depending on category and employer size
- **Key Sections:**
  - Employer information
  - Employee information
  - Position details
  - Wages and working conditions (Labor Condition Application for H-1B)
  - Classification and category
  - Employer attestations

**Form I-539 (Application to Extend/Change Nonimmigrant Status)**
- **Purpose:** Extend stay in nonimmigrant status or change to different nonimmigrant status
- **Who Files:** Nonimmigrant requesting extension or status change
- **Visa Categories:** All nonimmigrant categories
- **Processing:** 3-6 months
- **Filing Fee:** $455 (subject to change)
- **Key Sections:**
  - Applicant information
  - Current status and expiration date
  - New status requested (if change of status)
  - Reason for extension/change
  - Employment information (if applicable)
  - Sponsor or employer information

---

## Field-by-Field Completion Guidance

### Form I-485 - Critical Fields

**Part 1: Information About You**

**Name:**
- Enter exactly as it appears in passport
- If multiple names used, use primary legal name
- If name changed, provide all names used
- For applicants with only one name (common in some cultures), explain in cover letter

**Date of Birth:**
- Use format MM/DD/YYYY
- Must match birth certificate exactly
- If discrepancy exists, explain in cover letter with supporting evidence

**Current Immigration Status:**
- Identify current visa type (F-1, H-1B, L-1, TPS, undocumented, parolee, etc.)
- If undocumented entry, use "not admitted or paroled"
- If prior visa overstay, identify previous status

**Country of Origin:**
- Country of citizenship, not country of residence
- For dual citizens, use country applicant considers primary

---

**Part 3: Immigration History and Status**

**Entry to United States:**
- Date of entry
- Port of entry (city, state)
- Method of entry (airplane, land port, sea)
- If entry without inspection, state "yes" to being admitted/inspected
- If no inspection, explain in cover letter

**Arrival/Departure Record:**
- I-94 number (from arrival record)
- If no I-94, explain circumstances
- Departure records for prior trips outside U.S.

**Employment Without Authorization:**
- Disclose any employment before obtaining work authorization
- Explanation of circumstances
- This may be used to determine inadmissibility or grounds for approval

---

**Part 7: Address History**

**Complete Five-Year Address History:**
- List all addresses where applicant resided during past 5 years
- Include dates (MM/DD/YYYY to MM/DD/YYYY)
- Provide most recent address first
- If address unknown, provide city/country
- For homeless periods, provide general location

---

**Part 8: Employment History**

**Complete Five-Year Employment History:**
- List all employment (including self-employment, informal work)
- Provide employer name, address, occupation, dates
- Include unemployment periods
- For applicants who worked while undocumented: include position and dates

**Self-Employment:**
- If self-employed, describe business in detail
- Provide business license number (if applicable)
- Income and nature of business

---

**Part 10: Family Information and Background**

**Names of All Children:**
- All children, regardless of citizenship status
- Include deceased children
- Include children from previous relationships
- Use exact legal names

**Parents:**
- Both parents, regardless of marital status
- Include deceased parents
- Provide names exactly as documented

---

**Part 16: Affidavits and Declarations**

**Signature Lines:**
- Applicant must sign personally (blue ink if mailed)
- Date signature (must be after form completion but before filing)
- Attorney signature (if represented)
- Digital signature acceptable for online filings

**Mandatory Language:**
- Form contains declaration under oath
- Signing certifies all information is true

---

### Form I-130 - Critical Fields

**Part Information About Beneficiary (Family Member Being Petitioned)**

**Beneficiary Classification:**
- IR-2: Unmarried child under 21 of U.S. citizen
- IR-3/IR-4: Orphan/adopted child
- F2A: Spouse of permanent resident
- F2B: Unmarried adult child of permanent resident
- F3: Married child of U.S. citizen
- F4: Brother/sister of U.S. citizen
- Correct classification critical; error causes RFE or denial

**Birth Certificate:**
- Certified copy attached (copy acceptable; original not required)
- If birth certificate in foreign language, certified English translation
- If obtaining new copy, order from vital records office of birth location

---

**Part Information About Petitioner (U.S. Citizen or Permanent Resident)**

**Citizenship Evidence:**
- For U.S. citizen: birth certificate, naturalization certificate, or passport
- For permanent resident: green card copy
- Evidence attached to I-130

---

**Part Relationship Information**

**Marriage Certificate (if applicable):**
- Certified copy with certified English translation (if foreign)
- For married children and spouses

**Divorce Decrees (prior marriages):**
- All divorce decrees, both petitioner and beneficiary
- Final decrees with certified English translation (if foreign)
- For petitioner: ensures current marriage is valid
- For beneficiary: ensures eligibility classification

---

### Form I-864 (Affidavit of Support) - Income Calculations

**Determining Correct Poverty Line:**

Poverty line varies by household size:
- 1 person: $15,000 (example 2024 figure; increases annually)
- 2 persons: $20,000
- 3 persons: $25,000
- 4 persons: $30,000
- (Each additional person adds ~$5,000)

**Income Threshold = Poverty Line x 125% (or 190% if non-head of household)**

**Calculating Household Income:**

1. **Primary Income Source (Tax Return):**
   - Use IRS 1040 (most recent year)
   - Line 7: Wages, salaries, tips
   - Line 5: Qualified dividends and capital gains
   - Line 9: Capital gain or loss
   - Add all income lines to get total income

2. **Household Composition:**
   - Include sponsor and spouse (if present)
   - Include all children under 21 in household
   - Include beneficiary and all beneficiary's dependents
   - Do NOT include adult children living separately

3. **Income from All Household Members:**
   - Spouse's income can be combined
   - Adult children's income (if in household): combined
   - Non-income-producing family members: count toward household size without income

4. **Self-Employment Income:**
   - Use Schedule C (sole proprietor) or Schedule F (farm)
   - Use "net profit or loss" line (after expenses)
   - Not gross revenue

5. **Business Income (Corporate):**
   - Use Schedule C or corporate return showing ownership percentage
   - Calculate proportionate share of net business income
   - Not gross receipts

---

**Using Assets to Meet Income Requirement:**

If income is below 125% poverty line:

**Asset Calculation:**
- Assets = (125% poverty line - sponsor's income) x 3
- Example: 125% poverty line = $25,000; sponsor income = $20,000
- Deficit = $25,000 - $20,000 = $5,000
- Required assets = $5,000 x 3 = $15,000

**Qualifying Assets:**
- Bank accounts (checking, savings)
- Stocks, bonds, mutual funds
- Real estate (primary residence and other property)
- Retirement accounts (IRA, 401(k)) - subject to restrictions
- Life insurance with cash surrender value
- Trust accounts (beneficiary's interest)

**Non-Qualifying Assets:**
- Personal property (car, furniture, jewelry)
- Pension payments (these are income, not assets)
- Social Security benefits (these are income, not assets)

---

### Form I-765 (Employment Authorization) - Category Selection

**EAD Category Selection (Critical for Processing):**

- **(a)(11):** Adjustment applicant (I-485 pending) - MOST COMMON
- **(a)(12):** Refugee (entering as refugee)
- **(a)(13):** Asylee (granted asylum)
- **(c)(1):** Derivative of E visa holder
- **(c)(2):** Derivative of L-1 visa holder
- **(c)(3):** Derivative of H-1B visa holder
- **(c)(8):** TPS (Temporary Protected Status) holder
- **(c)(14):** DACA applicant
- **(a)(26):** Special immigrant category
- **Other categories:** Available for specific circumstance

**Selecting Category (a)(11) for Adjustment Applicants:**
- Use for all I-485 adjustment applicants
- Effective date: Should match I-485 filing date or date authorization becomes effective
- Work authorization granted while I-485 pending

---

### Form I-131 (Advance Parole) - Document Type Selection

**Document Requested:**

- **Advance Parole:** Permission to travel outside U.S. and return while I-485 pending. USE THIS FOR MOST ADJUSTMENT APPLICANTS.
- **Re-Entry Permit:** Advance permission for permanent resident to travel abroad and return. USE FOR PERMANENT RESIDENTS PLANNING TO SPEND EXTENDED TIME ABROAD.
- **Refugee Travel Document:** Travel document for refugees/asylees instead of passport.
- **Emergency Travel Document:** Urgent travel document for refugees/asylees.

**For Adjustment Applicants:** Select advance parole.

---

## Common Form Completion Errors to Avoid

### Signature and Dating Errors

**Error:** Form signed but not dated
**Consequence:** USCIS may reject form as incomplete
**Prevention:** Ensure all signature lines dated with MM/DD/YYYY format

**Error:** Form signed before applicant review
**Consequence:** Applicant may not recall what form says; may sign inaccurate form
**Prevention:** Applicant reviews form completely before signing

**Error:** Attorney signature on form applicant must sign
**Consequence:** Only applicant signature valid; attorney cannot sign for applicant
**Prevention:** Applicant signature on primary form; attorney signature on separate declaration

**Error:** Form dated before completion
**Consequence:** May appear form completed on date before applicant had complete information
**Prevention:** Date form after all information entered and reviewed

---

### Naming and Identity Errors

**Error:** Name inconsistency across forms (beneficiary spelled differently on I-130 vs. I-485)
**Consequence:** USCIS requests verification of identity; may link as separate cases
**Prevention:** Verify exact name spelling on all documents; use consistent spelling across all forms

**Error:** Name discrepancy with birth certificate (nickname on application vs. legal name on certificate)
**Consequence:** RFE requesting explanation and/or name change documentation
**Prevention:** Use legal name exactly as appears on birth certificate; explain nickname in cover letter if using

---

### Information Inconsistency Errors

**Error:** Different address on I-485 vs. I-864 affidavit of support
**Consequence:** Questions whether beneficiary will actually reside with sponsor
**Prevention:** Verify address information across all forms; ensure consistency

**Error:** Employment end date on I-485 differs from employment history dates
**Consequence:** USCIS cannot verify employment
**Prevention:** Use consistent dates; account for final paychecks and final work dates

**Error:** Date of entry to U.S. conflicts with entry stamps in passport
**Consequence:** USCIS investigates potential fraud; may be grounds for deportability
**Prevention:** Verify entry date against passport stamps and I-94 records

---

### Missing Information Errors

**Error:** Address history incomplete or insufficient detail
**Consequence:** RFE requesting clarification or verification of residency
**Prevention:** Provide complete five-year history; estimate if exact dates unavailable

**Error:** Employment history missing years or positions
**Consequence:** Questions about background; potential RFE
**Prevention:** Account for all employment; explain gaps (unemployment, schooling, family caregiving)

**Error:** Divorces or prior marriages not disclosed
**Consequence:** May be grounds for fraud or misrepresentation
**Prevention:** Disclose all marriages/divorces; provide court documents

---

### Classification and Eligibility Errors

**Error:** Wrong beneficiary classification on I-130 (F2B instead of F2A)
**Consequence:** Beneficiary placed in wrong visa category; visa availability timeline affected
**Prevention:** Verify correct classification based on relationship and petitioner status

**Error:** EAD category on I-765 selected incorrectly
**Consequence:** Work authorization delayed or denied
**Prevention:** Confirm category (a)(11) for adjustment applicants; (a)(12) for refugees

---

## Filing and Submission Requirements

### Mail Submission

**Acceptable Address:**
- Confirm correct USCIS mailing address for form type (varies by form and location)
- USCIS.gov provides current mailing addresses
- Use Form I-485 mailing address specific to applicant's location

**Payment Method:**
- Check or money order made to USCIS
- Do NOT send cash
- Include check with application

**Envelope Requirements:**
- Use standard business envelope or appropriate size
- Include return address
- Include USCIS address legibly
- Use trackable shipping method (USPS certified mail, FedEx, UPS)

**Receipt Confirmation:**
- USCIS will mail receipt notice (I-797) within 5-10 days
- Keep receipt notice; includes case number

---

### Online Filing (USCIS MyCase Portal)

**Eligible Forms:**
- I-485, I-765, I-131 (all adjustment applicants)
- N-400 (naturalization)
- I-539 (extension of stay)
- Select other forms

**Online Submission Benefits:**
- Receipt notice issued within 1-2 days of filing
- Electronic confirmation of submission
- Can track case through MyCase portal
- May reduce processing time

**Requirements:**
- Create USCIS online account
- Scan all documents (PDF format preferred)
- Complete form in online system
- Pay filing fee online (credit card, debit card, bank account)

---

## Form Updates and Version Control

**Critical:** Always use most current form version. Forms are periodically updated; old versions may be rejected.

**How to Verify Current Form:**
- Visit USCIS.gov
- Search for form number (e.g., "Form I-485")
- Check edition date in form footer
- Current edition date displayed on USCIS website

**What Changes If Outdated Form Submitted:**
- USCIS may reject form and return application
- Processing delayed by 2-4 weeks while applicant refiles with correct form
- Potential for RFE if information doesn't fit new form's structure

**Updating Forms:**
- When new form version released, all future submissions must use new version
- USCIS provides transition period for old forms (typically 3-6 months)
- Check website before filing for current version
