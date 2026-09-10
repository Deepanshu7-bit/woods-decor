"use client";

import React, { useSyncExternalStore } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import { Compass, Zap } from "lucide-react";

const emptySubscribe = () => () => {};

export default function ThemeCustomizerPill() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const { theme, toggleTheme } = useThemeStore();

  if (!isClient) return null;

  const isAvantGarde = theme === "avant-garde";

  return (
    <button
      onClick={toggleTheme}
      title="Switch Atelier Aesthetic (Heritage vs Avant-Garde Modernist)"
      aria-label="Toggle Website Aesthetic Theme"
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-500 cursor-pointer shadow-lg border ${
        isAvantGarde
          ? "bg-[#16181D]/90 text-[#D8E82E] border-[#D8E82E]/40 hover:border-[#D8E82E] hover:shadow-[0_0_20px_rgba(216,232,46,0.25)]"
          : "bg-[#FBF9F5]/90 text-[#141312] border-[#BFA16F]/50 hover:border-[#BFA16F] hover:shadow-[0_0_20px_rgba(191,161,111,0.2)]"
      }`}
    >
      <span className="flex items-center gap-1.5">
        {isAvantGarde ? (
          <>
            <Zap className="w-3 h-3 fill-[#D8E82E] text-[#D8E82E] animate-pulse" />
            <span className="font-bold tracking-[0.18em]">Avant-Garde</span>
          </>
        ) : (
          <>
            <Compass className="w-3 h-3 text-[#BFA16F]" />
            <span className="font-medium tracking-[0.18em]">Heritage Atelier</span>
          </>
        )}
      </span>

      <span
        className={`w-2 h-2 rounded-full transition-colors ${
          isAvantGarde ? "bg-[#D8E82E]" : "bg-[#BFA16F]"
        }`}
      />
    </button>
  );
}
