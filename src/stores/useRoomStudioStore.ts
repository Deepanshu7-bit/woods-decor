import { create } from "zustand";

export interface RoomItem {
  instanceId: string;
  productId: string;
  name: string;
  slug: string;
  category: "sofas" | "chairs" | "tables" | "consoles" | "lighting" | "mirrors" | "decor";
  image: string;
  x: number; // percentage 0-100 on canvas
  y: number; // percentage 0-100 on canvas
  scale: number; // 0.6 - 1.6
  rotation: number; // -45 to 45 deg
  zIndex: number;
  selectedFabric: string;
  selectedFinish: string;
  dimensions: string;
}

export interface RoomPreset {
  id: string;
  name: string;
  subtitle: string;
  wallAtmosphere: string; // CSS background style
  floorStyle: string;
  items: RoomItem[];
}

export const ROOM_PRESETS: RoomPreset[] = [
  {
    id: "warm-contemporary",
    name: "Warm Contemporary Living",
    subtitle: "Organic bone plaster walls, smoked walnut accents, and travertine coffee centerpiece.",
    wallAtmosphere: "linear-gradient(180deg, #ECE5D8 0%, #DFD5C4 65%, #C2B5A0 100%)",
    floorStyle: "linear-gradient(180deg, #A89B87 0%, #8A7B66 100%)",
    items: [
      {
        instanceId: "item-milano-1",
        productId: "milano",
        name: "Milano 3-Seater Sofa",
        slug: "milano-sofa",
        category: "sofas",
        image: "/assets/woodsdecor/products/sofas/milano-1.jpg",
        x: 48,
        y: 52,
        scale: 1.15,
        rotation: 0,
        zIndex: 10,
        selectedFabric: "Flemish Oatmeal Bouclé",
        selectedFinish: "Seasoned Smoked Walnut",
        dimensions: "W 90\" × D 38\" × H 32\""
      },
      {
        instanceId: "item-aurelia-1",
        productId: "aurelia",
        name: "Aurelia Armchair",
        slug: "aurelia-chair",
        category: "chairs",
        image: "/assets/woodsdecor/products/chairs/aurelia-1.jpg",
        x: 18,
        y: 60,
        scale: 0.95,
        rotation: 12,
        zIndex: 20,
        selectedFabric: "Natural Washed Belgian Linen",
        selectedFinish: "Aged Golden Teak",
        dimensions: "W 31\" × D 33\" × H 35\""
      },
      {
        instanceId: "item-console-1",
        productId: "ashford-console",
        name: "Ashford Console Table",
        slug: "ashford-console",
        category: "consoles",
        image: "/assets/woodsdecor/products/consoles/ashford-1.jpg",
        x: 82,
        y: 38,
        scale: 0.85,
        rotation: -4,
        zIndex: 5,
        selectedFabric: "Solid Hardwood",
        selectedFinish: "Smoked Walnut & Brass Dowels",
        dimensions: "W 60\" × D 16\" × H 32\""
      }
    ]
  },
  {
    id: "modern-heritage",
    name: "Modern Heritage Suite",
    subtitle: "Monumental proportions, deep walnut joinery, and tailored European velvet upholstery.",
    wallAtmosphere: "linear-gradient(180deg, #383431 0%, #2A2724 60%, #1A1817 100%)",
    floorStyle: "linear-gradient(180deg, #24201D 0%, #171514 100%)",
    items: [
      {
        instanceId: "item-sovereign-1",
        productId: "sovereign",
        name: "Sovereign Grand Sofa",
        slug: "sovereign-sofa",
        category: "sofas",
        image: "/assets/woodsdecor/products/sofas/sovereign-1.jpg",
        x: 46,
        y: 50,
        scale: 1.2,
        rotation: 0,
        zIndex: 10,
        selectedFabric: "Charcoal Textured Wool",
        selectedFinish: "Royal Dark Walnut",
        dimensions: "W 102\" × D 42\" × H 34\""
      },
      {
        instanceId: "item-kensington-1",
        productId: "kensington",
        name: "Kensington Armchair",
        slug: "kensington-chair",
        category: "chairs",
        image: "/assets/woodsdecor/products/chairs/kensington-1.jpg",
        x: 20,
        y: 58,
        scale: 0.98,
        rotation: 14,
        zIndex: 20,
        selectedFabric: "Saddle Full-Grain Leather",
        selectedFinish: "Dark Walnut",
        dimensions: "W 31\" × D 33\" × H 37\""
      },
      {
        instanceId: "item-mayfair-1",
        productId: "mayfair",
        name: "Mayfair Console",
        slug: "mayfair-console",
        category: "consoles",
        image: "/assets/woodsdecor/products/consoles/mayfair-1.jpg",
        x: 80,
        y: 36,
        scale: 0.9,
        rotation: -6,
        zIndex: 5,
        selectedFabric: "Solid Hardwood",
        selectedFinish: "Warm Walnut with Brass Trims",
        dimensions: "W 64\" × D 15\" × H 32\""
      }
    ]
  },
  {
    id: "quiet-monochrome",
    name: "Quiet Monochrome Atelier",
    subtitle: "Muted travertine, linen silhouettes, and bronze accents for airy minimalist spaces.",
    wallAtmosphere: "linear-gradient(180deg, #F5F1E8 0%, #E9E1D2 60%, #D4C9B5 100%)",
    floorStyle: "linear-gradient(180deg, #B5A995 0%, #9C8F79 100%)",
    items: [
      {
        instanceId: "item-cortina-1",
        productId: "cortina",
        name: "Cortina 4-Seater Lounge",
        slug: "cortina-sofa",
        category: "sofas",
        image: "/assets/woodsdecor/products/sofas/cortina-1.jpg",
        x: 50,
        y: 52,
        scale: 1.15,
        rotation: 0,
        zIndex: 10,
        selectedFabric: "Natural Washed Belgian Linen",
        selectedFinish: "Bleached Teak",
        dimensions: "W 104\" × D 40\" × H 33\""
      },
      {
        instanceId: "item-florence-1",
        productId: "florence",
        name: "Florence Armchair",
        slug: "florence-chair",
        category: "chairs",
        image: "/assets/woodsdecor/products/chairs/florence-1.jpg",
        x: 22,
        y: 58,
        scale: 0.95,
        rotation: 10,
        zIndex: 20,
        selectedFabric: "Flemish Oatmeal Bouclé",
        selectedFinish: "Bleached Teak",
        dimensions: "W 32\" × D 34\" × H 34\""
      },
      {
        instanceId: "item-carlisle-1",
        productId: "carlisle",
        name: "Carlisle Console Table",
        slug: "ashford-console",
        category: "consoles",
        image: "/assets/woodsdecor/products/consoles/carlisle-1.jpg",
        x: 78,
        y: 38,
        scale: 0.88,
        rotation: -5,
        zIndex: 5,
        selectedFabric: "Honed Roman Travertine",
        selectedFinish: "Muted Brushed Brass Base",
        dimensions: "W 60\" × D 16\" × H 32\""
      }
    ]
  }
];

