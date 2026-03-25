---
name: "Contract Reviewer"
description: "Reviews commercial contracts through clause-by-clause analysis, identifies risk exposures, flags key issues by severity, suggests redline language, and compares terms against market standards for negotiation strategy."
version: 0.1.0
---

# Contract Reviewer Skill

## Overview

This skill provides systematic contract analysis for corporate attorneys negotiating commercial agreements. The contract-reviewer enables thorough risk assessment, clause-level review, redline preparation, market standard comparison, and negotiation strategy development for customer agreements, vendor agreements, partnerships, service agreements, financing arrangements, and other material contracts.

## Core Capabilities

### 1. Contract Classification and Context

**Contract types** determine which clauses are critical and what market standards apply:

**Customer/Client Agreements** — Agreements with end customers or clients for products or services. Key issues: payment terms, delivery/service level commitments, liability limitations, indemnification, IP ownership, termination rights. Buyer typically has negotiating leverage; seller often required to accept standard terms.

**Vendor/Supplier Agreements** — Agreements with vendors providing products or services to company. Key issues: delivery schedules, payment terms, warranty/indemnification, supply continuity, price adjustment, termination rights. Vendor often has take-it-or-leave-it terms; key negotiation points relate to price and service levels.

**Service Agreements** — Ongoing services (IT, consulting, outsourced functions). Key issues: service levels, term and renewal, termination notice, data security, IP ownership, staff transitions, pricing escalation. Critical for business continuity; termination risk must be managed.

**Partnership Agreements** — Joint ventures, strategic alliances, channel partnerships. Key issues: governance, profit/loss sharing, capital contributions, decision-making, termination, non-compete. Requires alignment on core business objectives.

**Financing Agreements** — Credit facilities, term loans, equipment financing. Key issues: interest rates, covenants, financial ratios, default provisions, collateral, prepayment, lender rights. Tightly negotiated by lenders; limited flexibility.

**Licensing Agreements** — Technology, IP, or trademark licenses. Key issues: scope of rights, term, royalties, sublicense restrictions, audit rights, termination, improvement ownership. Highly variable based on value of licensed IP.

**Non-Disclosure Agreements** — Confidentiality protections. Key issues: definition of confidential information, permitted use, retention requirements, return/destruction, term of protection, carve-outs. Often standardized with limited negotiation opportunity.

**Employment/Contractor Agreements** — Individual employment or contractor relationships. Key issues: term, compensation, benefits, non-compete/non-solicitation, confidentiality, invention assignment, termination. Heavily regulated by employment law.

### 2. Clause-by-Clause Analysis Framework

**Critical Clauses** appear in most commercial contracts and establish core obligations and risk allocation:

**Payment Terms and Pricing**
- **Analysis:** When payment due; discounts for early payment; late payment penalties; price increases; adjustment mechanisms
- **Red Flags:** Indefinite payment terms; unlimited price increases; retroactive price changes; currency fluctuation risk (international)
- **Market Standards:** Net 30 is common for B2B; annual 3-5% price increases standard; late payment penalties 1-2% monthly; discounts 2-3% for 10-day payment
- **Redline Approach:** Define payment due date clearly; limit price increases to CPI or agreed schedule; negotiate late payment interest; clarify currency and FX risk allocation

**Delivery and Service Levels**
- **Analysis:** When deliverables due; acceptance criteria; service level metrics; remedies for non-performance; cancellation rights
- **Red Flags:** Unrealistic delivery timelines; undefined acceptance criteria; no service level protections; unilateral cancellation rights; penalties for delay
- **Market Standards:** 5-10 day delivery for standard items; 30-90 days for custom work; uptime SLAs 95-99.9% for cloud services; penalties 10-20% of monthly fees
- **Redline Approach:** Specify acceptance criteria in detail; establish achievable delivery dates; define SLAs quantitatively; establish penalties for non-compliance; require notice for delay

**Term, Renewal, and Termination**
- **Analysis:** Initial term length; renewal options and notice requirements; termination rights (for convenience or for cause); notice periods
- **Red Flags:** Indefinite auto-renewal; short termination notice (30 days or less); termination only for cause with high burden; no termination for material breach; holdover provisions
- **Market Standards:** 1-3 year terms typical; 30-90 day renewal notice; 30-90 day termination notice; termination for material breach with 15-30 day cure period
- **Redline Approach:** Limit auto-renewal (require affirmative consent); establish clear termination rights for material breach with adequate cure period; negotiate termination for convenience with notice; clarify post-termination obligations

