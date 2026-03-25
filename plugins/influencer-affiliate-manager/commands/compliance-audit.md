---
description: Audit influencer content for FTC and platform compliance
argument-hint: [content URL or campaign name]
---

Audit the influencer content "$ARGUMENTS" for FTC and platform compliance.

Follow the compliance-monitor skill's audit methodology:

1. If given a specific piece of content or URL:
   - Check disclosure presence, language, and placement
   - Verify platform-specific requirements are met
   - Review content claims for accuracy
   - Check special category requirements (health, finance, minors)
   - Produce a compliance audit checklist with pass/fail for each item

2. If given a campaign name or batch of content:
   - Ask the user for the content list or access details
   - Audit each piece of content individually
   - Produce a summary report showing compliance rate across the campaign
   - Flag the most critical issues first

3. For each issue found:
   - Explain what's wrong and why it matters
   - Provide specific corrective instructions
   - Set a recommended correction deadline (typically 24 hours)

4. Provide a compliance score for the campaign:
   - 100%: All content fully compliant
   - 90-99%: Minor issues, easily corrected
   - 70-89%: Significant gaps, immediate attention needed
   - Below 70%: Systemic compliance failure, consider pausing campaign
