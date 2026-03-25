---
name: demand-forecaster
version: 0.1.0
description: This skill should be used when the user asks to 'forecast demand', 'predict sales', 'create a demand plan', 'adjust for seasonality', 'account for promotions', 'statistical forecasting', 'moving average', 'exponential smoothing', 'forecast accuracy', 'MAPE', 'bias', or needs help planning future inventory requirements.
---

# Demand Forecaster Skill

Demand forecasting is the foundation of supply chain planning. Accurate forecasts drive inventory optimization, procurement timing, and capacity planning. This skill guides you through statistical forecasting methods, seasonal adjustment, promotion modeling, and forecast accuracy measurement.

## Forecasting Method Selection Framework

The right method depends on demand patterns in your data. Analyze historical demand for:
- **Trend**: Is demand growing, declining, or stable?
- **Seasonality**: Do you see recurring patterns (weekly, monthly, quarterly, annual)?
- **Variability**: How much volatility is in demand around the trend/seasonal pattern?
- **Forecast Horizon**: How far ahead do you need to forecast?

### Simple Moving Average (SMA)
**Best for:** Stable demand with no significant trend or seasonality

Formula: SMA_n = (D_t + D_{t-1} + ... + D_{t-n+1}) / n

Where n is the number of periods (typically 3-12 months)

Example: 3-month moving average
- D_t (current month) = 100
- D_{t-1} (last month) = 95
- D_{t-2} (two months ago) = 105
- SMA_3 = (100 + 95 + 105) / 3 = 100

**Pros:** Simple, easy to understand, smooths out noise
**Cons:** Lags actual trend, doesn't capture seasonality, equal weight to old vs. recent data
**MAPE:** Typically 15-25% for stable demand

### Weighted Moving Average (WMA)
**Best for:** Stable demand with no seasonality, but you want recent data weighted more heavily

Formula: WMA_n = (w_n × D_t + w_{n-1} × D_{t-1} + ... + w_1 × D_{t-n+1}) / Sum of weights

Weights typically increase toward recent periods. Example weights for n=3:
- w_3 (current) = 3
- w_2 (last month) = 2
- w_1 (two months ago) = 1
- Sum = 6

WMA_3 = (3×100 + 2×95 + 1×105) / 6 = (300 + 190 + 105) / 6 = 98.33

**Pros:** Responds faster to changes, prioritizes recent data
**Cons:** Still lags trend, doesn't capture seasonality
**MAPE:** Typically 12-20% for stable demand with recent changes

### Exponential Smoothing (Single)
**Best for:** Stable demand with no trend or seasonality, with occasional spikes or drops

Formula: F_{t+1} = α × D_t + (1 - α) × F_t

Where:
- F_{t+1} = Forecast for next period
- D_t = Actual demand in current period
- F_t = Forecast from previous period
- α = Smoothing coefficient (0 < α < 1)

Alpha selection:
- α = 0.1-0.2: Smooth, less responsive (stable demand, less volatility)
- α = 0.3-0.5: Moderate (balanced responsiveness)
- α = 0.5-0.9: Very responsive (volatile demand, recent data dominates)

Example with α = 0.3:
- Actual demand today = 100 units
- Forecast from yesterday = 95 units
- Forecast for tomorrow = 0.3 × 100 + 0.7 × 95 = 30 + 66.5 = 96.5 units

**Pros:** Single parameter, simple to implement, adapts to changes
**Cons:** Lags actual trend, doesn't handle seasonality
**MAPE:** Typically 12-18% for stable demand

### Holt's Double Exponential Smoothing
**Best for:** Demand with trend (growing or declining) but no seasonality

Formulas:
- Level: L_t = α × D_t + (1 - α) × (L_{t-1} + T_{t-1})
- Trend: T_t = β × (L_t - L_{t-1}) + (1 - β) × T_{t-1}
- Forecast: F_{t+m} = L_t + m × T_t

Where:
- L_t = Current level (baseline)
- T_t = Current trend (slope)
- m = Number of periods ahead
- α = Level smoothing coefficient
- β = Trend smoothing coefficient

Example: Suppose demand is growing 5% per month
- Current level = 100 units
- Current trend = +5 units/month
- Forecast for 3 months ahead = 100 + (3 × 5) = 115 units

**Pros:** Captures trend, responds to demand changes
**Cons:** More complex, requires two parameters, doesn't handle seasonality
**MAPE:** Typically 10-18% for trending demand without seasonality

### Holt-Winters Seasonal Decomposition
**Best for:** Demand with both trend and seasonality (most real-world products)

