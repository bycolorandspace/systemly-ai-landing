"use client";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomButton from "./common/custom-button";
import Socials from "./common/socials";
import TextInput from "./forms/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterFormSchema,
  NewsletterValues,
} from "@/schema/newsletter-schema";
import { useState } from "react";

export default function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: NewsletterValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    // 🔥 ADD THIS FIRST
    console.log("🚀 onSubmit function called!");
    console.log("📋 Form values being sent:", data);

    try {
      setIsSubmitting(true);
      // 🔥 ADD THIS TOO
      console.log("🌐 About to make fetch request to /api/newsletter/register");

      const activeCampaignResponse = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // 🔥 AND THIS
      console.log("📡 Fetch response received:", activeCampaignResponse);
      console.log("📊 Response status:", activeCampaignResponse.status);

      const activeCampaignResult = await activeCampaignResponse.json();
      if (activeCampaignResult.success) {
        console.log("🎉 Successfully added to the mailing list!");
        // Show success message
        setFormSuccess(true);
        setIsSubmitting(false);
        form.reset(); // Reset the form after successful submission
      } else {
        setIsSubmitting(false);
        setError(
          "Failed to add to mailing list. " + activeCampaignResult.error
        );
        console.error(
          "❌ Newsletter addition error:",
          activeCampaignResult?.error
        );
        return;
      }
    } catch (error) {
      console.error("❌ Error sending application:", error);
      setIsSubmitting(false);
      return;
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 min-h-screen">
      <div className="flex flex-col items-center space-y-8">
        {formSuccess ? (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-2xl space-y-4">
            <h2 className="text-xl font-medium text-primary  ">
              Thank you for subscribing to our newsletter! 💌 😊 🚀
            </h2>
            <p className="text-secondary">
              You&apos;ll receive updates, content, and exclusive offers
              directly to your inbox. Stay tuned!
            </p>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-sm text-secondary  ">Systemly.ai newsletter</h3>
            <h2 className="text-4xl font-medium text-primary  ">
              Join for updates, content & exclusives
            </h2>
            <p className="max-w-xl text-secondary">
              Join 1000+ traders waiting for launch. Early users get lifetime
              50% discount and priority support. Limited spots available.
            </p>
          </div>
        )}

        <div>
          <Form {...form}>
            <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
              <TextInput
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-border rounded-lg w-full max-w-md"
                name={"email"}
                label={"Email"}
              />
              <CustomButton
                label="Subscribe"
                status={isSubmitting ? "submitting" : "active"}
                type="submit"
                color="default"
                customClass="text-white"
              />
              {error && (
                <div className="border border-red-400 bg-red-100 p-4 rounded-lg mt-4 w-full max-w-md">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
            </form>
          </Form>{" "}
          {/* <form className="flex flex-col items-center space-y-4">
            
          </form> */}
          <p className="text-sm text-secondary mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
        {/* Socials */}
        <Socials />
      </div>
    </section>
  );
}
