"use client";

import React, { useState } from "react";
import { ArrowUpRight, Upload, CheckCircle2, MessageCircle, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnicalRule from "@/components/ui/TechnicalRule";
import { formatBespokeEnquiry } from "@/lib/utils";

export default function BespokePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    roomType: "Living Room",
    dimensions: "",
    description: "",
    fileName: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const waEnquiryUrl = formatBespokeEnquiry(
    `Project: ${formData.roomType} (${formData.city}) for ${formData.name}. Notes: ${formData.description}`
  );

  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <SectionHeading
            number="06"
            eyebrow="Private Commissions"
            title="Your space. Your proportions. Your piece."
            subtitle="Woods Decor collaborates with homeowners, architects, and interior designers to engineer one-of-a-kind bespoke furniture calibrated to unique spatial footprints."
          />
        </div>

        {/* 2-Column Form & Process Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left: Consultation Intake Form */}
          <div className="lg:col-span-7 bg-[#F4F0E8] border border-[#E8E2D5] p-8 sm:p-12 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#141312] text-[#BFA16F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#141312]">
                  Consultation Brief Received
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#66625D] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our design directors in Mohali will review your specifications and reach out via phone/WhatsApp within 24 hours.
                </p>
                <div className="pt-4">
                  <a
                    href={waEnquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#141312] text-[#FBF9F5] px-6 py-3.5 text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#BFA16F] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#BFA16F]" />
                    <span>Connect Immediately on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] border-b border-[#E8E2D5] pb-3 mb-6">
                  Private Commission Intake
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full bg-[#FBF9F5] border border-[#E8E2D5] p-3 text-sm text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98154 00000"
                      className="w-full bg-[#FBF9F5] border border-[#E8E2D5] p-3 text-sm text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@studio.in"
                      className="w-full bg-[#FBF9F5] border border-[#E8E2D5] p-3 text-sm text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Chandigarh / New Delhi"
                      className="w-full bg-[#FBF9F5] border border-[#E8E2D5] p-3 text-sm text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                      Room Category
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-[#E8E2D5] p-3 text-sm text-[#141312] outline-none focus:border-[#141312]"
                    >
                      <option>Living Room Suite</option>
                      <option>Master Bedroom</option>
                      <option>Dining Table &amp; Chairs</option>
                      <option>Foyer &amp; Console</option>
                      <option>Full Private Residence</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                      Approximate Dimensions
                    </label>
                    <input
                      type="text"
                      value={formData.dimensions}
                      onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                      placeholder="e.g. 18ft × 24ft (Ceiling 11ft)"
                      className="w-full bg-[#FBF9F5] border border-[#E8E2D5] p-3 text-sm text-[#141312] outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                {/* Upload CAD / Reference Sketches */}
                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                    Upload Reference Drawing / Moodboard (PDF, PNG, JPG)
                  </label>
                  <label className="border-2 border-dashed border-[#E8E2D5] hover:border-[#BFA16F] bg-[#FBF9F5] p-6 text-center cursor-pointer transition-colors block">
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setFormData({ ...formData, fileName: file.name });
                      }}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Upload className="w-6 h-6 text-[#BFA16F]" />
                      <span className="text-xs font-sans font-medium text-[#141312]">
                        {formData.fileName ? formData.fileName : "Click to select drawing file"}
                      </span>
                      <span className="text-[10px] font-sans text-[#8C8780]">
                        Max 25MB · Floorplans, Sketches, CAD or Renderings
                      </span>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-wider text-[#8C8780] mb-2">
                    Project Brief &amp; Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe specific hardwood preferences, fabric textures, or functional requirements..."
                    className="w-full bg-[#FBF9F5] border border-[#E8E2D5] p-3 text-sm text-[#141312] outline-none focus:border-[#141312] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#141312] text-[#FBF9F5] hover:bg-[#BFA16F] py-4 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xl cursor-pointer"
                >
                  Submit Commission Brief →
                </button>
              </form>
            )}
          </div>

          {/* Right: Bespoke Standards & Direct Concierge */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#141312] text-[#FBF9F5] p-8 sm:p-10 space-y-6">
              <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F]">
                Direct Director Access
              </div>
              <h3 className="font-serif text-2xl text-white font-light">
                Prefer to discuss directly with our Mohali atelier?
              </h3>
              <p className="text-xs font-sans text-[#8C8780] leading-relaxed">
                Connect directly with our lead creative directors to discuss timber logs, joinery options, and lead times.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/919815420668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#BFA16F] hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 98154 20668)</span>
                </a>
              </div>
            </div>

            <div className="bg-[#F4F0E8] border border-[#E8E2D5] p-8 space-y-4 text-xs font-sans text-[#66625D]">
              <div className="text-[10px] uppercase tracking-widest text-[#141312] font-medium">
                Bespoke Capabilities
              </div>
              <p>
                <strong>Non-Standard Dimensions:</strong> Every sofa, bed, and dining table can be engineered to custom inch-precision increments.
              </p>
              <p>
                <strong>Architectural CAD Support:</strong> We supply 2D/3D DWG schematics for inclusion in your master interior sets.
              </p>
              <p>
                <strong>Curated Timber Logs:</strong> Inspect raw Teak and Walnut planks prior to cutting for grain alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
