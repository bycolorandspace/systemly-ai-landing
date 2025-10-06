import CTAButton from "./common/cta-button";
import PricingListItems from "./pricing-list-items";

interface PricingTableProps {
  name: string;
  description?: string;
  billingMonthly?: boolean;
  price: string;
  features: string[];
  ctaLabel?: string;
  link?: string;
}

export default function PricingTable({
  name,
  description,
  billingMonthly,
  price,
  features,
  ctaLabel,
  link,
}: PricingTableProps) {
  return (
    <div className=" rounded-xl py-6 px-4 border-muted border-1 w-full max-w-[280px] h-full mx-auto md:mx-0 space-y-8 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-medium text-primary mb-4">{name}</h3>
        <p className=" text-secondary mb-4">{description}</p>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-4xl font-medium text-primary mb-0 flex flex-col gap-2">
          {price}
          <span className="text-sm font-normal text-secondary">
            {billingMonthly ? `/month` : `/month, billed annually`}
          </span>
        </h3>

        <div className="flex flex-col items-start space-y-2 mb-4">
          {features.map((feature, index) => (
            <PricingListItems key={index} label={feature} />
          ))}
        </div>
      </div>

      <CTAButton
        label={ctaLabel ? ctaLabel : "Start Free Trial"}
        url={link}
        color="blue"
        customClass="w-full my-4"
      />
    </div>
  );
}
