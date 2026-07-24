import { homeImage } from "@/data/content";

export default function HomePage() {
  return (
    <main className="site-shell flex min-h-0 flex-1 items-center justify-center pb-[16px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={homeImage.image}
        alt={homeImage.alt}
        className="block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
      />
    </main>
  );
}
