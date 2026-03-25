---
name: compliance-tracker
description: >
  Track fleet regulatory compliance including FMCSA regulations, Hours of Service rules, and DOT audit preparation. This skill should be used when the user asks to "check compliance", "FMCSA regulations", "HOS compliance", "DOT audit prep", "fleet compliance audit", "regulatory requirements", "CSA scores", "driver compliance", "USDOT requirements", "prepare for DOT audit", or needs help maintaining regulatory compliance for their fleet.
version: 0.1.0
---

# Compliance Tracker

Maintain regulatory compliance across federal, state, and local requirements to protect the fleet from fines, shutdowns, and poor safety ratings.

## FMCSA Regulatory Framework

### Registration Requirements
- **USDOT Number**: Required for all CMVs in interstate commerce (>10,001 lbs GVWR) and all vehicles transporting hazmat
- **MC Number**: Required for for-hire carriers
- **UCR (Unified Carrier Registration)**: Annual registration for interstate carriers
- **IFTA (International Fuel Tax Agreement)**: Quarterly fuel tax reporting for vehicles >26,001 lbs or 3+ axles operating in multiple states
- **IRP (International Registration Plan)**: Apportioned registration for vehicles operating in multiple states
- **Biennial Update**: MCS-150 form update every 2 years (USDOT number anniversary)

### Hours of Service (HOS) Rules

**Property-carrying drivers (CMV)**:
- **11-hour driving limit**: After 10 consecutive hours off duty
- **14-hour window**: Cannot drive beyond 14 hours after coming on duty (regardless of breaks)
- **30-minute break**: Required after 8 cumulative hours of driving
- **60/70-hour limit**: Cannot drive after 60/70 hours on duty in 7/8 consecutive days
- **34-hour restart**: Resets the 60/70-hour clock
- **Sleeper berth provision**: Split into two periods (7/3 or 8/2 hour combinations)

**Short-haul exception (100/150 air-mile radius)**:
- No ELD required if operating within 150 air-mile radius
- Must return to reporting location within 14 hours
- Must be released from duty within 14 hours
- Time records (not full logs) required

### ELD (Electronic Logging Device) Requirements
- Required for most CMV drivers subject to HOS
- Device must be FMCSA-registered and certified
- Driver must be trained on ELD use
- Malfunction procedures documented
- Data transfer capability to inspectors
- Maintain supporting documents for 6 months

## CSA (Compliance, Safety, Accountability) Scores

### BASIC Categories and Thresholds

| BASIC Category | Threshold (General) | Threshold (HazMat) |
|---------------|-------------------|-------------------|
| Unsafe Driving | 65% | 60% |
| HOS Compliance | 65% | 60% |
| Vehicle Maintenance | 80% | 75% |
| Controlled Substances | Varies | Varies |
| Driver Fitness | 80% | 75% |
| Hazardous Materials | N/A | 80% |
| Crash Indicator | 65% | 60% |

**Scores above threshold = intervention priority**

### Improving CSA Scores
- Fix vehicle defects found during inspections immediately
- Clean inspections (no violations) improve scores
- Contest inaccurate violations through DataQs
- Focus on most heavily weighted violations
- Ensure all drivers complete pre-trip inspections thoroughly
- Recent violations weigh more heavily — improvement shows quickly

## DOT Audit Preparation

### Documents to Have Ready
1. **Driver Qualification Files** — complete for every driver
2. **Vehicle maintenance records** — PM schedules, inspection reports
3. **Annual DOT inspection records** — for all CMVs
4. **Hours of Service records** — 6 months of logs/ELD data
5. **Drug and alcohol testing program** — policy, testing records, MRO reports
6. **Insurance certificates** — current, adequate coverage
7. **Vehicle registration** — current for all vehicles
8. **USDOT / MC numbers** — displayed on vehicles
9. **Accident register** — all reportable accidents for past 3 years
10. **Safety policies** — written, signed by drivers

### Common Audit Findings (Fix Before They Find Them)
- Incomplete DQ files (missing medical cards, MVR, or previous employer checks)
- Expired annual inspections
- Missing or incomplete maintenance records
- HOS violations (form and manner or actual violations)
- Drug testing program deficiencies
- Inadequate vehicle markings (USDOT number display)
- Missing or outdated insurance

For detailed regulatory checklists and audit preparation guides, see `references/compliance-guides.md`.