Formulas:
- Level: L_t = α × (D_t / S_{t-m}) + (1 - α) × (L_{t-1} + T_{t-1})
- Trend: T_t = β × (L_t - L_{t-1}) + (1 - β) × T_{t-1}
- Seasonality: S_t = γ × (D_t / L_t) + (1 - γ) × S_{t-m}
- Forecast: F_{t+h} = (L_t + h × T_t) × S_{t+h-m}

Where:
- S_t = Seasonal factor
- m = Seasonal cycle length (12 for monthly data with annual seasonality)
- α, β, γ = Smoothing coefficients

**Pros:** Handles trend and seasonality, most realistic for consumer products
**Cons:** Most complex, requires 3 parameters and longer history (minimum 2 full seasonal cycles)
**MAPE:** Typically 8-15% for seasonal demand

**Note:** Use the reference model comparison table for a step-by-step example.

### Linear Regression
**Best for:** Strong, consistent trend over an extended period

Formula: F_t = a + (b × t)

Where:
- a = Intercept
- b = Slope (growth rate per period)
- t = Time period

Example: If regression yields a = 100 and b = 2
- Month 1 forecast = 100 + (2 × 1) = 102
- Month 6 forecast = 100 + (2 × 6) = 112
- Month 12 forecast = 100 + (2 × 12) = 124

**Pros:** Simple, transparent, easy to communicate to leadership
**Cons:** Assumes constant growth rate, ignores seasonality, poor for volatile demand
**MAPE:** Typically 15-30% depending on trend consistency

### Naïve Forecast
**Best for:** Highly volatile demand, use as a baseline to compare other methods

Formula: F_{t+1} = D_t (next period forecast equals actual current demand)

Or seasonal naïve: F_{t+m} = D_{t-m+1} (forecast equals same period last year)

**Pros:** Zero setup, useful baseline, surprisingly accurate for some volatile categories
**Cons:** Extreme responsiveness, doesn't smooth noise
**MAPE:** Varies widely, but often 20-50% for volatile demand

---

## Seasonal Adjustment & Deseasonalization

Many products have strong seasonal patterns (e.g., Christmas toys, summer beverages, winter heating). Seasonal adjustment improves forecast accuracy.

### Step 1: Calculate Seasonal Indices

Seasonal Index = Average demand for period / Average demand across all periods

Example: Monthly demand for holiday-driven product

```
Month    Demand    Annual Avg    Seasonal Index
Jan      80        100           0.80
Feb      75        100           0.75
Mar      85        100           0.85
Apr      95        100           0.95
May      105       100           1.05
Jun      120       100           1.20
Jul      125       100           1.25
Aug      130       100           1.30
Sep      100       100           1.00
Oct      150       100           1.50
Nov      180       100           1.80
Dec      175       100           1.75
```

Sum of indices should = 12 (for 12-month seasonality). If not, normalize.

### Step 2: Deseasonalize Demand

Deseasonalized Demand = Actual Demand / Seasonal Index

This removes the seasonal pattern, revealing the underlying trend.

```
Month    Actual    Seasonal Index    Deseasonalized
Oct      150       1.50              100
Nov      180       1.80              100
Dec      175       1.75              100
Jan      80        0.80              100
Feb      75        0.75              100
```

### Step 3: Forecast Deseasonalized Demand

Apply your statistical method (SMA, exponential smoothing, etc.) to deseasonalized data
- This is cleaner; trend is more visible without seasonal noise

### Step 4: Reseasonalize Forecast

Reseasonalized Forecast = Deseasonalized Forecast × Seasonal Index

Example: If deseasonalized forecast for December = 105, and seasonal index = 1.75
- December forecast = 105 × 1.75 = 183.75 units

---

## Forecast Accuracy Metrics

Measure forecast accuracy to identify which methods work best and where improvements are needed.

### MAPE (Mean Absolute Percentage Error)
MAPE = Mean(|Actual - Forecast| / Actual) × 100%

Interpretation:
- <5% MAPE: Excellent forecast
- 5-10% MAPE: Very good
- 10-15% MAPE: Good
- 15-20% MAPE: Acceptable
- 20%+ MAPE: Poor, method needs review

Example:
```
Period    Actual    Forecast    Error    |Error|    %Error
1         100       95          -5       5          5%
2         110       108         -2       2          1.8%
3         95        100         5        5          5.3%
4         105       103         -2       2          1.9%
MAPE = (5% + 1.8% + 5.3% + 1.9%) / 4 = 3.5% ← Excellent
```

### MAE (Mean Absolute Error)
MAE = Mean(|Actual - Forecast|)

Interpretation: Average error in units. Useful for inventory planning.

Example from above:
- MAE = (5 + 2 + 5 + 2) / 4 = 3.5 units

### BIAS
BIAS = Mean(Forecast - Actual)

