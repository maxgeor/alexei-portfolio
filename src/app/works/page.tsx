import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { WorksGallery } from "@/components/WorksGallery";
import { recentWorks } from "@/data/content";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { worksItemListJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Recent Works",
  description: pageDescriptions.works,
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: `Recent Works — ${siteConfig.name}`,
    description: pageDescriptions.works,
    url: "/works",
    type: "website",
  },
  twitter: {
    title: `Recent Works — ${siteConfig.name}`,
    description: pageDescriptions.works,
  },
};

export default function WorksPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <JsonLd data={worksItemListJsonLd()} />
      <h1 className="sr-only">Recent Works — {siteConfig.name}</h1>
      <WorksGallery images={recentWorks} />
    </main>
  );
}
