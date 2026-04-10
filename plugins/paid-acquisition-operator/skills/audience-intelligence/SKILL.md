---
name: audience-intelligence
description: >
  Translate ICP definitions into precise LinkedIn and Google ad audiences. This skill should
  be used when the user asks to "build ad audiences", "set up LinkedIn targeting", "define
  audience segments for our ads", "create lookalike audiences", "exclude wrong audiences",
  "ICP to ad targeting", or needs to convert customer profile data and ICP definitions into
  specific paid media targeting configurations that reach buyers and exclude wasted spend.
version: 1.0.0
---

# Audience Intelligence

Translate ICP definitions into precise paid media targeting that reaches the right buyers and protects budget from wasted impressions.

## LinkedIn Audience Architecture

LinkedIn's targeting is the most precise available for B2B — but most teams target too broadly and dilute their results. The goal: small, precise audiences outperform large, vague ones.

### Building Block Options

**Job Function (starting point for large audiences):**
```
Map ICP role to LinkedIn functions:
Sales → Sales
Marketing → Marketing
HR/People → Human Resources
Finance → Finance
IT/Engineering → Engineering, Information Technology
Operations → Operations
C-Suite → Use specific titles instead
```

**Job Title (more precise, smaller audience — preferred for MOFU/BOFU):**
```
Include titles that buy AND titles that champion internally:
Buyer titles: VP [Function], Director [Function], Head of [Function], Chief [X] Officer
Champion titles: Senior Manager, Manager (function-specific)

Always exclude: Intern, Coordinator, Entry Level, Assistant
```

**Seniority + Function (efficient combination for scale):**
```
Function: [ICP function]
Seniority: Director, VP, C-Level, Owner, Partner

Reaches decision-makers without manually listing every possible title.
Works well for TOFU/awareness campaigns.
```

**Company Size:**
```
LinkedIn size ranges:
SMB: 51-200, 201-500
Mid-market: 501-1000, 1001-5000
Enterprise: 5001-10000, 10001+

Use ranges that match your ICP — don't select all sizes.
```

**Industry (be specific):**
```
Avoid: "Technology" (too broad)
Use instead:
- Computer Software
- Internet
- Information Technology and Services
For healthcare: Hospital & Health Care, Medical Practice, Health Wellness Fitness
For finance: Financial Services, Investment Management, Banking
```

### Full ICP Audience Example

```
Target: VP of Sales at 200-1000 person SaaS companies

Option A (title-based — precise):
Job Titles: VP Sales, VP of Sales, Director of Sales, Head of Sales, Chief Revenue Officer
Company Size: 201-500, 501-1000
Industry: Computer Software, Internet, Information Technology

Option B (function-based — larger scale):
Job Function: Sales
Seniority: Director, VP, C-Level
Company Size: 201-1000
Industry: Computer Software, Internet, Information Technology

Exclusions (always):
- Existing customers (upload suppression list)
- Job Function: Human Resources (SDRs/BDRs sometimes have "sales" in title)
- Company names: [your list of existing customers]
```

### Audience Size Guidelines

| Size | Precision | Best Use |
|---|---|---|
| Under 10K | Very high | InMail, ABM campaigns |
| 10K-50K | High | Lead gen, MOFU |
| 50K-200K | Good | Sponsored content, MOFU |
| 200K-500K | Moderate | TOFU awareness |
| 500K+ | Low | Only for broad brand campaigns |

### LinkedIn Matched Audiences (Advanced)

**Account list targeting (best for ABM):**
- Upload CSV of target company names or domains
- Layer on title/seniority to reach specific buyers at those companies
- Minimum 300 companies; 1,000+ for reliable delivery

**Contact list targeting:**
- Upload email list of known contacts (leads, event attendees, past customers)
- ~50-60% match rate typical
- Use for: webinar follow-up, reactivating cold leads

**Website retargeting:**
- Install LinkedIn Insight Tag on your site
- Audiences by page visited — pricing page visitors are highest intent
- Segment: all visitors, blog visitors, pricing visitors, demo page visitors

**Lookalike audiences:**
- Best seed: closed-won customer email list
- Use for TOFU expansion once direct targeting is saturated

## Google Audience Targeting

### Search Intent Tiers

```
High intent (BOFU campaigns):
"[your product] pricing" / "[your product] demo" / "best [category] software"
"[competitor] alternative" / "[category] platform comparison"

Medium intent (MOFU):
"how to [solve pain you address]" / "[category] software for [industry]"
"improve [metric your product affects]"

Awareness (TOFU — broad match, low bid):
"[pain keyword]" / "[industry] challenges" / "[category] trends"
```

### Audience Layering

Layer these signals onto keyword campaigns for precision:
- **In-market audiences:** Google's signal that user is actively researching your category
- **Customer match:** Upload email list to target/exclude
- **Remarketing lists (RLSA):** Bid higher on searches from prior site visitors
- **Similar audiences:** Google lookalike based on your best audiences

## Exclusion Strategy

**Always exclude from all campaigns:**
- Existing customers (protect relationship, save budget)
- Job titles: Intern, Student, Entry Level, Assistant
- Industries clearly outside your ICP
- Geographies you don't sell to

**LinkedIn-specific:**
- Companies: [your customer list]
- Specific competitor employees (if you don't want to sell to them)
- Job function mismatches (if selling to Marketing, consider excluding Sales-only seniorities)

## Audience Testing

Run 2-3 parallel audience variants on new campaigns:
- Variant A: Function + seniority (broader)
- Variant B: Title-based (more precise)
- Variant C: Account list (if available)

Compare CPL, lead quality, MQL rate at 4 weeks. Scale budget to best performer.