Interpretation:
- Positive bias: Consistently overforecasting (excess inventory risk)
- Negative bias: Consistently underforecasting (stockout risk)
- Target: BIAS near zero

Example:
```
Period    Actual    Forecast    Error (F-A)
1         100       95          -5
2         110       108         -2
3         95        100         5
4         105       103         -2
BIAS = (-5 - 2 + 5 - 2) / 4 = -1 ← Slight underforecast bias
```

**Bias Interpretation:**
- If BIAS = -10 units and MAE = 12 units: You're underforecasting most of the time (bias is significant)
- If BIAS = -1 unit and MAE = 15 units: Forecast is unbiased but has high variability

---

## Demand Sensing & Collaborative Adjustments

Statistical forecasts are a baseline. Real-world intelligence improves forecasts significantly.

### Point-of-Sale (POS) Data
- Access to actual customer purchasing data (if you sell through retailers)
- More predictive than orders placed to you (more real-time)
- Adjust forecast upward/downward if POS trends differ from statistical baseline

### Sales Pipeline & Customer Intelligence
- Anticipated orders from sales team
- New customer wins and expected ramp
- At-risk business (customer may reduce purchases)
- Adjust forecast based on pipeline visibility

### Leading Indicators
- Economic indicators: GDP growth, consumer confidence, housing starts
- Industry indicators: Equipment orders, capacity utilization
- Customer industry trends: Are their customers buying more or less?
- Adjust forecast in response to leading indicator changes

### Promotion Calendar & Marketing Plans
- Planned promotions, price reductions, feature advertising
- New product launches or product phase-outs
- Seasonal events, holidays, Black Friday, Prime Day
- Adjust forecast for known promotional lifts

**Demand Sensing Process:**
1. Start with statistical baseline forecast
2. Review POS data and recent sales trends (last 4-8 weeks)
3. Gather sales team input on opportunities and risks
4. Monitor leading indicators
5. Factor in planned promotions
6. Adjust statistical forecast based on this intelligence
7. Document assumptions and adjustments
8. Track actual vs. adjusted forecast to refine process

---

## Promotion Modeling & Lift Factors

Promotions increase demand above baseline. Quantify the lift to avoid over-inventory after promotion ends.

### Promotional Lift Factors by Tactic

| Promotion Type | Typical Lift | Industry Notes |
|---|---|---|
| Price reduction 10% | +30% | Elasticity varies by category; CPG ~20-40% |
| Price reduction 20% | +70% | Higher elasticity expected |
| Feature ad (in-store/email) | +25% | Depends on reach and target audience relevance |
| Display/prominent placement | +35% | End-cap or feature shelf placement |
| BOGO (Buy One Get One) | +100% | Aggressive promotion, high lift but one-time |
| Email campaign (opt-in list) | +15% | Depends on list quality and campaign timing |
| Social media campaign | +10-20% | Highly variable by platform, audience, content |
| Holiday season (Nov-Dec) | +50-100% | Heavily category-dependent |
| Bundle promotion | +40% | Increases basket size; can drive secondary category |

### Promotion Modeling Formula

Promotional Period Forecast = Baseline Demand × (1 + Lift Factor) + Cannibalization

**Cannibalization:** Customers buy during promotion who would have bought later anyway
- If 30% of promotional buyers are just shifting purchases forward, reduce lift by 30%
- Adjusted lift = 100% × (1 - 0.30) = 70%

**Demand After Promotion:** Often dips below baseline
- Pent-up inventory from promotion and forward buying
- Plan additional inventory during promotion, but reduce replenishment after

Example:
```
Baseline monthly demand: 1,000 units
Promotion: 20% price reduction (70% lift factor)
Cannibalization: 25% of additional demand is forward-bought

Promotional Month Forecast:
= 1,000 × (1 + 0.70 × (1-0.25))
= 1,000 × (1 + 0.525)
= 1,525 units

Post-Promotion Month Forecast (next month):
= 1,000 × 0.80 (20% dip due to forward buying)
= 800 units
```

---

## New Product Forecasting

New products lack historical demand data. Use one of three approaches:

### Analogous Product Method
- Identify a similar existing product with known demand pattern
- Apply that product's first-year ramp curve to the new product
- Adjust for differences in market size, price, positioning

Example: Launching a new smartphone
- Analogous product: Smartphone launched 3 years ago by competitor
- That product had: Year 1 = 500K units, Year 2 = 1.2M, Year 3 = 1.5M (maturity)
- New product market = 10% larger, so adjust: Year 1 = 550K, Year 2 = 1.32M, Year 3 = 1.65M

### Market Research & TAM Analysis
- Total Addressable Market (TAM): Total potential market for the category
- Your estimated market share: Based on product positioning, pricing, brand
- Growth rate assumptions

