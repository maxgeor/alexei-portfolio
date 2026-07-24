import type { Metadata } from "next";
import { ExhibitionContent } from "@/components/ExhibitionContent";
import { JsonLd } from "@/components/JsonLd";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { exhibitionJsonLd } from "@/lib/structured-data";

const title = `${siteConfig.name} — Exhibition Views`;

export const metadata: Metadata = {
  title: "Exhibition Views",
  description: pageDescriptions.exhibitions,
  alternates: {
    canonical: "/exhibitions",
  },
  openGraph: {
    title,
    description: pageDescriptions.exhibitions,
    url: "/exhibitions",
    type: "website",
  },
  twitter: {
    title,
    description: pageDescriptions.exhibitions,
  },
};

export default function ExhibitionsPage() {
  return (
    <main className="site-shell pb-[20px]">
      <JsonLd data={exhibitionJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <ExhibitionContent />
    </main>
  );
}
