import type { Metadata } from "next";
import { BioContent } from "@/components/BioContent";
import { JsonLd } from "@/components/JsonLd";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { bioPageJsonLd } from "@/lib/structured-data";

const title = `${siteConfig.name} — Bio`;

export const metadata: Metadata = {
  title: "Bio",
  description: pageDescriptions.bio,
  alternates: {
    canonical: "/bio",
  },
  openGraph: {
    title,
    description: pageDescriptions.bio,
    url: "/bio",
    type: "profile",
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
  },
  twitter: {
    title,
    description: pageDescriptions.bio,
  },
};

export default function BioPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <JsonLd data={bioPageJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <BioContent />
    </main>
  );
}
