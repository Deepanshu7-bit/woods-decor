export interface Material {
  id: string;
  category: 'timber' | 'fabric' | 'leather' | 'metal' | 'stone';
  name: string;
  code: string;
  origin: string;
  description: string;
  image: string;
  colorTone: string;
  characteristics: string[];
}

export const MATERIALS: Material[] = [
  {
    id: "seasoned-walnut",
    category: "timber",
    name: "Seasoned Indian Walnut",
    code: "TIM-WN01",
    origin: "Sustainable Forestry Reserves",
    description: "Rich chocolate undertones with flowing natural grain and deep dimensional figure. Kiln-seasoned in our workshop to maintain equilibrium across varying climates.",
    image: "/assets/woodsdecor/materials/walnut.jpg",
    colorTone: "#4A3528",
    characteristics: ["Kiln-Dried", "Hand-Rubbed Organic Oil", "Develops Patina"]
  },
  {
    id: "natural-teak",
    category: "timber",
    name: "Aged Golden Teak",
    code: "TIM-TK02",
    origin: "Central Indian Forest Reserves",
    description: "Renowned for structural density, natural oils, and golden honey hues that soften with ambient light.",
    image: "/assets/woodsdecor/materials/walnut.jpg",
    colorTone: "#8B5A2B",
    characteristics: ["High Natural Oil Content", "Dimensional Stability", "Heirloom Durability"]
  },
  {
    id: "belgian-boucle",
    category: "fabric",
    name: "Architectural Heavy Bouclé",
    code: "TEX-BC01",
    origin: "Flemish Mills",
    description: "Rich looped yarn texture providing tactile warmth and volumetric depth to sculpted curved upholstery.",
    image: "/assets/woodsdecor/materials/boucle.jpg",
    colorTone: "#E8E2D5",
    characteristics: ["High Rub Count (50,000+)", "Stain-Resistant Treatment", "Sculptural Draping"]
  },
  {
    id: "raw-linen",
    category: "fabric",
    name: "Natural Washed Belgian Linen",
    code: "TEX-LN02",
    origin: "European Flax Growers",
    description: "Breathable natural slub weave with a relaxed, matte organic hand that cools in summer and retains warmth in winter.",
    image: "/assets/woodsdecor/materials/linen.jpg",
    colorTone: "#DCD4C4",
    characteristics: ["100% Organic Flax", "Breathable", "Pre-Shrunk Weave"]
  },
  {
    id: "top-grain-leather",
    category: "leather",
    name: "Full-Grain Saddle Leather",
    code: "LTH-SD01",
    origin: "Artisanal Tannery",
    description: "Vegetable-tanned uncorrected hide retaining natural grain variations, supple flexibility, and an unmistakable aroma.",
    image: "/assets/woodsdecor/materials/leather.jpg",
    colorTone: "#5C3A21",
    characteristics: ["Vegetable-Tanned", "Breathable Pore Structure", "Ages with Rich Patina"]
  },
  {
    id: "brushed-brass",
    category: "metal",
    name: "Muted Architectural Brass",
    code: "MTL-BR01",
    origin: "Custom Casting Foundry",
    description: "Solid brass components hand-brushed for directional grain and finished with a micro-crystalline wax seal to prevent tarnishing.",
    image: "/assets/woodsdecor/materials/brass.jpg",
    colorTone: "#BFA16F",
    characteristics: ["Solid Extruded Brass", "Directional Satin Brush", "Protective Matte Wax"]
  },
  {
    id: "roman-travertine",
    category: "stone",
    name: "Honed Roman Travertine",
    code: "STN-TR01",
    origin: "Italian Quarry",
    description: "Naturally pitted porous limestone with subtle warm cream banding, honed to a soft matte finish.",
    image: "/assets/woodsdecor/materials/travertine.jpg",
    colorTone: "#DFD9CE",
    characteristics: ["Honed Surface", "Natural Porosity", "Heat & Stain Sealed"]
  }
];
