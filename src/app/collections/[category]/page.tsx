import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialProductCard from "@/components/ui/EditorialProductCard";
import { COLLECTIONS, getCollectionBySlug } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const col = getCollectionBySlug(category);
  if (!col) return { title: "Collection — Woods Decor" };
  return {
    title: `${col.title} Collection — Woods Decor`,
    description: col.description
  };
}

export default async function CategoryExhibitionPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const col = getCollectionBySlug(category);

  if (!col) {
    notFound();
  }

  const products = getProductsByCategory(col.slug);

  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Category Header Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-16 border-b border-[#E8E2D5]">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-sans text-[#8C8780] uppercase tracking-widest">
              <Link href="/collections" className="hover:text-[#141312]">
                Collections
              </Link>
              <span>/</span>
              <span className="text-[#BFA16F] font-medium">{col.title}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#141312] leading-tight">
              {col.title} Collection
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#66625D] italic">
              &ldquo;{col.subtitle}&rdquo;
            </p>

            <p className="font-sans text-sm font-light text-[#66625D] leading-relaxed max-w-xl">
              {col.description} Every piece is customizable in dimensions, wood species, and upholstery fabrics to suit your residence.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="/bespoke"
                className="inline-flex items-center gap-2 bg-[#141312] text-white px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#BFA16F] transition-colors"
              >
                <span>Custom Dimensions</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/room-studio"
                className="inline-flex items-center gap-2 border border-[#E8E2D5] bg-[#F4F0E8] text-[#141312] px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] hover:border-[#141312] transition-colors"
              >
                <span>Place in Room Studio</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] bg-[#E8E2D5] border border-[#E8E2D5] overflow-hidden shadow-xl">
            <Image
              src={col.image}
              alt={col.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Exhibition Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E2D5]">
            <span className="text-xs font-sans uppercase tracking-widest text-[#8C8780]">
              Showing {products.length} Curated Designs
            </span>
            <span className="text-xs font-sans text-[#BFA16F] uppercase tracking-wider">
              100% Made to Order in Mohali
            </span>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <EditorialProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-[#F4F0E8] border border-[#E8E2D5] p-8 space-y-4">
              <h3 className="font-serif text-2xl text-[#141312]">
                New Designs In Production
              </h3>
              <p className="text-xs font-sans text-[#66625D] max-w-md mx-auto">
                Our Mohali atelier is currently handcrafting additions for the {col.title} collection. Contact our directors for private previews.
              </p>
              <Link
                href="/bespoke"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#BFA16F] hover:underline"
              >
                Inquire For Custom Commission →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
