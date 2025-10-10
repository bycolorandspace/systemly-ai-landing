// import RiskDoctorResults from "./risk-doctor-results";
import FeaturesList from "./features-list";
import AnimatedWrapper from "./common/AnimatedWrapper";
import { FeaturesSectionType } from "@/types/site-copy-types";
import Image from "next/image";

export default function FeaturesSection({
  content,
}: {
  content: FeaturesSectionType;
}) {
  const { title, subheader, featuresList } = content;

  return (
    <section
      id="features"
      className="grid grid-cols-1 md:grid-cols-2 items-start justify-center w-full max-w-6xl md:mx-6 px-4 py-8"
    >
      {/* Left Column - Text Content */}
      <div className="w-full flex flex-col items-start space-y-8">
        {/* Animated Subheader */}
        <div className="space-y-2">
          <AnimatedWrapper animation="fadeIn" duration={600} delay={0}>
            <h3 className="text-sm text-secondary mb-4">{subheader}</h3>
          </AnimatedWrapper>

          {/* Animated Title */}
          <AnimatedWrapper
            animation="fadeInUp"
            duration={800}
            delay={100}
            easing="spring"
          >
            <h2 className="heading headerh2">{title}</h2>
          </AnimatedWrapper>
        </div>

        {/* Features List - Staggered Animation */}
        <div className="flex flex-col items-start space-y-4">
          {featuresList.map((feature, index) => (
            <AnimatedWrapper
              key={index}
              animation="fadeInLeft"
              duration={700}
              delay={200 + index * 100} // Each feature appears 100ms after previous
              easing="spring"
            >
              <FeaturesList
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </AnimatedWrapper>
          ))}
        </div>
      </div>

      {/* Right Column - Image */}
      <AnimatedWrapper
        animation="fadeInRight"
        duration={1000}
        delay={300}
        easing="ease-out"
        threshold={0}
        triggerOnce={false} // animate only once or every time it enters viewport
        className="my-20"
      >
        <div className="w-full">
          <div className="flex justify-end w-full md:pl-6 mx-auto h-[500px] rounded-lg">
            <Image
              src="/images/home.png"
              alt="home-screen"
              width={430}
              height={650}
              className="my-2 w-[430] h-[650] object-contain"
            />
            {/* <RiskDoctorResults /> */}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
