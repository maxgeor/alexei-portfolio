"use client";

import { homeImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function HomeHero() {
  const { lang } = useLanguage();

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={homeImage.image}
        alt={homeImage.alt[lang]}
        className="block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
        fetchPriority="high"
      />
    </>
  );
}
