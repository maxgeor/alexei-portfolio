"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { PressItem as PressItemData, PressLinkItem, PressQuoteItem } from "@/data/content";

type QuoteLang = "en" | "fr";

function PressDivider() {
  return (
    <div
      className="max-w-[75ch] border-t border-ink/10 pt-5"
      aria-hidden
    />
  );
}

function PressQuoteItem({
  item,
  className,
  showDivider,
}: {
  item: PressQuoteItem;
  className?: string;
  showDivider?: boolean;
}) {
  const { lang } = useLanguage();
  const [quoteLang, setQuoteLang] = useState<QuoteLang>("fr");
  const intro = item.intro[lang];

  return (
    <li className={`space-y-5${className ? ` ${className}` : ""}`}>
      {showDivider ? <PressDivider /> : null}
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

function PressLinkItemComponent({
  item,
  className,
  showDivider,
}: {
  item: PressLinkItem;
  className?: string;
  showDivider?: boolean;
}) {
  const { lang } = useLanguage();

  return (
    <li className={`space-y-5${className ? ` ${className}` : ""}`}>
      {showDivider ? <PressDivider /> : null}
      <Image
        src={item.image}
        alt={item.alt[lang]}
        className="block h-auto w-full max-w-[75ch]"
        width={item.width}
        height={item.height}
        sizes="(max-width: 48rem) 75ch, 48rem"
      />
      <div className="max-w-[75ch] space-y-0">
        <p>
          {item.publication} | {item.author}
        </p>
        <p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {item.title[lang]}
          </a>
        </p>
      </div>
    </li>
  );
}

export function PressItem({
  item,
  className,
  showDivider,
}: {
  item: PressItemData;
  className?: string;
  showDivider?: boolean;
}) {
  if (item.type === "link") {
    return (
      <PressLinkItemComponent
        item={item}
        className={className}
        showDivider={showDivider}
      />
    );
  }
  return (
    <PressQuoteItem
      item={item}
      className={className}
      showDivider={showDivider}
    />
  );
}
