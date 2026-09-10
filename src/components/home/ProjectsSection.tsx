import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F4F0E8] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            number="05"
            eyebrow="Architectural Works"
            title="Private residences &amp; commissioned suites."
            subtitle="Explore how Woods Decor bespoke pieces anchor high-end private residences and modern architecture across India."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#141312] hover:text-[#9E7E47] transition-colors shrink-0 mb-4 md:mb-16 py-1 border-b-2 border-[#141312] hover:border-[#9E7E47]"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-[#9E7E47]" />
          </Link>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <Link
              key={proj.id}
              href={`/projects#${proj.slug}`}
              className="group flex flex-col bg-[#FBF9F5] border border-[#E8E2D5] hover:border-[#9E7E47] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] bg-[#E8E2D5] overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 backdrop-blur-sm px-3 py-1 text-[9px] font-sans uppercase tracking-widest text-white font-medium">
                  {proj.location}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[10px] font-sans uppercase tracking-wider text-[#9E7E47] font-semibold mb-1.5">
                    {proj.category} · {proj.year}
                  </div>
                  <h3 className="font-serif text-2xl text-[#141312] group-hover:text-[#9E7E47] transition-colors mb-3 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-normal text-[#3D3A37] line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-sans text-[#141312]">
                  <span className="text-[#66625D] text-[11px] uppercase tracking-wider font-medium">
                    {proj.architecturalStyle}
                  </span>
                  <span className="font-semibold text-[#141312] group-hover:text-[#9E7E47] transition-colors flex items-center gap-1">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
