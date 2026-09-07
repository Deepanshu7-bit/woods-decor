import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make It Yours — Bespoke Furniture Configurator",
  description: "Customize Woods Decor signature furniture pieces in real time. Choose from Flemish bouclés, Belgian linens, full-grain leathers, and seasoned hardwood finishes with instant architectural schematics and quote dispatch.",
  openGraph: {
    title: "Make It Yours — Woods Decor Configurator",
    description: "Automotive-grade furniture customization atelier for luxury residences and bespoke spaces.",
    url: "https://www.woodsdecor.in/configurator",
    images: ["/assets/woodsdecor/products/sofas/milano-1.jpg"]
  }
};

export default function ConfiguratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
