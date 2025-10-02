import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { OnboardingFormProvider } from "@/context/user-onboarding-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: for CSS custom property
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", // Optional: for CSS custom property
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://systemly.ai"
  ),

  title: "Get Started - Customize Your AI Trading Setup | Systemly.ai",
  description:
    "Answer 12 quick questions to get personalized AI trade ideas. Join 2,847+ traders who stopped copying others blindly and started trading smarter. 2 minutes to better results.",
  keywords: [
    "trading onboarding",
    "personalized trading setup",
    "AI trading customization",
    "trading profile assessment",
    "copy trading alternative setup",
    "trading psychology assessment",
    "personalized trade ideas",
    "trading account setup",
    "AI trading waitlist",
    "custom trading strategy",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://systemly.ai/onboarding",
    siteName: "Systemly.ai",
    title: "Build Your Perfect Trading Setup - Systemly.ai",
    description:
      "2 minutes to customize your AI trading experience. Get trade ideas tailored to your goals, risk tolerance, and style.",
    images: [
      {
        url: "/og-onboarding.jpg",
        width: 1200,
        height: 630,
        alt: "Systemly.ai Onboarding - Customize Your Trading Experience",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@systemlyai",
    creator: "@systemlyai",
    title: "Customize Your AI Trading Setup | Systemly.ai",
    description: "2 minutes to personalized AI trade ideas",
    images: ["/twitter-onboarding.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  authors: [{ name: "Systemly.ai Team" }],
  creator: "Systemly.ai",
  publisher: "Systemly.ai",
  robots: "noindex, nofollow", // Prevent indexing of onboarding pages

  alternates: {
    canonical: "https://systemly.ai/onboarding",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-inter    antialiased`}
      >
        <div className="min-h-screen bg-white text-gray-900 landing">
          <OnboardingFormProvider>{children}</OnboardingFormProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
