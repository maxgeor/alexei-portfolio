"use client";

import Link from "next/link";
import { homeImage, ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <main className="site-shell flex min-h-0 flex-1 items-center justify-center pb-[20px]">
      <Link
        href="/works"
        className="block w-full"
        aria-label={ui.works[lang]}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={homeImage.image}
          alt={homeImage.alt[lang]}
          className="block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
        />
      </Link>
    </main>
  );
}
