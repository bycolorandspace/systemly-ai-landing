import React from "react";
import { LucideIcon } from "lucide-react";

export default function FeaturesList({
  icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  const IconComponent = icon;
  return (
    <div className="flex flex-row items-start justify-center gap-4">
      <IconComponent
        size={32}
        strokeWidth={0.5}
        className="text-secondary flex-shrink-0"
      />

      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
