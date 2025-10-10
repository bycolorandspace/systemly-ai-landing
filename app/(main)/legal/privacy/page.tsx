import { PRIVACY_POLICY_PAGE } from "@/data/site-copy";

export default function TermsPage() {
  const { title, lastUpdated, sections, footer } = PRIVACY_POLICY_PAGE;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="w-full max-w-4xl px-4 py-8 my-40">
        <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
        <p className="text-sm text-secondary mb-8 text-center">
          Last Updated: {lastUpdated}
        </p>
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            {section.intro && (
              <p className="text-lg text-secondary mb-4">{section.intro}</p>
            )}
            {section.items && section.items.length > 0 && (
              <ul className="list-disc list-inside mb-4 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.content && (
              <p className="text-lg text-secondary mb-4">{section.content}</p>
            )}
            {section.subsections &&
              section.subsections.map((sub, subIdx) => (
                <div key={subIdx} className="mb-4">
                  <h3 className="text-xl font-medium mb-2">{sub.subheading}</h3>
                  {sub.content && (
                    <p className="text-lg text-secondary mb-2">{sub.content}</p>
                  )}
                  {sub.items && sub.items.length > 0 && (
                    <ul className="list-disc list-inside mb-2 space-y-1">
                      {sub.items.map((subItem, subItemIdx) => (
                        <li key={subItemIdx} className="text-secondary">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        ))}
        <div className="mt-12 border-t pt-4 text-sm text-secondary">
          {footer}
        </div>
      </div>
    </div>
  );
}
