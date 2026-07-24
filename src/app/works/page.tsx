import type { Metadata } from "next";
import { WorksGallery } from "@/components/WorksGallery";
import { recentWorks } from "@/data/content";

export const metadata: Metadata = {
  title: "Works — Alexei Kolakis-Landon",
};

export default function WorksPage() {
  return (
    <main className="site-shell space-y-5 pb-[20px]">
      <WorksGallery images={recentWorks} />
    </main>
  );
}
