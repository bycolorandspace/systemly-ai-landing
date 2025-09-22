// File: lib/activecampaign.ts
// ActiveCampaign API integration utilities

import { OnboardingDataValues } from "@/schema/onboarding-schema";

import type {
  ActiveCampaignField,
  // ActiveCampaignField,
  ActiveCampaignTherapistApiResponse,
  // ContactListResponse,
} from "./active-campaign-types";

// ActiveCampaign API Response Types

// API Configuration
const AC_API_URL = process.env.ACTIVECAMPAIGN_API_URL;
const AC_API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;

// You'll need to get these IDs from your ActiveCampaign setup:
const WHITELIST_LIST_ID = "4"; // General/Marketing list
const GENERAL_NEWSLETTER_LIST_ID = "5"; // Master/General list

const ONBOARDING_FIELD_IDS = {
  referralSource: "10",
  experienceLevel: "2",
  accountSize: "4",
  tradingStyle: "5",
  biggestChallenge: "6",
  willingnessToPlay: "7",
  tradingGoals: "8",
  currentTools: "9",
  // onboardingCompletionDate: "FIELD_ID_HERE",
  // leadSource: "FIELD_ID_HERE",
};

// Helper function to generate behavioral tags
function generateBehavioralTags(data: OnboardingDataValues): string[] {
  const tags = [];

  // Base completion tag
  tags.push("onboarding_complete");

  // Risk profile tags
  if (
    data.account_size === "under_1k" &&
    data.trading_goals?.includes("supplement_income")
  ) {
    tags.push("risk_conservative");
  } else if (data.trading_goals?.includes("quick_gains")) {
    tags.push("risk_aggressive");
  } else if (
    data.account_size === "10k_100k" ||
    data.account_size === "over_100k"
  ) {
    tags.push("risk_moderate");
  }

  // Behavioral segments
  if (
    data.experience_level === "complete_beginner" &&
    data.biggest_challenge === "no_system"
  ) {
    tags.push("education_needed");
  }

  if (
    data.experience_level === "experienced" &&
    data.willingness_to_pay !== "free_only"
  ) {
    tags.push("ready_to_upgrade");
  }

  if (
    data.account_size === "over_100k" &&
    data.willingness_to_pay === "over_100"
  ) {
    tags.push("high_value_prospect");
  }

  if (
    data.biggest_challenge === "emotional_trading" ||
    data.biggest_challenge === "analysis_paralysis"
  ) {
    tags.push("psychology_focus");
  }

  if (data.biggest_challenge === "time_management") {
    tags.push("automation_seeker");
  }

  // Value segments
  if (data.willingness_to_pay === "free_only") {
    tags.push("free_tier_only");
  } else if (data.willingness_to_pay === "over_100") {
    tags.push("premium_buyer");
  } else if (data.willingness_to_pay === "under_20") {
    tags.push("budget_conscious");
  }

  return tags;
}

//NEWSLETTER SIGN UP ============================/

// export async function sendNewUserToNewsLetter(
//   data: NewsletterValues
// ): Promise<{ success: boolean; contactId?: string; error?: string }> {
//   // console.log("📤 Sending to newsletter...");
//   // Check API credentials
//   if (!AC_API_URL || !AC_API_KEY) {
//     return {
//       success: false,
//       error: "ActiveCampaign credentials not configured",
//     };
//   }
//   try {
//     // Send details to api

//     const contactPayload = {
//       contact: {
//         email: data.email,
//       },
//     };

//     // Create/update contact
//     const contactResponse = await fetch(`${AC_API_URL}/api/3/contacts`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Api-Token": AC_API_KEY,
//       },
//       body: JSON.stringify(contactPayload),
//     });

//     // console.log("📤 Sending contact to ActiveCampaign...");

//     const contactResult: ActiveCampaignTherapistApiResponse =
//       await contactResponse.json();

//     if (!contactResponse.ok) {
//       // console.error(
//       //   "❌ ActiveCampaign contact creation failed:",
//       //   contactResult
//       // );
//       return {
//         success: false,
//         error: contactResult.errors?.[0]?.detail || "Failed to create contact",
//       };
//     }

