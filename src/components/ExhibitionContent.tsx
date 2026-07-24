"use client";

import { exhibition } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function ExhibitionContent() {
  const { lang } = useLanguage();

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={exhibition.image}
        alt={exhibition.alt[lang]}
        className="mb-[4px] block w-full"
      />
      <p>{exhibition.caption[lang]}</p>
    </>
  );
}
