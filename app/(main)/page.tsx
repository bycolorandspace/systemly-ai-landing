"use client";
import AboutSection from "@/components/About-section";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CTASection from "@/components/CTA-section";
import FeaturesSection from "@/components/FeaturesSection";
import FloatingDollarsBackground from "@/components/FloatingDollars";
import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/newsletter-section";
import PricingTableSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import TradesDemoSection from "@/components/trades-demo-section";
import { PAGES } from "@/data/links";
import { Plan, Testimonial } from "@/types/general-types";
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
    link: PAGES.getStarted,
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
    link: PAGES.getStarted,
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
        <HeroSection action={() => setToggleMoneyBurst(!toggleMoneyBurst)} />

        {/* DEMO */}
        <TradesDemoSection />

        {/* ABOUT */}
        <AboutSection action={() => setToggleMoneyBurst(!toggleMoneyBurst)} />

        {/* Features */}
        <FeaturesSection features={features} />

        {/* Testimonials */}
        <TestimonialsSection data={testimonials} />

        {/* Price */}
        <PricingTableSection plans={plans} />

        {/* Newsletter */}
        <NewsletterSection />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
