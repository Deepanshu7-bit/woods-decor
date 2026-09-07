import React from "react";

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  theme?: "light" | "dark";
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  subtitle,
  alignment = "left",
  theme = "light"
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignClass =
    alignment === "center"
      ? "text-center mx-auto items-center"
      : alignment === "right"
      ? "text-right ml-auto items-end"
      : "text-left items-start";

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignClass}`}>
      {/* Eyebrow & Number */}
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="font-sans text-xs font-mono font-bold tracking-widest text-[#BFA16F]">
            {number}
          </span>
        )}
        <span
          className={`font-sans text-[11px] font-semibold uppercase tracking-[0.25em] ${
            isDark ? "text-[#D4BC8B]" : "text-[#9E7E47]"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      {/* Main Headline */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] ${
          isDark ? "text-[#FFFFFF]" : "text-[#141312]"
        }`}
      >
        {title}
      </h2>

      {/* Subtitle / Descriptive Copy with High Contrast */}
      {subtitle && (
        <p
          className={`font-sans text-sm sm:text-base font-normal mt-4 max-w-2xl leading-relaxed ${
            isDark ? "text-[#E8E2D5]" : "text-[#3D3A37]"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Subtle Hairline Rule */}
      <div
        className={`w-14 h-[1.5px] mt-6 ${
          isDark ? "bg-[#BFA16F]/60" : "bg-[#9E7E47]/70"
        }`}
      />
    </div>
  );
}
