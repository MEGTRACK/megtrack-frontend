import type { Metadata } from "next";
import { Saira, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { PreviewNote } from "@/components/layout/PreviewNote";
import { siteConfig } from "@/lib/config";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Courier & Cargo from India to Australia | MEGTRACK",
    template: "%s | MEGTRACK",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "MEGTRACK Freight Forwarding — India to Australia",
    description:
      "Pickup across India, clearance coordinated in Australia, delivery to every state.",
    url: siteConfig.url,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: ["IN", "AU"],
  };

  return (
    <html lang="en-AU" data-scroll-behavior="smooth" className={`${saira.variable} ${noto.variable}`}>
      <body className="font-body">
        <a href="#main" className="sr-only focus:not-sr-only sr-only-focusable">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileBar />
        <PreviewNote />
      </body>
    </html>
  );
}