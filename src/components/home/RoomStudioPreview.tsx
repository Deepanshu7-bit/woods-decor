import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, LayoutTemplate } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RoomStudioPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#141312] text-[#FBF9F5] border-b border-[#2E2C2A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              number="06"
              eyebrow="Spatial Composition"
              title="Design your room in complete harmony."
              subtitle="Step into Room Studio. Curate an entire living space with coordinated Woods Decor sofas, armchairs, consoles, and ambient lighting before fabrication begins."
              theme="dark"
            />

            <div className="space-y-4 text-xs sm:text-sm font-sans text-[#E8E2D5] leading-relaxed">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#D4BC8B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Architectural Presets:</strong> Choose from curated atmospheres including Warm Contemporary, Modern Heritage, and European Classic.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <LayoutTemplate className="w-5 h-5 text-[#D4BC8B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Exportable Design Dossier:</strong> Send your finalized room layout, finish schedule, and dimension envelope directly to our Mohali design team.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/room-studio"
                className="inline-flex items-center gap-3 bg-[#BFA16F] text-[#141312] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-300 shadow-2xl"
              >
                <span>Enter Room Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Immersive Room Preview */}
          <div className="lg:col-span-7 relative bg-[#1F1D1B] border border-[#2E2C2A] p-4 sm:p-6 shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#141312] border border-[#2E2C2A]">
              <Image
                src="/assets/woodsdecor/editorial/spotlight.jpg"
                alt="Room Studio Visualization Stage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent" />

              {/* Pin Callouts */}
              <div className="absolute top-1/3 left-1/4 bg-[#141312]/95 border border-[#D4BC8B] px-3.5 py-1.5 text-[10px] font-sans text-white uppercase tracking-widest flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#BFA16F] animate-ping" />
                Milano 3-Seater
              </div>

              <div className="absolute bottom-1/4 right-1/4 bg-[#141312]/95 border border-[#D4BC8B] px-3.5 py-1.5 text-[10px] font-sans text-white uppercase tracking-widest flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#BFA16F]" />
                Aurelia Armchair
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans text-[#FBF9F5] font-medium bg-[#141312]/80 backdrop-blur-sm p-3 border border-white/10">
                <span>Room Style: Warm Contemporary Living</span>
                <span className="text-[#D4BC8B]">Full Composition Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
