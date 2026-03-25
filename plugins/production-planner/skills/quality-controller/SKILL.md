---
name: quality-controller
version: 0.1.0
description: This skill should be used when the user asks about 'SPC charts', 'statistical process control', 'control charts', 'defect tracking', 'root cause analysis', 'process capability', '5 Why', 'fishbone diagram', 'Ishikawa', '8D problem solving', 'Cpk', 'first-pass yield', or needs help analyzing quality data and solving quality problems.
---

# Quality Controller

## Control Chart Selection Guide

Statistical Process Control (SPC) monitors process stability and capability. Select the correct chart type based on data:

### Variables Data (Measured: length, temperature, pressure)

**X-bar R Chart** (X̄-R): Sample mean and range
- Use when: Subgroup size n = 2 to 10, samples collected regularly (hourly, daily)
- Logic: X̄ chart monitors centering (mean); R chart monitors spread (variation)
- Advantage: Simple, fast; detects both process shift and increased variation
- Example: Bore diameter measured every hour, 5 parts per sample

**X-bar S Chart** (X̄-S): Sample mean and standard deviation
- Use when: Sample size n ≥ 10 or subgroup size varies
- Logic: S chart is more sensitive to variation than R for larger samples
- Advantage: More precise for large samples; better for stable variation
- Example: Surface finish measured continuously; n = 15 per shift

**I-MR Chart** (Individual-Moving Range): Single measurements
- Use when: Individual measurements only (n = 1), cannot collect subgroups
- Logic: I chart = individual values; MR chart = moving range (variation)
- Advantage: When sampling is expensive or destructive testing
- Example: Chemical composition (1 sample = 1 batch); film thickness (destructive test)

### Attribute Data (Counted: defective yes/no, number of defects)

**p-Chart**: Proportion defective
- Use when: Count defects, sample size VARIES (e.g., daily output varies 100-200 units)
- Logic: Tracks fraction defective; limits adjust based on daily sample size
- Example: Daily defect rate (defects/units produced that day)
- Formula: UCL/LCL = p̄ ± 3√(p̄(1-p̄)/n)

**np-Chart**: Count of defectives
- Use when: Count defects, sample size is CONSTANT (e.g., always inspect 100 units/day)
- Logic: Simpler than p-chart when sample size fixed
- Example: Fixed inspection lot (always 100 units); track defect count
- Formula: UCL/LCL = np̄ ± 3√(np̄(1-p̄))

**c-Chart**: Count of defects per unit/area
- Use when: Count multiple defects per item (not just pass/fail), area/unit is constant
- Logic: Poisson distribution; tracks total defects in fixed domain
- Example: Paint defects per panel, solder joints per board
- Formula: UCL/LCL = c̄ ± 3√c̄

**u-Chart**: Count of defects per unit, area VARIES
- Use when: Multiple defects per item, sample size/area varies
- Logic: Adjusts for variable domain (e.g., different panel sizes)
- Example: Defects per linear meter (fabric width varies)
- Formula: UCL/LCL = ū ± 3√(ū/n)

## Control Limit Calculation

### X-bar R Chart

1. Collect 20-30 subgroups (samples) of size n (e.g., n=5)
2. Calculate subgroup means: X̄ᵢ = (x₁ + x₂ + ... + xₙ) / n
3. Calculate subgroup ranges: Rᵢ = max(xᵢ) - min(xᵢ)
4. Overall mean: X̄̄ = (X̄₁ + X̄₂ + ... + X̄ₖ) / k
5. Average range: R̄ = (R₁ + R₂ + ... + Rₖ) / k

**Control Limits**:
- X̄ chart: UCL = X̄̄ + A₂ × R̄; CL = X̄̄; LCL = X̄̄ - A₂ × R̄
- R chart: UCL = D₄ × R̄; CL = R̄; LCL = D₃ × R̄

(Constants A₂, D₃, D₄ depend on sample size; see reference table)

### p-Chart

1. Collect 20-30 samples with varying sample size nᵢ
2. Calculate proportion defective: pᵢ = dᵢ / nᵢ (where dᵢ = number defective)
3. Overall proportion: p̄ = Σdᵢ / Σnᵢ

