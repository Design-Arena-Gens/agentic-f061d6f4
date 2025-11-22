export type DataSource = {
  title: string;
  provider: string;
  url: string;
  description: string;
  frequency: string;
  updateLag: string;
  format: string;
  access: string;
  primaryUse: string;
  notes?: string;
  coverage: string;
};

export type IndicatorCategory = {
  id: string;
  name: string;
  timeHorizon: string;
  summary: string;
  sources: DataSource[];
};

export const categories: IndicatorCategory[] = [
  {
    id: "policy",
    name: "Policy",
    timeHorizon: "Event-driven, monitor daily",
    summary:
      "Track policy tone, implied rate path, balance sheet guidance, and surprise intervention signals that can drive USD risk premia.",
    sources: [
      {
        title: "FOMC Communications Tracker",
        provider: "Federal Reserve Board",
        url: "https://www.federalreserve.gov/monetarypolicy.htm",
        description:
          "Landing page with statements, minutes, speeches, and press conferences. Use the site RSS feed or ICS calendar for automated scrapes of new content.",
        frequency: "Event-driven (FOMC meetings, speeches)",
        updateLag: "Minutes after release",
        format: "HTML, PDF, RSS",
        access: "Open access",
        primaryUse:
          "Qualitative sentiment scoring on policy bias, forward guidance, and dissent dynamics.",
        coverage: "Federal Reserve communication channel"
      },
      {
        title: "CME FedWatch Tool Probabilities",
        provider: "CME Group",
        url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html",
        description:
          "Implied probabilities for FOMC target rate outcomes derived from Fed Funds futures. Historical daily time series downloadable as CSV.",
        frequency: "Intraday (refresh ~5 minutes)",
        updateLag: "Real-time",
        format: "Interactive chart, CSV download",
        access: "Open access (no login)",
        primaryUse:
          "Quantify market-implied policy path and monitor repricing around key macro releases.",
        notes: "CSV download link under chart exports daily probabilities for each meeting.",
        coverage: "FOMC meetings up to 18 months ahead"
      },
      {
        title: "Treasury FX Intervention Reports",
        provider: "U.S. Treasury / NY Fed",
        url: "https://home.treasury.gov/policy-issues/currency-policy/foreign-exchange-reports",
        description:
          "Semi-annual Treasury reports on foreign exchange policies, plus NY Fed data on FX swap lines and interventions during stress events.",
        frequency: "Semi-annual official report; ad-hoc updates",
        updateLag: "Days to weeks",
        format: "PDF, HTML tables",
        access: "Open access",
        primaryUse:
          "Monitor signaling risk of coordinated interventions and Treasury views on misalignment.",
        coverage: "US Treasury FX policy reporting"
      },
      {
        title: "Treasury Inflation-Protected Securities (TIPS) Breakevens",
        provider: "Federal Reserve Bank of St. Louis (FRED)",
        url: "https://fred.stlouisfed.org/series/T5YIE",
        description:
          "Market-based inflation expectation series (5Y, 5Y5Y, 10Y) sourced from TIPS. API supports JSON/CSV pulls for intraday refresh (daily close).",
        frequency: "Daily",
        updateLag: "Same-day (~19:00 ET)",
        format: "API (JSON/CSV), chart, downloadable",
        access: "Open access via FRED API",
        primaryUse:
          "Gauge shifts in real-time inflation expectations to inform policy stance and USD term premium.",
        coverage: "US Treasury market breakevens"
      }
    ]
  },
  {
    id: "profits",
    name: "Profits",
    timeHorizon: "Weekly to monthly",
    summary:
      "Keep a pulse on forward earnings, commodity input costs, and trade proxies that influence US growth and USD risk appetite.",
    sources: [
      {
        title: "S&P 500 Earnings Scorecard",
        provider: "FactSet (public summary)",
        url: "https://insight.factset.com/topic/earnings",
        description:
          "Weekly FactSet earnings insight post with revisions, beats/misses, and forward EPS guidance for the S&P 500 index.",
        frequency: "Weekly (Friday)",
        updateLag: "1-2 days",
        format: "HTML, downloadable PDF",
        access: "Free executive summary",
        primaryUse:
          "Track earnings revision momentum, sector dispersion, and valuation-trend commentary.",
        coverage: "S&P 500 index EPS and margin metrics"
      },
      {
        title: "Refinitiv / LSEG S&P 500 Earnings Dashboard",
        provider: "Refinitiv",
        url: "https://www.refinitiv.com/en/financial-data/company-data/earnings",
        description:
          "Public weekly PDF download summarizing forward EPS revisions, surprise rates, and key sector trends.",
        frequency: "Weekly",
        updateLag: "1-3 days",
        format: "PDF dashboard",
        access: "Free with email registration",
        primaryUse:
          "Alternative/manually updatable forward earnings revision tracker for S&P 500.",
        coverage: "S&P 500 aggregated EPS detail"
      },
      {
        title: "Bloomberg Commodity (BCOM) Index",
        provider: "Stooq",
        url: "https://stooq.com/q/?s=bccom",
        description:
          "Daily historical levels for the diversified Bloomberg Commodity Index. Downloadable CSV without login, updated shortly after settlement.",
        frequency: "Daily",
        updateLag: "Same-day (~21:00 ET)",
        format: "HTML table, CSV download",
        access: "Open access",
        primaryUse:
          "Monitor broad commodity price impulses impacting inflation and corporate margins.",
        coverage: "Global commodity futures basket"
      },
      {
        title: "Baltic Dry Index (BDIY)",
        provider: "Investing.com (public page)",
        url: "https://www.investing.com/indices/baltic-dry",
        description:
          "Shipping cost benchmark reflecting global dry bulk trade flows. Offers historical daily data exports via free account.",
        frequency: "Daily",
        updateLag: "Same-day (~13:00 ET)",
        format: "Interactive chart, CSV export",
        access: "Free with registration",
        primaryUse:
          "Proxy for global trade momentum feeding into US manufacturing and profits outlook.",
        coverage: "Global shipping rates"
      }
    ]
  },
  {
    id: "liquidity",
    name: "Liquidity",
    timeHorizon: "Weekly to daily",
    summary:
      "Map systemic USD liquidity through balance sheet actions, money market prints, and digital dollar flows.",
    sources: [
      {
        title: "Federal Reserve Balance Sheet (H.4.1 Release)",
        provider: "Federal Reserve (FRED series WSHOMCB)",
        url: "https://fred.stlouisfed.org/series/WSHOMCB",
        description:
          "Weekly total assets on the Federal Reserve balance sheet with history back to 1915. FRED API supports machine access.",
        frequency: "Weekly (Thursday)",
        updateLag: "Same-day (~16:30 ET)",
        format: "API (JSON/CSV), chart",
        access: "Open access",
        primaryUse:
          "Quantify liquidity injections/withdrawals from QE/QT and emergency facilities.",
        coverage: "Consolidated Fed balance sheet"
      },
      {
        title: "SOFR and Broad General Collateral Rates",
        provider: "Federal Reserve Bank of New York",
        url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
        description:
          "Official overnight funding rates including SOFR, BGCR, and TGCR with downloadable daily time series.",
        frequency: "Daily",
        updateLag: "Next business day (~08:00 ET)",
        format: "CSV, XML, HTML",
        access: "Open access",
        primaryUse:
          "Track overnight money market stress and funding conditions.",
        coverage: "USD secured funding markets"
      },
      {
        title: "Overnight Reverse Repo Facility Usage",
        provider: "Federal Reserve Bank of New York",
        url: "https://apps.newyorkfed.org/markets/autorates/RRPOT",
        description:
          "Daily history of ON RRP take-up, counterparty count, and rate. CSV download provided via the Fed's Markets data portal.",
        frequency: "Daily",
        updateLag: "Same-day (~18:00 ET)",
        format: "CSV, XML",
        access: "Open access",
        primaryUse:
          "Gauge excess liquidity parked at the Fed and shifts in money fund demand.",
        coverage: "US money market participants"
      },
      {
        title: "Stablecoin Total Value & Flows",
        provider: "DefiLlama Stablecoins Dashboard",
        url: "https://defillama.com/stablecoins",
        description:
          "Aggregated issuance and market cap data for major USD stablecoins with API endpoints for time series.",
        frequency: "Hourly",
        updateLag: "Near real-time",
        format: "JSON API, CSV export",
        access: "Open API with attribution",
        primaryUse:
          "Proxy for global dollar liquidity and offshore demand signals.",
        coverage: "Global USD-denominated stablecoins"
      }
    ]
  },
  {
    id: "growth",
    name: "Growth",
    timeHorizon: "Weekly to monthly",
    summary:
      "Cross-validate near-term US growth momentum using high-frequency activity trackers and sector proxies.",
    sources: [
      {
        title: "GDPNow Real GDP Forecast",
        provider: "Federal Reserve Bank of Atlanta",
        url: "https://www.atlantafed.org/cqer/research/gdpnow",
        description:
          "Model-based real GDP nowcast updated multiple times per month. Historical series downloadable as XLSX/CSV.",
        frequency: "Multiple releases per week",
        updateLag: "Intraday (post data release)",
        format: "CSV, XLSX, blog post",
        access: "Open access",
        primaryUse:
          "Anchor near-term growth trajectory and quantify surprise risk around key data.",
        coverage: "US Real GDP (quarterly annualized)"
      },
      {
        title: "Weekly Economic Index",
        provider: "Federal Reserve Bank of New York",
        url: "https://www.newyorkfed.org/research/policy/weekly-economic-index",
        description:
          "Composite of ten high-frequency indicators (including electricity, rail, fuel) tracking year-over-year GDP growth.",
        frequency: "Weekly",
        updateLag: "Thursday (~11:30 ET)",
        format: "CSV, interactive chart",
        access: "Open access",
        primaryUse:
          "Cross-check GDPNow with broader high-frequency growth signals.",
        coverage: "US weekly growth index"
      },
      {
        title: "Google US Mobility Reports (Archived)",
        provider: "Google",
        url: "https://www.google.com/covid19/mobility/",
        description:
          "Community mobility trend data across retail, workplaces, and transit categories. CSVs available per state and nationally.",
        frequency: "Weekly updates (historic, last updated 2023)",
        updateLag: "7-10 days",
        format: "CSV",
        access: "Open access",
        primaryUse:
          "Proxy for mobility if newer datasets unavailable; consider alternative mobility proxies if dataset discontinued.",
        coverage: "US national and state-level mobility"
      },
      {
        title: "U.S. Retail Sales (Advance Monthly)",
        provider: "U.S. Census Bureau",
        url: "https://www.census.gov/retail/index.html",
        description:
          "Advance monthly retail trade report with detailed tables and historical time series.",
        frequency: "Monthly",
        updateLag: "Approx. two weeks after month end",
        format: "CSV, XLSX, API",
        access: "Open access",
        primaryUse:
          "High-frequency consumption anchor to complement weekly proxies.",
        coverage: "US retail and food services sales"
      }
    ]
  },
  {
    id: "stocks",
    name: "Stocks",
    timeHorizon: "Daily to intraday",
    summary:
      "Understand equity leadership, volatility, and cross-asset beta inputs that influence USD positioning and hedging.",
    sources: [
      {
        title: "NYSE Advance/Decline Issues",
        provider: "Wall Street Journal Market Data",
        url: "https://www.wsj.com/market-data/stocks/marketdata/advdecline",
        description:
          "Daily breadth stats including advancing vs. declining issues and new highs/lows. Historical CSV downloads available.",
        frequency: "Daily",
        updateLag: "Same-day (~18:00 ET)",
        format: "HTML tables, CSV export",
        access: "Open access",
        primaryUse:
          "Gauge internal equity breadth vs. headline index moves.",
        coverage: "NYSE listed equities"
      },
      {
        title: "CBOE Volatility Index (VIX)",
        provider: "Cboe Global Markets",
        url: "https://www.cboe.com/tradable_products/vix/vix_historical_data/",
        description:
          "Official daily VIX settlement and intraday data with historical spreadsheets dating back to 1990.",
        frequency: "Daily (settlement), intraday snapshots",
        updateLag: "Same-day (~19:15 ET)",
        format: "CSV, XLSX",
        access: "Open access",
        primaryUse:
          "Measure implied volatility and risk premium for equity hedging.",
        coverage: "S&P 500 implied volatility"
      },
      {
        title: "Yahoo Finance Historical Prices",
        provider: "Yahoo Finance",
        url: "https://finance.yahoo.com",
        description:
          "Free historical daily prices for major indices and assets including SPX (^GSPC), NDX (^NDX), DXY (DX-Y.NYB), GLD, and CL=F.",
        frequency: "Daily (end-of-day), intraday streaming",
        updateLag: "Minutes after close",
        format: "CSV download, API via query parameters",
        access: "Open access",
        primaryUse:
          "Source cross-asset price series for correlation matrices and beta analysis.",
        coverage: "Global equities, FX, commodities"
      },
      {
        title: "Stooq Cross-Asset Prices",
        provider: "Stooq",
        url: "https://stooq.com/db/h/",
        description:
          "Extensive free database with daily historical prices for SPX, NDX, DXY, gold, oil, and key FX pairs.",
        frequency: "Daily",
        updateLag: "Same-day (~20:00 ET)",
        format: "CSV",
        access: "Open access",
        primaryUse:
          "Redundant/backup data source for cross-asset correlation work.",
        coverage: "Global indices and commodities"
      }
    ]
  },
  {
    id: "employment",
    name: "Employment",
    timeHorizon: "Weekly to monthly",
    summary:
      "Monitor labor market turning points with weekly claims, online job postings, and gig economy proxies.",
    sources: [
      {
        title: "Initial Jobless Claims (ICSA)",
        provider: "FRED / U.S. Department of Labor",
        url: "https://fred.stlouisfed.org/series/ICSA",
        description:
          "Seasonally adjusted weekly jobless claims with four-week moving average. Accessible via FRED API.",
        frequency: "Weekly (Thursday)",
        updateLag: "One week",
        format: "API (JSON/CSV), chart",
        access: "Open access",
        primaryUse:
          "High-frequency read on labor market slack and recession risk.",
        coverage: "U.S. national claims data"
      },
      {
        title: "Indeed US Hiring Lab Tracker",
        provider: "Indeed Hiring Lab",
        url: "https://www.hiringlab.org/data/",
        description:
          "Weekly job postings index with sector-level detail; includes CSV downloads for the United States.",
        frequency: "Weekly",
        updateLag: "Few days",
        format: "CSV, interactive charts",
        access: "Open access",
        primaryUse:
          "Gauge online job demand momentum and sectoral shifts.",
        coverage: "US job postings by sector"
      },
      {
        title: "LinkUp Job Market Data (Free Insights)",
        provider: "LinkUp",
        url: "https://www.linkup.com/insights/",
        description:
          "Aggregated job listings data with weekly commentary and downloadable charts covering US job openings trends.",
        frequency: "Weekly insights",
        updateLag: "1 week",
        format: "HTML, visualizations (PNG/CSV via request)",
        access: "Open access summary",
        primaryUse:
          "Supplemental confirmation for online job posting levels and trends.",
        coverage: "US online job postings"
      },
      {
        title: "Uber Mobility Demand Indicators",
        provider: "Uber Investor Relations (Mobility Metrics)",
        url: "https://investor.uber.com/news-events/news/press-release-details/2023/Uber-Announces-Monthly-Mobility-Metrics/default.aspx",
        description:
          "Monthly mobility gross bookings and trip data published in investor updates; can be scraped for time series.",
        frequency: "Monthly",
        updateLag: "1 month",
        format: "HTML, PDF",
        access: "Open access",
        primaryUse:
          "Proxy for gig economy activity and mobility demand shifts.",
        coverage: "US/international ride-hailing metrics (extract US signals)"
      }
    ]
  },
  {
    id: "credit",
    name: "Credit",
    timeHorizon: "Daily to weekly",
    summary:
      "Assess credit risk, funding stress, and spread dynamics informing broader USD and equity sentiment.",
    sources: [
      {
        title: "ICE BofA US High Yield Index Option-Adjusted Spread (BAMLH0A0HYM2)",
        provider: "FRED",
        url: "https://fred.stlouisfed.org/series/BAMLH0A0HYM2",
        description:
          "Daily high yield OAS series derived from ICE BofA indices with full history and API access.",
        frequency: "Daily",
        updateLag: "Next business day (~18:00 ET)",
        format: "API (JSON/CSV), chart",
        access: "Open access",
        primaryUse:
          "Measure US HY credit stress relative to Treasuries.",
        coverage: "US high yield corporate bonds"
      },
      {
        title: "ETF NAV / Price for HYG & JNK",
        provider: "iShares / State Street (fund sites)",
        url: "https://www.ishares.com/us/products/239565/ishares-iboxx-high-yield-corporate-bond-etf",
        description:
          "Daily NAV, price, and premium/discount statistics downloadable as CSV for the largest HY ETFs.",
        frequency: "Daily",
        updateLag: "Same-day (~20:00 ET)",
        format: "CSV download",
        access: "Open access",
        primaryUse:
          "Track HY ETF liquidity, flows, and deviations from NAV.",
        coverage: "US HY ETF market"
      },
      {
        title: "SOFR vs. Effective Fed Funds",
        provider: "Federal Reserve Bank of New York",
        url: "https://www.newyorkfed.org/markets/effr",
        description:
          "Daily effective fed funds rate (EFFR) with percentiles; compare against SOFR for stress detection.",
        frequency: "Daily",
        updateLag: "Next business day (~21:00 ET)",
        format: "CSV, XML, HTML",
        access: "Open access",
        primaryUse:
          "Identify widening of unsecured vs. secured funding rates.",
        coverage: "US money markets"
      },
      {
        title: "Senior Loan Officer Opinion Survey (SLOOS)",
        provider: "Federal Reserve Board",
        url: "https://www.federalreserve.gov/data/sloos.htm",
        description:
          "Quarterly lending standards and demand survey with charts and downloadable data tables.",
        frequency: "Quarterly",
        updateLag: "2-3 weeks after quarter end",
        format: "XLSX, PDF",
        access: "Open access",
        primaryUse:
          "Contextualize bank lending standards trends affecting credit availability.",
        coverage: "US bank lending survey"
      }
    ]
  },
  {
    id: "inflation",
    name: "Inflation",
    timeHorizon: "Daily to monthly",
    summary:
      "Blend high-frequency market pricing with official data to track near-term inflation risk for USD rates.",
    sources: [
      {
        title: "FRED Breakeven Inflation Series (T5YIE, T10YIE, T5YIFR)",
        provider: "FRED",
        url: "https://fred.stlouisfed.org/categories/32286",
        description:
          "Daily breakeven inflation rates with historical API access to 5Y, 10Y, and forward inflation metrics.",
        frequency: "Daily",
        updateLag: "Same-day (~19:00 ET)",
        format: "API (JSON/CSV)",
        access: "Open access",
        primaryUse:
          "Real-time inflation expectations for policy analysis and breakeven trade ideas.",
        coverage: "US Treasury breakevens"
      },
      {
        title: "Energy & Metals Futures",
        provider: "U.S. Energy Information Administration (EIA)",
        url: "https://www.eia.gov/dnav/pet/pet_pri_fut_s1_d.htm",
        description:
          "Crude oil and refined products futures strip data with download to CSV; includes Henry Hub natural gas futures.",
        frequency: "Daily",
        updateLag: "Same-day (~18:00 ET)",
        format: "HTML tables, CSV",
        access: "Open access",
        primaryUse:
          "Track input cost pressure from energy markets.",
        coverage: "NYMEX/ICE energy futures"
      },
      {
        title: "FAO Food Price Index",
        provider: "Food and Agriculture Organization",
        url: "https://www.fao.org/worldfoodsituation/foodpricesindex/en/",
        description:
          "Monthly global food price index with CSV downloads covering cereals, dairy, meat, oils, and sugar.",
        frequency: "Monthly",
        updateLag: "5 days after month end",
        format: "CSV, XLSX",
        access: "Open access",
        primaryUse:
          "Monitor global agricultural input costs influencing CPI components.",
        coverage: "Global agricultural commodity prices"
      },
      {
        title: "Consumer Price Index (CPI & Core CPI)",
        provider: "Bureau of Labor Statistics",
        url: "https://www.bls.gov/cpi/data.htm",
        description:
          "Official CPI data with detailed tables, API endpoints, and seasonal adjustment notes.",
        frequency: "Monthly",
        updateLag: "Mid-month (~10 days after reference month)",
        format: "API (JSON), CSV, XLSX",
        access: "Open access",
        primaryUse:
          "Anchor for inflation regime classification and backtesting.",
        coverage: "US CPI headline and core series"
      }
    ]
  }
];
