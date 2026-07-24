export const siteConfig = {
  name: "Alexei Kolakis-Landon",
  shortName: "Alexei Kolakis-Landon",
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
  description:
    "Alexei Kolakis-Landon is a Montreal-based painter whose process-driven acrylic works explore the body, vulnerability, and material transformation through gesture, staining, and erasure.",
  descriptionFr:
    "Alexei Kolakis-Landon est un peintre montréalais dont la pratique acrylique, fondée sur le processus, explore le corps, la vulnérabilité et la transformation matérielle par le geste, la tache et l'effacement.",
  keywords: [
    "Alexei Kolakis-Landon",
    "Montreal painter",
    "contemporary painting",
    "abstract painting",
    "Canadian artist",
    "acrylic painting",
    "process-based painting",
    "Montreal art",
    "peintre Montréal",
  ],
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  works:
    "Recent paintings by Alexei Kolakis-Landon — acrylic, ink, and graphite works on canvas and copper exploring gesture, material, and the body.",
  exhibitions:
    "Exhibition views of Ceremony (2026), a duo exhibition with Tomas Dessureault in Montreal, QC.",
  bio: "Biography of Montreal-based painter Alexei Kolakis-Landon — practice, materials, and contact.",
  press:
    "Press and critical writing on Alexei Kolakis-Landon, including text by Thomas Antoine-Girard for the Ceremony exhibition.",
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}
