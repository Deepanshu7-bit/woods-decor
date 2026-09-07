import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COLLECTIONS } from "@/data/collections";

export default function CollectionsExhibition() {
  return (
    <section className="py-24 sm:py-32 bg-[#F4F0E8] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with Direct Collections Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            number="02"
            eyebrow="The Collections"
            title="Curated worlds of bespoke living."
            subtitle="Explore our architectural furniture categories, from commanding living room sofas to quiet bedroom heirlooms."
          />
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#141312] hover:text-[#9E7E47] transition-colors shrink-0 mb-4 md:mb-16 py-1 border-b-2 border-[#141312] hover:border-[#9E7E47]"
          >
            <span>View All Collections</span>
            <ArrowUpRight className="w-4 h-4 text-[#9E7E47]" />
          </Link>
        </div>

        {/* Asymmetric Editorial Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col, idx) => (
            <Link
              key={col.id}
              href={`/collections/${col.slug}`}
              className={`group flex flex-col bg-[#FBF9F5] border border-[#E8E2D5] hover:border-[#9E7E47] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden bg-[#E8E2D5] ${
                  idx === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 cubic-bezier(0.16,1,0.3,1) group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/85 via-[#141312]/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Overlaid Title & Count */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D4BC8B] font-semibold block mb-1">
                      {col.accent}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                      {col.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#E8E2D5] font-normal mt-1 max-w-sm hidden sm:block leading-relaxed">
                      {col.subtitle}
                    </p>
                  </div>
                  <div className="w-11 h-11 border border-white/30 bg-[#141312]/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#BFA16F] transition-all shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#141312]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
