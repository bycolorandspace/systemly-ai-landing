import {
  AboutSectionType,
  FeaturesSectionType,
  FinalCTASectionType,
  HeroSectionType,
  HowItWorksSectionType,
  NewsletterSectionType,
  PricingSectionType,
  SocialProofSectionType,
  TestimonialsSectionType,
  TradeCardsSectionType,
} from "@/types/site-copy-types";
import {
  ChartArea,
  Scan,
  Settings,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const Metadata_: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://systemly.ai"
  ),
  // Basic SEO
  title: "Systemly.ai - Your Strategy. AI Execution. Real Results.",
  description:
    "Transform your trading strategy into AI-powered trade alerts. Backtest, refine, and execute with precision. No signal groups. No guesswork. Just your edge, amplified.",
  keywords: [
    "AI trading strategy",
    "algorithmic trade alerts",
    "strategy backtesting",
    "MT4 MT5 trade ideas",
    "automated trade analysis",
    "forex strategy automation",
    "trading strategy AI",
    "professional trading tools",
    "trade opportunity scanner",
    "risk-managed trading",
    "strategy performance testing",
    "smart trading alerts",
    "trading edge automation",
    "market opportunity detection",
    "trader independence tools",
  ],

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://systemly.ai",
    siteName: "Systemly.ai",
    title: "Your Strategy. AI Execution. Real Results.",
    description:
      "Stop following signals. Start executing YOUR strategy with AI precision. Backtest, alert, execute.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Systemly.ai - AI-Powered Strategy Execution Platform",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@systemlyai",
    creator: "@systemlyai",
    title: "Your Strategy. AI Execution. Real Results.",
    description:
      "Stop following signals. Start executing YOUR strategy with AI precision.",
    images: ["/twitter-image.jpg"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Additional metadata
  authors: [{ name: "Systemly.ai Team" }],
  creator: "Systemly.ai",
  publisher: "Systemly.ai",
  robots: "index, follow",

  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Systemly.ai",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "AI-powered trading strategy execution and analysis",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "2847",
      },
      description: "Transform your trading strategy into AI-powered execution",
    }),
  },
};

const HERO: HeroSectionType = {
  header: "AI generated trade ideas & analysis",
  // NEW: Emotional hooks that speak to pain → transformation
  subheader:
    "Stop paying for signals that don't match your style. Your strategy, your rules, your edge—executed with AI precision. From chart to alert to MT4 in seconds.",
  // ALTERNATIVE subheader options:
  // "Define your strategy once. Get precision alerts forever. No more Discord groups, no more missed setups, no more second-guessing."
  // "The last trading tool you'll ever need: Your strategy + AI analysis = Consistent opportunities, delivered to your MT4."

  ctaLabel: "Start Trading Smarter",
  ctaUrl: "/get-started",
  secondaryCta: "See How It Works", // New secondary CTA for uncertain visitors
};

const TRADE_CARDS_SECTION: TradeCardsSectionType = {
  title: "Opportunity Identified. Risk Calculated. Profit Projected.",
  subtext:
    "See the potential move value, your exact risk in dollars, and how it fits your strategy goals—before you click execute.",
};

const ABOUT: AboutSectionType = {
  title: "Built for Traders Who Think for Themselves",
  subheader: "About Systemly.ai",
  // NEW: Story-driven, emotionally resonant
  description:
    "This is trading as it should be: Strategic. Systematic. Sustainable.",

  description_2:
    "Systemly changes everything. Define your strategy—your goals, risk tolerance, entry rules—and our AI becomes your tireless analyst. It reads the markets 24/7, spots opportunities that match YOUR criteria, and delivers precision alerts straight to your phone and MT4/MT5. Beginners can start with proven community strategies. Pros can finally automate the grunt work and focus on execution.",

  description_3:
    "Pre-built strategies if you're starting out. Custom strategy building if you've got the edge. Then AI takes over—monitoring markets, calculating risk perfectly, alerting you to setups that match YOUR system, YOUR timeframe, YOUR rules.",
  stats: [
    { number: "2,847+", label: "Active Traders" },
    { number: "12,400+", label: "Strategies Backtested" },
    { number: "50K+", label: "Alerts Delivered Daily" },
  ],
};

const FEATURES: FeaturesSectionType = {
  title: "Everything You Need to Trade Your Way",
  subheader: "Features",
  featuresList: [
    {
      icon: Settings,
      title: "Strategy Builder",
      description:
        "Novice? Choose from battle-tested community strategies. Pro? Define your own edge with custom parameters—entries, exits, risk limits, timeframes. Your strategy, your control.",
    },
    {
      icon: Scan,
      title: "AI Market Scanner",
      description:
        "Our AI monitors markets 24/7, analyzing thousands of setups against YOUR strategy. When conditions align, you get instant alerts—no more missed opportunities while you sleep.",
    },
    {
      icon: ChartArea,
      title: "Strategy Backtesting",
      description:
        "See exactly how your strategy would have performed historically. Refine your edge with real data before risking a single dollar. Trade with confidence, not hope.",
    },
    {
      icon: ShieldCheck,
      title: "Precision Risk Management",
      description:
        "Never overleverage again. Systemly calculates position sizes, monitors exposure, and keeps you within your risk parameters automatically. Protect your capital, compound your wins.",
    },
    {
      icon: Zap,
      title: "Real-Time MT4/MT5 Integration",
      description:
        "Get alerts on your phone, then execute directly in MT4/MT5 with one click. Test in demo accounts first, then go live when you're ready. Seamless, fast, professional.",
    },
    {
      icon: Users,
      title: "Community Strategies",
      description:
        "Not ready to build your own? Access proven strategies shared by experienced traders. Learn what works, then customize as you grow. No gurus, just results.",
    },
  ],
};

