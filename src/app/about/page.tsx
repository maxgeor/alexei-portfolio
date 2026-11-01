import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";
import { JsonLd } from "@/components/JsonLd";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { aboutPageJsonLd } from "@/lib/structured-data";

const title = `${siteConfig.name} — About`;

export const metadata: Metadata = {
  title: "About",
  description: pageDescriptions.about,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description: pageDescriptions.about,
    url: "/about",
    type: "profile",
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
  },
  twitter: {
    title,
    description: pageDescriptions.about,
  },
};

export default function AboutPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <JsonLd data={aboutPageJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <AboutContent />
    </main>
  );
}
