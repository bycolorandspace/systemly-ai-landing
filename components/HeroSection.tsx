import { PAGES } from "@/data/links";
import CTAButton from "./common/cta-button";

export default function HeroSection({ action }: { action: () => void }) {
  return (
    <section
      className="flex flex-col items-center justify-center px-8 min-h-screen"
      id="/#"
    >
      <h1 className="text-6xl md:text-7xl font-normal text-primary mb-4 text-center">
        Win more trades with AI
      </h1>
      <p className="text-lg text-secondary mb-8 text-center">
        AI co-pilot you’ve been looking for to help you increase and maintain
        your profit.
      </p>
      <div className="flex flex-row gap-8">
        <CTAButton
          label="Money burst 🤑"
          action={action}
          color="default"
          customClass="text-white"
        />
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
