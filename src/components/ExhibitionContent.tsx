"use client";

import Image from "next/image";
import { exhibition } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function ExhibitionContent() {
  const { lang } = useLanguage();

  return (
    <>
      <Image
        src={exhibition.image}
        alt={exhibition.alt[lang]}
        className="mb-[4px] block w-full"
        width={exhibition.width}
        height={exhibition.height}
        sizes="100vw"
        preload
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
