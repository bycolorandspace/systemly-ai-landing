import z from "zod";

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export type NewsletterValues = z.infer<typeof newsletterFormSchema>;
