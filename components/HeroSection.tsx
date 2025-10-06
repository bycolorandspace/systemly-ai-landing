import { HeroSectionType } from "@/types/site-copy-types";
import CTAButton from "./common/cta-button";
// import MoneyBurstButton from "./money-burst";

export const HeroSection = ({ content }: { content: HeroSectionType }) => {
  // { action }: { action: () => void }
  const { header, subheader, ctaLabel, ctaUrl } = content;
  return (
    <section
      className="flex w-full max-w-5xl flex-col items-center justify-center px-8 min-h-screen"
      id="/#"
    >
      <div className="space-y-8">
        <h1 className="bigHeading">{header}</h1>
        <p className="text-lg text-primary font-normal mb-8 text-center w-full max-w-2xl mx-auto">
          {subheader}
        </p>
      </div>

      <div className="flex flex-row gap-8 justify-start items-start">
        {/* <MoneyBurstButton action={action} /> */}

        <CTAButton
          label={ctaLabel}
          url={ctaUrl}
          color="blue"
          customClass="text-white"
        />
      </div>
    </section>
  );
};
