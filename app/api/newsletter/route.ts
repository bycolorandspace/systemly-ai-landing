import { sendNewUserToNewsLetter } from "@/lib/newsletter/activeCampaign";
import {
  newsletterFormSchema,
  NewsletterValues,
} from "@/schema/newsletter-schema";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("🚀 Starting newsletter registration process...");

    // Step 1: Parse the request body
    const body: NewsletterValues = await req.json();
    const { email } = body;

    // ✅ Add these debug logs
    console.log("🔍 API received raw body:", body);
    console.log("🔍 API body type:", typeof body);
    console.log("🔍 API body keys:", Object.keys(body));

    console.log("📝 Validating form data...");
    const validationResult = newsletterFormSchema.safeParse(body);

    if (!validationResult.success) {
      console.error("❌ Validation failed:", validationResult.error.format());
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data: " + validationResult.error.message,
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // 🔥 ADD THIS LINE TO SEE IF WE GET HERE
    console.log(
      "🎯 About to call sendNewUserToNewsLetter with:",
      validatedData
    );

    const activeCampaignResult = await sendNewUserToNewsLetter(validatedData);

    // 🔥 ADD THIS LINE TOO
    console.log("🎯 sendNewUserToNewsLetter returned:", activeCampaignResult);

    if (!activeCampaignResult.success) {
      console.error(
        "❌ ActiveCampaign integration failed:",
        activeCampaignResult.error
      );
      return NextResponse.json(
        {
          success: false,
          error: activeCampaignResult.error,
        },
        { status: 500 }
      );
    }
    console.log(`🎉 Successfully added ${email} to newsletter!`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in whitelist registration route:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
