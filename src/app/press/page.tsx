import type { Metadata } from "next";
import { pressItems } from "@/data/content";

export const metadata: Metadata = {
  title: "Press — Alexei Kolakis-Landon",
};

export default function PressPage() {
  return (
    <main className="site-shell space-y-4 pb-[16px] text-xs">
      <ul className="space-y-4">
        {pressItems.map((item) => (
          <li key={item.title} className="space-y-4">
            <p>
              {item.kind === "about" ? "About" : "By"} · {item.source} ·{" "}
              {item.meta}
            </p>
            <h2>{item.title}</h2>
            <p className="max-w-prose">{item.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
