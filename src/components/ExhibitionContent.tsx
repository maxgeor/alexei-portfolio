"use client";

import { ResponsivePicture } from "@/components/ResponsivePicture";
import { exhibition } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import {
  CONTENT_COLUMN_SIZES,
  IMAGE_QUALITY_DESKTOP,
  IMAGE_QUALITY_MOBILE,
} from "@/lib/image-presets";

export function ExhibitionContent() {
  const { lang } = useLanguage();

  return (
    <>
      <ResponsivePicture
        alt={exhibition.alt[lang]}
        className="mb-[6px] block w-full"
        preload
        mobile={{
          src: exhibition.image,
          width: exhibition.width,
          height: exhibition.height,
          quality: IMAGE_QUALITY_MOBILE,
          sizes: CONTENT_COLUMN_SIZES,
        }}
        desktop={{
          src: exhibition.image,
          width: exhibition.width,
          height: exhibition.height,
          quality: IMAGE_QUALITY_DESKTOP,
          sizes: CONTENT_COLUMN_SIZES,
        }}
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
