"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function CinematicHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-8 bg-[#141312] text-[#FBF9F5] overflow-hidden">
      {/* Background Ambient Video with High-Definition Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/woodsdecor/editorial/hero-editorial.jpg"
          className="w-full h-full object-cover opacity-70 animate-[pulse_12s_ease-in-out_infinite]"
        >
          <source src="/assets/woodsdecor/editorial/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Architectural Vignette — Calibrated for maximum video clarity and crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/85 via-[#121110]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/20 to-[#121110]/50" />
      </div>

      {/* Top Technical Metadata Line */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-[#D8CEBE] border-b border-white/15 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BFA16F]" />
          <span>Sec. 82 · Mohali Atelier</span>
        </div>
        <div className="hidden sm:block text-[#BFA16F] font-medium tracking-[0.28em]">
          Bespoke Architecture &amp; Heirloom Joinery
        </div>
        <div className="font-mono text-[10px]">Est. 2018</div>
      </div>

      {/* Center Cinematic Grand Headline */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-6 sm:py-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#BFA16F]/50 bg-[#121110]/60 backdrop-blur-md text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] font-medium text-[#D4BC8B] mb-6">
          The Digital Atelier · Woods Decor
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FFFFFF] max-w-4xl leading-[1.02] drop-shadow-lg">
          Furniture,{" "}
          <span className="italic font-normal text-[#E8E2D5] block sm:inline">
            made personal.
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl font-normal text-[#FBF9F5]/90 max-w-xl mt-6 leading-relaxed drop-shadow">
          Heirloom pieces handcrafted for spaces that demand distinction. Kiln-seasoned solid hardwoods, tailored Italian upholstery, and bespoke commissions from our Mohali facility.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10">
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 bg-[#BFA16F] text-[#121110] px-8 py-4 text-xs font-sans uppercase tracking-[0.22em] font-semibold hover:bg-white hover:text-[#121110] transition-all duration-300 shadow-2xl"
          >
            <span>Explore Collections</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/bespoke"
            className="inline-flex items-center gap-3 border border-white/30 bg-white/5 backdrop-blur-md text-[#FFFFFF] px-8 py-4 text-xs font-sans uppercase tracking-[0.22em] font-medium hover:border-[#BFA16F] hover:bg-[#BFA16F] hover:text-[#121110] transition-all duration-300"
          >
            <span>Commission A Piece</span>
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
