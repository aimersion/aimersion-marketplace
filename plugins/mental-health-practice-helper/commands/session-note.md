---
description: Generate a progress note template for a therapy session
allowed-tools: Read, Write, Edit, Bash, WebSearch
argument-hint: [note-format-or-modality]
---

Generate a session progress note template. Format or modality: $ARGUMENTS

## Process

1. **Determine Note Requirements** — Ask the user for:
   - Preferred note format (DAP, SOAP, BIRP, GIRP, or narrative)
   - Treatment modality (CBT, EMDR, DBT, psychodynamic, family systems, IFS, solution-focused, etc.)
   - Whether notes need to be insurance-compliant
   - Typical session type (individual, couples, family, group)
   - State and licensure type (affects documentation requirements)
   - EHR system (for formatting compatibility)

2. **Generate the Template** — Based on the chosen format:

   **DAP Notes (Data, Assessment, Plan)**
   - **D (Data):** What was observed and reported. Client's presentation, mood, affect, topics discussed, interventions used, client's response to interventions.
   - **A (Assessment):** Clinical interpretation. Progress toward treatment goals, clinical impressions, risk assessment.
   - **P (Plan):** Next steps. Homework assignments, next session focus, referrals, treatment plan modifications.

   **SOAP Notes (Subjective, Objective, Assessment, Plan)**
   - **S:** Client's self-reported experience, quotes, presenting concerns for this session.
   - **O:** Clinician's observations — appearance, behavior, affect, cognition, engagement.
   - **A:** Clinical analysis — progress toward goals, diagnostic impressions, risk.
   - **P:** Treatment plan updates, intersession tasks, next appointment.

   **BIRP Notes (Behavior, Intervention, Response, Plan)**
   - **B:** Observable behaviors and client reports.
   - **I:** Specific interventions used (name the technique/approach).
   - **R:** Client's response to interventions.
   - **P:** Future treatment direction.

3. **Modality-Specific Prompts** — Include relevant fields:
   - **CBT:** Thought records reviewed, cognitive distortions identified, behavioral experiments assigned
   - **EMDR:** Target memory, SUD/VOC ratings, desensitization progress, body scan results
   - **DBT:** Skills taught/reviewed, diary card review, chain analysis if applicable
   - **Psychodynamic:** Transference/countertransference notes, recurring themes, defenses observed
   - **Family/Couples:** Interactional patterns observed, communication dynamics, each member's engagement
   - **IFS:** Parts identified, Self-energy access, unburdening progress

4. **Required Elements for Insurance Compliance:**
   - Date and duration of service
   - CPT code used (90834, 90837, 90847, etc.)
   - DSM-5 diagnosis code(s)
   - Medical necessity statement (linking symptoms to treatment)
   - Progress toward measurable treatment plan goals
   - Risk assessment (suicidal ideation, homicidal ideation, self-harm — document screening even if negative)
   - Plan for continued treatment or discharge

5. **Risk Documentation Section** — Every note should include:
   - Suicidal ideation: present/absent, if present: plan, means, intent, protective factors
   - Homicidal ideation: present/absent
   - Self-harm: present/absent
   - Substance use: current status
   - Safety plan: in place / reviewed / updated / not indicated

Remind the user: notes should contain enough detail for clinical continuity and insurance compliance but should NOT read like a transcript. Document what's clinically relevant, not everything that was said.
