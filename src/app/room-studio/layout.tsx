import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Your Room — Room Studio Spatial Atelier",
  description: "Curate and visualize your living space with Woods Decor furniture. Place sofas, armchairs, consoles, and tables on an interactive spatial canvas with material synchronization and room dossier export.",
  openGraph: {
    title: "Design Your Room — Woods Decor Room Studio",
    description: "Interactive spatial canvas to curate, customize, and export bespoke room layouts with genuine Woods Decor furniture.",
    url: "https://www.woodsdecor.in/room-studio",
    images: ["/assets/woodsdecor/editorial/hero-editorial.jpg"]
  }
};

export default function RoomStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