Example: New energy drink
- TAM for energy drinks in region = 50M units/year
- Estimated market share capture: Year 1 = 2%, Year 2 = 4%, Year 3 = 6%
- Forecast: Year 1 = 1M units, Year 2 = 2M units, Year 3 = 3M units

### Pilot/Test Market
- Launch product in small geographic market or limited channel
- Measure actual demand, customer feedback, repeat purchase rates
- Project pilot results to full market

Example: Test market shows 5% repeat purchase rate and 2% market penetration
- Extrapolate to full market once you launch nationally
- Build in learning curve; full market penetration may take 2-3 years

---

## Safety Stock Calculation

Safety stock buffers against demand variability and supply uncertainty. It protects against stockouts without carrying excess inventory.

### Safety Stock Formula

SS = Z × σ_LTD

Where:
- Z = Service level factor (see table below)
- σ_LTD = Standard deviation of demand during lead time

### Service Level Z-Factors

| Service Level | Z Factor | Interpretation |
|---|---|---|
| 50% | 0.0 | Median forecast; 50% chance of stockout |
| 68% | 1.0 | Typical normal distribution (±1σ) |
| 85% | 1.04 | Acceptable for low-value items |
| 90% | 1.28 | Standard for most items |
| 95% | 1.65 | High-value or critical items |
| 98% | 2.05 | Safety-critical or highest priority |
| 99% | 2.33 | Highest service level; expensive |
| 99.9% | 3.09 | Reserved for critical, life-safety items |

### Calculate Standard Deviation of Demand During Lead Time

If you have data on demand variance and lead time variance:

σ_LTD = √(LT × σ_D² + D_avg² × σ_LT²)

Where:
- LT = Average lead time (weeks/months)
- σ_D = Standard deviation of weekly/monthly demand
- D_avg = Average demand per period
- σ_LT = Standard deviation of lead time

**Simplified:** If lead time is consistent and demand is the primary variability:
σ_LTD ≈ √(LT) × σ_D

Example:
- Average lead time = 8 weeks
- Demand variability (weekly): σ_D = 50 units/week
- Average demand = 200 units/week
- Service level = 95% (Z = 1.65)

σ_LTD = √(8 × 50²) = √(8 × 2500) = √20,000 = 141.4 units
SS = 1.65 × 141.4 = 233 units

**Safety Stock Interpretation:**
- Reorder point = Average demand during LT + Safety Stock
- If average demand during 8-week lead time = 200 × 8 = 1,600 units
- Reorder point = 1,600 + 233 = 1,833 units
- Order when inventory reaches 1,833 units

---

## Collaborative Forecasting (S&OP Process)

Sales & Operations Planning (S&OP) is a monthly cadence that aligns demand forecast, supply capability, and business strategy.

### S&OP Process Steps

1. **Demand Planning (Week 1)**
   - Sales/marketing updates demand forecast with latest intel
   - Historical accuracy review: How accurate was last month's forecast?
   - Identify key risks and opportunities

2. **Supply Planning (Week 1-2)**
   - Operations assesses supply capability
   - Identify supply constraints, capacity issues, long lead items
   - Flag supply risks

3. **Pre-Meeting Data Reconciliation (Week 2)**
   - Finance, Ops, Sales align on numbers
   - Resolve data discrepancies
   - Clarify assumptions

4. **Executive Review (Week 3)**
   - Discuss demand vs. supply gaps
   - Agree on demand forecast
   - Make business decisions (accept inventory risk, increase capacity, reduce demand, etc.)
   - Financial impact review

5. **Implementation (Week 3-4)**
   - Communicate forecast to procurement, operations, finance
   - Release purchase orders
   - Adjust production schedules
   - Update inventory targets

### Forecast Consensus at S&OP

- **Statistician Forecast:** What the numbers say based on history
- **Sales Forecast:** What the customer-facing team expects based on pipeline and conversations
- **Demand Planner Consensus:** Blend of both, with documented reasoning
- **Executive Approval:** Leadership buy-in on planning assumptions

Consensus forecast = (60% × Statistical) + (40% × Sales) [example weights vary by organization]

---

## Output: Demand Plan Presentation

Present your forecast clearly with:
1. **Historical demand chart** with trend and seasonal patterns highlighted
2. **Forecast table** with periods (months), statistical forecast, adjusted forecast, and confidence range
3. **Seasonality table** with seasonal indices for each month
4. **Assumptions & adjustments** (promotions, new products, known changes)
5. **Accuracy metrics** (MAPE, bias on historical holdout period)
6. **Safety stock calculation** by SKU/category
7. **Risks & mitigation** (If forecast is wrong, what's the impact?)
8. **Review triggers** (Reforecast if actual deviates from forecast by >X%)
