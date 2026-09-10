"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Sliders, Eye } from "lucide-react";

export default function AnimatedFurnitureVector() {
  const [explodedFactor, setExplodedFactor] = useState(0); // 0 = assembled, 1 = fully exploded
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(4); // 0..4
  const [visibleLayers, setVisibleLayers] = useState<Record<string, boolean>>({
    plinth: true,
    frame: true,
    suspension: true,
    cushion: true,
    upholstery: true,
  });

  // Auto-play assembly animation cycle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 4) {
            setIsPlaying(false);
            return 4;
          }
          return prev + 1;
        });
      }, 1200);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Derive active layers during assembly or manual inspection
  const effectiveLayers = isPlaying
    ? {
        plinth: activeStep >= 0,
        frame: activeStep >= 1,
        suspension: activeStep >= 2,
        cushion: activeStep >= 3,
        upholstery: activeStep >= 4,
      }
    : visibleLayers;

  const handleReplay = () => {
    setActiveStep(0);
    setExplodedFactor(0);
    setIsPlaying(true);
  };

  const toggleLayer = (layerId: string) => {
    setVisibleLayers((prev) => ({
      ...prev,
      [layerId]: !prev[layerId],
    }));
  };

  // Explode calculation offset helpers
  const getLayerOffset = (baseOffset: number) => {
    return baseOffset * explodedFactor;
  };

  return (
    <div className="w-full bg-[#121110] border border-[#2E2C2A] text-[#FBF9F5] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      {/* Background CAD Grid Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BFA16F]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#2E2C2A] gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#38BDF8]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>Interactive Vector Schematic · CAD 01-ARCH</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
            Milano Lounge Anatomical Assembly
          </h3>
          <p className="text-xs font-sans text-[#8C8780] mt-0.5">
            Exploded vector blueprint detailing internal joinery, spring matrices, and structural timber.
          </p>
        </div>

        {/* Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={isPlaying ? () => setIsPlaying(false) : handleReplay}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#BFA16F] text-[#141312] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors cursor-pointer shadow-md"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Assembly</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setExplodedFactor((prev) => (prev === 0 ? 1 : 0));
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 border text-xs font-sans uppercase tracking-wider transition-colors cursor-pointer ${
              explodedFactor > 0
                ? "bg-white text-[#141312] border-white font-semibold"
                : "border-[#2E2C2A] text-white hover:border-[#BFA16F] bg-[#1F1D1B]"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{explodedFactor > 0 ? "Assembled View" : "Exploded View"}</span>
          </button>
        </div>
      </div>

      {/* Main Schematic Display & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: Vector Canvas with SVG Animation */}
        <div className="lg:col-span-8 bg-[#181716] border border-[#2E2C2A] p-4 sm:p-6 relative rounded-none overflow-hidden aspect-[16/10] flex items-center justify-center">
          {/* Blueprint Axis Callouts */}
          <div className="absolute top-3 left-3 text-[9px] font-mono text-[#38BDF8]/60 space-y-0.5 pointer-events-none">
            <div>DATUM: ISO-2768-M</div>
            <div>TOLERANCE: ±0.5MM</div>
            <div>SECTION: A-A&apos; EXPLODED</div>
          </div>

          <div className="absolute top-3 right-3 text-[9px] font-mono text-[#D4BC8B] pointer-events-none">
            SCALE 1:10 // CAD STROKE
          </div>

          {/* SVG Vector Drawing */}
          <svg
            viewBox="0 0 700 440"
            className="w-full h-full max-h-[380px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out select-none"
          >
            <defs>
              <linearGradient id="timberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C49A58" />
                <stop offset="50%" stopColor="#8A5A2B" />
                <stop offset="100%" stopColor="#573617" />
              </linearGradient>
              <linearGradient id="foamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4BC8B" />
                <stop offset="100%" stopColor="#9E7E47" />
              </linearGradient>
            </defs>

            {/* Ground Shadow & Reference Line */}
            <ellipse cx="350" cy="385" rx="260" ry="18" fill="rgba(0,0,0,0.5)" />
            <line
              x1="60"
              y1="385"
              x2="640"
              y2="385"
              stroke="#2E2C2A"
              strokeWidth="1"
              strokeDasharray="4 4"
            />

            {/* ========================================================= */}
            {/* LAYER 1: SOLID TIMBER PLINTH & TURNED LEGS               */}
            {/* ========================================================= */}
            {effectiveLayers.plinth && (
              <g
                id="layer-plinth"
                style={{
                  transform: `translateY(${getLayerOffset(35)}px)`,
                  transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* 4 Turned Brass-Capped Timber Legs */}
                {/* Front Left Leg */}
                <polygon
                  points="160,330 176,330 170,380 162,380"
                  fill="url(#timberGrad)"
                  stroke="#D4BC8B"
                  strokeWidth="1.2"
                />
                <rect x="162" y="372" width="8" height="8" fill="url(#goldGrad)" />

                {/* Front Right Leg */}
                <polygon
                  points="524,330 540,330 538,380 530,380"
                  fill="url(#timberGrad)"
                  stroke="#D4BC8B"
                  strokeWidth="1.2"
                />
                <rect x="530" y="372" width="8" height="8" fill="url(#goldGrad)" />

                {/* Back Left Leg */}
                <polygon
                  points="210,305 222,305 219,350 213,350"
                  fill="#4A3018"
                  stroke="#8A5A2B"
                  strokeWidth="1"
                />

                {/* Back Right Leg */}
                <polygon
                  points="478,305 490,305 487,350 481,350"
                  fill="#4A3018"
                  stroke="#8A5A2B"
                  strokeWidth="1"
                />

                {/* Solid Teak Base Plinth Beam */}
                <rect
                  x="140"
                  y="315"
                  width="420"
                  height="18"
                  rx="3"
                  fill="url(#timberGrad)"
                  stroke="#E8C68A"
                  strokeWidth="1.5"
                />

                {/* Grain lines on plinth */}
                <line x1="160" y1="321" x2="540" y2="321" stroke="#42250F" strokeWidth="1" strokeDasharray="30 8" opacity="0.6" />
                <line x1="180" y1="327" x2="520" y2="327" stroke="#42250F" strokeWidth="1" strokeDasharray="40 12" opacity="0.6" />

                <text x="350" y="342" fill="#D4BC8B" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  SOLID SEASONED INDIAN TEAK BASE
                </text>
              </g>
            )}

            {/* ========================================================= */}
            {/* LAYER 2: HARDWOOD STRUCTURAL INNER SKELETON               */}
            {/* ========================================================= */}
            {effectiveLayers.frame && (
              <g
                id="layer-frame"
                style={{
                  transform: `translateY(${getLayerOffset(12)}px)`,
                  transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Seat Box Frame */}
                <rect
                  x="150"
                  y="265"
                  width="400"
                  height="45"
                  rx="2"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="6 3"
                />

                {/* Corner Reinforcement Gussets */}
                <polygon points="150,265 180,265 150,295" fill="#B45309" opacity="0.4" stroke="#F59E0B" strokeWidth="1" />
                <polygon points="550,265 520,265 550,295" fill="#B45309" opacity="0.4" stroke="#F59E0B" strokeWidth="1" />

                {/* Backrest Upright Framework */}
                <path
                  d="M 170 265 L 180 140 L 520 140 L 530 265"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeDasharray="8 4"
                />

                {/* Cross Bracing Ribs */}
                <line x1="280" y1="140" x2="280" y2="265" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
                <line x1="420" y1="140" x2="420" y2="265" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />

                {/* Mortise & Tenon Joint Indicators */}
                <circle cx="175" cy="200" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="525" cy="200" r="4" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />

                <text x="75" y="202" fill="#38BDF8" fontSize="9" fontFamily="monospace">
                  MORTISE &amp; TENON
                </text>
                <line x1="150" y1="200" x2="168" y2="200" stroke="#38BDF8" strokeWidth="1" />
              </g>
            )}

            {/* ========================================================= */}
            {/* LAYER 3: ITALIAN SUSPENSION WEBBING & SPRING NETWORK      */}
            {/* ========================================================= */}
            {effectiveLayers.suspension && (
              <g
                id="layer-suspension"
                style={{
                  transform: `translateY(${getLayerOffset(-15)}px)`,
                  transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Woven Webbing Matrix Horizontal */}
                <line x1="165" y1="275" x2="535" y2="275" stroke="#10B981" strokeWidth="3" strokeDasharray="14 6" />
                <line x1="165" y1="290" x2="535" y2="290" stroke="#10B981" strokeWidth="3" strokeDasharray="14 6" />

                {/* Sinuous Springs Oscillating */}
                {[200, 260, 320, 380, 440, 500].map((x, i) => (
                  <path
                    key={i}
                    d={`M ${x-15} 295 Q ${x} 265 ${x+15} 295 Q ${x} 315 ${x-15} 295`}
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="1.8"
                  />
                ))}

                <text x="350" y="260" fill="#34D399" fontSize="9" textAnchor="middle" fontFamily="monospace">
                  ITALIAN HIGH-RESILIENCE ELASTIC WEBBING + POCKET COILS
                </text>
              </g>
            )}

            {/* ========================================================= */}
            {/* LAYER 4: MULTI-DENSITY DOWN & FOAM CUSHION PACK           */}
            {/* ========================================================= */}
            {effectiveLayers.cushion && (
              <g
                id="layer-cushion"
                style={{
                  transform: `translateY(${getLayerOffset(-45)}px)`,
                  transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Seat Cushion Core */}
                <rect
                  x="155"
                  y="225"
                  width="390"
                  height="45"
                  rx="10"
                  fill="url(#foamGrad)"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />

                {/* Foam Core Division Line */}
                <line x1="160" y1="248" x2="540" y2="248" stroke="#38BDF8" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />

                {/* Backrest Cushion Core */}
                <rect
                  x="175"
                  y="125"
                  width="350"
                  height="95"
                  rx="12"
                  fill="url(#foamGrad)"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />

                <text x="350" y="175" fill="#38BDF8" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                  45 KG/M³ HIGH-RESILIENCE + DUCK DOWN TOPPING
                </text>
              </g>
            )}

            {/* ========================================================= */}
            {/* LAYER 5: BELGIAN BOUCLÉ EXTERIOR & DOUBLE-NEEDLE SEAMS    */}
            {/* ========================================================= */}
            {effectiveLayers.upholstery && (
              <g
                id="layer-upholstery"
                style={{
                  transform: `translateY(${getLayerOffset(-80)}px)`,
                  transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  opacity: explodedFactor > 0.5 ? 0.85 : 1,
                }}
              >
                {/* Left Armrest */}
                <path
                  d="M 130 220 C 130 180, 160 180, 175 220 L 175 315 L 130 315 Z"
                  fill="rgba(244, 240, 232, 0.08)"
                  stroke="#F4F0E8"
                  strokeWidth="2"
                />

                {/* Right Armrest */}
                <path
                  d="M 570 220 C 570 180, 540 180, 525 220 L 525 315 L 570 315 Z"
                  fill="rgba(244, 240, 232, 0.08)"
                  stroke="#F4F0E8"
                  strokeWidth="2"
                />

                {/* Main Back Contour Silhouette */}
                <path
                  d="M 165 140 Q 350 120 535 140 L 535 225 L 165 225 Z"
                  fill="none"
                  stroke="#F4F0E8"
                  strokeWidth="2.5"
                />

                {/* Tailored Saddle Stitches (Double-needle) */}
                <path
                  d="M 175 148 Q 350 132 525 148"
                  fill="none"
                  stroke="#BFA16F"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                <path
                  d="M 175 152 Q 350 136 525 152"
                  fill="none"
                  stroke="#BFA16F"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />

                {/* Seat Cushion Outer Contour */}
                <rect
                  x="165"
                  y="225"
                  width="370"
                  height="50"
                  rx="12"
                  fill="none"
                  stroke="#F4F0E8"
                  strokeWidth="2.5"
                />
                <line x1="175" y1="250" x2="525" y2="250" stroke="#BFA16F" strokeWidth="1.5" strokeDasharray="5 3" />

                <text x="350" y="105" fill="#F4F0E8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                  FLEMISH OATMEAL BOUCLÉ · DOUBLE-NEEDLE SADDLE STITCHING
                </text>
              </g>
            )}

            {/* Exploded Connecting Caliper Lines when exploded */}
            {explodedFactor > 0.2 && (
              <g id="explosion-connectors" opacity={explodedFactor}>
                <line x1="150" y1="330" x2="150" y2="100" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <line x1="550" y1="330" x2="550" y2="100" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              </g>
            )}
          </svg>

          {/* Caliper Footer Annotation */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-[#8C8780] border-t border-[#2E2C2A]/60 pt-2">
            <span>DISCIPLINE: ARCHITECTURAL JOINERY</span>
            <span>ASSEMBLY: 100% BENCHMADE AT MOHALI ATELIER</span>
            <span>WARRANTY: 25-YEAR STRUCTURAL</span>
          </div>
        </div>

        {/* Right: Layer Inspector & Interactive Toggles */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#2E2C2A]">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4BC8B]">
              Sub-Assembly Strata (5 Layers)
            </span>
            <span className="text-xs font-mono text-[#8C8780]">
              {Object.values(effectiveLayers).filter(Boolean).length}/5 Visible
            </span>
          </div>

          <div className="space-y-2.5">
            {[
              {
                id: "upholstery",
                name: "05 / Belgian Bouclé Upholstery",
                desc: "Flemish oatmeal weave, double-needle tailored seams.",
                color: "#F4F0E8",
                active: effectiveLayers.upholstery,
              },
              {
                id: "cushion",
                name: "04 / Multi-Density Down Core",
                desc: "45 kg/m³ HR foam with channeled duck down envelope.",
                color: "#38BDF8",
                active: effectiveLayers.cushion,
              },
              {
                id: "suspension",
                name: "03 / Tensile Spring Network",
                desc: "Cross-woven Italian webbing & tempered sinuous steel.",
                color: "#34D399",
                active: effectiveLayers.suspension,
              },
              {
                id: "frame",
                name: "02 / Hardwood Skeleton",
                desc: "Corner-blocked Indian Teak with mortise & tenon mating.",
                color: "#F59E0B",
                active: effectiveLayers.frame,
              },
              {
                id: "plinth",
                name: "01 / Turned Plinth & Brass Caps",
                desc: "Solid timber rails with hand-buffed solid brass ferrules.",
                color: "#D4BC8B",
                active: effectiveLayers.plinth,
              },
            ].map((layer) => (
              <div
                key={layer.id}
                onClick={() => toggleLayer(layer.id)}
                className={`p-3 border transition-all cursor-pointer select-none flex items-start justify-between gap-3 ${
                  layer.active
                    ? "bg-[#181716] border-[#3D3833] hover:border-[#BFA16F]"
                    : "bg-[#121110] border-[#201F1D] opacity-40 hover:opacity-70"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: layer.color }}
                    />
                    <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-white">
                      {layer.name}
                    </h4>
                  </div>
                  <p className="text-[11px] font-sans text-[#8C8780] leading-snug">
                    {layer.desc}
                  </p>
                </div>

                <button
                  type="button"
                  className="p-1 text-[#8C8780] hover:text-white"
                  title={layer.active ? "Hide Layer" : "Show Layer"}
                >
                  <Eye className={`w-4 h-4 ${layer.active ? "text-[#BFA16F]" : "text-white/20"}`} />
                </button>
              </div>
            ))}
          </div>

          {/* Explode Distance Slider */}
          <div className="p-4 bg-[#181716] border border-[#2E2C2A] space-y-2 mt-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#8C8780]">
              <span>EXPLODED SEPARATION</span>
              <span className="text-white font-bold">{Math.round(explodedFactor * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={explodedFactor}
              onChange={(e) => setExplodedFactor(parseFloat(e.target.value))}
              className="w-full accent-[#BFA16F] cursor-pointer"
            />
            <div className="flex justify-between text-[9px] font-mono text-[#66625D]">
              <span>0% COMPACT (ASSEMBLED)</span>
              <span>100% MAXIMUM SPREAD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
