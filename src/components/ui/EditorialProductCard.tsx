import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";

interface EditorialProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function EditorialProductCard({
  product,
  priority = false
}: EditorialProductCardProps) {
  return (
    <article className="group flex flex-col bg-[#FBF9F5] border border-[#E8E2D5] hover:border-[#9E7E47] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
      {/* Product Image Stage */}
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-[4/5] bg-[#F4F0E8] overflow-hidden block"
      >
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-1000 cubic-bezier(0.16,1,0.3,1) group-hover:scale-105"
          priority={priority}
        />

        {/* Hover Overlay Tag */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="text-white text-xs font-sans uppercase tracking-[0.2em] font-semibold flex items-center justify-between w-full">
            <span>Explore Piece</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4BC8B]" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="bg-[#FBF9F5]/95 backdrop-blur-sm px-3 py-1 text-[10px] font-sans uppercase tracking-widest text-[#141312] font-semibold border border-[#E8E2D5] shadow-sm">
            {product.categoryLabel}
          </span>
          {product.isNewArrival && (
            <span className="bg-[#141312] text-[#D4BC8B] px-2.5 py-1 text-[9px] font-sans uppercase tracking-widest font-semibold">
              New Design
            </span>
          )}
        </div>
      </Link>

      {/* Product Metadata */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 border-t border-[#E8E2D5]">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141312] group-hover:text-[#9E7E47] transition-colors">
              <Link href={`/product/${product.slug}`}>{product.name}</Link>
            </h3>
            <span className="text-[11px] font-sans text-[#9E7E47] uppercase tracking-wider font-semibold">
              Bespoke
            </span>
          </div>

          <p className="text-xs sm:text-sm font-sans font-normal text-[#3D3A37] line-clamp-2 leading-relaxed mb-4">
            {product.tagline}
          </p>
        </div>

        {/* Technical Specification Summary */}
        <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-sans text-[#66625D]">
          <div className="truncate max-w-[70%]">
            <span className="text-[#141312] font-semibold">Specs: </span>
            {product.materials[0] || "Solid Hardwood"}
          </div>
          <Link
            href={`/product/${product.slug}`}
            className="text-[#141312] font-semibold uppercase tracking-wider hover:text-[#9E7E47] transition-colors flex items-center gap-1"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
