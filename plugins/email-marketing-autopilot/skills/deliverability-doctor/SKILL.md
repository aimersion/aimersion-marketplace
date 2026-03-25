---
name: deliverability-doctor
description: >
  Diagnose and fix email deliverability issues — authentication, sender reputation, list hygiene, warmup, and inbox placement.
  This skill should be used when the user asks about "email deliverability", "emails going to spam",
  "inbox placement", "sender reputation", "SPF DKIM DMARC", "email authentication", "email warmup",
  "list cleaning", "bounce rate", "spam complaints", "blacklist", "email not arriving",
  "going to promotions tab", or needs help getting emails into the inbox.
version: 2.0.0
---

# Deliverability Doctor

Diagnose and fix email deliverability issues. This skill covers the infrastructure layer that determines whether your emails reach the inbox — authentication, sender reputation, list hygiene, warmup, and compliance with the 2024-2026 bulk sender requirements from Gmail, Yahoo, and Outlook.

## Why This Matters

You can write perfect subject lines and segment flawlessly, but none of it matters if emails land in spam. Deliverability is the foundation everything else sits on. Fixing authentication and reputation produces more incremental revenue than any creative optimization.

## The 2024-2026 Bulk Sender Requirements

As of early 2025, Gmail and Yahoo require ALL bulk senders (5,000+ emails/day) to have:

1. **SPF authentication** — Published and passing
2. **DKIM authentication** — Signed and verified
3. **DMARC policy** — At minimum `p=none` with reporting
4. **One-click unsubscribe** — List-Unsubscribe header with `mailto:` and/or URL
5. **Spam complaint rate** — Below 0.1% (Gmail), with 0.3% as the danger threshold
6. **Aligned From: domain** — SPF or DKIM must align with the visible From: domain

**Coming in 2026 (Outlook):** Microsoft is adopting similar requirements for senders of 5,000+ emails/day, adding stricter alignment checks.

**What happens if you don't comply:** Emails are throttled, bulked to spam, or silently rejected. No bounce message — just disappearance.

## Diagnostic Framework

### Step 1: Authentication Check

Walk the user through verifying these DNS records:

#### SPF (Sender Policy Framework)
- **What it does:** Tells receiving servers which IP addresses are authorized to send email for your domain
- **How to check:** Look up TXT record for the domain. Should contain `v=spf1` followed by authorized sources.
- **Common issues:**
  - Missing SPF record entirely
  - Too many DNS lookups (max 10 — each `include:` is a lookup)
  - Not including all sending sources (ESP, transactional service, CRM, etc.)
  - Using `+all` instead of `~all` or `-all` (allows anyone to send as you)

**Fix template:** `v=spf1 include:_spf.google.com include:sendgrid.net include:mailchimp.com ~all`

#### DKIM (DomainKeys Identified Mail)
- **What it does:** Adds a cryptographic signature to email headers, proving the email hasn't been tampered with
- **How to check:** Each ESP provides a CNAME or TXT record to add to DNS. Verify it's published and the selector matches.
- **Common issues:**
  - DKIM record not published for the ESP's selector
  - Key rotation not happening (keys should rotate every 6-12 months)
  - Multiple ESPs but only one has DKIM configured
  - Using 1024-bit keys instead of 2048-bit (1024 is deprecated by most providers)

