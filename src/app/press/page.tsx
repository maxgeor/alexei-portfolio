import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PressItem } from "@/components/PressItem";
import { pressItems } from "@/data/content";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { pressJsonLd } from "@/lib/structured-data";

const title = `${siteConfig.name} — Press`;

export const metadata: Metadata = {
  title: "Press",
  description: pageDescriptions.press,
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title,
    description: pageDescriptions.press,
    url: "/press",
    type: "website",
  },
  twitter: {
    title,
    description: pageDescriptions.press,
  },
};

export default function PressPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <JsonLd data={pressJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <ul className="space-y-5">
        {pressItems.map((item) => (
          <PressItem key={item.quoteEn} item={item} />
        ))}
      </ul>
    </main>
  );
}
