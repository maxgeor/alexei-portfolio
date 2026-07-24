"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { pressItems } from "@/data/content";

type PressItemData = (typeof pressItems)[number];
type QuoteLang = "en" | "fr";

export function PressItem({ item }: { item: PressItemData }) {
  const { lang } = useLanguage();
  const [quoteLang, setQuoteLang] = useState<QuoteLang>("fr");
  const intro = item.intro[lang];

  return (
    <li className="space-y-5">
      <p className="max-w-[75ch]">
        {intro.before}
        <em>{intro.emphasis}</em>
        {intro.after}
      </p>
      <div className="flex flex-col gap-5">
        <blockquote className="m-0 border-0 p-0">
          <p
            lang="fr"
            className={`max-w-[75ch] indent-[-0.25em] ${
              quoteLang === "fr" ? "" : "hidden"
            }`}
            hidden={quoteLang !== "fr"}
          >
            &ldquo;{item.quoteFr}&rdquo;
          </p>
          <p
            lang="en"
            className={`max-w-[75ch] indent-[-0.25em] ${
              quoteLang === "en" ? "" : "hidden"
            }`}
            hidden={quoteLang !== "en"}
          >
            &ldquo;{item.quoteEn}&rdquo;
          </p>
        </blockquote>
        <p>
          <button
            type="button"
            onClick={() => setQuoteLang("en")}
            className={`cursor-pointer bg-transparent p-0 ${
              quoteLang === "en" ? "opacity-100" : "opacity-50"
            }`}
          >
            EN
          </button>
          <span className="opacity-50">/</span>
          <button
            type="button"
            onClick={() => setQuoteLang("fr")}
            className={`cursor-pointer bg-transparent p-0 ${
              quoteLang === "fr" ? "opacity-100" : "opacity-50"
            }`}
          >
            FR
          </button>
        </p>
      </div>
    </li>
  );
}
