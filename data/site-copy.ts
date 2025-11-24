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
  LegalSectionType,
  DisclaimerType,
  RiskDisclaimerPageType,
  TermsOfServicePageType,
  PrivacyPolicyPageType,
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
  title: "Systemly.ai - Trading Strategy Tools & AI Analysis Platform",
  description:
    "Educational trading tools for building, testing, and analyzing your trading strategies. Backtest strategies, manage risk, and receive AI-powered market analysis alerts. Software tools for independent traders.",
  keywords: [
    "trading strategy software",
    "backtesting tools",
    "trading education platform",
    "strategy testing software",
    "risk management calculator",
    "trading analysis tools",
    "market scanner software",
    "trading journal software",
    "MT4 MT5 tools",
    "trading strategy builder",
    "algorithmic trading education",
    "trading risk calculator",
    "strategy performance testing",
    "trading tools UK",
    "independent trader tools",
  ],

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://systemly.ai",
    siteName: "Systemly.ai",
    title: "Trading Strategy Tools & AI Analysis for Independent Traders",
    description:
      "Educational software for building, testing, and analyzing trading strategies. Not financial advice.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Systemly.ai - Trading Strategy Software & Educational Tools",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@systemlyai",
    creator: "@systemlyai",
    title: "Trading Strategy Tools & Educational Software",
    description:
      "Build and test your trading strategies. Educational tools only - not financial advice.",
    images: ["/twitter-image.jpg"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Additional metadata
  authors: [{ name: "Good Market Trader LTD" }],
  creator: "Good Market Trader LTD",
  publisher: "Good Market Trader LTD",
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
        price: "29",
        priceCurrency: "GBP",
        description: "Trading strategy analysis and educational software tools",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "2847",
      },
      description:
        "Educational trading strategy software and analysis tools for independent traders",
    }),
  },
};

// CRITICAL SITE-WIDE DISCLAIMER
const SITE_DISCLAIMER: DisclaimerType = {
  short:
    "Educational tools only. Not financial advice. Trading involves substantial risk of loss.",
  full: "Systemly.ai provides educational trading software tools only. We do not provide financial advice, investment recommendations, or portfolio management services. All trading decisions are your responsibility. Past performance does not indicate future results. Trading involves substantial risk of loss and is not suitable for all investors. You could lose all of your invested capital. Only trade with money you can afford to lose.",
  riskWarning:
    "⚠️ WARNING: Trading CFDs, forex, and leveraged products carries high risk. You can lose more than your initial deposit. 76% of retail investor accounts lose money when trading CFDs.",
  regulatory:
    "Good Market Trader LTD is not authorised by the Financial Conduct Authority. We provide software tools, not regulated investment services.",
};

const HERO: HeroSectionType = {
  header: "Better trades with AI generated ideas",
  // COMPLIANT: Educational focus, no profit promises
  subheader:
    "Create custom strategies, backtest performance, and receive AI-generated trade ideas & market analysis. Your strategy, your decisions.",
  ctaLabel: "Get Started",
  ctaUrl: "/onboarding",
  secondaryCta: "See How It Works",

  // ADD PROMINENT DISCLAIMER
  disclaimer: SITE_DISCLAIMER.short,
};

const TRADE_CARDS_SECTION: TradeCardsSectionType = {
  title: "Analysis Delivered. Risk Calculated. Decisions Are Yours.",
  subtext:
    "See potential trade setups, calculated risk metrics, and strategic analysis—educational information to inform your own trading decisions.",
  disclaimer:
    "Analysis provided for educational purposes. You are responsible for all trading decisions.",
};

const ABOUT: AboutSectionType = {
  title: "Trade Analysis Without the Guesswork",
  subheader: "About Systemly.ai",

  description:
    "See the opportunity. Understand the risk. Know your potential profit. Decide for yourself. That's how trading should work.",

  description_2:
    "Our AI does the analytical heavy lifting: technical pattern recognition, support/resistance mapping, volatility assessment, and risk/reward calculations. You get clean, actionable information. No hype, no promises—just transparent analysis so you can make informed decisions.",

  description_3:
    "Whether you're learning from communities or trading solo, you need fast, reliable analysis. Not three-hour chart sessions. Not blind trust in someone else's call. Clear information, your decision, better informed trades. That's why we built Systemly.ai",
  stats: [
    {
      number: "2,847+",
      label: "Active Traders",
      disclaimer: "Platform users, not a performance claim",
    },
    {
      number: "50K+",
      label: "Trade Setups Analyzed",
      disclaimer: "Analysis volume, not recommendations",
    },
    {
      number: "25K+",
      label: "Risk Calculations",
      disclaimer: "Position sizing calculations performed",
    },
  ],

  disclaimer:
    "Statistics provided for informational purposes. Past backtesting results do not predict or guarantee future trading performance. All strategies carry risk of loss.",
};

const FEATURES: FeaturesSectionType = {
  title: "Everything You Need to Trade Independently",
  subheader: "Features",
  featuresList: [
    {
      icon: Settings,
      title: "Strategy Builder",
      description:
        "New to trading? Start with community shared strategy templates. Experienced? Create custom strategy configurations with your own parameters: entries, exits, risk limits, timeframes. Build your trading approach systematically.",
    },
    {
      icon: Scan,
      title: "AI Market Analysis Scanner",
      description:
        "Our AI monitors markets continuously, analyzing setups against your configured strategy parameters. When conditions align with your criteria, receive analysis alerts with complete trade information. You review and decide.",
    },
    {
      icon: ChartArea,
      title: "Strategy Backtesting Software",
      description:
        "Test how your strategy would have performed using historical data. Understand strategy behavior before risking real capital. Past performance does not predict future results. All historical testing is hypothetical.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management Calculator",
      description:
        "Calculate position sizes and monitor exposure against your risk parameters. See exactly how much you're risking in dollars before you execute. You are responsible for all risk management decisions.",
    },
    {
      icon: Zap,
      title: "MT4/MT5 Alert Integration",
      description:
        "Receive analysis alerts on your devices, with option to view in MT4/MT5. Test strategies in demo accounts first. We do not execute trades. All trading decisions and executions are your responsibility.",
    },
    {
      icon: Users,
      title: "Community Strategy Library",
      description:
        "Access strategy templates shared by other users. Learn different approaches, then customize for your own use. Community content not verified or endorsed. Not investment recommendations.",
    },
  ],
  disclaimer:
    "Analysis and information tools only. Software does not constitute financial advice or guarantee trading success.",
};