export const CATALOG_ADDABLES = [
  // Sofas
  {
    id: "milano",
    name: "Milano Sofa",
    slug: "milano-sofa",
    category: "sofas" as const,
    image: "/assets/woodsdecor/products/sofas/milano-1.jpg",
    dimensions: "W 90\" × D 38\" × H 32\"",
    defaultFabric: "Flemish Oatmeal Bouclé",
    defaultFinish: "Smoked Walnut"
  },
  {
    id: "cortina",
    name: "Cortina Sofa",
    slug: "cortina-sofa",
    category: "sofas" as const,
    image: "/assets/woodsdecor/products/sofas/cortina-1.jpg",
    dimensions: "W 88\" × D 38\" × H 33\"",
    defaultFabric: "Natural Belgian Linen",
    defaultFinish: "Warm Walnut"
  },
  {
    id: "monte-carlo",
    name: "Monte Carlo Sofa",
    slug: "monte-carlo-sofa",
    category: "sofas" as const,
    image: "/assets/woodsdecor/products/sofas/monte-carlo-1.jpg",
    dimensions: "W 92\" × D 40\" × H 34\"",
    defaultFabric: "Textured Chenille",
    defaultFinish: "Deep Walnut"
  },
  {
    id: "sovereign",
    name: "Sovereign Sofa",
    slug: "sovereign-sofa",
    category: "sofas" as const,
    image: "/assets/woodsdecor/products/sofas/sovereign-1.jpg",
    dimensions: "W 102\" × D 42\" × H 34\"",
    defaultFabric: "Full-Grain Leather",
    defaultFinish: "Dark Walnut"
  },
  // Armchairs
  {
    id: "aurelia",
    name: "Aurelia Armchair",
    slug: "aurelia-chair",
    category: "chairs" as const,
    image: "/assets/woodsdecor/products/chairs/aurelia-1.jpg",
    dimensions: "W 31\" × D 33\" × H 35\"",
    defaultFabric: "Linen Weave",
    defaultFinish: "Aged Teak"
  },
  {
    id: "astoria",
    name: "Astoria Armchair",
    slug: "astoria-chair",
    category: "chairs" as const,
    image: "/assets/woodsdecor/products/chairs/astoria-1.jpg",
    dimensions: "W 30\" × D 32\" × H 36\"",
    defaultFabric: "Wool Blend",
    defaultFinish: "Classic Walnut"
  },
  {
    id: "florence",
    name: "Florence Armchair",
    slug: "florence-chair",
    category: "chairs" as const,
    image: "/assets/woodsdecor/products/chairs/florence-1.jpg",
    dimensions: "W 32\" × D 34\" × H 34\"",
    defaultFabric: "Bouclé",
    defaultFinish: "Smoked Walnut"
  },
  {
    id: "kensington",
    name: "Kensington Armchair",
    slug: "kensington-chair",
    category: "chairs" as const,
    image: "/assets/woodsdecor/products/chairs/kensington-1.jpg",
    dimensions: "W 31\" × D 33\" × H 37\"",
    defaultFabric: "Textured Velvet",
    defaultFinish: "Royal Walnut"
  },
  // Consoles
  {
    id: "ashford-console",
    name: "Ashford Console",
    slug: "ashford-console",
    category: "consoles" as const,
    image: "/assets/woodsdecor/products/consoles/ashford-1.jpg",
    dimensions: "W 60\" × D 16\" × H 32\"",
    defaultFabric: "Solid Hardwood",
    defaultFinish: "Smoked Walnut"
  },
  {
    id: "mayfair",
    name: "Mayfair Console",
    slug: "mayfair-console",
    category: "consoles" as const,
    image: "/assets/woodsdecor/products/consoles/mayfair-1.jpg",
    dimensions: "W 64\" × D 15\" × H 32\"",
    defaultFabric: "Solid Hardwood",
    defaultFinish: "Warm Walnut"
  },
  {
    id: "regent",
    name: "Regent Console",
    slug: "regent-console",
    category: "consoles" as const,
    image: "/assets/woodsdecor/products/consoles/regent-1.jpg",
    dimensions: "W 68\" × D 16\" × H 32\"",
    defaultFabric: "Solid Hardwood",
    defaultFinish: "Aged Teak"
  },
  // Dining
  {
    id: "heritage-dining",
    name: "Heritage Dining Table",
    slug: "heritage-dining-table",
    category: "tables" as const,
    image: "/assets/woodsdecor/products/dining/dining-table-1.jpg",
    dimensions: "L 96\" × W 42\" × H 30\"",
    defaultFabric: "Seasoned Teak Planks",
    defaultFinish: "Natural Matte Wax"
  }
];

