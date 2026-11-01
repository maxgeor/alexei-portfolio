export const siteConfig = {
  name: "Alexei Kolakis-Landon",
  shortName: "Alexei Kolakis-Landon",
  givenName: "Alexei",
  familyName: "Kolakis-Landon",
  alternateNames: [
    "Alexei Kolakis Landon",
    "Alexei Kolakis",
    "Alexei Kolakislandon",
    "@alexeikolakislandon",
  ],
  url: "https://alexeikolakislandon.com",
  locale: "en_CA",
  email: "alexei.kolakis@icloud.com",
  instagram: "https://www.instagram.com/alexeikolakislandon/",
  instagramHandle: "@alexeikolakislandon",
  location: {
    locality: "Montreal",
    region: "QC",
    country: "CA",
  },
  /** Primary SERP snippet for name searches */
  description:
    "Alexei Kolakis-Landon is a Montreal-based painter. Official site — recent works, exhibition views, about, contact, and press.",
  descriptionFr:
    "Alexei Kolakis-Landon est un peintre montréalais. Site officiel — œuvres récentes, vues d'exposition, à propos, contact et presse.",
  keywords: [
    "Alexei Kolakis-Landon",
    "Alexei Kolakis Landon",
    "Alexei Kolakis",
    "Alexei Kolakislandon",
    "alexeikolakislandon",
    "@alexeikolakislandon",
    "Alexei Kolakis-Landon painter",
    "Alexei Kolakis-Landon artist",
    "Alexei Kolakis-Landon Montreal",
    "Alexei Kolakis-Landon peintre",
  ],
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  works:
    "Alexei Kolakis-Landon — recent paintings in acrylic, ink, and graphite on canvas and copper.",
  exhibitions:
    "Alexei Kolakis-Landon — exhibition views of Ceremony (2026), duo exhibition with Tomas Dessureault in Montreal, QC.",
  about: "Alexei Kolakis-Landon — Montreal painter biography and artistic practice.",
  contact:
    "Contact Alexei Kolakis-Landon — email and Instagram for inquiries and studio correspondence.",
  press:
    "Alexei Kolakis-Landon — press and critical writing, including text by Thomas Antoine-Girard for Ceremony.",
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}
