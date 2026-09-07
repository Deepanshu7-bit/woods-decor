import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TestimonialsSection() {
  const commissions = [
    {
      quote: "From our initial architectural blueprint review to the in-home white-glove placement, Woods Decor translated our spatial brief with absolute joinery precision. The seasoned walnut seating holds presence effortlessly across our gallery.",
      patron: "Private Residence",
      scope: "Living Room Suite & Custom Milano Sofas",
      location: "Chanakyapuri, New Delhi"
    },
    {
      quote: "The structural weight and hand-rubbed finish of the solid teak pieces are immediately evident upon touch. It is rare to find an Indian atelier that honors traditional mortise-and-tenon construction with such contemporary restraint.",
      patron: "Architectural Villa",
      scope: "Bespoke Dining & Master Bedstead",
      location: "Sector 9, Chandigarh"
    },
    {
      quote: "The ability to calibrate seat depth, timber species, and custom Belgian linen upholstery allowed us to engineer pieces that feel completely organic to the home's open-verandah architecture.",
      patron: "Coastal Residence",
      scope: "Full Villa Furniture Curation",
      location: "Alibaug Coast, Maharashtra"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F4F0E8] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          number="10"
          eyebrow="Patron Commissions"
          title="Reflections on the bespoke journey."
          subtitle="Experiences from private homeowners, architects, and interior designers who have commissioned handcrafted pieces with the Woods Decor atelier."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {commissions.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FBF9F5] border border-[#E8E2D5] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] mb-6 font-medium">
                  Commission {`0${idx + 1}`} · {item.scope}
                </div>
                <p className="font-serif text-lg sm:text-xl text-[#141312] italic font-normal leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#E8E2D5] pt-4 flex items-baseline justify-between text-xs font-sans">
                <div>
                  <span className="font-bold text-[#141312] uppercase tracking-wider block">
                    {item.patron}
                  </span>
                  <span className="text-[11px] text-[#8C8780] font-normal">
                    {item.location}
                  </span>
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#BFA16F]">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
