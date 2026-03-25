---
description: Identify non-adherent patients and create outreach campaigns
allowed-tools: Read, Write, Edit, Bash, WebSearch
argument-hint: [medication-class-or-condition]
---

Identify patients at risk of medication non-adherence and create targeted outreach. Focus: $ARGUMENTS

## Process

1. **Identify Non-Adherent Patients** — Ask the user for refill data or connect to their ~~pharmacy management system. Flag patients with:
   - PDC (Proportion of Days Covered) below 80% for chronic medications
   - Refills more than 7 days late
   - Gap in therapy > 14 days for critical medications (statins, antihypertensives, antidiabetics, anticoagulants, antidepressants)
   - First-fill abandonment (new prescription never picked up)
   - Patients on high-risk medications (opioids, anticoagulants, insulin) with irregular fill patterns

2. **Segment by Priority:**
   - **Critical** — Patients on anticoagulants, insulin, antiepileptics, transplant meds with gaps > 7 days
   - **High** — Patients with chronic conditions (diabetes, hypertension, heart failure) and PDC < 70%
   - **Moderate** — Patients with PDC 70-80% on chronic maintenance medications
   - **First-fill** — New prescriptions not picked up within 48 hours

3. **For Each Segment, Generate Outreach:**

   **Phone Call Script (for pharmacist or tech):**
   - Empathetic opening: "I'm calling to check in about your [medication]"
   - Identify the barrier: cost, side effects, complexity, forgetfulness, belief it's not needed
   - Offer solutions based on the barrier:
     - Cost: generic alternative, manufacturer coupon, patient assistance program, 340B if eligible
     - Side effects: timing adjustment, take with food, pharmacist consultation, talk to prescriber
     - Complexity: simplify regimen, blister packaging, medication synchronization (med sync)
     - Forgetfulness: auto-refill enrollment, pill organizer, phone reminders
     - Belief: motivational interviewing, patient education on condition and medication importance
   - Close with next steps and follow-up timeline

   **Text/SMS Reminder:**
   - Refill reminder: "[Name], your [medication] is ready for refill at [Pharmacy]. Call [phone] or stop by!"
   - Pickup reminder: "[Name], your prescription is ready! We'll hold it until [date]. Questions? Call [phone]."

   **Letter/Email (for persistent non-adherence):**
   - Educational content about their condition
   - Why consistent medication use matters (in patient terms, not clinical terms)
   - Resources available (financial assistance, medication sync, packaging services)
   - Invitation to speak with the pharmacist

4. **Track Outcomes:**
   - Create a tracking template: patient name, medication, gap days, outreach date, method, barrier identified, resolution, follow-up date, adherence improvement

5. **Star Ratings Impact** (for Medicare Part D pharmacies):
   - Explain which adherence measures affect star ratings:
     - Statin adherence (PDC ≥ 80%)
     - RAS antagonist adherence (PDC ≥ 80%)
     - Diabetes medication adherence (PDC ≥ 80%)
   - Show the financial impact: each star rating improvement = significant DIR fee reduction and plan preference
