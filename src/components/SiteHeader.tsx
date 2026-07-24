"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/works", label: "Works" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/press", label: "Press" },
  { href: "/bio", label: "Bio" },
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

export function SiteHeader() {
  const pathname = usePathname();
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
      <header className="sticky top-0 z-50">
        <div className="site-shell flex items-center justify-between pt-[16px] pb-4">
          <Link
            href="/"
            className="text-[clamp(1.25rem,4vw,2rem)] font-bold uppercase leading-none tracking-[-0.06em]"
          >
            Alexei Kolakis-Landon
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="cursor-pointer bg-transparent p-0"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 flex flex-col bg-bg pt-16 text-xs text-ink"
        >
          <nav
            aria-label="Primary"
            className="flex flex-1 flex-col items-center justify-center gap-4 p-[16px]"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
