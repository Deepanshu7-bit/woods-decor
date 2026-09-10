import React from "react";
import CinematicHero from "@/components/home/CinematicHero";
import BrandIntroduction from "@/components/home/BrandIntroduction";
import CollectionsExhibition from "@/components/home/CollectionsExhibition";
import CraftPreview from "@/components/home/CraftPreview";
import MaterialsPreview from "@/components/home/MaterialsPreview";
import ConfiguratorPreview from "@/components/home/ConfiguratorPreview";
import RoomStudioPreview from "@/components/home/RoomStudioPreview";
import BespokeSection from "@/components/home/BespokeSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ShowroomMohali from "@/components/home/ShowroomMohali";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import JournalSection from "@/components/home/JournalSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ACT I: THE DAYLIGHT PAVILION */}
      {/* 01: Entrance */}
      <CinematicHero />

      {/* 02: Brand Intro & Heritage */}
      <BrandIntroduction />

      {/* 03: Collections Exhibition */}
      <CollectionsExhibition />

      {/* 04: Materials & Tactility */}
      <MaterialsPreview />

      {/* 05: Bespoke Private Commissions */}
      <BespokeSection />

      {/* 06: Architectural Projects */}
      <ProjectsSection />

      {/* 07: Flagship Showroom Mohali */}
      <ShowroomMohali />

      {/* ACT II: THE ATELIER VAULT & INTERACTIVE SUITE */}
      {/* 08: The Craft Journey */}
      <CraftPreview />

      {/* 09: Make It Yours Configurator */}
      <ConfiguratorPreview />

      {/* 10: Room Studio Spatial Planner */}
      <RoomStudioPreview />

      {/* 11: Patrons & Testimonials */}
      <TestimonialsSection />

      {/* 12: Editorial Journal */}
      <JournalSection />

      {/* 13: Closing Master Statement */}
      <FinalCTA />
    </div>
  );
}
