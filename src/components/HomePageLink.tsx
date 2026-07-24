"use client";

import Link from "next/link";
import { ui } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

export function HomePageLink() {
  const { lang } = useLanguage();

  return (
    <Link
      href="/works"
      className="absolute inset-0 z-10"
      aria-label={ui.works[lang]}
    />
  );
}
