import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { JOURNAL_ARTICLES } from "@/data/journal";

export default function JournalSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            number="11"
            eyebrow="The Atelier Journal"
            title="Essays on craft, scale &amp; materiality."
            subtitle="Notes from the workshop floor on timber seasoning, fabric aging, and spatial proportions."
          />
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#141312] hover:text-[#9E7E47] transition-colors shrink-0 mb-4 md:mb-16 py-1 border-b-2 border-[#141312] hover:border-[#9E7E47]"
          >
            <span>Read All Articles</span>
            <ArrowUpRight className="w-4 h-4 text-[#9E7E47]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((art) => (
            <Link
              key={art.id}
              href={`/journal/${art.slug}`}
              className="group flex flex-col bg-[#F4F0E8] border border-[#E8E2D5] hover:border-[#9E7E47] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] bg-[#E8E2D5] overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#D4BC8B] font-semibold">
                  {art.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-sans text-[#66625D] font-medium mb-2 flex items-center justify-between">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#141312] group-hover:text-[#9E7E47] transition-colors mb-3 leading-snug font-normal">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-normal text-[#3D3A37] line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-sans font-semibold text-[#141312] group-hover:text-[#9E7E47] transition-colors">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
