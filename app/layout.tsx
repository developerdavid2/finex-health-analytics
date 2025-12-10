// app/layout.tsx
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { Toaster } from "react-hot-toast";
import { AffiliateBanner } from "@/components/affiliate/affiliate-banner";
import { BannerProvider } from "@/contexts/banner-context";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finex-healthcare-analytics.vercel.app"),
  title: {
    default: "FINEX Healthcare Analytics and Informatics Consult",
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
    title: "FINEX Healthcare Analytics and Informatics Consult",
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
        <BannerProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#ffffff",
                color: "#1f2937",
                border: "1px solid #EEF2FF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                borderRadius: "12px",
                padding: "16px",
              },
            }}
          />
          <AffiliateBanner />
          <Navbar />
          {children}
          <WhatsAppButton />
          <Footer />
        </BannerProvider>
      </body>
    </html>
  );
}
