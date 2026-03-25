---
description: Navigate insurance billing, coding, and pre-authorization
allowed-tools: Read, Write, Edit, Bash, WebSearch
argument-hint: [issue-type]
---

Help with insurance billing and navigation. Issue: $ARGUMENTS

## What This Covers

Based on the user's request, assist with:

### 1. CPT Code Selection
Guide the therapist in selecting the correct billing code:

| Code | Description | Typical Duration | Reimbursement Tier |
|------|------------|-----------------|-------------------|
| 90791 | Psychiatric diagnostic evaluation (intake) | 60-90 min | Higher |
| 90834 | Individual psychotherapy, 45 minutes | 38-52 min | Standard |
| 90837 | Individual psychotherapy, 60 minutes | 53+ min | Higher |
| 90846 | Family psychotherapy without patient | 50 min | Standard |
| 90847 | Family/couples psychotherapy with patient | 50 min | Standard |
| 90853 | Group psychotherapy | Varies | Lower |
| 90832 | Individual psychotherapy, 30 minutes | 16-37 min | Lower |
| 96127 | Brief emotional/behavioral assessment (add-on) | ~5 min | Low (but bill with every intake and periodic reassessment) |
| 96130-96131 | Psychological testing (evaluation + additional hours) | Varies | Higher |
| 90785 | Interactive complexity add-on | N/A | Add to base code |

**Time-based coding reminder:** The time ranges are wall-clock time thresholds. If a session runs 52 minutes, use 90834. If it runs 53 minutes, use 90837. Document actual start and stop times.

### 2. Diagnosis Coding (ICD-10)
Help match clinical presentations to appropriate diagnostic codes:

Common codes for therapy practices:
- F32.x — Major depressive disorder (single episode)
- F33.x — Major depressive disorder (recurrent)
- F41.1 — Generalized anxiety disorder
- F41.0 — Panic disorder
- F43.10 — Post-traumatic stress disorder
- F43.2x — Adjustment disorders
- F40.10 — Social anxiety disorder
- F42.x — Obsessive-compulsive disorder
- F50.x — Eating disorders
- F10-F19 — Substance-related disorders
- F60.3 — Borderline personality disorder
- Z63.0 — Relationship distress (couples)
- Z56.9 — Work-related problems (not a payable dx alone)

**Important:** Always code to the highest level of specificity supported by clinical assessment. Z-codes alone may not be reimbursable — pair with a billable diagnosis when clinically accurate.

### 3. Pre-Authorization
For insurers that require pre-auth for therapy sessions (increasingly common for ongoing treatment):

Generate a clinical summary including:
- DSM-5 diagnosis with supporting symptoms
- Functional impairment (how symptoms affect daily life, work, relationships)
- Treatment plan with measurable goals
- Modality and frequency of treatment
- Progress to date (if requesting continuation)
- Medical necessity statement: why this client needs this level of care at this frequency
- GAF or WHO-DAS score if required

### 4. Superbill Creation
For out-of-network or private-pay clients who want to submit for reimbursement:

Generate a superbill template with:
- Provider name, credentials, NPI number, Tax ID
- Provider address, phone, and license number
- Client name and date of birth
- Date of service
- CPT code(s) with fees
- ICD-10 diagnosis code(s)
- Place of service code (11 = office, 02 = telehealth)
- Provider signature

### 5. Claim Denial Support
Help draft appeal letters for denied claims:
- Reference the specific denial reason
- Provide clinical justification for medical necessity
- Include supporting documentation
- Cite relevant clinical guidelines or research
- Request peer-to-peer review if appropriate

Remind the user: billing and coding guidance from this tool is educational, not legal or financial advice. Complex billing situations may warrant consultation with a healthcare billing specialist.
