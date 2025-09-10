import { PAGES } from "@/data/links";
import CTAButton from "./common/cta-button";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-20">
      <h3 className="text-sm text-secondary mb-4">Ready to win more?</h3>
      <h2 className="text-4xl font-medium text-primary mb-8">
        Start your free trial today
      </h2>
      <CTAButton
        label="Get Started"
        url={PAGES.getStarted}
        color="orange"
        customClass="text-white"
      />
    </section>
  );
}
