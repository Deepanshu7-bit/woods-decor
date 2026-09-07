"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";
import { COMPANY_INFO } from "@/data/workshop";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#141312] text-[#FBF9F5] flex flex-col justify-between overflow-y-auto animate-fadeIn">
      {/* Top Bar */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-6 flex items-center justify-between border-b border-[#2E2C2A]">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <span className="font-cinzel text-lg tracking-[0.25em] uppercase text-[#FBF9F5]">
            Woods Decor
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#BFA16F] border-l border-[#2E2C2A] pl-3">
            Digital Atelier
          </span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close Menu"
          className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C8780] hover:text-white transition-colors cursor-pointer"
        >
          <span>Close</span>
          <div className="w-8 h-8 border border-[#2E2C2A] flex items-center justify-center">
            <X className="w-4 h-4 text-[#FBF9F5]" />
          </div>
        </button>
      </div>

      {/* Main Nav Body */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 items-center">
        {/* Primary Pages Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] mb-4">
            Navigation Index
          </div>
          <nav className="flex flex-col space-y-4">
            {[
              { href: "/", label: "The House (Home)" },
              { href: "/collections", label: "Furniture Collections" },
              { href: "/atelier", label: "The Atelier & Workshop" },
              { href: "/craft", label: "The Craft Journey" },
              { href: "/configurator", label: "Make It Yours (Configurator)" },
              { href: "/room-studio", label: "Room Studio" },
              { href: "/bespoke", label: "Bespoke Private Commissions" },
              { href: "/projects", label: "Architectural Projects" },
              { href: "/journal", label: "Editorial Journal" },
              { href: "/showroom", label: "Showrooms (Mohali & Melbourne)" }
            ].map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between text-2xl sm:text-3xl md:text-4xl font-serif text-[#D8CEBE] hover:text-[#FFFFFF] transition-colors py-1 border-b border-[#1F1D1B]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-sans font-light text-[#66625D] group-hover:text-[#BFA16F] transition-colors">
                    {`0${idx + 1}`}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#BFA16F]" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Collections Quick Links & Showroom Info */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t lg:border-t-0 lg:border-l border-[#2E2C2A] lg:pl-12">
          {/* Worlds of Furniture */}
          <div>
            <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] mb-4">
              Explore Collections
            </div>
            <ul className="space-y-3 font-sans text-sm text-[#8C8780]">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/collections/${c.slug}`}
                    onClick={onClose}
                    className="hover:text-[#FFFFFF] flex items-center justify-between py-1 group transition-colors"
                  >
                    <span>{c.title}</span>
                    <span className="text-xs text-[#66625D] group-hover:text-[#BFA16F]">
                      {c.count} pieces
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom & Client Concierge */}
          <div className="space-y-6">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] mb-4">
                Atelier Headquarters
              </div>
              <p className="text-xs text-[#8C8780] leading-relaxed font-sans mb-3">
                Plot no. 786-787, Sector 82, JLPL<br />
                Mohali, Punjab 160055, India
              </p>
              <div className="text-xs text-[#66625D]">
                Mon–Sat: 10:00 AM – 7:00 PM
              </div>
            </div>

            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] mb-4">
                Direct Contact
              </div>
              <div className="space-y-2 text-xs font-sans text-[#8C8780]">
                <a
                  href="tel:+919815420668"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BFA16F]" />
                  <span>+91 98154 20668</span>
                </a>
                <a
                  href="mailto:info@woodsdecor.in"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#BFA16F]" />
                  <span>info@woodsdecor.in</span>
                </a>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] mb-2">
                International
              </div>
              <p className="text-xs text-[#8C8780] font-sans">
                Melbourne Flagship, Australia (Opened 2023)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 py-6 border-t border-[#2E2C2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#66625D]">
        <div>© {new Date().getFullYear()} Woods Decor Pvt Ltd. All Rights Reserved.</div>
        <div className="flex items-center space-x-6">
          <Link href="/legal" onClick={onClose} className="hover:text-white transition-colors">
            Care &amp; Dimensions
          </Link>
          <Link href="/legal" onClick={onClose} className="hover:text-white transition-colors">
            Shipping &amp; FAQ
          </Link>
          <a
            href="https://wa.me/919815420668"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BFA16F] hover:underline"
          >
            WhatsApp Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
