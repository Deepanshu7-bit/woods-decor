import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/workshop";

export default function BrandIntroduction() {
  return (
    <section id="introduction" className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              number="01"
              eyebrow="The Atelier House"
              title="Refined interpretations of timeless design."
              subtitle="Woods Decor was forged out of a passion to create refined interpretations of the finest bespoke furniture. Taking elements of history and bringing them to life with new designs is our greatest joy — inspired by heritage while engineering for contemporary architecture."
            />

            <div className="space-y-4 text-sm sm:text-base font-sans font-normal text-[#2E2C2A] leading-relaxed">
              <p>
                Headquartered in Mohali, our showroom, manufacturing unit, and corporate office sit under one integrated roof at <strong>Plot no. 786-787, Sector 82, JLPL</strong>.
              </p>
              <p>
                Our promoters bring over 30 years of deep industry expertise. Every piece is handcrafted by master artisans across dedicated carpentry, polish, and upholstery divisions, expanding now from Punjab to private residences across India and our exclusive international showroom in Melbourne, Australia.
              </p>
            </div>

            {/* Key Verified Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E8E2D5]">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl text-[#141312] font-medium">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#66625D] font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/atelier"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#141312] hover:text-[#9E7E47] transition-colors py-1.5 border-b-2 border-[#141312] hover:border-[#9E7E47]"
              >
                <span>Read The House Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#9E7E47]" />
              </Link>
            </div>
          </div>

          {/* Right Layered Editorial Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-[#F4F0E8] border border-[#E8E2D5] overflow-hidden shadow-2xl">
              <Image
                src="/assets/woodsdecor/editorial/spotlight.jpg"
                alt="Woods Decor Atelier Living Room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#141312]/90 backdrop-blur-md p-4 text-white text-xs font-sans flex items-center justify-between border border-white/10">
                <span className="uppercase tracking-widest text-[#D4BC8B] text-[10px] font-medium">
                  Showroom Spotlight
                </span>
                <span className="text-[#FBF9F5] font-medium">Living Collection</span>
              </div>
            </div>

            {/* Overlapping Tactile Detail Box */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 bg-[#FBF9F5] p-6 border border-[#E8E2D5] shadow-2xl max-w-xs">
              <span className="text-[9px] font-sans uppercase tracking-widest text-[#9E7E47] font-bold block mb-1">
                Atelier Principle
              </span>
              <p className="font-serif text-base text-[#141312] italic font-normal">
                “Every Woods Decor piece tells a story of master craftsmanship that only grows richer with age.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
