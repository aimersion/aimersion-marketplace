---
name: insurance-verifier-helper
description: >
  Help navigate dental insurance verification, pre-authorization templates,
  and coverage explanations for patients. This skill should be used when the
  user asks about "insurance verification", "pre-authorization", "pre-auth",
  "coverage explanation", "insurance benefits", "CDT codes", "dental codes",
  "claim denial", "insurance appeal", "superbill", "explanation of benefits",
  "coordination of benefits", "annual maximum", or needs help with any
  dental insurance or billing process.
version: 1.0.0
---

# Insurance Verifier Helper

Pre-authorization templates, coverage explanations, and insurance navigation for dental practices.

## Insurance Verification Essentials

### What to Verify Before Every Appointment

For every patient with insurance, verify these before their visit:

1. **Eligibility** — Is the plan active? What is the effective date?
2. **Annual maximum** — Total benefit amount, how much has been used YTD
3. **Deductible** — Amount, how much has been met YTD
4. **Benefit levels by category:**
   - Preventive (Class I): cleanings, exams, X-rays — typically 80-100%
   - Basic (Class II): fillings, extractions, root canals — typically 70-80%
   - Major (Class III): crowns, bridges, implants, dentures — typically 50%
   - Orthodontics (Class IV): braces, aligners — typically 50% with lifetime max
5. **Frequency limitations** — How often each service is covered:
   - Prophylaxis: 2 per calendar/benefit year (some plans: 2 per 12 months from last date)
   - Bitewing X-rays: 1-2 per year
   - Full-mouth X-rays or panoramic: 1 per 3-5 years
   - Exams: 2 per year
   - Fluoride: age limits vary (typically under 14-19)
   - Sealants: age limits (typically 6-14)
6. **Waiting periods** — New plans often have 6-12 month waiting periods for major services
7. **Missing tooth clause** — Does the plan cover replacement of teeth extracted before the patient enrolled?
8. **Age limitations** — Sealants, fluoride, orthodontic age limits
9. **Coordination of benefits** — If patient has dual coverage, determine primary/secondary
10. **Provider network status** — In-network vs. out-of-network benefit levels

### Verification Workflow

1. Call the insurance company or use the online portal 2-3 days before the appointment
2. Document all verified information in the patient's record
3. Calculate the estimated patient portion
4. Communicate the estimate to the patient BEFORE treatment begins
5. Note the representative's name and reference number for every phone verification

## Pre-Authorization (Pre-Determination) Templates

### When to Submit Pre-Auth

Submit pre-authorization for:
- Any treatment estimated over $300 in patient cost
- All major services (crowns, bridges, implants, dentures, oral surgery)
- Any treatment the patient questions or seems hesitant about
- New patient comprehensive treatment plans
- Periodontal treatment (SRP, periodontal surgery)

### Pre-Auth Narrative Template

Structure the narrative to maximize approval chances:

**For crowns:**
"Tooth #[X] presents with [finding: fracture line extending below the CEJ / large existing restoration with recurrent caries undermining remaining tooth structure / endodontically treated tooth requiring full-coverage restoration]. Clinical examination reveals [specific finding]. Radiographic examination confirms [specific finding]. A full-coverage crown is necessary to restore function and prevent further structural compromise. See attached clinical photo and radiograph."

**For implants:**
"Tooth #[X] is [congenitally missing / was extracted on [date] due to [reason]]. The edentulous site presents with [adequate/inadequate] bone volume. [Patient has attempted removable prosthesis without success / Fixed bridge is not advisable due to (reason)]. Implant-supported restoration is recommended as the most conservative and predictable treatment option. See attached radiograph and/or CBCT."

**For periodontal treatment:**
"Patient presents with [generalized/localized] [moderate/severe] periodontitis with probing depths of [X-X mm] and [radiographic bone loss description]. Bleeding on probing [percentage]. Current oral hygiene: [status]. Scaling and root planing is indicated in [quadrants] to arrest disease progression. See attached periodontal charting and radiographs."

Always include:
- Clinical justification with specific findings
- Supporting documentation (X-rays, photos, perio charts)
- CDT code(s) requested
- Tooth number(s)

## Explaining Insurance to Patients

### Common Patient Misconceptions

**"My insurance should cover everything"**
→ Dental insurance is a benefit supplement, not comprehensive coverage. The average annual maximum ($1,000-$2,000) hasn't significantly increased since the 1970s, while dental costs have risen with inflation. Think of it as a coupon, not a blank check.

**"If my insurance doesn't cover it, I don't need it"**
→ Insurance coverage decisions are based on cost control, not clinical necessity. Insurance companies don't examine your teeth — your dentist does.

**"My insurance says the fee is too high"**
→ Insurance companies set "allowable fees" based on their negotiated rates, not on what a procedure actually costs. The difference between the doctor's fee and the insurance allowable may be the patient's responsibility depending on network status.

## Claim Denial Appeal Process

When a claim is denied:

1. **Read the EOB carefully** — Identify the specific denial reason code
2. **Common denial reasons and responses:**
   - Frequency limitation → Check exact plan language, submit date of last service
   - Not a covered benefit → Verify plan details, consider alternative CDT code if clinically accurate
   - Missing information → Resubmit with complete documentation
   - Pre-existing condition / waiting period → Verify enrollment dates, prior coverage
   - Down-coding → Submit narrative explaining clinical necessity of the code billed
3. **Draft appeal letter** including: patient info, claim info, specific denial reason, clinical narrative explaining medical necessity, supporting documentation
4. **Submit within the appeal deadline** (typically 30-90 days from denial date)
5. **Track and follow up** — Insurance companies count on practices not appealing

## Reference Files

- **`references/cdt-code-guide.md`** — Common CDT codes organized by category with typical coverage levels
