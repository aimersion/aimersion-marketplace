---
name: portfolio-reporter
description: "This skill should be used when the user asks to prepare \"portfolio reports\", analyze \"performance attribution\", conduct \"benchmark comparisons\", evaluate \"risk metrics\", perform \"portfolio analysis\", generate \"investment reports\", or create \"performance reports\". Provides comprehensive multi-period performance reporting with attribution analysis, risk metrics, and factor exposure tracking for wealth advisors."
version: 0.1.0
---

# Portfolio Reporter Skill

Generate comprehensive portfolio performance reports with detailed attribution analysis, benchmark comparisons, and risk metrics. This skill enables wealth advisors to communicate portfolio value, risk-adjusted returns, and performance drivers to clients and internal stakeholders.

## Core Capabilities

### Multi-Period Performance Reporting

- Calculate and report gross and net-of-fees returns across standard periods (YTD, 1-year, 3-year, 5-year, 10-year, since inception)
- Present returns in absolute terms and relative to benchmarks
- Separate performance into fee impact to show client net benefit
- Support custom date ranges for specific client needs
- Handle composite performance across multiple accounts

### Performance Attribution Analysis

Decompose portfolio returns into explainable components:

- **Asset Allocation Effect**: Return contribution from strategic positioning versus benchmark weights
- **Selection Effect**: Returns generated through security picking and manager selection
- **Interaction Effect**: Combined impact of allocation and selection decisions
- **Contribution by Asset Class**: Break down which asset classes drove returns
- **Manager/Strategy Attribution**: Performance contributions by each manager or strategy

### Benchmark Comparison

- Select appropriate benchmarks by asset class (equities, bonds, alternatives, multi-asset)
- Compare portfolio returns versus benchmarks and peer medians
- Calculate outperformance/underperformance and persistence
- Track benchmark drift and rebalancing impacts
- Identify style factors driving relative performance

### Risk Metrics Calculation

Calculate institutional-grade risk analytics:

- **Sharpe Ratio**: Risk-adjusted return metric accounting for volatility
- **Sortino Ratio**: Downside risk-adjusted returns (penalizing only losses)
- **Maximum Drawdown**: Peak-to-trough decline analysis
- **Value at Risk (VaR)**: 95%/99% confidence loss estimates
- **Tracking Error**: Deviation from benchmark returns
- **Beta and Alpha**: Market exposure and outperformance metrics
- **Volatility**: Annualized standard deviation of returns

### Factor Exposure Analysis

- Identify tilts toward value, growth, quality, momentum, low volatility
- Show factor exposure drift relative to investment policy statement
- Quantify return contribution from factor bets
- Assess factor correlations and diversification benefits

### Style Drift Detection

- Monitor adherence to stated investment approach
- Flag when actual exposures diverge materially from intended
- Track changes in concentration, sector weights, credit quality
- Alert to strategy creep or manager style migration

### Fee Impact Analysis

- Quantify gross return versus net-of-fees impact
- Compare fees versus peer mediums and benchmarks
- Project fee impact on long-term wealth accumulation
- Identify opportunities for fee optimization

## Integration with References

Detailed methodologies, formulas, benchmark definitions, and sample calculations are available in the references directory.

## Output Formats

- Executive summary (1-2 pages with key metrics and insights)
- Detailed performance attribution report
- Risk analysis dashboard
- Benchmark comparison tables
- Factor exposure charts
- Fee impact projections