export interface RoomStudioState {
  activePresetId: string;
  placedItems: RoomItem[];
  selectedItemId: string | null;
  isSaveModalOpen: boolean;
  isAddDrawerOpen: boolean;
  filterCategory: string;

  // Actions
  loadPreset: (presetId: string) => void;
  addItem: (itemTemplate: typeof CATALOG_ADDABLES[0]) => void;
  selectItem: (instanceId: string | null) => void;
  updateItemPosition: (instanceId: string, x: number, y: number) => void;
  updateItemScale: (instanceId: string, delta: number) => void;
  updateItemRotation: (instanceId: string, deltaDeg: number) => void;
  updateItemMaterial: (instanceId: string, fabric: string, finish: string) => void;
  bringForward: (instanceId: string) => void;
  sendBackward: (instanceId: string) => void;
  removeItem: (instanceId: string) => void;
  clearRoom: () => void;
  setSaveModalOpen: (open: boolean) => void;
  setAddDrawerOpen: (open: boolean) => void;
  setFilterCategory: (category: string) => void;
  getSerializedRoomDossier: () => {
    presetName: string;
    itemCount: number;
    items: {
      name: string;
      slug: string;
      category: string;
      fabric: string;
      finish: string;
      dimensions: string;
      canvasX: number;
      canvasY: number;
    }[];
    timestamp: string;
  };
}

