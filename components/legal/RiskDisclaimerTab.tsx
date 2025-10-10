import React from "react";
import { RiskDisclaimerSectionComponent } from "./risk-disclaimer-component";
import { RiskDisclaimerPageType } from "@/types/site-copy-types";

type RiskDisclaimerPageProps = {
  data: RiskDisclaimerPageType;
};

export const RiskDisclaimerPage: React.FC<RiskDisclaimerPageProps> = ({
  data,
}) => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          {data.title}
        </h1>
        <p className="text-sm text-gray-600">
          Last Updated: {data.lastUpdated}
        </p>
      </header>

      {/* Sections */}
      <div className="space-y-10 mb-10">
        {data.sections.map((section, index) => (
          <RiskDisclaimerSectionComponent key={index} section={section} />
        ))}
      </div>

      {/* Page Footer */}
      <footer className="mt-10 pt-6 border-t border-gray-200">
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {data.footer}
        </p>
      </footer>
    </div>
  );
};
