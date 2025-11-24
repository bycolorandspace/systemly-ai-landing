import { OnboardingFlow } from "@/types/onboarding-types";

const onboardingFlow: OnboardingFlow = {
  metadata: {
    title: "Welcome trader, let's build Your Perfect Trading Setup",
    subtitle:
      "2 minutes to customize your AI trading experience (and maybe roast your current strategy)",
    estimatedTime: "2-3 minutes",
    totalSteps: 12,
    purpose: "market_research_onboarding",
    image: {
      url: "/images/onboarding/trading-book-cover-mockup.jpg",
      alt: "Friendly AI robot and human trader shaking hands",
      size: "large",
    },
  },

  steps: [
    {
      id: 1,
      type: "content",
      input: null,
      category: "introduction",
      title: "Hey Trader, 2 minutes to customise your AI trading experience",
      subtitle:
        "Answer the some following questions and download your free trading psychology guide for your trading style and preferences.",
      description:
        "Worth $97, yours is free when you complete the onboarding! Includes discount code for early access.",
      image: {
        url: "",
        alt: "Enthusiastic trader with laptop and coffee",
        size: "medium",
      },
      content: {
        headline: "",
        body: null,
        cta: {
          text: "Let's build something amazing together",
          action: "next_step",
        },
      },
      dataCollection: null,
      metadata: {
        marketInsight: null,
        required: false,
      },
    },

    {
      id: 2,
      type: "question",
      input: "radio",
      category: "experience_level",
      title: "First things first - where are you in your trading journey?",
      subtitle: null,
      description: "What's your trading experience level?",
      image: {
        url: "",
        alt: "Trading journey path from beginner to expert",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "experience_level",
        fieldType: "single_select",
        validation: "required",
      },
      metadata: {
        marketInsight: "User experience distribution and education needs",
        required: true,
      },
      options: [
        {
          id: "complete_beginner",
          text: "Complete beginner - still googling what 'bull market' means",
          emoji: "👶",
          value: "complete_beginner",
          followUp:
            "Perfect! We love fresh minds (they haven't been ruined yet)",
          image: {
            url: "/images/beginner-trader-confused-books.jpg",
            alt: "New trader surrounded by trading books looking confused",
            size: "small",
          },
          metadata: {
            nextStepLogic: "beginner_path",
            tags: ["education_needed", "low_complexity"],
          },
        },
        {
          id: "some_experience",
          text: "Some experience - lost some money, learned some lessons",
          emoji: "📚",
          value: "some_experience",
          followUp:
            "Ah, the 'expensive education' phase - we've all been there!",
          image: {
            url: "/images/intermediate-trader-battle-scars.jpg",
            alt: "Trader with slight stress lines but determined expression",
            size: "small",
          },
          metadata: {
            nextStepLogic: "intermediate_path",
            tags: ["psychology_focus", "medium_complexity"],
          },
        },
        {
          id: "experienced",
          text: "Experienced - but still looking for an edge",
          emoji: "⚔️",
          value: "experienced",
          followUp: "Smart move - even pros need better tools!",
          image: {
            url: "/images/experienced-trader-seeking-edge.jpg",
            alt: "Professional trader analyzing multiple charts",
            size: "small",
          },
          metadata: {
            nextStepLogic: "advanced_path",
            tags: ["optimization_focus", "high_complexity"],
          },
        },
        {
          id: "professional",
          text: "Professional/Institutional - I manage money for others",
          emoji: "🏆",
          value: "professional",
          followUp: "Welcome to the big leagues - let's talk scalability!",
          image: {
            url: "/images/professional-trader-office.jpg",
            alt: "Professional trader in corporate trading floor environment",
            size: "small",
          },
          metadata: {
            nextStepLogic: "professional_path",
            tags: ["enterprise_features", "scalability"],
          },
        },
      ],
    },

    {
      id: 3,
      type: "question",
      input: "radio",
      category: "account_size",
      title: "Let's talk numbers (don't worry, we're not judging)",
      subtitle: null,
      description: "What's your current trading account size?",
      image: {
        url: "",
        alt: "Progressive stack from coins to gold bars representing account growth",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "account_size",
        fieldType: "single_select",
        validation: "required",
      },
      metadata: {
        marketInsight: "Customer segment sizing and pricing strategy",
        required: true,
      },
      options: [
        {
          id: "under_1k",
          text: "Under $1,000 - Starting small but dreaming big",
          emoji: "💰",
          value: "under_1k",
          followUp: "Every empire starts with a single coin! 🏰",
          image: {
            url: "/images/small-account-big-dreams.jpg",
            alt: "Small piggy bank with rocket ship dreams",
            size: "small",
          },
          metadata: {
            pricingTier: "starter",
            tags: ["price_sensitive", "basic_features"],
          },
        },
        {
          id: "1k_10k",
          text: "$1,000 - $10,000 - Getting serious about this",
          emoji: "💵",
          value: "1k_10k",
          followUp: "Sweet spot for learning without breaking the bank!",
          image: {
            url: "/images/medium-account-focused.jpg",
            alt: "Stack of bills with focused trader expression",
            size: "small",
          },
          metadata: {
            pricingTier: "growth",
            tags: ["standard_features", "growth_focused"],
          },
        },
        {
          id: "10k_100k",
          text: "$10,000 - $100,000 - Real money, real pressure",
          emoji: "💎",
          value: "10k_100k",
          followUp: "Now we're talking - time to protect and grow that wealth!",
          image: {
            url: "/images/large-account-pressure.jpg",
            alt: "Trader with serious expression managing significant funds",
            size: "small",
          },
          metadata: {
            pricingTier: "professional",
            tags: ["advanced_features", "risk_management"],
          },
        },
        {
          id: "over_100k",
          text: "$100,000+ - High stakes, need high-quality tools",
          emoji: "🏦",
          value: "over_100k",
          followUp: "Premium player detected - let's talk premium features!",
          image: {
            url: "/images/premium-account-luxury.jpg",
            alt: "High-end trading setup with multiple premium monitors",
            size: "small",
          },
          metadata: {
            pricingTier: "enterprise",
            tags: ["premium_features", "white_glove_service"],
          },
        },
      ],
    },

    {
      id: 4,
      type: "content",
      input: null,
      category: "value_demonstration",
      title: "💡 Quick reality check...",
      subtitle: "Account Size vs. Success Rate",
      description: "Size doesn't matter - strategy does. Let's find yours...",
      image: {
        url: "/images/pikachu.jpeg",
        alt: "Chart showing success rate independent of account size",
        size: "large",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: null,
      metadata: {
        marketInsight: null,
        required: false,
      },
      options: [
        {
          id: "insight_1",
          text: "Traders with $1K accounts can be more profitable than those with $100K",
          emoji: "🎯",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_2",
          text: "Success comes from psychology and system, not account size",
          emoji: "🧠",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_3",
          text: "Our AI adapts to YOUR account size and risk tolerance",
          emoji: "🤖",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_4",
          text: "We've helped $500 accounts grow 300% and $50K accounts stay consistent",
          emoji: "📈",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
      ],
    },

    {
      id: 5,
      type: "question",
      input: "radio",
      category: "trading_style",
      title:
        "How do you like to trade? (Or how do you THINK you like to trade?)",
      subtitle: null,
      description: "What's your preferred trading style?",
      image: {
        url: "/images/trading-styles-time-spectrum.jpg",
        alt: "Timeline showing different trading styles from scalping to investing",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "trading_style",
        fieldType: "single_select",
        validation: "required",
      },
      metadata: {
        marketInsight:
          "Feature usage patterns and product development priorities",
        required: true,
      },
      options: [
        {
          id: "scalping",
          text: "Scalping - In and out faster than a pizza delivery",
          emoji: "⚡",
          value: "scalping",
          followUp: "Speed demon! Hope your internet connection can keep up 🏎️",
          image: {
            url: "/images/scalping-fast-trades.jpg",
            alt: "Lightning bolts over rapid price movements",
            size: "small",
          },
          metadata: {
            featureNeeds: [
              "real_time_alerts",
              "latency_optimization",
              "quick_analysis",
            ],
            tags: ["high_frequency", "technical_focus"],
          },
        },
        {
          id: "day_trading",
          text: "Day Trading - Full-time job without the steady paycheck",
          emoji: "📅",
          value: "day_trading",
          followUp:
            "The entrepreneur's trading style - high effort, high potential!",
          image: {
            url: "/images/day-trading-full-time.jpg",
            alt: "Trader at desk during market hours with multiple screens",
            size: "small",
          },
          metadata: {
            featureNeeds: [
              "session_planning",
              "momentum_alerts",
              "exit_optimization",
            ],
            tags: ["active_management", "intraday_focus"],
          },
        },
        {
          id: "swing_trading",
          text: "Swing Trading - Patient hunter waiting for the perfect shot",
          emoji: "🎯",
          value: "swing_trading",
          followUp: "Balance master - life AND profits! 🧘‍♂️",
          image: {
            url: "/images/swing-trading-patient.jpg",
            alt: "Calm trader analyzing longer-term charts",
            size: "small",
          },
          metadata: {
            featureNeeds: [
              "weekly_analysis",
              "position_monitoring",
              "trend_alerts",
            ],
            tags: ["medium_term", "work_life_balance"],
          },
        },
        {
          id: "position_trading",
          text: "Position Trading - Buy and hibernate like a financial bear",
          emoji: "🏔️",
          value: "position_trading",
          followUp: "Warren Buffett would be proud! 📈",
          image: {
            url: "/images/position-trading-long-term.jpg",
            alt: "Peaceful trader with long-term growth charts",
            size: "small",
          },
          metadata: {
            featureNeeds: [
              "monthly_reports",
              "fundamental_analysis",
              "portfolio_tracking",
            ],
            tags: ["long_term", "set_and_forget"],
          },
        },
        {
          id: "not_sure",
          text: "Not sure yet - still figuring out what works",
          emoji: "🤷‍♂️",
          value: "not_sure",
          followUp:
            "Honest answer! That's exactly what we're here to help with!",
          image: {
            url: "/images/trader-exploring-options.jpg",
            alt: "Thoughtful trader considering different paths",
            size: "small",
          },
          metadata: {
            featureNeeds: [
              "style_discovery",
              "backtesting",
              "education_modules",
            ],
            tags: ["exploration_phase", "education_needed"],
          },
        },
      ],
    },

    {
      id: 6,
      type: "question",
      input: "radio",
      category: "copy_trading_experience",
      title: "Here's the real question - how do you get your trade ideas?",
      subtitle: null,
      description: "Be honest, we've all been there",
      image: {
        url: "/images/trade-ideas-sources.jpg",
        alt: "Various sources of trading ideas and signals",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "copy_trading_experience",
        fieldType: "single_select",
        validation: "required",
      },
      metadata: {
        marketInsight:
          "Copy trading segment size and pain points for competitive positioning",
        required: true,
      },
      options: [
        {
          id: "active_copy_trader",
          text: "I copy other traders - following signals from pros or platforms",
          emoji: "👥",
          value: "active_copy_trader",
          followUp:
            "Interesting! How's that working out for you? (Spoiler: we know it's complicated)",
          image: {
            url: "/images/copy-trading-active.jpg",
            alt: "Person following trading signals on multiple screens",
            size: "small",
          },
          metadata: {
            segment: "copy_trader",
            painPoints: ["blind_following", "delayed_signals", "no_context"],
            tags: [
              "copy_trading_user",
              "signal_follower",
              "high_conversion_potential",
            ],
          },
        },
        {
          id: "tried_copy_trading",
          text: "Tried copy trading before - mixed results, looking for something better",
          emoji: "🤔",
          value: "tried_copy_trading",
          followUp:
            "The 'been burned' club - welcome! You're exactly who we built this for",
          image: {
            url: "/images/frustrated-copy-trader.jpg",
            alt: "Trader disappointed with copy trading results",
            size: "small",
          },
          metadata: {
            segment: "burned_copy_trader",
            painPoints: [
              "losses_from_copying",
              "lack_of_understanding",
              "no_risk_control",
            ],
            tags: [
              "ready_for_alternative",
              "educated_by_experience",
              "high_intent",
            ],
          },
        },
        {
          id: "manual_analysis",
          text: "Do my own analysis - charts, news, fundamentals, the whole thing",
          emoji: "📊",
          value: "manual_analysis",
          followUp:
            "The DIY approach - respect! But wouldn't a second opinion help?",
          image: {
            url: "/images/independent-trader-analysis.jpg",
            alt: "Trader doing comprehensive manual analysis",
            size: "small",
          },
          metadata: {
            segment: "independent_trader",
            painPoints: [
              "time_consuming",
              "second_guessing",
              "information_overload",
            ],
            tags: ["self_sufficient", "analytical", "values_confirmation"],
          },
        },
        {
          id: "mix_of_both",
          text: "Mix of both - I follow some signals but verify with my own analysis",
          emoji: "⚖️",
          value: "mix_of_both",
          followUp:
            "Smart! Trust but verify. AI can supercharge this exact approach",
          image: {
            url: "/images/hybrid-trader-approach.jpg",
            alt: "Trader balancing signals with personal analysis",
            size: "small",
          },
          metadata: {
            segment: "hybrid_trader",
            painPoints: [
              "time_intensive",
              "conflicting_signals",
              "decision_fatigue",
            ],
            tags: ["balanced_approach", "experienced", "optimization_focused"],
          },
        },
        {
          id: "signal_services",
          text: "Pay for premium signals/alerts from signal providers or Discord groups",
          emoji: "💳",
          value: "signal_services",
          followUp:
            "Paying for signals that might be too late? We feel that pain",
          image: {
            url: "/images/premium-signals-subscription.jpg",
            alt: "Premium trading signal service dashboard",
            size: "small",
          },
          metadata: {
            segment: "signal_subscriber",
            painPoints: [
              "expensive",
              "delayed_execution",
              "no_personalization",
            ],
            tags: ["paying_customer", "signal_dependent", "ready_to_switch"],
          },
        },
        {
          id: "winging_it",
          text: "Honestly? Just winging it and hoping for the best",
          emoji: "🎲",
          value: "winging_it",
          followUp:
            "Raw honesty! At least you know you need a system - that's step one",
          image: {
            url: "/images/random-trading-approach.jpg",
            alt: "Trader making random decisions without system",
            size: "small",
          },
          metadata: {
            segment: "unstructured_trader",
            painPoints: [
              "no_system",
              "inconsistent_results",
              "gambling_mentality",
            ],
            tags: [
              "needs_structure",
              "high_education_need",
              "beginner_mindset",
            ],
          },
        },
      ],
    },

    {
      id: 7,
      type: "content",
      input: null,
      category: "copy_trading_reality",
      title: "💡 The truth about copy trading (that nobody talks about)",
      subtitle: "Why Following Others' Trades Usually Fails",
      description: "Here's what the copy trading platforms won't tell you...",
      image: {
        url: "/images/copy-trading-reality-check.jpg",
        alt: "The hidden problems with copy trading revealed",
        size: "large",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: null,
      metadata: {
        marketInsight: null,
        required: false,
      },
      options: [
        {
          id: "insight_1",
          text: "78% of copy traders lose money because they don't understand the trades they're copying",
          emoji: "📉",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_2",
          text: "Signal delay costs you 15-30% of potential profit - you're always trading yesterday's idea",
          emoji: "⏰",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_3",
          text: "Our AI generates fresh trade ideas tailored to YOUR risk tolerance and account size",
          emoji: "🤖",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_4",
          text: "You get the 'why' behind every trade - learn while you earn, not just blind following",
          emoji: "🎓",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
      ],
    },

    {
      id: 8,
      type: "question",
      input: "radio",
      category: "trading_goals",
      title: "What's your trading endgame? (Be honest, we've heard it all)",
      subtitle: null,
      description: "What are you ultimately trying to achieve with trading?",
      image: {
        url: "/images/trading-goals-vision-board.jpg",
        alt: "Vision board with various trading success scenarios",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "trading_goals",
        fieldType: "single_select",
        validation: "required",
      },
      metadata: {
        marketInsight:
          "User motivation and success metrics for product positioning",
        required: true,
      },
      options: [
        {
          id: "supplement_income",
          text: "Supplement my income - a few hundred extra per month would be nice",
          emoji: "💰",
          value: "supplement_income",
          followUp: "Practical goals - we love a realistic approach! 💪",
          image: {
            url: "/images/supplement-income-modest.jpg",
            alt: "Person happily checking modest trading gains on phone",
            size: "small",
          },
          metadata: {
            riskProfile: "conservative",
            tags: ["realistic_expectations", "steady_growth"],
          },
        },
        {
          id: "replace_salary",
          text: "Replace my day job - trade full-time and be my own boss",
          emoji: "🏢",
          value: "replace_salary",
          followUp:
            "The dream of freedom! Let's make sure you get there safely 🚀",
          image: {
            url: "/images/quit-job-freedom.jpg",
            alt: "Person confidently walking away from office building",
            size: "small",
          },
          metadata: {
            riskProfile: "moderate_aggressive",
            tags: ["lifestyle_change", "independence_seeking"],
          },
        },
        {
          id: "wealth_building",
          text: "Build serious wealth - grow my net worth significantly over time",
          emoji: "🏦",
          value: "wealth_building",
          followUp:
            "Long-term wealth builder - patience and strategy will be key! 📈",
          image: {
            url: "/images/wealth-building-growth.jpg",
            alt: "Portfolio growth chart showing steady long-term gains",
            size: "small",
          },
          metadata: {
            riskProfile: "balanced",
            tags: ["long_term_vision", "compound_growth"],
          },
        },
        {
          id: "financial_freedom",
          text: "Achieve financial freedom - never worry about money again",
          emoji: "🏝️",
          value: "financial_freedom",
          followUp:
            "The ultimate goal! Let's build a sustainable path there 🌴",
          image: {
            url: "/images/financial-freedom-beach.jpg",
            alt: "Person relaxing on beach with laptop showing profitable trades",
            size: "small",
          },
          metadata: {
            riskProfile: "aggressive",
            tags: ["ultimate_freedom", "high_aspirations"],
          },
        },
        {
          id: "intellectual_challenge",
          text: "Intellectual challenge - I enjoy the mental game and strategy",
          emoji: "🧠",
          value: "intellectual_challenge",
          followUp:
            "A true strategist! The markets will keep you entertained 🎯",
          image: {
            url: "/images/intellectual-chess-trading.jpg",
            alt: "Chess pieces on trading chart background",
            size: "small",
          },
          metadata: {
            riskProfile: "analytical",
            tags: ["strategy_focused", "process_oriented"],
          },
        },
        {
          id: "quick_gains",
          text: "Make money fast - looking for quick wins and rapid growth",
          emoji: "⚡",
          value: "quick_gains",
          followUp: "Speed demon detected! Let's channel that energy wisely ⚡",
          image: {
            url: "/images/quick-gains-speedometer.jpg",
            alt: "Speedometer showing rapid acceleration with dollar signs",
            size: "small",
          },
          metadata: {
            riskProfile: "high_risk",
            tags: ["impatience_risk", "education_needed"],
          },
        },
      ],
    },

    {
      id: 9,
      type: "content",
      input: null,
      category: "goals_response",
      title: "💡 Here's the reality about trading goals...",
      subtitle: "Success Rates by Goal Type",
      description:
        "Different goals require different strategies. Here's what actually works...",
      image: {
        url: "/images/two-buttons.jpg",
        alt: "Chart showing success rates for different trading goal types",
        size: "large",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: null,
      metadata: {
        marketInsight: null,
        required: false,
      },
      options: [
        {
          id: "insight_1",
          text: "95% of 'get rich quick' traders lose money within their first year",
          emoji: "🎯",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_2",
          text: "Slow and steady income supplementers have 73% higher success rates",
          emoji: "🐌",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_3",
          text: "Our AI matches your goals to proven strategies that actually work",
          emoji: "🤖",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
        {
          id: "insight_4",
          text: "Strategic goal-setting increases trading consistency by 67%",
          emoji: "📊",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "insight_point",
          },
        },
      ],
    },

    {
      id: 10,
      type: "question",
      input: "radio",
      category: "biggest_challenge",
      title: "Time for some trading therapy - what's your biggest struggle?",
      subtitle: null,
      description: "What's holding you back from consistent profits?",
      image: {
        url: "/images/trading-challenges-obstacles.jpg",
        alt: "Trader facing various trading challenge icons",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "biggest_challenge",
        fieldType: "single_select",
        validation: "required",
      },
      metadata: {
        marketInsight:
          "Primary pain points for product positioning and marketing",
        required: true,
      },
      options: [
        {
          id: "emotional_trading",
          text: "Emotional trading - I buy high, sell low, repeat",
          emoji: "😱",
          value: "emotional_trading",
          followUp:
            "The classic! You're definitely not alone in this struggle 🫂",
          image: {
            url: "/images/emotional-trading-rollercoaster.jpg",
            alt: "Trader on emotional rollercoaster with charts",
            size: "small",
          },
          metadata: {
            solutionFocus: "psychology_tools",
            tags: ["behavioral_issues", "high_priority"],
          },
        },
        {
          id: "analysis_paralysis",
          text: "Analysis paralysis - I research forever but never pull the trigger",
          emoji: "🤔",
          value: "analysis_paralysis",
          followUp:
            "Perfectionist detected! Sometimes good enough IS perfect 🎯",
          image: {
            url: "/images/analysis-paralysis-overthinking.jpg",
            alt: "Trader surrounded by too much analysis looking confused",
            size: "small",
          },
          metadata: {
            solutionFocus: "decision_support",
            tags: ["execution_issues", "confidence_building"],
          },
        },
        {
          id: "no_system",
          text: "No consistent system - I'm basically gambling with extra steps",
          emoji: "🎲",
          value: "no_system",
          followUp: "At least you're honest about it! Step 1: complete ✅",
          image: {
            url: "/images/no-system-random-trading.jpg",
            alt: "Dice and cards mixed with trading charts",
            size: "small",
          },
          metadata: {
            solutionFocus: "system_building",
            tags: ["methodology_needed", "structure_required"],
          },
        },
        {
          id: "time_management",
          text: "Time management - I have a life outside of charts (crazy, right?)",
          emoji: "⏰",
          value: "time_management",
          followUp:
            "Imagine that - wanting work-life balance! How reasonable of you 😄",
          image: {
            url: "/images/time-management-balance.jpg",
            alt: "Person balancing life activities with trading",
            size: "small",
          },
          metadata: {
            solutionFocus: "automation_tools",
            tags: ["efficiency_needed", "work_life_balance"],
          },
        },
        {
          id: "risk_management",
          text: "Risk management - My stop losses are more like suggestions",
          emoji: "💸",
          value: "risk_management",
          followUp: "Guidelines are more like... guidelines anyway, right? 🏴‍☠️",
          image: {
            url: "/images/poor-risk-management.jpg",
            alt: "Trader ignoring warning signs and stop losses",
            size: "small",
          },
          metadata: {
            solutionFocus: "risk_tools",
            tags: ["protection_needed", "discipline_issues"],
          },
        },
      ],
    },

    {
      id: 11,
      type: "question",
      input: "multi_select",
      category: "current_tools",
      title: "What's in your current trading toolkit?",
      subtitle: null,
      description: "Which tools do you currently use? (Select all that apply)",
      image: {
        url: "/images/trading-tools-collection.jpg",
        alt: "Collection of various trading platforms and tools",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "current_tools",
        fieldType: "multi_select",
        validation: "required",
      },
      metadata: {
        marketInsight: "Competitive landscape and integration opportunities",
        required: true,
      },
      options: [
        {
          id: "tradingview",
          text: "TradingView - For pretty charts and social validation",
          emoji: "📊",
          value: "tradingview",
          followUp: null,
          image: {
            url: "/images/tradingview-logo.jpg",
            alt: "TradingView platform interface",
            size: "small",
          },
          metadata: {
            integrationPotential: "high",
            tags: ["charting", "social_trading"],
          },
        },
        {
          id: "mt4_mt5",
          text: "MT4/MT5 - The reliable old hammer of trading",
          emoji: "🔧",
          value: "mt4_mt5",
          followUp: null,
          image: {
            url: "/images/metatrader-platform.jpg",
            alt: "MetaTrader platform interface",
            size: "small",
          },
          metadata: {
            integrationPotential: "medium",
            tags: ["execution_platform", "forex_focus"],
          },
        },
        {
          id: "broker_platform",
          text: "Broker's platform - Whatever they gave me",
          emoji: "🏦",
          value: "broker_platform",
          followUp: null,
          image: {
            url: "/images/generic-broker-platform.jpg",
            alt: "Standard broker trading interface",
            size: "small",
          },
          metadata: {
            integrationPotential: "low",
            tags: ["basic_execution", "limited_features"],
          },
        },
        {
          id: "excel_sheets",
          text: "Excel/Google Sheets - Manual tracking like a caveman",
          emoji: "📈",
          value: "excel_sheets",
          followUp: null,
          image: {
            url: "/images/excel-trading-log.jpg",
            alt: "Trading spreadsheet with manual entries",
            size: "small",
          },
          metadata: {
            integrationPotential: "high",
            tags: ["manual_tracking", "data_export_needed"],
          },
        },
        {
          id: "nothing_special",
          text: "Nothing special - just winging it",
          emoji: "🤷‍♂️",
          value: "nothing_special",
          followUp: null,
          image: {
            url: "/images/basic-trading-setup.jpg",
            alt: "Simple, minimal trading setup",
            size: "small",
          },
          metadata: {
            integrationPotential: "high",
            tags: ["greenfield_opportunity", "all_features_needed"],
          },
        },
      ],
    },

    {
      id: 12,
      type: "question",
      input: "radio",
      category: "willingness_to_pay",
      title: "Let's talk about value (the dreaded pricing question)",
      subtitle: null,
      description:
        "How much would you pay monthly for AI that significantly improves your trading?",
      image: {
        url: "/images/value-vs-cost-scale.jpg",
        alt: "Balance scale with value on one side and cost on the other",
        size: "medium",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "willingness_to_pay",
        fieldType: "single_select",
        validation: "required",
      },
      metadata: {
        marketInsight: "Price sensitivity and revenue projections",
        required: true,
      },
      options: [
        {
          id: "free_only",
          text: "$0 - I want everything free (don't we all?)",
          emoji: "🆓",
          value: "free_only",
          followUp: "Fair enough! We'll have some free features for you 🎁",
          image: {
            url: "/images/free-tier-basic.jpg",
            alt: "Basic free features with limitations",
            size: "small",
          },
          metadata: {
            tier: "freemium",
            tags: ["price_sensitive", "freemium_target"],
          },
        },
        {
          id: "under_20",
          text: "Under $20 - About the cost of fancy coffee for a month",
          emoji: "☕",
          value: "under_20",
          followUp: "Coffee money for trading superpowers? Sounds fair! ☕",
          image: {
            url: "/images/coffee-money-trading.jpg",
            alt: "Coffee cup with trading charts",
            size: "small",
          },
          metadata: {
            tier: "basic",
            tags: ["budget_conscious", "entry_level"],
          },
        },
        {
          id: "20_50",
          text: "$20-50 - Same as a few pizza deliveries",
          emoji: "🍕",
          value: "20_50",
          followUp:
            "Pizza vs. profits - tough choice, but you chose wisely! 🍕",
          image: {
            url: "/images/pizza-vs-profits.jpg",
            alt: "Pizza slice with dollar signs",
            size: "small",
          },
          metadata: {
            tier: "standard",
            tags: ["value_conscious", "mainstream_target"],
          },
        },
        {
          id: "50_100",
          text: "$50-100 - If it saves/makes me money, worth it",
          emoji: "💡",
          value: "50_100",
          followUp: "ROI thinking - that's the trader mindset! 💰",
          image: {
            url: "/images/roi-investment-growth.jpg",
            alt: "Investment growing into larger returns",
            size: "small",
          },
          metadata: {
            tier: "premium",
            tags: ["roi_focused", "serious_trader"],
          },
        },
        {
          id: "over_100",
          text: "$100+ - I invest in tools that work",
          emoji: "🚀",
          value: "over_100",
          followUp: "Premium player! We like your commitment to excellence 🏆",
          image: {
            url: "/images/premium-tools-investment.jpg",
            alt: "High-end professional trading tools",
            size: "small",
          },
          metadata: {
            tier: "enterprise",
            tags: ["premium_target", "professional_trader"],
          },
        },
      ],
    },

    {
      id: 11,
      type: "content",
      input: null,
      category: "social_proof",
      title: "🎯 You're in good company...",
      subtitle: "What Our Beta Users Are Saying",
      description: null,
      image: {
        url: "/images/jordan-personally.jpg",
        alt: "Group of successful traders celebrating results",
        size: "large",
      },
      content: {
        headline: "2,847 beta users",
        body: "Average 67% improvement in consistency within 30 days",
        cta: null,
      },
      dataCollection: null,
      metadata: {
        marketInsight: null,
        required: false,
      },
      options: [
        {
          id: "testimonial_1",
          text: "Finally stopped revenge trading - saved me $3K in the first month",
          emoji: "👩",
          value: "Sarah K., Day Trader",
          followUp: "$3,000 saved",
          image: null,
          metadata: {
            type: "testimonial",
          },
        },
        {
          id: "testimonial_2",
          text: "My hit rate went from 40% to 73% - it's like having a trading mentor 24/7",
          emoji: "👨",
          value: "Mike R., Swing Trader",
          followUp: "73% win rate",
          image: null,
          metadata: {
            type: "testimonial",
          },
        },
        {
          id: "testimonial_3",
          text: "I actually sleep at night now - the AI manages my risk better than I ever could",
          emoji: "💼",
          value: "Jennifer L., Working Professional",
          followUp: "Better sleep + profits",
          image: null,
          metadata: {
            type: "testimonial",
          },
        },
      ],
    },

    {
      id: 12,
      type: "form",
      input: "email",
      category: "conversion",
      title: "🚀 Ready to transform your trading?",
      subtitle:
        "Fill out form below to download your FREE guide and join Early Access waitlist.",
      description: "Limited to first 5,000 early access members",
      image: {
        url: "/images/ai-trading-partnership-success.jpg",
        alt: "Human and AI working together successfully",
        size: "large",
      },
      content: {
        headline: null,
        body: null,
        cta: null,
      },
      dataCollection: {
        fieldName: "email_signup",
        fieldType: "form",
        validation: "required",
      },
      metadata: {
        marketInsight: "Conversion rate and lead quality",
        required: true,
      },
      options: [
        {
          id: "benefit_1",
          text: "🎯 Custom AI analysis based on YOUR trading profile",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "benefit_point",
          },
        },
        {
          id: "benefit_2",
          text: "📊 Early access to beta features (50% off lifetime)",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "benefit_point",
          },
        },
        {
          id: "benefit_3",
          text: "🧠 Free trading psychology assessment ($97 value)",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "benefit_point",
          },
        },
        {
          id: "benefit_4",
          text: "📈 Weekly market insights from our AI system",
          value: null,
          followUp: null,
          image: null,
          metadata: {
            type: "benefit_point",
          },
        },
      ],
      formFields: [
        {
          name: "email",
          label: "Email Address",
          type: "email",
          placeholder: "your.email@example.com",
          required: true,
          validation: "email",
        },
        {
          name: "first_name",
          label: "First Name",
          type: "text",
          placeholder: "First name",
          required: true,
          validation: "name",
        },
        {
          name: "last_name",
          label: "Last Name",
          type: "text",
          placeholder: "Last name",
          required: false,
          validation: "name",
        },
        // {
        //   name: "referral",
        //   label: "Who referred you?",
        //   type: "text",
        //   placeholder:
        //     "Whats the email or code of the person who referred you? (optional)",
        //   required: false,
        //   validation: "none",
        // },
        {
          name: "where_did_you_hear",
          label: "How did you hear about us?",
          type: "select",
          placeholder: "Select an option",
          options: [
            "X/Twitter",
            "Facebook",
            "Instagram",
            "LinkedIn",
            "Reddit",
            "TikTok",
            "Discord",
            "YouTube",
            "Podcast",
            "Blog/Article",
            "Friend/Family Referral",
            "Online Ad",
            "Search Engine",
            "Trading Forum/Community",
            "Other",
            "Prefer not to say",
          ],
          required: false,
          validation: "none",
        },
        //   {name: "consent", type: "checkbox", text: "I agree to the terms and privacy policy", required: true, validation: "required"}
      ],
    },
  ],
};

export default onboardingFlow;
