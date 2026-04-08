# Aimersion AI Plugin Marketplace

**71 production-ready AI plugins for every industry, every role, every business.**

Built by [Aimersion AI](https://aimersion.ai) — DFW, Texas.

> ✅ **Tested and verified working** — Skills load correctly and produce accurate, professional outputs across Claude.ai, Claude Code CLI, and the Anthropic API.

---

## How to Use

### Option 1 — Claude.ai (Easiest, No Setup)

1. Browse the [plugin catalog](https://aimersion.github.io/aimersion-marketplace/)
2. Click a plugin → copy the skill content
3. Go to [claude.ai](https://claude.ai) → open or create a **Project**
4. Click **Edit instructions** → paste the skill content
5. Chat normally — the skill activates automatically

The skill stays active for every conversation in that project. No CLI, no install, no configuration.

---

### Option 2 — Claude Code CLI (Full Experience)

**Install a plugin with one command:**

```bash
curl -sL https://raw.githubusercontent.com/aimersion/aimersion-marketplace/main/install.sh | bash pool-service-operator
```

Or run without arguments to see all available plugins:

```bash
curl -sL https://raw.githubusercontent.com/aimersion/aimersion-marketplace/main/install.sh | bash
```

**What it does:**
- Downloads all skill SKILL.md files → appends to your `CLAUDE.md`
- Installs slash commands → `~/.claude/commands/`
- Skills activate automatically when you run `claude` in that directory

**Manual install (any single skill):**

```bash
# Append a skill to your CLAUDE.md
curl -sL https://raw.githubusercontent.com/aimersion/aimersion-marketplace/main/plugins/pool-service-operator/skills/chemical-calculator/SKILL.md >> CLAUDE.md

# Run Claude Code
claude
```

> **Note:** The `/plugin marketplace add` and `/plugin install` slash commands shown in older docs are not yet available in Claude Code. The curl method above is the correct install path today. We'll update install commands when Anthropic ships native plugin support.

---

### Option 3 — API / System Prompts

Each skill is a standalone markdown file. Fetch and inject directly into your system prompt:

```python
import urllib.request

def load_skill(plugin, skill):
    url = f"https://raw.githubusercontent.com/aimersion/aimersion-marketplace/main/plugins/{plugin}/skills/{skill}/SKILL.md"
    with urllib.request.urlopen(url) as r:
        return r.read().decode()

skill = load_skill("pool-service-operator", "chemical-calculator")

response = anthropic.messages.create(
    model="claude-sonnet-4-20250514",
    system=f"You are a pool service assistant.\n\n{skill}",
    messages=[{"role": "user", "content": "FC 1.2, pH 7.9, TA 70, CH 180, CYA 30 — 18,000 gal plaster pool"}]
)
```

Skills are composable — stack multiple SKILL.md files in a single system prompt to create compound agents.

---

## Verified Test Results

These plugins were live-tested on Claude Code 2.1.70 using the manual CLAUDE.md install method:

| Plugin | Skill Tested | Result |
|---|---|---|
| `pool-service-operator` | `chemical-calculator` | ✅ Correct dosing plan — right order (TA→pH→CH→Cl→CYA), accurate amounts, product-specific notes |
| `pool-service-operator` | `customer-communicator` | ✅ Professional SMS — mentioned specific issues, set next visit, branded as Simplified Pools |
| `saas-growth-operator` | `churn-analyzer` | ✅ Full segmented analysis — NRR model, 6-month targets per tier, $18-25K MRR impact calc |

**Noise level:** Zero. Skills only activate when loaded into context — no background activation.

---

## Plugin Catalog (71 Plugins)

### 🔨 Trades & Home Services
| Plugin | Description |
|--------|-------------|
| `pool-service-operator` | Route planning, chemical dosing, seasonal maintenance, customer communications, equipment advisory |
| `landscaping-business-operator` | Route optimization, seasonal planning, customer retention, estimates |
| `general-contractor-operator` | Bid estimating, project scheduling, change order management, OSHA compliance |
| `electrician-business-manager` | Job estimating, permit tracking, apprentice training, seasonal marketing |
| `roofing-company-operator` | Crew dispatch, storm response, estimates, lead generation, warranty management |
| `painting-contractor-helper` | Color consultation, commercial proposals, crew scheduling, estimates |

### 🏥 Healthcare
| Plugin | Description |
|--------|-------------|
| `dental-practice-autopilot` | Patient reactivation, insurance verification, review management, marketing campaigns |
| `mental-health-practice-helper` | Session notes, intake processing, insurance navigation, ethical marketing |
| `chiropractic-practice-builder` | Care plan communication, patient reactivation, referral programs |
| `home-health-agency-operator` | Caregiver scheduling, Medicare compliance, quality improvement |
| `medical-device-sales-rep` | Surgical case prep, clinical evidence, territory planning |
| `pharmacy-operations` | Inventory optimization, patient adherence, compliance tracking |
| `veterinary-practice-manager` | Client communications, inventory tracking, wellness plan design |

### 💼 Business & SaaS
| Plugin | Description |
|--------|-------------|
| `saas-growth-operator` | Churn analysis, expansion planning, onboarding optimization, pricing strategy |
| `dev-agency-manager` | Proposals, client reports, lead qualification, resource planning |
| `product-launch-planner` | Timelines, audience building, content planning, post-launch analysis |
| `franchise-operator` | Compliance monitoring, financial analysis, local marketing, unit benchmarking |
| `it-services-provider` | QBRs, security audits, technology assessments, MSP operations |

### 📢 Marketing
| Plugin | Description |
|--------|-------------|
| `seo-content-machine` | Keyword research, blog writing, on-page optimization, content calendars |
| `competitive-intel-monitor` | Battlecards, CI briefs, market trends, pricing intelligence, win/loss |
| `social-media-manager-pro` | Platform-specific content, engagement, analytics, crisis management |
| `email-marketing-autopilot` | Drip sequences, newsletters, subject line optimization, deliverability |
| `influencer-affiliate-manager` | Creator vetting, contracts, affiliate program design, FTC compliance |
| `review-feedback-manager` | Review responses, reputation management, sentiment analysis |

### ⚖️ Legal
| Plugin | Description |
|--------|-------------|
| `solo-attorney-practice` | Billing, case management, client intake, document drafting |
| `family-law-assistant` | Custody analysis, mediation prep, court filings |
| `criminal-defense-toolkit` | Case analysis, motion drafting, discovery tracking |
| `immigration-law-helper` | Case tracking, document checklists, RFE responses |
| `corporate-law-assistant` | M&A tracking, board prep, entity formation, contract review |

### 💰 Financial Services
| Plugin | Description |
|--------|-------------|
| `financial-advisor-practice` | Portfolio reviews, market commentary, compliance docs |
| `mortgage-broker-assistant` | Pre-qualification, rate shopping, pipeline tracking |
| `tax-prep-practice` | Document checklists, deduction finding, extension management |
| `wealth-management-advisor` | Portfolio reporting, tax strategies, estate planning |
| `insurance-agency-operator` | Coverage reviews, cross-selling, retention campaigns |

### 🚗 Automotive
| Plugin | Description |
|--------|-------------|
| `auto-dealership-operator` | BDC templates, inventory analysis, lead nurture, service retention |
| `auto-repair-shop-manager` | Customer communication, job estimates, review management |
| `fleet-management-assistant` | Maintenance scheduling, compliance tracking, cost analysis |
| `auto-detailing-business` | Package building, fleet proposals, loyalty programs |
| `car-wash-operator` | Membership management, weather-triggered marketing, staff scheduling |

### 🎓 Education
| Plugin | Description |
|--------|-------------|
| `college-admissions-counselor` | Essay coaching, school matching, financial aid navigation |
| `online-course-creator` | Curriculum design, launch campaigns, student engagement |
| `tutoring-business-operator` | Student assessments, differentiated lesson plans, parent reports |
| `k12-school-administrator` | Parent communications, grant applications, enrollment campaigns |
| `corporate-trainer` | Workshop design, e-learning development, onboarding, ROI measurement |

### 🏨 Hospitality
| Plugin | Description |
|--------|-------------|
| `hotel-operations-manager` | Revenue optimization, guest communications, quality audits |
| `wedding-planner-assistant` | Day-of coordination, vendor management, budget tracking |

### ⚙️ Operations & Manufacturing
| Plugin | Description |
|--------|-------------|
| `warehouse-manager` | KPI tracking, labor planning, layout optimization |
| `supply-chain-manager` | Demand forecasting, vendor evaluation, logistics optimization |
| `production-planner` | Scheduling, quality control, lean/continuous improvement |

### 🧠 Knowledge Work Suites
| Plugin | Description |
|--------|-------------|
| `engineering` | Code review, system design, incident response, tech debt |
| `product-management` | Feature specs, roadmaps, user research, sprint planning |
| `sales` | Account research, call prep, outreach, pipeline review |
| `data` | SQL queries, statistical analysis, dashboards |
| `marketing` | Content creation, campaign planning, SEO, performance reporting |
| `finance` | Variance analysis, journal entries, reconciliation, SOX |
| `legal` | NDA triage, contract review, compliance checks |
| `human-resources` | Recruiting, interview prep, compensation benchmarking |
| `operations` | Process docs, change management, vendor reviews |
| `design` | Accessibility reviews, design critiques, developer handoffs |
| `customer-support` | Ticket triage, response drafting, knowledge base management |
| `productivity` | Memory management, task management |
| `enterprise-search` | Multi-source search orchestration |
| `bio-research` | Bioinformatics workflows, single-cell RNA-seq, nf-core |

---

## Repository Structure

```
aimersion-marketplace/
├── .claude-plugin/
│   └── marketplace.json          # Registry of all 71 plugins
├── plugins/
│   └── [plugin-name]/
│       ├── .claude-plugin/
│       │   └── plugin.json       # Plugin manifest
│       ├── skills/
│       │   └── [skill-name]/
│       │       └── SKILL.md      # Self-contained skill definition
│       └── commands/
│           └── [command].md      # Slash command definitions
├── install.sh                    # One-command installer for Claude Code
├── index.html                    # GitHub Pages marketplace UI
└── README.md
```

---

## Contact

- **Website:** [aimersion.ai](https://aimersion.ai)
- **Email:** jlynch@aimersion.ai
- **GitHub:** [github.com/aimersion-ai](https://github.com/aimersion-ai)

## License

MIT © Aimersion AI