**Limitation of Liability**
- **Analysis:** Caps on total liability; exclusions of consequential, indirect, special damages; carve-outs from caps (e.g., indemnification, IP infringement); how caps are calculated
- **Red Flags:** Uncapped liability; overly broad indemnification exceptions; different caps for different liability types; caps inadequate for potential exposure
- **Market Standards:** Liability capped at 12-24 months of contract value for service agreements; 1-2x contract value for product; carve-outs for indemnification, IP, confidentiality, death/injury typically standard
- **Redline Approach:** Establish liability cap at foreseeable damage level; specify what losses are excluded (consequential, incidental, lost profits); clarify carve-outs carefully; ensure caps are symmetric (both parties)

**Representations and Warranties**
- **Analysis:** What company is representing as true about product/service; authority to enter agreement; compliance with law; no conflicts; ownership of IP; freedom to operate
- **Red Flags:** Unlimited representations; representation of regulatory compliance without qualification; broad IP representations; warranty of results; representations about future performance
- **Market Standards:** Basic reps (authority, no conflicts, ownership of IP) standard; limited reps on product quality/fitness for particular purpose; reps qualified by disclosed exceptions; reps survive post-closing (12-18 months typical)
- **Redline Approach:** Limit reps to factual statements company can verify; add carve-outs for disclosed exceptions; narrow IP reps to company's own IP (not third-party); qualify compliance reps with "to the best of knowledge"; limit survival period

**Indemnification**
- **Analysis:** Who indemnifies whom; what triggers indemnification (third-party claims, breach); indemnifying party's control of defense; settlement authority; cap on indemnified amounts
- **Red Flags:** Unlimited indemnification; indemnification for other party's negligence or breach (one-way); indemnifying party has no control over defense; no cap on indemnified amounts; indemnification requires specific notice or action within short window
- **Market Standards:** Both parties typically indemnify for own breaches and third-party claims (mutual); indemnifying party controls defense; indemnified party can participate; settlement requires consent; indemnification subject to liability cap; notice requirement 30 days or reasonable opportunity
- **Redline Approach:** Ensure indemnification is mutual; limit to claims arising from indemnifying party's breach or failure to comply; allow controlling party to retain defense counsel; require other party consent to settlement; ensure indemnification subject to liability cap; require prompt notice but allow reasonable opportunity

**Confidentiality**
- **Analysis:** What information is confidential; permitted uses; retention period; disclosure restrictions; return/destruction post-termination; exceptions (public domain, independently developed)
- **Red Flags:** Overly broad definition (all information confidential); indefinite retention requirements; disclosure prohibited to employees or advisors; no exceptions for public domain or independently developed; return of information impractical
- **Market Standards:** Confidential information defined as non-public information marked or identified as confidential; exceptions for public domain, independently developed, required disclosure by law; 3-5 year retention standard; permitted disclosure to employees, contractors, advisors on need-to-know basis; return/destruction on request with certification
- **Redline Approach:** Narrow confidential information definition; include standard exceptions; limit retention to practical business needs (3-5 years); permit disclosure to employees/contractors/advisors with confidentiality obligations; establish procedure for return/destruction

**Intellectual Property Ownership**
- **Analysis:** Ownership of work product or deliverables; ownership of modifications or improvements; pre-existing IP rights; background IP; license grants
- **Red Flags:** Ambiguous ownership (joint ownership); all improvements belong to other party; ownership of company's pre-existing IP transferred; company gets no license to improvements; company can't use improvements for other customers
- **Market Standards:** Work product ownership allocated by type (customer-specific improvements to customer; improvements usable by vendor for other customers); pre-existing IP retained by owner; technology/tools used by vendor retained by vendor; license grants specified by scope; sublicense rights addressed
- **Redline Approach:** Clarify ownership of deliverables vs. tools vs. pre-existing IP; specify that company retains ownership of pre-existing IP and enhancements usable for other customers; grant license as needed for other party's purposes; reserve sublicense rights for products/services sold to third parties

