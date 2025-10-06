import RiskDoctorResults from "./risk-doctor-results";
import FeaturesList from "./features-list";
import { FeaturesSectionType } from "@/types/site-copy-types";

export default function FeaturesSection({
  content,
}: {
  content: FeaturesSectionType;
}) {
  const { title, subheader, featuresList } = content;
  return (
    <section
      id="features"
      className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full max-w-6xl md:mx-6 px-4 py-8 "
    >
      {/* Left */}
      <div className="w-full flex flex-col items-start space-y-8">
        <h3 className="text-sm text-secondary mb-4">{subheader}</h3>
        <h2 className="heading headerh2">{title}</h2>

        {/* Features list */}
        <div className="flex flex-col items-start space-y-4">
          {featuresList.map((feature, index) => {
            return (
              <FeaturesList
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
      {/* Right */}
      <div className="w-full">
        <div className="flex justify-end w-full  md:pl-6 mx-auto h-[500px]   rounded-lg ">
          <RiskDoctorResults />
        </div>
      </div>
    </section>
  );
}
