"use client";

import Image from "next/image";
import { homeImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function HomeHero() {
  const { lang } = useLanguage();

  return (
    <>
      <Image
        src={homeImage.image}
        alt={homeImage.alt[lang]}
        className="block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
        width={homeImage.width}
        height={homeImage.height}
        sizes="100vw"
        preload
      />
    </>
  );
}
