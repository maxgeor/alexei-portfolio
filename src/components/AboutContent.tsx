"use client";

import { ResponsivePicture } from "@/components/ResponsivePicture";
import { aboutCopy, aboutImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";
import {
  CONTENT_COLUMN_SIZES,
  IMAGE_QUALITY_DESKTOP,
  IMAGE_QUALITY_MOBILE,
} from "@/lib/image-presets";

export function AboutContent() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="max-w-[75ch] space-y-5">
        <div
          lang="en"
          className={lang === "en" ? "space-y-5" : "hidden"}
          hidden={lang !== "en"}
        >
          {aboutCopy.paragraphs.en.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div
          lang="fr"
          className={lang === "fr" ? "space-y-5" : "hidden"}
          hidden={lang !== "fr"}
        >
          {aboutCopy.paragraphs.fr.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ResponsivePicture
        alt={aboutImage.alt[lang]}
        className="block h-auto w-full pt-[4px]"
        preload
        mobile={{
          src: aboutImage.image,
          width: aboutImage.width,
          height: aboutImage.height,
          quality: IMAGE_QUALITY_MOBILE,
          sizes: CONTENT_COLUMN_SIZES,
        }}
        desktop={{
          src: aboutImage.image,
          width: aboutImage.width,
          height: aboutImage.height,
          quality: IMAGE_QUALITY_DESKTOP,
          sizes: CONTENT_COLUMN_SIZES,
        }}
      />
    </>
  );
}
