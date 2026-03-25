---
name: insurance-navigator
description: >
  Navigate mental health insurance billing, CPT codes, pre-authorization,
  and superbill creation for therapy practices. This skill should be used
  when the user asks about "insurance billing", "CPT codes", "superbill",
  "pre-authorization", "claim denied", "billing code", "90837 vs 90834",
  "credentialing", "insurance panel", "out-of-network billing", "EOB",
  "medical necessity", or needs help with any mental health insurance
  or billing process.
version: 1.0.0
---

# Insurance Navigator

CPT coding, pre-authorization, superbill creation, and claim management for therapy practices.

## CPT Codes for Mental Health

### Evaluation Codes
| Code | Description | Time | When to Use |
|------|------------|------|-------------|
| 90791 | Psychiatric diagnostic evaluation (no medical) | Variable | Intake/assessment sessions. First session with a new client. |
| 90792 | Psychiatric diagnostic evaluation with medical | Variable | Intake by psychiatrist or prescriber with med review |

### Psychotherapy Codes (Time-Based)
| Code | Description | Time Range | Reimbursement |
|------|------------|-----------|---------------|
| 90832 | Individual therapy, 30 min | 16-37 minutes | Lowest |
| 90834 | Individual therapy, 45 min | 38-52 minutes | Standard |
| 90837 | Individual therapy, 60 min | 53+ minutes | Highest |
| 90846 | Family therapy WITHOUT patient present | ~50 minutes | Standard |
| 90847 | Family/couples therapy WITH patient present | ~50 minutes | Standard |
| 90853 | Group psychotherapy | Per session | Lower per client |

**Critical:** Time is measured in actual face-to-face psychotherapy time, not including documentation or check-in chit-chat. If your session runs 50 minutes, that's 90834, not 90837. Document actual start/stop times.

### Add-On Codes
| Code | Description | When |
|------|------------|------|
| 90785 | Interactive complexity | Involvement of third parties, use of interpreter, communication difficulties |
| 96127 | Brief emotional/behavioral assessment | Administering PHQ-9, GAD-7, or similar. Bill with intake and periodically. Often overlooked revenue. |
| 96130 | Psychological testing evaluation | First hour of test evaluation and interpretation |
| 96131 | Psychological testing, additional hour | Each additional hour of testing evaluation |

### Telehealth Modifiers
- **Place of Service 02** — Telehealth (patient at home or other location)
- **Modifier 95** — Synchronous telehealth via real-time audio/video (append to CPT code)
- **Place of Service 10** — Telehealth in patient's home (some payers prefer this)

Check individual payer requirements — telehealth billing rules vary significantly.

## Insurance Paneling (Credentialing)

### Should You Join Insurance Panels?

**Pros:** Steady referral stream, clients can afford you, Psychology Today visibility, some clients will only see in-network providers
**Cons:** Lower reimbursement rates, paperwork burden, panel dictates aspects of treatment (session limits, required authorizations, audits)

### Common Panels for Therapists
Priority order for most private practices:
1. Blue Cross Blue Shield (largest market share in most states)
2. Aetna
3. Cigna
4. UnitedHealthcare / Optum
5. Medicare (if eligible — requires specific credentials in some states)
6. Medicaid (state-specific, lower reimbursement)
7. Regional/local plans

### Credentialing Process
1. Gather: NPI number, license, malpractice insurance, DEA (if applicable), tax ID, CAQH profile
2. Complete CAQH ProView profile (universal credentialing database)
3. Apply to each panel individually
4. Timeline: 60-120 days per panel (start before you need the income)
5. Negotiate rates (yes, you can — especially in areas with provider shortages)

## Pre-Authorization for Ongoing Treatment

Some insurers require pre-authorization after an initial number of sessions (often 8-12). The authorization request needs:

1. **Client demographics and insurance info**
2. **DSM-5 diagnosis** with supporting criteria
3. **Functional impairment** — How symptoms affect daily life, work, relationships, self-care
4. **Treatment plan** — Goals (measurable), modality, frequency, estimated duration
5. **Progress summary** — What's been accomplished, current symptom severity (use standardized measures: PHQ-9, GAD-7 scores over time)
6. **Medical necessity** — Why continued treatment at this frequency is needed
7. **Discharge criteria** — What conditions would indicate readiness for termination

Write medical necessity statements that emphasize functional impairment and risk, not just symptom presence. "Client continues to miss 2-3 workdays per month due to panic symptoms" is stronger than "Client still has anxiety."

## Superbill Essentials

For out-of-network or private-pay clients submitting for reimbursement:

Required fields:
- Provider legal name, credentials, NPI, Tax ID (EIN or SSN)
- Provider address and phone
- Client name and date of birth
- Date(s) of service
- CPT code(s) with fee for each
- ICD-10 diagnosis code(s)
- Place of service (11 = office, 02 = telehealth)
- Units (usually 1 per session)
- Total charge
- Amount paid by client
- Provider signature

Generate monthly or per-session — ask the client's preference.

## Reference Files

- **`references/billing-reference.md`** — Quick-reference billing guide with common scenarios
