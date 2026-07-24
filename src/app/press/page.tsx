import type { Metadata } from "next";
import { PressItem } from "@/components/PressItem";
import { pressItems } from "@/data/content";

export const metadata: Metadata = {
  title: "Press — Alexei Kolakis-Landon",
};

export default function PressPage() {
  return (
    <main className="site-shell space-y-4 pb-[16px] text-xs">
      <ul className="space-y-4">
        {pressItems.map((item) => (
          <PressItem key={item.quoteEn} item={item} />
        ))}
      </ul>
    </main>
  );
}
