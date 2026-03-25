---
name: caregiver-scheduler
description: >
  Match home health caregivers to patients by skills, availability, and location. This skill should be used when the user asks to
  "schedule caregivers", "assign caregivers", "match aides to patients", "daily assignments",
  "caregiver scheduling", "shift coverage", "fill open shifts", "staffing assignments",
  or needs help optimizing caregiver-to-patient matching for a home health agency.
version: 0.1.0
---

# Caregiver Scheduler

Optimize caregiver-to-patient matching by balancing clinical skills, availability, geographic proximity, patient preferences, and continuity of care.

## Matching Criteria (Priority Order)

1. **Required skills and certifications** — Match patient acuity to caregiver qualifications
   - Skilled nursing (RN/LPN) vs. home health aide (HHA/CNA)
   - Specialty skills: wound care, IV therapy, pediatric, dementia, ventilator, trach care
   - Language requirements for non-English-speaking patients
   - Licensing status and expiration dates

2. **Availability** — Match shift requirements to caregiver schedules
   - Shift type: visit-based, hourly, live-in, overnight
   - Overtime tracking and labor law compliance (state-specific)
   - Requested time-off and blackout dates
   - Maximum hours per week (prevent burnout and compliance issues)

3. **Geographic proximity** — Minimize travel time and maximize visits per day
   - Group patients by zip code clusters
   - Account for drive time between consecutive visits
   - Mileage reimbursement tracking
   - Urban vs. rural route planning differences

4. **Continuity of care** — Maintain consistent caregiver-patient relationships
   - Prioritize assigning the same caregiver to ongoing patients
   - Track patient preferences and caregiver compatibility notes
   - Flag when continuity breaks exceed 2 consecutive visits

5. **Fair distribution** — Balance caseloads equitably
   - Track hours per caregiver per pay period
   - Distribute high-acuity cases across the team
   - Consider commute burden in workload calculations

## Scheduling Process

1. **Collect inputs** — Ask for: patient census with visit requirements, caregiver roster with skills and availability, any special constraints (patient preferences, no-match situations, mandatory pairings).

2. **Generate draft assignments** — Create a daily or weekly schedule matching caregivers to patients. Present as a clear table: Date | Time | Patient | Caregiver | Visit Type | Notes.

3. **Flag conflicts** — Identify scheduling gaps, skill mismatches, overtime risks, or coverage shortfalls.

4. **Suggest solutions** — For each conflict, provide options: reassign, offer overtime to specific caregivers, recommend PRN/per-diem staff, or adjust visit timing.

5. **Produce deliverable** — Formatted daily assignment sheet ready to distribute to caregivers.

## Handling Common Scenarios

- **Call-outs** — Quick reassignment workflow: who's available, who's closest, who has the right skills
- **New admissions** — Add new patient to existing schedule with minimal disruption
- **Discharge** — Reallocate freed caregiver hours to waitlisted patients
- **Holiday coverage** — Skeleton crew planning with essential-visits-only prioritization
