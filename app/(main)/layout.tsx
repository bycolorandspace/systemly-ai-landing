import type { Metadata, Viewport } from "next";
import {
  // Geist,
  // Geist_Mono
  Inter,
  Space_Grotesk,
} from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Metadata_ } from "@/data/site-copy";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = Metadata_;

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
          {/* HEADER */}
          <Header />
          {children}
          {/* Footer */}
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
