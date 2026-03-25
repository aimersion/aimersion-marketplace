---
description: Run a pharmacy regulatory compliance self-audit
allowed-tools: Read, Write, Edit, Bash, WebSearch
argument-hint: [audit-focus]
---

Run a regulatory compliance self-audit for the pharmacy. Focus area: $ARGUMENTS

If no focus specified, run a comprehensive audit covering all areas:

## Audit Areas

### 1. DEA Compliance (Controlled Substances)
- [ ] DEA registration current and displayed
- [ ] Registrant-specific DEA requirements met (pharmacist-in-charge designated)
- [ ] Schedule II perpetual inventory current and reconciled
- [ ] Physical inventory conducted at least biennially (or as state requires)
- [ ] DEA-222 forms properly executed and filed for Schedule II orders
- [ ] ARCOS (Automation of Reports and Consolidated Orders System) reporting current
- [ ] Suspicious order monitoring program in place
- [ ] PDMP (Prescription Drug Monitoring Program) checked per state requirements
- [ ] Controlled substance theft/loss reported (DEA Form 106 if applicable)
- [ ] Vault/safe meets DEA specifications for Schedule II storage
- [ ] All controlled substances stored in a substantially constructed, locked area
- [ ] Disposition records for expired/damaged controlled substances
- [ ] Background checks for all employees with access to controlled substances

### 2. State Board of Pharmacy Compliance
- [ ] Pharmacy license current and displayed
- [ ] Pharmacist-in-charge designation current with the board
- [ ] All pharmacist licenses current and verified
- [ ] All technician registrations/certifications current
- [ ] Technician-to-pharmacist ratio within state limits
- [ ] Pharmacist supervision requirements met
- [ ] Continuing education requirements met for all licensed staff
- [ ] Prescription labeling meets state requirements
- [ ] Patient counseling offered per OBRA '90 (and state requirements)
- [ ] Prospective drug utilization review (DUR) documented
- [ ] Compounding activities within scope (if applicable: USP 795, 797, 800)
- [ ] Record retention requirements met (state-specific, typically 2-7 years)
- [ ] Prescription transfer procedures followed per state law
- [ ] Emergency supply provisions documented when used

### 3. HIPAA Compliance
- [ ] Notice of Privacy Practices posted and available to patients
- [ ] Business Associate Agreements in place with all applicable vendors
- [ ] Minimum necessary standard applied to all disclosures
- [ ] Patient authorization forms available for non-routine disclosures
- [ ] PHI breach notification procedures documented
- [ ] Physical safeguards: prescription bins not visible to public, fax machine in secure area, computer screens not visible to patients
- [ ] Technical safeguards: passwords on all systems, auto-lock on computers, encrypted electronic transmission of PHI
- [ ] Staff HIPAA training documented annually
- [ ] Breach log maintained (even if no breaches — document that)
- [ ] Social media policy addresses PHI protection

### 4. USP Compliance (if compounding)
- [ ] USP 795 compliance (non-sterile compounding): SOPs, beyond-use dating, equipment calibration, ingredient sourcing
- [ ] USP 797 compliance (sterile compounding): cleanroom classification, environmental monitoring, personnel training, media fill testing
- [ ] USP 800 compliance (hazardous drugs): assessment of risk, engineering controls, PPE, decontamination, spill procedures, medical surveillance

### 5. OSHA / Workplace Safety
- [ ] OSHA poster displayed
- [ ] Bloodborne pathogen exposure plan
- [ ] Hazardous drug handling procedures (USP 800 if compounding, but also for receiving and dispensing)
- [ ] Safety Data Sheets accessible for all chemicals
- [ ] Needle stick protocol in place (if administering injections)
- [ ] Emergency action plan posted
- [ ] Fire extinguisher inspected and accessible
- [ ] First aid kit stocked

### 6. CMS / Medicare / Medicaid
- [ ] NPI number current
- [ ] NCPDP data current in CMS systems
- [ ] Accreditation current for DMEPOS (if applicable)
- [ ] Medicare Part D requirements met (if participating)
- [ ] Medicaid audit readiness (signature logs, counseling documentation)

## For Each Finding:
- Compliant / Non-Compliant / Needs Improvement
- Specific deficiency description
- Risk level (High / Medium / Low)
- Corrective action recommendation
- Responsible person
- Target completion date

Generate a summary report with priority-ranked findings and a corrective action timeline.
