import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Private Commissions & CAD Consultation",
  description: "Commission custom furniture built to your exact architectural blueprints and room clearances. Work directly with Woods Decor master craftsmen and design directors.",
  openGraph: {
    title: "Bespoke Private Commissions — Woods Decor",
    description: "Tailored furniture engineering for luxury residences, penthouses, and architectural estates.",
    url: "https://www.woodsdecor.in/bespoke",
    images: ["/assets/woodsdecor/workshop/carpentry.jpg"]
  }
};

export default function BespokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
