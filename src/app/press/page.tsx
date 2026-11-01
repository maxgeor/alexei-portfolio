import type { Metadata } from "next";
import { Fragment } from "react";
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
    <main className="site-shell space-y-5 pb-[20px] text-pretty">
      <JsonLd data={pressJsonLd()} />
      <h1 className="sr-only">{title}</h1>
      <ul className="m-0 flex list-none flex-col gap-6 p-0">
        {pressItems.map((item, index) => {
          const key = item.type === "link" ? item.url : item.quoteEn;
          return (
            <Fragment key={key}>
              {index > 0 ? (
                <li className="max-w-[75ch] list-none" aria-hidden>
                  —
                </li>
              ) : null}
              <PressItem item={item} />
            </Fragment>
          );
        })}
      </ul>
    </main>
  );
}
