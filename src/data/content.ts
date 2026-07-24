export type Lang = "en" | "fr";

export type LocalizedString = {
  en: string;
  fr: string;
};

export type Work = {
  image: string;
  alt: string;
  title: string;
  year: string;
  material: LocalizedString;
  size: LocalizedString;
};

export const ui = {
  works: { en: "Works", fr: "Œuvres" },
  exhibitionViews: { en: "Exhibition Views", fr: "Vues d'exposition" },
  press: { en: "Press", fr: "Presse" },
  bio: { en: "Bio", fr: "Bio" },
  close: { en: "Close", fr: "Fermer" },
  openMenu: { en: "Open menu", fr: "Ouvrir le menu" },
  closeMenu: { en: "Close menu", fr: "Fermer le menu" },
  previousImage: { en: "Previous image", fr: "Image précédente" },
  nextImage: { en: "Next image", fr: "Image suivante" },
} as const;

export const homeImage = {
  image: "/works/IMG_2321.jpg",
  alt: {
    en: "Studio view with chair",
    fr: "Vue d'atelier avec chaise",
  },
} as const;

const materialCanvasInkGraphite = {
  en: "Acrylic, ink, and graphite on canvas",
  fr: "Acrylique, encre et graphite sur toile",
} as const;

const materialCanvasGraphite = {
  en: "Acrylic and graphite on canvas",
  fr: "Acrylique et graphite sur toile",
} as const;

const materialCopper = {
  en: "Acrylic on copper",
  fr: "Acrylique sur cuivre",
} as const;

export const recentWorks: Work[] = [
  {
    image: "/works/01.AKL.png",
    alt: "Ceremony, 2026",
    title: "Ceremony",
    year: "2026",
    material: materialCanvasInkGraphite,
    size: { en: "180 × 66 in", fr: "180 × 66 pouces" },
  },
  {
    image: "/works/04.AKL.png",
    alt: "Angles, 2026",
    title: "Angles",
    year: "2026",
    material: materialCopper,
    size: { en: "6 × 4 in", fr: "6 × 4 pouces" },
  },
  {
    image: "/works/02.AKL.png",
    alt: "Bruised, 2025",
    title: "Bruised",
    year: "2025",
    material: materialCanvasInkGraphite,
    size: { en: "108 × 66 in", fr: "108 × 66 pouces" },
  },
  {
    image: "/works/03.AKL.png",
    alt: "Tangles, 2026",
    title: "Tangles",
    year: "2026",
    material: materialCanvasGraphite,
    size: { en: "108 × 66 in", fr: "108 × 66 pouces" },
  },
  {
    image: "/works/copper.png",
    alt: "In Between, 2026",
    title: "In Between",
    year: "2026",
    material: materialCopper,
    size: {
      en: "Diptych, each panel 12 × 24 in",
      fr: "Diptyque, chaque panneau 12 × 24 pouces",
    },
  },
  {
    image: "/works/IMG_9265.png",
    alt: "Wild Is The Wind, 2025",
    title: "Wild Is The Wind",
    year: "2025",
    material: materialCanvasInkGraphite,
    size: { en: "108 × 66 in", fr: "108 × 66 pouces" },
  },
  {
    image: "/works/DSCF3867.png",
    alt: "Big Red, 2025",
    title: "Big Red",
    year: "2025",
    material: materialCanvasGraphite,
    size: { en: "108 × 60 in", fr: "108 × 60 pouces" },
  },
  {
    image: "/works/IMG_2083.png",
    alt: "Heel, 2026",
    title: "Heel",
    year: "2026",
    material: materialCanvasInkGraphite,
    size: { en: "66 × 84 in", fr: "66 × 84 pouces" },
  },
  {
    image: "/works/IMG_7396.jpg",
    alt: "Cantus in Memoriam",
    title: "Cantus in Memoriam",
    year: "",
    material: materialCanvasInkGraphite,
    size: { en: "156 × 66 in", fr: "156 × 66 pouces" },
  },
];

export const bioImage = {
  image: "/works/IMG_9813.jpg",
  alt: {
    en: "Artwork documentation",
    fr: "Documentation d'œuvre",
  },
} as const;

