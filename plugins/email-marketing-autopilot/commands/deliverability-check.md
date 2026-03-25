---
description: Diagnose inbox placement issues and get a fix-it checklist
---

Diagnose email deliverability issues and provide a prioritized fix-it checklist.

Follow the deliverability-doctor skill workflow:

1. Gather symptoms. Ask the user:
   - What's happening? (emails going to spam, low delivery rate, bounces spiking, sudden drop in opens/engagement)
   - How long has this been happening? (sudden vs. gradual decline)
   - Recent changes? (new ESP, new domain, volume increase, list import, content change)
   - Current bounce rate and spam complaint rate (if known)
   - Email volume (daily/weekly/monthly sends)
   - Dedicated or shared IP?
   - Business type and approximate list size

2. Based on symptoms, work through the diagnostic framework:

   **Authentication check:**
   - Walk through SPF, DKIM, DMARC verification steps
   - Identify any missing or misconfigured records
   - Check if all sending sources are authenticated

   **Reputation assessment:**
   - Guide them to check Google Postmaster Tools
   - Check Sender Score, Spamhaus, Barracuda lookups
   - Assess IP vs. domain reputation

   **List hygiene audit:**
   - Evaluate bounce rates against thresholds (>2% = emergency)
   - Assess spam complaint rates (>0.1% = urgent)
   - Check for spam trap indicators
   - Review engagement distribution (what % of list is inactive?)

   **Content analysis:**
   - Text-to-image ratio
   - Link hygiene (shortened URLs, broken links)
   - HTML quality
   - Unsubscribe mechanics (one-click? List-Unsubscribe header?)

3. Provide the fix-it checklist:

   **Immediate fixes** (do today):
   - Any authentication gaps
   - Remove hard bounces
   - Suppress high-complaint sources

   **Short-term fixes** (this week):
   - List validation
   - Suppress inactive subscribers (90+ days)
   - Fix unsubscribe mechanics

   **Medium-term fixes** (this month):
   - Implement sunset policy
   - Set up monitoring (Postmaster Tools, feedback loops)
   - DMARC progression plan

   **Long-term prevention:**
   - Ongoing list hygiene schedule
   - Engagement-based sending (engaged subscribers first)
   - Regular authentication audits

4. If warmup is needed, provide the daily volume schedule:
   - Days 1-3: 100-500 (most engaged only)
   - Days 4-7: 500-1,000
   - Days 8-14: 1,000-5,000
   - Days 15-21: 5,000-15,000
   - Days 22-30: 15,000-50,000
   - Day 31+: Full volume

5. Provide a monitoring checklist:
   - Weekly: bounce rate, complaint rate, engagement trends
   - Monthly: DMARC reports, blacklist checks, list hygiene run
   - Quarterly: Full authentication audit, DNS record review, vendor assessment

6. If this is a deliverability emergency (sudden spam placement), trigger the emergency playbook:
   - STOP non-critical sends
   - Check blacklists
   - Review last 5 sends for anomalies
   - Clean list immediately
   - Begin re-warmup with smallest, most engaged segment
