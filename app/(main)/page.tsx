"use client";
import { AboutSection } from "@/components/About-section";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import FeaturesSection from "@/components/FeaturesSection";
//import FloatingDollarsBackground from "@/components/FloatingDollars";
import { HeroSection } from "@/components/HeroSection";
import NewsletterSection from "@/components/newsletter-section";
import PricingTableSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import TradesDemoSection from "@/components/trades-demo-section";
import {
  ABOUT,
  FEATURES,
  HERO,
  NEWSLETTER,
  PRICING,
  TESTIMONIALS,
  TRADE_CARDS_SECTION,
} from "@/data/site-copy";
import React from "react";

// WE ARE BEHIND YOU.
// BE SAFE OUT THERE.
// GODSPEED, TRADER
// LOCK IN, YOUNG RENEGADE
// LIVE TO SEE ANOTHER DAY

export default function Home() {
  // const { user, isAuthenticated } = useAuth();
  // const router = Router.useRouter();

  //  const [toggleMoneyBurst, setToggleMoneyBurst] = React.useState(false);

  return (
    <>
      {/* <FloatingDollarsBackground
        showControls={true}
        initialDollarCount={50}
        initialFallSpeed={2}
        initialWindStrength={2}
        toggleBurst={toggleMoneyBurst}
      /> */}
      <div className="flex flex-col items-center justify-start min-h-screen">
        {/* HEADER */}
        <Header />
        {/* HERO  */}
        <HeroSection content={HERO} />

        {/* DEMO */}
        <TradesDemoSection content={TRADE_CARDS_SECTION} />

        {/* ABOUT */}
        <AboutSection content={ABOUT} />

        {/* Features */}
        <FeaturesSection content={FEATURES} />

        {/* Testimonials */}
        <TestimonialsSection content={TESTIMONIALS} />

        {/* Price */}
        <PricingTableSection content={PRICING} />

        {/* Newsletter */}
        <NewsletterSection content={NEWSLETTER} />

        {/* CTA Section */}
        {/* <CTASection /> */}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
