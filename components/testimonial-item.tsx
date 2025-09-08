import { User } from "lucide-react";

export default function TestimonialItem({
  description,
  name,
  title,
}: {
  description: string;
  name: string;
  title: string;
}) {
  return (
    <div className="space-y-4 w-full h-full max-w-xl text-center flex flex-col justify-between">
      <p className="text-4xl font-medium text-secondary mb-4">{description}</p>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex w-12 h-12 bg-card rounded-full justify-center items-center">
          {" "}
          <User
            className="w-6 h-6 text-secondary mx-auto"
            strokeWidth={1}
          />{" "}
        </div>{" "}
        <span className="text-md text-primary font-semibold">
          {name} - {title}
        </span>
      </div>
    </div>
  );
}
