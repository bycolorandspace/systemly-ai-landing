import { HeroSectionType } from "@/types/site-copy-types";
import CTAButton from "./common/cta-button";
import AnimatedWrapper from "./common/AnimatedWrapper";
// import MoneyBurstButton from "./money-burst";

export const HeroSection = ({ content }: { content: HeroSectionType }) => {
  // { action }: { action: () => void }
  const { header, subheader, ctaLabel, ctaUrl } = content;

  return (
    <section
      className="flex w-full max-w-6xl flex-col items-center justify-center px-8 mt-40 md:mt-0  md:min-h-screen text-center"
      id="hero"
    >
      <div className="space-y-8">
        {/* Animated Header - Fade in with slight upward movement */}
        <AnimatedWrapper
          animation="fadeInUp"
          duration={800}
          delay={100}
          easing="spring"
        >
          <h1 className="bigHeading text-primary">{header}</h1>
        </AnimatedWrapper>

        {/* Animated Subheader - Fade in slightly after header */}
        <AnimatedWrapper
          animation="fadeInUp"
          duration={800}
          delay={300}
          easing="spring"
        >
          <p className="text-lg text-primary font-normal mb-8 text-center w-full max-w-2xl mx-auto">
            {subheader}
          </p>
        </AnimatedWrapper>
      </div>

      {/* Animated CTA Buttons - Scale in with bounce effect */}
      <AnimatedWrapper
        animation="scaleIn"
        duration={600}
        delay={600}
        easing="bounce"
      >
        <div className="flex flex-row gap-8 justify-start items-start">
          {/* <MoneyBurstButton action={action} /> */}

          <CTAButton
            label={ctaLabel}
            url={ctaUrl}
            color="blue"
            customClass="text-white"
          />
        </div>
      </AnimatedWrapper>
    </section>
  );
};
