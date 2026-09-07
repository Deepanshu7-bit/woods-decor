export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  count: number;
}

export const COLLECTIONS: Collection[] = [
  {
    id: "living",
    slug: "living",
    title: "Living",
    subtitle: "The room where the house gathers",
    description: "Sofas, sculpted armchairs, consoles, and centerpieces crafted with solid hardwood frames, hand-stitched upholstery, and finishes that develop character with age.",
    image: "/assets/woodsdecor/collections/living.jpg",
    accent: "01 / ATELIER SEATING",
    count: 24
  },
  {
    id: "bedroom",
    slug: "bedroom",
    title: "Bedroom",
    subtitle: "Sanctuaries of quiet proportion and rest",
    description: "Architectural beds, floating headboards, and tailored nightstands designed to transform personal quarters into serene retreats of acoustic calm and timeless elegance.",
    image: "/assets/woodsdecor/collections/bedroom.jpg",
    accent: "02 / HEIRLOOM BEDS",
    count: 14
  },
  {
    id: "dining",
    slug: "dining",
    title: "Dining",
    subtitle: "Tables and seating built for hospitality and time",
    description: "Substantial hardwood tables and ergonomic dining armchairs engineered with traditional mortise-and-tenon joinery to host generations of conversation.",
    image: "/assets/woodsdecor/collections/dining.jpg",
    accent: "03 / GATHERING TABLES",
    count: 8
  },
  {
    id: "lighting",
    slug: "lighting",
    title: "Lighting",
    subtitle: "Sculptural luminaires and architectural warmth",
    description: "Atmospheric fixtures combining hand-turned wood, brushed brass, and diffused illumination to define spatial mood.",
    image: "/assets/woodsdecor/collections/lighting.jpg",
    accent: "04 / AMBIENT LUMINAIRES",
    count: 6
  },
  {
    id: "mirrors",
    slug: "mirrors",
    title: "Mirrors",
    subtitle: "Reflections framed in hand-finished hardwoods",
    description: "Artisanal wall and floor mirrors featuring hand-beveled glass set into sculpted wood profiles with antique patinas.",
    image: "/assets/woodsdecor/collections/mirrors.jpg",
    accent: "05 / ARCHITECTURAL FRAMES",
    count: 7
  },
  {
    id: "decor",
    slug: "decor",
    title: "Décor",
    subtitle: "Tactile objects of craft and substance",
    description: "Curated accents, turned vessels, and custom pedestals that complete interior compositions with subtle materiality.",
    image: "/assets/woodsdecor/collections/decor.jpg",
    accent: "06 / CURATED OBJECTS",
    count: 11
  }
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find(c => c.slug === slug);
}
