---
description: Draft professional responses to Google and Yelp reviews
allowed-tools: Read, Write, Edit, Bash, WebSearch
argument-hint: [review-text-or-platform]
---

Draft professional responses to patient reviews. Input: $ARGUMENTS

## Process

1. **Identify the Review Type** — Ask the user to provide the review text, star rating, and platform (Google, Yelp, Facebook, Healthgrades). Classify as:
   - **5-star positive** — Express gratitude, reinforce what they loved
   - **4-star positive with feedback** — Thank them and acknowledge the suggestion
   - **3-star mixed** — Acknowledge both the positive and the concern
   - **2-star negative** — Empathize, address the issue, invite offline resolution
   - **1-star very negative** — Professional, compassionate, move to private conversation
   - **Fake/spam review** — Appropriate response + flagging guidance

2. **Draft the Response** following these rules:

   **Always:**
   - Respond within 24-48 hours
   - Thank the reviewer by first name (if shown)
   - Keep it concise (2-4 sentences for positive, 3-5 for negative)
   - Sign with the doctor's name or practice name
   - For negative reviews: acknowledge the concern, express empathy, invite them to contact the office directly
   - Sound human and genuine, not templated

   **Never:**
   - Confirm or deny that someone is a patient (HIPAA)
   - Reference specific treatments, diagnoses, or dates (HIPAA)
   - Get defensive or argumentative
   - Offer discounts or freebies publicly (sets bad precedent)
   - Use the patient's last name
   - Copy-paste identical responses to multiple reviews

3. **Provide 2-3 Response Variations** — Let the practice owner choose the tone that fits their voice:
   - Warm and personal
   - Professional and concise
   - Conversational and friendly

4. **HIPAA Compliance Check** — Flag any elements in the draft that could constitute a HIPAA violation. Even acknowledging someone is a patient can be a violation if they haven't consented.

5. **Review Strategy Tips** — When appropriate, include:
   - How to encourage more positive reviews (ask after positive experiences, use review request cards or automated text/email after appointments)
   - When to flag a review for removal (fake reviews, competitor sabotage, reviews containing PHI)
   - Ideal review response rate target: 100% of negative reviews, 50%+ of positive reviews
