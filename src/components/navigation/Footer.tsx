"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";
import { COMPANY_INFO } from "@/data/workshop";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#141312] text-[#FBF9F5] border-t border-[#2E2C2A] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2E2C2A]">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 opacity-90">
                <Image
                  src="/assets/woodsdecor/brand/crown.png"
                  alt="Woods Decor"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-cinzel text-xl tracking-[0.25em] uppercase text-[#FBF9F5]">
                Woods Decor
              </span>
            </div>
            <p className="font-serif text-2xl sm:text-3xl text-[#D8CEBE] font-light max-w-lg leading-snug">
              Creating bespoke furniture that reflects individuality, craftsmanship, and enduring elegance.
            </p>
            <div className="text-xs font-sans tracking-[0.2em] uppercase text-[#BFA16F]">
              Mohali Atelier &amp; Corporate Headquarters
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end space-y-4">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C8780]">
              Private Atelier Updates
            </div>
            <p className="text-sm font-sans text-[#66625D] max-w-md">
              Receive notifications for new seasonal pieces, architectural case studies, and private showroom events.
            </p>
            {joined ? (
              <div className="text-xs font-sans text-[#BFA16F] py-2">
                ✓ Thank you for joining the Woods Decor private register.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex max-w-md border-b border-[#66625D] focus-within:border-[#BFA16F] transition-colors pb-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-transparent text-sm font-sans text-[#FBF9F5] placeholder-[#66625D] outline-none w-full py-1"
                />
                <button
                  type="submit"
                  className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#BFA16F] hover:text-white transition-colors pl-4 shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-[#2E2C2A] text-xs font-sans">
          {/* Col 1: Collections */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#BFA16F]">
              Collections
            </div>
            <ul className="space-y-2.5 text-[#8C8780]">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/collections/${c.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{c.title}</span>
                    <span className="text-[10px] text-[#66625D]">({c.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: The House */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#BFA16F]">
              The House
            </div>
            <ul className="space-y-2.5 text-[#8C8780]">
              <li>
                <Link href="/atelier" className="hover:text-white transition-colors">
                  Atelier &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/craft" className="hover:text-white transition-colors">
                  The Craft Journey
                </Link>
              </li>
              <li>
                <Link href="/configurator" className="hover:text-white transition-colors">
                  Make It Yours (Configurator)
                </Link>
              </li>
              <li>
                <Link href="/room-studio" className="hover:text-white transition-colors">
                  Design Your Room
                </Link>
              </li>
              <li>
                <Link href="/bespoke" className="hover:text-white transition-colors">
                  Bespoke Commissions
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Architectural Projects
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  Editorial Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Care & Legal */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#BFA16F]">
              Client Care
            </div>
            <ul className="space-y-2.5 text-[#8C8780]">
              <li>
                <Link href="/legal#care-guide" className="hover:text-white transition-colors">
                  Product Knowledge &amp; Care
                </Link>
              </li>
              <li>
                <Link href="/legal#size-guide" className="hover:text-white transition-colors">
                  Size &amp; Dimension Guide
                </Link>
              </li>
              <li>
                <Link href="/legal#shipping" className="hover:text-white transition-colors">
                  Shipping &amp; White-Glove Delivery
                </Link>
              </li>
              <li>
                <Link href="/legal#returns" className="hover:text-white transition-colors">
                  Cancellation &amp; Bespoke Policy
                </Link>
              </li>
              <li>
                <Link href="/legal#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Showrooms & Contact */}
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#BFA16F]">
              Showroom &amp; Works
            </div>
            <div className="text-[#8C8780] leading-relaxed">
              <p className="text-white font-medium mb-1">Mohali Headquarters</p>
              <p>Plot no. 786-787, Sector 82, JLPL, Mohali-160055, Punjab</p>
              <p className="mt-1 text-[#66625D]">Mon–Sat: 10am – 7pm | Sun: 11am – 5pm</p>
            </div>
            <div className="text-[#8C8780] pt-2">
              <p className="text-white font-medium mb-1">Melbourne Showroom</p>
              <p>Australia (Opened 2023)</p>
            </div>
            <div className="pt-2 flex flex-col space-y-1.5 text-[#8C8780]">
              <a href="tel:+919815420668" className="hover:text-white transition-colors">
                Phone: +91 98154 20668
              </a>
              <a href="mailto:info@woodsdecor.in" className="hover:text-white transition-colors">
                Email: info@woodsdecor.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#66625D]">
          <div>
            © {new Date().getFullYear()} Woods Decor Private Limited. All Rights Reserved. Crafted with Excellence.
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/woods.decor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C8780] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/woodsdecor.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C8780] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <Link
              href="/showroom"
              className="text-[#BFA16F] hover:underline uppercase text-[10px] tracking-wider pl-2"
            >
              Visit Showroom →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
