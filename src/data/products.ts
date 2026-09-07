export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'living' | 'bedroom' | 'dining' | 'lighting' | 'mirrors' | 'decor';
  subCategory: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  sizeGuide: string;
  dimensions: {
    width?: string;
    depth?: string;
    height?: string;
    seatHeight?: string;
    options?: { label: string; dimensions: string }[];
  };
  materials: string[];
  finishes: string[];
  images: string[];
  heroImage: string;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  leadTime: string;
}

export const PRODUCTS: Product[] = [
  // SOFAS
  {
    id: "milano",
    slug: "milano-sofa",
    name: "Milano Sofa",
    category: "living",
    subCategory: "sofas",
    categoryLabel: "Living · Sofas",
    tagline: "Architectural lines with uncompromising lounging comfort",
    description: "The Woods Decor Milano Sofa combines contemporary elegance with timeless comfort. Its clean architectural lines, deep proportioned seating, and luxurious multi-density cushioning deliver a seating experience that is both inviting and visually striking. Handcrafted in our Mohali atelier with kiln-dried solid hardwood joinery.",
    sizeGuide: "2-Seater W 60–72 in · 3-Seater W 84–96 in · Luxury W 96–110 in · D 34–44 in · H 30–36 in",
    dimensions: {
      options: [
        { label: "2-Seater", dimensions: "W 68\" × D 38\" × H 32\"" },
        { label: "3-Seater", dimensions: "W 90\" × D 38\" × H 32\"" },
        { label: "Grand 4-Seater", dimensions: "W 108\" × D 40\" × H 32\"" }
      ]
    },
    materials: ["Solid Seasoned Hardwood", "High-Resilience Multi-Density Foam", "Belgian Linen or Bouclé Upholstery", "Concealed Brass Glides"],
    finishes: ["Smoked Walnut", "Natural Teak", "Charcoal Ebonized", "Brushed Brass Accents"],
    images: [
      "/assets/woodsdecor/products/sofas/milano-1.jpg",
      "/assets/woodsdecor/products/sofas/milano-2.jpg"
    ],
    heroImage: "/assets/woodsdecor/products/sofas/milano-1.jpg",
    isFeatured: true,
    isNewArrival: true,
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "cortina",
    slug: "cortina-sofa",
    name: "Cortina Sofa",
    category: "living",
    subCategory: "sofas",
    categoryLabel: "Living · Sofas",
    tagline: "A refined expression of modern European luxury",
    description: "The Woods Decor Cortina Sofa is a refined expression of modern luxury. Its sleek silhouette, plush feather-blend seating, and exceptional tailored upholstery create a harmonious balance of comfort and architectural sophistication.",
    sizeGuide: "2-Seater W 60–72 in · 3-Seater W 84–96 in · Luxury W 96–110 in · D 34–44 in · H 30–36 in",
    dimensions: {
      options: [
        { label: "3-Seater", dimensions: "W 88\" × D 38\" × H 33\"" },
        { label: "4-Seater", dimensions: "W 104\" × D 40\" × H 33\"" }
      ]
    },
    materials: ["Hardwood Internal Frame", "Feather-Down Wrapped Cushions", "Italian Textured Weave", "Hand-Finished Timber Base"],
    finishes: ["Warm Walnut", "Natural Teak", "Muted Brass Plinth"],
    images: [
      "/assets/woodsdecor/products/sofas/cortina-1.jpg"
    ],
    heroImage: "/assets/woodsdecor/products/sofas/cortina-1.jpg",
    isFeatured: true,
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "monte-carlo",
    slug: "monte-carlo-sofa",
    name: "Monte Carlo Sofa",
    category: "living",
    subCategory: "sofas",
    categoryLabel: "Living · Sofas",
    tagline: "Commanding silhouette crafted for grand living environments",
    description: "The Woods Decor Monte Carlo Sofa represents refined luxury at its finest. Its commanding silhouette, exceptional materials, and meticulous hand-tailored tufting create a statement piece of enduring beauty.",
    sizeGuide: "2-Seater W 60–72 in · 3-Seater W 84–96 in · Luxury W 96–110 in · D 34–44 in · H 30–36 in",
    dimensions: {
      options: [
        { label: "3-Seater", dimensions: "W 92\" × D 40\" × H 34\"" },
        { label: "Grand Lounge", dimensions: "W 112\" × D 42\" × H 34\"" }
      ]
    },
    materials: ["Solid Indian Hardwood", "Memory Foam Support", "Textured Chenille or Bouclé"],
    finishes: ["Deep Walnut", "Ebonized Ash", "Raw Teak"],
    images: ["/assets/woodsdecor/products/sofas/monte-carlo-1.jpg"],
    heroImage: "/assets/woodsdecor/products/sofas/monte-carlo-1.jpg",
    isFeatured: true,
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "portofino",
    slug: "portofino-sofa",
    name: "Portofino Sofa",
    category: "living",
    subCategory: "sofas",
    categoryLabel: "Living · Sofas",
    tagline: "Effortless Italian coastal sophistication and relaxed luxury",
    description: "The Woods Decor Portofino Sofa embodies effortless luxury through its elegant silhouette and exceptional craftsmanship. Generously proportioned seating, refined tailoring, and premium upholstery create a sophisticated centerpiece designed for modern living.",
    sizeGuide: "2-Seater W 60–72 in · 3-Seater W 84–96 in · Luxury W 96–110 in · D 34–44 in · H 30–36 in",
    dimensions: {
      options: [
        { label: "3-Seater", dimensions: "W 86\" × D 38\" × H 31\"" },
        { label: "4-Seater", dimensions: "W 100\" × D 40\" × H 31\"" }
      ]
    },
    materials: ["Reinforced Hardwood", "Pocket-Spring Core", "Belgian Linen"],
    finishes: ["Sandwashed Teak", "Muted Walnut"],
    images: ["/assets/woodsdecor/products/sofas/portofino-1.jpg"],
    heroImage: "/assets/woodsdecor/products/sofas/portofino-1.jpg",
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "bellagio",
    slug: "bellagio-sofa",
    name: "Bellagio Sofa",
    category: "living",
    subCategory: "sofas",
    categoryLabel: "Living · Sofas",
    tagline: "Sculptural curves and plush hospitality-grade cushioning",
    description: "The Woods Decor Bellagio Sofa celebrates luxurious living through exceptional materials and impeccable craftsmanship. Elegant curves and deep seating ensure both comfort and timeless appeal.",
    sizeGuide: "2-Seater W 60–72 in · 3-Seater W 84–96 in · Luxury W 96–110 in · D 34–44 in · H 30–36 in",
    dimensions: {
      options: [{ label: "Curved 3-Seater", dimensions: "W 94\" × D 42\" × H 32\"" }]
    },
    materials: ["Hardwood Frame", "Curved Plywood Support", "Heavy Bouclé"],
    finishes: ["Natural Oak/Teak", "Smoked Walnut"],
    images: ["/assets/woodsdecor/products/sofas/bellagio-1.jpg"],
    heroImage: "/assets/woodsdecor/products/sofas/bellagio-1.jpg",
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "capri",
    slug: "capri-sofa",
    name: "Capri Sofa",
    category: "living",
    subCategory: "sofas",
    categoryLabel: "Living · Sofas",
    tagline: "Contemporary silhouette paired with relaxed ergonomics",
    description: "The Woods Decor Capri Sofa blends contemporary sophistication with relaxed comfort. Tailored upholstery and refined finishes create a statement piece suited to distinguished interiors.",
    sizeGuide: "2-Seater W 60–72 in · 3-Seater W 84–96 in · Luxury W 96–110 in · D 34–44 in · H 30–36 in",
    dimensions: { options: [{ label: "Standard 3-Seater", dimensions: "W 88\" × D 38\" × H 32\"" }] },
    materials: ["Solid Hardwood Frame", "Plush Down Feather Blend", "Premium Texture Upholstery"],
    finishes: ["Natural Teak", "Walnut Finish"],
    images: ["/assets/woodsdecor/products/sofas/capri-1.jpg"],
    heroImage: "/assets/woodsdecor/products/sofas/capri-1.jpg",
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "sovereign-sofa",
    slug: "sovereign-sofa",
    name: "Sovereign Sofa",
    category: "living",
    subCategory: "sofas",
    categoryLabel: "Living · Sofas",
    tagline: "Stately presence and bespoke handcrafted tailoring",
    description: "The Woods Decor Sovereign Sofa embodies refined luxury through its commanding silhouette and exceptional craftsmanship. Generously proportioned seating, elegant detailing, and premium upholstery create a sophisticated centerpiece.",
    sizeGuide: "2-Seater W 60–72 in · 3-Seater W 84–96 in · Luxury W 96–110 in · D 34–44 in · H 30–36 in",
    dimensions: { options: [{ label: "Grand 4-Seater", dimensions: "W 102\" × D 42\" × H 34\"" }] },
    materials: ["Kiln-Dried Hardwood", "Hand-Tufted Cushioning", "Full Grain Leather or Velvet"],
    finishes: ["Dark Walnut", "Antique Brass Trims"],
    images: ["/assets/woodsdecor/products/sofas/sovereign-1.jpg"],
    heroImage: "/assets/woodsdecor/products/sofas/sovereign-1.jpg",
    isFeatured: true,
    leadTime: "6–8 weeks (Made to Order)"
  },

  // ARMCHAIRS
  {
    id: "aurelia",
    slug: "aurelia-chair",
    name: "Aurelia Armchair",
    category: "living",
    subCategory: "chairs",
    categoryLabel: "Living · Armchairs",
    tagline: "A refined blend of European classicism and contemporary luxury",
    description: "The Woods Decor Aurelia Chair is a refined blend of European classicism and contemporary luxury. Gracefully sculpted legs feature delicate hand-carved detailing, while the clean silhouette introduces a modern sense of sophistication. Upholstered in sumptuous fabric and framed in finely finished hardwood, Aurelia offers exceptional comfort while elevating any interior with timeless elegance.",
    sizeGuide: "W 28–34 in · D 30–36 in · H 32–38 in · Seat H 17–19 in",
    dimensions: {
      width: "31\"",
      depth: "33\"",
      height: "35\"",
      seatHeight: "18\""
    },
    materials: ["Hand-Carved Solid Hardwood Frame", "High-Density Core Cushion", "Textured Linen or Bouclé", "Hand-Rubbed Lacquer"],
    finishes: ["Aged Walnut", "French Natural Wood", "Ebonized Black", "Polished Brass Caps"],
    images: [
      "/assets/woodsdecor/products/chairs/aurelia-1.jpg",
      "/assets/woodsdecor/products/chairs/aurelia-2.jpg"
    ],
    heroImage: "/assets/woodsdecor/products/chairs/aurelia-1.jpg",
    isFeatured: true,
    isNewArrival: true,
    leadTime: "4–6 weeks (Made to Order)"
  },
  {
    id: "astoria",
    slug: "astoria-chair",
    name: "Astoria Armchair",
    category: "living",
    subCategory: "chairs",
    categoryLabel: "Living · Armchairs",
    tagline: "Traditional artistry meets modern sculpted contours",
    description: "The Woods Decor Astoria Chair reflects a balance of traditional artistry and modern refinement. Delicate carved accents and a gracefully shaped backrest lend character, while premium upholstery ensures exceptional comfort.",
    sizeGuide: "W 28–34 in · D 30–36 in · H 32–38 in · Seat H 17–19 in",
    dimensions: { width: "30\"", depth: "32\"", height: "36\"", seatHeight: "18\"" },
    materials: ["Solid Seasoned Hardwood", "Hand-Tailored Piping", "Wool Blend Fabric"],
    finishes: ["Classic Walnut", "Rich Teak"],
    images: ["/assets/woodsdecor/products/chairs/astoria-1.jpg"],
    heroImage: "/assets/woodsdecor/products/chairs/astoria-1.jpg",
    leadTime: "4–6 weeks (Made to Order)"
  },
  {
    id: "florence",
    slug: "florence-chair",
    name: "Florence Armchair",
    category: "living",
    subCategory: "chairs",
    categoryLabel: "Living · Armchairs",
    tagline: "Subtle wood profiling and sumptuous enveloping seat",
    description: "The Woods Decor Florence Chair embodies effortless luxury with its sophisticated silhouette and expertly crafted wood frame. Subtle detailing and rich textures create a timeless aesthetic, making it a versatile addition to both classic and contemporary interiors.",
    sizeGuide: "W 28–34 in · D 30–36 in · H 32–38 in · Seat H 17–19 in",
    dimensions: { width: "32\"", depth: "34\"", height: "34\"", seatHeight: "18\"" },
    materials: ["Solid Hardwood", "Dual-Layer Foam", "Italian Bouclé"],
    finishes: ["Smoked Walnut", "Bleached Teak"],
    images: ["/assets/woodsdecor/products/chairs/florence-1.jpg"],
    heroImage: "/assets/woodsdecor/products/chairs/florence-1.jpg",
    isFeatured: true,
    leadTime: "4–6 weeks (Made to Order)"
  },
  {
    id: "kensington-chair",
    slug: "kensington-chair",
    name: "Kensington Armchair",
    category: "living",
    subCategory: "chairs",
    categoryLabel: "Living · Armchairs",
    tagline: "Inspired by classic European residences and timeless comfort",
    description: "The Woods Decor Kensington Chair is inspired by classic European residences and contemporary luxury. Its distinguished profile, handcrafted wood frame, and tailored upholstery create a refined seating experience designed for elegant interiors.",
    sizeGuide: "W 28–34 in · D 30–36 in · H 32–38 in · Seat H 17–19 in",
    dimensions: { width: "31\"", depth: "33\"", height: "37\"", seatHeight: "18.5\"" },
    materials: ["Solid Timber Frame", "Pocket Spring Base", "Textured Chenille"],
    finishes: ["Royal Walnut", "Dark Mahogany"],
    images: ["/assets/woodsdecor/products/chairs/kensington-1.jpg"],
    heroImage: "/assets/woodsdecor/products/chairs/kensington-1.jpg",
    leadTime: "4–6 weeks (Made to Order)"
  },

  // BEDS
  {
    id: "ashford-bed",
    slug: "ashford-bed",
    name: "Ashford Bed",
    category: "bedroom",
    subCategory: "beds",
    categoryLabel: "Bedroom · Beds",
    tagline: "Balanced proportions and exquisite architectural detailing",
    description: "Defined by balanced proportions and exquisite detailing, the Ashford Bed offers a timeless interpretation of modern luxury and comfort. Handcrafted headboard with precision upholstery and a recessed solid hardwood base that creates a floating architectural silhouette.",
    sizeGuide: "Queen 60×80 · King 76×80 · Cal King 72×84 in (mattress) · Headboard H 48–60 in",
    dimensions: {
      options: [
        { label: "Queen", dimensions: "W 66\" × L 86\" × Headboard H 54\"" },
        { label: "King", dimensions: "W 82\" × L 86\" × Headboard H 54\"" },
        { label: "Cal King", dimensions: "W 78\" × L 90\" × Headboard H 54\"" }
      ]
    },
    materials: ["Solid Hardwood Internal Structure", "Padded Acoustic Headboard", "Hand-Selected Linen/Velvet", "Concealed Slat Frame"],
    finishes: ["Smoked Walnut", "Natural Teak", "Muted Brass Plinth Trim"],
    images: ["/assets/woodsdecor/products/beds/ashford-1.jpg"],
    heroImage: "/assets/woodsdecor/products/beds/ashford-1.jpg",
    isFeatured: true,
    isNewArrival: true,
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "beaumont-bed",
    slug: "beaumont-bed",
    name: "Beaumont Bed",
    category: "bedroom",
    subCategory: "beds",
    categoryLabel: "Bedroom · Beds",
    tagline: "Transforms the bedroom into a sanctuary of understated elegance",
    description: "The Beaumont Bed blends classic inspiration with contemporary refinement. Its distinguished presence transforms the bedroom into a sanctuary of luxury.",
    sizeGuide: "Queen 60×80 · King 76×80 · Cal King 72×84 in (mattress) · Headboard H 48–60 in",
    dimensions: {
      options: [
        { label: "King Size", dimensions: "W 84\" × L 88\" × Headboard H 58\"" }
      ]
    },
    materials: ["Solid Hardwood", "Deep Tufted Upholstery", "Hand-Rubbed Wax Polish"],
    finishes: ["Teak Natural", "Aged Walnut"],
    images: ["/assets/woodsdecor/products/beds/beaumont-1.jpg"],
    heroImage: "/assets/woodsdecor/products/beds/beaumont-1.jpg",
    isFeatured: true,
    leadTime: "6–8 weeks (Made to Order)"
  },
  {
    id: "sovereign-bed",
    slug: "sovereign-bed",
    name: "Sovereign Bed",
    category: "bedroom",
    subCategory: "beds",
    categoryLabel: "Bedroom · Beds",
    tagline: "A masterful expression of luxury anchoring refined master suites",
    description: "A masterful expression of luxury, the Sovereign Bed combines commanding presence with exceptional craftsmanship. Designed to anchor refined interiors, it offers timeless elegance and enduring comfort.",
    sizeGuide: "Queen 60×80 · King 76×80 · Cal King 72×84 in (mattress) · Headboard H 48–60 in",
    dimensions: {
      options: [
        { label: "King Size", dimensions: "W 86\" × L 90\" × Headboard H 62\"" }
      ]
    },
    materials: ["Hardwood Frame", "Full-Grain Leather or Velvet Headboard", "Brass Inlay"],
    finishes: ["Dark Walnut", "Ebony Gloss"],
    images: ["/assets/woodsdecor/products/beds/sovereign-1.jpg"],
    heroImage: "/assets/woodsdecor/products/beds/sovereign-1.jpg",
    leadTime: "6–8 weeks (Made to Order)"
  },

  // CONSOLES
  {
    id: "ashford-console",
    slug: "ashford-console",
    name: "Ashford Console",
    category: "living",
    subCategory: "consoles",
    categoryLabel: "Living · Consoles",
    tagline: "Understated foyer and living room focal point with sculptural joinery",
    description: "A refined expression of timeless craftsmanship, the Ashford Console brings understated elegance to sophisticated interiors. Its balanced proportions and meticulous detailing create a distinguished focal point for entryways and living rooms.",
    sizeGuide: "48–72 W × 14–18 D × 30–34 H in",
    dimensions: {
      width: "60\"",
      depth: "16\"",
      height: "32\""
    },
    materials: ["Solid Seasoned Hardwood", "Hand-Cut Beveled Edges", "Brushed Brass Dowel Details"],
    finishes: ["Smoked Walnut", "Natural Teak", "Ebonized Ash"],
    images: ["/assets/woodsdecor/products/consoles/ashford-1.jpg"],
    heroImage: "/assets/woodsdecor/products/consoles/ashford-1.jpg",
    isFeatured: true,
    leadTime: "4–6 weeks (Made to Order)"
  },
  {
    id: "mayfair-console",
    slug: "mayfair-console",
    name: "Mayfair Console",
    category: "living",
    subCategory: "consoles",
    categoryLabel: "Living · Consoles",
    tagline: "Understated elegance of classic British interiors in modern form",
    description: "Inspired by the understated elegance of classic British interiors, the Mayfair Console blends sophistication with functionality. Crafted with precision, it offers a timeless expression of luxury living.",
    sizeGuide: "48–72 W × 14–18 D × 30–34 H in",
    dimensions: { width: "64\"", depth: "15\"", height: "32\"" },
    materials: ["Solid Hardwood", "Soft-Close Concealed Drawers", "Brushed Brass Pulls"],
    finishes: ["Warm Walnut", "Natural Polished Teak"],
    images: ["/assets/woodsdecor/products/consoles/mayfair-1.jpg"],
    heroImage: "/assets/woodsdecor/products/consoles/mayfair-1.jpg",
    leadTime: "4–6 weeks (Made to Order)"
  },

  // DINING
  {
    id: "heritage-dining-table",
    slug: "heritage-dining-table",
    name: "Heritage Dining Table",
    category: "dining",
    subCategory: "dining",
    categoryLabel: "Dining · Tables",
    tagline: "Generously proportioned heirloom table celebrating natural wood grain",
    description: "Handcrafted from seasoned hardwood planks selected for depth of grain and character. Traditional mortise-and-tenon joinery and hand-rubbed organic oil polish ensure a surface that ages gracefully over decades.",
    sizeGuide: "4-seat 48×36 · 6-seat 72×40 · 8-seat 96×42 · 10-seat 120×48 in · H 30 in",
    dimensions: {
      options: [
        { label: "6-Seater", dimensions: "L 78\" × W 40\" × H 30\"" },
        { label: "8-Seater", dimensions: "L 96\" × W 42\" × H 30\"" },
        { label: "10-Seater", dimensions: "L 120\" × W 48\" × H 30\"" }
      ]
    },
    materials: ["Solid Indian Teak / Rosewood", "Traditional Mortise & Tenon Joinery", "Organic Matte Sealant"],
    finishes: ["Natural Teak", "Smoked Walnut", "Raw Matte Wax Finish"],
    images: ["/assets/woodsdecor/products/dining/dining-table-1.jpg"],
    heroImage: "/assets/woodsdecor/products/dining/dining-table-1.jpg",
    isFeatured: true,
    leadTime: "6–8 weeks (Made to Order)"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isFeatured);
}