//     const contactId = contactResult.contact?.id;
//     if (!contactId) {
//       return {
//         success: false,
//         error: "No contact ID returned from ActiveCampaign",
//       };
//     }

//     // console.log(`✅ Contact created/updated with ID: ${contactId}`);

//     // Add contact to the therapist list
//     const listAssignResult = await addToList(contactId, AUTIMLY_LIST_ID);
//     if (!listAssignResult.success) {
//       return listAssignResult;
//     }

//     // console.log(`✅ Contact added to newsletter list successfully`);

//     return { success: true, contactId };
//   } catch (error) {
//     // console.error("❌ ActiveCampaign API error:", error);
//     return {
//       success: false,
//       error:
//         error instanceof Error
//           ? error.message
//           : "Problem signing up to newsletter",
//     };
//   }
// }

//WHITELIST SIGN UP ============================/

/*
Add new user to Active campaign whitelist
*/
export async function sendNewUserToActiveCampaign(
  contactData: OnboardingDataValues
): Promise<{ success: boolean; contactId?: string; error?: string }> {
  // Check API credentials
  if (!AC_API_URL || !AC_API_KEY) {
    return {
      success: false,
      error: "ActiveCampaign credentials not configured",
    };
  }
  try {
    // Send details to api

    const contactPayload = {
      contact: {
        email: contactData.email,
        first_name: contactData.firstName,
        last_name: contactData.lastName,
        fieldValues: [
          // Personal Information
          // {
          //   field: ONBOARDING_FIELD_IDS.firstName,
          //   value: contactData.firstName,
          // },
          // {
          //   field: ONBOARDING_FIELD_IDS.lastName,
          //   value: contactData.lastName,
          // },
          {
            field: ONBOARDING_FIELD_IDS.referralSource,
            value: contactData.referral || "Not specified",
          },

          // Core Demographics
          {
            field: ONBOARDING_FIELD_IDS.experienceLevel,
            value: contactData.experience_level,
          },
          {
            field: ONBOARDING_FIELD_IDS.accountSize,
            value: contactData.account_size,
          },
          {
            field: ONBOARDING_FIELD_IDS.tradingStyle,
            value: contactData.trading_style,
          },
          {
            field: ONBOARDING_FIELD_IDS.biggestChallenge,
            value: contactData.biggest_challenge,
          },
          {
            field: ONBOARDING_FIELD_IDS.willingnessToPlay,
            value: contactData.willingness_to_pay,
          },

          // Multi-select fields (stored as comma-separated strings)
          {
            field: ONBOARDING_FIELD_IDS.tradingGoals,
            value: Array.isArray(contactData.trading_goals)
              ? contactData.trading_goals.join(", ")
              : contactData.trading_goals,
          },
          {
            field: ONBOARDING_FIELD_IDS.currentTools,
            value: Array.isArray(contactData.current_tools)
              ? contactData.current_tools.join(", ")
              : contactData.current_tools,
          },

          // Tracking
          // {
          //   field: ONBOARDING_FIELD_IDS.onboardingCompletionDate,
          //   value: new Date().toISOString().split("T")[0], // Format: YYYY-MM-DD
          // },
          // {
          //   field: ONBOARDING_FIELD_IDS.leadSource,
          //   value: "onboarding_form",
          // },
        ],
        tags: [""],
      },
    };

    // Generate behavioral tags based on onboarding data
    const behavioralTags = generateBehavioralTags(contactData);

    // Add tags to the payload
    if (behavioralTags.length > 0) {
      contactPayload.contact.tags = behavioralTags;
    }

    // Create/update contact
    const contactResponse = await fetch(`${AC_API_URL}/api/3/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": AC_API_KEY,
      },
      body: JSON.stringify(contactPayload),
    });

    // console.log("📤 Sending contact to ActiveCampaign...");

    const contactResult: ActiveCampaignTherapistApiResponse =
      await contactResponse.json();

    if (!contactResponse.ok) {
      // console.error(
      //   "❌ ActiveCampaign contact creation failed:",
      //   contactResult
      // );
      return {
        success: false,
        error: contactResult.errors?.[0]?.detail || "Failed to create contact",
      };
    }

    const contactId = contactResult.contact?.id;
    if (!contactId) {
      return {
        success: false,
        error: "No contact ID returned from ActiveCampaign",
      };
    }

    // console.log(`✅ Contact created/updated with ID: ${contactId}`);

    // Add contact to the therapist list
    const listAssignResult = await addToList(contactId, WHITELIST_LIST_ID);
    if (!listAssignResult.success) {
      return listAssignResult;
    }

    // console.log(`✅ Contact added to whitelist list successfully`);

    return { success: true, contactId };
  } catch (error) {
    // console.error("❌ ActiveCampaign API error:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Problem signing up to whitelist",
    };
  }
}

// GENERAL SIGNUP  ============================/

/**
 * Adds a contact to the any list (triggers automations)
 */
async function addToList(
  contactId: string,
  listID: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const listPayload = {
      contactList: {
        list: listID,
        contact: contactId,
        status: "1", // 1 = subscribed, 2 = unsubscribed
      },
    };

    // console.log(`📤 Adding contact ${contactId} to therapist list...`);

    const listResponse = await fetch(`${AC_API_URL}/api/3/contactLists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": AC_API_KEY!,
      },
      body: JSON.stringify(listPayload),
    });

    // const listResult: ContactListResponse = await listResponse.json();

    if (!listResponse.ok) {
      // console.error("❌ Failed to add contact to list:", listResult);
      return { success: false, error: "Failed to add contact to list" };
    }

    // console.log("✅ Contact added to list successfully");
    return { success: true };
  } catch (error) {
    //console.error("❌ List assignment error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "List assignment failed",
    };
  }
}

