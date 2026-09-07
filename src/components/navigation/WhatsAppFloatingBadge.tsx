"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Concierge Support" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`bg-[#141312] text-[#FBF9F5] border border-[#2E2C2A] text-xs font-sans px-3.5 py-1.5 shadow-xl transition-all duration-300 pointer-events-none hidden sm:block ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span className="text-[#BFA16F]">Atelier Concierge:</span> Direct Consultation
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919815420668?text=Hello%20Woods%20Decor%20team%2C%20I%20am%20interested%20in%20discussing%20a%20bespoke%20furniture%20piece."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Direct WhatsApp Concierge"
        className="w-13 h-13 bg-[#141312] text-[#FBF9F5] hover:bg-[#BFA16F] hover:text-[#141312] border border-[#2E2C2A] hover:border-[#BFA16F] flex items-center justify-center transition-all duration-500 shadow-2xl group cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 text-[#BFA16F] group-hover:text-[#141312] transition-colors" />
      </a>
    </aside>
  );
}
