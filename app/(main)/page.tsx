"use client";
import CTAButton from "@/components/common/cta-button";
import Header from "@/components/common/Header";
import Logo from "@/components/common/logo";
import FeaturesList from "@/components/features-list";
import FloatingDollarsBackground from "@/components/FloatingDollars";
import NewsletterSection from "@/components/newsletter-section";
import PricingTableSection from "@/components/pricing-section";
import RiskDoctorResults from "@/components/risk-doctor-results";
import TestimonialsSection from "@/components/testimonials-section";
import TradesDemoSection from "@/components/trades-demo-section";
// import FloatingDollars from "@/components/FloatingDollars";
import { Plan, Testimonial } from "@/types/general-types";
import Link from "next/link";
import React from "react";

// WE ARE BEHIND YOU.
// BE SAFE OUT THERE.
// GODSPEED, TRADER
// LOCK IN, YOUNG RENEGADE
// LIVE TO SEE ANOTHER DAY

const features = [
  {
    iconPath: "/images/icons/traffic-lights.svg",
    title: "Auto-Risk management",
    description:
      "AI-powered protection for your capital. Automatically calculates position sizes, monitors volatility, and maintains your risk parameters.",
  },
  {
    iconPath: "/images/icons/lightning-bolt.svg",
    title: "AI Chart Analysis",
    description:
      "Advanced AI algorithms analyze charts like a seasoned pro, providing you with accurate insights and predictions.",
  },
  {
    iconPath: "/images/icons/knight.svg",
    title: "Real-time Alerts",
    description:
      "Get instant notifications on market movements and trade opportunities, ensuring you never miss a chance to profit.",
  },
  // Add more features as needed
];

const testimonials: Testimonial[] = [
  {
    description:
      "Finally stopped revenge trading. Systemly keeps me disciplined and my win rate has jumped to 71%.",
    name: "Michael A",
    title: "Day Trader",
  },
  {
    description:
      "The risk management alone saved me from three potential account-killers last month.",
    name: "Sarah K.",
    title: "Swing Trader",
  },
  {
    description:
      "Systemly's AI analysis is like having a seasoned trader by my side. My confidence has skyrocketed.",
    name: "John D.",
    title: "Forex Trader",
  },
];

const plans: Plan[] = [
  {
    name: "Standard",
    description: "Perfect for individual traders.",
    price: { billedMonthly: "$14.99", billedAnnually: "$12.99" },
    features: [
      "AI Chart Analysis",
      "Real-time Alerts",
      "Basic Risk Management",
    ],
  },
  {
    name: "Pro",
    description: "For serious traders who want more.",
    price: { billedMonthly: "$49.99", billedAnnually: "$39.99" },
    features: [
      "All Standard features",
      "Advanced Risk Management",
      "Priority Support",
      "Custom Alerts",
    ],
  },
];

export default function Home() {
  // const { user, isAuthenticated } = useAuth();
  // const router = Router.useRouter();

  const [toggleMoneyBurst, setToggleMoneyBurst] = React.useState(false);

  return (
    <>
      <FloatingDollarsBackground
        showControls={true}
        initialDollarCount={50}
        initialFallSpeed={1.5}
        initialWindStrength={0.8}
        toggleBurst={toggleMoneyBurst}
      />
      <div className="flex flex-col items-center justify-start min-h-screen">
        {/* HEADER */}
        <Header />
        {/* HERO  */}
        <section
          className="flex flex-col items-center justify-center px-8 min-h-screen"
          id="/#"
        >
          <h1 className="text-6xl md:text-7xl font-normal text-primary mb-4 text-center">
            Win more trades with AI
          </h1>
          <p className="text-lg text-secondary mb-8 text-center">
            AI co-pilot you’ve been looking for to help you increase and
            maintain your profit.
          </p>
          <div className="flex flex-row gap-8">
            <CTAButton
              label="Money burst 🤑"
              action={() => setToggleMoneyBurst(!toggleMoneyBurst)}
              color="default"
              customClass="text-white"
            />
            <CTAButton
              label="Get started"
              url="/signup"
              color="blue"
              customClass="text-white"
            />
          </div>
        </section>
        {/* DEMO */}
        <TradesDemoSection />

        {/* ABOUT */}
        <section
          id="about"
          className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 min-h-screen "
        >
          <h3 className="text-sm text-secondary mb-4">About Systemly</h3>
          <div className="w-full max-w-3xl space-y-8 mb-8">
            <h2 className="text-4xl font-medium text-primary  text-center">
              We made an AI that analyses charts like a seasoned pro and
              calculates your risks down to the pip.
            </h2>
            <h2 className="text-4xl font-medium  text-secondary  text-center">
              No more second-guessing. No more FOMO trades. Just consistent,
              data-driven decisions that protect your capital and grow your
              account.
            </h2>
          </div>
          <div className="flex flex-row gap-8">
            <CTAButton
              label="Money burst 🤑"
              action={() => setToggleMoneyBurst(!toggleMoneyBurst)}
              color="default"
              customClass="text-white"
            />
            <CTAButton
              label="Get started"
              url="/get-started"
              color="blue"
              customClass="text-white"
            />
          </div>

          {/* Stats */}
          <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 ">
            <div className="flex flex-col gap-12 md:gap-0 md:flex-row justify-evenly items-center w-full px-4 py-8">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-medium text-primary">800+</h2>
                <h3 className="text-sm text-secondary mb-2">Traders</h3>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-medium text-primary">10k+</h2>
                <h3 className="text-sm text-secondary mb-2">
                  Analyses Generated
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-medium text-primary">25k+</h2>
                <h3 className="text-sm text-secondary mb-2">
                  Risk Calculations
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full max-w-6xl md:mx-6 px-4 py-8 "
        >
          {/* Left */}
          <div className="w-full flex flex-col items-start space-y-2">
            <h3 className="text-sm text-secondary mb-4">Features</h3>
            <h2 className="text-4xl font-medium text-primary mb-8">
              Built by traders, powered by AI
            </h2>

            {/* Features list */}
            <div className="flex flex-col items-start space-y-4">
              {features.map((feature, index) => {
                return (
                  <FeaturesList
                    key={index}
                    iconPath={feature.iconPath}
                    title={feature.title}
                    description={feature.description}
                  />
                );
              })}
            </div>
          </div>
          {/* Right */}
          <div className="w-full">
            <div className="flex justify-end w-full  md:pl-6 mx-auto h-[500px]   rounded-lg ">
              <RiskDoctorResults />
            </div>
          </div>
        </section>

        {/* Testimonials */}

        <TestimonialsSection data={testimonials} />

        {/* Price */}

        <PricingTableSection plans={plans} />

        {/* Newsletter */}

        <NewsletterSection />

        {/* CTA Section */}

        <section className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8">
          <h3 className="text-sm text-secondary mb-4">Ready to win more?</h3>
          <h2 className="text-4xl font-medium text-primary mb-8">
            Start your free trial today
          </h2>
          <CTAButton
            label="Get Started"
            url="/get-started"
            color="orange"
            customClass="text-white"
          />
        </section>

        <footer className="w-full max-w-6xl px-4 py-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <Logo />
            <p className="text-sm text-primary mb-4">
              © {new Date().getFullYear()} Systemly. All rights reserved.
            </p>

            <div className="flex flex-row items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-secondary hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-secondary hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
