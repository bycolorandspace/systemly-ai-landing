interface ContactListResponse {
  contactList?: {
    id: string;
    contact: string;
    list: string;
    status: string;
  };
}

interface ActiveCampaignField {
  name?: string;
  id?: string;
  title?: string;
  type?: string;
}

// API Configuration
const AC_API_URL = process.env.ACTIVECAMPAIGN_API_URL;
const AC_API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;

// You'll need to get these IDs from your ActiveCampaign setup:

//const WHITELIST_LIST_ID = "4";
const NEWSLETTER_LIST_ID = "5";
//NEWSLETTER SIGN UP ============================/

export async function sendNewUserToNewsLetter(data: {
  email: string;
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
  console.log("📤 Sending to newsletter...");
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
        email: data.email,
      },
    };

    // Create/update contact
    const contactResponse = await fetch(`${AC_API_URL}/api/3/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": AC_API_KEY,
      },
      body: JSON.stringify(contactPayload),
    });

    console.log("📤 Sending contact to ActiveCampaign...");

    const contactResult = await contactResponse.json();

    if (!contactResponse.ok) {
      console.error(
        "❌ ActiveCampaign contact creation failed:",
        contactResult
      );
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

    console.log(`✅ Contact created/updated with ID: ${contactId}`);

    // Add contact to the newsletter list
    const listAssignResult = await addToList(contactId, NEWSLETTER_LIST_ID);
    if (!listAssignResult.success) {
      return listAssignResult;
    }

    console.log(`✅ Contact added to newsletter list successfully`);

    return { success: true, contactId };
  } catch (error) {
    console.error("❌ ActiveCampaign API error:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Problem signing up to newsletter",
    };
  }
}

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

    console.log(`📤 Adding contact ${contactId} to list with id ${listID}...`);

    const listResponse = await fetch(`${AC_API_URL}/api/3/contactLists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Token": AC_API_KEY!,
      },
      body: JSON.stringify(listPayload),
    });

    const listResult: ContactListResponse = await listResponse.json();

    if (!listResponse.ok) {
      console.error("❌ Failed to add contact to list:", listResult);
      return { success: false, error: "Failed to add contact to list" };
    }

    console.log("✅ Contact added to list successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ List assignment error:", error);
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

    console.log("📋 YOUR ACTIVECAMPAIGN LISTS:");
    lists.lists?.forEach((list: ActiveCampaignField) => {
      console.log(`  "${list.name}": ID = ${list.id}`);
    });

    console.log("\n📋 YOUR ACTIVECAMPAIGN CUSTOM FIELDS:");
    fields.fields?.forEach((field: ActiveCampaignField) => {
      console.log(`  "${field.title}": ID = ${field.id} (${field.type})`);
    });
  } catch (error) {
    console.error("Failed to fetch ActiveCampaign IDs:", error);
  }
}
