"use client";

import Link from "next/link";
import { homeImage, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function HomeHero() {
  const { lang } = useLanguage();

  return (
    <Link href="/works" className="block w-full" aria-label={ui.works[lang]}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={homeImage.image}
        alt={homeImage.alt[lang]}
        className="block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
      />
    </Link>
  );
}