const TESTIMONIALS: TestimonialsSectionType = {
  title: "What Traders Are Saying",
  subheader: "Testimonials",
  description:
    "Real users sharing their experience with Systemly. Individual results vary.",

  testimonialsList: [
    {
      description:
        "The backtesting tools helped me understand what actually works in my strategy. I'm more systematic now, less emotional. Still learning, but I finally have a method that makes sense.",
      name: "Marcus T.",
      title: "Using Systemly for 6 months",
      disclaimer:
        "*Individual experience. Results vary. Not representative of all users.",
    },
    {
      description:
        "I stopped guessing on position sizes. The risk calculator shows me exactly what I'm risking before I click execute. Makes a huge difference in staying disciplined.",
      name: "Sarah K.",
      title: "Active trader",
      disclaimer:
        "*Individual experience. Past backtesting doesn't guarantee future results.",
    },
    {
      description:
        "Started with community templates to see how others think about setups. Now I build my own strategies. The progression from learning to creating was natural.",
      name: "James L.",
      title: "Using Systemly for 8 months",
      disclaimer: "*Learning experience. Not a guarantee of trading success.",
    },
    {
      description:
        "The alerts keep me honest with my risk limits. I see the analysis, check if it fits my rules, and decide. No more revenge trading when I'm emotional.",
      name: "Ana G.",
      title: "Part time trader",
      disclaimer:
        "*Individual experience. You are responsible for your own risk management.",
    },
  ],

  disclaimer:
    "⚠️ IMPORTANT: These are individual user experiences with our analysis tools, not trading results or recommendations. Your experience may differ. Trading involves substantial risk of loss. Software tools cannot guarantee trading success or profits.",
};

const PRICING: PricingSectionType = {
  title: "Simple Pricing, Powerful Tools",
  subheader: "Pricing",
  description:
    "Monthly subscription for access to AI analysis tools and strategy software. Cancel anytime. Analysis tools only, not financial advice or managed services.",

  plansList: [
    {
      name: "Starter",
      description: "Everything you need to start trading systematically.",
      price: { billedMonthly: "£29", billedAnnually: "£24" },
      features: [
        "Access community strategy templates",
        "AI market analysis alerts (3 active strategies)",
        "Alert notifications (mobile and email)",
        "Basic backtesting tools (1 year historical data)",
        "MT4/MT5 alert integration",
        "Risk calculator tool",
        "Strategy resources library",
      ],
      ctaLabel: "Get Started",
      ctaUrl: "/onboarding",
      badge: "Popular",
      disclaimer: "Analysis tools only. Not financial advice.",
    },
    {
      name: "Pro",
      description: "Advanced tools for serious traders.",
      price: { billedMonthly: "£79", billedAnnually: "£65" },
      features: [
        "All Starter features",
        "Unlimited custom strategy configurations",
        "Advanced backtesting (10 year data and Monte Carlo)",
        "Priority alerts (SMS and push notifications)",
        "Advanced risk management calculator suite",
        "Strategy optimization analysis tools",
        "Private community forum access",
        "Priority customer support",
      ],
      ctaLabel: "Get Started",
      ctaUrl: "/onboarding",
      badge: "Best Value",
      disclaimer: "Analysis software subscription. Not investment advice.",
    },
  ],

  moneyBackGuarantee:
    "30 day money back guarantee. If you're not satisfied with the software features and functionality, we'll refund your subscription. Note: We cannot guarantee trading results, profits, or performance. Software provides analysis tools only.",

  disclaimer:
    "⚠️ Subscriptions are for analysis software access only. We do not provide financial advice, investment recommendations, or guarantee trading outcomes. All prices in GBP. VAT included where applicable.",
};

const HOW_IT_WORKS: HowItWorksSectionType = {
  title: "Learn to Trade Systematically in 4 Steps",
  subtitle: "Educational platform for developing your trading approach",

  steps: [
    {
      step: 1,
      title: "Choose or Build a Strategy",
      description:
        "Browse community strategy templates for learning or build your own from scratch. Configure parameters: timeframes, indicators, risk levels, targets. Educational tools for strategy development—not investment recommendations.",
    },
    {
      step: 2,
      title: "Backtest & Learn",
      description:
        "See how your strategy would have performed against historical data. Educational backtesting tool for understanding strategy behavior. Past performance does not predict future results. All backtesting is hypothetical and for learning purposes only.",
    },
    {
      step: 3,
      title: "Activate Analysis Alerts",
      description:
        "Our AI scans markets continuously, matching setups to your configured criteria. When potential opportunities appear, receive educational analysis alerts. Information only—not trade recommendations. You make all trading decisions.",
    },
    {
      step: 4,
      title: "Practice & Develop Your Skills",
      description:
        "Receive analysis alerts with market information: potential entry levels, risk metrics, strategic context. Test in demo accounts first. All trading decisions and executions are your responsibility. Educational tools to support your independent development.",
    },
  ],

  ctaText: "Ready to develop your trading education?",
  ctaButton: "Start Learning Today",
  disclaimer:
    "Educational software platform. Not financial advice or guaranteed trading results.",
};