**Control Limits (per sample i)**:
- UCLᵢ = p̄ + 3√(p̄(1-p̄)/nᵢ)
- LCLᵢ = p̄ - 3√(p̄(1-p̄)/nᵢ)

Limits widen when nᵢ is small (larger variance with small sample).

## Out-of-Control Signals (Western Electric Rules)

A process is considered out-of-control if ANY of these conditions occur:

1. **One point beyond 3-sigma**: Single point outside UCL or LCL → immediate action
2. **Two of three consecutive points beyond 2-sigma**: Trend indicator; likely assignable cause
3. **Four of five consecutive points beyond 1-sigma**: Increased variation, drift detected
4. **Eight consecutive points on same side of center line**: Non-random pattern; process shift
5. **Six consecutive points increasing or decreasing**: Trend (drift) in process mean
6. **Fourteen consecutive points alternating up and down**: Bimodal distribution; mixing or stratification

**Action on signal**: Stop production, investigate root cause (not just re-run), implement corrective action, verify control limit restoration.

## Process Capability

Process capability compares process variation to specification limits.

**Specification Limits**: Customer requirement (e.g., 10.00 ± 0.05 mm → LSL = 9.95, USL = 10.05)

**Cp** (Capability Index): Assumes centering is correct
- Formula: **Cp = (USL - LSL) / (6σ)**
- Logic: 6σ = 99.73% of data (assumes normal distribution, centered)
- Interpretation:
  - Cp < 1.0: Process incapable; exceeds specification frequently
  - Cp 1.0-1.33: Minimally capable; high risk
  - Cp ≥ 1.33: Capable (target); acceptable
  - Cp ≥ 1.67: Very capable; room for drift

**Cpk** (Capability Index, adjusted for centering): Accounts for non-centered process
- Formula: **Cpk = min[(USL - μ) / 3σ, (μ - LSL) / 3σ]**
- Logic: Takes the smaller of upper and lower; reflects worst-case direction
- Interpretation:
  - Cpk < 1.0: Incapable; producing out-of-spec
  - Cpk 1.0-1.33: Minimally capable; risk of defects
  - Cpk ≥ 1.33: Capable (target)
  - Cpk ≥ 1.67: Very capable; room for drift

**Example**:
- LSL = 9.95, USL = 10.05, so Tolerance = 0.10
- μ = 10.00, σ = 0.015
- Cp = 0.10 / (6 × 0.015) = 0.10 / 0.09 = 1.11 (minimally capable, centered)
- Cpk = min[(10.05 - 10.00) / 0.045, (10.00 - 9.95) / 0.045] = min[1.11, 1.11] = 1.11 (centered process)

If μ = 10.02 (shifted):
- Cpk = min[(10.05 - 10.02) / 0.045, (10.02 - 9.95) / 0.045] = min[0.67, 1.56] = 0.67 (incapable!)

## Defect Classification

Prioritize actions based on severity:

| Severity | Definition | Example | Action |
|----------|---|---|---|
| **Critical** | Safety hazard or regulatory violation; customer unavoidable harm | Brake failure, electrical shock hazard, toxic release | Immediate halt; 100% inspection; root cause investigation |
| **Major** | Loss of function; customer realizes product unusable | Engine won't start, control interface frozen, structural crack | Rework/scrap; investigate root cause; update control plan |
| **Minor** | Cosmetic or non-functional; customer may not notice | Surface scratch, color variation, label misplaced | Inspect sample; log; low priority unless repeated |

## Pareto Analysis

**Principle**: 20% of causes account for ~80% of problems. Focus on the vital few.

1. **Data collection**: Track all defects over 1-4 weeks by type/category
2. **Sort by frequency**: Rank defect types from highest to lowest count
3. **Calculate cumulative %**: Running sum of (defect count) / (total defects)
4. **Plot**: Bar chart of frequencies (descending) + line of cumulative %; mark 80% threshold
5. **Focus**: Investigate top 3-4 defect types accounting for ~80%; solve these first

