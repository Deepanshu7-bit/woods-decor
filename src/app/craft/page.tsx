"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Compass, Ruler, Shield, Sparkles, Layers, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnicalRule from "@/components/ui/TechnicalRule";
import AnimatedFurnitureVector from "@/components/ui/AnimatedFurnitureVector";

interface CraftPhase {
  id: string;
  number: string;
  phaseLabel: string;
  title: string;
  subtitle: string;
  narrative: string;
  technicalSpecs: { label: string; value: string }[];
  visualMode: "blueprint" | "timber" | "joinery" | "suspension" | "cushion" | "finish" | "habitat";
  image: string;
  quote: string;
}

const CRAFT_PHASES: CraftPhase[] = [
  {
    id: "sketch",
    number: "01",
    phaseLabel: "THE ARCHITECTURAL SKETCH",
    title: "Proportions & Ergonomic Calibration",
    subtitle: "Every Woods Decor piece begins with rigorous geometric vector calculation and human scale studies.",
    narrative: "Before timber is touched, our lead design directors draft architectural elevation drawings calibrated to standard living room walkways and ceiling clearances. We establish seat depth (38 in), seat rake angle (12°), and cushion deflection profiles to ensure enduring comfort without aesthetic bulk.",
    technicalSpecs: [
      { label: "Drafting Format", value: "Vector 1:1 Scale CAD" },
      { label: "Seat Clearance", value: "30\" Minimum Perimeter" },
      { label: "Ergonomic Rake", value: "12° Recline Angle" },
      { label: "Tolerances", value: "±1.5 mm Joinery Margin" }
    ],
    visualMode: "blueprint",
    image: "/assets/woodsdecor/products/sofas/milano-1.jpg",
    quote: "A sofa must possess architectural weight when viewed across an open gallery, yet feel intimate upon touch."
  },
  {
    id: "timber",
    number: "02",
    phaseLabel: "THE TIMBER SELECTION",
    title: "Kiln-Seasoned Hardwood Equilibrium",
    subtitle: "Solid Indian Teak and Walnut seasoned to 8–10% moisture content in Mohali kilns.",
    narrative: "Wood is an organic cellular structure that expands and contracts with humidity. At our integrated facility, rough-sawn hardwood logs rest in climate-controlled kilns for 6–8 weeks until cellular moisture reaches an exact 8–10% equilibrium, permanently neutralizing natural warping.",
    technicalSpecs: [
      { label: "Hardwood Species", value: "Indian Teak / Seasoned Walnut" },
      { label: "Moisture Content", value: "8.5% Checked with Hydrometer" },
      { label: "Grain Density", value: "Quarter-Sawn Straight Figure" },
      { label: "Harvest Standard", value: "Certified Sustainable Reserves" }
    ],
    visualMode: "timber",
    image: "/assets/woodsdecor/materials/walnut.jpg",
    quote: "If the timber isn't brought to equilibrium, time will pull the joints apart. Seasoning is the silent guarantee."
  },
  {
    id: "joinery",
    number: "03",
    phaseLabel: "THE STRUCTURAL JOINERY",
    title: "Mortise, Tenon & Corner Load Blocks",
    subtitle: "Interlocking hardwood mechanical connections built for generational longevity.",
    narrative: "Rather than relying on metal brackets, plastic dowels, or surface staples, master carpenters carve interlocking tenons directly from solid timber rails. Internal corner blocks are screwed and doweled along grain axes to distribute dynamic loads across the entire frame skeleton.",
    technicalSpecs: [
      { label: "Primary Joint", value: "Deep Mortise & Tenon" },
      { label: "Corner Blocks", value: "Solid Hardwood Triangular Gussets" },
      { label: "Fasteners", value: "Concealed Stainless Steel Dowels" },
      { label: "Frame Warranty", value: "Lifetime Atelier Structural Guarantee" }
    ],
    visualMode: "joinery",
    image: "/assets/woodsdecor/workshop/carpentry.jpg",
    quote: "A true joint holds by geometry, not by adhesive."
  },
  {
    id: "suspension",
    number: "04",
    phaseLabel: "THE SUSPENSION CORE",
    title: "Pocket Springs & Heavy Elastic Webbing",
    subtitle: "Individually pocketed steel springs anchored with cross-woven tension webbing.",
    narrative: "The seating platform combines high-tensile carbon steel pocket springs with criss-crossed, heat-sealed elastic webbing. Each spring operates independently, contouring to body pressure while dampening motion transfer across the sofa.",
    technicalSpecs: [
      { label: "Spring Construction", value: "Heat-Treated Carbon Steel" },
      { label: "Webbing Matrix", value: "Italian High-Tension Cross-Weave" },
      { label: "Noise Insulation", value: "Acoustic Felt Spring Wrapping" },
      { label: "Sag Resistance", value: "Tested to 100,000 Cycles" }
    ],
    visualMode: "suspension",
    image: "/assets/woodsdecor/workshop/upholstery.jpg",
    quote: "True resilience is silent. You should never hear a quality sofa take your weight."
  },
  {
    id: "cushioning",
    number: "05",
    phaseLabel: "THE CONTOUR SCULPTING",
    title: "Multi-Density Foam & Feather-Down Wrap",
    subtitle: "High-resilience core foam surrounded by channeled duck down envelopes.",
    narrative: "We engineer cushions in three calibrated strata: a high-resilience 45-density core provides enduring structural loft, sandwiched between 32-density transition foam, and encased in a baffled feather-down envelope for immediate tactile softness upon lounging.",
    technicalSpecs: [
      { label: "Core Density", value: "45 kg/m³ High Resilience" },
      { label: "Top Layer", value: "Channeled Duck Down Envelope" },
      { label: "Cushion Interlining", value: "Down-Proof Cotton Ticking" },
      { label: "Ergonomics", value: "Self-Recovering Loft" }
    ],
    visualMode: "cushion",
    image: "/assets/woodsdecor/materials/boucle.jpg",
    quote: "You should sink in two inches, then meet gentle, unwavering support."
  },
  {
    id: "finish",
    number: "06",
    phaseLabel: "THE SURFACE ALCHEMY",
    title: "Hand-Rubbed Organic Polish & Precision Stitching",
    subtitle: "Multiple coats of organic satin oil and double-needle tailoring.",
    narrative: "Exposed timber members undergo progressive hand-sanding from 120 to 600 grit before organic wax oils are hand-rubbed into the grain pores. Simultaneously, master upholsterers hand-sew blind piping and double-needle seams across heavy Belgian bouclé.",
    technicalSpecs: [
      { label: "Sand Sequence", value: "120 · 240 · 400 · 600 Grit" },
      { label: "Finish Coats", value: "4 Layers Organic Hand-Rubbed Wax" },
      { label: "Stitch Technique", value: "Double-Needle Saddle Stitch" },
      { label: "Thread", value: "Bonded Polyester Heavy-Duty" }
    ],
    visualMode: "finish",
    image: "/assets/woodsdecor/workshop/polish.jpg",
    quote: "Polish does not seal wood away from you; it invites your hand to touch it."
  },
  {
    id: "habitat",
    number: "07",
    phaseLabel: "THE COMPLETED HEIRLOOM",
    title: "The Finished Piece in Its Spatial Habitat",
    subtitle: "The completed Milano Sofa anchoring an architectural living room gallery.",
    narrative: "After final directional lighting inspection and director certification, the completed piece is wrapped in breathable organic cotton, crated with rigid corner armor, and dispatched via our white-glove logistics team for in-home assembly anywhere in India.",
    technicalSpecs: [
      { label: "Hero Piece", value: "Milano 3-Seater Atelier Lounge" },
      { label: "Dimensions", value: "W 90\" × D 38\" × H 32\"" },
      { label: "Delivery Standard", value: "White-Glove Placement & Leveling" },
      { label: "Atelier Origin", value: "Plot 786-787, Sector 82, Mohali" }
    ],
    visualMode: "habitat",
    image: "/assets/woodsdecor/products/sofas/milano-1.jpg",
    quote: "A finished Woods Decor piece is not a commercial product; it is an enduring member of the home."
  }
];

