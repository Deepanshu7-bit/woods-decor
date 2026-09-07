export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'craft' | 'materials' | 'dimensions' | 'care';
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  content: {
    heading: string;
    paragraph: string;
  }[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "wood-seasoning-craft",
    slug: "the-science-of-wood-seasoning",
    title: "The Architecture of Grain: Why Kiln-Seasoning Precedes Every Cut",
    category: "craft",
    readTime: "5 min read",
    date: "Autumn 2024",
    excerpt: "Solid hardwood is alive; it breathes with humidity and responds to seasonal shifts. Inside the Mohali workshop, we explore why timber equilibrium is the single most critical step in heirloom furniture.",
    image: "/assets/woodsdecor/editorial/journal-craft.jpg",
    content: [
      {
        heading: "The Living Nature of Hardwood",
        paragraph: "Timber expands and contracts along its cellular grain in response to atmospheric moisture. If unseasoned wood is shaped into a dining table or sofa frame, seasonal dry spells will cause warping or joint tension. At Woods Decor, all rough-sawn lumber rests in temperature-controlled kilns until internal moisture content reaches an exact 8–10% equilibrium."
      },
      {
        heading: "Mortise-and-Tenon: The Timeless Joint",
        paragraph: "Rather than relying on metal brackets or brittle surface adhesives, our master carpenters carve interlocking tenons directly from the solid frame members. This mechanical union distributes structural loads throughout the wood skeleton, guaranteeing structural integrity across generations."
      }
    ]
  },
  {
    id: "tactile-materials-curation",
    slug: "textiles-that-age-gracefully",
    title: "Tactile Curation: Selecting Belgian Linen, Bouclé, and Full-Grain Hide",
    category: "materials",
    readTime: "4 min read",
    date: "Winter 2024",
    excerpt: "A guide to selecting upholstery materials that develop patina and character rather than degrading under everyday use.",
    image: "/assets/woodsdecor/editorial/journal-materials.jpg",
    content: [
      {
        heading: "Bouclé vs. Belgian Linen: Spatial Personality",
        paragraph: "Heavy looped bouclé catches ambient light across curved silhouettes, introducing architectural volume to minimalist rooms. In contrast, Belgian linen offers an earthy, relaxed matte texture that softens with age, making it the ideal partner for raw oil-finished teak."
      },
      {
        heading: "The Authenticity of Uncorrected Leather",
        paragraph: "We exclusively specify full-grain hides where natural grain markings, subtle color variations, and supple breathability are preserved. As the leather absorbs natural ambient oils, it burnishes into a deep, rich patina unique to its owner."
      }
    ]
  },
  {
    id: "spatial-proportions-guide",
    slug: "mastering-furniture-scale-and-clearance",
    title: "Scale, Clearance, & Line of Sight: An Architect's Guide to Living Rooms",
    category: "dimensions",
    readTime: "6 min read",
    date: "Spring 2025",
    excerpt: "How to balance sofa length, coffee table clearance, and walkway thresholds to create effortless spatial flow in generous interiors.",
    image: "/assets/woodsdecor/editorial/journal-proportions.jpg",
    content: [
      {
        heading: "The 18-Inch Rule of Coffee Table Clearance",
        paragraph: "The optimal distance between sofa seat edge and the central coffee table is 16 to 18 inches. This ensures comfortable leg clearance while keeping drinks and books effortlessly within arm reach without leaning forward."
      },
      {
        heading: "Anchoring Expansive Foyers",
        paragraph: "When specifying a console table for a grand entry gallery, choose a length that occupies between 60% and 75% of the available wall span. An undersized piece looks adrift; a proportionate piece anchors the architecture."
      }
    ]
  }
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return JOURNAL_ARTICLES.find(a => a.slug === slug);
}
