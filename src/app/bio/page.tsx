import type { Metadata } from "next";
import { bioImage } from "@/data/content";

export const metadata: Metadata = {
  title: "Bio — Alexei Kolakis-Landon",
};

export default function BioPage() {
  return (
    <main className="site-shell space-y-4 pb-[16px] text-xs">
      <div className="max-w-prose space-y-4">
        <p>
          Alexei Kolakis-Landon is an artist working in painting and
          installation. His practice focuses on gesture, surface, and the
          intervals between them — how attention settles when little is asked of
          it.
        </p>
        <p>
          He has exhibited with Thomas Keller and others in group and two-person
          shows. He lives and works in the Pacific Northwest.
        </p>
        <p>
          <a href="mailto:hello@alexei.design">hello@alexei.design</a>
        </p>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bioImage.image}
        alt={bioImage.alt}
        className="block h-auto w-full"
      />
    </main>
  );
}
