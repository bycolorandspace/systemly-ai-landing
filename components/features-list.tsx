import React from "react";
import Image from "next/image";

export default function FeaturesList({
  iconPath,
  title,
  description,
}: {
  iconPath: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-start justify-center gap-4">
      <Image
        src={iconPath}
        alt="Feature Chart"
        width={52}
        height={52}
        className="w-[52px] h-[52px]"
      />
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
