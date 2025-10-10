"use client";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import CustomButton from "./common/custom-button";
import Socials from "./common/socials";
import TextInput from "./forms/text-input";
import AnimatedWrapper from "./common/AnimatedWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterFormSchema,
  NewsletterValues,
} from "@/schema/newsletter-schema";
import { useState } from "react";
import { NewsletterSectionType } from "@/types/site-copy-types";

export default function NewsletterSection({
  content,
}: {
  content: NewsletterSectionType;
}) {
  const { title, subheader, description, privacyNote } = content;
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
    console.log("🚀 onSubmit function called!");
    console.log("📋 Form values being sent:", data);

    try {
      setIsSubmitting(true);
      console.log("🌐 About to make fetch request to /api/newsletter/register");

      const activeCampaignResponse = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("📡 Fetch response received:", activeCampaignResponse);
      console.log("📊 Response status:", activeCampaignResponse.status);

      const activeCampaignResult = await activeCampaignResponse.json();
      if (activeCampaignResult.success) {
        console.log("🎉 Successfully added to the mailing list!");
        setFormSuccess(true);
        setIsSubmitting(false);
        form.reset();
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
    <section className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-20">
      <div className="flex flex-col items-center space-y-8">
        {formSuccess ? (
          // Animated Success Message
          <AnimatedWrapper animation="scaleIn" duration={600} easing="bounce">
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-2xl space-y-4">
              <h2 className="text-xl font-medium text-primary">
                Thank you for subscribing to our newsletter! 💌 😊 🚀
              </h2>
              <p className="text-secondary">
                You&apos;ll receive updates, content, and exclusive offers
                directly to your inbox. Stay tuned!
              </p>
            </div>
          </AnimatedWrapper>
        ) : (
          // Animated Form Header
          <div className="text-center space-y-4">
            <AnimatedWrapper animation="fadeIn" duration={600} delay={0}>
              <h3 className="text-sm text-secondary">{subheader}</h3>
            </AnimatedWrapper>

            <AnimatedWrapper
              animation="fadeInUp"
              duration={800}
              delay={100}
              easing="spring"
            >
              <h2 className="heading headerh2">{title}</h2>
            </AnimatedWrapper>

            <AnimatedWrapper
              animation="fadeInUp"
              duration={800}
              delay={200}
              easing="spring"
            >
              <p className="max-w-xl text-secondary mx-auto">{description}</p>
            </AnimatedWrapper>
          </div>
        )}

        {/* Animated Form */}
        <AnimatedWrapper
          animation="fadeInUp"
          duration={700}
          delay={300}
          easing="spring"
        >
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
                  <AnimatedWrapper animation="fadeIn" duration={400}>
                    <div className="border border-red-400 bg-red-100 p-4 rounded-lg mt-4 w-full max-w-md">
                      <p className="text-red-500">{error}</p>
                    </div>
                  </AnimatedWrapper>
                )}
              </form>
            </Form>

            <AnimatedWrapper animation="fadeIn" duration={600} delay={400}>
              <p className="text-sm text-secondary mt-4">{privacyNote}</p>
            </AnimatedWrapper>
          </div>
        </AnimatedWrapper>

        {/* Animated Socials */}
        <AnimatedWrapper
          animation="fadeInUp"
          duration={700}
          delay={500}
          easing="spring"
        >
          <Socials />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