**Non-Compete and Non-Solicitation**
- **Analysis:** Geographic scope; temporal scope; definition of restricted activities; exceptions for overlapping business
- **Red Flags:** Indefinite non-compete; worldwide scope without business justification; overly broad definition; no exceptions for related business lines; non-solicit of all employees/customers vs. those involved with contract
- **Market Standards:** Non-competes typically 1-3 years; geographic scope limited to actual customer/market areas; non-solicit of employees/customers involved with contract only (not all employees/customers); exceptions for incidental contact
- **Redline Approach:** Limit temporal and geographic scope to legitimate business need; define restricted activities narrowly; exclude overlapping business lines; limit non-solicit to employees/customers involved with contract; establish exceptions for ordinary business activity

**Force Majeure**
- **Analysis:** What events excuse performance (acts of God, war, pandemic, cyber attack); notice requirements; duration of excusal; remedy (suspension vs. termination); what happens to payment obligations
- **Red Flags:** No force majeure provision; narrow force majeure (only acts of God); no cyber attack coverage (increasingly important); notice required within unrealistic timeframe; unlimited suspension; payment obligations continue during suspension; force majeure never triggers termination right
- **Market Standards:** Force majeure covers acts of God, war, pandemic, cyber attack (increasingly), labor strikes, government action; notice required within 5 business days; suspension up to 90 days typical; termination right if suspension exceeds 90 days; payment obligation suspended proportionately; cyber attack increasingly recognized as force majeure trigger
- **Redline Approach:** Include cyber attack and pandemic as force majeure events; require prompt notice; establish clear trigger (inability to perform despite reasonable efforts); provide termination right if excused for extended period (90+ days); clarify whether payment obligation suspended

