"use client";

// import { Badge } from "../ui/badge";

export default function FormProgressBar({
  totalQuestions,
  stepIndex,
}: {
  totalQuestions: number;
  stepIndex: number;
}) {
  const progressPercentage = ((stepIndex + 1) / totalQuestions) * 100; // Calculate the progress percentage
  return (
    <div className="flex flex-row justify-start items-center w-full md:max-w-[300px] mx-auto">
      {/* <Badge className="text-md bg-transparent text-primary">
        Step {stepIndex + 1} of {totalQuestions}
      </Badge> */}
      <div className=" w-full mx-4 md:mx-0">
        <div
          className="border-1 border-border rounded-2xl h-2 w-full p-2 flex items-center justify-start"
          style={{ width: "100%" }}
        >
          <div
            className="bg-accent h-1 rounded-2xl transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }} // This should be dynamic based on the current step
          ></div>
        </div>
      </div>
    </div>
  );
}
