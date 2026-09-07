export interface WorkshopWing {
  id: string;
  number: string;
  title: string;
  discipline: string;
  description: string;
  processes: string[];
  image: string;
  craftsmanQuote: string;
}

export const WORKSHOP_WINGS: WorkshopWing[] = [
  {
    id: "carpentry",
    number: "01",
    title: "Carpentry & Joinery",
    discipline: "The Structural Foundation",
    description: "The foundation of every Woods Decor piece. Traditional master joinery meets precision machinery to engineer internal frames built for multi-generational longevity. Every piece uses kiln-dried seasoned hardwood with traditional mortise-and-tenon and dowel reinforcements.",
    processes: [
      "Kiln-seasoning of solid hardwood timbers to 8-10% moisture equilibrium",
      "Traditional mortise-and-tenon structural framing",
      "Hand-planed joints and corner block load reinforcements",
      "Tolerance inspection for lifetime structural rigidity"
    ],
    image: "/assets/woodsdecor/workshop/carpentry.jpg",
    craftsmanQuote: "If the internal skeleton isn't engineered for fifty years, no amount of polish can save it."
  },
  {
    id: "polish",
    number: "02",
    title: "Polish & Surface Alchemy",
    discipline: "Where Raw Wood Meets Light",
    description: "Where raw furniture transforms into tactile luxury. Skilled artisan hands layer natural oils, organic stains, and hand-rubbed lacquers to accentuate the unique grain, warmth, and depth of the timber.",
    processes: [
      "Progressive hand-sanding from 120 through 600 grit",
      "Deep penetrating grain enhancement with natural oils",
      "Multi-coat hand-buffed protective satin finish",
      "Edge burnishing and wax sealing for silky hand feel"
    ],
    image: "/assets/woodsdecor/workshop/polish.jpg",
    craftsmanQuote: "Finishing is not covering the wood; it is helping the wood tell its personal history."
  },
  {
    id: "fabric",
    number: "03",
    title: "Fabric & Upholstery",
    discipline: "Ergonomic Sculpting & Tailoring",
    description: "Transforming internal frameworks into luxurious, comfortable seating. Multi-density cushioning, webbing, pocket springs, and precision pattern cutting ensure every seam, tuft, and piping line aligns seamlessly.",
    processes: [
      "Multi-density zoned foam layering with feather-down wraps",
      "Heavy-duty elastic webbing and tied steel pocket spring systems",
      "Pattern matching for natural bouclé, linens, and hides",
      "Hand-sewn piping, blind stitching, and double-needle seams"
    ],
    image: "/assets/woodsdecor/workshop/upholstery.jpg",
    craftsmanQuote: "True comfort is visual precision matched with immediate physical ease."
  }
];

export const COMPANY_INFO = {
  name: "Woods Decor",
  legalName: "Woods Decor Private Limited",
  founded: 2018,
  industryExperience: "30+ Years Industry Leadership",
  headquarters: {
    address: "Plot no. 786-787, Sector 82, JLPL, Mohali, Punjab 160055, India",
    phone: "+91 98154 20668",
    email: "info@woodsdecor.in",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM | Sun: 11:00 AM – 5:00 PM",
    image: "/assets/woodsdecor/showroom/mohali-showroom.jpg",
    googleMapsUrl: "https://maps.google.com/maps?q=30.655495,76.728207&z=17"
  },
  internationalShowrooms: [
    {
      city: "Melbourne",
      country: "Australia",
      opened: "2023",
      tagline: "Exclusive International Flagship",
      image: "/assets/woodsdecor/showroom/melbourne-showroom.jpg"
    }
  ],
  stats: [
    { value: "30+", label: "Years Industry Experience" },
    { value: "100%", label: "Made to Order in Mohali" },
    { value: "6–10", label: "Weeks White-Glove Delivery" },
    { value: "2", label: "Global Flagship Locations" }
  ]
};
