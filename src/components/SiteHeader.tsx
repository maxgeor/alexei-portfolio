"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/data/content";

const links = [
  { href: "/works", labelKey: "works" },
  { href: "/exhibitions", labelKey: "exhibitionViews" },
  { href: "/bio", labelKey: "bio" },
  { href: "/press", labelKey: "press" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <span className="relative block h-5 w-7" aria-hidden>
        <span className="absolute top-1/2 left-0 block h-[3px] w-full -translate-y-1/2 rotate-45 bg-ink" />
        <span className="absolute top-1/2 left-0 block h-[3px] w-full -translate-y-1/2 -rotate-45 bg-ink" />
      </span>
    );
  }

  return (
    <span className="flex w-7 flex-col gap-[5px]" aria-hidden>
      <span className="block h-[3px] w-full bg-ink" />
      <span className="block h-[3px] w-full bg-ink" />
      <span className="block h-[3px] w-full bg-ink" />
    </span>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <p>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`cursor-pointer bg-transparent p-0 ${
          lang === "en" ? "opacity-100" : "opacity-50"
        }`}
      >
        EN
      </button>
      <span className="opacity-50">/</span>
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`cursor-pointer bg-transparent p-0 ${
          lang === "fr" ? "opacity-100" : "opacity-50"
        }`}
      >
        FR
      </button>
    </p>
  );
}

const titleClassName =
  "text-[clamp(1.25rem,4vw,2rem)] font-bold uppercase leading-none tracking-[-0.06em]";

function SiteTitle() {
  return (
    <>
      Al
      <span className="tracking-[-0.025em]">e</span>
      xei Kolakis-Landon
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header>
        <div className="site-shell flex items-center justify-between pt-[20px] pb-5">
          <Link
            href="/"
            className={titleClassName}
            aria-label="Alexei Kolakis-Landon — Home"
          >
            <SiteTitle />
          </Link>
          {/* Reserves the same space as the fixed menu button */}
          <span className="invisible w-7 shrink-0" aria-hidden>
            <MenuIcon open={false} />
          </span>
        </div>
      </header>

      <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="site-shell flex items-center justify-between pt-[20px] pb-5">
          <span className={`${titleClassName} invisible`} aria-hidden>
            <SiteTitle />
          </span>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="pointer-events-auto cursor-pointer bg-transparent p-0"
            aria-label={open ? ui.closeMenu[lang] : ui.openMenu[lang]}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 flex flex-col bg-bg pt-16 text-ink"
        >
          <nav
            aria-label="Primary"
            className="flex flex-1 flex-col items-center justify-center gap-5 p-[20px]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="nav-link tracking-tight"
              >
                {ui[link.labelKey][lang]}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center p-[20px]">
            <LanguageToggle />
          </div>
        </div>
      ) : null}
    </>
  );
}
