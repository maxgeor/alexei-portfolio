"use client";

import Image from "next/image";
import { aboutCopy, aboutImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

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

      <Image
        src={aboutImage.image}
        alt={aboutImage.alt[lang]}
        className="block h-auto w-full"
        width={aboutImage.width}
        height={aboutImage.height}
        sizes="100vw"
        preload
      />
    </>
  );
}
