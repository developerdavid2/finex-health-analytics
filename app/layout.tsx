// app/layout.tsx
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finex-healthcare-analytics.vercel.app"),
  title: {
    default: "FINEX Healthcare Analytics",
    template: "%s | FINEX Healthcare",
  },
  description:
    "Empowering healthcare with advanced analytics and intelligent insights.",
  keywords: [
    "Healthcare Analytics",
    "Health Informatics",
    "Data Visualization",
    "Healthcare Decisions",
    "FINEX",
  ],
  authors: [
    {
      name: "FINEX Team",
      url: "https://finex-healthcare-analytics.vercel.app",
    },
  ],
  creator: "FINEX",
  openGraph: {
    title: "FINEX Healthcare Analytics",
    description:
      "Empowering healthcare with advanced analytics and intelligent insights.",
    url: "https://finex-healthcare-analytics.vercel.app",
    siteName: "FINEX Healthcare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FINEX Healthcare Analytics",
    description: "Unlock smarter healthcare decisions through data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-[#EEF2FF]`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
