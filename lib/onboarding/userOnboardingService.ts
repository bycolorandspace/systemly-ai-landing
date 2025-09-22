"use server";

import { OnboardingDataValues } from "@/schema/onboarding-schema";
import { supabaseAdmin } from "../supabase";

// Generate a random password for the new user
const generateRandomPassword = () => {
  return (
    Math.random().toString(36).slice(-12) +
    Math.random().toString(36).slice(-12)
  );
};

export interface authResults {
  success: boolean;
  error?: string;
  userId?: string;
  userEmail?: string;
}

export const signUpUser = async (
  formData: OnboardingDataValues
): Promise<authResults> => {
  if (!supabaseAdmin) {
    console.warn("Supabase not initialized");
    return {
      success: false,
      error: "Supabase not initialized",
    };
  }

  try {
    const { data: userData, error: createUserError } =
      await supabaseAdmin.auth.admin.createUser({
        email: formData.email,
        password: generateRandomPassword(),
        //email_confirm: true, // Skip email verification
        user_metadata: {
          full_name: formData.first_name + " " + formData.last_name,
        },
      });

    if (!createUserError) {
      saveOnboardingData(userData.user?.id || "", formData);
      return {
        success: true,
        userId: userData.user?.id || "",
        userEmail: userData.user?.email || "",
      };
    } else {
      console.error("❌ User creation error:", createUserError);
      return {
        success: false,
        error: createUserError.message || "Failed to create user",
      };
    }
  } catch (error) {
    console.error("❌ Sign up error:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

export const saveOnboardingData = async (
  userId: string,
  formData: OnboardingDataValues
) => {
  if (!supabaseAdmin) {
    console.warn("Supabase not initialized");
    return { success: false, error: "Supabase not initialized" };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("onboarding_responses")
      .insert([
        {
          user_id: userId,
          experience_level: formData.experience_level,
          account_size: formData.account_size,
          trading_style: formData.trading_style,
          biggest_challenge: formData.biggest_challenge,
          current_tools: formData.current_tools,
          trading_goals: formData.trading_goals,
          willingness_to_pay: formData.willingness_to_pay,
          first_name: formData.first_name,
          last_name: formData.last_name,
          referral: formData.referral,
          email: formData.email,
        },
      ]);

    if (error) {
      console.error("❌ Error saving onboarding data:", error);
      return { success: false, error: error.message };
    }
    console.log("✅ Onboarding data saved:", data);
    return { success: true };
  } catch (error) {
    console.error("❌ Exception saving onboarding data:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};
