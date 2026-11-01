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
    <main className="pb-[20px] text-pretty">
      <JsonLd data={pressJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <ul className="m-0 flex list-none flex-col gap-6 p-0">
        {pressItems.map((item) => {
          const key = item.type === "link" ? item.url : item.quoteEn;
          return <PressItem key={key} item={item} />;
        })}
      </ul>
    </main>
  );
}
