import type { Metadata, Viewport } from "next";
import {
  // Geist,
  // Geist_Mono
  Inter,
  Space_Grotesk,
} from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", // Optional: for CSS custom property
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: for CSS custom property
});

// Separate viewport export (new Next.js requirement)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B82F6",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://systemly.ai"
  ),
  // Basic SEO
  title: "Systemly.ai - AI Generated Trade Ideas & Analysis",
  description:
    "An intelligent alternative to blindly copying other traders. Get AI-generated trade ideas with automated analysis, risk management, and psychology tools.",
  keywords: [
    "AI trade ideas",
    "automated trading signals",
    "trading AI",
    "algorithmic trading",
    "trade analysis",
    "forex signals",
    "stock trading ideas",
    "trading psychology",
    "copy trading",
    "social trading",
    "mirror trading",
    "follow traders",
    "trade copier",
    "copy trader signals",
    "professional trader signals",
    "trading mentorship",
    "signal provider",
    "trading community",
    "verified traders",
    "trade replication",
    "auto copy trading",
    "signal service",
    "trading education",
    "learn from traders",
  ],

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://systemly.ai",
    siteName: "Systemly.ai",
    title: "Systemly.ai - AI Generated Trade Ideas",
    description:
      "An intelligent alternative to blindly copying other traders. AI-generated trade ideas with instant analysis and risk assessment.",
    images: [
      {
        url: "/og-image.jpg", // Will resolve to https://systemly.ai/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Systemly.ai AI Trading Platform",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@systemlyai",
    creator: "@systemlyai",
    title: "Systemly.ai - AI Generated Trade Ideas",
    description: "An intelligent alternative to blindly copying traders",
    images: ["/twitter-image.jpg"], // Will resolve to https://systemly.ai/twitter-image.jpg
  },

  // Icons (favicons)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Additional metadata
  authors: [{ name: "Systemly.ai Team" }],
  creator: "Systemly.ai",
  publisher: "Systemly.ai",
  robots: "index, follow",

  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Systemly.ai",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "AI-powered trading analysis and trade ideas",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "2847",
      },
      description:
        "An intelligent alternative to blindly copying other traders",
    }),
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
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
