import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Reputify - AI Reputation Management for Sri Lankan Businesses",
  description:
    "AI-powered reputation management platform for Sri Lankan SMEs. Monitor reviews across Google, Facebook, LinkedIn, YouTube, and Reddit in Sinhala, Tamil, and English.",
  keywords: [
    "reputation management",
    "review monitoring",
    "Sri Lanka",
    "AI",
    "sentiment analysis",
    "business",
    "SME",
  ],
  authors: [{ name: "Team Y3-05" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Reputify - AI Reputation Management for Sri Lankan Businesses",
    description:
      "Transform your business reputation with AI-powered monitoring and insights",
    type: "website",
    images: ["/og-image.png"], // TODO: Create an OG image at public/og-image.png
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputify - AI Reputation Management for Sri Lankan Businesses",
    description:
      "Transform your business reputation with AI-powered monitoring and insights",
    images: ["/og-image.png"], // TODO: Create an OG image at public/og-image.png
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