const NEWSLETTER: NewsletterSectionType = {
  title: "Weekly Trading Insights in Your Inbox",
  subheader: "Strategy Analysis and Market Commentary",
  description:
    "Get weekly strategy breakdowns, setup analysis, and market insights. Real information for traders who think for themselves, not hype or recommendations.",
  ctaLabel: "Subscribe",
  ctaUrl: "/subscribe",
  privacyNote: "We respect your privacy. Unsubscribe anytime.",
  disclaimer:
    "Newsletter provides market analysis only, not financial advice or trade recommendations.",
};

// COMPLIANT Social Proof Section
const SOCIAL_PROOF: SocialProofSectionType = {
  title: "Join Our Trading Education Community",
  description:
    "Traders using our educational platform to develop their strategies systematically.",
  stats: [
    {
      number: "2,847",
      label: "Platform Users",
      context: "Active software subscribers",
      disclaimer: "User count only, not a performance metric",
    },
    {
      number: "12,400+",
      label: "Strategies Created",
      context: "Community strategy configurations",
      disclaimer: "Configuration count, not trading results",
    },
    {
      number: "68%",
      label: "Avg. Backtest Win Rate",
      context: "Across backtested strategies",
      disclaimer:
        "⚠️ Hypothetical backtesting only. Past performance does not predict future results. Not live trading data.",
    },
    {
      number: "50K+",
      label: "Educational Alerts Sent",
      context: "Analysis notifications delivered",
      disclaimer: "Alert volume only, not trade recommendations or results",
    },
  ],
  disclaimer:
    "All statistics relate to software usage and hypothetical backtesting, not actual trading performance or guaranteed results. Educational platform metrics only.",
};

// COMPLIANT Final CTA Section
const FINAL_CTA: FinalCTASectionType = {
  title: "Develop Your Trading Education Systematically",
  description:
    "Educational software for building, testing, and analyzing your trading strategies independently.",
  primaryCta: "Start Learning",
  secondaryCta: "Watch Demo",
  trustSignals: [
    "30-day money-back guarantee",
    "Educational tools only",
    "Cancel anytime",
    "Not financial advice",
  ],
  disclaimer: SITE_DISCLAIMER.full,
};

// NEW: Legal Pages Navigation
const LEGAL_PAGES: LegalSectionType = {
  title: "Legal Information",
  pages: [
    {
      title: "Terms of Service",
      url: "/legal/terms",
      description: "Terms and conditions for using Systemly.ai platform",
    },
    {
      title: "Privacy Policy",
      url: "/legal/privacy",
      description: "How we collect, use, and protect your data",
    },
    {
      title: "Cookie Policy",
      url: "/legal/cookies",
      description: "Information about cookies and tracking on our site",
    },
    {
      title: "Risk Disclaimer",
      url: "/legal/risk-disclaimer",
      description: "Important risk warnings about trading",
    },
  ],
  companyInfo: {
    legalName: "Good Market Trader LTD",
    registrationNumber: "[Your Company Number]",
    registeredAddress: "128 City Road, London, EC1V 2NX, United Kingdom",
    icoNumber: "[Your ICO Registration Number]",
    email: "info@systemly.ai",
    regulatoryStatus: "Not authorised by the Financial Conduct Authority",
  },
};

