import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

interface formNavProps {
  stepIndex: number;
  totalQuestions: number;
  enableNext?: boolean;
  formId?: string;
  next: () => void;
  prev: () => void;
}

export default function FormNavigation({
  stepIndex,
  totalQuestions,
  enableNext,
  formId,
  next,
  prev,
}: formNavProps) {
  return (
    <div className="flex flex-row gap-1 justify-between items-center  w-full ">
      <Button
        onClick={prev}
        type="button"
        className={`${
          stepIndex > 0 ? "block" : "opacity-0"
        } w-auto px-1 text-accent hover:text-primary bg-transparent hover:bg-transparent shadow-none cursor-pointer `}
        size="lg"
      >
        <ArrowLeft width={52} height={52} className="w-[50px] h-[50px]" />
      </Button>

      <span
        className={` ${
          enableNext ? `hidden` : `block`
        } text-xs w-auto text-primary`}
      >
        Select an option
      </span>

      <Button
        onClick={next}
        type="button"
        className={`${
          (!enableNext && "hidden") ||
          (stepIndex === totalQuestions - 1 && `hidden`)
        } w-full max-w-[110px] lg:max-w-[150px] px-6 text-background cursor-pointer`}
        size="lg"
      >
        Continue
      </Button>

      <Button
        type="submit"
        form={formId}
        className={`${
          stepIndex === totalQuestions - 1 ? "block" : "hidden"
        } w-full max-w-[110px] lg:max-w-[150px] px-6 text-background cursor-pointer`}
        size="lg"
      >
        Submit
      </Button>
    </div>
  );
}
