// app/api/get-ac-ids/route.ts
import { getActiveCampaignIds } from "@/lib/active-campaign";

export async function GET() {
  console.log("🔍 Fetching ActiveCampaign IDs...");
  await getActiveCampaignIds();
  return Response.json({
    message: "Check your server console for field and list IDs",
  });
}