**Dispute Resolution and Governing Law**
- **Analysis:** Governing law jurisdiction; dispute resolution mechanism (negotiation, mediation, arbitration, litigation); venue; attorney fees; appeal rights; confidentiality of proceedings
- **Red Flags:** Governing law in counterparty's state without justification; mandatory litigation in inconvenient venue; mandatory arbitration in inconvenient location; waiver of jury trial; no confidentiality for arbitration; loser-pays attorney fees
- **Market Standards:** Governing law chosen by party with negotiating leverage (often counterparty's state); negotiation-mediation before escalation to arbitration or litigation common; arbitration in neutral location; arbitration confidential; no attorney fee shifting (each party bears own costs) or limited fee shifting
- **Redline Approach:** Negotiate for neutral forum or your home state; establish negotiation/mediation step before escalation; preserve litigation option if possible (arbitration finality may be concerning); negotiate mutual fee shifting (or none); ensure adequate confidentiality for disputes; specify appeal or review rights in arbitration

### 3. Risk Assessment Methodology

**Severity Levels** quantify the impact of identified risks:

**Critical Risk** — Threatens core transaction viability, creates material financial exposure, or exposes company to unlimited liability
- **Examples:** Unlimited indemnification; uncapped liability; representations about regulatory compliance company can't verify; one-way non-compete preventing company's business; assignment of company's pre-existing IP
- **Response:** Reject or substantially redline; escalate to business leadership; consider deal viability

**High Risk** — Creates significant financial exposure, unfavorable risk allocation, or operational constraints
- **Examples:** Liability cap below exposure level; one-way indemnification; payment terms unfavorable to cash flow; customer cancellation right on short notice; supplier can terminate supply on 30 days notice
- **Response:** Escalate to business leadership; require business case for acceptance; negotiate to mitigate

**Medium Risk** — Creates modest financial or operational exposure but manageable within business model
- **Examples:** Standard liability caps; market-rate payment terms; reasonable termination notice periods; mutual indemnification with standard carve-outs
- **Response:** Negotiate for favorable terms but may be acceptable at market; confirm alignment with company risk tolerance

**Low Risk** — Standard market terms creating minimal exposure or operational impact
- **Examples:** Market-standard indemnification; standard IP provisions; market-rate payment terms; reasonable service levels
- **Response:** Accept as-is; may not warrant negotiation effort

**Likelihood Assessment** evaluates probability of risk materializing:
- **High Likelihood** — Likely to occur in ordinary course (payment disputes, service level issues, disputes over acceptance)
- **Medium Likelihood** — May occur under certain circumstances (material breach, business discontinuation)
- **Low Likelihood** — Unlikely but catastrophic if occurs (IP infringement, cyber attack)

**Business Impact Analysis** considers:
- **Financial Exposure** — Potential loss if risk materializes (cap amounts, revenue lost, costs incurred)
- **Operational Impact** — Business disruption if risk occurs (service loss, customer impact, personnel constraints)
- **Reputational Impact** — Damage to brand or relationships if risk occurs
- **Strategic Impact** — Impact on company's strategic objectives or market position

### 4. Redline Strategy and Negotiation Approach

**Redline Process** creates leverage for negotiation:

**Red Line (Non-Negotiable)** — Critical issues that are deal-breakers or company cannot accept
- Present as immovable positions
- Provide business rationale
- Offer alternative approaches if possible
- Use sparingly to maintain credibility

**Amber Line (High Priority)** — Important issues requiring substantial movement
- Present with business rationale
- Demonstrate market standard alternatives
- Offer compromises where feasible
- Expect counterparty to push back

**Yellow Line (Standard Negotiation)** — Items amenable to negotiation; seek favorable but realistic terms
- Present as market-based requests
- Be prepared to compromise
- Concede on items of lower priority to create negotiation capital
- Use reciprocal concessions strategy

**Green Light (Market Standard)** — Items aligned with market standards or acceptable as-is
- Signal acceptance to accelerate negotiation
- Use as concession opportunities to build goodwill

**Negotiation Tactics:**

**Anchoring** — Lead with requests favorable to company; provides room for "compromise" to middle ground better than counterparty's original position. Example: Request 12-month liability cap if 24 months is market; counterparty moves toward 18 months (better than their starting 36 months).

**Reciprocal Concessions** — Trade concessions on lower-priority items for movement on priority issues. Example: Accept counterparty's payment terms if they accept your liability cap.

**Market Standards** — Reference comparable market terms to support requests. Example: "Liability caps at 12 months of fees are standard for SaaS agreements; we request the same here."

**Business Rationale** — Explain business reason for position. Example: "We can accept this pricing only if we have termination for convenience within 12 months; otherwise our cash flow exposure is too high."

**Package Deals** — Negotiate multiple issues together rather than individually. Example: "We'll accept your liability cap of 24 months if you accept our 30-day termination notice requirement and payment terms."

**Alternatives** — Present acceptable alternative solutions to problems. Example: "We can't agree to unlimited liability, but we can accept liability cap of 2x annual fees with carve-outs for indemnification."

### 5. Common Contract Issues and Solutions

**Payment Terms Issues:**

*Problem:* Net 60 or Net 90 payment terms unfavorable to company cash flow.
*Solution:* Negotiate to Net 30 or Net 15; offer 2-3% discount for advance payment; implement electronic invoicing and payment processing to accelerate payment; require deposit for large orders or long-term commitments.

*Problem:* Indefinite price increases uncapped by agreement.
*Solution:* Cap annual increases at specific percentage (e.g., 3% annually) or CPI; require notice of any increase (30-90 days); establish price review periods (annual); require mutual agreement for increases above threshold.

**Service Level Issues:**

*Problem:* Ambiguous service level commitment (e.g., "reasonable efforts," "best efforts").
*Solution:* Define SLAs quantitatively (e.g., 99.5% uptime, 4-hour response time); establish penalties for non-compliance (service credits, termination right); create escalation procedures for issues; require monthly reporting against SLAs.

*Problem:* No recourse if vendor fails to meet service levels.
*Solution:* Establish service credits (5-20% of monthly fees) automatically applied; reserve right to terminate if vendor fails to meet SLAs for consecutive months; require root cause analysis and remediation plan.

**Termination Issues:**

*Problem:* Termination for convenience prohibited; termination for cause requires unsustainably high burden of proof.
*Solution:* Negotiate termination for convenience right (with notice period and fee obligations); define material breach clearly with cure period; reserve uncapped termination right for insolvency or regulatory non-compliance.

*Problem:* Automatic renewal with difficult cancellation process.
*Solution:* Require affirmative renewal (eliminate automatic renewal); establish clear notice deadline (60-90 days pre-renewal) and simple cancellation mechanism; calendar renewal dates internally to ensure timely action.

**Liability Cap Issues:**

*Problem:* Cap set too low relative to potential exposure.
*Solution:* Negotiate cap to reasonable multiple of annual fees (12-24x) or specific dollar amount; exclude indemnification from cap (unlimited); ensure cap applies only to indirect damages and preserve direct damage claims.

*Problem:* Carve-outs from liability cap so broad they render cap meaningless.
*Solution:* Negotiate narrow carve-outs (indemnification, confidentiality, IP infringement); ensure carve-outs are mutual; establish separate cap for carve-out items if necessary; exclude direct damages from general cap but preserve indirect damage limitations.

**IP Ownership Issues:**

*Problem:* Customer claims ownership of all work product including company's pre-existing IP.
*Solution:* Clearly separate work product (to customer) from pre-existing IP and tools (to company); license customer's needed work product elements; reserve right to use improvements for other customers; document what IP company contributed pre-engagement.

*Problem:* Company has no right to use improvements or enhancements for other customers.
*Solution:* Negotiate right to use generalizable improvements for other customers (not customer-specific customizations); create separate license for shared improvements; establish innovation/improvement sharing model with upside participation.

**Non-Compete Issues:**

*Problem:* Overly broad non-compete prevents company from serving adjacent customers or markets.
*Solution:* Limit geographic scope to territories where customer actually operates; define restricted activities narrowly (prevent only direct competition, not ancillary services); include carve-out for related services already offered; establish sunset date.

*Problem:* Non-compete prevents hiring key talent from customer.
*Solution:* Negotiate non-solicitation of employees (not non-compete preventing hiring); limit non-solicitation to key account managers (not all employees); establish period limit (1-2 years maximum).

**Dispute Resolution Issues:**

*Problem:* Mandatory arbitration in inconvenient location; arbitration costs prohibitively high.
*Solution:* Negotiate neutral location or virtual arbitration; establish mediation prerequisite to arbitration; limit arbitration to claims above threshold (e.g., over $50k); establish fee-splitting for arbitration costs; preserve litigation for smaller claims.

*Problem:* Dispute resolution favors counterparty (their state law, their courts).
*Solution:* Negotiate neutral jurisdiction or your home state; establish negotiation/mediation step before escalation; preserve jury trial right; establish fee-shifting so prevailing party recovers attorney fees.

### 6. Market Standard Comparison

**Service Agreement Market Standards:**
- Term: 1-3 years (initial); renewal auto-renewal with 60-90 day notice requirement
- Payment: Net 30 to Net 45
- SLAs: 95-99.9% uptime (varies by criticality)
- Liability: Capped at 12-24 months of fees; indirect damages excluded; indemnification excepted
- Confidentiality: 3-5 year duration; standard carve-outs for public domain, required disclosure
- Term and Termination: 30-90 day termination notice; termination for material breach with 15-30 day cure

**Vendor Agreement Market Standards:**
- Payment: Net 30 standard (varies by vendor leverage)
- Delivery: 5-10 days for stock items; 30-90 days for custom
- Warranty: Limited warranty on product/service; fitness for particular purpose disclaimed
- Liability: Capped at 12 months of contract value
- IP: Vendor retains IP in products/tools; customer gets license for use
- Non-Compete: 1-2 years; limited geographic scope
- Termination: 30-90 day notice; for cause with cure period

**Customer Agreement Market Standards:**
- Payment: Net 30 common for B2B; varies by customer leverage
- Delivery: Specified in exhibit or referenced standard (often 30-60 days)
- Service Levels: 95-99.5% uptime common for SaaS; 99.9% for critical systems
- Liability: 12-24 months of fees typical cap; indemnification usually excluded
- IP: Company retains IP in platform/tools; customer gets license to deliverables
- Termination: 30-90 day notice typical; for convenience option common
- Confidentiality: Standard 5-year period

### 7. Integration with Other Skills

The contract-reviewer skill supports deal-tracker (for purchase agreement and ancillary agreement review during M&A) and board-meeting-prep (for board approval of material contracts).

## Application Framework

Use this skill to:

1. **Classify Contracts** — Identify contract type and context to establish appropriate standards
2. **Analyze Key Clauses** — Perform systematic clause-by-clause review against market standards
3. **Assess Risks** — Evaluate severity of identified issues and business impact
4. **Develop Redlines** — Create specific language changes for priority issues
5. **Establish Strategy** — Prioritize negotiation items; identify negotiation capital
6. **Track Counterparty Response** — Monitor counterparty positions and movement
7. **Escalate Issues** — Communicate significant risks to business stakeholders
8. **Document Terms** — Maintain record of negotiated terms for operations and compliance

## Reference Materials

Consult **clause-analysis-guide.md** for detailed review framework for material clauses, market standard benchmarks, common issues, and redline approaches.

Consult **risk-flagging-framework.md** for risk scoring methodology, severity assessment criteria, business impact analysis, and escalation procedures.
