---
name: dashboard-designer
description: >
  This skill should be used when the user asks to "design a dashboard", "choose KPIs
  for a report", "create a dashboard layout", "pick the right chart type", "build a
  BI spec", "wireframe a report", "decide what goes on a dashboard", or needs guidance
  on visualization best practices and dashboard structure.
version: 0.1.0
---

# Dashboard Design

Principles and frameworks for designing dashboards that drive decisions, not just display data.

## The Dashboard Design Hierarchy

**Purpose → Audience → Questions → Metrics → Visualizations → Layout**

Never start with the data. Start with the decision the dashboard enables.

## Dashboard Types

| Type | Purpose | Primary Audience | Update Frequency |
|------|---------|-----------------|-----------------|
| Strategic | Track progress toward goals | Executives, board | Weekly/Monthly |
| Operational | Monitor day-to-day performance | Managers, team leads | Daily/Real-time |
| Analytical | Explore and diagnose | Analysts, PMs | On-demand |
| Tactical | Drive specific workflow actions | Individual contributors | Real-time |

## KPI Selection Framework

### The 3-Question Test
For every metric on a dashboard, ask:
1. **Action question:** If this number changes, what would you do differently?
2. **Ownership question:** Who is accountable for moving this number?
3. **Freshness question:** How often does it need to update to be useful?

If a metric fails any of these, reconsider its inclusion.

### KPI Hierarchy
```
North Star Metric (1)
├── Leading Indicators (2-4)
│   ├── Driver Metrics (3-6 per indicator)
│   └── Operational Metrics (as needed)
└── Lagging Indicators (2-4)
```

### Metric Density Rule
- **Executive dashboard:** 4-6 headline KPIs maximum
- **Operational dashboard:** 8-12 metrics
- **Analytical view:** Unlimited, but filterable

## Chart Type Selection Guide

### Time-Series Data
- **Line chart:** Single metric over time, continuous data
- **Bar chart (vertical):** Comparing discrete time periods (months, quarters)
- **Area chart:** Multiple series as part of a whole over time
- **Waterfall:** Period-to-period changes with running total

### Comparison Data
- **Bar chart (horizontal):** Ranking items (avoid pie charts)
- **Bullet chart:** Metric vs. target with context bands
- **Small multiples:** Same chart repeated across segments

### Distribution Data
- **Histogram:** Frequency of values in ranges
- **Box plot:** Distribution with outliers
- **Heatmap:** Two-dimensional distribution

### Relationship Data
- **Scatter plot:** Correlation between two metrics
- **Bubble chart:** Three-variable relationship
- **Network diagram:** Connections between entities

### Composition Data
- **Stacked bar:** Part-to-whole across categories
- **Treemap:** Hierarchical part-to-whole
- **100% stacked bar:** Proportional comparison across groups

**Avoid:** Pie charts with >4 slices, 3D charts, dual-axis charts (use sparingly).

## Layout Principles

### The F-Pattern
Users scan dashboards in an F-pattern: left to right across the top, then down the left side. Place the most important content in the top-left.

### Grid System
Use a 12-column grid:
- Full-width (12 cols): Hero KPI row
- Half-width (6 cols): Major charts side by side
- Third-width (4 cols): Supporting metrics
- Quarter-width (3 cols): Small KPI tiles

### Visual Hierarchy
1. **Top row:** Headline KPIs with trend indicators
2. **Second row:** Primary charts answering the main question
3. **Third row:** Supporting detail and breakdowns
4. **Bottom:** Filters, tables, drill-down content

## Color & Design Standards

### Functional Color Palette
- **Primary metric:** Single accent color (blue or brand color)
- **Comparison:** Neutral gray for prior period
- **Positive/Negative:** Green for good, red for bad (always provide non-color cue too)
- **Categories:** Max 7 distinct colors; use opacity for sub-categories

### Accessibility Requirements
- Color contrast ratio: 4.5:1 minimum (WCAG AA)
- Never rely on color alone to convey meaning
- Include data labels on small multiples
- Test with color-blind simulation tools

## Reference Files

- **`references/dashboard-patterns.md`** — layout wireframes, chart templates, design system specs
