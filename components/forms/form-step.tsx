//import { useFormContext } from "react-hook-form";

import { Step, StepOption } from "@/types/onboarding-types";
import { RadioInput } from "./inputs/radio-input";
import { useFormContext } from "react-hook-form";
import { useOnboardingFormContext } from "@/context/user-onboarding-context";
import { useCallback, useEffect, useState } from "react";
import CheckBoxOnboardingInput from "./inputs/checkbox-onboarding-input";

import { FaCheck } from "react-icons/fa";
// Get data
// Any section prop, extract data
// Create relevant input

export default function FormStep({ step }: { step: Step }) {
  // Add this at the top of your component
  const { setValue, getValues } = useFormContext();
  const { nextQuestion } = useOnboardingFormContext();
  const [currentValue, setCurrentValue] = useState("");

  const isOptionSelected = useCallback(
    (step: Step) => {
      const formValue = getValues(step.category);

      for (const opt of step.options || []) {
        if (formValue === opt.value) {
          setCurrentValue(opt.text);
          return formValue === opt.value;
        }
      }
    },
    [getValues]
  );

  // Check form chosen form value and highlight button
  useEffect(() => {
    isOptionSelected(step);
  }, [isOptionSelected, step]);

  // Update your onClick function
  const handleOptionClick = (option: StepOption) => {
    // Set the form value directly
    setValue(step.category, option.value, { shouldValidate: true });
    setCurrentValue(option.text);
    console.log("Show form values: ", getValues());
    setTimeout(() => {
      nextQuestion();
    }, 500);
  };

  if (step.input === "radio") {
    // Radio
    {
      if (step.options && step.options.length > 0) {
        return (
          <div>
            {step.options &&
              step.options.map((option) => {
                return (
                  <div
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className={`${
                      currentValue === option.text && `bg-gray-300`
                    } w-full h-auto flex flex-row gap-2 justify-between items-center rounded-xl mb-4 px-6 py-8   bg-card   cursor-pointer hover:bg-gray-200`}
                  >
                    {" "}
                    <div className="flex flex-row gap-4 justify-start items-center">
                      <span className="text-4xl">{option.emoji}</span>{" "}
                      <span className="font-bold  text-left text-primary text-lg">
                        {option.text}
                      </span>
                    </div>
                    <span className="rounded-full bg-background w-6 h-6 border-1 border-boder  flex justify-center items-center">
                      {currentValue === option.text && (
                        <FaCheck className="text-accent w-4 h-4" />
                        // <div className="bg-primary w-2 h-2 rounded-full "></div>
                      )}
                    </span>
                  </div>
                );
              })}

            <div className="hidden">
              <RadioInput
                name={step.category}
                label={step.title}
                description={step.description || ""}
                required={true}
                options={
                  step.options ? step.options.map((option) => option.text) : []
                }
              />
            </div>
          </div>
        );
      }
    }
  } else if (step.input === "multi_select") {
    // Multi Select
    return (
      <div>
        {step.options && step.options.length > 0 ? (
          <div className="flex flex-col w-full max-w-4xl justify-center mx-auto">
            <CheckBoxOnboardingInput
              name={step.category}
              label={""}
              required={false}
              options={step.options ? step.options.map((opt) => opt.text) : []}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
