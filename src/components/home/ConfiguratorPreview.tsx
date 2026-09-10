import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Sliders } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ConfiguratorPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#121110] text-[#FBF9F5] border-b border-[#2E2C2A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Interactive Configurator Showcase Preview */}
          <div className="lg:col-span-7 bg-[#1A1918] border border-[#2E2C2A] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#2E2C2A] pb-4 mb-8 text-xs font-sans">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#D4BC8B]" />
                <span className="uppercase tracking-widest text-white font-semibold text-[11px]">
                  Customization Atelier
                </span>
              </div>
              <span className="font-mono text-[#D4BC8B] text-[11px] font-medium">
                PREVIEW · MILANO SOFA
              </span>
            </div>

            {/* Main Stage Image */}
            <div className="relative aspect-[16/10] bg-[#121110] mb-8 overflow-hidden border border-[#2E2C2A]">
              <Image
                src="/assets/woodsdecor/products/sofas/milano-1.jpg"
                alt="Milano Sofa Configurator Preview"
                fill
                className="object-contain p-4"
              />
              <div className="absolute bottom-3 left-3 bg-[#121110]/95 backdrop-blur-sm px-3 py-1.5 text-[10px] font-sans uppercase tracking-widest text-[#D4BC8B] border border-white/10 font-medium">
                Configuration: Smoked Walnut · Flemish Oatmeal Bouclé
              </div>
            </div>

            {/* Swatches Controls */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="border border-[#BFA16F] bg-[#121110] p-3 space-y-1 shadow-sm">
                <div className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] font-medium">
                  Fabric
                </div>
                <div className="text-xs font-semibold text-white">Oatmeal Bouclé</div>
              </div>
              <div className="border border-[#2E2C2A] bg-[#121110] p-3 space-y-1">
                <div className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] font-medium">
                  Timber
                </div>
                <div className="text-xs font-semibold text-white">Smoked Walnut</div>
              </div>
              <div className="border border-[#2E2C2A] bg-[#121110] p-3 space-y-1">
                <div className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] font-medium">
                  Scale
                </div>
                <div className="text-xs font-semibold text-white">3-Seater (90&quot;)</div>
              </div>
              <div className="border border-[#2E2C2A] bg-[#121110] p-3 space-y-1">
                <div className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] font-medium">
                  Hardware
                </div>
                <div className="text-xs font-semibold text-white">Muted Brass</div>
              </div>
            </div>
          </div>

          {/* Right Explanatory Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              number="08"
              eyebrow="Interactive Customizer"
              title="Make it distinctly yours."
              subtitle="Tailor your furniture to your room's exact architectural palette. Experiment with timber finishes, Belgian fabrics, and custom proportions."
              theme="dark"
            />

            <p className="text-sm sm:text-base font-sans font-normal text-[#D8CEBE] leading-relaxed">
              Every Woods Decor piece is built to order. Select your preferred wood species, choose from curated upholstery swatches, and calibrate dimensions to your living room footprint.
            </p>

            <div className="pt-4">
              <Link
                href="/configurator"
                className="inline-flex items-center gap-3 bg-[#BFA16F] text-[#121110] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#121110] transition-all duration-300 shadow-xl"
              >
                <span>Launch Configurator</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
