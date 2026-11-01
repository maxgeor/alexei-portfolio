import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";
import { JsonLd } from "@/components/JsonLd";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { contactPageJsonLd } from "@/lib/structured-data";

const title = `${siteConfig.name} — Contact`;

export const metadata: Metadata = {
  title: "Contact",
  description: pageDescriptions.contact,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description: pageDescriptions.contact,
    url: "/contact",
    type: "website",
  },
  twitter: {
    title,
    description: pageDescriptions.contact,
  },
};

export default function ContactPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <JsonLd data={contactPageJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <ContactContent />
    </main>
  );
}
