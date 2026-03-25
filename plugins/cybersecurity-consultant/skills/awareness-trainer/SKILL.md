---
name: awareness-trainer
description: >
  Create security awareness training content, phishing simulation campaigns, and security education materials. This skill should be used when the user asks about "security awareness training", "phishing simulation", "security training content", "security awareness program", "phishing test", "security education", "social engineering training", "cybersecurity training", "security culture", or needs help designing, creating, or improving security awareness programs and materials. Also trigger when discussing security champions programs, gamified security training, or measuring security culture.
---

# Awareness Trainer

Design and create effective security awareness training programs and materials.

## Training Program Framework

### The Security Awareness Maturity Model

**Level 1: Compliance-Focused**
- Annual training to check the box
- Generic content, low engagement
- Minimal behavior change

**Level 2: Awareness-Building**
- Regular communications and tips
- Phishing simulations with remediation
- Role-based content differences

**Level 3: Behavior-Changing**
- Continuous micro-learning
- Real-time teachable moments
- Metrics-driven content optimization
- Department-specific scenarios

**Level 4: Culture-Embedding**
- Security champions program
- Gamification and positive reinforcement
- Peer-to-peer learning
- Security integrated into daily workflows

### Training Cadence

| Activity | Frequency | Duration |
|----------|-----------|----------|
| Foundational training (new hire) | Once (onboarding) | 45-60 min |
| Annual refresher | Annually | 30-45 min |
| Monthly micro-learning | Monthly | 5-10 min |
| Phishing simulations | Monthly | N/A |
| Security tips/newsletters | Bi-weekly | 2-3 min read |
| Role-specific deep dives | Quarterly | 15-20 min |
| Tabletop exercises | Semi-annually | 60-90 min |

### Content Topics (Priority Order)

1. **Phishing and social engineering** — #1 attack vector
2. **Password and authentication** — MFA, password managers
3. **Data handling** — classification, sharing, disposal
4. **Reporting procedures** — how to report suspicious activity
5. **Remote work security** — VPN, home network, physical security
6. **Mobile device security** — BYOD, app permissions
7. **Social media hygiene** — oversharing, OSINT risks
8. **Physical security** — tailgating, clean desk, visitor management
9. **AI and emerging threats** — deepfakes, AI-powered phishing

For detailed training materials and templates, read `references/training-materials.md`.

## Phishing Simulation Program

### Simulation Difficulty Progression

**Easy (Months 1-3):**
- Obviously suspicious sender address
- Generic greeting ("Dear User")
- Spelling/grammar errors
- Clearly suspicious link on hover
- Example: "You have won a prize! Click here to claim"

**Medium (Months 4-6):**
- Plausible sender (internal or known brand)
- Personalized with first name
- Realistic pretext (IT support, HR update, delivery notification)
- Link URL looks similar to legitimate domain
- Example: "Your password expires in 24 hours — update here"

**Hard (Months 7-12):**
- Spoofed internal sender
- References real internal projects or events
- Urgency and authority ("CEO needs this now")
- Link domain closely mimics real domain
- Example: Forwarded chain from "CFO" about urgent wire transfer

### Metrics and Benchmarks
- **Click rate**: Industry avg 20-30%, target <5% after 12 months
- **Report rate**: Target >70% of simulated phishes reported
- **Time to report**: Measure how quickly users report suspicious emails

## Output Guidelines

When creating training content:
- Use real-world examples (sanitized) — abstract threats don't motivate action
- Keep modules short (5-10 min for micro-learning)
- Include interactive elements (quizzes, simulated scenarios)
- Positive framing: "here's how to protect yourself" not "don't be stupid"
- Multiple formats: video scripts, slide decks, email newsletters, posters
- Include measurement plan for every training initiative
