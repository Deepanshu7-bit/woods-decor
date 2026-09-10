import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WORKSHOP_WINGS } from "@/data/workshop";

export default function CraftPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#141312] text-[#FBF9F5] border-b border-[#2E2C2A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            number="07"
            eyebrow="The Craftsmanship"
            title="Three wings of artisanal discipline."
            subtitle="Inside our integrated Mohali facility, dedicated master craftsmen in Carpentry, Polish, and Upholstery transform raw hardwoods and textiles into enduring heirlooms."
            theme="dark"
          />
          <Link
            href="/craft"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#D4BC8B] hover:text-white transition-colors shrink-0 mb-4 md:mb-16 py-1 border-b border-[#D4BC8B] hover:border-white"
          >
            <span>Experience The Craft Journey</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4BC8B]" />
          </Link>
        </div>

        {/* 3 Wings Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WORKSHOP_WINGS.map((wing) => (
            <div
              key={wing.id}
              className="bg-[#1F1D1B] border border-[#2E2C2A] p-8 flex flex-col justify-between group hover:border-[#BFA16F] transition-all duration-500 shadow-xl"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#2E2C2A] pb-4 mb-6">
                  <span className="font-mono text-sm text-[#D4BC8B] font-semibold">
                    WING / {wing.number}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#D8CEBE]">
                    Mohali Atelier
                  </span>
                </div>

                <div className="relative aspect-[16/10] bg-[#141312] mb-6 overflow-hidden border border-[#2E2C2A]">
                  <Image
                    src={wing.image}
                    alt={wing.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFFFFF] mb-2">
                  {wing.title}
                </h3>
                <div className="text-xs font-sans uppercase tracking-wider text-[#D4BC8B] font-medium mb-4">
                  {wing.discipline}
                </div>

                <p className="font-sans text-sm font-normal text-[#E8E2D5] leading-relaxed mb-6">
                  {wing.description}
                </p>
              </div>

              {/* Processes Checklist */}
              <div className="border-t border-[#2E2C2A] pt-5">
                <ul className="space-y-2.5 text-xs font-sans text-[#FBF9F5]/90">
                  {wing.processes.slice(0, 2).map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#BFA16F] font-bold">─</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
