"use client";
import { AboutSection } from "@/components/About-section";
import AnimatedWrapper from "@/components/common/AnimatedWrapper";
// import Footer from "@/components/common/Footer";
// import Header from "@/components/common/Header";
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
import Image from "next/image";
import React, { useEffect } from "react";

// WE ARE BEHIND YOU.
// BE SAFE OUT THERE.
// GODSPEED, TRADER
// LOCK IN, YOUNG RENEGADE
// LIVE TO SEE ANOTHER DAY

export default function Home() {
  // const { user, isAuthenticated } = useAuth();
  // const router = Router.useRouter();

  //  const [toggleMoneyBurst, setToggleMoneyBurst] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
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
        {/* HERO  */}
        <HeroSection content={HERO} />

        {/* DEMO */}
        <TradesDemoSection content={TRADE_CARDS_SECTION} />

        <section className="flex flex-col items-center justify-center w-full max-w-6xl  px-0 my-20 ">
          <AnimatedWrapper
            animation="fadeInUp"
            duration={800}
            delay={400}
            easing="spring"
            threshold={0}
            triggerOnce={false} // animate only once or every time it enters viewport
          >
            <Image
              src="/images/new-strategy.png"
              alt="new-strategy"
              width={430}
              height={650}
              className="my-2 w-[430] h-[650] object-contain"
            />
          </AnimatedWrapper>
        </section>

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
      </div>
    </>
  );
}
