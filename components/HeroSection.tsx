import { PAGES } from "@/data/links";
import CTAButton from "./common/cta-button";
// import MoneyBurstButton from "./money-burst";

export default function HeroSection() {
  // { action }: { action: () => void }
  return (
    <section
      className="flex flex-col items-center justify-center px-8 min-h-screen"
      id="/#"
    >
      <div className="space-y-8">
        <h1 className="bigHeading">AI generated trade ideas & analysis</h1>
        <p className="text-lg text-primary font-normal mb-8 text-center">
          AI co-pilot you’ve been looking for to help you increase and maintain
          your profit.
        </p>
      </div>

      <div className="flex flex-row gap-8 justify-start items-start">
        {/* <MoneyBurstButton action={action} /> */}

        <CTAButton
          label="Get started"
          url={PAGES.getStarted}
          color="blue"
          customClass="text-white"
        />
      </div>
    </section>
  );
}