#### DMARC (Domain-based Message Authentication, Reporting & Conformance)
- **What it does:** Tells receiving servers what to do when SPF/DKIM fail, and sends you reports about authentication results
- **How to check:** Look up `_dmarc.yourdomain.com` TXT record
- **Common issues:**
  - No DMARC record at all (required by Gmail/Yahoo for bulk senders)
  - Policy set to `p=none` indefinitely (start here, but move to `p=quarantine` or `p=reject` within 3-6 months)
  - Not collecting DMARC reports (`rua=` tag missing — you're flying blind)
  - Subdomain policy not set (`sp=` tag)

**Recommended progression:**
1. Month 1-2: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com` (monitor)
2. Month 3-4: `v=DMARC1; p=quarantine; pct=25; rua=mailto:dmarc@yourdomain.com` (test on 25%)
3. Month 5-6: `v=DMARC1; p=reject; rua=mailto:dmarc@yourdomain.com` (enforce)

#### BIMI (Brand Indicators for Message Identification)
- **Optional but valuable:** Displays your brand logo next to emails in supported clients (Gmail, Yahoo, Apple Mail)
- **Requirements:** DMARC at `p=quarantine` or `p=reject`, plus a Verified Mark Certificate (VMC)
- **Impact:** 10-15% open rate lift from brand recognition in inbox

### Step 2: Sender Reputation Assessment

#### IP Reputation
- **Shared IP** (most small/medium senders): Your reputation is pooled with other senders on that IP. Choose an ESP with strict sending policies.
- **Dedicated IP** (50,000+ monthly sends): You own your reputation. Requires warmup.

**How to check:**
- Google Postmaster Tools (free, essential for Gmail delivery)
- Microsoft SNDS (Outlook delivery data)
- Your ESP's deliverability dashboard
- Third-party: Sender Score (Validity), BarracudaCentral, Spamhaus lookup

#### Domain Reputation
- Increasingly more important than IP reputation
- Built over time by consistent sending patterns and engagement
- Damaged by spam complaints, high bounce rates, and spam trap hits
- **New domains need 30+ days of warm sending before bulk campaigns**

### Step 3: List Hygiene Audit

List quality is the #1 controllable factor in deliverability.

**Hard bounces (invalid addresses):**
- Remove IMMEDIATELY after first hard bounce
- Hard bounce rate should be < 0.5%
- > 2% hard bounces on a single send = list quality emergency

**Soft bounces:**
- Retry 2-3 times over 48-72 hours
- After 3 consecutive soft bounces across different sends, treat as hard bounce
- Common causes: full mailbox, server temporarily unavailable, message too large

**Spam traps:**
- **Pristine traps:** Email addresses created solely to catch spammers. Never belonged to a real person. You hit these by using purchased/scraped lists.
- **Recycled traps:** Abandoned email addresses repurposed as traps. You hit these by not cleaning inactive subscribers.
- **Typo traps:** Common misspellings (gmial.com, hotmai.com). Caught by email validation at signup.

**List hygiene schedule:**
| Action | Frequency |
|--------|-----------|
| Remove hard bounces | After every send (automated) |
| Run email validation (NeverBounce, ZeroBounce, BriteVerify) | Quarterly, or before any large send to a cold segment |
| Sunset inactive subscribers | Monthly review, 90-day threshold |
| Check for role addresses (info@, sales@, admin@) | Quarterly — suppress from marketing, keep for transactional |
| Audit signup sources | Monthly — which sources produce bounces and complaints? |

### Step 4: IP/Domain Warmup

Required when: new dedicated IP, new domain, new ESP migration, or sending volume increase > 2x.

**Warmup schedule (new dedicated IP):**

| Day | Daily Volume | Who to Send To |
|-----|-------------|---------------|
| 1-3 | 100-500 | Your most engaged subscribers ONLY (opened in last 7 days) |
| 4-7 | 500-1,000 | Engaged (opened in last 14 days) |
| 8-14 | 1,000-5,000 | Engaged (opened in last 30 days) |
| 15-21 | 5,000-15,000 | Active (opened in last 60 days) |
| 22-30 | 15,000-50,000 | Active (opened in last 90 days) |
| 31+ | Full volume | Full active list (with sunset policy applied) |

**Critical warmup rules:**
- Send to engaged subscribers first — positive engagement signals train ISPs to trust you
- Maintain consistent daily sending (don't skip days)
- Monitor bounce rates and complaints at EVERY step — if either spikes, slow down
- Never send to your full list during warmup
- Domain warmup follows the same schedule if the sending domain is new

### Step 5: Inbox Placement vs. Spam vs. Promotions

**Landing in Spam:**
- Authentication failures (SPF/DKIM/DMARC)
- High spam complaint rate
- Blacklisted IP or domain
- Content triggers (rare for legitimate senders — it's almost always reputation)

**Landing in Gmail Promotions tab:**
- This is NORMAL for marketing emails and not a crisis
- Gmail categorizes based on content signals: promotional language, images, multiple links, HTML templates
- Promotional tab has a 50% lower open rate but is expected behavior
- To improve Primary placement: plain text, fewer images, conversational tone, fewer links, personal from name

**Landing in Outlook "Other" / Focused Inbox:**
- Similar to Gmail Promotions — engagement-based sorting
- Encourage subscribers to move you to Focused (include instructions in welcome email)

### Step 6: Content-Level Deliverability

Content rarely causes spam filtering for authenticated senders, but these still matter:

**Text-to-image ratio:** Keep 60:40 text-to-image minimum. Image-only emails with no text are spam red flags.

**HTML quality:**
- Clean, table-based HTML (not div-based — email clients are not browsers)
- Inline CSS (many clients strip `<style>` blocks)
- No JavaScript (stripped by all email clients)
- No embedded forms (use links to landing pages)

**Link hygiene:**
- No shortened URLs (bit.ly, etc.) — spam filters distrust them
- All links should point to your domain or known, reputable domains
- Broken links erode trust and increase complaints
- Track links through your ESP, not third-party redirectors

**Unsubscribe mechanics:**
- One-click unsubscribe (required by Gmail/Yahoo 2024+)
- List-Unsubscribe header (both `mailto:` and URL)
- Visible unsubscribe link in email footer
- Process unsubscribes within hours, not days

## Deliverability Emergency Playbook

If you're suddenly landing in spam or seeing massive delivery failures:

1. **STOP non-critical sending immediately** — Every bad send makes it worse
2. **Check blacklists**: Spamhaus, Barracuda, SORBS, URIBL, Spamcop
3. **Check Google Postmaster Tools** for reputation changes
4. **Review last 5 sends** for anomalies: spike in volume? new segment? content change?
5. **Check authentication**: Did DNS records change? Did your ESP make changes?
6. **Review complaints**: Check feedback loops for complaint spikes
7. **Clean your list**: Run validation, remove bounces, suppress inactives
8. **Begin re-warmup**: Start with smallest, most engaged segment and rebuild

## Output Format

When diagnosing deliverability, provide:

1. **Authentication status** — SPF, DKIM, DMARC pass/fail with specific fix instructions
2. **Reputation assessment** — IP and domain reputation based on available data
3. **List hygiene score** — Based on bounce rates, complaint rates, engagement distribution
4. **Immediate fixes** — Ranked by impact, with exact steps
5. **Warmup plan** — If needed, with daily volume schedule
6. **Monitoring checklist** — What to check weekly, monthly, quarterly
7. **Prevention plan** — Ongoing practices to maintain deliverability
