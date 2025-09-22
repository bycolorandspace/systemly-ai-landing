import { Plan } from "@/types/general-types";
import PricingTable from "./pricing-table";

export default function PricingTableSection({ plans }: { plans: Plan[] }) {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 space-y-8 min-h-screen"
    >
      <h3 className="text-sm text-secondary mb-4 text-center">Pricing</h3>
      <h2 className="heading headerh2 mb-8 text-center">
        Simple, transparent pricing
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg text-secondary mb-4 text-center">
          Get started for free. Upgrade to unlock advanced features.
        </p>
      </div>
      {/* Pricing table with feature list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[600px] mx-auto justify-center items-center">
        {plans.map((plan, index) => {
          return (
            <PricingTable
              key={index}
              name={plan.name}
              description={plan.description}
              price={plan.price.billedAnnually}
              features={plan.features}
              billingMonthly={false}
              link={plan.link}
            />
          );
        })}
      </div>
    </section>
  );
}
