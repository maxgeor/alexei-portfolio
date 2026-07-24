export type Work = {
  image: string;
  alt: string;
  title: string;
  year: string;
  material: string;
  size: string;
};

export const homeImage = {
  image: "/works/IMG_2321.jpg",
  alt: "Studio view with chair",
} as const;

export const recentWorks: Work[] = [
  {
    image: "/works/01.AKL.png",
    alt: "Ceremony, 2026",
    title: "Ceremony",
    year: "2026",
    material: "Acrylic, ink, and graphite on canvas",
    size: "180 × 66 in",
  },
  {
    image: "/works/04.AKL.png",
    alt: "Angles, 2026",
    title: "Angles",
    year: "2026",
    material: "Acrylic on copper",
    size: "6 × 4 in",
  },
  {
    image: "/works/02.AKL.png",
    alt: "Bruised, 2025",
    title: "Bruised",
    year: "2025",
    material: "Acrylic, ink, and graphite on canvas",
    size: "108 × 66 in",
  },
  {
    image: "/works/03.AKL.png",
    alt: "Tangles, 2026",
    title: "Tangles",
    year: "2026",
    material: "Acrylic and graphite on canvas",
    size: "108 × 66 in",
  },
  {
    image: "/works/copper.png",
    alt: "In Between, 2026",
    title: "In Between",
    year: "2026",
    material: "Acrylic on copper",
    size: "Diptych, each panel 12 × 24 in",
  },
  {
    image: "/works/IMG_9265.png",
    alt: "Wild Is The Wind, 2025",
    title: "Wild Is The Wind",
    year: "2025",
    material: "Acrylic, ink, and graphite on canvas",
    size: "108 × 66 in",
  },
  {
    image: "/works/DSCF3867.png",
    alt: "Big Red, 2025",
    title: "Big Red",
    year: "2025",
    material: "Acrylic and graphite on canvas",
    size: "108 × 60 in",
  },
  {
    image: "/works/IMG_2083.png",
    alt: "Heel, 2026",
    title: "Heel",
    year: "2026",
    material: "Acrylic, ink, and graphite on canvas",
    size: "66 × 84 in",
  },
  {
    image: "/works/IMG_7396.jpg",
    alt: "Cantus in Memoriam",
    title: "Cantus in Memoriam",
    year: "",
    material: "Acrylic, ink, and graphite on canvas",
    size: "156 × 66 in",
  },
];

export const bioImage: Work = {
  image: "/works/IMG_9813.jpg",
  alt: "Artwork documentation, IMG_9813",
  title: "Untitled",
  year: "2024",
  material: "Acrylic and ink on canvas",
  size: "96 × 72 in",
};

export const exhibition = {
  title: "Alexei Kolakis-Landon & Thomas Keller — Shared Ground",
  bio: "A two-person exhibition pairing painting and installation in a single room. Works were arranged to mark sightlines across the gallery — each piece a quiet counterpoint to the next.",
  image: "/works/exhibition.jpg",
  alt: "Installation view, Shared Ground",
  caption: "Installation view, 2024",
} as const;

export const pressItems = [
  {
    kind: "about" as const,
    source: "Artforum",
    title: "Alexei Kolakis-Landon and Thomas Keller at Gallery North",
    meta: "Review · 2024",
    excerpt:
      "In their shared installation, Kolakis-Landon and Keller stage a quiet confrontation between object and space. The exhibition resists spectacle; instead it asks the viewer to linger with materials that seem almost unwilling to perform.",
  },
  {
    kind: "by" as const,
    source: "Alexei Kolakis-Landon",
    title: "Notes on Looking",
    meta: "Essay · 2023",
    excerpt:
      "I am less interested in what an image shows than in how long it can hold attention without insisting. The work begins when the looking slows down — when description becomes secondary to presence.",
  },
];