const TESTIMONIALS: TestimonialsSectionType = {
  title: "Traders Who Took Control",
  subheader: "Testimonials",
  description: "Real traders. Real results. Real independence.",

  testimonialsList: [
    {
      description:
        "I wasted $2K on signal groups that traded during my work hours. Now I use my own strategy and get alerts I can actually act on. Finally profitable.",
      name: "Marcus T.",
      title: "Part-Time Swing Trader",
    },
    {
      description:
        "Backtested my scalping strategy, tweaked it based on data, now running at 68% win rate. This is what professional trading feels like.",
      name: "Sarah K.",
      title: "Full-Time Day Trader",
    },
    {
      description:
        "Started with a community strategy as a beginner. Three months later, I built my own. The progression system is brilliant.",
      name: "James L.",
      title: "Forex Trader, 8 Months Experience",
    },
    {
      description:
        "The risk management saved my account twice last month. Systemly won't let me sabotage myself anymore.",
      name: "Ana G.",
      title: "Crypto & Forex Trader",
    },
  ],
};

const PRICING: PricingSectionType = {
  title: "One Tool. Infinite Edge.",
  subheader: "Pricing",
  description:
    "Less than one signal group membership. More than any guru could teach you. Cancel anytime, keep your strategies forever.",

  plansList: [
    {
      name: "Starter",
      description: "Perfect for traders building their edge.",
      price: { billedMonthly: "$29", billedAnnually: "$24" },
      features: [
        "Access all community strategies",
        "AI market scanning (3 active strategies)",
        "Real-time alerts (mobile + email)",
        "Basic backtesting (1-year history)",
        "MT4/MT5 integration",
        "Risk calculator",
      ],
      ctaLabel: "Start Free Trial",
      ctaUrl: "/get-started",
      badge: "Most Popular",
    },
    {
      name: "Pro",
      description: "For serious traders who demand precision.",
      price: { billedMonthly: "$79", billedAnnually: "$65" },
      features: [
        "Everything in Starter",
        "Unlimited custom strategies",
        "Advanced backtesting (10-year history + Monte Carlo)",
        "Priority alerts (SMS + push notifications)",
        "Advanced risk management suite",
        "Strategy optimization tools",
        "Private Discord community",
        "Priority support",
      ],
      ctaLabel: "Start Free Trial",
      ctaUrl: "/get-started",
      badge: "Best Value",
    },
  ],

  moneyBackGuarantee:
    "30-day money-back guarantee. If Systemly doesn't improve your trading, we'll refund every penny.",
};

const HOW_IT_WORKS: HowItWorksSectionType = {
  title: "From Strategy to Profit in 4 Steps",
  subtitle: "Set it up once. Benefit forever.",

  steps: [
    {
      step: 1,
      title: "Choose Your Strategy",
      description:
        "Browse proven community strategies or build your own from scratch. Define your edge: timeframes, indicators, risk levels, profit targets. As detailed or simple as you want.",
    },
    {
      step: 2,
      title: "Backtest & Refine",
      description:
        "See how your strategy performs against historical data. Tweak parameters, optimize entries, refine your edge—all before risking real money. Trade with data, not emotions.",
    },
    {
      step: 3,
      title: "Activate AI Monitoring",
      description:
        "Systemly's AI scans the markets 24/7, matching opportunities to your exact criteria. When a high-probability setup appears, you get instant alerts—no more chart watching.",
    },
    {
      step: 4,
      title: "Execute with Confidence",
      description:
        "Receive alerts on your phone with full analysis: entry, stop-loss, take-profit, risk/reward. Test in demo first, then execute live in MT4/MT5. Your strategy, AI-powered, profitable.",
    },
  ],

  ctaText: "Ready to trade on your terms?",
  ctaButton: "Start Your Free Trial",
};

const NEWSLETTER: NewsletterSectionType = {
  title: "The Independent Trader Newsletter",
  subheader: "Weekly Market Insights for Self-Reliant Traders",
  description:
    "Weekly strategy breakdowns, AI trading insights, and market opportunities. No fluff, no hype—just actionable intelligence for traders who think for themselves.",
  ctaLabel: "Get Weekly Edge",
  ctaUrl: "/subscribe",
  privacyNote: "We respect your inbox. Unsubscribe anytime.",
};

// NEW: Social Proof Section
const SOCIAL_PROOF: SocialProofSectionType = {
  title: "The Community That Trades Together",
  description: "Join traders who've stopped following and started leading.",
  stats: [
    {
      number: "2,847",
      label: "Active Traders",
      context: "And growing every day",
    },
    {
      number: "12,400+",
      label: "Strategies Created",
      context: "Community-tested, AI-optimized",
    },
    {
      number: "68%",
      label: "Avg. Win Rate",
      context: "Across all active strategies",
    },
    {
      number: "$1.2M+",
      label: "Capital Monitored",
      context: "Protected by smart risk management",
    },
  ],
};

// NEW: Final CTA Section
const FINAL_CTA: FinalCTASectionType = {
  title: "Stop Trading Someone Else's Strategy",
  description: "Your edge. Your rules. Your results. Amplified by AI.",
  primaryCta: "Start Free Trial",
  secondaryCta: "Watch Demo",
  trustSignals: [
    "No credit card required",
    "30-day money-back guarantee",
    "Cancel anytime",
  ],
};

export {
  HERO,
  TRADE_CARDS_SECTION,
  ABOUT,
  FEATURES,
  TESTIMONIALS,
  PRICING,
  HOW_IT_WORKS,
  NEWSLETTER,
  SOCIAL_PROOF,
  FINAL_CTA,
};
