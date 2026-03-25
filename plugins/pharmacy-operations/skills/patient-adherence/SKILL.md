---
name: patient-adherence
description: >
  Identify non-adherent patients and create outreach programs to improve
  medication adherence and pharmacy star ratings. This skill should be used
  when the user asks about "medication adherence", "PDC scores", "non-adherent
  patients", "refill reminders", "star ratings", "med sync", "medication
  synchronization", "first fill abandonment", "patient compliance",
  "DIR fees", or needs help improving medication adherence in their pharmacy.
version: 1.0.0
---

# Patient Adherence

Identify non-adherent patients, improve PDC scores, and build programs that boost star ratings and patient outcomes.

## Why Adherence Matters for Independent Pharmacies

### Clinical Impact
- 50% of patients with chronic conditions don't take medications as prescribed
- Non-adherence causes 125,000 deaths and $300 billion in avoidable healthcare costs annually
- Proper adherence to statins, antihypertensives, and diabetes medications dramatically reduces cardiovascular events

### Financial Impact (Star Ratings)
Medicare Part D star ratings directly affect pharmacy profitability:
- Higher stars = lower DIR (Direct and Indirect Remuneration) fees
- DIR fee clawbacks can reach 5-9% of Part D revenue
- Moving from 3 to 4 stars can save an independent pharmacy $20,000-$80,000/year in DIR fees
- Three medication adherence measures account for approximately 33% of the Part D star rating calculation

### The Three Adherence Measures

| Measure | Medications Included | Target PDC |
|---------|---------------------|-----------|
| Diabetes Medication Adherence | All non-insulin diabetes medications (metformin, sulfonylureas, DPP-4, SGLT2, GLP-1 oral, TZDs) | ≥ 80% |
| RAS Antagonist Adherence | ACE inhibitors and ARBs | ≥ 80% |
| Statin Adherence | All statins (atorvastatin, rosuvastatin, simvastatin, etc.) | ≥ 80% |

**PDC (Proportion of Days Covered)** = (Total days with medication on hand / Days in measurement period) × 100

## Identifying At-Risk Patients

### Early Warning Signs
- Refill 7+ days late on chronic medication
- PDC trending below 85% (intervene before it drops below 80%)
- First-fill not picked up within 48 hours
- History of gaps in therapy
- Multiple pharmacy use (split fills between pharmacies)
- Cash-pay switching (may indicate insurance issues or cost avoidance)
- New-to-therapy patients in first 90 days (highest abandonment risk)

### Risk Stratification

| Risk Level | Criteria | Intervention |
|-----------|----------|-------------|
| Critical | PDC < 60%, multiple gaps, high-risk medication | Pharmacist call + prescriber outreach |
| High | PDC 60-75%, recurring late refills | Pharmacist call + med sync enrollment |
| Moderate | PDC 75-80%, occasional late refills | Tech call + auto-refill enrollment |
| At Watch | PDC 80-85%, trending down | Automated reminder + monitoring |

## Adherence Improvement Programs

### Medication Synchronization (Med Sync)
The single most effective adherence program for community pharmacies.

**How it works:**
1. Identify patients on 3+ chronic medications
2. Pick an alignment date (often tied to a specific day of month)
3. Short-fill or long-fill all medications to align to that date
4. All medications ready for pickup on the same day each month
5. Pre-appointment call 5-7 days before to confirm refills, check for changes

**Benefits:**
- Improves PDC by 10-15 percentage points on average
- Reduces "I forgot" as a non-adherence reason
- Creates a natural monthly check-in with the pharmacist
- Increases prescription volume (fills that were being missed now happen)
- Reduces workload variability (predictable fill volumes)

### Adherence Packaging (Blister/Strip Packs)
- Pre-sort medications into daily/weekly packs
- Especially effective for: elderly patients, patients on 5+ medications, cognitively impaired patients, caregivers managing someone else's medications
- Paints a visual picture: "Did I take my Tuesday morning pills?"
- Can charge a modest packaging fee ($5-15/month) or absorb cost for retention

### Auto-Refill Program
- Enroll patients for automatic refill processing
- Generate refills at day 25 of 30-day supply (before they're due)
- Send pickup notification
- Reduces "I forgot to call in my refill" gaps
- Important: Allow easy opt-out and don't auto-fill medications that are frequently changed

### First-Fill Follow-Up
New prescriptions have the highest abandonment rate (20-30% never picked up).
- Flag new prescriptions at point of entry
- If not picked up within 48 hours: call the patient
- Common barriers: cost shock, side effect concerns, decided not to take it
- Address the barrier: copay assistance, pharmacist counseling, prescriber communication

## Outreach Best Practices

### The Adherence Conversation
- Lead with concern, not judgment: "I noticed your [medication] is overdue for a refill and I wanted to check in"
- Ask open-ended questions: "How has this medication been working for you?"
- Listen for the real barrier (it's often not what they say first)
- Offer specific solutions, not generic advice
- Document the intervention and outcome

### Communication Channels (by effectiveness)
1. Pharmacist phone call (highest impact, most time-intensive)
2. Technician phone call (good for simple reminders)
3. Text message (high open rate, good for reminders)
4. IVR automated call (lowest impact but scalable)
5. Mailed reminder (slow but reaches patients who don't answer phones)

## Reference Files

- **`references/adherence-scripts.md`** — Phone scripts and text templates for adherence outreach
