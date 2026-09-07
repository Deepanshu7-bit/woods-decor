import { create } from "zustand";
import { PRODUCTS, Product } from "@/data/products";
import { MATERIALS } from "@/data/materials";

export interface ConfiguratorFabric {
  id: string;
  name: string;
  code: string;
  category: "boucle" | "linen" | "wool" | "leather" | "velvet";
  colorHex: string;
  texturePattern: string; // CSS blend overlay or texture class
  hueFilter: string; // CSS filter for color matrix shifting
}

export interface ConfiguratorTimber {
  id: string;
  name: string;
  code: string;
  colorHex: string;
  finishType: string;
  cssTint: string;
}

export interface ConfiguratorSize {
  id: string;
  label: string;
  tag: string;
  width: string;
  depth: string;
  height: string;
  seatHeight?: string;
  schematicScale: number; // For blueprint rendering
}

export interface ConfiguratorState {
  selectedProductId: string;
  selectedFabric: ConfiguratorFabric;
  selectedTimber: ConfiguratorTimber;
  selectedSize: ConfiguratorSize;
  activeViewAngle: number; // 0 for primary, 1 for angle 2
  isQuoteModalOpen: boolean;

  // Actions
  setSelectedProduct: (productId: string) => void;
  setSelectedFabric: (fabric: ConfiguratorFabric) => void;
  setSelectedTimber: (timber: ConfiguratorTimber) => void;
  setSelectedSize: (size: ConfiguratorSize) => void;
  setActiveViewAngle: (index: number) => void;
  setQuoteModalOpen: (open: boolean) => void;
  getSerializedConfiguration: () => {
    productName: string;
    productSlug: string;
    fabric: string;
    fabricCode: string;
    timber: string;
    timberCode: string;
    size: string;
    dimensions: string;
    timestamp: string;
  };
}

export const FABRIC_OPTIONS: ConfiguratorFabric[] = [
  {
    id: "flemish-oatmeal",
    name: "Flemish Oatmeal Bouclé",
    code: "TEX-BC01",
    category: "boucle",
    colorHex: "#EAE4D7",
    texturePattern: "radial-gradient(circle at 50% 50%, #FAF8F5 10%, #E2DACB 90%)",
    hueFilter: "none"
  },
  {
    id: "sand-belgian-linen",
    name: "Natural Washed Belgian Linen",
    code: "TEX-LN02",
    category: "linen",
    colorHex: "#D8CDBA",
    texturePattern: "linear-gradient(45deg, #E6DDD0 25%, #CEC3AF 75%)",
    hueFilter: "sepia(0.2) saturate(0.85) brightness(0.95)"
  },
  {
    id: "charcoal-wool-weft",
    name: "Charcoal Textured Wool",
    code: "TEX-WL03",
    category: "wool",
    colorHex: "#2B2927",
    texturePattern: "linear-gradient(135deg, #3A3735 0%, #1F1D1B 100%)",
    hueFilter: "brightness(0.38) contrast(1.2) grayscale(0.8)"
  },
  {
    id: "olive-drape-chenille",
    name: "Olive Drape Chenille",
    code: "TEX-CH04",
    category: "velvet",
    colorHex: "#4C513E",
    texturePattern: "linear-gradient(135deg, #5C634B 0%, #3B3F30 100%)",
    hueFilter: "hue-rotate(55deg) saturate(0.8) brightness(0.75)"
  },
  {
    id: "saddle-full-grain",
    name: "Saddle Full-Grain Leather",
    code: "LTH-SD01",
    category: "leather",
    colorHex: "#704828",
    texturePattern: "radial-gradient(ellipse at center, #8C5C34 0%, #57361A 100%)",
    hueFilter: "sepia(0.6) hue-rotate(-20deg) saturate(1.4) brightness(0.75)"
  }
];

export const TIMBER_OPTIONS: ConfiguratorTimber[] = [
  {
    id: "smoked-walnut",
    name: "Seasoned Smoked Walnut",
    code: "TIM-WN01",
    colorHex: "#4A3528",
    finishType: "Hand-Rubbed Organic Satin Wax",
    cssTint: "brightness(0.85) contrast(1.1)"
  },
  {
    id: "golden-teak",
    name: "Aged Golden Indian Teak",
    code: "TIM-TK02",
    colorHex: "#8B5A2B",
    finishType: "Traditional Natural Oil Polish",
    cssTint: "sepia(0.3) saturate(1.2) brightness(1.05)"
  },
  {
    id: "ebonized-ash",
    name: "Charcoal Ebonized Ash",
    code: "TIM-AS03",
    colorHex: "#181716",
    finishType: "Deep Matte Pore-Revealing Finish",
    cssTint: "grayscale(1) brightness(0.4)"
  }
];