export const useRoomStudioStore = create<RoomStudioState>((set, get) => ({
  activePresetId: "warm-contemporary",
  placedItems: ROOM_PRESETS[0].items,
  selectedItemId: ROOM_PRESETS[0].items[0].instanceId,
  isSaveModalOpen: false,
  isAddDrawerOpen: false,
  filterCategory: "all",

  loadPreset: (presetId: string) => {
    const preset = ROOM_PRESETS.find((p) => p.id === presetId) || ROOM_PRESETS[0];
    set({
      activePresetId: presetId,
      placedItems: preset.items,
      selectedItemId: preset.items[0]?.instanceId || null
    });
  },

  addItem: (template) => {
    const currentItems = get().placedItems;
    const nextZ = Math.max(...currentItems.map((i) => i.zIndex), 0) + 1;
    const newItem: RoomItem = {
      instanceId: `item-${template.id}-${Date.now()}`,
      productId: template.id,
      name: template.name,
      slug: template.slug,
      category: template.category,
      image: template.image,
      x: 50 + (Math.random() * 10 - 5),
      y: 50 + (Math.random() * 10 - 5),
      scale: 1.0,
      rotation: 0,
      zIndex: nextZ,
      selectedFabric: template.defaultFabric,
      selectedFinish: template.defaultFinish,
      dimensions: template.dimensions
    };

    set({
      placedItems: [...currentItems, newItem],
      selectedItemId: newItem.instanceId,
      isAddDrawerOpen: false
    });
  },

  selectItem: (instanceId) => set({ selectedItemId: instanceId }),

  updateItemPosition: (instanceId, x, y) => {
    const clampedX = Math.max(5, Math.min(95, x));
    const clampedY = Math.max(15, Math.min(85, y));
    set({
      placedItems: get().placedItems.map((i) =>
        i.instanceId === instanceId ? { ...i, x: clampedX, y: clampedY } : i
      )
    });
  },

  updateItemScale: (instanceId, delta) => {
    set({
      placedItems: get().placedItems.map((i) => {
        if (i.instanceId !== instanceId) return i;
        const newScale = Math.max(0.6, Math.min(1.6, i.scale + delta));
        return { ...i, scale: Number(newScale.toFixed(2)) };
      })
    });
  },

  updateItemRotation: (instanceId, deltaDeg) => {
    set({
      placedItems: get().placedItems.map((i) => {
        if (i.instanceId !== instanceId) return i;
        const newRot = Math.max(-45, Math.min(45, i.rotation + deltaDeg));
        return { ...i, rotation: newRot };
      })
    });
  },

  updateItemMaterial: (instanceId, fabric, finish) => {
    set({
      placedItems: get().placedItems.map((i) =>
        i.instanceId === instanceId
          ? { ...i, selectedFabric: fabric, selectedFinish: finish }
          : i
      )
    });
  },

  bringForward: (instanceId) => {
    const items = get().placedItems;
    const target = items.find((i) => i.instanceId === instanceId);
    if (!target) return;
    const maxZ = Math.max(...items.map((i) => i.zIndex));
    set({
      placedItems: items.map((i) =>
        i.instanceId === instanceId ? { ...i, zIndex: maxZ + 1 } : i
      )
    });
  },

  sendBackward: (instanceId) => {
    const items = get().placedItems;
    const target = items.find((i) => i.instanceId === instanceId);
    if (!target) return;
    const minZ = Math.min(...items.map((i) => i.zIndex));
    set({
      placedItems: items.map((i) =>
        i.instanceId === instanceId ? { ...i, zIndex: Math.max(1, minZ - 1) } : i
      )
    });
  },

  removeItem: (instanceId) => {
    const filtered = get().placedItems.filter((i) => i.instanceId !== instanceId);
    set({
      placedItems: filtered,
      selectedItemId: filtered[0]?.instanceId || null
    });
  },

  clearRoom: () => set({ placedItems: [], selectedItemId: null }),
  setSaveModalOpen: (open) => set({ isSaveModalOpen: open }),
  setAddDrawerOpen: (open) => set({ isAddDrawerOpen: open }),
  setFilterCategory: (cat) => set({ filterCategory: cat }),

  getSerializedRoomDossier: () => {
    const state = get();
    const preset = ROOM_PRESETS.find((p) => p.id === state.activePresetId) || ROOM_PRESETS[0];
    return {
      presetName: preset.name,
      itemCount: state.placedItems.length,
      items: state.placedItems.map((item) => ({
        name: item.name,
        slug: item.slug,
        category: item.category,
        fabric: item.selectedFabric,
        finish: item.selectedFinish,
        dimensions: item.dimensions,
        canvasX: Math.round(item.x),
        canvasY: Math.round(item.y)
      })),
      timestamp: new Date().toISOString()
    };
  }
}));
