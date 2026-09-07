import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { JOURNAL_ARTICLES, getArticleBySlug } from "@/data/journal";
import TechnicalRule from "@/components/ui/TechnicalRule";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Journal — Woods Decor" };
  return {
    title: `${article.title} — Woods Decor Journal`,
    description: article.excerpt
  };
}

export default async function JournalArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <article className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#8C8780] hover:text-[#141312] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </Link>

        {/* Article Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4 text-[10px] font-sans text-[#8C8780] uppercase tracking-widest">
            <span className="text-[#BFA16F] font-mono">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141312] leading-[1.1]">
            {article.title}
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-[#66625D] italic font-light pt-2">
            {article.excerpt}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/10] bg-[#E8E2D5] border border-[#E8E2D5] overflow-hidden my-12 shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <TechnicalRule label="ESSAY ESSENTIALS" />

        {/* Content Body */}
        <div className="space-y-10 my-16 text-base font-sans font-light text-[#2E2C2A] leading-relaxed">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#141312]">
                {sec.heading}
              </h2>
              <p className="text-[#66625D] text-sm sm:text-base leading-relaxed">
                {sec.paragraph}
              </p>
            </div>
          ))}
        </div>

        {/* Article Footer & Next Read */}
        <div className="border-t border-[#E8E2D5] pt-12 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-sans text-[#8C8780]">
            Published by Woods Decor Atelier · Mohali
          </div>
          <Link
            href="/bespoke"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#141312] hover:text-[#BFA16F]"
          >
            <span>Commission A Custom Piece</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}
