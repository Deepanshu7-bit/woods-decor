import type { Metadata } from "next";
import "./globals.css";
import AtelierHeader from "@/components/navigation/AtelierHeader";
import Footer from "@/components/navigation/Footer";
import WhatsAppFloatingBadge from "@/components/navigation/WhatsAppFloatingBadge";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.woodsdecor.in"),
  title: {
    default: "Woods Decor — Luxury Bespoke Furniture Atelier",
    template: "%s | Woods Decor"
  },
  description: "Bespoke furniture crafted for spaces that deserve something extraordinary. Handcrafted solid hardwoods, tailored upholstery, and private residential commissions from our Mohali atelier.",
  keywords: [
    "Woods Decor",
    "Bespoke furniture India",
    "Luxury sofa Mohali",
    "Solid teak wood bed",
    "Handcrafted furniture Chandigarh",
    "Custom furniture Punjab",
    "Architectural furniture atelier"
  ],
  authors: [{ name: "Woods Decor Atelier" }],
  creator: "Woods Decor",
  publisher: "Woods Decor Private Limited",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Woods Decor — Luxury Bespoke Furniture Atelier",
    description: "Creating bespoke furniture that reflects individuality, craftsmanship, and enduring elegance.",
    url: "https://www.woodsdecor.in",
    siteName: "Woods Decor",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/woodsdecor/editorial/hero-editorial.jpg",
        width: 1920,
        height: 1080,
        alt: "Woods Decor Handcrafted Furniture Atelier"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Woods Decor — Luxury Bespoke Furniture Atelier",
    description: "Bespoke furniture crafted for spaces that deserve something extraordinary.",
    images: ["/assets/woodsdecor/editorial/hero-editorial.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Woods Decor",
  "legalName": "Woods Decor Private Limited",
  "url": "https://www.woodsdecor.in",
  "logo": "https://www.woodsdecor.in/assets/woodsdecor/brand/crown.png",
  "image": "https://www.woodsdecor.in/assets/woodsdecor/showroom/mohali-showroom.jpg",
  "description": "Luxury bespoke furniture atelier specializing in kiln-seasoned hardwoods, handcrafted joinery, and tailored architectural upholstery.",
  "telephone": "+919815420668",
  "email": "info@woodsdecor.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot no. 786-787, Sector 82, JLPL",
    "addressLocality": "Mohali",
    "addressRegion": "Punjab",
    "postalCode": "160055",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#141312] antialiased">
        <AtelierHeader />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <WhatsAppFloatingBadge />
      </body>
    </html>
  );
}
