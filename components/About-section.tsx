import { PAGES } from "@/data/links";
import CTAButton from "./common/cta-button";
import React from "react";

export default function AboutSection({ action }: { action: () => void }) {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 min-h-screen "
    >
      <h3 className="text-sm text-secondary mb-4">About Systemly</h3>
      <div className="w-full max-w-3xl space-y-8 mb-8">
        <h2 className="text-4xl font-medium text-primary  text-center">
          We made an AI that analyses charts like a seasoned pro and calculates
          your risks down to the pip.
        </h2>
        <h2 className="text-4xl font-medium  text-secondary  text-center">
          No more second-guessing. No more FOMO trades. Just consistent,
          data-driven decisions that protect your capital and grow your account.
        </h2>
      </div>
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

      {/* Stats */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 ">
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row justify-evenly items-center w-full px-4 py-8">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium text-primary">800+</h2>
            <h3 className="text-sm text-secondary mb-2">Traders</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium text-primary">10k+</h2>
            <h3 className="text-sm text-secondary mb-2">Analyses Generated</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-medium text-primary">25k+</h2>
            <h3 className="text-sm text-secondary mb-2">Risk Calculations</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