// COMPREHENSIVE RISK DISCLAIMER PAGE CONTENT
const RISK_DISCLAIMER_PAGE: RiskDisclaimerPageType = {
  title: "Risk Disclaimer & Important Information",
  lastUpdated: "October 8, 2025",

  sections: [
    {
      heading: "Educational Software Only",
      intro:
        "Systemly.ai, operated by Good Market Trader LTD, provides educational trading software tools only. We do not:",
      items: [
        "Provide financial advice or investment recommendations",
        "Manage investments or client funds",
        "Execute trades on your behalf",
        "Guarantee trading results or profits",
        "Offer regulated investment services",
      ],
      footer:
        "All content, tools, and analysis provided are for educational purposes only. You are solely responsible for all trading decisions and their outcomes.",
    },
    {
      heading: "Regulatory Status",
      intro:
        "Good Market Trader LTD is NOT authorised by the Financial Conduct Authority (FCA).",
      items: [
        "We do not provide regulated investment advice, portfolio management, or other regulated investment services",
        "Our software provides educational tools and market analysis for your independent use",
        "You are responsible for ensuring your use of our platform complies with all applicable laws and regulations in your jurisdiction",
      ],
      footer: undefined,
    },
    {
      heading: "Trading Risks",
      intro:
        "⚠️ WARNING: Trading involves substantial risk of loss and is not suitable for all investors.",
      subheading: "Key risks include:",
      items: [
        "You could lose all of your invested capital",
        "Past performance does not predict or guarantee future results",
        "Leverage and margin trading can magnify both gains AND losses",
        "You may lose more than your initial deposit when trading leveraged products",
        "Market volatility can result in rapid losses",
        "Technical issues may prevent you from closing positions",
        "No trading strategy or system can guarantee profits",
      ],
      footer: "ONLY TRADE WITH MONEY YOU CAN AFFORD TO LOSE.",
    },
    {
      heading: "CFD Trading Risk Warning",
      intro:
        "Contracts for Difference (CFDs) and leveraged products carry high risk.",
      warning:
        "76% of retail investor accounts lose money when trading CFDs with major providers.",
      subheading: "CFD risks include:",
      items: [
        "Leverage can magnify losses beyond your deposit",
        "Overnight funding charges reduce profitability",
        "Stop losses may not execute at intended price during volatility",
        "You may be required to deposit additional funds at short notice",
        "Your positions may be closed automatically if you cannot meet margin calls",
      ],
      footer: "Ensure you fully understand how CFDs work before trading them.",
    },
    {
      heading: "Backtesting Limitations",
      intro:
        "Our backtesting tools use historical data for educational analysis only.",
      subheading: "Important limitations:",
      items: [
        "Past performance does NOT predict future results",
        "Backtesting cannot account for all real-world trading conditions",
        "Historical testing excludes slippage, commissions, and other costs",
        "Results are hypothetical and do not represent actual trading",
        "Market conditions change—historical patterns may not repeat",
        "Survivorship bias may affect historical data accuracy",
        "Backtesting may be over-optimized for past data",
      ],
      footer: "NEVER assume backtested results will occur in live trading.",
    },
    {
      heading: "AI Analysis Limitations",
      intro: "Our AI-powered market analysis has significant limitations:",
      items: [
        "AI analysis is educational information, NOT trade recommendations",
        "AI cannot predict future market movements with certainty",
        "Analysis may contain errors, inaccuracies, or be incomplete",
        "Technical issues may affect analysis quality or availability",
        "Market conditions may change faster than AI can analyze",
        "AI learns from historical data which may not predict future patterns",
      ],
      footer:
        "YOU are responsible for evaluating all information and making independent trading decisions.",
    },
    {
      heading: "Community Content Disclaimer",
      intro:
        "Community-shared strategies and content are provided by users for educational purposes only.",
      subheading: "Important warnings:",
      items: [
        "We do NOT verify, endorse, or guarantee community content",
        "Community strategies are NOT investment recommendations",
        "Shared performance results may be inaccurate or misleading",
        "Other users may have different risk tolerance and goals than you",
        "What works for one trader may not work for another",
        "Community members may have conflicts of interest",
      ],
      footer: "ALWAYS conduct your own research and due diligence.",
    },
    {
      heading: "No Guarantees",
      intro: "We make NO guarantees about:",
      items: [
        "Trading profits or success",
        "Software availability or uptime",
        "Accuracy of analysis or data",
        "MT4/MT5 integration functionality",
        "Alert delivery timing or reliability",
        "Backtesting result accuracy",
        "Platform performance",
        "Your trading outcomes",
      ],
      footer: "Use our educational tools at your own risk.",
    },
    {
      heading: "Your Responsibilities",
      intro:
        "By using Systemly.ai, you acknowledge that YOU are responsible for:",
      items: [
        "All trading decisions and their consequences",
        "Understanding the risks of trading before you begin",
        "Only trading with money you can afford to lose",
        "Compliance with all applicable laws in your jurisdiction",
        "Securing your account and trading platform access",
        "Maintaining adequate risk management",
        "Consulting professional financial advice if needed",
        "Reading and understanding all terms and disclaimers",
      ],
      footer: undefined,
    },
    {
      heading: "Seek Professional Advice",
      intro: "Before trading, consider seeking advice from:",
      items: [
        "FCA-authorised independent financial advisors",
        "Qualified tax professionals regarding tax implications",
        "Legal advisors regarding regulatory compliance",
        "Your broker regarding platform-specific risks",
      ],
      footer:
        "Educational software cannot replace professional financial advice tailored to your individual circumstances.",
    },
  ],

  footer: `This risk disclaimer is an integral part of our Terms of Service. By using Systemly.ai, you acknowledge that you have read, understood, and agree to this risk disclaimer.

Trading losses are a normal part of trading. No software, system, or strategy can eliminate the risk of loss. Your capital is always at risk.`,
};