/**
 * Utility function to get your ActiveCampaign field and list IDs
 * Run this once to discover your actual IDs and update the constants
 */

export async function getActiveCampaignIds(): Promise<void> {
  if (!AC_API_URL || !AC_API_KEY) {
    console.error("ActiveCampaign credentials not configured");
    return;
  }

  try {
    // Get Lists
    const listsResponse = await fetch(`${AC_API_URL}/api/3/lists`, {
      headers: { "Api-Token": AC_API_KEY! },
    });
    const lists = await listsResponse.json();

    // Get Fields
    const fieldsResponse = await fetch(`${AC_API_URL}/api/3/fields`, {
      headers: { "Api-Token": AC_API_KEY! },
    });
    const fields = await fieldsResponse.json();

    // console.log("📋 YOUR ACTIVECAMPAIGN LISTS:");
    lists.lists?.forEach((list: ActiveCampaignField) => {
      console.log(`  "${list.name}": ID = ${list.id}`);
    });

    // console.log("\n📋 YOUR ACTIVECAMPAIGN CUSTOM FIELDS:");
    fields.fields?.forEach((field: ActiveCampaignField) => {
      console.log(`  "${field.title}": ID = ${field.id} (${field.type})`);
    });

    // console.log("\n🔧 UPDATE YOUR CONSTANTS:");
    // console.log("const WHITELIST_LIST_ID = 'YOUR_LIST_ID_HERE';");
    // console.log("const CUSTOM_FIELD_IDS = {");
    // console.log("  connectionToNeurodivergence: 'YOUR_FIELD_ID_HERE',");
    // console.log("  howDidYouHearAboutUs: 'YOUR_FIELD_ID_HERE',");
    // console.log("  primaryInterest: 'YOUR_FIELD_ID_HERE',");
    // console.log("  location: 'YOUR_FIELD_ID_HERE',");
    // console.log("  interestedInBetaTesting: 'YOUR_FIELD_ID_HERE',");
    // console.log("  signupDate: 'YOUR_FIELD_ID_HERE',");
    // console.log("};");
  } catch (error) {
    console.error("Failed to fetch ActiveCampaign IDs:", error);
  }
}
