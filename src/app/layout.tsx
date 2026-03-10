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
  title: "TryOn — AI-Powered Virtual Fashion Try-On",
  description:
    "Virtual try-on technology with AI styling recommendations. Personalized avatars, color theory matching, and 50+ premium fashion brand integrations across Europe.",
  openGraph: {
    title: "TryOn — AI-Powered Virtual Fashion Try-On",
    description:
      "Virtual try-on technology with AI styling recommendations. Personalized avatars, color theory matching, and 50+ premium fashion brand integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