// TERMS OF SERVICE PAGE CONTENT
const TERMS_OF_SERVICE_PAGE: TermsOfServicePageType = {
  title: "Terms of Service",
  lastUpdated: "October 8, 2025",
  effectiveDate: "October 8, 2025",
  introduction: `These Terms of Service ("Terms") govern your access to and use of Systemly.ai (the "Platform"), operated by Good Market Trader LTD ("we", "us", "our"). By accessing or using our Platform, you agree to be bound by these Terms and our Risk Disclaimer. If you do not agree to these Terms, do not use our Platform.`,

  sections: [
    {
      heading: "1. Acceptance of Terms",
      content: `By creating an account, accessing, or using Systemly.ai, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our comprehensive Risk Disclaimer (available at /risk-disclaimer). These documents form a legally binding agreement between you and Good Market Trader LTD.`,
      items: [
        "You must be at least 18 years old to use this Platform",
        "You must have the legal capacity to enter into binding contracts",
        "You are responsible for ensuring your use complies with all applicable laws in your jurisdiction",
        "We reserve the right to refuse service to anyone at our sole discretion",
      ],
    },
    {
      heading: "2. Educational Purpose and Service Description",
      intro:
        "Systemly.ai provides educational trading software tools and services, including:",
      items: [
        "Strategy building and configuration tools",
        "Historical backtesting functionality",
        "AI-powered market analysis alerts",
        "Risk management calculators",
        "Community strategy sharing features",
        "MT4/MT5 integration capabilities",
      ],
      footer:
        "ALL SERVICES ARE PROVIDED FOR EDUCATIONAL PURPOSES ONLY. We do not provide financial advice, investment recommendations, portfolio management, or regulated investment services.",
    },
    {
      heading: "3. User Accounts and Registration",
      subsections: [
        {
          subheading: "3.1 Account Creation",
          items: [
            "You must provide accurate, current, and complete information during registration",
            "You are responsible for maintaining the confidentiality of your account credentials",
            "You are solely responsible for all activities that occur under your account",
            "You must notify us immediately of any unauthorized access or security breach",
          ],
        },
        {
          subheading: "3.2 Account Termination",
          content:
            "We reserve the right to suspend or terminate your account at any time if:",
          items: [
            "You violate these Terms of Service",
            "You provide false or misleading information",
            "Your account is inactive for an extended period",
            "We discontinue the service",
            "Required by law or regulatory authority",
          ],
        },
      ],
    },
    {
      heading: "4. Subscription and Payment Terms",
      subsections: [
        {
          subheading: "4.1 Subscription Plans",
          items: [
            "Subscriptions are billed monthly or annually based on your selected plan",
            "All prices are in GBP and include applicable VAT",
            "Subscription fees are non-refundable except as provided in our 30-day money-back guarantee",
            "We reserve the right to modify pricing with 30 days' notice to active subscribers",
          ],
        },
        {
          subheading: "4.2 Automatic Renewal",
          items: [
            "Subscriptions automatically renew at the end of each billing period",
            "You will be charged automatically unless you cancel before the renewal date",
            "You can cancel your subscription at any time through your account settings",
            "Cancellation takes effect at the end of the current billing period",
          ],
        },
        {
          subheading: "4.3 Money-Back Guarantee",
          content:
            "We offer a 30-day money-back guarantee on subscription fees, subject to these conditions:",
          items: [
            "Guarantee applies only to first-time subscribers",
            "Refund requests must be made within 30 days of initial purchase",
            "Guarantee covers software functionality only, not trading results or performance",
            "We cannot refund for trading losses, missed opportunities, or any market-related outcomes",
            "Refunds are processed within 10 business days of approval",
          ],
        },
      ],
    },
    {
      heading: "5. Acceptable Use Policy",
      intro: "You agree not to:",
      items: [
        "Use the Platform for any illegal purpose or in violation of any laws",
        "Attempt to gain unauthorized access to our systems or other user accounts",
        "Reverse engineer, decompile, or disassemble any part of the Platform",
        "Use automated scripts, bots, or scrapers without written permission",
        "Share your account credentials with others",
        "Resell, redistribute, or commercialize our services without authorization",
        "Upload malicious code, viruses, or harmful content",
        "Harass, abuse, or harm other users",
        "Manipulate or falsify backtesting results shared with the community",
        "Present our educational tools as regulated investment advice",
      ],
    },
    {
      heading: "6. Trading Risks and Disclaimers",
      content: `⚠️ CRITICAL: You acknowledge and agree that you have read and understood our comprehensive Risk Disclaimer. Key points include:`,
      items: [
        "Trading involves substantial risk of loss and is not suitable for all investors",
        "You could lose all of your invested capital",
        "Past performance does not predict future results",
        "Backtesting results are hypothetical and do not represent actual trading",
        "Our AI analysis is educational information, NOT trade recommendations",
        "You are solely responsible for all trading decisions and their outcomes",
        "We do not guarantee profits, trading success, or any specific outcomes",
      ],
      footer:
        "For complete risk disclosures, see our Risk Disclaimer at /risk-disclaimer, which is incorporated into these Terms by reference.",
    },
    {
      heading: "7. Intellectual Property Rights",
      subsections: [
        {
          subheading: "7.1 Our Intellectual Property",
          items: [
            "All content, features, and functionality of the Platform are owned by Good Market Trader LTD",
            "Our trademarks, logos, and brand features are protected intellectual property",
            "You may not copy, modify, distribute, or create derivative works without written permission",
            "Your license to use the Platform terminates upon cancellation or termination of your account",
          ],
        },
        {
          subheading: "7.2 User-Generated Content",
          content: "When you share strategies or content on our Platform:",
          items: [
            "You retain ownership of your original content",
            "You grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your shared content",
            "You represent that you have the right to share the content",
            "You are responsible for ensuring your content does not violate third-party rights",
            "We may remove any content that violates these Terms or applicable law",
          ],
        },
      ],
    },
    {
      heading: "8. Third-Party Services and Integrations",
      items: [
        "MT4/MT5 integration connects to third-party trading platforms not controlled by us",
        "We are not responsible for the functionality, availability, or security of third-party services",
        "Your use of third-party services is subject to their own terms and policies",
        "We do not endorse or guarantee any third-party trading platforms or brokers",
        "Any trading you conduct through third-party platforms is at your own risk",
      ],
    },
    {
      heading: "9. Data and Privacy",
      content: `Your privacy is important to us. Our data practices are governed by our Privacy Policy (available at /privacy). Key points:`,
      items: [
        "We collect and process personal data as described in our Privacy Policy",
        "You consent to our collection and use of data in accordance with our Privacy Policy",
        "We implement security measures to protect your data, but cannot guarantee absolute security",
        "You are responsible for maintaining the confidentiality of your trading strategies and account information",
      ],
    },
    {
      heading: "10. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:`,
      items: [
        "The Platform is provided 'AS IS' and 'AS AVAILABLE' without warranties of any kind",
        "We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose",
        "We are not liable for any trading losses, missed opportunities, or market-related damages",
        "We are not liable for software errors, bugs, downtime, or technical failures",
        "We are not liable for inaccurate data, analysis, or backtesting results",
        "We are not liable for unauthorized access to your account or data breaches",
        "Our total liability to you shall not exceed the amount you paid us in the 12 months preceding the claim",
        "We are not liable for indirect, incidental, consequential, or punitive damages",
      ],
    },
    {
      heading: "11. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless Good Market Trader LTD, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:`,
      items: [
        "Your use or misuse of the Platform",
        "Your trading decisions and their outcomes",
        "Your violation of these Terms of Service",
        "Your violation of any laws or regulations",
        "Your violation of third-party rights",
        "Content you share on the Platform",
      ],
    },
    {
      heading: "12. Modifications to Service and Terms",
      items: [
        "We reserve the right to modify, suspend, or discontinue any part of the Platform at any time",
        "We may update these Terms of Service periodically",
        "Material changes will be communicated via email or Platform notification",
        "Continued use of the Platform after changes constitutes acceptance of modified Terms",
        "If you do not agree to modified Terms, you must discontinue use of the Platform",
      ],
    },
    {
      heading: "13. Regulatory Compliance",
      content: `IMPORTANT REGULATORY INFORMATION:`,
      items: [
        "Good Market Trader LTD is NOT authorised by the Financial Conduct Authority (FCA)",
        "We do not provide regulated investment advice or services",
        "Our educational tools do not constitute financial advice under UK or EU law",
        "You are responsible for compliance with financial regulations in your jurisdiction",
        "If you are located in a jurisdiction where our services are restricted, you may not use the Platform",
        "We comply with UK data protection laws (GDPR) as outlined in our Privacy Policy",
      ],
    },
    {
      heading: "14. Dispute Resolution and Governing Law",
      subsections: [
        {
          subheading: "14.1 Governing Law",
          content:
            "These Terms are governed by the laws of England and Wales, without regard to conflict of law principles.",
        },
        {
          subheading: "14.2 Dispute Resolution",
          items: [
            "Any disputes shall first be attempted to be resolved through good-faith negotiation",
            "If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales",
            "You waive any right to participate in class action lawsuits or class-wide arbitration",
          ],
        },
      ],
    },
    {
      heading: "15. Severability and Waiver",
      items: [
        "If any provision of these Terms is found to be unenforceable, the remaining provisions remain in full effect",
        "Our failure to enforce any right or provision does not constitute a waiver of that right or provision",
        "These Terms constitute the entire agreement between you and Good Market Trader LTD regarding the Platform",
      ],
    },
    {
      heading: "16. Contact Information",
      content: `For questions about these Terms of Service, contact us at:`,
      items: [
        "Email: legal@systemly.ai",
        "Address: Good Market Trader LTD, 128 City Road, London, EC1V 2NX, United Kingdom",
        "Support: info@systemly.ai",
      ],
    },
  ],

  footer: `By using Systemly.ai, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Risk Disclaimer. You confirm that you understand the risks of trading and that you are solely responsible for all trading decisions.

Last Updated: October 8, 2025
Good Market Trader LTD - Company Registration Number: [Your Company Number]`,
};

