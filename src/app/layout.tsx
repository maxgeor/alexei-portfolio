import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteHeader } from "@/components/SiteHeader";
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Painter`,
    template: `${siteConfig.name} — %s`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "art",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Painter`,
    description: siteConfig.description,
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Painter`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-dvh flex-col antialiased">
        <link rel="me" href={siteConfig.instagram} />
        <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
        <LanguageProvider>
          <ScrollToTop />
          <SiteHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
