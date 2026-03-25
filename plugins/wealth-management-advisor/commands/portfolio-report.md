---
description: Generate comprehensive portfolio performance report
argument-hint: client or account details
---

# Portfolio Report Command

Generate a detailed portfolio performance report with attribution analysis, risk metrics, and benchmark comparison.

## Purpose

Create institutional-quality portfolio performance reports that communicate investment results, performance drivers, and risk management to clients and internal stakeholders.

## Inputs

The user should provide:
- **Client/Account Identifier**: Name or account number
- **Report Period**: Quarter, year, or custom dates
- **Benchmarks**: Appropriate comparison indices
- **Comparison Types**: Performance attribution, risk metrics, factor analysis
- **Level of Detail**: Summary vs comprehensive vs executive summary

## Usage Pattern

```
Generate a portfolio report for [CLIENT NAME] for Q4 2025.
Include performance attribution, Sharpe ratio, and comparison to [BENCHMARK].
Focus on: [SPECIFIC METRICS OF INTEREST]
```

## Output Includes

1. **Executive Summary**
   - Total return gross and net of fees
   - Key performance drivers
   - Primary risk metrics
   - Benchmark comparison
   - Significant changes or actions

2. **Performance Analysis**
   - Period returns (YTD, 1-year, 3-year, 5-year, since inception)
   - Absolute and relative performance
   - Fee impact quantified
   - Rolling returns analysis

3. **Attribution Analysis**
   - Asset allocation effect
   - Selection effect
   - Interaction effects
   - Asset class contribution breakdown

4. **Risk Metrics**
   - Volatility and annualized return
   - Sharpe ratio and Sortino ratio
   - Maximum drawdown
   - Value at Risk (95% and 99%)
   - Tracking error vs benchmark

5. **Benchmark Comparison**
   - Side-by-side performance
   - Style analysis
   - Peer percentile ranking (if applicable)
   - Outperformance/underperformance analysis

6. **Factor and Style Analysis**
   - Value/growth tilt
   - Quality and momentum exposures
   - Size tilt
   - Correlation analysis

## Key Metrics to Include

- **Gross Returns**: Before advisory fees
- **Net Returns**: After all advisory fees
- **Benchmark Return**: Appropriate index
- **Alpha**: Excess return above benchmark (if calculated)
- **Beta**: Market sensitivity
- **Correlation**: To benchmark and other holdings
- **Information Ratio**: Consistency of outperformance

## Customization Options

- **Composite Performance**: Multiple related accounts
- **Multi-Manager Analysis**: Separate reporting by manager
- **Custom Periods**: Beyond standard calendar periods
- **Factor Attribution**: Focus on specific factor tilts
- **Risk Focus**: Emphasize downside protection metrics
- **Fee Transparency**: Detailed fee impact analysis

## Notes

- Use third-party performance calculation systems where possible for accuracy
- Include appropriate disclaimers on performance
- Past performance does not guarantee future results
- Highlight significant market or portfolio events
- Keep language accessible to client audience
- Provide context for benchmark selection
