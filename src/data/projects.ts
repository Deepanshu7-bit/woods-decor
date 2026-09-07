export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  architecturalStyle: string;
  image: string;
  gallery: string[];
  summary: string;
  brief: string;
  curation: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "chandigarh-residence",
    slug: "chandigarh-brutalist-villa",
    title: "Sector 9 Modernist Residence",
    location: "Chandigarh, India",
    year: "2024",
    category: "Private Commission",
    architecturalStyle: "Warm Brutalism & Exposed Concrete",
    image: "/assets/woodsdecor/editorial/project-chandigarh.jpg",
    gallery: [
      "/assets/woodsdecor/editorial/project-chandigarh.jpg",
      "/assets/woodsdecor/editorial/lookbook-1.jpg",
      "/assets/woodsdecor/editorial/spotlight.jpg"
    ],
    summary: "A bespoke furniture curation anchoring expansive double-height concrete galleries with warm seasoned walnut and architectural bouclé seating.",
    brief: "The client sought a suite of substantial furniture pieces that could hold presence against monumental board-formed concrete walls while remaining invitingly tactile.",
    curation: ["Custom Milano 4-Seater in Charcoal Bouclé", "Aurelia Armchairs in Sandwashed Teak", "Ashford Custom Console Table"]
  },
  {
    id: "delhi-penthouse",
    slug: "delhi-skyline-penthouse",
    title: "Chanakyapuri Heritage Penthouse",
    location: "New Delhi, India",
    year: "2023",
    category: "Full Residence Suite",
    architecturalStyle: "Modern Heritage & High Ceilings",
    image: "/assets/woodsdecor/editorial/project-delhi.jpg",
    gallery: [
      "/assets/woodsdecor/editorial/project-delhi.jpg",
      "/assets/woodsdecor/editorial/lookbook-2.jpg",
      "/assets/woodsdecor/editorial/lookbook-3.jpg"
    ],
    summary: "Handcrafted beds, dining suites, and tailored living room compositions balancing European proportions with Indian hardwood heritage.",
    brief: "Designing bespoke living and master suite furniture calibrated to specific room footprints, incorporating custom brass inlays and acoustic fabric headboards.",
    curation: ["Sovereign Bed Suite in Aged Walnut", "Heritage Dining Table (10-Seater)", "Astoria Armchairs in Washed Linen"]
  },
  {
    id: "mumbai-villa",
    slug: "alibaug-coastal-retreat",
    title: "Coastal Pavilion Residence",
    location: "Alibaug / Mumbai Coast, India",
    year: "2024",
    category: "Bespoke Villa Project",
    architecturalStyle: "Tropical Modern & Open Verandahs",
    image: "/assets/woodsdecor/editorial/project-mumbai.jpg",
    gallery: [
      "/assets/woodsdecor/editorial/project-mumbai.jpg",
      "/assets/woodsdecor/editorial/lookbook-4.jpg",
      "/assets/woodsdecor/editorial/lookbook-5.jpg"
    ],
    summary: "Seaside pavilion furniture crafted from oil-finished teak with moisture-resistant joinery and relaxed Belgian linen cushioning.",
    brief: "Furnishing an open-air indoor/outdoor pavilion requiring weather-tested hardwoods, natural breathable fabrics, and low-slung lounging geometry.",
    curation: ["Portofino Lounge Sofas", "Florence Armchairs", "Mayfair Custom Teak Consoles"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}
