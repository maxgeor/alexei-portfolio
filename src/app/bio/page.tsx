import type { Metadata } from "next";
import { BioContent } from "@/components/BioContent";
import { JsonLd } from "@/components/JsonLd";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { bioPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Bio",
  description: pageDescriptions.bio,
  alternates: {
    canonical: "/bio",
  },
  openGraph: {
    title: `Bio — ${siteConfig.name}`,
    description: pageDescriptions.bio,
    url: "/bio",
    type: "profile",
  },
  twitter: {
    title: `Bio — ${siteConfig.name}`,
    description: pageDescriptions.bio,
  },
};

export default function BioPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <JsonLd data={bioPageJsonLd()} />
      <h1 className="sr-only">Bio — {siteConfig.name}</h1>
      <BioContent />
    </main>
  );
}
