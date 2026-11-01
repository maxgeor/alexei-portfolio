"use client";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { PressItem as PressItemData, PressLinkItem, PressQuoteItem } from "@/data/content";

type QuoteLang = "en" | "fr";

const pressSectionClassName = "space-y-5";

function PressQuoteItem({ item }: { item: PressQuoteItem }) {
  const { lang } = useLanguage();
  const [quoteLang, setQuoteLang] = useState<QuoteLang>("fr");
  const intro = item.intro[lang];

  return (
    <li className={pressSectionClassName}>
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

function PressLinkItemComponent({ item }: { item: PressLinkItem }) {
  const { lang } = useLanguage();

  return (
    <li className={pressSectionClassName}>
      <Image
        src={item.image}
        alt={item.alt[lang]}
        className="block h-auto w-full max-w-[33ch]"
        width={item.width}
        height={item.height}
        sizes="33ch"
      />
      <div className="max-w-[75ch] space-y-0">
        <p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-0.5 no-underline hover:no-underline"
          >
            {item.title[lang]}
            <ArrowTopRightIcon
              className="size-[calc(1em-2px)] shrink-0 translate-y-px"
              aria-hidden
            />
          </a>
        </p>
        <p>
          {item.publication}, {item.author}
        </p>
      </div>
    </li>
  );
}

export function PressItem({ item }: { item: PressItemData }) {
  if (item.type === "link") {
    return <PressLinkItemComponent item={item} />;
  }
  return <PressQuoteItem item={item} />;
}
