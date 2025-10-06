import Link from "next/link";
import { Button } from "../ui/button";
import { convertColors } from "@/helpers/convert-colors";

interface CTAButtonProps {
  label: string;
  url?: string;
  action?: () => void;
  color?: "default" | "orange" | "blue" | "green";
  customClass?: string;
}

export default function CTAButton({
  label,
  url,
  action,
  color = "default",
  customClass,
}: CTAButtonProps) {
  const buttonClass = `
  rounded-lg cursor-pointer flex flex-row  h-[45px] w-full max-w-[200px]  text-white hover:bg-accent hover:text-foreground  font-semibold text-md
  ${color && convertColors(color)} ${customClass}  `;

  return (
    <div className="flex justify-center items-center">
      {url ? (
        <Button className={buttonClass}>
          <Link href={url} className="text-white">
            {label}
          </Link>
        </Button>
      ) : (
        <Button onClick={action} className={buttonClass}>
          {label}
        </Button>
      )}
    </div>
  );
}
