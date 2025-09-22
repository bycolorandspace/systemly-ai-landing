// app/api/therapist/onboard/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sendNewUserToActiveCampaign } from "@/lib/active-campaign";
import {
  OnboardingDataValues,
  OnboardingSchema,
} from "@/schema/onboarding-schema";
import { signUpUser } from "@/lib/onboarding/userOnboardingService";

export async function POST(request: NextRequest) {
  try {
    console.log("🌐 API Route: Request received");

    const data = await request.json();

    const validationResult = OnboardingSchema.safeParse(data);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const validatedFormValues: OnboardingDataValues = validationResult.data;

    // Call your existing service without any modifications
    const result = await signUpUser(validatedFormValues);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "User sign-up failed",
        },
        { status: 500 }
      );
    }

    const activeCampaignResult = await sendNewUserToActiveCampaign(
      validatedFormValues
    );

    if (!activeCampaignResult.success) {
      console.warn("ActiveCampaign sync failed:", activeCampaignResult.error);
      return NextResponse.json(
        {
          success: false,
          error: "ActiveCampaign sync failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      userId: result.userId,
      userEmail: result.userEmail,
    });
  } catch (error) {
    //console.error("API Route error:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Onboarding failed",
      },
      { status: 500 }
    );
  }
}
