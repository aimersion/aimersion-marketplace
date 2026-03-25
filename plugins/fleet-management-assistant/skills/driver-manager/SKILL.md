---
name: driver-manager
description: >
  Manage fleet drivers with license tracking, certification management, performance metrics, and training assignments. This skill should be used when the user asks to "track driver licenses", "driver performance", "CDL expiration tracking", "training assignments", "driver safety metrics", "driver file management", "certification tracking", "driver scorecard", "assign training", "driver compliance check", or needs help managing driver qualifications and performance.
version: 0.1.0
---

# Driver Manager

Track driver qualifications, monitor performance, and manage training to ensure a safe, compliant, and productive driver workforce.

## Driver Qualification File (DQ File)

### Required Documents (FMCSA §391)
For CMV drivers (vehicles >10,001 lbs GVWR or transporting hazmat):

1. **Application for employment** (3 years driving history)
2. **Driver's license copy** — verify valid and correct class/endorsements
3. **CDL verification** — annual check with issuing state
4. **Medical certificate (DOT physical)** — valid 2 years (1 year for certain conditions)
5. **Road test certificate** — or equivalent (3 years CDL experience)
6. **Background check** — previous employer inquiries (3 years)
7. **MVR (Motor Vehicle Record)** — annual review
8. **Drug and alcohol testing records** — pre-employment, random, post-accident, reasonable suspicion
9. **Annual review of driving record** — documented by employer annually
10. **Violations list** — annual certification by driver of violations in past 12 months

### Expiration Tracking Dashboard

| Document | Driver A | Driver B | Driver C |
|----------|---------|---------|---------|
| CDL Expiration | {Date} 🟢 | {Date} 🟡 | {Date} 🔴 |
| Medical Card | {Date} 🟢 | {Date} 🟢 | {Date} 🟡 |
| Annual MVR | {Date} 🟢 | {Date} 🟢 | {Date} 🟢 |
| Drug Test (Random) | {Date} 🟢 | {Date} 🟡 | {Date} 🟢 |

Status: 🟢 Current | 🟡 Expires within 60 days | 🔴 Expired/Overdue

## Driver Performance Metrics

### Safety Scorecard

| Metric | Weight | Scoring |
|--------|--------|---------|
| Accidents/incidents | 30% | 0 = 100pts, 1 preventable = 60pts, 2+ = 0pts |
| Moving violations | 20% | 0 = 100pts, 1 = 70pts, 2+ = 30pts |
| HOS compliance | 15% | 100% = 100pts, 95-99% = 80pts, <95% = 50pts |
| DVIR completion | 10% | 100% = 100pts, 95-99% = 80pts, <95% = 50pts |
| Fuel efficiency | 10% | Above fleet avg = 100pts, at avg = 70pts, below = 40pts |
| Customer complaints | 10% | 0 = 100pts, 1 = 60pts, 2+ = 20pts |
| Training completion | 5% | 100% = 100pts, partial = 50pts |

**Overall score ranges**: 90-100 = Excellent | 75-89 = Good | 60-74 = Needs Improvement | Below 60 = Action Required

### Telematics-Based Metrics (if available)
- Hard braking events per 1,000 miles
- Rapid acceleration events per 1,000 miles
- Speeding incidents (5+ mph over limit) per 1,000 miles
- Idle time as % of engine-on time
- Seatbelt compliance

## Training Management

### Required Training (Annual at Minimum)
- Defensive driving refresher
- Hours of Service (HOS) regulations
- Pre-trip/post-trip inspection procedures
- Cargo securement (if applicable)
- Hazmat awareness (if applicable)
- Accident reporting procedures
- Distracted driving awareness

### Recommended Additional Training
- Winter driving / adverse conditions
- Backing and maneuvering (reduce parking lot incidents)
- Customer service and professionalism
- New vehicle/equipment orientation
- Fuel-efficient driving techniques
- First aid / emergency response

### Training Tracking
For each driver, maintain:
- Training completed (course, date, provider, certificate)
- Training due/overdue
- Performance-triggered training (assigned after incidents)
- Certification renewals needed
- Career development plan (if applicable)

For driver file templates and performance review frameworks, see `references/driver-templates.md`.
