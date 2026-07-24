import { bioCopy, exhibition, pressItems, recentWorks } from "@/data/content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.name,
    givenName: siteConfig.givenName,
    familyName: siteConfig.familyName,
    alternateName: [...siteConfig.alternateNames],
    url: siteConfig.url,
    mainEntityOfPage: absoluteUrl("/"),
    email: siteConfig.email,
    jobTitle: ["Painter", "Artist", "Peintre"],
    description: siteConfig.description,
    image: absoluteUrl("/works/01.AKL.png"),
    sameAs: [siteConfig.instagram],
    nationality: {
      "@type": "Country",
      name: "Canada",
    },
    homeLocation: {
      "@type": "Place",
      name: "Montreal, QC",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.locality,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country,
      },
    },
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
    alternateName: [
      `${siteConfig.name} Official Website`,
      ...siteConfig.alternateNames,
    ],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["en", "fr"],
    publisher: { "@id": absoluteUrl("/#person") },
    about: { "@id": absoluteUrl("/#person") },
    mainEntity: { "@id": absoluteUrl("/#person") },
  };
}

export function worksItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} — Recent Works`,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: recentWorks.length,
    itemListElement: recentWorks.map((work, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VisualArtwork",
        name: work.title,
        alternateName: `${work.title} by ${siteConfig.name}`,
        dateCreated: work.year || undefined,
        artMedium: work.material.en,
        image: absoluteUrl(work.image),
        creator: { "@id": absoluteUrl("/#person") },
        copyrightHolder: { "@id": absoluteUrl("/#person") },
        description: `${work.title}${work.year ? `, ${work.year}` : ""} by ${siteConfig.name}. ${work.material.en}. ${work.size.en}.`,
      },
    })),
  };
}

export function bioPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${siteConfig.name} — Bio`,
    url: absoluteUrl("/bio"),
    mainEntity: { "@id": absoluteUrl("/#person") },
    about: { "@id": absoluteUrl("/#person") },
    description: bioCopy.paragraphs.en[0],
  };
}

export function exhibitionJsonLd() {
  const caption = exhibition.caption.en;
  return {
    "@context": "https://schema.org",
    "@type": "ExhibitionEvent",
    name: `Ceremony — ${siteConfig.name}`,
    alternateName: "Ceremony",
    startDate: "2026",
    description: `${siteConfig.name}. ${caption.before}${caption.emphasis}${caption.after}`,
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
    headline: `${siteConfig.name} — Ceremony accompanying text excerpt`,
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
