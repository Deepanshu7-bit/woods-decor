"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import FullscreenMenu from "./FullscreenMenu";

export default function AtelierHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D5] py-3.5 shadow-[0_4px_30px_rgba(20,19,18,0.06)]"
            : "bg-[#141312]/80 backdrop-blur-md border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-8 text-[11px] font-sans uppercase tracking-[0.22em] font-medium transition-colors duration-300 ${
              isScrolled ? "text-[#2E2C2A]" : "text-[#FBF9F5]/90"
            }`}
          >
            <Link
              href="/collections"
              className="hover:text-[#BFA16F] transition-colors relative py-1 group"
            >
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#BFA16F] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/atelier"
              className="hover:text-[#BFA16F] transition-colors relative py-1 group"
            >
              The Atelier
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#BFA16F] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/craft"
              className="hover:text-[#BFA16F] transition-colors relative py-1 group"
            >
              Craft Journey
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#BFA16F] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/bespoke"
              className="hover:text-[#BFA16F] transition-colors relative py-1 group"
            >
              Bespoke
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#BFA16F] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Center Brand Identity */}
          <Link href="/" className="flex flex-col items-center group text-center">
            <div className="relative w-6 h-6 mb-1 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md">
              <Image
                src="/assets/woodsdecor/brand/crown.png"
                alt="Woods Decor Royal Crest"
                fill
                className="object-contain"
                sizes="24px"
                priority
              />
            </div>
            <span
              className={`font-cinzel text-base sm:text-lg tracking-[0.25em] uppercase font-semibold leading-none transition-colors duration-300 ${
                isScrolled ? "text-[#141312]" : "text-[#FFFFFF]"
              }`}
            >
              Woods Decor
            </span>
            <span
              className={`font-sans text-[8px] tracking-[0.3em] uppercase mt-0.5 font-medium transition-colors duration-300 ${
                isScrolled ? "text-[#8C8780]" : "text-[#BFA16F]"
              }`}
            >
              Atelier · Mohali
            </span>
          </Link>

          {/* Right Controls */}
          <div className="flex items-center space-x-5">
            <Link
              href="/bespoke"
              className={`hidden lg:inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] font-medium px-4 py-2 transition-all duration-300 shadow-sm ${
                isScrolled
                  ? "bg-[#141312] text-white border border-[#141312] hover:bg-[#BFA16F] hover:border-[#BFA16F]"
                  : "bg-[#141312]/80 text-[#FBF9F5] border border-[#BFA16F]/60 hover:bg-[#BFA16F] hover:text-[#141312] hover:border-[#BFA16F]"
              }`}
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#BFA16F] group-hover:text-inherit" />
            </Link>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className={`flex items-center gap-2.5 text-[11px] font-sans uppercase tracking-[0.2em] font-medium py-1 cursor-pointer transition-colors duration-300 ${
                isScrolled
                  ? "text-[#141312] hover:text-[#BFA16F]"
                  : "text-[#FBF9F5] hover:text-[#BFA16F]"
              }`}
            >
              <span className="hidden sm:inline">Index</span>
              <div
                className={`w-9 h-9 border flex items-center justify-center transition-all ${
                  isScrolled
                    ? "border-[#E8E2D5] bg-white text-[#141312] hover:border-[#BFA16F]"
                    : "border-white/20 bg-white/10 text-white hover:border-[#BFA16F] hover:bg-white/20"
                }`}
              >
                <Menu className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
