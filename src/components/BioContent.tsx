"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { bioCopy, bioImage } from "@/data/content";
import { useLanguage } from "@/components/LanguageProvider";

function CopyIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
    >
      <rect x="5.4" y="5.4" width="7.2" height="7.2" />
      <path d="M3.6 9.6H2.4V2.4h7.2v1.2" />
    </svg>
  );
}

function CheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
    >
      <path d="M2.5 7.8 6.2 11.5 12.5 3.5" />
    </svg>
  );
}

function EmailCopy() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timeout = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(bioCopy.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <a
      href={`mailto:${bioCopy.email}`}
      onClick={copyEmail}
      aria-label={copied ? "Copied" : "Copy email"}
      className="group inline-flex cursor-pointer items-center gap-1 text-left text-ink no-underline hover:underline"
    >
      <span>{bioCopy.email}</span>
      <span
        aria-hidden
        className={`inline-flex size-[12px] shrink-0 items-center justify-center ${
          copied
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
        }`}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </span>
    </a>
  );
}

export function BioContent() {
  const { lang } = useLanguage();

  return (
    <>
      <div className="max-w-[75ch] space-y-5">
        <div
          lang="en"
          className={lang === "en" ? "space-y-5" : "hidden"}
          hidden={lang !== "en"}
        >
          {bioCopy.paragraphs.en.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div
          lang="fr"
          className={lang === "fr" ? "space-y-5" : "hidden"}
          hidden={lang !== "fr"}
        >
          {bioCopy.paragraphs.fr.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-x-5">
          <span>{lang === "fr" ? "Courriel" : "Email"}</span>
          <EmailCopy />
          <span>Instagram</span>
          <a
            href={bioCopy.instagram.url}
            target="_blank"
            rel="me noopener noreferrer"
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
        width={1600}
        height={1200}
      />
    </>
  );
}