export const CONFIGURABLE_PRODUCTS = [
  {
    id: "milano",
    name: "Milano Sofa",
    slug: "milano-sofa",
    categoryLabel: "Living · Sofas",
    heroImage: "/assets/woodsdecor/products/sofas/milano-1.jpg",
    angleImages: [
      "/assets/woodsdecor/products/sofas/milano-1.jpg",
      "/assets/woodsdecor/products/sofas/milano-2.jpg"
    ],
    sizes: [
      {
        id: "2-seater",
        label: "2-Seater (Compact Lounge)",
        tag: "Petit Footprint",
        width: "68 in (173 cm)",
        depth: "38 in (96 cm)",
        height: "32 in (81 cm)",
        seatHeight: "18 in (46 cm)",
        schematicScale: 0.85
      },
      {
        id: "3-seater",
        label: "3-Seater (Grand Lounge)",
        tag: "Standard Atelier",
        width: "90 in (228 cm)",
        depth: "38 in (96 cm)",
        height: "32 in (81 cm)",
        seatHeight: "18 in (46 cm)",
        schematicScale: 1.0
      },
      {
        id: "4-seater",
        label: "4-Seater (Architectural Suite)",
        tag: "Grand Estate",
        width: "108 in (274 cm)",
        depth: "40 in (102 cm)",
        height: "32 in (81 cm)",
        seatHeight: "18 in (46 cm)",
        schematicScale: 1.18
      }
    ]
  },
  {
    id: "aurelia",
    name: "Aurelia Armchair",
    slug: "aurelia-chair",
    categoryLabel: "Living · Armchairs",
    heroImage: "/assets/woodsdecor/products/chairs/aurelia-1.jpg",
    angleImages: [
      "/assets/woodsdecor/products/chairs/aurelia-1.jpg",
      "/assets/woodsdecor/products/chairs/aurelia-2.jpg"
    ],
    sizes: [
      {
        id: "classic",
        label: "Classic Proportions",
        tag: "Standard Footprint",
        width: "31 in (79 cm)",
        depth: "33 in (84 cm)",
        height: "35 in (89 cm)",
        seatHeight: "18 in (46 cm)",
        schematicScale: 1.0
      },
      {
        id: "generous",
        label: "Generous Fireside Scale",
        tag: "Deep Lounge",
        width: "35 in (89 cm)",
        depth: "36 in (91 cm)",
        height: "37 in (94 cm)",
        seatHeight: "18 in (46 cm)",
        schematicScale: 1.15
      }
    ]
  },
  {
    id: "ashford-bed",
    name: "Ashford Bed",
    slug: "ashford-bed",
    categoryLabel: "Bedroom · Beds",
    heroImage: "/assets/woodsdecor/products/beds/ashford-1.jpg",
    angleImages: ["/assets/woodsdecor/products/beds/ashford-1.jpg"],
    sizes: [
      {
        id: "queen",
        label: "Queen Bedstead",
        tag: "Mattress 60\"×80\"",
        width: "66 in (168 cm)",
        depth: "86 in (218 cm)",
        height: "54 in (137 cm)",
        schematicScale: 0.92
      },
      {
        id: "king",
        label: "King Master Bedstead",
        tag: "Mattress 76\"×80\"",
        width: "82 in (208 cm)",
        depth: "86 in (218 cm)",
        height: "54 in (137 cm)",
        schematicScale: 1.0
      }
    ]
  },
  {
    id: "ashford-console",
    name: "Ashford Console",
    slug: "ashford-console",
    categoryLabel: "Living · Consoles",
    heroImage: "/assets/woodsdecor/products/consoles/ashford-1.jpg",
    angleImages: ["/assets/woodsdecor/products/consoles/ashford-1.jpg"],
    sizes: [
      {
        id: "standard",
        label: "5-Foot Foyer Console",
        tag: "Standard Span",
        width: "60 in (152 cm)",
        depth: "16 in (41 cm)",
        height: "32 in (81 cm)",
        schematicScale: 1.0
      },
      {
        id: "grand",
        label: "6-Foot Gallery Console",
        tag: "Grand Span",
        width: "72 in (183 cm)",
        depth: "18 in (46 cm)",
        height: "32 in (81 cm)",
        schematicScale: 1.2
      }
    ]
  }
];

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  selectedProductId: "milano",
  selectedFabric: FABRIC_OPTIONS[0],
  selectedTimber: TIMBER_OPTIONS[0],
  selectedSize: CONFIGURABLE_PRODUCTS[0].sizes[1], // 3-Seater
  activeViewAngle: 0,
  isQuoteModalOpen: false,

  setSelectedProduct: (productId: string) => {
    const prod = CONFIGURABLE_PRODUCTS.find((p) => p.id === productId) || CONFIGURABLE_PRODUCTS[0];
    set({
      selectedProductId: productId,
      selectedSize: prod.sizes[0],
      activeViewAngle: 0
    });
  },

  setSelectedFabric: (fabric: ConfiguratorFabric) => set({ selectedFabric: fabric }),
  setSelectedTimber: (timber: ConfiguratorTimber) => set({ selectedTimber: timber }),
  setSelectedSize: (size: ConfiguratorSize) => set({ selectedSize: size }),
  setActiveViewAngle: (index: number) => set({ activeViewAngle: index }),
  setQuoteModalOpen: (open: boolean) => set({ isQuoteModalOpen: open }),

  getSerializedConfiguration: () => {
    const state = get();
    const prod = CONFIGURABLE_PRODUCTS.find((p) => p.id === state.selectedProductId) || CONFIGURABLE_PRODUCTS[0];
    return {
      productName: prod.name,
      productSlug: prod.slug,
      fabric: state.selectedFabric.name,
      fabricCode: state.selectedFabric.code,
      timber: state.selectedTimber.name,
      timberCode: state.selectedTimber.code,
      size: state.selectedSize.label,
      dimensions: `W: ${state.selectedSize.width} | D: ${state.selectedSize.depth} | H: ${state.selectedSize.height}`,
      timestamp: new Date().toISOString()
    };
  }
}));
