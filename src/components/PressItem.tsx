"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { pressItems } from "@/data/content";

type PressItemData = (typeof pressItems)[number];
type QuoteLang = "en" | "fr";

export function PressItem({ item }: { item: PressItemData }) {
  const { lang } = useLanguage();
  const [quoteLang, setQuoteLang] = useState<QuoteLang>("fr");
  const quote = quoteLang === "en" ? item.quoteEn : item.quoteFr;
  const intro = item.intro[lang];

  return (
    <li className="space-y-4">
      <p className="max-w-prose">
        {intro.before}
        <em>{intro.emphasis}</em>
        {intro.after}
      </p>
      <div>
        <p className="max-w-prose indent-[-0.25em]">&ldquo;{quote}&rdquo;</p>
        <p className="text-xs">
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
