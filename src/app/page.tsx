import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { HomePageLink } from "@/components/HomePageLink";
import { pageDescriptions, siteConfig } from "@/lib/site";
import { homeHeroPreloadLinks } from "@/lib/home-preload";

const homeTitle = siteConfig.name;

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: pageDescriptions.home,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: pageDescriptions.home,
    url: "/",
    type: "profile",
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
  },
  twitter: {
    title: homeTitle,
    description: pageDescriptions.home,
  },
};

export default function HomePage() {
  const heroPreload = homeHeroPreloadLinks();

  return (
    <main className="relative flex min-h-0 flex-1 items-center justify-center pb-[20px]">
      <link
        rel="preload"
        as="image"
        href={heroPreload.mobile.href}
        imageSrcSet={heroPreload.mobile.srcSet}
        media="(max-width: 47.99rem)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={heroPreload.desktop.href}
        imageSrcSet={heroPreload.desktop.srcSet}
        media="(min-width: 48rem)"
        fetchPriority="high"
      />
      <HomePageLink />
      <div className="site-shell pointer-events-none relative z-0 w-full">
        <h1 className="sr-only">{siteConfig.name}</h1>
        <p className="sr-only">
          Official website of Montreal-based painter {siteConfig.name}. Also known
          as {siteConfig.alternateNames.slice(0, 2).join(", ")}.
        </p>
        <HomeHero />
      </div>
    </main>
  );
}
