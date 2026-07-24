import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { pageDescriptions, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
  },
  description: pageDescriptions.home,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: pageDescriptions.home,
    url: "/",
    type: "website",
  },
  twitter: {
    title: siteConfig.name,
    description: pageDescriptions.home,
  },
};

export default function HomePage() {
  return (
    <main className="site-shell flex min-h-0 flex-1 items-center justify-center pb-[20px]">
      <h1 className="sr-only">
        {siteConfig.name} — Montreal-based painter
      </h1>
      <HomeHero />
    </main>
  );
}
