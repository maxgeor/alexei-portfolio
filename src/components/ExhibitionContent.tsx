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
        width={1600}
        height={1067}
        fetchPriority="high"
      />
      <p
        lang="en"
        className={lang === "en" ? undefined : "hidden"}
        hidden={lang !== "en"}
      >
        {exhibition.caption.en.before}
        <em>{exhibition.caption.en.emphasis}</em>
        {exhibition.caption.en.after}
      </p>
      <p
        lang="fr"
        className={lang === "fr" ? undefined : "hidden"}
        hidden={lang !== "fr"}
      >
        {exhibition.caption.fr.before}
        <em>{exhibition.caption.fr.emphasis}</em>
        {exhibition.caption.fr.after}
      </p>
    </>
  );
}
