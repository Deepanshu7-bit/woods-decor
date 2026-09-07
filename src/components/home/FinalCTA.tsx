import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-36 bg-[#141312] text-[#FBF9F5] relative overflow-hidden text-center">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#BFA16F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4BC8B]">
          Woods Decor · Mohali Atelier
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FFFFFF] leading-tight">
          Make space for something <br />
          <span className="italic font-normal text-[#E8E2D5]">truly personal.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg font-normal text-[#D8CEBE] max-w-xl mx-auto leading-relaxed">
          From private residential commissions to custom room layouts, our design directors and master craftsmen are ready to bring your vision to life.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6">
          <Link
            href="/bespoke"
            className="inline-flex items-center gap-3 bg-[#BFA16F] text-[#141312] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300 shadow-2xl"
          >
            <span>Book A Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 border border-white/30 text-[#FBF9F5] hover:border-white hover:bg-white hover:text-[#141312] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            <span>Explore The Collections</span>
          </Link>
        </div>

        <div className="pt-12 text-xs font-sans text-[#8C8780] font-medium">
          Showroom &amp; Manufacturing: Plot no. 786-787, Sector 82, JLPL, Mohali, Punjab · +91 98154 20668
        </div>
      </div>
    </section>
  );
}
