"use client";

import { homeImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <main className="site-shell flex min-h-0 flex-1 items-center justify-center pb-[16px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={homeImage.image}
        alt={homeImage.alt[lang]}
        className="block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
      />
    </main>
  );
}
