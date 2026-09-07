import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar, Compass } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnicalRule from "@/components/ui/TechnicalRule";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Architectural Projects & Case Studies — Woods Decor",
  description: "Explore bespoke furniture commissions curated for private residences and modern architecture across India."
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionHeading
            number="07"
            eyebrow="Architectural Case Studies"
            title="Private residences &amp; curated spaces."
            subtitle="Explore how Woods Decor bespoke heirlooms inhabit architectural homes across India, from exposed-concrete villas to light-filled penthouses."
          />
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {PROJECTS.map((proj, idx) => (
            <article
              id={proj.slug}
              key={proj.id}
              className="bg-[#F4F0E8] border border-[#E8E2D5] p-8 sm:p-12 shadow-xl space-y-12"
            >
              {/* Project Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E8E2D5] pb-6 gap-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-sans text-[#8C8780] uppercase tracking-widest mb-2">
                    <span className="text-[#BFA16F] font-mono">0{idx + 1}</span>
                    <span>·</span>
                    <span>{proj.location}</span>
                    <span>·</span>
                    <span>{proj.year}</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
                    {proj.title}
                  </h2>
                </div>

                <div className="text-left lg:text-right">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#8C8780] block">
                    Architectural Style
                  </span>
                  <span className="font-serif text-lg text-[#141312]">
                    {proj.architecturalStyle}
                  </span>
                </div>
              </div>

              {/* Main Large Hero Feature Image */}
              <div className="relative aspect-[16/9] bg-[#E8E2D5] overflow-hidden border border-[#E8E2D5]">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>

              {/* Brief & Process Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm font-sans text-[#66625D] leading-relaxed">
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="font-serif text-2xl text-[#141312] font-medium">
                    The Architectural Brief
                  </h3>
                  <p className="font-light">{proj.brief}</p>
                  <p className="font-light">{proj.summary}</p>
                </div>

                <div className="lg:col-span-6 bg-[#FBF9F5] border border-[#E8E2D5] p-6 space-y-4">
                  <div className="text-[10px] font-sans uppercase tracking-widest text-[#BFA16F]">
                    Curation &amp; Bespoke Pieces Specified
                  </div>
                  <ul className="space-y-2 text-xs font-sans text-[#141312]">
                    {proj.curation.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#BFA16F]">✔</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-[#E8E2D5]">
                    <Link
                      href="/bespoke"
                      className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#141312] hover:text-[#BFA16F] font-medium"
                    >
                      <span>Inquire for Similar Space</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
