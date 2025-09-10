const SOCIALS = {
  tiktok: "https://www.tiktok.com/@systemlyai", // Corrected TikTok URL
  linkedIn: "https://www.linkedin.com/company/systemlyai", // Corrected LinkedIn URL
  facebook: "https://www.facebook.com/share/1CHs464vSh/?mibextid=wwXIfr", // Corrected Facebook URL
  instagram: "https://www.instagram.com/tradesystemlyai/", // Corrected Instagram URL
  X: "https://x.com/systemlyai?s=21",
  youtube: "https://www.youtube.com/@systemlyai",
};

// https://www.facebook.com/share/16xLvSvdtN/?mibextid=wwXIfr
// https://www.facebook.com/share/1CHs464vSh/?mibextid=wwXIfr

const PAGES = {
  home: "/",
  terms: "/terms",
  privacy: "/privacy",
  getStarted: "/onboarding",
  dashboard: "https://app.systemly.ai/dashboard",
  login: "https://app.systemly.ai/login",
  signUp: "https://app.systemly.ai/signup",
};

// Stripe links here
const PRICING = {
  standard: "price_1N7tY2Lz0pyluYxKXH3b6m5D", // $29/month
  pro: "price_1N7tZFLz0pyluYxKXH3b6m5D", // $79/month
  enterprise: "price_1N7tZFLz0pyluYxKXH3b6m5D", // Custom pricing
};

const NAV = {
  home: "/",
  about: "#about",
  features: "#features",
  pricing: "#pricing",
  faq: "#faq",
  community: SOCIALS.X, // Change to discord or forum later
  getStarted: PAGES.getStarted,
};

const AUTH = {
  login: "https://app.systemly.ai/login",
  signUp: "https://app.systemly.ai/signup",
  getStarted: "https://app.systemly.ai/get-started",
  dashboard: "https://app.systemly.ai/dashboard",
};

export { SOCIALS, AUTH, PAGES, NAV, PRICING };

// Social traffic to App user PIPELINE
// Video -> Socials -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Organic traffic to App user PIPELINE
// SEO/Blog -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Paid traffic to App user PIPELINE
// Ads -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Referral traffic to App user PIPELINE
// Referral -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Partnership traffic to App user PIPELINE
// Partnership -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Email traffic to App user PIPELINE
// Email Campaign -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Content traffic to App user PIPELINE
// Blog/Article -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Influencer traffic to App user PIPELINE
// Influencer Mention -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Event traffic to App user PIPELINE
// Event/Seminar/Webinar -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Affiliate traffic to App user PIPELINE
// Affiliate Link -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Direct traffic to App user PIPELINE
// Direct URL Entry -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// PR traffic to App user PIPELINE
// Press Release/Media Coverage -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Community traffic to App user PIPELINE
// Community Forum/Discussion -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User

// Video traffic to App user PIPELINE
// YouTube/TikTok/Instagram Reels -> Landing Page -> Sign Up (Get Started) -> Onboarding -> Dashboard -> Subscription -> Active User
