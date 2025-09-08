import Link from "next/link";
import { Button } from "../ui/button";
import { convertColors } from "@/helpers/convert-colors";

interface CTAButtonProps {
  label: string;
  status?: "active" | "inactive" | "submitting";
  type?: "button" | "submit" | "reset";
  url?: string;
  action?: () => void;
  color?: "default" | "orange" | "blue" | "green";
  customClass?: string;
}

export default function CustomButton({
  label,
  status = "active",
  type = "button",
  url,
  action,
  color = "default",
  customClass,
}: CTAButtonProps) {
  const buttonClass = `button-style ${color && convertColors(color)} ${
    customClass || ""
  }`;

  return (
    <div className="flex justify-center items-center">
      {type === "button" && url ? (
        <Button className={buttonClass} type={type}>
          <Link href={url} className={buttonClass}>
            {label}
          </Link>
        </Button>
      ) : type === "button" && action ? (
        <Button onClick={action} className={buttonClass} type={type}>
          {label}
        </Button>
      ) : (
        <Button className={buttonClass} type={type}>
          {status === "submitting" ? "Submitting" : label}
        </Button>
      )}
    </div>
  );
}
