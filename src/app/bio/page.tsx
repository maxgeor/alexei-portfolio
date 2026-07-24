import type { Metadata } from "next";
import { BioContent } from "@/components/BioContent";

export const metadata: Metadata = {
  title: "Bio — Alexei Kolakis-Landon",
};

export default function BioPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <BioContent />
    </main>
  );
}
