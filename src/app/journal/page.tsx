import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { JOURNAL_ARTICLES } from "@/data/journal";

export const metadata = {
  title: "The Atelier Journal — Woods Decor",
  description: "Essays on fine woodworking, wood seasoning, fabric aging, and spatial proportions from the workshop floor."
};

export default function JournalIndexPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeading
            number="08"
            eyebrow="The Atelier Journal"
            title="Essays on craft &amp; architecture."
            subtitle="Notes from our Mohali workshop on timber equilibrium, fabric performance, and ergonomic proportions."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((art) => (
            <Link
              key={art.id}
              href={`/journal/${art.slug}`}
              className="group flex flex-col bg-[#F4F0E8] border border-[#E8E2D5] hover:border-[#BFA16F] transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[16/10] bg-[#E8E2D5] overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/80 backdrop-blur-sm px-2 py-0.5 text-[8px] font-mono uppercase tracking-widest text-[#BFA16F]">
                  {art.category}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[10px] font-sans text-[#8C8780] mb-2 flex items-center justify-between">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#141312] group-hover:text-[#BFA16F] transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs font-sans text-[#66625D] line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-sans font-medium text-[#141312] group-hover:text-[#BFA16F] transition-colors">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
