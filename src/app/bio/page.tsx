import type { Metadata } from "next";
import { BioContent } from "@/components/BioContent";

export const metadata: Metadata = {
  title: "Bio — Alexei Kolakis-Landon",
};

export default function BioPage() {
  return (
    <main className="site-shell space-y-4 pb-[16px] text-xs">
      <BioContent />
    </main>
  );
}
