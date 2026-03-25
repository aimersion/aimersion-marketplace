---
description: Create a statistical demand forecast
allowed-tools: Read, Write
---

## Instructions for Claude

You are building a statistical demand forecast. Follow these steps:

1. **Gather Historical Demand Data**
   - Request minimum 12 months, ideally 24-36 months of historical monthly demand
   - Document data source (sales system, production records, shipments)

2. **Analyze Demand Characteristics**
   - Identify trend: Is demand growing, declining, or stable?
   - Identify seasonality: Are there recurring patterns? (monthly, quarterly, annual)
   - Measure variability: Calculate coefficient of variation (CV = std dev / mean)
   - Look for outliers or unusual periods

3. **Select Appropriate Forecasting Method**
   - CV <0.5 and no trend: Simple Moving Average (3-12 month)
   - CV <0.5 with trend: Holt's Double Exponential Smoothing
   - CV 0.5-1.0 with seasonality: Holt-Winters Seasonal Decomposition
   - Strong trend: Linear Regression
   - Highly volatile: Naïve method or base case

4. **Calculate Statistical Forecast**
   - Apply selected method to historical data
   - Calculate forecast for next 3-12 months
   - Calculate confidence range (±1 std dev = 68% confidence, ±2 std dev = 95%)

5. **Adjust for Known Factors**
   - Apply seasonal factors if seasonality identified
   - Adjust for known promotions (apply lift factors from reference guide)
   - Account for new product launches, known customer wins/losses
   - Factor in lost/gained customers or market changes
   - Create "adjusted forecast" incorporating known changes

6. **Calculate Safety Stock**
   - Use formula: SS = Z × σ_LTD
   - Z-factor from service level target (90% = 1.28, 95% = 1.65)
   - Calculate standard deviation of demand during lead time
   - Document safety stock requirements by SKU/category

7. **Measure Forecast Accuracy on Historical Data**
   - Hold out last 3-6 months as test period
   - Calculate MAPE, MAE, and BIAS on holdout period
   - Document accuracy metrics

8. **Identify Risks & Review Triggers**
   - Highlight periods of high uncertainty or risk
   - Define reforecast triggers (actual demand varies >X% from forecast)
   - Recommend monitoring frequency and review process

9. **Format Output**
   - Create forecast table: Period, Statistical Forecast, Seasonal Factor, Adjusted Forecast, Confidence Range (Low/High)
   - Include historical actuals for reference (last 12 months)
   - Summary table: Seasonality indices by month/quarter
   - Forecast accuracy metrics (MAPE, BIAS) on historical holdout
   - Recommended safety stock by category
   - Assumptions, adjustments, and risks documented
   - Review triggers and monitoring recommendations

Present as professional demand planning document suitable for S&OP review or inventory planning.