// PRIVACY POLICY PAGE CONTENT
const PRIVACY_POLICY_PAGE: PrivacyPolicyPageType = {
  title: "Privacy Policy",
  lastUpdated: "October 8, 2025",
  effectiveDate: "October 8, 2025",
  introduction: `Good Market Trader LTD ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Systemly.ai (the "Platform"). Please read this policy carefully to understand our practices regarding your data.`,

  sections: [
    {
      heading: "1. Information We Collect",
      intro:
        "We collect several types of information to provide and improve our Platform:",
      subsections: [
        {
          subheading: "1.1 Personal Information You Provide",
          content: "Information you directly provide when using our Platform:",
          items: [
            "Account Details: Name, email address, username, password",
            "Profile Information: Trading experience level, account size preferences, trading goals, risk tolerance",
            "Payment Information: Billing address (payment card details processed securely by third-party processors)",
            "Communications: Support inquiries, feedback, survey responses, email correspondence",
            "Onboarding Quiz Data: Responses to questions about trading experience, goals, and preferences",
          ],
        },
        {
          subheading: "1.2 Trading Strategy Data",
          items: [
            "Custom strategy configurations and parameters",
            "Backtesting settings and historical analysis requests",
            "Risk management preferences and position sizing parameters",
            "Preferred trading styles, timeframes, and instruments",
            "Alert preferences and notification settings",
            "Community-shared strategies (if you choose to share)",
          ],
        },
        {
          subheading: "1.3 Automatically Collected Information",
          items: [
            "Usage Data: Features accessed, time spent on Platform, interaction patterns, click behavior",
            "Device Information: IP address, browser type, operating system, device identifiers, screen resolution",
            "Cookies & Tracking: Session data, preferences, analytics data (see Cookie Policy)",
            "Performance Data: Platform performance metrics, error logs, crash reports",
            "Location Data: Approximate geographic location based on IP address",
          ],
        },
        {
          subheading: "1.4 Third-Party Integration Data",
          items: [
            "MT4/MT5 connection status and authorization tokens (encrypted)",
            "Integration logs and error reports",
            "We do NOT access your trading account credentials, balances, or transaction history",
          ],
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      intro: "We use collected information for the following purposes:",
      subsections: [
        {
          subheading: "2.1 Service Delivery",
          items: [
            "Provide and maintain Platform functionality",
            "Generate AI-powered trade analysis and alerts based on your configured strategies",
            "Process subscriptions and payments",
            "Deliver customer support and respond to inquiries",
            "Send transactional emails about your account and service",
          ],
        },
        {
          subheading: "2.2 Service Improvement",
          items: [
            "Analyze usage patterns to enhance features and user experience",
            "Develop and test new AI models and algorithms",
            "Conduct research and statistical analysis",
            "Optimize Platform performance and reliability",
            "Personalize your experience based on preferences",
          ],
        },
        {
          subheading: "2.3 Communications",
          items: [
            "Send transactional emails (account updates, password resets, billing notifications)",
            "Provide customer support responses",
            "Deliver marketing communications (with your consent)",
            "Share educational content and trading insights",
            "Send product updates and feature announcements",
          ],
        },
        {
          subheading: "2.4 Legal & Safety",
          items: [
            "Comply with legal obligations and regulations",
            "Enforce our Terms of Service",
            "Protect against fraud, abuse, and security threats",
            "Respond to legal requests and court orders",
            "Protect our rights, property, and safety",
          ],
        },
      ],
    },
    {
      heading: "3. Legal Basis for Processing (UK GDPR)",
      content: "We process your personal data under the following legal bases:",
      items: [
        "Contract Performance: To provide services you've subscribed to",
        "Consent: For marketing communications and optional features (you can withdraw consent anytime)",
        "Legitimate Interests: For service improvement, fraud prevention, security, and analytics",
        "Legal Obligations: To comply with UK/EU laws and regulations",
      ],
    },
    {
      heading: "4. Data Sharing and Disclosure",
      intro: "We do NOT sell your personal information to third parties.",
      content: "We may share your data with:",
      subsections: [
        {
          subheading: "4.1 Service Providers",
          content:
            "Trusted third-party companies that help us operate the Platform:",
          items: [
            "Payment Processors: Stripe (for subscription billing)",
            "Cloud Hosting: AWS, Vercel, or similar providers (for data storage and platform hosting)",
            "Email Services: SendGrid, Mailgun, or similar (for transactional and marketing emails)",
            "Analytics: Google Analytics, Mixpanel (anonymized usage data)",
            "Customer Support: Intercom, Zendesk, or similar (for support tickets)",
          ],
          footer:
            "All service providers are contractually obligated to protect your data and use it only for specified purposes.",
        },
        {
          subheading: "4.2 Legal Requirements",
          content: "We may disclose data when required by law:",
          items: [
            "To comply with court orders, subpoenas, or legal processes",
            "To respond to lawful requests from law enforcement or regulatory authorities",
            "To protect our rights, property, or safety",
            "To prevent fraud or security threats",
            "In connection with business transactions (merger, acquisition, sale)",
          ],
        },
        {
          subheading: "4.3 Anonymized Data",
          content:
            "We may share aggregated, anonymized data that cannot identify you:",
          items: [
            "Platform usage statistics and performance metrics",
            "Industry research and market analysis",
            "Community insights and trends",
            "Product development research",
          ],
        },
        {
          subheading: "4.4 Community Sharing",
          content: "If you choose to share strategies with the community:",
          items: [
            "Your username and shared strategy details become visible to other users",
            "You control what you share—personal details are not automatically shared",
            "You can delete shared content at any time",
          ],
        },
      ],
    },
    {
      heading: "5. Data Security",
      content:
        "We implement industry-standard security measures to protect your data:",
      items: [
        "Encryption in Transit: TLS/SSL encryption for all data transmission",
        "Encryption at Rest: Database encryption for stored data",
        "Secure Infrastructure: Cloud hosting with access controls and monitoring",
        "Regular Security Audits: Periodic vulnerability assessments and penetration testing",
        "Employee Training: Staff educated on data protection best practices",
        "Two-Factor Authentication: Available for enhanced account security",
        "Password Security: Passwords hashed using bcrypt or similar algorithms",
      ],
      footer:
        "However, no method of transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. You are responsible for maintaining the security of your account credentials.",
    },
    {
      heading: "6. Data Retention",
      content: "We retain your personal data for as long as necessary:",
      items: [
        "Active Accounts: Data retained while your account remains active",
        "Inactive Accounts: Data may be deleted after 24 months of inactivity (with advance notice)",
        "Deleted Accounts: Most data deleted within 30 days of account deletion",
        "Legal Obligations: Some data retained longer for compliance (e.g., payment records for 7 years)",
        "Anonymized Data: May be retained indefinitely for research and analytics",
      ],
    },
    {
      heading: "7. Your Privacy Rights (UK GDPR)",
      intro:
        "Under UK GDPR, you have the following rights regarding your personal data:",
      subsections: [
        {
          subheading: "7.1 Right to Access",
          items: [
            "Request a copy of all personal data we hold about you",
            "Receive information about how we process your data",
            "We respond within 30 days (may extend to 60 days for complex requests)",
          ],
        },
        {
          subheading: "7.2 Right to Rectification",
          items: [
            "Correct inaccurate or incomplete personal data",
            "Update your profile information at any time through account settings",
          ],
        },
        {
          subheading: "7.3 Right to Erasure ('Right to be Forgotten')",
          items: [
            "Request deletion of your personal data",
            "Subject to legal retention requirements (e.g., payment records)",
            "Some anonymized data may remain for statistical purposes",
          ],
        },
        {
          subheading: "7.4 Right to Restrict Processing",
          items: [
            "Limit how we process your data in certain circumstances",
            "Data remains stored but not actively processed",
          ],
        },
        {
          subheading: "7.5 Right to Data Portability",
          items: [
            "Receive your data in a structured, machine-readable format (JSON/CSV)",
            "Transfer your data to another service provider",
          ],
        },
        {
          subheading: "7.6 Right to Object",
          items: [
            "Object to processing based on legitimate interests",
            "Opt-out of direct marketing at any time",
            "Object to automated decision-making (if applicable)",
          ],
        },
        {
          subheading: "7.7 Right to Withdraw Consent",
          items: [
            "Withdraw consent for marketing communications anytime",
            "Unsubscribe from emails via link in footer",
            "Adjust cookie preferences through our cookie banner",
          ],
        },
      ],
      footer: `To exercise your rights, email us at info@systemly.ai with "Data Subject Request" in the subject line. We'll verify your identity and respond within 30 days. No fee unless requests are manifestly unfounded or excessive.`,
    },
    {
      heading: "8. International Data Transfers",
      content:
        "Our primary servers are located in the United Kingdom/European Economic Area.",
      items: [
        "Data may be transferred to/from other countries for service provision",
        "We ensure adequate protection through UK GDPR and EU GDPR compliance",
        "Standard Contractual Clauses (SCCs) approved by UK ICO for international transfers",
        "International Data Transfer Agreements with all processors outside UK/EEA",
        "Encryption and security measures for all data in transit and at rest",
      ],
      footer:
        "Post-Brexit, we comply with both UK GDPR and EU GDPR requirements. We rely on adequacy decisions where applicable or implement appropriate safeguards.",
    },
    {
      heading: "9. Cookies and Tracking Technologies",
      content:
        "We use cookies and similar technologies. See our Cookie Policy (/cookies) for details.",
      subsections: [
        {
          subheading: "9.1 Types of Cookies",
          items: [
            "Necessary Cookies: Essential for Platform functionality (cannot be disabled)",
            "Analytics Cookies: Help us understand usage patterns (Google Analytics) - requires consent",
            "Marketing Cookies: Track ad performance and deliver relevant ads - requires consent",
          ],
        },
        {
          subheading: "9.2 Managing Cookies",
          items: [
            "Use our cookie banner to manage preferences",
            "Adjust settings in your browser",
            "Opt-out of analytics: https://tools.google.com/dlpage/gaoptout",
          ],
        },
      ],
    },
    {
      heading: "10. Children's Privacy",
      items: [
        "Our Platform is NOT intended for users under 18 years old",
        "We do not knowingly collect data from minors",
        "If we discover data from a minor, we delete it promptly",
        "Parents/guardians concerned about their child's data should contact us immediately",
      ],
    },
    {
      heading: "11. Marketing Communications",
      subsections: [
        {
          subheading: "11.1 Types of Communications",
          content: "Transactional Emails (cannot opt-out):",
          items: [
            "Account confirmations and password resets",
            "Payment receipts and billing notices",
            "Security alerts and account notifications",
            "Service announcements and Terms updates",
          ],
        },
        {
          subheading: "",
          content: "Marketing Emails (can opt-out):",
          items: [
            "Newsletter and trading education content",
            "Product updates and new features",
            "Educational articles and strategy insights",
            "Special offers and promotions",
          ],
        },
        {
          subheading: "11.2 Opting Out",
          items: [
            "Click 'Unsubscribe' link in any marketing email",
            "Adjust email preferences in account settings",
            "Email info@systemly.ai with opt-out request",
          ],
          footer:
            "Note: Opting out of marketing emails does not stop transactional emails.",
        },
      ],
    },
    {
      heading: "12. Data Breach Notification",
      content:
        "In the unlikely event of a data breach affecting your personal data:",
      items: [
        "We will notify affected users within 72 hours of discovery",
        "Notification will include details of compromised data",
        "We will outline steps being taken to address the breach",
        "We will recommend protective actions you should take",
        "We will notify the ICO (Information Commissioner's Office) as required by law",
      ],
    },
    {
      heading: "13. Third-Party Websites and Services",
      items: [
        "Our Platform may link to third-party websites (MT4/MT5, social media, etc.)",
        "We are not responsible for the privacy practices of third parties",
        "Third-party services have their own privacy policies",
        "Review their policies before providing personal information",
        "We do not control third-party data collection or use",
      ],
    },
    {
      heading: "14. California Privacy Rights (CCPA)",
      intro:
        "If you are a California resident, you may have additional rights under CCPA:",
      items: [
        "Right to Know: What personal information we collect and how we use it",
        "Right to Delete: Request deletion of your personal information",
        "Right to Opt-Out: We do NOT sell personal information",
        "Right to Non-Discrimination: We will not discriminate for exercising your rights",
      ],
      footer: `Note: As a UK-based company, we primarily operate under UK GDPR which provides equivalent or greater protections. To exercise CCPA rights, email info@systemly.ai with "California Privacy Request."`,
    },
    {
      heading: "15. Changes to This Privacy Policy",
      items: [
        "We may update this Privacy Policy periodically to reflect changes in our practices",
        "Material changes will be communicated via email or Platform notification",
        "Updated policy will show new 'Last Updated' date",
        "Continued use after changes constitutes acceptance of updated policy",
        "We encourage you to review this policy regularly",
      ],
    },
    {
      heading: "16. Your Choices and Controls",
      content: "You have control over your data and privacy:",
      items: [
        "Account Settings: Update profile information and preferences",
        "Email Preferences: Manage subscription to marketing emails",
        "Cookie Settings: Control cookie preferences via banner",
        "Data Export: Request copy of your data in portable format",
        "Account Deletion: Delete your account through settings or by request",
        "Third-Party Integrations: Disconnect MT4/MT5 integration anytime",
      ],
    },
    {
      heading: "17. Contact Us & Supervisory Authority",
      subsections: [
        {
          subheading: "17.1 Contact Information",
          content: "For privacy questions, data subject requests, or concerns:",
          items: [
            "Email: info@systemly.ai",
            "Subject Line: 'Privacy Inquiry' or 'Data Subject Request'",
            "Post: Data Protection, Good Market Trader LTD, 128 City Road, London, EC1V 2NX, United Kingdom",
            "ICO Registration: [Your ICO Registration Number]",
          ],
          footer:
            "We aim to respond to general inquiries within 5 business days and formal data subject requests within 30 days.",
        },
        {
          subheading: "17.2 Supervisory Authority",
          content:
            "You have the right to lodge a complaint with the Information Commissioner's Office (ICO):",
          items: [
            "Website: ico.org.uk",
            "Helpline: 0303 123 1113",
            "Live Chat: Available on ICO website",
            "Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF",
          ],
          footer:
            "We encourage you to contact us first so we can address your concerns directly.",
        },
      ],
    },
  ],

  footer: `This Privacy Policy is effective as of October 8, 2025 and applies to all users of Systemly.ai.

By using our Platform, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal data as described herein.

Good Market Trader LTD
Company Registration Number: [Your Company Number]
ICO Registration Number: [Your ICO Number]
128 City Road, London, EC1V 2NX, United Kingdom

Last Updated: October 8, 2025`,
};

// FOOTER DISCLAIMER
const FOOTER_DISCLAIMER = `⚠️ IMPORTANT: Systemly.ai is an educational trading software platform. We are NOT authorised by the Financial Conduct Authority (FCA) and do NOT provide regulated investment advice or services. All content, tools, and features on Systemly.ai are for educational purposes only. We do NOT offer financial advice, investment recommendations, portfolio management, or any regulated financial services. Trading involves significant risk of loss and is not suitable for all investors. You could lose all your invested capital. By using Systemly.ai, you acknowledge that you understand the risks of trading and that you are solely responsible for all trading decisions. We do NOT guarantee profits or trading success. Past performance does not predict future results. For complete risk disclosures, please read our Risk Disclaimer at /risk-disclaimer and our Terms of Service at /legal/terms. If you do not agree to these terms, do not use our platform. If you have any questions, contact us at info@systemly.ai`;

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
  LEGAL_PAGES,
  SITE_DISCLAIMER,
  RISK_DISCLAIMER_PAGE,
  TERMS_OF_SERVICE_PAGE,
  PRIVACY_POLICY_PAGE,
  FOOTER_DISCLAIMER,
};
