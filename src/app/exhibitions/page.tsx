import type { Metadata } from "next";
import { ExhibitionContent } from "@/components/ExhibitionContent";

export const metadata: Metadata = {
  title: "Exhibition Views — Alexei Kolakis-Landon",
};

export default function ExhibitionsPage() {
  return (
    <main className="site-shell pb-[20px]">
      <ExhibitionContent />
    </main>
  );
}
