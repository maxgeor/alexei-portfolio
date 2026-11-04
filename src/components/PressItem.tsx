"use client";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { PressItem as PressItemData, PressLinkItem, PressQuoteItem } from "@/data/content";
import {
  IMAGE_QUALITY_MOBILE,
  PRESS_IMAGE_SIZES,
} from "@/lib/image-presets";

type QuoteLang = "en" | "fr";

const pressItemContentClassName = "max-w-[75ch] space-y-5";

function PressDivider() {
  return (
    <hr className="m-0 w-full border-0 border-t border-black" aria-hidden />
  );
}

function QuoteText({
  text,
  lang,
  quoteLang,
}: {
  text: string;
  lang: QuoteLang;
  quoteLang: QuoteLang;
}) {
  const paragraphs = text.split("\n\n").filter(Boolean);
  const visible = quoteLang === lang;

  return (
    <div
      className={visible ? "flex flex-col gap-5" : "hidden"}
      hidden={!visible}
    >
      {paragraphs.map((paragraph, index) => (
        <p key={index} lang={lang} className="m-0 max-w-[75ch]">
          {index === 0 ? (
            <span className="-ml-[0.425em]">&ldquo;</span>
          ) : null}
          {paragraph}
          {index === paragraphs.length - 1 ? (
            <span>&rdquo;</span>
          ) : null}
        </p>
      ))}
    </div>
  );
}

function PressQuoteItem({ item }: { item: PressQuoteItem }) {
  const { lang } = useLanguage();
  const [quoteLang, setQuoteLang] = useState<QuoteLang>("fr");
  const intro = item.intro[lang];

  return (
    <li>
      <div className="site-shell">
        <PressDivider />
        <div className={`${pressItemContentClassName} pt-[4px]`}>
          <p className="max-w-[75ch]">
            {intro.before}
            <em>{intro.emphasis}</em>
            {intro.after}
          </p>
          <div className="flex flex-col gap-5">
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
            <blockquote className="m-0 border-0 p-0">
              <QuoteText text={item.quoteFr} lang="fr" quoteLang={quoteLang} />
              <QuoteText text={item.quoteEn} lang="en" quoteLang={quoteLang} />
            </blockquote>
          </div>
        </div>
      </div>
    </li>
  );
}

function PressLinkItemComponent({ item }: { item: PressLinkItem }) {
  const { lang } = useLanguage();

  return (
    <li>
      <div className="site-shell">
        <PressDivider />
        <a
          className="press-link group flex max-w-[75ch] cursor-pointer flex-col gap-[6px] pt-[8px] no-underline"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="max-w-[33ch] leading-[0]">
            <Image
              src={item.image}
              alt={item.alt[lang]}
              className="block h-auto w-full"
              width={item.width}
              height={item.height}
              sizes={PRESS_IMAGE_SIZES}
              quality={IMAGE_QUALITY_MOBILE}
            />
          </div>
          <div className="max-w-[75ch] space-y-0 leading-[20px]">
            <p className="m-0">
              <span className="press-link__title">{item.title[lang]}</span>
              <ArrowTopRightIcon
                className="ml-0.5 inline-block size-[calc(1em-2px)] align-middle"
                aria-hidden
              />
            </p>
            <p className="press-link__meta m-0">
              {item.publication}, {item.author}
            </p>
          </div>
        </a>
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
