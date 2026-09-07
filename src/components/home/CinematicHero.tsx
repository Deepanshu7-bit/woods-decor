"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function CinematicHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-8 bg-[#141312] text-[#FBF9F5] overflow-hidden">
      {/* Background Ambient Video with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/woodsdecor/editorial/hero-editorial.jpg"
          className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-10000"
        >
          <source src="/assets/woodsdecor/editorial/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Layered Architectural Vignette for 100% Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141312]/95 via-[#141312]/80 to-[#141312]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-[#141312]/70" />
      </div>

      {/* Top Technical Metadata Line */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-[#D8CEBE] border-b border-white/15 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BFA16F]" />
          <span>Sec. 82 · Mohali Atelier</span>
        </div>
        <div className="hidden sm:block text-[#BFA16F]">
          Heirloom Craftsmanship &amp; Bespoke Architecture
        </div>
        <div>Est. 2018</div>
      </div>

      {/* Center Cinematic Grand Headline */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-8 sm:py-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#BFA16F]/60 bg-[#141312]/80 backdrop-blur-md text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] font-medium text-[#D4BC8B] mb-6">
          The Digital House of Woods Decor
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FFFFFF] max-w-4xl leading-[1.06] drop-shadow-md">
          Furniture, <br />
          <span className="italic font-normal text-[#E8E2D5]">made personal.</span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl font-normal text-[#FBF9F5]/95 max-w-xl mt-6 leading-relaxed drop-shadow-sm">
          Bespoke pieces crafted for spaces that deserve something extraordinary. Handcrafted solid hardwoods, tailored upholstery, and private commissions from our Mohali atelier.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10">
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 bg-[#BFA16F] text-[#141312] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300 shadow-2xl"
          >
            <span>Enter The Collections</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/bespoke"
            className="inline-flex items-center gap-3 border border-white/40 bg-[#141312]/60 backdrop-blur-md text-[#FFFFFF] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-medium hover:border-white hover:bg-white hover:text-[#141312] transition-all duration-300"
          >
            <span>Start A Commission</span>
          </Link>
        </div>
      </div>

      {/* Bottom Coordinates & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-end justify-between border-t border-white/15 pt-6 text-xs font-sans text-[#D8CEBE]">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-[#D4BC8B] font-medium">Manufacturing</span>
            <span className="text-white font-medium">Mohali, Punjab</span>
          </div>
          <div className="hidden md:flex flex-col border-l border-white/15 pl-8">
            <span className="text-[10px] uppercase tracking-widest text-[#D4BC8B] font-medium">International</span>
            <span className="text-white font-medium">Melbourne, Australia</span>
          </div>
        </div>

        <a
          href="#introduction"
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#FBF9F5] hover:text-[#BFA16F] transition-colors"
        >
          <span>Explore House</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#BFA16F]" />
        </a>
      </div>
    </section>
  );
}
