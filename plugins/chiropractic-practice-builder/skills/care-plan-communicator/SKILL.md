---
name: care-plan-communicator
description: >
  Translate chiropractic treatment plans into clear, patient-friendly language. This skill should be used when the user asks to
  "explain a care plan", "write a treatment plan", "patient-friendly explanation", "care plan communication",
  "treatment recommendation letter", "explain to patient why they need adjustments",
  or needs help converting clinical terminology into language patients understand and trust.
version: 0.1.0
---

# Care Plan Communicator

Convert clinical chiropractic treatment plans into clear, motivating communications that help patients understand their condition, the recommended care, and why consistency matters.

## Input Gathering

Ask the user for:
- Patient's primary complaint and diagnosis (e.g., lumbar disc herniation, cervical subluxation, sciatica)
- Recommended visit frequency and duration (e.g., 3x/week for 4 weeks, then 2x/week for 6 weeks)
- Key findings from examination (X-rays, range of motion, orthopedic tests)
- Any co-therapies (exercises, stretches, ergonomic changes, nutrition)
- Patient's concerns or objections if known

## Communication Framework

Structure every care plan explanation using the **CARE** framework:

1. **Condition** — What's happening in their body, explained simply
   - Use analogies patients relate to (spine as foundation, discs as shock absorbers, nerves as electrical wiring)
   - Avoid jargon: say "misalignment" not "subluxation complex," "nerve pressure" not "radiculopathy"
   - Reference their specific symptoms and connect them to the underlying cause

2. **Action** — What the treatment plan involves
   - Break the plan into phases (acute/corrective/maintenance) with clear timelines
   - Explain what happens at each visit in plain terms
   - Include home care instructions as partnership, not homework

3. **Results** — What they can expect and when
   - Set realistic milestones (e.g., "Most patients feel initial relief within 2-3 weeks")
   - Explain that healing happens in stages — symptom relief first, then structural correction
   - Use percentage language patients connect with ("80% of patients with your condition improve significantly")

4. **Evidence** — Why this approach works
   - Reference the body's natural healing ability
   - Brief mention of research supporting chiropractic care for their condition
   - Share relevant success stories (anonymized)

## Output Formats

Generate any combination the user needs:

- **In-office handout** — One-page summary the patient takes home
- **Email summary** — Sent after the consultation for reference
- **Text message** — Brief encouragement and next-appointment reminder
- **Report of findings script** — Talking points for the doctor's verbal presentation
- **Family member version** — Simplified explanation for spouse/parent who wasn't at the visit

## Handling Common Patient Objections

Prepare responses for:
- "Why so many visits?" — Explain tissue healing timelines and progressive loading
- "My insurance only covers X visits" — Discuss medical necessity and payment options without pressure
- "Can't I just come when it hurts?" — Pain-as-last-symptom analogy (fire alarm vs. fire)
- "How long until I'm better?" — Honest timelines with factors that affect speed of recovery

## Tone Guidelines

- Empathetic and educational, never condescending
- Confident but not pushy — present recommendations, respect autonomy
- Use "we" language to create partnership ("Together, we'll work on...")
- Celebrate the patient's decision to seek care
