import { CheckIcon } from "lucide-react";

export default function PricingListItems({ label }: { label: string }) {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <CheckIcon className="w-5 h-5 text-secondary inline-block p-1" />
      <span className="text-md text-secondary font-normal">{label}</span>
    </div>
  );
}
