import { z } from "zod";

export const OnboardingSchema = z.object({
  // Required question responses
  experience_level: z.string().min(1, "Please select your experience level"),
  account_size: z.string().min(1, "Please select your account size"),
  trading_style: z.string().min(1, "Please select your trading style"),
  trading_goals: z.string().min(1, "Please select your trading goals"), // Note: should be string, not array
  biggest_challenge: z.string().min(1, "Please select your biggest challenge"),
  current_tools: z
    .array(z.string())
    .min(1, "Please select at least one current tool"),
  copy_trading_experience: z
    .string()
    .min(1, "Please select how you get trade ideas"),
  willingness_to_pay: z.string().min(1, "Please select a price range"),

  // Required form fields (only for final submission)
  email: z.string().email("Please enter a valid email address"),
  first_name: z.string().min(1, "Please enter your first name"),

  // Optional fields
  last_name: z.string().optional(),
  referral: z.string().optional(),
});

export type OnboardingDataValues = z.infer<typeof OnboardingSchema>;

// import { z } from "zod";

// export const OnboardingSchema = z.object({
//   // Required question responses
//   experience_level: z
//     .string()
//     .min(1, "Please select your experience level")
//     .optional(),
//   account_size: z.string().min(1, "Please select your account size").optional(),
//   trading_style: z
//     .string()
//     .min(1, "Please select your trading style")
//     .optional(),
//   trading_goals: z
//     .string()
//     .min(1, "Please select your trading goals")
//     .optional(), // Note: should be string, not array
//   biggest_challenge: z
//     .string()
//     .min(1, "Please select your biggest challenge")
//     .optional(),
//   current_tools: z
//     .array(z.string())
//     .min(1, "Please select at least one current tool")
//     .optional(),
//   copy_trading_experience: z
//     .string()
//     .min(1, "Please select how you get trade ideas")
//     .optional(),
//   willingness_to_pay: z
//     .string()
//     .min(1, "Please select a price range")
//     .optional(),

//   // Required form fields (only for final submission)
//   email: z.string().email("Please enter a valid email address").optional(),
//   first_name: z.string().min(1, "Please enter your first name").optional(),

//   // Optional fields
//   last_name: z.string().optional(),
//   referral: z.string().optional(),
// });

// export type OnboardingDataValues = z.infer<typeof OnboardingSchema>;
