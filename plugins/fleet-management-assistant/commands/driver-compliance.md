---
description: Check driver compliance status across the fleet
argument-hint: [optional: specific driver name or compliance area]
---

Generate a driver compliance status report covering qualifications, certifications, and performance.

Ask the user for:
- Driver roster (or specific drivers to check)
- Any specific compliance areas of concern
- Upcoming audit or inspection dates (if any)

Generate a comprehensive compliance report using the driver-manager and compliance-tracker skills:

1. **Driver Qualification File status**: For each driver, check completeness of DQ file items — CDL, medical card, MVR, drug testing, training records
2. **Expiration alerts**: Any licenses, certifications, or medical cards expiring within 60 days
3. **HOS compliance**: Summary of any HOS violations in the period
4. **Training status**: Required training completion rates and overdue assignments
5. **Performance scorecards**: Safety scores for each driver with trend indicators
6. **DOT audit readiness**: Overall assessment of driver file compliance if an audit occurred today
7. **Action items**: Prioritized list of compliance gaps to address immediately

Color-code each item: GREEN (compliant), YELLOW (action needed within 30 days), RED (non-compliant/overdue).
