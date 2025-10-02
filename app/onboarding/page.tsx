"use client";

import Logo from "@/components/common/logo";
import FormNavigation from "@/components/forms/form-navigation";
import FormProgressBar from "@/components/forms/form-progress-bar";
import FormStep from "@/components/forms/form-step";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOnboardingFormContext } from "@/context/user-onboarding-context";
import onboardingFlow from "@/data/onboarding-data";
import {
  OnboardingDataValues,
  OnboardingSchema,
} from "@/schema/onboarding-schema";
import { OnboardingFlow, Step } from "@/types/onboarding-types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { toast } from "sonner";

export default function OnboardingPage() {
  const {
    nextQuestion,
    totalQuestions,
    prevQuestion,
    stepIndex,
    toggleSubmit,
    error,
  } = useOnboardingFormContext();

  const onboarding: OnboardingFlow = onboardingFlow as OnboardingFlow;

  const methods = useForm<OnboardingDataValues>({
    resolver: zodResolver(OnboardingSchema),
    // defaultValues: generateRandomTherapistData(), // Initialize with random data
    mode: "onChange", // Validate on change
    reValidateMode: "onChange", // Re-validate on change
    criteriaMode: "all", // Collect all errors
  });

  // Handle form submission
  const handleSubmit = async (data: OnboardingDataValues) => {
    // Call APIonboarding api route
    console.log("📋 Onboarding form data before submission:", data);

    await toggleSubmit(data);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Form submitted successfully!");
    }
  };

  // const handleFocus = () => {
  //   if (!hasStarted) {
  //     trackFormBegin("therapy_onboarding");
  //     setHasStarted(true);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-start justify-center w-full">
      <header className="flex fixed z-50 w-full">
        <div
          className={`flex flex-col md:flex-row md:justify-between justify-center items-center w-full  max-w-5xl gap-4  py-4 md:py-2 mx-6 lg:mx-auto mt-8 backdrop-blur-md bg-white/20 border border-black/10 rounded-2xl px-4 `}
        >
          <Logo />

          <FormProgressBar
            totalQuestions={totalQuestions}
            stepIndex={stepIndex}
          />
        </div>
      </header>
      <div className="text-center mt-60 md:mt-40 w-full  p-4   ">
        <div>
          {/* Render only current step */}

          <FormProvider {...methods}>
            {" "}
            <Form {...methods}>
              <form
                id="onboarding-form"
                onSubmit={methods.handleSubmit(handleSubmit)}
                className="flex flex-col w-full h-full space-y-8"
              >
                <RenderStep {...onboarding.steps[stepIndex]} />
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
      <footer className="flex fixed bottom-0 z-50 w-full ">
        <div className="flex justify-center items-center w-full  max-w-5xl  py-4 px-4 mx-6 lg:mx-auto   mb-8 backdrop-blur-md bg-white/20 border border-black/10 rounded-2xl  ">
          <FormNavigation
            stepIndex={stepIndex}
            totalQuestions={totalQuestions}
            enableNext={onboarding.steps[stepIndex].input !== "radio"}
            enableSubmit={methods.formState.isValid}
            next={nextQuestion}
            prev={prevQuestion}
          />
        </div>
      </footer>
    </div>
  );
}

const RenderStep = (step: Step) => {
  const { register } = useFormContext();
  return (
    <div className="  w-full max-w-5xl mx-auto h-auto mb-20">
      {/* Step meta */}
      <div className="flex  flex-col max-w-4xl gap-6 mb-4 mx-auto">
        <h1 className="heading">{step.title}</h1>
        <p className="text-xl text-primary ">{step.subtitle}</p>
        <p className=" text-lg text-secondary ">{step.description}</p>
      </div>

      {/* Step content */}
      <div className="space-y-8">
        {/* Show header */}
        {step.content && (
          <div className="flex flex-col gap-6">
            {step.content.headline && (
              <h3 className="text-secondary font-normal text-4xl">
                {step.content.headline}
              </h3>
            )}
            {step.content.body && (
              <p className="text-secondary text-md">{step.content.body}</p>
            )}
            {/* {step.content.cta && <CTAButton label={step.content.cta.text} />} */}
          </div>
        )}
        {/* Show options */}
        {step.options && step.type === "question" ? (
          <FormStep step={step} />
        ) : (
          // Show content
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 py-12 ">
            {/* Left side -  image OR Form*/}
            <div className="col-span-1 flex flex-col justify-start w-full items-start gap-4">
              {
                // If form is available, show form other wise show image and options
                step.type === "form"
                  ? step.formFields &&
                    step.formFields.map((field, index) => (
                      <div key={index} className="w-full">
                        {/* Render form field based on type */}
                        {
                          field.type === "text" ? (
                            <div className="flex flex-col gap-4">
                              <Label className="text-xl" htmlFor={field.name}>
                                {field.label}
                              </Label>
                              <Input
                                id={field.name}
                                className="w-full border-primary border-2 shadow-none py-5 text-primary space-grotesk-font"
                                placeholder={field.placeholder}
                                {...(field.required ? { required: true } : {})}
                                {...register(
                                  field.name as keyof OnboardingDataValues
                                )}
                              />
                            </div>
                          ) : field.type === "email" ? (
                            <div className="flex flex-col gap-4">
                              <Label className="text-xl" htmlFor={field.name}>
                                {field.label}
                              </Label>
                              <Input
                                type="email"
                                className="w-full border-primary border-2 shadow-none py-5 text-primary space-grotesk-font"
                                id={field.name}
                                placeholder={field.placeholder}
                                {...(field.required ? { required: true } : {})}
                                {...register(
                                  field.name as keyof OnboardingDataValues
                                )}
                              />
                            </div>
                          ) : field.type === "select" ? (
                            <div className="flex flex-col gap-4">
                              <Label className="text-xl" htmlFor={field.name}>
                                {field.label}
                              </Label>
                              <Select>
                                <SelectTrigger className="w-full md:max-w-[250px] border-primary border-2 shadow-none py-5 text-primary space-grotesk-font">
                                  <SelectValue placeholder={field.label} />
                                </SelectTrigger>
                                <SelectContent>
                                  {field.options &&
                                    field.options.map((option, index) => (
                                      <SelectItem key={index} value={option}>
                                        {option}
                                      </SelectItem>
                                    ))}
                                </SelectContent>
                              </Select>
                            </div>
                          ) : null // Handle other field types as needed
                        }
                      </div>
                    ))
                  : step.image?.url && (
                      <Image
                        src={step.image?.url || "/placeholder-image.png"}
                        alt={step.image?.alt || "Step Image"}
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-full object-cover"
                      />
                    )
              }
            </div>

            {/* Right side - Lists  */}
            <div className="order-first md:order-last col-span-1 flex flex-col justify-start items-start gap-4">
              {step.options &&
                step.options.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="relative max-w-[85%] ml-auto animate-messageSlideIn"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="bg-[#007AFF] px-4 py-2.5 flex flex-row gap-2 text-left text-[15px] text-white rounded-[20px] rounded-br-[4px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                        <span className={"mr-2 text-3xl"}>
                          {option.emoji && option.emoji}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-lg leading-[1.4]">
                            {option.text}
                          </span>
                          {option.value && (
                            <span className="text-sm font-normal text-white/80 mt-0.5">
                              {option.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
