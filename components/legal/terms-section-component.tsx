import React from "react";
import { TermsOfServiceSection } from "@/types/site-copy-types";

type TermsOfServiceSectionComponentProps = {
  section: TermsOfServiceSection;
};

export const TermsOfServiceSectionComponent: React.FC<
  TermsOfServiceSectionComponentProps
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

      {/* Content Text */}
      {section.content && (
        <p className="text-gray-700 leading-relaxed">{section.content}</p>
      )}

      {/* Items List */}
      {section.items && section.items.length > 0 && (
        <ul className="space-y-3 pl-6 list-disc marker:text-gray-400">
          {section.items.map((item, index) => (
            <li key={index} className="text-gray-700 leading-relaxed pl-2">
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Subsections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className="space-y-6 mt-6">
          {section.subsections.map((subsection, index) => (
            <div key={index} className="pl-6 space-y-3">
              {/* Subsection Heading */}
              <h3 className="text-lg font-semibold text-gray-800">
                {subsection.subheading}
              </h3>

              {/* Subsection Content */}
              {subsection.content && (
                <p className="text-gray-700 leading-relaxed">
                  {subsection.content}
                </p>
              )}

              {/* Subsection Items */}
              {subsection.items && subsection.items.length > 0 && (
                <ul className="space-y-2 pl-6 list-disc marker:text-gray-400">
                  {subsection.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-700 leading-relaxed pl-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer Text */}
      {section.footer && (
        <p className="text-gray-800 font-medium mt-4 leading-relaxed">
          {section.footer}
        </p>
      )}
    </section>
  );
};
