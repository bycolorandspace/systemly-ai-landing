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
import { ArrowRight, DownloadIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          className={`flex flex-col md:flex-row md:justify-between justify-center items-center w-full  max-w-5xl gap-4  py-2 mx-6 lg:mx-auto mt-8 backdrop-blur-md bg-white/20 border border-black/10 rounded-2xl px-4 `}
        >
          <Logo />
          <div className="hidden sm:flex max-w-[300px] w-full">
            <FormProgressBar
              totalQuestions={totalQuestions}
              stepIndex={stepIndex}
            />
          </div>
        </div>
      </header>
      <div className="text-center mt-30 md:mt-40 w-full  p-4 space-y-4  ">
        <div className="flex md:hidden">
          <FormProgressBar
            totalQuestions={totalQuestions}
            stepIndex={stepIndex}
          />
        </div>

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
                <RenderStep
                  {...onboarding.steps[stepIndex]}
                  stepIndex={stepIndex}
                />
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
      <footer className="flex fixed bottom-0 z-50 w-full ">
        <div className="flex justify-center items-center w-full  max-w-5xl  py-4 px-4 mx-6 lg:mx-auto   mb-8 backdrop-blur-md bg-white/50 border border-black/10 rounded-2xl  ">
          <FormNavigation
            stepIndex={stepIndex}
            totalQuestions={totalQuestions}
            enableNext={onboarding.steps[stepIndex].input !== "radio"}
            enableSubmit={methods.formState.isValid}
            formId="onboarding-form"
            next={nextQuestion}
            prev={prevQuestion}
          />
        </div>
      </footer>
    </div>
  );
}

const RenderStep = (props: Step & { stepIndex: number }) => {
  const { stepIndex, ...step } = props;
  const { nextQuestion } = useOnboardingFormContext();
  const { register } = useFormContext();
  return (
    <div className="  w-full max-w-5xl mx-auto h-auto mb-20">
      {/* Step meta */}
      <div className="flex  flex-col max-w-4xl gap-2 mx-auto mb-2">
        <h1 className="text-2xl font-bold">{step.title}</h1>
        <p className="text-sm md:text-sm max-w-xl mx-auto text-primary ">
          {step.subtitle}
        </p>
        {stepIndex === 0 && (
          <div className="relative">
            <Link href={"#"} onClick={nextQuestion}>
              <div className="md:absolute top-8 w-full md:max-w-[320px] flex flex-row md:left-1/2 md:-translate-x-1/2 text-md p-3 md:p-4 bg-accent text-background rounded-md">
                <DownloadIcon className="inline-block mr-4 w-8 h-8" />
                <span className="flex text-left w-full text-sm md:text-md">
                  {step.description}
                </span>
              </div>

              <Image
                src="/images/onboarding/trading-book-cover-mockup.jpg"
                alt="Welcome Illustration"
                width={1000}
                height={600}
                className="w-full h-auto mx-auto mt-4 rounded-2xl"
              />
            </Link>
          </div>
        )}
      </div>

      {/* Step content */}
      <div className="md:space-y-8">
        {/* Show header */}
        {step.content && (
          <div className="flex flex-col gap-6">
            {step.content.headline && (
              <h3 className="text-secondary font-normal text-xl">
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
          <div className="flex flex-col md:flex-row text-left justify-start items-start w-full max-w-[500px] md:max-w-4xl mx-auto  gap-4 py-4 ">
            {/* Left side -  image OR Form*/}
            <div className=" flex flex-col justify-start w-full md:w-1/2  items-start gap-4">
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
                  : null
              }

              <Button
                type="submit"
                // disabled={!enableSubmit}
                className={` flex flex-row justify-between w-full max-w-[90px] lg:max-w-[150px] px-4 text-background cursor-pointer`}
                size="lg"
              >
                Submit
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Right side - Lists  */}
            <div className="w-full md:w-1/2 order-first md:order-last col-span-1 flex flex-col justify-start items-start gap-4">
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
                          <span className="text-sm md:text-lg leading-[1.4]">
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
