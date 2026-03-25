---
name: demand-forecaster
description: >
  Predict future product demand using historical sales data, trends, and seasonal
  patterns. This skill should be used when the user asks to "forecast demand",
  "predict sales", "how much will I sell", "demand planning", "sales forecast",
  "what to expect next month", "future demand", "trend analysis", "sales
  projection", or needs help predicting how much of each product they'll need
  to meet customer demand without overstocking.
version: 2.0.0
---

# Demand Forecaster

Predict future product demand using appropriate forecasting methods — from simple moving averages for stable products to trend-adjusted models for growing or seasonal items.

## Why This Matters

Nike's automated demand forecasting system once overestimated demand for some products while underestimating others, costing $100 million. For small businesses, forecasting errors mean either lost sales from stockouts or wasted capital in overstock. Even a basic data-driven forecast beats gut feel by 20-30%.

## Core Workflow

1. **Collect historical data** — sales data by product, ideally 6-12 months minimum
2. **Identify the demand pattern** — stable, trending, seasonal, or erratic
3. **Select the right method** — match the forecasting method to the pattern
4. **Generate the forecast** — predict demand for the target period
5. **Add judgment adjustments** — known events, promotions, market changes
6. **Present with confidence ranges** — don't give a single number, give a range

## Demand Pattern Classification

Before forecasting, classify each product's demand pattern:

| Pattern | Characteristics | Best Method |
|---------|----------------|-------------|
| **Stable** | Consistent sales, low variability | Simple Moving Average or Exponential Smoothing |
| **Trending** | Consistent increase or decrease over time | Double Exponential Smoothing or Linear Trend |
| **Seasonal** | Regular peaks and valleys by season | Seasonal Indices × Trend |
| **Erratic** | Highly variable, no clear pattern | Average with wide safety margins |
| **New Product** | No history available | Analogous product comparison or market research |
| **Lumpy** | Infrequent but large orders | Different approach needed — track order probability |

## Forecasting Methods

### Method 1: Simple Moving Average (Stable Demand)

Best for: Products with consistent, predictable demand.

```
Forecast = (Sum of last N periods' sales) / N

Recommended N values:
- 3-period average: Responsive to recent changes (use for fast-moving items)
- 6-period average: Balanced (good default)
- 12-period average: Smooth, filters out noise (use for very stable items)
```

**Example:** Last 6 months sold: 100, 110, 95, 105, 100, 90
Forecast = (100+110+95+105+100+90) / 6 = 100 units next month

### Method 2: Weighted Moving Average (Recent Trends Matter)

Best for: Products where recent sales are more indicative than older data.

```
Forecast = (W1 × Most Recent) + (W2 × Second Most Recent) + (W3 × Third)
Where W1 + W2 + W3 = 1.0

Recommended weights: 0.5 (most recent), 0.3 (second), 0.2 (third)
```

### Method 3: Exponential Smoothing (Adaptive)

Best for: Balancing responsiveness with stability.

```
Forecast = α × Actual Sales Last Period + (1-α) × Previous Forecast

α (alpha) = smoothing factor:
- 0.1-0.2: Very smooth, slow to react (stable products)
- 0.3-0.5: Balanced (most products)
- 0.6-0.8: Responsive to changes (fast-moving or volatile)
```

### Method 4: Linear Trend Projection (Growing/Declining)

Best for: Products with clear upward or downward trends.

```
1. Plot sales over time
2. Calculate the average monthly increase (or decrease)
3. Forecast = Most recent sales + (Trend per month × Months ahead)
```

### Method 5: Seasonal Adjustment (Seasonal Products)

Best for: Products with regular seasonal patterns.

```
1. Calculate seasonal indices:
   Seasonal Index = Month's Average Sales / Overall Monthly Average

2. Calculate base forecast (using deseasonalized data)

3. Apply seasonal index:
   Seasonal Forecast = Base Forecast × Seasonal Index for Target Month
```

**Example Seasonal Indices (Retail):**
| Month | Index | Meaning |
|-------|-------|---------|
| Jan | 0.70 | 30% below average |
| Feb | 0.75 | 25% below average |
| Mar | 0.90 | 10% below average |
| Apr | 0.95 | 5% below average |
| May | 1.00 | Average |
| Jun | 1.05 | 5% above average |
| Jul | 0.95 | 5% below average |
| Aug | 1.00 | Average |
| Sep | 1.10 | 10% above average |
| Oct | 1.15 | 15% above average |
| Nov | 1.30 | 30% above average |
| Dec | 1.15 | 15% above average |

## Forecast Adjustments

After calculating the mathematical forecast, adjust for known factors:

- **Planned promotions**: Increase forecast by estimated lift (20-50% for typical promotion)
- **Price changes**: Price increase = lower demand, price decrease = higher demand
- **Competitor actions**: New competitor or competitor closure affects demand
- **Market trends**: Industry growth or decline
- **Supply constraints**: If you can't get supply, forecast what you CAN sell
- **Calendar effects**: Extra shopping days, holidays, events

## Forecast Output Format

```
# Demand Forecast Report
Generated: [date]
Forecast Period: [start] to [end]
Method Used: [method name and why it was selected]

## Forecast Summary

| Product | Current Monthly Sales | Forecast (Next Month) | Confidence Range | Pattern |
|---------|---------------------|----------------------|-----------------|---------|
| [name] | [X] units | [X] units | [low]-[high] | [stable/trending/seasonal] |

## Key Assumptions
- [List any assumptions or adjustments made]

## Recommended Actions
- Products likely to sell more than current stock: [list]
- Products with declining demand (reduce orders): [list]
- Products entering peak season (increase orders): [list]

## Forecast Accuracy Note
This forecast is based on [N months] of data using [method].
Expected accuracy: ±[X]% for stable items, ±[Y]% for seasonal items.
Review and adjust monthly based on actual vs. forecast comparison.
```

## Forecast Accuracy Tracking

Encourage the user to track forecast vs. actual:

```
Forecast Accuracy = 1 - |Actual - Forecast| / Actual

Benchmarks:
- 90%+ accuracy: Excellent (stable products)
- 80-89% accuracy: Good (most products)
- 70-79% accuracy: Acceptable (seasonal/volatile)
- Below 70%: Method needs adjustment
```

## References

See `references/forecasting-methods.md` for detailed calculation walkthroughs and worked examples.
