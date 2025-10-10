import PricingTable from "./pricing-table";
import AnimatedWrapper from "./common/AnimatedWrapper";
import { PricingSectionType } from "@/types/site-copy-types";

export default function PricingTableSection({
  content,
}: {
  content: PricingSectionType;
}) {
  const { title, subheader, description, plansList } = content;

  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-20 space-y-8"
    >
      <div className="space-y-2">
        {/* Animated Subheader */}
        <AnimatedWrapper animation="fadeIn" duration={600} delay={0}>
          <h3 className="text-sm text-secondary mb-4 text-center">
            {subheader}
          </h3>
        </AnimatedWrapper>

        {/* Animated Title */}
        <AnimatedWrapper
          animation="fadeInUp"
          duration={800}
          delay={100}
          easing="spring"
        >
          <h2 className="heading headerh2 mb-8 text-center">{title}</h2>
        </AnimatedWrapper>

        {/* Animated Description */}
        <AnimatedWrapper
          animation="fadeInUp"
          duration={800}
          delay={200}
          easing="spring"
        >
          <div className="flex flex-col items-center space-y-4 max-w-3xl">
            <p className="text-lg text-secondary mb-4 text-center">
              {description}
            </p>
          </div>
        </AnimatedWrapper>
      </div>

      {/* Pricing Tables - Staggered Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[600px] mx-auto justify-center items-center">
        {plansList.map((plan, index) => (
          <AnimatedWrapper
            key={index}
            animation="scaleIn"
            duration={700}
            delay={300 + index * 150} // First plan: 300ms, Second plan: 450ms
            easing="spring"
          >
            <PricingTable
              name={plan.name}
              description={plan.description}
              price={plan.price.billedAnnually}
              features={plan.features}
              billingMonthly={false}
              ctaLabel={plan.ctaLabel}
              link={plan.ctaUrl}
            />
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  );
}
