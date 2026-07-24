import { bioCopy, exhibition, pressItems, recentWorks } from "@/data/content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Painter",
    description: siteConfig.description,
    image: absoluteUrl("/works/01.AKL.png"),
    sameAs: [siteConfig.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    knowsLanguage: ["en", "fr"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["en", "fr"],
    publisher: { "@id": absoluteUrl("/#person") },
  };
}

export function worksItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recent Works — Alexei Kolakis-Landon",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: recentWorks.length,
    itemListElement: recentWorks.map((work, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VisualArtwork",
        name: work.title,
        dateCreated: work.year || undefined,
        artMedium: work.material.en,
        image: absoluteUrl(work.image),
        creator: { "@id": absoluteUrl("/#person") },
        description: `${work.title}${work.year ? `, ${work.year}` : ""}. ${work.material.en}. ${work.size.en}.`,
      },
    })),
  };
}

export function bioPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `Bio — ${siteConfig.name}`,
    url: absoluteUrl("/bio"),
    mainEntity: { "@id": absoluteUrl("/#person") },
    description: bioCopy.paragraphs.en[0],
  };
}

export function exhibitionJsonLd() {
  const caption = exhibition.caption.en;
  return {
    "@context": "https://schema.org",
    "@type": "ExhibitionEvent",
    name: "Ceremony",
    startDate: "2026",
    description: `${caption.before}${caption.emphasis}${caption.after}`,
    image: absoluteUrl(exhibition.image),
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
    },
    performer: [
      { "@id": absoluteUrl("/#person") },
      {
        "@type": "Person",
        name: "Tomas Dessureault",
      },
    ],
  };
}

export function pressJsonLd() {
  const item = pressItems[0];
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ceremony — accompanying text excerpt",
    author: {
      "@type": "Person",
      name: "Thomas Antoine-Girard",
    },
    about: { "@id": absoluteUrl("/#person") },
    description: `${item.intro.en.before}${item.intro.en.emphasis}${item.intro.en.after}`,
    text: item.quoteEn,
    inLanguage: "en",
  };
}
