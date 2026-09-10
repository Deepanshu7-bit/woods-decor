"use client";

import { create } from "zustand";

export type AtelierTheme = "heritage" | "avant-garde";

interface ThemeState {
  theme: AtelierTheme;
  setTheme: (theme: AtelierTheme) => void;
  toggleTheme: () => void;
}

const getInitialTheme = (): AtelierTheme => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("woods_decor_theme") as AtelierTheme | null;
    if (saved === "avant-garde" || saved === "heritage") {
      document.documentElement.classList.remove("theme-heritage", "theme-avant-garde");
      document.documentElement.classList.add(`theme-${saved}`);
      return saved;
    }
    document.documentElement.classList.add("theme-heritage");
  }
  return "heritage";
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getInitialTheme(),
  setTheme: (newTheme: AtelierTheme) => {
    set({ theme: newTheme });
    if (typeof window !== "undefined") {
      localStorage.setItem("woods_decor_theme", newTheme);
      document.documentElement.classList.remove("theme-heritage", "theme-avant-garde");
      document.documentElement.classList.add(`theme-${newTheme}`);
    }
  },
  toggleTheme: () => {
    const nextTheme = get().theme === "heritage" ? "avant-garde" : "heritage";
    get().setTheme(nextTheme);
  },
}));
