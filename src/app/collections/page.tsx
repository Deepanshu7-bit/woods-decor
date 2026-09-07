import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COLLECTIONS } from "@/data/collections";
import { PRODUCTS } from "@/data/products";
import EditorialProductCard from "@/components/ui/EditorialProductCard";

export const metadata = {
  title: "Furniture Collections — Woods Decor",
  description: "Explore bespoke living, bedroom, dining, lighting, mirrors, and curated decor handcrafted by Woods Decor."
};

export default function CollectionsOverviewPage() {
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <SectionHeading
            number="02"
            eyebrow="The Catalog of Works"
            title="Bespoke furniture worlds."
            subtitle="Explore our complete collection of handcrafted living room, bedroom, dining, and architectural pieces, each made to order in our Mohali atelier."
          />
        </div>

        {/* Categories Exhibition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.id}
              href={`/collections/${c.slug}`}
              className="group flex flex-col bg-[#F4F0E8] border border-[#E8E2D5] hover:border-[#BFA16F] transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-[#E8E2D5] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-[#FBF9F5]/90 px-2.5 py-1 text-[9px] font-sans uppercase tracking-widest text-[#141312]">
                  {c.accent}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                  <h3 className="font-serif text-2xl font-light">{c.title}</h3>
                  <span className="text-xs font-sans text-[#BFA16F]">
                    {c.count} pieces →
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="font-sans text-xs font-light text-[#66625D] leading-relaxed">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Heirlooms Grid */}
        <div className="border-t border-[#E8E2D5] pt-16 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] block mb-2">
                Curated Selections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
                Featured Atelier Pieces
              </h2>
            </div>
            <span className="text-xs font-sans text-[#8C8780]">
              Showing {featured.length} signature designs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <EditorialProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
