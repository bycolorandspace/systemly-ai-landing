import RiskDoctorResults from "./risk-doctor-results";
import FeaturesList from "./features-list";

export default function FeaturesSection({
  features,
}: {
  features: { iconPath: string; title: string; description: string }[];
}) {
  return (
    <section
      id="features"
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full max-w-6xl md:mx-6 px-4 py-8 "
    >
      {/* Left */}
      <div className="w-full flex flex-col items-start space-y-2">
        <h3 className="text-sm text-secondary mb-4">Features</h3>
        <h2 className="text-4xl font-medium text-primary mb-8">
          Built by traders, powered by AI
        </h2>

        {/* Features list */}
        <div className="flex flex-col items-start space-y-4">
          {features.map((feature, index) => {
            return (
              <FeaturesList
                key={index}
                iconPath={feature.iconPath}
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