**Example Pareto**:
```
Defect Type    | Count | Cum % | Focus?
---------------|-------|-------|-------
Paint runs     | 28    | 35%   | YES
Surface dent   | 22    | 63%   | YES
Misalignment   | 15    | 82%   | YES (threshold)
Weld crack     | 10    | 95%   |
Color mismatch | 4     | 100%  |
```

Address paint runs, dents, misalignment. Smaller defects wait.

## 5 Why Methodology

Iteratively ask "why" to uncover root cause, not merely symptoms.

**Example**:
1. **Why did the defect occur?** → Surface scratched during packing
2. **Why during packing?** → Protective foam missing
3. **Why was foam missing?** → Packing procedure not followed
4. **Why not followed?** → New temp employee untrained on packing
5. **Why untrained?** → Training program exists but not triggered for new hires

**Root cause**: Onboarding/training system gaps. **Action**: Implement mandatory training checklist before first packing job.

**Caution**: Don't stop at first "why" (symptom). Keep asking until you reach a correctable root cause (process/system, not "human error").

## Fishbone (Ishikawa) Diagram

Organize potential causes across 6M categories:

```
        People          Process         Tools
          |                |              |
          |-- Training     |-- SOP gaps   |-- Worn cutter
          |-- Fatigue      |-- Variation  |-- Calibration
          |                |
        --------- DEFECT (Surface Scratch) ---------
          |                |
          |-- Wrong mat'l  |-- Line speed |-- Humidity
          |-- Mix-up       |-- Temp shift |-- Temp range
          |                |
        Material         Environment     Machine
```

**Process**: 
1. Draw main spine (horizontal) labeled with defect
2. Add 6 branches (diagonal) for 6M categories
3. Brainstorm causes in each category; add sub-branches
4. Use with team; capture all ideas
5. Combine with 5 Why and Pareto to rank and investigate highest-impact causes

## 8D Problem Solving

Structured team-based approach (typically 5-10 days):

| Step | Action | Output |
|------|--------|--------|
| **D0** | Plan: Establish team, schedule, scope | Team roster, timeline |
| **D1** | Describe problem: Who, what, when, where, how much? | Problem statement (SMART) |
| **D2** | Contain: Interim action to prevent recurrence during investigation | Inspection plan, hold disposition |
| **D3** | Root cause analysis: Use 5 Why, fishbone, data | Verified root cause(s) |
| **D4** | Corrective action: Design fix; verify effective | Action plan, Cpk projection |
| **D5** | Implement: Piloting, scale-up, update work instructions | SOP revision, training delivery |
| **D6** | Verify: Confirm fix in full production; monitor metrics | Control chart, >30 samples stable |
| **D7** | Prevent: Update design, process, maintenance to eliminate recurrence | Design review, FMEA update |
| **D8** | Recognize: Team acknowledgment; lessons learned | Report, knowledge management |

## First-Pass Yield (FPY) and Rolled Throughput Yield (RTY)

**First-Pass Yield** = (Units that pass all tests on first attempt) / (Total units produced) × 100

**Rolled Throughput Yield** = Product of FPY for each process step

**Example**:
- Assembly: FPY = 95% (5 defects per 100 units)
- Test: FPY = 98% (2 additional defects per 100 units passing assembly)
- Packaging: FPY = 99% (1 additional defect per 100)
- RTY = 0.95 × 0.98 × 0.99 = 0.922 = 92.2%

Only 92.2% of units pass all steps without rework. 7.8% require rework (cost/delay).

**Improvement**: Target RTY ≥ 98% (equivalent to <2% total defect rate).

## Cost of Quality (CoQ)

Quality costs include:

| Category | Examples |
|----------|----------|
| **Prevention** | Training, process improvement, equipment maintenance, design review, SPC |
| **Appraisal** | Inspection, testing, SPC monitoring |
| **Internal Failure** | Scrap, rework, yield loss, machine downtime, expedited shipping |
| **External Failure** | Warranty, recalls, returns, customer complaints, lost sales, reputation damage |

**Typical distribution** (poorly managed): Prevention 5%, Appraisal 20%, Internal 50%, External 25%

**Target distribution** (well-managed): Prevention 40%, Appraisal 40%, Internal 15%, External 5%

**Insight**: Invest in prevention and appraisal to avoid catastrophic external failure costs.

