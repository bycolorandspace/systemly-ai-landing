"use client";

import onboardingFlow from "@/data/onboarding-data";
import {
  OnboardingDataValues,
  OnboardingSchema,
} from "@/schema/onboarding-schema";
import { createContext, useContext, useState } from "react";

type FormState = {
  stepIndex: number;
  totalQuestions: number;
  isSubmitting: boolean;
  formSubmitted: boolean;
  error?: string;
  toggleSubmit: (data: OnboardingDataValues) => void;
  toggleFormSubmitted: () => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (stepIndex: number) => void;
};

const OnboardingFormContext = createContext<FormState | undefined>(undefined);

export const OnboardingFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [stepIndex, setStepIndex] = useState(13);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const totalQuestions = onboardingFlow.steps.length;

  const toggleSubmit = async (data: OnboardingDataValues) => {
    console.log("Toggling submit state - PARTNER FORM DATA");

    const validation = OnboardingSchema.safeParse(data);
    if (!validation.success) {
      console.error("Validation errors:", validation.error.format());
      return;
    }

    try {
      console.log("Submitting form data:", data);
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);

      // Use response.json() directly, not response.text() first
      const result = await response.json();
      console.log("Parsed result:", result);

      if (result.success) {
        console.log("Form submitted successfully:", result);
        // Optionally, track form completion here
        // trackFormComplete("therapy_onboarding");
      } else {
        console.error("Form submission error:", result.error);
        setError(result.error || "An unknown error occurred.");
        if (result.details) {
          console.error("Validation details:", result.details);
          setError(result.details.email?._errors[0]);
        }
        // Optionally, show a user-friendly error message here
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError(
        "An error occurred while submitting the form. Please try again. " +
          error
      );
    }

    console.log("📋 Onboarding form data before submission:", data);

    setIsSubmitting((prev) => !prev);
  };

  const toggleFormSubmitted = () => {
    setFormSubmitted((prev) => !prev);
  };

  const goToQuestion = (stepIndex: number) => {
    // Set the step index and question index directly

    setStepIndex(stepIndex);

    // setStepIndex(
    //   onboardingFlow.steps
    //     .slice(0, stepIndex)
    //     .reduce(
    //       (acc, step) => acc + (step.options ? step.options.length : 0),
    //       0
    //     ) + questionIndex
    // );
  };

  const nextQuestion = () => {
    // Check if we're at the last question overall
    if (stepIndex >= totalQuestions - 1) return;

    // Increment the overall question index
    setStepIndex((prev) => prev + 1);
  };

  const prevQuestion = () => {
    // Check if we're at the first question overall
    if (stepIndex <= 0) return;

    // Decrement the overall question index
    setStepIndex((prev) => prev - 1);
  };

  return (
    <OnboardingFormContext.Provider
      value={{
        stepIndex,
        totalQuestions,
        isSubmitting,
        formSubmitted,
        error,
        toggleSubmit,
        toggleFormSubmitted,
        nextQuestion,
        prevQuestion,
        goToQuestion,
      }}
    >
      {children}
    </OnboardingFormContext.Provider>
  );
};

export const useOnboardingFormContext = () => {
  const context = useContext(OnboardingFormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
