import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { MATERIALS } from "@/data/materials";

export default function MaterialsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeading
            number="04"
            eyebrow="Materiality &amp; Tactility"
            title="Honest materials that age with grace."
            subtitle="We specify authentic, certified solid hardwoods, unbleached linens, architectural bouclés, and vegetable-tanned hides. No synthetic shortcuts; only substances that develop character over time."
          />
        </div>

        {/* Swatch Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MATERIALS.slice(0, 4).map((mat) => (
            <div
              key={mat.id}
              className="group bg-[#F4F0E8] border border-[#E8E2D5] hover:border-[#9E7E47] transition-all duration-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="relative aspect-square bg-[#E8E2D5] mb-6 overflow-hidden border border-[#E8E2D5]">
                  <Image
                    src={mat.image}
                    alt={mat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-[#141312]/90 backdrop-blur-sm px-2 py-1 text-[9px] font-mono font-semibold uppercase tracking-widest text-[#D4BC8B]">
                    {mat.code}
                  </div>
                </div>

                <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#9E7E47] font-semibold mb-1">
                  {mat.category}
                </div>
                <h3 className="font-serif text-2xl text-[#141312] font-normal mb-2">
                  {mat.name}
                </h3>
                <p className="text-xs sm:text-sm font-sans font-normal text-[#3D3A37] leading-relaxed mb-4">
                  {mat.description}
                </p>
              </div>

              <div className="border-t border-[#E8E2D5] pt-3 flex items-center justify-between text-xs font-sans text-[#2E2C2A]">
                <span>Origin: <strong>{mat.origin.split(" ")[0]}</strong></span>
                <span className="text-[#9E7E47] font-semibold">Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
