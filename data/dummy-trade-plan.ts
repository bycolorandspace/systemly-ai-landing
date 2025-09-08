import { TradePlan } from "@/types/trading/analysis";

const tradePlans: TradePlan[] = [
  // Trade Plan 1: EUR/USD Bullish Breakout
  {
    id: "tp_001_eurusd_breakout",
    title: "EUR/USD Daily Resistance Breakout Long",
    summary:
      "Strong bullish momentum breaking key 1.0950 resistance with high volume confirmation. Target 1.1080 resistance zone.",
    detailedSummary:
      "EUR/USD has formed a compelling bullish setup with a clean break above the 1.0950 resistance level that has held for 3 weeks. The breakout occurred with 40% above-average volume and strong momentum indicators. Multiple confluences align including 50-day MA support, bullish divergence on RSI, and USD weakness following dovish Fed commentary. Risk-reward ratio of 1:2.8 offers excellent opportunity for swing traders. Key risk is false breakout if price closes back below 1.0950 within 24 hours.",

    signal: "Bullish breakout above 1.0950 resistance with volume confirmation",
    confidence: "High",
    timeframe: "Daily chart setup, 2-5 day holding period expected",
    direction: "Long",
    symbol: "EUR/USD",
    trend: "Strong uptrend - Higher highs and higher lows established",
    recommendation: "Great opportunity",

    scores: {
      overall: {
        title: "Overall Score",
        score: 8.2,
        status: "🟢 EXCELLENT",
        reasoning:
          "High probability setup with multiple confluences and strong risk-reward",
      },
      technical: {
        title: "Technical Analysis",
        score: 8.5,
        status: "🟢 EXCELLENT",
        reasoning: "Clean breakout, volume confirmation, momentum alignment",
      },
      timing: {
        title: "Market Timing",
        score: 7.8,
        status: "🟢 GOOD",
        reasoning:
          "London session active, good liquidity, no major news conflicts",
      },
      riskReward: {
        title: "Risk/Reward",
        score: 8.0,
        status: "🟢 EXCELLENT",
        reasoning: "1:2.8 risk-reward ratio with logical stop placement",
      },
      tradability: {
        title: "Execution Quality",
        score: 8.5,
        status: "🟢 EXCELLENT",
        reasoning:
          "High liquidity pair, clear entry/exit levels, manageable spread",
      },
    },

    technical: {
      trendScore: {
        title: "Trend Strength",
        score: 8.0,
        status: "🟢 EXCELLENT",
        reasoning:
          "Strong uptrend with consistent higher highs and higher lows",
      },
      setupScore: {
        title: "Setup Quality",
        score: 8.5,
        status: "🟢 EXCELLENT",
        reasoning: "Textbook breakout pattern with proper consolidation phase",
      },
      confluenceScore: {
        title: "Multiple Confluences",
        score: 8.2,
        status: "🟢 EXCELLENT",
        reasoning:
          "Volume, momentum, MA support, and fundamental backdrop align",
      },
      clarityScore: {
        title: "Signal Clarity",
        score: 8.0,
        status: "🟢 EXCELLENT",
        reasoning: "Clear breakout level with obvious entry and stop placement",
      },
      volumeScore: {
        title: "Volume Analysis",
        score: 7.5,
        status: "🟢 GOOD",
        reasoning:
          "40% above average volume on breakout confirms institutional interest",
      },
      momentumScore: {
        title: "Momentum Indicators",
        score: 8.0,
        status: "🟢 EXCELLENT",
        reasoning: "RSI bullish divergence, MACD positive crossover",
      },
      marketStructureScore: {
        title: "Market Structure",
        score: 8.3,
        status: "🟢 EXCELLENT",
        reasoning: "Clean higher highs/lows, respect of key levels",
      },
      volatilityScore: {
        title: "Volatility Environment",
        score: 7.2,
        status: "🟢 GOOD",
        reasoning: "Normal volatility range, not overstretched",
      },
      technicalSummary: {
        title: "Technical Summary",
        score: 8.1,
        status: "🟢 EXCELLENT",
        reasoning:
          "High-quality breakout setup with multiple technical confirmations",
      },
    },

    marketContext: {
      sessionActive: {
        title: "Trading Session",
        description: "London session peak hours, optimal liquidity",
      },
      correlatedAssets: {
        title: "Correlated Markets",
        description:
          "DXY weakness, EUR strength across majors, risk-on sentiment",
      },
      institutionalBias: {
        title: "Smart Money Flow",
        description:
          "Large players accumulating EUR, evident from volume profile",
      },
      retailSentiment: {
        title: "Retail Positioning",
        description: "70% retail short EUR/USD - contrarian bullish signal",
      },
      liquidityZones: {
        title: "Key Liquidity Levels",
        description: "1.0950 breakout level, 1.1080 major resistance ahead",
      },
    },

    professionalEdge: {
      smartMoneyClues: {
        title: "Institutional Signals",
        description: "Volume spike at breakout, absorption of selling pressure",
      },
      orderFlowSignals: {
        title: "Order Flow Analysis",
        description:
          "Large buy orders detected above 1.0950, stop hunt completed",
      },
      algorithmicLevels: {
        title: "Algo Trading Levels",
        description:
          "50-day MA acting as dynamic support, algos defending level",
      },
      newsDrivers: {
        title: "Fundamental Catalysts",
        description: "ECB hawkish tilt, Fed dovish pause, USD weakness theme",
      },
      timingEdge: {
        title: "Optimal Entry Timing",
        description: "European session strength, avoid NY open volatility",
      },
    },

    execution: {
      type: {
        title: "Order Type",
        description: "Market Buy or Buy Stop above 1.0952",
      },
      currentPrice: {
        title: "Current Price",
        description: "1.0948",
      },
      entryZone: {
        title: "Entry Range",
        description: "1.0950 - 1.0955",
      },
      lotSize: {
        title: "Position Size",
        description: "Based on 2% account risk",
      },
      stopLoss: {
        title: "Stop Loss",
        description: "1.0920 (30 pips below entry)",
      },
      target1: {
        title: "First Target",
        description: "1.1000 (50 pips, 50% position close)",
      },
      target2: {
        title: "Second Target",
        description: "1.1040 (85 pips, 30% position close)",
      },
      target3: {
        title: "Final Target",
        description: "1.1080 (125 pips, remaining 20%)",
      },
      finalTarget: {
        title: "Ultimate Target",
        description: "1.1080 major resistance zone",
      },
      support: {
        title: "Key Support",
        description: "1.0920, 1.0890, 1.0850",
      },
      resistance: {
        title: "Key Resistance",
        description: "1.1000, 1.1040, 1.1080",
      },
      riskReward: {
        title: "Risk:Reward Ratio",
        description: "1:2.8 (excellent)",
      },
    },

    exitStrategy: {
      primaryExit: {
        title: "Primary Exit Method",
        description: "Scale out at predetermined targets with trailing stop",
      },
      partialProfits: {
        title: "Partial Profit Taking",
        description: "Close 50% at 1.1000, 30% at 1.1040, trail remaining 20%",
      },
      stopAdjustment: {
        title: "Stop Management",
        description: "Move to breakeven after first target hit",
      },
      breakeven: {
        title: "Breakeven Point",
        description: "Move stop to 1.0950 once price reaches 1.1000",
      },
      trailMethod: {
        title: "Trailing Strategy",
        description: "Trail final 20% with 20-pip trailing stop",
      },
      timeStop: {
        title: "Time-Based Exit",
        description: "Consider exit if no progress after 3 trading days",
      },
      signalInvalidation: {
        title: "Signal Failure",
        description: "Exit if price closes below 1.0950 on daily chart",
      },
      maxTimeInTrade: {
        title: "Maximum Hold Time",
        description: "5 trading days for swing trade completion",
      },
    },

    position: {
      accountRisk: "2% of account equity",
      positionSize: "Calculate based on 30-pip stop loss distance",
      riskPercent: "2.0%",
      maxDailyRisk: "6% across all positions",
      correlationWarning: "Monitor other EUR pairs for correlation risk",
    },

    calculationData: {
      riskPips: 30,
      rewardPips: 85,
      target2Pips: 85,
      target3Pips: 125,
      riskRewardRatio: 2.8,
      averageTimeToTarget: 48,
      maxHoldTime: 120,
      pipValue: 10,
      contractSize: 100000,
    },

    alternativeScenarios: {
      bullishScenario: {
        title: "Extended Bull Run",
        description: "If momentum continues, target 1.1150 weekly resistance",
      },
      bearishScenario: {
        title: "False Breakout",
        description: "Rejection at 1.0960, fall back to 1.0890 support",
      },
      sidewaysScenario: {
        title: "Consolidation Phase",
        description: "Range trading between 1.0920-1.0980 for several days",
      },
      breakoutScenario: {
        title: "Momentum Acceleration",
        description:
          "Clean break above 1.1000 could trigger algo buying to 1.1080",
      },
      invalidationScenario: {
        title: "Setup Failure",
        description: "Daily close below 1.0920 invalidates bullish thesis",
      },
    },

    beginnerGuidance: {
      shouldNewbiesTrade: {
        title: "Beginner Friendly",
        description: "Yes, but with reduced position size",
      },
      whyNot: {
        title: "Potential Concerns",
        description:
          "Requires disciplined stop loss management and partial profit taking",
      },
      learningFocus: {
        title: "Educational Value",
        description:
          "Excellent example of breakout trading with proper risk management",
      },
      commonMistake: {
        title: "Typical Errors",
        description:
          "Chasing price too high above breakout level, ignoring volume confirmation",
      },
      practiceFirst: {
        title: "Paper Trade First",
        description:
          "Practice the scaling out strategy before risking real money",
      },
    },

    dataLimitations: [
      "Limited to daily timeframe analysis",
      "No access to real-time order flow data",
      "Economic calendar events not fully integrated",
    ],

    riskWarnings: {
      primaryRisk: {
        title: "Main Risk Factor",
        description: "False breakout if price fails to hold above 1.0950",
      },
      falseBreakoutRisk: {
        title: "Breakout Failure",
        description: "30% chance of whipsaw back below resistance level",
      },
      newsEventRisk: {
        title: "Event Risk",
        description: "ECB meeting next week could cause volatility",
      },
      liquidityRisk: {
        title: "Liquidity Concerns",
        description: "Lower liquidity during Asian session hours",
      },
      correlationRisk: {
        title: "Portfolio Risk",
        description: "Other EUR positions may amplify drawdown",
      },
    },

    actionPlan: {
      rightNow: {
        title: "Immediate Actions",
        description:
          "Set buy stop at 1.0952, prepare position sizing calculations",
      },
      waitFor: {
        title: "Entry Trigger",
        description: "Clean break above 1.0950 with volume confirmation",
      },
      entryMethod: {
        title: "Entry Execution",
        description: "Buy stop order 2 pips above 1.0950 resistance level",
      },
      afterEntry: {
        title: "Post-Entry Management",
        description: "Set stop at 1.0920, first target at 1.1000",
      },
      monitoring: {
        title: "Trade Monitoring",
        description:
          "Watch for volume, momentum divergence, key level reactions",
      },
      dailyReview: {
        title: "Daily Assessment",
        description:
          "Review daily close, adjust stops, monitor correlation impact",
      },
    },
  },

  // Trade Plan 2: Gold Short on Resistance
  {
    id: "tp_002_gold_short",
    title: "Gold Short at Major Resistance Zone",
    summary:
      "XAUUSD approaching key $2150 resistance with bearish divergence. Strong dollar and rising yields create headwinds.",
    detailedSummary:
      "Gold has rallied to test the crucial $2150 resistance zone that has held on three previous attempts over the past month. Technical indicators show clear bearish divergence with RSI making lower highs while price makes higher highs. The fundamental backdrop has shifted bearish with the US Dollar strengthening on hawkish Fed rhetoric and 10-year treasury yields breaking above 4.5%. The setup offers a 1:2.2 risk-reward ratio targeting the $2100 psychological level. Primary risk is a fundamental shift if geopolitical tensions escalate suddenly.",

    signal:
      "Bearish rejection at $2150 resistance with divergence confirmation",
    confidence: "Medium",
    timeframe: "4H chart setup, 3-7 day holding period",
    direction: "Short",
    symbol: "XAU/USD",
    trend: "Uptrend showing signs of exhaustion at major resistance",
    recommendation: "Worth a try",

    scores: {
      overall: {
        title: "Overall Score",
        score: 6.8,
        status: "🟢 GOOD",
        reasoning:
          "Solid technical setup but fighting major uptrend requires caution",
      },
      technical: {
        title: "Technical Analysis",
        score: 7.2,
        status: "🟢 GOOD",
        reasoning:
          "Clear resistance level, bearish divergence, but counter-trend trade",
      },
      timing: {
        title: "Market Timing",
        score: 6.5,
        status: "🟡 MODERATE",
        reasoning:
          "Counter-trend timing challenging, need patience for rejection signal",
      },
      riskReward: {
        title: "Risk/Reward",
        score: 7.0,
        status: "🟢 GOOD",
        reasoning: "1:2.2 ratio acceptable for counter-trend trade",
      },
      tradability: {
        title: "Execution Quality",
        score: 6.8,
        status: "🟢 GOOD",
        reasoning: "Gold can be volatile, wider spreads during certain hours",
      },
    },

    technical: {
      trendScore: {
        title: "Trend Strength",
        score: 4.0,
        status: "🔴 WEAK",
        reasoning: "Trading against established uptrend - major concern",
      },
      setupScore: {
        title: "Setup Quality",
        score: 7.5,
        status: "🟢 GOOD",
        reasoning: "Classic resistance rejection setup with multiple tests",
      },
      confluenceScore: {
        title: "Multiple Confluences",
        score: 7.0,
        status: "🟢 GOOD",
        reasoning: "Technical resistance, divergence, fundamental shifts align",
      },
      clarityScore: {
        title: "Signal Clarity",
        score: 6.5,
        status: "🟡 MODERATE",
        reasoning:
          "Need clear rejection signal, not just proximity to resistance",
      },
      volumeScore: {
        title: "Volume Analysis",
        score: 6.0,
        status: "🟡 MODERATE",
        reasoning:
          "Volume declining on recent push higher - mild bearish signal",
      },
      momentumScore: {
        title: "Momentum Indicators",
        score: 7.8,
        status: "🟢 GOOD",
        reasoning: "Clear bearish divergence on RSI and MACD",
      },
      marketStructureScore: {
        title: "Market Structure",
        score: 5.5,
        status: "🟡 MODERATE",
        reasoning: "Still in uptrend structure, looking for first break",
      },
      volatilityScore: {
        title: "Volatility Environment",
        score: 6.8,
        status: "🟢 GOOD",
        reasoning: "Normal volatility range, manageable for position sizing",
      },
      technicalSummary: {
        title: "Technical Summary",
        score: 6.4,
        status: "🟡 MODERATE",
        reasoning:
          "Counter-trend trade with good technical signals but inherent risk",
      },
    },

    marketContext: {
      sessionActive: {
        title: "Trading Session",
        description: "NY session, good gold liquidity and USD strength visible",
      },
      correlatedAssets: {
        title: "Correlated Markets",
        description: "DXY strengthening, real yields rising, risk-off in bonds",
      },
      institutionalBias: {
        title: "Smart Money Flow",
        description:
          "Large specs reducing long positions according to COT data",
      },
      retailSentiment: {
        title: "Retail Positioning",
        description: "85% retail long gold - extreme reading suggests top",
      },
      liquidityZones: {
        title: "Key Liquidity Levels",
        description: "$2150 major resistance, $2100 psychological support",
      },
    },

    professionalEdge: {
      smartMoneyClues: {
        title: "Institutional Signals",
        description:
          "Commercial hedgers increasing short positions, CoT bearish",
      },
      orderFlowSignals: {
        title: "Order Flow Analysis",
        description:
          "Large sell orders stacking above $2145, resistance building",
      },
      algorithmicLevels: {
        title: "Algo Trading Levels",
        description:
          "Algorithms defending $2150 level, multiple rejection wicks",
      },
      newsDrivers: {
        title: "Fundamental Catalysts",
        description:
          "Fed hawkish rhetoric, rising real yields, dollar strength",
      },
      timingEdge: {
        title: "Optimal Entry Timing",
        description:
          "Wait for clear rejection candle, avoid catching falling knife",
      },
    },

    execution: {
      type: {
        title: "Order Type",
        description: "Sell Limit at $2148 or Market Sell on rejection signal",
      },
      currentPrice: {
        title: "Current Price",
        description: "$2144.50",
      },
      entryZone: {
        title: "Entry Range",
        description: "$2145 - $2150",
      },
      lotSize: {
        title: "Position Size",
        description: "Based on 1.5% account risk (counter-trend trade)",
      },
      stopLoss: {
        title: "Stop Loss",
        description: "$2165 (20 points above resistance)",
      },
      target1: {
        title: "First Target",
        description: "$2120 (25 points, close 60%)",
      },
      target2: {
        title: "Second Target",
        description: "$2100 (45 points, close 40%)",
      },
      target3: {
        title: "Extension Target",
        description: "$2080 if momentum continues",
      },
      finalTarget: {
        title: "Ultimate Target",
        description: "$2100 psychological support level",
      },
      support: {
        title: "Key Support",
        description: "$2120, $2100, $2080",
      },
      resistance: {
        title: "Key Resistance",
        description: "$2150, $2165, $2180",
      },
      riskReward: {
        title: "Risk:Reward Ratio",
        description: "1:2.2 (acceptable for counter-trend)",
      },
    },

    exitStrategy: {
      primaryExit: {
        title: "Primary Exit Method",
        description: "Quick profit taking due to counter-trend nature",
      },
      partialProfits: {
        title: "Partial Profit Taking",
        description: "Take 60% at $2120, let 40% run to $2100",
      },
      stopAdjustment: {
        title: "Stop Management",
        description: "Trail stop to breakeven once $2125 reached",
      },
      breakeven: {
        title: "Breakeven Point",
        description: "Move stop to $2147 after first target hit",
      },
      trailMethod: {
        title: "Trailing Strategy",
        description: "Tight 15-point trailing stop for remaining position",
      },
      timeStop: {
        title: "Time-Based Exit",
        description: "Exit if no movement within 2 days - counter-trend risk",
      },
      signalInvalidation: {
        title: "Signal Failure",
        description: "Exit immediately if price closes above $2155",
      },
      maxTimeInTrade: {
        title: "Maximum Hold Time",
        description: "3-4 days maximum for counter-trend position",
      },
    },

    position: {
      accountRisk: "1.5% of account equity (reduced for counter-trend)",
      positionSize: "Calculate based on 20-point stop loss distance",
      riskPercent: "1.5%",
      maxDailyRisk: "4% across all positions",
      correlationWarning: "Avoid other USD shorts or safe-haven longs",
    },

    calculationData: {
      riskPips: 200,
      rewardPips: 450,
      target2Pips: 450,
      target3Pips: 650,
      riskRewardRatio: 2.2,
      averageTimeToTarget: 72,
      maxHoldTime: 96,
      pipValue: 1,
      contractSize: 100,
    },

    alternativeScenarios: {
      bullishScenario: {
        title: "Breakout Above Resistance",
        description: "If gold breaks $2150, target move to $2180-2200",
      },
      bearishScenario: {
        title: "Sharp Correction",
        description: "Strong dollar rally could push gold to $2050 quickly",
      },
      sidewaysScenario: {
        title: "Range Continuation",
        description: "Chop between $2100-2150 for extended period",
      },
      breakoutScenario: {
        title: "False Breakout Trap",
        description: "Brief spike above $2150 then sharp reversal lower",
      },
      invalidationScenario: {
        title: "Trend Resumption",
        description: "Daily close above $2155 signals continued bull market",
      },
    },

    beginnerGuidance: {
      shouldNewbiesTrade: {
        title: "Beginner Friendly",
        description: "No - counter-trend trades are advanced strategy",
      },
      whyNot: {
        title: "Why Avoid",
        description:
          "Fighting major trend, requires precise timing and quick exits",
      },
      learningFocus: {
        title: "Educational Value",
        description:
          "Good example of resistance trading but too risky for beginners",
      },
      commonMistake: {
        title: "Typical Errors",
        description: "Holding too long against trend, poor risk management",
      },
      practiceFirst: {
        title: "Paper Trade Advice",
        description:
          "Practice counter-trend setups extensively before real money",
      },
    },

    dataLimitations: [
      "Limited real-time COT data access",
      "Geopolitical risk factors not quantified",
      "Central bank intervention potential unknown",
    ],

    riskWarnings: {
      primaryRisk: {
        title: "Main Risk Factor",
        description:
          "Trading against established uptrend - trend can resume quickly",
      },
      falseBreakoutRisk: {
        title: "Breakout Risk",
        description:
          "Gold could break $2150 and trigger stops before reversing",
      },
      newsEventRisk: {
        title: "Event Risk",
        description:
          "Geopolitical events can spike gold regardless of technicals",
      },
      liquidityRisk: {
        title: "Liquidity Concerns",
        description: "Gold spreads can widen during news events",
      },
      correlationRisk: {
        title: "Portfolio Risk",
        description: "USD strength theme could affect other positions",
      },
    },

    actionPlan: {
      rightNow: {
        title: "Immediate Actions",
        description: "Monitor for rejection signals at $2150 resistance level",
      },
      waitFor: {
        title: "Entry Trigger",
        description:
          "Clear bearish reversal candle or sell limit fill at $2148",
      },
      entryMethod: {
        title: "Entry Execution",
        description: "Sell limit at $2148 or market sell on strong rejection",
      },
      afterEntry: {
        title: "Post-Entry Management",
        description: "Set tight stop at $2165, first target $2120",
      },
      monitoring: {
        title: "Trade Monitoring",
        description:
          "Watch USD strength, yields, any geopolitical developments",
      },
      dailyReview: {
        title: "Daily Assessment",
        description:
          "Assess trend strength daily, ready for quick exit if needed",
      },
    },
  },

  // Trade Plan 3: GBP/JPY Range Trade
  {
    id: "tp_003_gbpjpy_range",
    title: "GBP/JPY Range Bounce Off Support",
    summary:
      "GBPJPY testing 185.50 range support with oversold RSI. Expecting bounce to 188.00 resistance in established range.",
    detailedSummary:
      "GBP/JPY has been trading in a well-defined range between 185.50 support and 188.50 resistance for the past two weeks. Price is currently testing the lower boundary with RSI showing oversold conditions below 30. The pair has respected these levels on four previous occasions, making this a high-probability range trade. BoJ intervention concerns limit upside above 189.00, while BoE hawkish stance provides underlying GBP support. This setup offers a 1:1.8 risk-reward targeting the middle of the range initially. Main risk is range breakdown if global risk sentiment deteriorates sharply.",

    signal: "Range support test at 185.50 with oversold bounce setup",
    confidence: "Medium",
    timeframe: "1H chart setup, 2-4 day range trade",
    direction: "Long",
    symbol: "GBP/JPY",
    trend: "Sideways consolidation within defined range",
    recommendation: "Worth a try",

    scores: {
      overall: {
        title: "Overall Score",
        score: 6.5,
        status: "🟡 MODERATE",
        reasoning: "Solid range trade setup but requires precise execution",
      },
      technical: {
        title: "Technical Analysis",
        score: 7.0,
        status: "🟢 GOOD",
        reasoning: "Clear range boundaries, oversold bounce conditions present",
      },
      timing: {
        title: "Market Timing",
        score: 6.2,
        status: "🟡 MODERATE",
        reasoning:
          "Range trading requires patience, market conditions supportive",
      },
      riskReward: {
        title: "Risk/Reward",
        score: 6.8,
        status: "🟢 GOOD",
        reasoning: "1:1.8 ratio reasonable for range trade with defined levels",
      },
      tradability: {
        title: "Execution Quality",
        score: 6.0,
        status: "🟡 MODERATE",
        reasoning: "GBP/JPY can be volatile, wider spreads than majors",
      },
    },

    technical: {
      trendScore: {
        title: "Trend Strength",
        score: 5.0,
        status: "🔘 N/A",
        reasoning: "No clear trend - sideways range-bound price action",
      },
      setupScore: {
        title: "Setup Quality",
        score: 7.2,
        status: "🟢 GOOD",
        reasoning:
          "Well-established range with multiple tests of support/resistance",
      },
      confluenceScore: {
        title: "Multiple Confluences",
        score: 6.5,
        status: "🟡 MODERATE",
        reasoning:
          "Oversold RSI, range support, but limited additional confluences",
      },
      clarityScore: {
        title: "Signal Clarity",
        score: 7.5,
        status: "🟢 GOOD",
        reasoning: "Very clear range boundaries and entry/exit levels",
      },
      volumeScore: {
        title: "Volume Analysis",
        score: 5.5,
        status: "🟡 MODERATE",
        reasoning: "Volume data less reliable for JPY crosses",
      },
      momentumScore: {
        title: "Momentum Indicators",
        score: 6.8,
        status: "🟢 GOOD",
        reasoning: "RSI oversold, stochastic showing bullish divergence",
      },
      marketStructureScore: {
        title: "Market Structure",
        score: 7.0,
        status: "🟢 GOOD",
        reasoning: "Clean range structure with defined boundaries",
      },
      volatilityScore: {
        title: "Volatility Environment",
        score: 5.8,
        status: "🟡 MODERATE",
        reasoning: "Moderate volatility, manageable for range trading",
      },
      technicalSummary: {
        title: "Technical Summary",
        score: 6.5,
        status: "🟡 MODERATE",
        reasoning:
          "Decent range trade setup with clear levels but requires skill",
      },
    },

    marketContext: {
      sessionActive: {
        title: "Trading Session",
        description: "London session, good GBP activity, moderate JPY flows",
      },
      correlatedAssets: {
        title: "Correlated Markets",
        description: "GBP strength vs USD, JPY neutral, risk sentiment mixed",
      },
      institutionalBias: {
        title: "Smart Money Flow",
        description:
          "Range-bound flows, no clear institutional bias either direction",
      },
      retailSentiment: {
        title: "Retail Positioning",
        description:
          "Mixed positioning at range extremes, typical range behavior",
      },
      liquidityZones: {
        title: "Key Liquidity Levels",
        description:
          "185.50 support, 188.50 resistance, stops clustered at range breaks",
      },
    },

    professionalEdge: {
      smartMoneyClues: {
        title: "Institutional Signals",
        description:
          "Algos defending range boundaries, consistent rejection patterns",
      },
      orderFlowSignals: {
        title: "Order Flow Analysis",
        description: "Buy orders stacking near 185.50, sell orders at 188.00+",
      },
      algorithmicLevels: {
        title: "Algo Trading Levels",
        description:
          "Range algos active, expect mechanical bounces at boundaries",
      },
      newsDrivers: {
        title: "Fundamental Catalysts",
        description:
          "BoJ intervention fears cap upside, BoE hawkishness supports",
      },
      timingEdge: {
        title: "Optimal Entry Timing",
        description:
          "Enter on oversold bounce signal, not just proximity to support",
      },
    },

    execution: {
      type: {
        title: "Order Type",
        description: "Buy Limit at 185.55 or Market Buy on bounce confirmation",
      },
      currentPrice: {
        title: "Current Price",
        description: "185.65",
      },
      entryZone: {
        title: "Entry Range",
        description: "185.50 - 185.70",
      },
      lotSize: {
        title: "Position Size",
        description: "Based on 1.8% account risk for range trade",
      },
      stopLoss: {
        title: "Stop Loss",
        description: "185.20 (35 pips below support)",
      },
      target1: {
        title: "First Target",
        description: "186.80 (mid-range, close 70%)",
      },
      target2: {
        title: "Second Target",
        description: "187.80 (near resistance, close 30%)",
      },
      target3: {
        title: "Stretch Target",
        description: "188.20 if momentum continues",
      },
      finalTarget: {
        title: "Ultimate Target",
        description: "187.80 near range top",
      },
      support: {
        title: "Key Support",
        description: "185.50, 185.20, 184.80",
      },
      resistance: {
        title: "Key Resistance",
        description: "186.80, 187.80, 188.50",
      },
      riskReward: {
        title: "Risk:Reward Ratio",
        description: "1:1.8 (adequate for range trade)",
      },
    },

    exitStrategy: {
      primaryExit: {
        title: "Primary Exit Method",
        description: "Target range top, quick exit if range breaks",
      },
      partialProfits: {
        title: "Partial Profit Taking",
        description: "Take 70% at mid-range 186.80, let 30% run to resistance",
      },
      stopAdjustment: {
        title: "Stop Management",
        description: "Move to breakeven once 186.50 reached",
      },
      breakeven: {
        title: "Breakeven Point",
        description: "Adjust stop to 185.60 after first target",
      },
      trailMethod: {
        title: "Trailing Strategy",
        description: "Trail final position with 30-pip stop",
      },
      timeStop: {
        title: "Time-Based Exit",
        description: "Exit if range breaks down or 4 days with no progress",
      },
      signalInvalidation: {
        title: "Signal Failure",
        description: "Range breakdown below 185.20 invalidates setup",
      },
      maxTimeInTrade: {
        title: "Maximum Hold Time",
        description: "4 days for range completion",
      },
    },

    position: {
      accountRisk: "1.8% of account equity",
      positionSize: "Calculate based on 35-pip stop distance",
      riskPercent: "1.8%",
      maxDailyRisk: "5% across all positions",
      correlationWarning: "Monitor other GBP and JPY positions for correlation",
    },

    calculationData: {
      riskPips: 35,
      rewardPips: 63,
      target2Pips: 120,
      target3Pips: 155,
      riskRewardRatio: 1.8,
      averageTimeToTarget: 60,
      maxHoldTime: 96,
      pipValue: 6.5,
      contractSize: 100000,
    },

    alternativeScenarios: {
      bullishScenario: {
        title: "Range Breakout Higher",
        description: "Clean break above 188.50 could target 190.00+",
      },
      bearishScenario: {
        title: "Support Breakdown",
        description: "Break below 185.20 could accelerate to 183.50",
      },
      sidewaysScenario: {
        title: "Extended Range",
        description: "Range continues for weeks, multiple round trips possible",
      },
      breakoutScenario: {
        title: "Volatility Expansion",
        description: "Major news could break range in either direction",
      },
      invalidationScenario: {
        title: "Range Failure",
        description: "Support break below 185.20 ends range trade thesis",
      },
    },

    beginnerGuidance: {
      shouldNewbiesTrade: {
        title: "Beginner Friendly",
        description: "paperTrade",
      },
      whyNot: {
        title: "Learning Opportunity",
        description:
          "Good for learning range trading but requires patience and precision",
      },
      learningFocus: {
        title: "Educational Value",
        description:
          "Excellent example of range-bound trading with clear levels",
      },
      commonMistake: {
        title: "Typical Errors",
        description:
          "Entering too early without confirmation, poor timing exits",
      },
      practiceFirst: {
        title: "Paper Trade Recommendation",
        description: "Practice range trading extensively - timing is crucial",
      },
    },

    dataLimitations: [
      "Limited volume data for JPY crosses",
      "BoJ intervention levels not precisely known",
      "Range duration estimates are approximate",
    ],

    riskWarnings: {
      primaryRisk: {
        title: "Main Risk Factor",
        description: "Range breakdown could trigger stops and momentum selling",
      },
      falseBreakoutRisk: {
        title: "False Bounce Risk",
        description: "Support test could fail, leading to range breakdown",
      },
      newsEventRisk: {
        title: "Event Risk",
        description: "BoJ or BoE policy changes could break range violently",
      },
      liquidityRisk: {
        title: "Liquidity Concerns",
        description: "GBP/JPY spreads can widen during Asian session",
      },
      correlationRisk: {
        title: "Portfolio Risk",
        description: "Other GBP or JPY positions could amplify losses",
      },
    },

    actionPlan: {
      rightNow: {
        title: "Immediate Actions",
        description: "Monitor for oversold bounce signals at 185.50 support",
      },
      waitFor: {
        title: "Entry Trigger",
        description:
          "Bullish reversal candle or RSI bounce from oversold levels",
      },
      entryMethod: {
        title: "Entry Execution",
        description: "Buy limit at 185.55 or market buy on bounce confirmation",
      },
      afterEntry: {
        title: "Post-Entry Management",
        description: "Set stop at 185.20, first target at 186.80",
      },
      monitoring: {
        title: "Trade Monitoring",
        description:
          "Watch for range integrity, momentum indicators, time decay",
      },
      dailyReview: {
        title: "Daily Assessment",
        description:
          "Assess range health daily, prepare for potential breakdown",
      },
    },
  },
];

export default tradePlans;
