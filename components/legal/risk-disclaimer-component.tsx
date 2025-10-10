import React from "react";
import { RiskDisclaimerSection } from "@/types/site-copy-types";

type RiskDisclaimerSectionComponentProps = {
  section: RiskDisclaimerSection;
};

export const RiskDisclaimerSectionComponent: React.FC<
  RiskDisclaimerSectionComponentProps
> = ({ section }) => {
  return (
    <section className="space-y-4">
      {/* Section Heading */}
      <h2 className="text-2xl font-semibold text-gray-900">
        {section.heading}
      </h2>

      {/* Intro Text */}
      {section.intro && (
        <p className="text-gray-700 leading-relaxed">{section.intro}</p>
      )}

      {/* Warning Box */}
      {section.warning && (
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-gray-800 font-medium">{section.warning}</p>
        </div>
      )}

      {/* Subheading */}
      {section.subheading && (
        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          {section.subheading}
        </h3>
      )}

      {/* Items List */}
      <ul className="space-y-3 pl-6 list-disc marker:text-gray-400">
        {section.items.map((item, index) => (
          <li key={index} className="text-gray-700 leading-relaxed pl-2">
            {item}
          </li>
        ))}
      </ul>

      {/* Footer Text */}
      {section.footer && (
        <p className="text-gray-800 font-medium mt-4 leading-relaxed">
          {section.footer}
        </p>
      )}
    </section>
  );
};