export default function CraftJourneyInteractivePage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeOverlayView, setActiveOverlayView] = useState<"blueprint" | "photo" | "specs">("photo");
  const currentPhase = CRAFT_PHASES[activePhaseIndex];

  return (
    <div className="pt-32 pb-24 bg-[#141312] text-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <SectionHeading
            number="03"
            eyebrow="The Craftsmanship Journey"
            title="The Making of a Piece."
            subtitle="Follow the step-by-step transformation of raw timber and textiles into an architectural heirloom. An exploded view into the master disciplines of Woods Decor."
            theme="dark"
          />
        </div>

        {/* Phase Progress Bar / Interactive Timeline */}
        <div className="sticky top-20 z-40 bg-[#141312]/95 backdrop-blur-md border border-[#2E2C2A] p-3 sm:p-4 mb-12 shadow-2xl">
          <div className="flex items-center justify-between overflow-x-auto gap-2 sm:gap-4 no-scrollbar">
            {CRAFT_PHASES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] whitespace-nowrap transition-all cursor-pointer ${
                  activePhaseIndex === idx
                    ? "bg-[#BFA16F] text-[#141312] font-semibold shadow-lg"
                    : "bg-[#1F1D1B] text-[#8C8780] hover:text-white border border-[#2E2C2A]"
                }`}
              >
                <span className="font-mono text-[10px]">{p.number}</span>
                <span className="hidden md:inline">{p.phaseLabel.split(" ")[1] || p.phaseLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#1F1D1B] border border-[#2E2C2A] p-6 sm:p-10 shadow-2xl mb-16 items-start">
          {/* Left: Dynamic Visual & Blueprint Stage */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-[#2E2C2A] pb-3 text-xs font-sans">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D4BC8B]" />
                <span className="font-mono text-[11px] text-[#D4BC8B] font-semibold">
                  PHASE {currentPhase.number} / 07: {currentPhase.phaseLabel}
                </span>
              </div>

              {/* Overlay Mode Switcher */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveOverlayView("photo")}
                  className={`px-2.5 py-1 text-[10px] uppercase font-sans tracking-wider transition-colors ${
                    activeOverlayView === "photo"
                      ? "bg-[#BFA16F] text-[#141312] font-bold"
                      : "bg-[#141312] text-[#8C8780] hover:text-white border border-[#2E2C2A]"
                  }`}
                >
                  Atelier Photo
                </button>
                <button
                  onClick={() => setActiveOverlayView("blueprint")}
                  className={`px-2.5 py-1 text-[10px] uppercase font-sans tracking-wider transition-colors ${
                    activeOverlayView === "blueprint"
                      ? "bg-[#BFA16F] text-[#141312] font-bold"
                      : "bg-[#141312] text-[#8C8780] hover:text-white border border-[#2E2C2A]"
                  }`}
                >
                  Blueprint CAD
                </button>
              </div>
            </div>

            {/* Visual Canvas Container */}
            <div className="relative aspect-[16/11] bg-[#141312] border border-[#2E2C2A] overflow-hidden flex items-center justify-center">
              {activeOverlayView === "blueprint" ? (
                /* Dynamic Animated Blueprint Vector Drawing Schematic */
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between bg-[#0B111A] border border-[#1E293B] text-cyan-400 font-mono text-xs select-none">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10 flex items-center justify-between text-[10px] tracking-widest text-cyan-400/80 border-b border-cyan-800/40 pb-2">
                    <span>WOODS DECOR CAD // {currentPhase.phaseLabel}</span>
                    <span className="text-amber-400">TOLERANCE: ±1.5MM</span>
                  </div>

                  {/* SVG Blueprint Outline - Dynamic Per Phase */}
                  <div className="relative z-10 my-auto flex items-center justify-center w-full py-4">
                    {currentPhase.id === "sketch" && (
                      <svg viewBox="0 0 600 280" className="w-full max-w-md stroke-cyan-400 fill-none stroke-[1.5]">
                        {/* Perspective Grid & Guidelines */}
                        <line x1="50" y1="240" x2="550" y2="240" className="stroke-cyan-800/80" strokeDasharray="4 4" />
                        <line x1="100" y1="40" x2="100" y2="240" className="stroke-cyan-800/80" strokeDasharray="4 4" />
                        <line x1="500" y1="40" x2="500" y2="240" className="stroke-cyan-800/80" strokeDasharray="4 4" />
                        {/* Ergonomic Recline Angle */}
                        <path d="M 120 220 L 220 220 L 280 90 L 160 90 Z" className="stroke-cyan-300 stroke-2" fill="rgba(56, 189, 248, 0.08)" />
                        <path d="M 220 220 L 480 220 L 440 90 L 280 90 Z" className="stroke-cyan-400 stroke-2" fill="rgba(56, 189, 248, 0.04)" />
                        {/* Angle Arc Indicator */}
                        <path d="M 240 220 A 40 40 0 0 0 235 180" className="stroke-amber-400 stroke-2" />
                        <text x="250" y="200" fill="#FBBF24" fontSize="11">12° RAKE</text>
                        {/* Dimensions */}
                        <line x1="120" y1="250" x2="480" y2="250" className="stroke-cyan-400" />
                        <text x="300" y="268" textAnchor="middle" fill="#38BDF8" fontSize="11">SEAT DEPTH: 38.0&quot; (965 MM)</text>
                      </svg>
                    )}

                    {currentPhase.id === "timber" && (
                      <svg viewBox="0 0 600 280" className="w-full max-w-md stroke-amber-400 fill-none stroke-[1.5]">
                        {/* Timber Kiln Log Cross Section */}
                        <circle cx="200" cy="140" r="90" className="stroke-amber-500/40 stroke-2" strokeDasharray="6 4" />
                        <circle cx="200" cy="140" r="70" className="stroke-amber-400/60" />
                        <circle cx="200" cy="140" r="50" className="stroke-amber-300/70" />
                        <circle cx="200" cy="140" r="30" className="stroke-amber-200" />
                        <circle cx="200" cy="140" r="6" fill="#FBBF24" />
                        {/* Hardwood Cut Planks */}
                        <rect x="340" y="80" width="200" height="28" rx="2" className="stroke-cyan-400 stroke-2" fill="rgba(56, 189, 248, 0.1)" />
                        <rect x="340" y="125" width="200" height="28" rx="2" className="stroke-cyan-400 stroke-2" fill="rgba(56, 189, 248, 0.1)" />
                        <rect x="340" y="170" width="200" height="28" rx="2" className="stroke-cyan-400 stroke-2" fill="rgba(56, 189, 248, 0.1)" />
                        <text x="440" y="98" textAnchor="middle" fill="#38BDF8" fontSize="10">SEASONED TEAK RAIL</text>
                        <text x="440" y="143" textAnchor="middle" fill="#FBBF24" fontSize="10">8.5% EQUILIBRIUM</text>
                        <text x="440" y="188" textAnchor="middle" fill="#38BDF8" fontSize="10">QUARTER-SAWN</text>
                      </svg>
                    )}

                    {currentPhase.id === "joinery" && (
                      <svg viewBox="0 0 600 280" className="w-full max-w-md stroke-cyan-400 fill-none stroke-[1.5]">
                        {/* Interlocking Mortise & Tenon Exploded View */}
                        <rect x="100" y="100" width="140" height="80" rx="3" className="stroke-cyan-300 stroke-2" fill="rgba(56, 189, 248, 0.08)" />
                        <rect x="220" y="120" width="50" height="40" className="stroke-amber-400 stroke-2" fill="rgba(251, 191, 36, 0.2)" />
                        {/* Tenon Slot */}
                        <rect x="330" y="100" width="160" height="80" rx="3" className="stroke-cyan-300 stroke-2" fill="rgba(56, 189, 248, 0.08)" />
                        <rect x="330" y="120" width="40" height="40" className="stroke-amber-400 stroke-2" strokeDasharray="3 3" />
                        {/* Assembly Vector Arrows */}
                        <path d="M 280 140 L 320 140" className="stroke-amber-400 stroke-2" markerEnd="url(#arrow)" />
                        <line x1="280" y1="135" x2="320" y2="140" className="stroke-amber-400 stroke-2" />
                        <line x1="280" y1="145" x2="320" y2="140" className="stroke-amber-400 stroke-2" />
                        <text x="300" y="175" textAnchor="middle" fill="#FBBF24" fontSize="11">MORTISE &amp; TENON MATING</text>
                      </svg>
                    )}

                    {currentPhase.id === "suspension" && (
                      <svg viewBox="0 0 600 280" className="w-full max-w-md stroke-cyan-400 fill-none stroke-[1.5]">
                        {/* Pocket Spring Array */}
                        {[120, 200, 280, 360, 440].map((x, i) => (
                          <g key={i}>
                            <rect x={x} y="80" width="50" height="110" rx="4" className="stroke-cyan-300 stroke-2" fill="rgba(56, 189, 248, 0.05)" />
                            <path d={`M ${x+10} 100 Q ${x+25} 90 ${x+40} 100 Q ${x+25} 115 ${x+10} 130 Q ${x+25} 145 ${x+40} 160`} className="stroke-amber-400 stroke-2" />
                          </g>
                        ))}
                        {/* Elastic Cross-Woven Webbing Matrix */}
                        <line x1="80" y1="210" x2="520" y2="210" className="stroke-cyan-400 stroke-2" strokeDasharray="8 4" />
                        <line x1="80" y1="225" x2="520" y2="225" className="stroke-cyan-400 stroke-2" strokeDasharray="8 4" />
                        <text x="300" y="250" textAnchor="middle" fill="#38BDF8" fontSize="11">ITALIAN HIGH-TENSILE MATRIX // 100,000 CYCLES</text>
                      </svg>
                    )}

                    {currentPhase.id === "cushioning" && (
                      <svg viewBox="0 0 600 280" className="w-full max-w-md stroke-cyan-400 fill-none stroke-[1.5]">
                        {/* Multi-Strata Density Cushion Slice */}
                        <rect x="120" y="60" width="360" height="40" rx="4" className="stroke-amber-300" fill="rgba(251, 191, 36, 0.15)" />
                        <text x="300" y="85" textAnchor="middle" fill="#FBBF24" fontSize="11">LAYER 1: CHANNELED DUCK DOWN ENVELOPE</text>

                        <rect x="120" y="105" width="360" height="50" rx="4" className="stroke-cyan-400 stroke-2" fill="rgba(56, 189, 248, 0.1)" />
                        <text x="300" y="135" textAnchor="middle" fill="#38BDF8" fontSize="11">LAYER 2: 32 KG/M³ ERGONOMIC TRANSITION FOAM</text>

                        <rect x="120" y="160" width="360" height="60" rx="4" className="stroke-cyan-500 stroke-2" fill="rgba(56, 189, 248, 0.2)" />
                        <text x="300" y="195" textAnchor="middle" fill="#38BDF8" fontSize="11">LAYER 3: 45 KG/M³ HIGH-RESILIENCE STRUCTURAL CORE</text>
                      </svg>
                    )}

                    {currentPhase.id === "finish" && (
                      <svg viewBox="0 0 600 280" className="w-full max-w-md stroke-amber-400 fill-none stroke-[1.5]">
                        {/* Sanding & Polish Progression */}
                        <rect x="80" y="100" width="100" height="70" rx="3" className="stroke-amber-600" />
                        <text x="130" y="140" textAnchor="middle" fill="#D97706" fontSize="11">120 GRIT</text>

                        <rect x="195" y="100" width="100" height="70" rx="3" className="stroke-amber-500" />
                        <text x="245" y="140" textAnchor="middle" fill="#F59E0B" fontSize="11">240 GRIT</text>

                        <rect x="310" y="100" width="100" height="70" rx="3" className="stroke-amber-400" />
                        <text x="360" y="140" textAnchor="middle" fill="#FBBF24" fontSize="11">400 GRIT</text>

                        <rect x="425" y="100" width="100" height="70" rx="3" className="stroke-cyan-300 stroke-2" fill="rgba(56, 189, 248, 0.15)" />
                        <text x="475" y="140" textAnchor="middle" fill="#38BDF8" fontSize="11">600 GRIT</text>

                        {/* Saddle Stitch Vectors */}
                        <line x1="80" y1="210" x2="525" y2="210" className="stroke-amber-300 stroke-2" strokeDasharray="6 4" />
                        <text x="300" y="235" textAnchor="middle" fill="#FBBF24" fontSize="11">DOUBLE-NEEDLE HAND SADDLE STITCHING</text>
                      </svg>
                    )}

                    {currentPhase.id === "habitat" && (
                      <svg viewBox="0 0 600 280" className="w-full max-w-md stroke-cyan-400 fill-none stroke-[1.5]">
                        {/* Completed Heirloom Sofa Elevation */}
                        <rect x="50" y="70" width="500" height="140" rx="6" className="stroke-cyan-300 stroke-2" fill="rgba(56, 189, 248, 0.06)" />
                        <path d="M 70 70 Q 300 55 530 70 L 530 130 L 70 130 Z" className="stroke-cyan-200" fill="rgba(56, 189, 248, 0.1)" />
                        <rect x="70" y="90" width="50" height="100" rx="4" className="stroke-cyan-400" fill="rgba(56, 189, 248, 0.15)" />
                        <rect x="480" y="90" width="50" height="100" rx="4" className="stroke-cyan-400" fill="rgba(56, 189, 248, 0.15)" />
                        <rect x="130" y="110" width="110" height="80" rx="3" className="stroke-cyan-300" />
                        <rect x="245" y="110" width="110" height="80" rx="3" className="stroke-cyan-300" />
                        <rect x="360" y="110" width="110" height="80" rx="3" className="stroke-cyan-300" />
                        <line x1="60" y1="210" x2="540" y2="210" className="stroke-amber-400 stroke-2" />
                        <rect x="80" y="210" width="20" height="25" className="stroke-amber-400" fill="#FBBF24" />
                        <rect x="500" y="210" width="20" height="25" className="stroke-amber-400" fill="#FBBF24" />
                        <line x1="50" y1="250" x2="550" y2="250" className="stroke-cyan-400/80 stroke-1" />
                        <text x="300" y="268" textAnchor="middle" fill="#38BDF8" fontSize="12">FINISHED ELEVATION: 90.0&quot; × 38.0&quot; × 32.0&quot;</text>
                      </svg>
                    )}
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[9px] text-cyan-400/80 border-t border-cyan-800/40 pt-2">
                    <span>CAD LAYER: {currentPhase.number}-{currentPhase.visualMode.toUpperCase()}</span>
                    <span className="text-amber-400">STATUS: VERIFIED SPECIFICATION</span>
                  </div>
                </div>
              ) : (
                /* High-Resolution Workshop Photo */
                <Image
                  src={currentPhase.image}
                  alt={currentPhase.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              )}

              {/* Callout Badge */}
              <div className="absolute bottom-4 left-4 bg-[#141312]/90 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-white text-xs font-sans flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BFA16F]" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4BC8B]">
                  {currentPhase.technicalSpecs[0]?.label}: {currentPhase.technicalSpecs[0]?.value}
                </span>
              </div>
            </div>

            {/* Quick Step Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                disabled={activePhaseIndex === 0}
                onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 border border-[#2E2C2A] text-xs font-sans uppercase tracking-wider text-[#8C8780] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                ← Previous Phase
              </button>

              <span className="font-mono text-xs text-[#BFA16F]">
                {activePhaseIndex + 1} of {CRAFT_PHASES.length}
              </span>

              <button
                disabled={activePhaseIndex === CRAFT_PHASES.length - 1}
                onClick={() => setActivePhaseIndex((prev) => Math.min(CRAFT_PHASES.length - 1, prev + 1))}
                className="px-4 py-2 border border-[#2E2C2A] text-xs font-sans uppercase tracking-wider text-[#8C8780] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                Next Phase →
              </button>
            </div>
          </div>

          {/* Right: Technical Narrative & Spec Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-sm text-[#D4BC8B] font-semibold block mb-1">
                STAGE {currentPhase.number}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] font-normal leading-tight">
                {currentPhase.title}
              </h2>
              <p className="font-serif text-lg text-[#D8CEBE] italic mt-2">
                &ldquo;{currentPhase.subtitle}&rdquo;
              </p>
            </div>

            <p className="text-sm font-sans font-normal text-[#E8E2D5] leading-relaxed">
              {currentPhase.narrative}
            </p>

            {/* Craftsman Quote Box */}
            <div className="bg-[#141312] border-l-2 border-[#BFA16F] p-4 text-xs font-serif italic text-[#FBF9F5]">
              &ldquo;{currentPhase.quote}&rdquo;
            </div>

            {/* Technical Parameters Matrix */}
            <div className="bg-[#141312] border border-[#2E2C2A] p-5 space-y-3">
              <div className="text-[10px] font-sans uppercase tracking-widest text-[#D4BC8B] font-semibold border-b border-[#2E2C2A] pb-2">
                Atelier Engineering Parameters
              </div>
              <div className="space-y-2 text-xs font-sans">
                {currentPhase.technicalSpecs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[#8C8780]">{spec.label}:</span>
                    <span className="text-white font-medium font-mono text-[11px]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#2E2C2A] flex items-center gap-4">
              <Link
                href="/configurator"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#BFA16F] text-[#141312] hover:bg-white py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all shadow-xl"
              >
                <span>Customize This Piece</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Master Vector Anatomical Schematic Showcase */}
        <div className="mb-16">
          <AnimatedFurnitureVector />
        </div>

        <TechnicalRule label="ATELIER DISCIPLINES" theme="dark" />

        {/* 7 Phase Overview Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {CRAFT_PHASES.slice(0, 4).map((p, idx) => (
            <div
              key={p.id}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-6 border transition-all cursor-pointer ${
                activePhaseIndex === idx
                  ? "bg-[#1F1D1B] border-[#BFA16F] shadow-xl"
                  : "bg-[#141312] border-[#2E2C2A] hover:border-white/30"
              }`}
            >
              <div className="font-mono text-sm text-[#D4BC8B] mb-2 font-bold">{p.number}</div>
              <h3 className="font-serif text-lg text-white font-medium mb-1">{p.title}</h3>
              <p className="text-xs font-sans text-[#8C8780] line-clamp-2">{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
