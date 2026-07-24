import type { Metadata } from "next";
import { exhibition } from "@/data/content";

export const metadata: Metadata = {
  title: "Exhibitions — Alexei Kolakis-Landon",
};

export default function ExhibitionsPage() {
  return (
    <main className="site-shell space-y-4 pb-[16px] text-xs">
      <article className="space-y-4">
        <h2>{exhibition.title}</h2>
        <p className="max-w-prose">{exhibition.bio}</p>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exhibition.image}
            alt={exhibition.alt}
            className="mb-[4px] block w-full"
          />
          <p>{exhibition.caption}</p>
        </div>
      </article>
    </main>
  );
}
