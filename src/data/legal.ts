export interface LegalSection {
  id: string;
  title: string;
  description: string;
  items: {
    question?: string;
    heading?: string;
    answer: string;
  }[];
}

export const LEGAL_DATA: {
  faq: LegalSection;
  careGuide: LegalSection;
  sizeGuide: LegalSection;
  shipping: LegalSection;
  returns: LegalSection;
} = {
  faq: {
    id: "faq",
    title: "Frequently Asked Questions",
    description: "Everything you need to know about our bespoke ordering process, workshop visits, and production timelines.",
    items: [
      {
        question: "Can I customize the dimensions of any Woods Decor piece?",
        answer: "Yes. Every piece in our collection is made to order in our Mohali atelier. You can modify overall length, depth, seat height, wood species, and fabric selection to suit your room's exact floorplan."
      },
      {
        question: "How long does a bespoke order take from confirmation to delivery?",
        answer: "Typical production lead times are approximately 6 to 10 weeks depending on the complexity of carving, joinery, and custom fabric sourcing. We keep you updated with workshop milestone images during fabrication."
      },
      {
        question: "Can I visit the Woods Decor workshop and showroom in Mohali?",
        answer: "Yes, we welcome architects, interior designers, and private clients to visit our integrated facility at Plot no. 786-787, Sector 82, JLPL, Mohali. You can inspect active carpentry, polish, and upholstery divisions in person by booking an appointment."
      },
      {
        question: "Can I provide my own CAD drawings or reference sketches for a 100% custom piece?",
        answer: "Absolutely. Our bespoke design engineering team regularly develops one-of-a-kind private commissions from architectural drawings, floor plans, or moodboard references."
      },
      {
        question: "Do you ship across India and internationally?",
        answer: "We provide white-glove delivery and in-home assembly across all major metropolitan areas in India. We also coordinate international logistics (including our presence in Melbourne, Australia)."
      }
    ]
  },
  careGuide: {
    id: "care-guide",
    title: "Product Knowledge & Care Guide",
    description: "How to preserve the beauty, finish, and structural integrity of your solid hardwood and upholstered heirlooms.",
    items: [
      {
        heading: "Solid Hardwood & Polish Care",
        answer: "Dust regularly with a dry, lint-free microfiber cloth. Avoid positioning solid wood furniture in direct sunlight or within 2 meters of intense heating vents. Clean spills immediately with a damp cloth; never use chemical cleaners containing ammonia, silicone, or acetone."
      },
      {
        heading: "Linen & Bouclé Fabric Maintenance",
        answer: "Vacuum weekly with a soft brush attachment on low suction to prevent ambient dust from settling into yarn fibers. For spot cleaning, dab (do not rub) with distilled water and mild natural textile soap."
      },
      {
        heading: "Full-Grain Leather Care",
        answer: "Wipe with a barely damp cloth once a month. Apply an organic beeswax-based leather balm twice a year to preserve suppleness and nourish natural pores."
      },
      {
        heading: "Brass & Metal Accents",
        answer: "Our brass hardware features an architectural satin wax finish. Clean gently with a soft dry cloth. Do not apply abrasive brass polishes which may strip the protective matte barrier."
      }
    ]
  },
  sizeGuide: {
    id: "size-guide",
    title: "Size & Dimension Guide",
    description: "Standard architectural specifications and clearance recommendations for each furniture category.",
    items: [
      {
        heading: "Living Room Sofas & Armchairs",
        answer: "2-Seater: Width 60\"–72\" | 3-Seater: Width 84\"–96\" | Grand Lounge: Width 96\"–110\" | Standard Depth: 34\"–44\" | Seat Height: 17\"–19\". Ensure a minimum 30\" perimeter walkway around the main seating grouping."
      },
      {
        heading: "Dining Tables & Chairs",
        answer: "4-Seat: 48\"×36\" | 6-Seat: 72\"×40\" | 8-Seat: 96\"×42\" | 10-Seat: 120\"×48\" | Table Height: 30\". Allow at least 36\" from table edge to nearest wall or sideboard to pull chairs out smoothly."
      },
      {
        heading: "Beds & Headboard Footprints",
        answer: "Queen: Mattress 60\"×80\" (Frame 66\"×86\") | King: Mattress 76\"×80\" (Frame 82\"×86\") | Cal King: Mattress 72\"×84\" (Frame 78\"×90\") | Headboard Heights: 48\"–62\"."
      },
      {
        heading: "Console Tables & Credenzas",
        answer: "Widths: 48\"–72\" | Depth: 14\"–18\" | Height: 30\"–34\". Recommended wall coverage: 60%–75% of total foyer or accent wall span."
      }
    ]
  },
  shipping: {
    id: "shipping",
    title: "Shipping & White-Glove Delivery",
    description: "Transparent delivery, transit safety, and in-home placement standards.",
    items: [
      {
        heading: "White-Glove In-Home Placement",
        answer: "Every piece is carefully wrapped with protective corner guards, moisture barriers, and reinforced wooden crating. Our delivery team carries the piece into your room of choice, assembles all hardware, levels the furniture, and removes all packing materials."
      },
      {
        heading: "Delivery Timelines",
        answer: "Because every piece is handcrafted made-to-order, standard transit begins immediately after final workshop quality sign-off (approx. 6–10 weeks from order confirmation)."
      },
      {
        heading: "Access & Threshold Checks",
        answer: "Prior to delivery, our logistics team coordinates staircase widths, elevator heights, and entryway clearances to ensure smooth installation."
      }
    ]
  },
  returns: {
    id: "returns",
    title: "Cancellation & Bespoke Policy",
    description: "Details regarding bespoke commissions and order modifications.",
    items: [
      {
        heading: "Made-to-Order Commitment",
        answer: "Because our pieces are built specifically to client specifications and chosen finishes, cancellations or specification changes can be accommodated within 48 hours of order confirmation prior to raw timber cutting."
      },
      {
        heading: "Quality Warranty & Transit Guarantee",
        answer: "In the unlikely event of transit damage or structural manufacturing discrepancy, Woods Decor repairs or replaces the affected component under our comprehensive atelier warranty."
      }
    ]
  }
};
