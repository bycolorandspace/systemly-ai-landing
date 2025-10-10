import React from "react";
import { TermsOfServiceSectionComponent } from "./terms-section-component";
import { TermsOfServicePageType } from "@/types/site-copy-types";

type TermsOfServicePageProps = {
  data: TermsOfServicePageType;
};

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({
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
        <p className="text-sm text-gray-600">
          Effective Date: {data.effectiveDate}
        </p>
      </header>

      {/* Introduction */}
      <div className="mb-10 p-5 bg-gray-50 rounded-lg">
        <p className="text-gray-700 leading-relaxed">{data.introduction}</p>
      </div>

      {/* Sections */}
      <div className="space-y-10 mb-10">
        {data.sections.map((section, index) => (
          <TermsOfServiceSectionComponent key={index} section={section} />
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
