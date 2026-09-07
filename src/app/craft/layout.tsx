import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Making of a Piece — The Craft Journey",
  description: "Experience the 7-stage architectural craft journey of Woods Decor bespoke furniture: from 1:1 CAD drafting and seasoned hardwood joinery to precision suspension and tailored upholstery.",
  openGraph: {
    title: "The Making of a Piece — Woods Decor Craft",
    description: "An architectural exploration of handcrafted joinery, kiln-seasoned hardwoods, and master upholstery in our Mohali atelier.",
    url: "https://www.woodsdecor.in/craft",
    images: ["/assets/woodsdecor/workshop/carpentry.jpg"]
  }
};

export default function CraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
