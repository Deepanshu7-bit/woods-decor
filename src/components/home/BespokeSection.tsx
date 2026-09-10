import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BespokeSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              number="04"
              eyebrow="Private Commissions"
              title="Your space. Your proportions. Your piece."
              subtitle="Beyond our signature collections, Woods Decor operates a dedicated private commission atelier for architects, interior designers, and homeowners seeking one-of-a-kind bespoke creations."
            />

            <p className="text-sm sm:text-base font-sans font-normal text-[#2E2C2A] leading-relaxed">
              Whether you have architectural floorplans, AutoCAD drawings, hand sketches, or photographic references, our engineering and carpentry team builds custom furniture precisely calibrated to your ceiling heights, wall dimensions, and aesthetic brief.
            </p>

            <ul className="space-y-3.5 pt-2 text-xs sm:text-sm font-sans text-[#141312] font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9E7E47] shrink-0" />
                <span>Custom CAD development and scale proportion review</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9E7E47] shrink-0" />
                <span>Hand-selection of solid hardwood logs and custom stain matching</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9E7E47] shrink-0" />
                <span>White-glove in-home installation across India</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link
                href="/bespoke"
                className="inline-flex items-center gap-3 bg-[#141312] text-[#FBF9F5] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-[#9E7E47] transition-all duration-300 shadow-xl"
              >
                <span>Start A Private Commission</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4BC8B]" />
              </Link>
            </div>
          </div>

          {/* Right Blueprint Process Step Box */}
          <div className="lg:col-span-6 bg-[#F4F0E8] border border-[#E8E2D5] p-8 sm:p-12 space-y-8 shadow-xl">
            <div className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#9E7E47] font-semibold border-b border-[#E8E2D5] pb-3">
              The 5-Step Bespoke Journey
            </div>

            <div className="space-y-6">
              {[
                { step: "01", title: "Consultation & Brief", desc: "Share your room dimensions, moodboard sketches, or CAD drawings." },
                { step: "02", title: "Structural Engineering", desc: "Our team drafts production schematics and material specifications." },
                { step: "03", title: "Timber & Finish Curation", desc: "Choose wood species, hand-rubbed finishes, and fabric swatches." },
                { step: "04", title: "Atelier Fabrication", desc: "Master carpentry, hand-polish, and upholstery inside our Mohali works." },
                { step: "05", title: "White-Glove Placement", desc: "Careful crating, delivery, in-home assembly, and packaging removal." }
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[#9E7E47] shrink-0 pt-0.5">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-[#141312] font-medium">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#3D3A37] font-normal mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
