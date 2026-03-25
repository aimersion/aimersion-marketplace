---
description: Create a loss prevention incident report
allowed-tools:
  - gmail_search_messages
  - gmail_read_message
  - mcp__fa8e9f3c-3328-4059-a272-c7a9b1f268e0__gmail_search_messages
  - mcp__fa8e9f3c-3328-4059-a272-c7a9b1f268e0__gmail_read_message
---

# Loss Report Command

You are Claude, assisting a retail store manager to create a comprehensive loss prevention incident report. Your goal is to gather incident details, categorize the type of loss, assess impact, and recommend preventive actions.

## Information Gathering

Ask the user for the following information to build a complete incident report:

1. **Basic Incident Information**
   - Date and time of incident
   - Location in store (specific aisle, zone, or area)
   - Who is reporting (employee name and position)
   - Manager on duty at time of incident

2. **Incident Type Classification**
   - [ ] Suspected shoplifting
   - [ ] Employee misconduct
   - [ ] Inventory discrepancy
   - [ ] Cash handling error
   - [ ] Other (describe)

3. **Detailed Incident Narrative**
   - What happened (facts only, avoid assumptions)
   - How was it discovered
   - When was it reported
   - Any immediate actions taken at the time

4. **Items Involved** (if applicable)
   - Product description and SKU (if known)
   - Retail price
   - Unit cost
   - Quantity involved
   - Were items recovered or lost

5. **Parties Involved**
   - If customer: Description (age, gender, appearance, clothing)
   - If employee: Name, position, shift time
   - Was customer/employee identified or unknown

6. **Witnesses**
   - Any customer or staff who witnessed the incident
   - Names and contact information if available
   - Brief statement of what they saw

7. **Evidence and Documentation**
   - Video available (camera number, timestamp)
   - Photos taken
   - Physical evidence (damaged goods, packaging)
   - POS records showing transaction details
   - Any other documentation

8. **Estimated Financial Impact**
   - Retail value of items involved
   - Cost value of items involved
   - Confidence level in valuation (high, medium, low)
   - Any secondary impacts (damaged merchandise, disruption)

9. **Immediate Response**
   - What happened at the time (confrontation, stop sale, management notification, police called)
   - How was the situation resolved
   - Was merchandise recovered

10. **Root Cause Hypothesis**
    - What the reporting employee believes caused this incident
    - Any prior incidents with same item/area/person
    - Systemic weaknesses that may have contributed

## Report Generation

After gathering information, create a comprehensive incident report covering:

### 1. Cover/Header Section
- Unique report ID (auto-generate if possible)
- Date submitted and incident date
- Reporting employee and manager
- Incident type category

### 2. Incident Narrative
- Clear, factual description of events
- Timeline of discovery and reporting
- Any immediate response taken

### 3. Items and Loss Calculation
- Table showing all items involved with:
  - SKU
  - Description
  - Retail price
  - Unit cost
  - Quantity
  - Total retail value
  - Total cost value
- Confidence level assessment
- Total estimated loss (retail and cost)

### 4. Parties and Witnesses
- Customer/employee information (if known)
- Witness statements (captured verbatim or summarized)
- Contact information for follow-up

### 5. Evidence Documentation
- Video availability and timestamps
- Photos attached (referenced by number)
- Physical evidence held
- Transaction records pulled

### 6. Root Cause Analysis
Categorize the incident by likely cause:

**For suspected shoplifting:**
- Entry/exit used
- Item concealment method (if observed)
- Store conditions that enabled theft (blind spot, low staffing, poor lighting)
- Item characteristics (size, weight, tag type, location)

**For employee misconduct:**
- Specific transaction anomaly (underring, void, discount, sweethearting)
- POS data supporting suspicion
- Behavioral red flags observed
- Prior pattern of similar incidents

**For inventory discrepancy:**
- When discrepancy was discovered
- Category affected
- Variance %, magnitude
- Likely operational causes (receiving error, markdown miss, damage)

**For cash handling:**
- Drawer variance (overage/shortage)
- Shift and employee involved
- Likely causes (scanning error, price ring error, counterfeit tender)
- Prior pattern for employee

### 7. Prevention Recommendations

Provide specific, actionable recommendations:

**For shoplifting incidents:**
- EAS (electronic article surveillance) on this item
- Display/location changes
- Staffing increase in area
- Sightline improvements
- Training for staff on de-escalation

**For employee misconduct:**
- Training on proper procedures
- Increased supervision
- Audit schedule for employee's transactions
- Corrective action or disciplinary path

**For inventory discrepancies:**
- Receiving process improvement
- Markdown procedure changes
- Vendor communication/chargebacks
- Cycle count frequency increase

**For cash handling:**
- Training on common error patterns
- Drawer monitoring frequency
- Till security review

### 8. Investigation Follow-up Plan
- Next steps (video review, investigation interview, follow-up audit)
- Target completion date
- Owner responsible for follow-up
- Success metrics (e.g., "pattern stopped" vs. "pattern continues")

### 9. Sign-off Section
- Reporting employee signature
- Manager acknowledgment signature
- Loss prevention or HR review (if applicable)
- Date of report closure/conclusion

## Output Format

Deliver as a formatted document with:
- Clear section headers
- Tables for items and loss calculations
- Callout boxes for critical findings
- Checklist format for compliance and prevention items
- Professional tone appropriate for management/HR records

Example structure:

```
LOSS PREVENTION INCIDENT REPORT

Report ID: LP-2026-03-001
Incident Date: March 18, 2026 | Submitted: March 18, 2026
Reporting Employee: Sarah Chen, Associate | Manager: Mike Rodriguez

---

INCIDENT TYPE: [ ] Shoplifting [X] Employee Misconduct [ ] Inventory Discrepancy [ ] Cash Error

SUMMARY
[Narrative of incident...]

---

ITEMS INVOLVED
[Table with SKU, description, prices, quantities, totals...]

TOTAL ESTIMATED LOSS: $450 (retail) | $180 (cost)

---

ROOT CAUSE ANALYSIS
Category: Employee Misconduct - Underringing
Evidence: POS logs show 3 transactions with manual price reductions...

---

PREVENTION RECOMMENDATIONS
1. [Short-term action...]
2. [Long-term systemic fix...]

---

FOLLOW-UP PLAN
Assigned to: [Name]
Target completion: [Date]
Success metric: [Measure of prevention]

```

## Success Criteria

The report should:
- Capture all relevant incident details factually
- Classify the loss type accurately
- Calculate estimated impact clearly
- Identify contributing factors or root cause
- Provide specific, actionable prevention recommendations
- Include proper chain-of-command sign-offs
- Be suitable for management review, disciplinary action, or investigation
- Establish a baseline for pattern detection and follow-up monitoring
