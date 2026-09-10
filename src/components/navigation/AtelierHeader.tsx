"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import FullscreenMenu from "./FullscreenMenu";
import ThemeCustomizerPill from "./ThemeCustomizerPill";
import { useThemeStore } from "@/stores/useThemeStore";

export default function AtelierHeader() {
  const { theme } = useThemeStore();
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  // Determine atmospheric theme based on route
  const isDarkPage = useMemo(() => {
    return pathname === "/craft" || pathname === "/room-studio";
  }, [pathname]);

  const isHomeHero = useMemo(() => {
    return pathname === "/" && scrollY < 160;
  }, [pathname, scrollY]);

  // Is active header style dark (obsidian) or light (alabaster cream)
  const isDarkTheme = isDarkPage || isHomeHero;
  const isScrolled = scrollY > 40;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDarkTheme
            ? isScrolled
              ? "bg-[#121110]/92 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-transparent py-5"
            : "bg-[#FBF9F5]/92 backdrop-blur-xl border-b border-[#E8E2D5] py-3.5 shadow-[0_4px_30px_rgba(20,19,18,0.04)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
          {/* Left Navigation — Pinned Left */}
          <nav
            className={`hidden md:flex items-center space-x-8 text-[11px] font-sans uppercase tracking-[0.24em] font-medium transition-colors duration-300 justify-start ${
              isDarkTheme ? "text-[#FBF9F5]/85" : "text-[#2E2C2A]"
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

          {/* Center Brand Identity — Exact 50% Viewport Centered */}
          <Link
            href="/"
            className="flex flex-col items-center group text-center justify-self-start md:justify-self-center select-none"
          >
            {/* Morphing Logo: Royal Crown Crest vs Avant-Garde Modernist Monogram */}
            <div className="w-6 h-6 mb-1 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
              {theme === "avant-garde" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full stroke-[#D8E82E] fill-[#D8E82E]/15"
                  strokeWidth="1.8"
                >
                  {/* Modernist Geometric Bauhaus Monogram */}
                  <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" className="stroke-[#D8E82E]" />
                  <line x1="12" y1="2" x2="12" y2="22" className="stroke-[#D8E82E]/60" />
                  <polyline points="2,8.5 12,14.5 22,8.5" className="stroke-[#D8E82E]" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full stroke-[#BFA16F] fill-[#BFA16F]/20"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 17h20v2H2v-2zM3.5 15l2-8 4.5 4.5 2-8 2 8 4.5-4.5 2 8H3.5z" />
                  <circle cx="5.5" cy="6" r="0.8" fill="#BFA16F" />
                  <circle cx="12" cy="2.5" r="0.8" fill="#BFA16F" />
                  <circle cx="18.5" cy="6" r="0.8" fill="#BFA16F" />
                </svg>
              )}
            </div>

            <span
              className={`font-serif text-lg sm:text-xl tracking-[0.22em] uppercase font-semibold leading-none transition-colors duration-300 ${
                theme === "avant-garde"
                  ? "text-[#F2F4F8] font-bold tracking-[0.28em]"
                  : isDarkTheme
                  ? "text-[#FFFFFF]"
                  : "text-[#141312]"
              }`}
            >
              Woods Decor
            </span>
            <span
              className={`font-sans text-[8px] tracking-[0.34em] uppercase mt-0.5 font-medium transition-colors duration-300 ${
                theme === "avant-garde"
                  ? "text-[#D8E82E]"
                  : isDarkTheme
                  ? "text-[#D4BC8B]"
                  : "text-[#9E7E47]"
              }`}
            >
              {theme === "avant-garde" ? "Modernist Gallery" : "Atelier · Mohali"}
            </span>
          </Link>

          {/* Right Controls — Pinned Right */}
          <div className="flex items-center space-x-3 sm:space-x-4 justify-self-end">
            {/* Dual Theme Customizer Switch */}
            <ThemeCustomizerPill />

            <Link
              href="/bespoke"
              className={`hidden xl:inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] font-semibold px-4 py-2 transition-all duration-300 shadow-sm ${
                theme === "avant-garde"
                  ? "bg-[#D8E82E] text-[#0D0E11] border border-[#D8E82E] hover:bg-white hover:text-black"
                  : isDarkTheme
                  ? "bg-white/10 text-white border border-[#BFA16F]/50 hover:bg-[#BFA16F] hover:text-[#141312] hover:border-[#BFA16F]"
                  : "bg-[#141312] text-white border border-[#141312] hover:bg-[#BFA16F] hover:border-[#BFA16F]"
              }`}
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-inherit" />
            </Link>

            {/* Index Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className={`flex items-center gap-2.5 text-[11px] font-sans uppercase tracking-[0.2em] font-medium py-1 cursor-pointer transition-colors duration-300 ${
                isDarkTheme
                  ? "text-[#FBF9F5] hover:text-[#BFA16F]"
                  : "text-[#141312] hover:text-[#BFA16F]"
              }`}
            >
              <span className="hidden sm:inline text-[10px] tracking-[0.25em]">Index</span>
              <div
                className={`w-9 h-9 border flex items-center justify-center transition-all ${
                  isDarkTheme
                    ? "border-white/20 bg-white/5 text-white hover:border-[#BFA16F] hover:bg-white/15"
                    : "border-[#E8E2D5] bg-white text-[#141312] hover:border-[#BFA16F] shadow-sm"
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
