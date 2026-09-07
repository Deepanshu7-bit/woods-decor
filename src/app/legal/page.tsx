import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnicalRule from "@/components/ui/TechnicalRule";
import { LEGAL_DATA } from "@/data/legal";

export const metadata = {
  title: "Client Care, FAQ & Guides — Woods Decor",
  description: "Preserved product care guides, architectural dimension guides, white-glove shipping policies, and frequently asked questions."
};

export default function LegalAndClientCarePage() {
  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="mb-16">
          <SectionHeading
            number="10"
            eyebrow="Atelier Standards"
            title="Client Care, Guides &amp; Policies."
            subtitle="Everything you need to know regarding product maintenance, architectural dimensions, white-glove delivery, and bespoke commission terms."
          />
        </div>

        {/* Quick Jump Links */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-[#F4F0E8] border border-[#E8E2D5] text-xs font-sans mb-16">
          <span className="text-[#8C8780] uppercase tracking-wider text-[10px]">
            Quick Jump:
          </span>
          <a href="#care-guide" className="hover:text-[#BFA16F] transition-colors">
            Care &amp; Knowledge Guide ·
          </a>
          <a href="#size-guide" className="hover:text-[#BFA16F] transition-colors">
            Size &amp; Dimension Guide ·
          </a>
          <a href="#shipping" className="hover:text-[#BFA16F] transition-colors">
            Shipping &amp; Delivery ·
          </a>
          <a href="#returns" className="hover:text-[#BFA16F] transition-colors">
            Cancellation &amp; Bespoke Terms ·
          </a>
          <a href="#faq" className="hover:text-[#BFA16F] transition-colors">
            Frequently Asked Questions
          </a>
        </div>

        {/* Section 1: Care Guide */}
        <section id="care-guide" className="mb-20 scroll-mt-32">
          <div className="border-b border-[#E8E2D5] pb-4 mb-8">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F]">
              01 / Longevity
            </span>
            <h2 className="font-serif text-3xl text-[#141312] font-light mt-1">
              {LEGAL_DATA.careGuide.title}
            </h2>
            <p className="text-xs font-sans text-[#66625D] mt-1">
              {LEGAL_DATA.careGuide.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEGAL_DATA.careGuide.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F0E8] border border-[#E8E2D5] p-6 space-y-2"
              >
                <h3 className="font-serif text-xl text-[#141312] font-medium">
                  {item.heading}
                </h3>
                <p className="text-xs font-sans font-light text-[#66625D] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <TechnicalRule label="ARCHITECTURAL CLEARANCE" />

        {/* Section 2: Size Guide */}
        <section id="size-guide" className="my-20 scroll-mt-32">
          <div className="border-b border-[#E8E2D5] pb-4 mb-8">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F]">
              02 / Scale &amp; Footprints
            </span>
            <h2 className="font-serif text-3xl text-[#141312] font-light mt-1">
              {LEGAL_DATA.sizeGuide.title}
            </h2>
            <p className="text-xs font-sans text-[#66625D] mt-1">
              {LEGAL_DATA.sizeGuide.description}
            </p>
          </div>

          <div className="space-y-4">
            {LEGAL_DATA.sizeGuide.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F0E8] border border-[#E8E2D5] p-6 space-y-1.5"
              >
                <h3 className="font-serif text-xl text-[#141312] font-medium">
                  {item.heading}
                </h3>
                <p className="text-xs font-sans font-light text-[#66625D] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <TechnicalRule label="TRANSIT & PLACEMENT" />

        {/* Section 3: Shipping & Returns */}
        <section id="shipping" className="my-20 scroll-mt-32">
          <div className="border-b border-[#E8E2D5] pb-4 mb-8">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F]">
              03 / White-Glove Logistics
            </span>
            <h2 className="font-serif text-3xl text-[#141312] font-light mt-1">
              {LEGAL_DATA.shipping.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {LEGAL_DATA.shipping.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F0E8] border border-[#E8E2D5] p-6 space-y-2"
              >
                <h3 className="font-serif text-lg text-[#141312] font-medium">
                  {item.heading}
                </h3>
                <p className="text-xs font-sans font-light text-[#66625D] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Cancellation & Bespoke Policy */}
          <div id="returns" className="bg-[#141312] text-white p-8 border border-[#2E2C2A] space-y-4 scroll-mt-32">
            <h3 className="font-serif text-2xl text-white font-light">
              {LEGAL_DATA.returns.title}
            </h3>
            <div className="space-y-3 text-xs font-sans text-[#8C8780] leading-relaxed">
              {LEGAL_DATA.returns.items.map((item, idx) => (
                <div key={idx}>
                  <strong className="text-white block mb-1">{item.heading}</strong>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TechnicalRule label="FREQUENT INQUIRIES" />

        {/* Section 4: FAQ */}
        <section id="faq" className="my-20 scroll-mt-32">
          <div className="border-b border-[#E8E2D5] pb-4 mb-8">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F]">
              04 / Common Questions
            </span>
            <h2 className="font-serif text-3xl text-[#141312] font-light mt-1">
              {LEGAL_DATA.faq.title}
            </h2>
            <p className="text-xs font-sans text-[#66625D] mt-1">
              {LEGAL_DATA.faq.description}
            </p>
          </div>

          <div className="space-y-4">
            {LEGAL_DATA.faq.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F0E8] border border-[#E8E2D5] p-6 space-y-2"
              >
                <h3 className="font-serif text-xl text-[#141312] font-medium">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm font-sans font-light text-[#66625D] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Strip */}
        <div className="bg-[#F4F0E8] border border-[#E8E2D5] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-sans">
          <div>
            <strong>Have an unlisted question?</strong>
            <p className="text-[#66625D] mt-0.5">
              Our atelier directors in Mohali are available Mon–Sat from 10:00 AM to 7:00 PM.
            </p>
          </div>
          <Link
            href="/bespoke"
            className="inline-flex items-center gap-2 bg-[#141312] text-white px-6 py-3 uppercase tracking-wider text-[11px] hover:bg-[#BFA16F] transition-colors shrink-0"
          >
            <span>Contact The Directors</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
