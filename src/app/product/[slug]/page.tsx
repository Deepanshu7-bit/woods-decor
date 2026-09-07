import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MessageCircle, Ruler, ShieldCheck, Truck, Sparkles, Check } from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import EditorialProductCard from "@/components/ui/EditorialProductCard";
import TechnicalRule from "@/components/ui/TechnicalRule";
import { formatPriceRequest } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product — Woods Decor" };
  return {
    title: `${product.name} — Luxury Bespoke Furniture`,
    description: `${product.description} Handcrafted in solid kiln-seasoned hardwood at the Woods Decor Mohali atelier.`,
    openGraph: {
      title: `${product.name} — Woods Decor Atelier`,
      description: product.description,
      url: `https://www.woodsdecor.in/product/${product.slug}`,
      images: [
        {
          url: product.heroImage,
          width: 1200,
          height: 900,
          alt: `${product.name} - Woods Decor`
        }
      ]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const waPriceUrl = formatPriceRequest(product.name);

  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-sans text-[#8C8780] uppercase tracking-[0.2em] mb-8">
          <Link href="/" className="hover:text-[#141312]">
            Atelier
          </Link>
          <span>/</span>
          <Link href={`/collections/${product.category}`} className="hover:text-[#141312]">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-[#BFA16F]">{product.name}</span>
        </div>

        {/* Top Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          {/* Left: Product Media Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#F4F0E8] border border-[#E8E2D5] overflow-hidden shadow-2xl">
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-[#FBF9F5]/90 px-3 py-1 text-[9px] font-sans uppercase tracking-widest text-[#141312] border border-[#E8E2D5]">
                {product.categoryLabel}
              </div>
            </div>

            {/* Additional angles if available */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] bg-[#F4F0E8] border border-[#E8E2D5] overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Architectural Specifications & Pricing CTA */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] mb-2">
                Handcrafted in Mohali · Made to Order
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#141312] leading-tight">
                {product.name}
              </h1>
              <p className="font-serif text-lg text-[#66625D] italic mt-2">
                {product.tagline}
              </p>
            </div>

            {/* Pricing / Valuation Badge */}
            <div className="border-t border-b border-[#E8E2D5] py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] block">
                  Pricing Schedule
                </span>
                <span className="font-serif text-2xl text-[#141312]">
                  Price On Request
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#8C8780] block">
                  Lead Time
                </span>
                <span className="text-xs font-sans font-medium text-[#BFA16F]">
                  {product.leadTime}
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3">
              <a
                href={waPriceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#141312] text-[#FBF9F5] hover:bg-[#BFA16F] py-4 px-6 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-4 h-4 text-[#BFA16F] group-hover:text-white" />
                <span>Request Price &amp; Swatches (WhatsApp)</span>
              </a>

              {/* Direct Link to Make It Yours Configurator */}
              <Link
                href={`/configurator?product=${product.id}`}
                className="w-full inline-flex items-center justify-center gap-2 border border-[#141312] bg-[#FBF9F5] text-[#141312] hover:bg-[#141312] hover:text-[#FBF9F5] py-3.5 px-4 text-xs font-sans uppercase tracking-[0.18em] font-medium transition-all duration-300 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#BFA16F] group-hover:text-[#FBF9F5]" />
                <span>Customize This Piece in Configurator</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </Link>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/bespoke"
                  className="inline-flex items-center justify-center gap-2 border border-[#E8E2D5] bg-[#F4F0E8] text-[#141312] hover:border-[#141312] py-3 text-[11px] font-sans uppercase tracking-wider transition-colors"
                >
                  <span>Custom Bespoke Size</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/room-studio"
                  className="inline-flex items-center justify-center gap-2 border border-[#E8E2D5] bg-[#F4F0E8] text-[#141312] hover:border-[#141312] py-3 text-[11px] font-sans uppercase tracking-wider transition-colors"
                >
                  <span>Place in Room Studio</span>
                </Link>
              </div>
            </div>

            {/* Size & Dimension Overview */}
            <div className="bg-[#F4F0E8] border border-[#E8E2D5] p-5 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-widest text-[#141312] font-medium">
                <Ruler className="w-4 h-4 text-[#BFA16F]" />
                <span>Dimension Envelope</span>
              </div>
              <p className="text-xs font-sans text-[#66625D] leading-relaxed">
                {product.sizeGuide}
              </p>
              {product.dimensions.options && (
                <div className="space-y-1.5 pt-2 border-t border-[#E8E2D5]/60">
                  {product.dimensions.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-[11px] font-sans text-[#2E2C2A]"
                    >
                      <span className="font-medium">{opt.label}:</span>
                      <span className="font-mono text-[#66625D]">{opt.dimensions}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Trust Assurances */}
            <div className="space-y-2 text-[11px] font-sans text-[#66625D] pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#BFA16F]" />
                <span>White-glove delivery &amp; in-home assembly included across India</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#BFA16F]" />
                <span>Kiln-dried seasoned hardwood internal frame guarantee</span>
              </div>
            </div>
          </div>
        </div>

        <TechnicalRule label="THE PIECE ARCHITECTURE" />

        {/* Detailed Story & Craft Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-20">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F]">
              Atelier Notes
            </span>
            <h2 className="font-serif text-3xl font-light text-[#141312]">
              The Story of {product.name}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm font-sans font-light text-[#66625D] leading-relaxed">
            <p>{product.description}</p>
            <p>
              Each Woods Decor piece is handcrafted by master artisans from solid, sustainably sourced hardwood. We use traditional joinery, hand-carved detailing, and a hand-rubbed finish, so every piece carries a depth of character that only grows richer with age. As each item is made to order, slight natural variations in grain and finish are a hallmark of its authenticity.
            </p>
          </div>
        </div>

        {/* Materials & Finishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="bg-[#F4F0E8] border border-[#E8E2D5] p-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#141312] font-normal">
              Materials &amp; Upholstery
            </h3>
            <ul className="space-y-2 text-xs font-sans text-[#66625D]">
              {product.materials.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#BFA16F]">─</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F4F0E8] border border-[#E8E2D5] p-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#141312] font-normal">
              Available Finishes
            </h3>
            <ul className="space-y-2 text-xs font-sans text-[#66625D]">
              {product.finishes.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#BFA16F]">─</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Pieces */}
        {related.length > 0 && (
          <div className="border-t border-[#E8E2D5] pt-16 mt-20">
            <div className="flex items-baseline justify-between mb-12">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] block mb-1">
                  Complementary Works
                </span>
                <h2 className="font-serif text-3xl text-[#141312] font-light">
                  Related Atelier Pieces
                </h2>
              </div>
              <Link
                href={`/collections/${product.category}`}
                className="text-xs font-sans uppercase tracking-wider text-[#141312] hover:text-[#BFA16F]"
              >
                View Category →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <EditorialProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
