"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  MessageCircle,
  Sliders,
  Check,
  RotateCw,
  Ruler,
  Layers,
  Sparkles,
  Download,
  X,
  FileText,
  Share2,
  CheckCircle2
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnicalRule from "@/components/ui/TechnicalRule";
import {
  useConfiguratorStore,
  CONFIGURABLE_PRODUCTS,
  FABRIC_OPTIONS,
  TIMBER_OPTIONS,
  ConfiguratorFabric,
  ConfiguratorTimber,
  ConfiguratorSize
} from "@/stores/useConfiguratorStore";
import { formatPriceRequest } from "@/lib/utils";

function ConfiguratorContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");

  const {
    selectedProductId,
    selectedFabric,
    selectedTimber,
    selectedSize,
    activeViewAngle,
    isQuoteModalOpen,
    setSelectedProduct,
    setSelectedFabric,
    setSelectedTimber,
    setSelectedSize,
    setActiveViewAngle,
    setQuoteModalOpen,
    getSerializedConfiguration
  } = useConfiguratorStore();

  // Pre-select product from URL query param if present
  useEffect(() => {
    if (productParam) {
      const match = CONFIGURABLE_PRODUCTS.find(
        (p) => p.id === productParam || p.slug === productParam
      );
      if (match) {
        setSelectedProduct(match.id);
      }
    }
  }, [productParam, setSelectedProduct]);

  const activeProduct = useMemo(() => {
    return (
      CONFIGURABLE_PRODUCTS.find((p) => p.id === selectedProductId) ||
      CONFIGURABLE_PRODUCTS[0]
    );
  }, [selectedProductId]);

  const activeImage =
    activeProduct.angleImages[activeViewAngle] || activeProduct.heroImage;

  // Consultation Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    notes: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Serialized configuration payload
  const currentConfig = getSerializedConfiguration();

  const handleDownloadSpecs = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(currentConfig, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `Woods_Decor_${activeProduct.slug}_config.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const waEnquiryUrl = formatPriceRequest(
    `${currentConfig.productName} in ${currentConfig.fabric} with ${currentConfig.timber} (${currentConfig.size} — ${currentConfig.dimensions})`
  );

  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <SectionHeading
              number="04"
              eyebrow="Bespoke Interactive Atelier"
              title="Make It Yours."
              subtitle="Calibrate materials, solid timber finishes, and scale envelopes with real-time tactile visual feedback."
            />
          </div>

          {/* Product Switcher Dropdown / Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CONFIGURABLE_PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod.id)}
                className={`px-4 py-2.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedProductId === prod.id
                    ? "bg-[#141312] text-[#FBF9F5] shadow-md ring-1 ring-[#141312]"
                    : "bg-[#F4F0E8] text-[#66625D] hover:text-[#141312] border border-[#E8E2D5]"
                }`}
              >
                {prod.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-Column Customizer Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#F4F0E8] border border-[#E8E2D5] p-6 sm:p-10 shadow-2xl mb-16">
          {/* Left: Dynamic Visual Compositing Canvas Stage */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3 text-xs font-sans">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#9E7E47]" />
                <span className="font-semibold text-[11px] uppercase tracking-widest text-[#141312]">
                  {activeProduct.name} Atelier Stage
                </span>
              </div>

              {/* Angle Switcher */}
              {activeProduct.angleImages.length > 1 && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase text-[#8C8780] mr-1">Angle:</span>
                  {activeProduct.angleImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveViewAngle(i)}
                      className={`px-2.5 py-1 text-[10px] font-mono font-semibold transition-colors cursor-pointer ${
                        activeViewAngle === i
                          ? "bg-[#141312] text-white"
                          : "bg-white border border-[#E8E2D5] text-[#66625D]"
                      }`}
                    >
                      0{i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Visual Compositor Stage Container */}
            <div className="relative aspect-[16/11] bg-[#FBF9F5] border border-[#E8E2D5] overflow-hidden flex items-center justify-center p-6 shadow-inner group">
              {/* Subtle ambient lighting backdrop */}
              <div className="absolute inset-0 bg-radial from-transparent via-[#F4F0E8]/50 to-[#E8E2D5]/70" />

              {/* Layer 1: Base Product Image */}
              <div className="relative w-full h-full">
                <Image
                  src={activeImage}
                  alt={activeProduct.name}
                  fill
                  className="object-contain transition-all duration-700 p-4"
                  priority
                />

                {/* Layer 2: Dynamic Real-Time Material & Color Matrix Tint Layer */}
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-700 mix-blend-multiply opacity-40"
                  style={{
                    backgroundColor: selectedFabric.colorHex,
                    backdropFilter: selectedFabric.hueFilter
                  }}
                />

                {/* Layer 3: Specular Highlight Lighting Layer */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-700 mix-blend-soft-light opacity-30"
                  style={{
                    background: selectedFabric.texturePattern
                  }}
                />
              </div>

              {/* Active Configuration Watermark Tag */}
              <div className="absolute bottom-4 left-4 bg-[#141312]/95 backdrop-blur-md px-4 py-2 text-[10px] font-sans text-white uppercase tracking-widest flex items-center gap-3 shadow-xl border border-white/10">
                <div
                  className="w-3 h-3 rounded-none border border-white/30"
                  style={{ backgroundColor: selectedFabric.colorHex }}
                />
                <span className="font-semibold text-[#D4BC8B]">
                  {selectedFabric.name}
                </span>
                <span className="text-white/40">|</span>
                <span>{selectedTimber.name}</span>
              </div>

              {/* Scale Indicator */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] font-mono text-[#141312] border border-[#E8E2D5] font-semibold">
                SCALE: {selectedSize.tag}
              </div>
            </div>

            {/* Live Dimension & Schematic Footprint */}
            <div className="bg-[#FBF9F5] border border-[#E8E2D5] p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-sans">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[#9E7E47]" />
                  <span className="font-semibold text-[#141312] uppercase tracking-wider text-[11px]">
                    Architectural Footprint: {selectedSize.label}
                  </span>
                </div>
                <span className="font-mono text-[#9E7E47] font-semibold text-[11px]">
                  6–8 WEEKS LEAD TIME
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#E8E2D5] text-xs font-sans">
                <div>
                  <span className="text-[10px] uppercase text-[#8C8780] block">Overall Width</span>
                  <span className="font-mono font-bold text-[#141312]">{selectedSize.width}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#8C8780] block">Overall Depth</span>
                  <span className="font-mono font-bold text-[#141312]">{selectedSize.depth}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#8C8780] block">Overall Height</span>
                  <span className="font-mono font-bold text-[#141312]">{selectedSize.height}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bespoke Customization Controls Panel */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* STEP 1: Fabric & Upholstery Selection */}
              <div>
                <div className="flex items-baseline justify-between mb-3 text-xs font-sans">
                  <span className="uppercase tracking-widest text-[11px] text-[#8C8780] font-semibold">
                    01 / Select Fabric &amp; Weave ({FABRIC_OPTIONS.length} Swatches)
                  </span>
                  <span className="font-semibold text-[#9E7E47] text-[11px]">
                    {selectedFabric.name}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FABRIC_OPTIONS.map((fab) => (
                    <button
                      key={fab.id}
                      onClick={() => setSelectedFabric(fab)}
                      className={`p-3 text-left border flex items-center gap-3 transition-all cursor-pointer ${
                        selectedFabric.id === fab.id
                          ? "border-[#141312] bg-[#FBF9F5] shadow-md ring-2 ring-[#141312]"
                          : "border-[#E8E2D5] bg-white hover:border-[#9E7E47]"
                      }`}
                    >
                      <div
                        className="w-7 h-7 rounded-none border border-[#E8E2D5] shrink-0 shadow-sm"
                        style={{ backgroundColor: fab.colorHex }}
                      />
                      <div className="truncate">
                        <div className="text-xs font-semibold text-[#141312] truncate">
                          {fab.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#8C8780]">
                          {fab.code} · {fab.category}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 2: Solid Hardwood Species & Finish */}
              <div>
                <div className="flex items-baseline justify-between mb-3 text-xs font-sans">
                  <span className="uppercase tracking-widest text-[11px] text-[#8C8780] font-semibold">
                    02 / Solid Wood Species &amp; Finish
                  </span>
                  <span className="font-semibold text-[#9E7E47] text-[11px]">
                    {selectedTimber.name}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {TIMBER_OPTIONS.map((timb) => (
                    <button
                      key={timb.id}
                      onClick={() => setSelectedTimber(timb)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        selectedTimber.id === timb.id
                          ? "border-[#141312] bg-[#FBF9F5] shadow-md ring-2 ring-[#141312]"
                          : "border-[#E8E2D5] bg-white hover:border-[#9E7E47]"
                      }`}
                    >
                      <div
                        className="w-full h-4 mb-2 border border-[#E8E2D5] shadow-inner"
                        style={{ backgroundColor: timb.colorHex }}
                      />
                      <div className="text-[11px] font-semibold text-[#141312] truncate">
                        {timb.name.split(" ")[1] || timb.name}
                      </div>
                      <div className="text-[9px] font-mono text-[#8C8780] truncate">
                        {timb.code}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 3: Scale Envelope / Proportions */}
              <div>
                <div className="flex items-baseline justify-between mb-3 text-xs font-sans">
                  <span className="uppercase tracking-widest text-[11px] text-[#8C8780] font-semibold">
                    03 / Scale &amp; Proportions
                  </span>
                </div>

                <div className="space-y-2">
                  {activeProduct.sizes.map((sz) => (
                    <button
                      key={sz.id}
                      onClick={() => setSelectedSize(sz)}
                      className={`w-full p-3 text-left border flex items-center justify-between transition-all cursor-pointer ${
                        selectedSize.id === sz.id
                          ? "border-[#141312] bg-[#FBF9F5] shadow-md ring-2 ring-[#141312]"
                          : "border-[#E8E2D5] bg-white hover:border-[#9E7E47]"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#141312]">
                          {sz.label}
                        </div>
                        <div className="text-[10px] text-[#8C8780]">{sz.tag}</div>
                      </div>
                      <div className="text-[11px] font-mono font-medium text-[#141312] text-right">
                        {sz.width}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Request Quote & Download Specs */}
            <div className="space-y-3 pt-6 border-t border-[#E8E2D5]">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#141312] text-[#FBF9F5] hover:bg-[#9E7E47] py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>Request Bespoke Quote &amp; Swatches</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4BC8B]" />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={waEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#E8E2D5] bg-white hover:border-[#141312] py-3 text-xs font-sans uppercase tracking-wider text-[#141312] font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Quote</span>
                </a>

                <button
                  onClick={handleDownloadSpecs}
                  className="inline-flex items-center justify-center gap-2 border border-[#E8E2D5] bg-white hover:border-[#141312] py-3 text-xs font-sans uppercase tracking-wider text-[#141312] font-semibold transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#9E7E47]" />
                  <span>Export JSON Spec</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <Link
                  href={`/product/${activeProduct.slug}`}
                  className="text-xs font-sans uppercase tracking-wider text-[#66625D] hover:text-[#141312] underline font-medium"
                >
                  View Full Editorial Story on {activeProduct.name} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote & Consultation Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[110] bg-[#141312]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#FBF9F5] border border-[#E8E2D5] max-w-xl w-full p-8 sm:p-10 shadow-2xl space-y-6 relative my-auto animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#8C8780] hover:text-[#141312] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#141312] text-[#BFA16F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#141312]">
                  Quotation Request Serialized
                </h3>
                <p className="text-sm font-sans text-[#66625D] leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your customized specification for the <strong>{currentConfig.productName}</strong> has been prepared for dispatch.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={waEnquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#141312] text-white hover:bg-[#9E7E47] px-6 py-3 text-xs uppercase tracking-wider font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send Via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setQuoteModalOpen(false);
                    }}
                    className="border border-[#E8E2D5] px-6 py-3 text-xs uppercase tracking-wider font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#9E7E47] font-bold block mb-1">
                    Atelier Quotation Request
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#141312] font-normal">
                    {currentConfig.productName} Specification
                  </h3>
                </div>

                {/* Configuration Summary Badge */}
                <div className="bg-[#F4F0E8] border border-[#E8E2D5] p-3.5 text-xs font-sans space-y-1 text-[#2E2C2A]">
                  <div><strong>Fabric:</strong> {currentConfig.fabric} ({currentConfig.fabricCode})</div>
                  <div><strong>Wood:</strong> {currentConfig.timber} ({currentConfig.timberCode})</div>
                  <div><strong>Scale:</strong> {currentConfig.size} ({currentConfig.dimensions})</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Sen"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98154 00000"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="radhika@residence.in"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                      City / Delivery State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Chandigarh / Mumbai"
                      className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase text-[#8C8780] mb-1">
                    Special Dimensions or Room Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Request custom depth, extra cushions, or matching swatches by courier..."
                    className="w-full bg-white border border-[#E8E2D5] p-2.5 text-xs text-[#141312] outline-none focus:border-[#141312] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#141312] text-white hover:bg-[#9E7E47] py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all shadow-xl cursor-pointer"
                >
                  Generate Official Atelier Quotation →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ConfiguratorPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-xs uppercase tracking-widest font-sans text-[#8C8780]">Loading Atelier Configurator...</div>}>
      <ConfiguratorContent />
    </Suspense>
  );
}