export const bioCopy = {
  paragraphs: {
    en: [
      "Alexei Kolakis-Landon is a Montreal-based painter, interested in painting as both a physical act and an intimate record of change. His practice is an exploration of the material qualities of paint as a means of reflecting on the body and its states of vulnerability, fragility and transformation. Working intuitively and without predetermined compositions, he embraces chance, accident, and the agency of the material itself, allowing the process of painting to guide each work as it unfolds.",
      "His paintings operate as a diaristic process through which memories, emotions, and lived experiences are translated into gesture and surface. Built through thin layers of acrylic, the works develop through bleeding, staining, dripping, and erasure, emphasizing paint's capacity to shift between control and surrender. These material transformations parallel the body's own instability and continual negotiation between presence and absence, resilience and vulnerability.",
      "Rather than arriving at fixed images, his paintings remain open and responsive. Forms emerge and dissolve, reflecting the fluid nature of memory and emotional experience. Through this ongoing process, painting becomes both a material investigation and a space where bodily and psychological experience are held in tension.",
    ],
    fr: [
      "Alexei Kolakis-Landon est un peintre basé à Montréal, intéressé par la peinture comme acte physique et comme trace intime du changement. Sa pratique explore les qualités matérielles de la peinture comme moyen de réfléchir au corps et à ses états de vulnérabilité, de fragilité et de transformation. Travaillant de manière intuitive et sans compositions prédéterminées, il accueille le hasard, l'accident et l'agence de la matière elle-même, laissant le processus de peindre guider chaque œuvre au fur et à mesure qu'elle se déploie.",
      "Ses peintures fonctionnent comme un processus diaristique à travers lequel souvenirs, émotions et expériences vécues se traduisent en geste et en surface. Construites par de minces couches d'acrylique, les œuvres se développent par coulures, taches, gouttes et effacements, soulignant la capacité de la peinture à passer du contrôle à l'abandon. Ces transformations matérielles font écho à l'instabilité du corps et à sa négociation continue entre présence et absence, résilience et vulnérabilité.",
      "Plutôt que d'aboutir à des images figées, ses peintures restent ouvertes et réactives. Les formes émergent et se dissolvent, reflétant la nature fluide de la mémoire et de l'expérience émotionnelle. À travers ce processus continu, la peinture devient à la fois une investigation matérielle et un espace où l'expérience corporelle et psychologique se tient en tension.",
    ],
  },
  email: "alexei.kolakis@icloud.com",
  instagram: {
    url: "https://www.instagram.com/alexeikolakislandon/",
    handle: "@alexeikolakislandon",
  },
} as const;

export const exhibition = {
  image: "/works/exhibition.jpg",
  alt: {
    en: "Installation view, Shared Ground",
    fr: "Vue d'installation",
  },
  caption: {
    en: "Partial exhibition view of Ceremony, 2026. Duo exhibition with Tomas Dessureault. Montreal, QC.",
    fr: "Vue partielle de l'exposition Ceremony, 2026. Exposition duo avec Tomas Dessureault. Montréal, QC.",
  },
} as const;

export const pressItems = [
  {
    intro: {
      en: {
        before: "Excerpt from the accompanying text for ",
        emphasis: "Ceremony",
        after:
          ", a duo exhibition with Tomas Dessureault, by Thomas Antoine-Girard:",
      },
      fr: {
        before: "Extrait du texte d'accompagnement de ",
        emphasis: "Ceremony",
        after:
          ", une exposition duo avec Tomas Dessureault, par Thomas Antoine-Girard :",
      },
    },
    quoteEn:
      "In Alexei Kolakis-Landon’s work, painting is built around a material and process-based understanding of the medium. The subject of the work is not representation, but painting itself: its drips, its density, its erasures, its direct relationship to the body and to time. Nourished by an intuitive and almost ceremonial approach to the act of painting, his practice moves between the spontaneity of gesture, visual suspension, and psychological tension. Surfaces become traces of a process in which matter acts as an extension of human experience, while organic tones close to flesh or blood take part in a tension between the body and pictorial matter.",
    quoteFr:
      "Chez Alexei Kolakis-Landon, la peinture se construit autour d’une compréhension matérielle et processuelle du médium. Le sujet de l’œuvre n’est pas la représentation, mais la peinture elle-même : ses coulures, sa densité, ses effacements, son rapport direct au corps et au temps. Nourrie par une approche intuitive et presque cérémonielle de l’acte de peindre, sa pratique oscille entre spontanéité du geste, suspension visuelle et tension psychologique. Les surfaces deviennent ainsi les traces d’un processus dans lequel la matière agit comme prolongement de l’expérience humaine, tandis que des tonalités organiques proches de la chair ou du sang participent à une mise en tension du corps et de la matière picturale.",
  },
];

export function t(copy: LocalizedString, lang: Lang) {
  return copy[lang];
}
