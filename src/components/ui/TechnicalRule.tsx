import React from "react";

interface TechnicalRuleProps {
  label?: string;
  className?: string;
  theme?: "light" | "dark";
}

export default function TechnicalRule({
  label,
  className = "",
  theme = "light"
}: TechnicalRuleProps) {
  const isDark = theme === "dark";

  return (
    <div className={`relative flex items-center justify-center my-8 ${className}`}>
      {/* Horizontal Line */}
      <div
        className={`w-full h-[1px] ${
          isDark ? "bg-[#2E2C2A]" : "bg-[#E8E2D5]"
        }`}
      />

      {/* Left End Tick */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-3 ${
          isDark ? "bg-[#BFA16F]/50" : "bg-[#BFA16F]"
        }`}
      />

      {/* Center Technical Label */}
      {label && (
        <span
          className={`absolute px-4 font-sans text-[9px] uppercase tracking-[0.25em] font-mono ${
            isDark
              ? "bg-[#141312] text-[#8C8780] border border-[#2E2C2A]"
              : "bg-[#FBF9F5] text-[#8C8780] border border-[#E8E2D5]"
          }`}
        >
          {label}
        </span>
      )}

      {/* Right End Tick */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3 ${
          isDark ? "bg-[#BFA16F]/50" : "bg-[#BFA16F]"
        }`}
      />
    </div>
  );
}
