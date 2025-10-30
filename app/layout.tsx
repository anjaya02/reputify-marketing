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
  metadataBase: new URL("https://reputify-marketing.vercel.app"),
  title: "Reputify - AI Reputation Management for Sri Lankan Businesses",
  description:
    "Transform your business reputation with AI-powered monitoring and insights",
  openGraph: {
    url: "https://reputify-marketing.vercel.app",
    type: "website",
    title: "Reputify - AI Reputation Management for Sri Lankan Businesses",
    description:
      "Transform your business reputation with AI-powered monitoring and insights",
    siteName: "Reputify",
    images: [
      {
        url: "https://reputify-marketing.vercel.app/Cover.jpg",
        width: 1200,
        height: 630,
        alt: "Reputify - AI Reputation Management for Sri Lankan Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputify - AI Reputation Management for Sri Lankan Businesses",
    description:
      "Transform your business reputation with AI-powered monitoring and insights",
    images: ["https://reputify-marketing.vercel.app/Cover.jpg"],
  },
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
