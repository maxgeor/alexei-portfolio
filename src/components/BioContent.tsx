"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { bioCopy, bioImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

function EmailCopy() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timeout = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(bioCopy.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={copied ? "Copied" : "Copy email"}
      className="group inline-flex cursor-pointer items-center gap-1 bg-transparent p-0 text-left text-ink"
    >
      <span>{bioCopy.email}</span>
      <span
        aria-hidden
        className={`inline-flex size-[12px] shrink-0 items-center justify-center transition-opacity duration-150 ${
          copied
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
        }`}
      >
        {copied ? (
          <CheckIcon width={12} height={12} />
        ) : (
          <CopyIcon width={12} height={12} />
        )}
      </span>
    </button>
  );
}

export function BioContent() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="max-w-prose space-y-4">
        {bioCopy.paragraphs[lang].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          <span>Email</span>
          <EmailCopy />
          <span>Instagram</span>
          <a
            href={bioCopy.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {bioCopy.instagram.handle}
          </a>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bioImage.image}
        alt={bioImage.alt[lang]}
        className="block h-auto w-full"
      />
    </>
  );
}
