"use client";

import { ResponsivePicture } from "@/components/ResponsivePicture";
import { homeImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import {
  CONTENT_COLUMN_SIZES,
  IMAGE_QUALITY_DESKTOP,
  IMAGE_QUALITY_MOBILE,
} from "@/lib/image-presets";

export function HomeHero() {
  const { lang } = useLanguage();

  return (
    <ResponsivePicture
      alt={homeImage.alt[lang]}
      className="block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
      preload
      mobile={{
        src: homeImage.mobile.image,
        width: homeImage.mobile.width,
        height: homeImage.mobile.height,
        quality: IMAGE_QUALITY_MOBILE,
        sizes: "100vw",
      }}
      desktop={{
        src: homeImage.desktop.image,
        width: homeImage.desktop.width,
        height: homeImage.desktop.height,
        quality: IMAGE_QUALITY_DESKTOP,
        sizes: CONTENT_COLUMN_SIZES,
      }}
    />
  );
}
