import { PAGES } from "@/data/links";
import CTAButton from "./common/cta-button";
import React from "react";
import { AboutSectionType } from "@/types/site-copy-types";

export const AboutSection = ({ content }: { content: AboutSectionType }) => {
  const { subheader, description, description_3, stats } = content;
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 min-h-screen "
    >
      <h3 className="text-sm text-secondary mb-4">{subheader}</h3>
      <div className="w-full max-w-4xl space-y-8 mb-8">
        <h2 className="   text-center  heading headerh2">{description}</h2>
        <h2 className="max-w-xl mx-auto text-xl font-normal  text-primary  text-center ">
          {description_3}
        </h2>
      </div>
      <div className="w-full flex flex-row justify-center items-start gap-8 ">
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
          {stats &&
            stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className="text-4xl font-medium text-primary space-grotesk-font">
                  {stat.number}
                </h2>
                <h3 className="text-sm text-secondary mb-2">
                  {stat.label}
                  {stat.context && (
                    <span className="text-xs text-secondary ml-1">
                      ({stat.context})
                    </span>
                  )}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
