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
      {/* 01: Entrance */}
      <CinematicHero />

      {/* 02: Brand Intro & Heritage */}
      <BrandIntroduction />

      {/* 03: Collections */}
      <CollectionsExhibition />

      {/* 04: The Craft Journey */}
      <CraftPreview />

      {/* 05: Materials & Tactility */}
      <MaterialsPreview />

      {/* 06: Make It Yours Configurator */}
      <ConfiguratorPreview />

      {/* 07: Room Studio Spatial Planner */}
      <RoomStudioPreview />

      {/* 08: Bespoke Private Commissions */}
      <BespokeSection />

      {/* 09: Architectural Projects */}
      <ProjectsSection />

      {/* 10: Showroom & Mohali Works */}
      <ShowroomMohali />

      {/* 11: Patrons & Testimonials */}
      <TestimonialsSection />

      {/* 12: Editorial Journal */}
      <JournalSection />

      {/* 13: Closing Master Statement */}
      <FinalCTA />
    </div>
  );
}
