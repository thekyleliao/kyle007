import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle007 - Your Hackathon Intelligence Agent",
  description: "Meet Kyle007, your elite hackathon intelligence agent. Get insider details about online hackathons and vibe coding with our AI-powered spy.",
  keywords: "hackathon, AI agent, vibe coding, Kyle007, voice assistant",
  authors: [{ name: "Kyle007 Intelligence" }],
  openGraph: {
    title: "Kyle007 - Your Hackathon Intelligence Agent",
    description: "Meet Kyle007, your elite hackathon intelligence agent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
