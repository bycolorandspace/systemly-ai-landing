"use client";
import {
  autimlyTherapistOnboardingSchema,
  TherapistOnboardingValues,
} from "@/schema/partner-form-schema";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import FormNavigation from "../../form-navigation";
import { usePartnerFormContext } from "@/context/partner-onboarding-context";
import FormButton from "@/components/common/form-button";

import { toast } from "sonner";
import { getErrorsWithInfo } from "./form-error-map";
import { useTherapistOnboarding } from "@/hooks/useTherapistOnboarding";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useState } from "react";
// import { TherpistCertifactes } from "@/lib/services/therapistOnboardingService";

// import { useState } from "react";

interface FormLayoutProps {
  children: React.ReactNode;
  schema: typeof autimlyTherapistOnboardingSchema;
}

export default function FormLayout({ children, schema }: FormLayoutProps) {
  const methods = useForm<TherapistOnboardingValues>({
    resolver: zodResolver(schema),
    // defaultValues: generateRandomTherapistData(), // Initialize with random data
    mode: "onChange", // Validate on change
    reValidateMode: "onChange", // Re-validate on change
    criteriaMode: "all", // Collect all errors
  });

  const { trackFormBegin, trackFormComplete } = useAnalytics();
  const [hasStarted, setHasStarted] = useState(false);

  const {
    questionIndex,
    isSubmitting,
    totalQuestions,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    toggleFormSubmitted,
  } = usePartnerFormContext();

  const {
    submitApplication,
    // error,
    //fileUrls,
  } = useTherapistOnboarding();
 
  // Handle form submission
  const handleSubmit = async (data: TherapistOnboardingValues) => {
    // console.log("📋 Form data before submission:", data);
    //  console.log("📁 Files detected:", {
    //   qualifications: data.qualificationsCertificates?.[0]?.name,
    //   registration: data.professionalRegistration?.[0]?.name,
    //   dbs: data.dbsCertificate?.[0]?.name,
    //   insurance: data.insuranceCertificate?.[0]?.name,
    //   photo: data.profilePhoto?.[0]?.name,
    // });

    // Check for validation errors
    const validation = autimlyTherapistOnboardingSchema.safeParse(data);

    if (!validation.success) {
      //console.error("❌ Validation failed:", validation.error.issues);
      validation.error.issues.forEach((issue) => {
        // console.log(`Field: ${issue.path.join(".")} - Error: ${issue.message}`);
        toast.error(`Error in ${issue.path.join(".")}: ${issue.message}`);
      });
      return;
    }

    // console.log("✅ Validation passed, submitting...");
    const results = await submitApplication(data); // Submit to Supabase

    // After application has been submitted to database successfully
    if (results.success) {
      // console.log("Full successful onboarding results:", results);
      trackFormComplete("therapy_onboarding", true);
      toggleFormSubmitted();
      // sendDataToActiveCampaign(data, fileUrls || {});
    } else {
      trackFormComplete("therapy_onboarding", false, results?.error);
      toast.error((results?.error as string) || "Failed to submit application");
      //console.error("❌ Submission error:", results?.error);
    }
  };

  const handleFocus = () => {
    if (!hasStarted) {
      trackFormBegin("therapy_onboarding");
      setHasStarted(true);
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <FormProvider {...methods}>
        {" "}
        <Form {...methods}>
          <form
            onFocus={handleFocus}
            onSubmit={methods.handleSubmit(handleSubmit, (errors) => {
              // const errorCount = Object.keys(errors).length;

              const errorsWithInfo = getErrorsWithInfo(errors);

              if (errorsWithInfo.length === 1) {
                const error = errorsWithInfo[0];
                toast.error(`Error in ${error.section}`, {
                  description: `${error.label}: ${error.message}`,
                  action: {
                    label: `Go to ${error.section}`,
                    onClick: () => {
                      goToQuestion(error.stepIndex!, error.questionIndex!);
                    },
                  },
                });
              } else {
                // Show grouped errors by section
                const sections = [
                  ...new Set(errorsWithInfo.map((e) => e.section)),
                ];
                toast.error(`${errorsWithInfo.length} Validation Errors`, {
                  description: `Errors in: ${sections.join(", ")}`,
                  action: {
                    label: "View Errors",
                    onClick: () => {
                      // Optionally, you can implement a way to navigate to the first error
                      const firstError = errorsWithInfo[0];
                      goToQuestion(
                        firstError.stepIndex!,
                        firstError.questionIndex!
                      );
                    },
                  },
                });
              }
            })}
            className="flex flex-col w-full h-full"
          >
            <div className="flex flex-col gap-4 w-full  mx-auto items-center justify-center">
              <div className="w-full">
                {/* FORM RENDERING */}
                <div className="boxContainer w-full">{children}</div>

                {/* FORM CONTROLS */}
                {
                  <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
                    <FormNavigation
                      questionIndex={questionIndex}
                      totalQuestions={totalQuestions}
                      next={nextQuestion}
                      prev={prevQuestion}
                    />

                    {/* <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button> */}

                    <FormButton
                      type="submit"
                      disabled={isSubmitting}
                      hidden={questionIndex !== totalQuestions - 1}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </FormButton>
                  </div>
                }
              </div>
            </div>
          </form>
        </Form>{" "}
      </FormProvider>
    </div>
  );
}
