import type { Metadata } from "next";
import { ExhibitionContent } from "@/components/ExhibitionContent";
import { JsonLd } from "@/components/JsonLd";
import { exhibitionPreloadLinks } from "@/lib/home-preload";
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
  const exhibitionPreload = exhibitionPreloadLinks();

  return (
    <main className="site-shell pb-[20px]">
      <link
        rel="preload"
        as="image"
        href={exhibitionPreload.mobile.href}
        imageSrcSet={exhibitionPreload.mobile.srcSet}
        media="(max-width: 47.99rem)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={exhibitionPreload.desktop.href}
        imageSrcSet={exhibitionPreload.desktop.srcSet}
        media="(min-width: 48rem)"
        fetchPriority="high"
      />
      <JsonLd data={exhibitionJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <ExhibitionContent />
    </main>
  );
}
