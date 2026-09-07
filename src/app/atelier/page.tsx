import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Award, Hammer, Compass } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnicalRule from "@/components/ui/TechnicalRule";
import { WORKSHOP_WINGS, COMPANY_INFO } from "@/data/workshop";

export const metadata = {
  title: "The Atelier & Story — Woods Decor",
  description: "Inside the House of Woods Decor. Discover our Mohali manufacturing facility, heritage carpentry, and master finishing."
};

export default function AtelierPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <SectionHeading
            number="01"
            eyebrow="The House &amp; Atelier"
            title="A devotion to the art of fine woodworking."
            subtitle="Founded in 2018 with over 30 years of industry leadership, Woods Decor was born out of a desire to create refined interpretations of vintage and contemporary furniture that stand the test of time."
          />
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] bg-[#E8E2D5] border border-[#E8E2D5] overflow-hidden mb-24 shadow-2xl">
          <Image
            src="/assets/woodsdecor/editorial/hero-editorial.jpg"
            alt="Woods Decor Atelier"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-[#141312]/80 backdrop-blur-md px-4 py-2 text-white text-xs font-sans uppercase tracking-widest border border-white/10">
            Plot 786-787, Sector 82, JLPL, Mohali, Punjab
          </div>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#BFA16F]">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light leading-snug">
              &ldquo;Furniture is an expression of artistry and a reflection of personal character.&rdquo;
            </h2>
            <p className="font-sans text-sm font-light text-[#66625D] leading-relaxed">
              Every home is unique, and so is every customer&apos;s vision. From selecting the solid wood species and custom hand-rubbed finish to calibrating exact dimensions and upholstery stitch detailing, we work closely with our patrons.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm font-sans font-light text-[#66625D] leading-relaxed border-t lg:border-t-0 lg:border-l border-[#E8E2D5] lg:pl-12">
            <p>
              A private limited company headquartered in Mohali, our showroom, specialized manufacturing unit, and corporate office sit under one unified roof. This proximity between design directors and master craftsmen ensures that every sketch translates accurately into finished solid hardwood.
            </p>
            <p>
              We source only the finest seasoned woods, and every item undergoes rigorous tolerance inspections before leaving our workshop. In 2023, Woods Decor expanded its international presence with an exclusive flagship showroom in Melbourne, Australia, bringing Indian artisanal luxury to global residences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E8E2D5]">
              <div>
                <div className="font-serif text-3xl text-[#141312]">2018</div>
                <div className="text-[10px] font-sans text-[#8C8780] uppercase tracking-wider">
                  Atelier Founded
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-[#141312]">30+</div>
                <div className="text-[10px] font-sans text-[#8C8780] uppercase tracking-wider">
                  Years Heritage
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-[#141312]">2</div>
                <div className="text-[10px] font-sans text-[#8C8780] uppercase tracking-wider">
                  Global Flagships
                </div>
              </div>
            </div>
          </div>
        </div>

        <TechnicalRule label="THE THREE DISCIPLINES" />

        {/* The 3 Workshop Wings */}
        <div className="my-24 space-y-24">
          {WORKSHOP_WINGS.map((wing, idx) => (
            <div
              key={wing.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-6 space-y-6 ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[#BFA16F]">
                    WING / {wing.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#8C8780]">
                    {wing.discipline}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
                  {wing.title}
                </h3>

                <p className="font-sans text-sm font-light text-[#66625D] leading-relaxed">
                  {wing.description}
                </p>

                <div className="border-l-2 border-[#BFA16F] pl-4 py-1 italic font-serif text-base text-[#141312]">
                  &ldquo;{wing.craftsmanQuote}&rdquo;
                </div>

                <ul className="space-y-2 text-xs font-sans text-[#2E2C2A] pt-2">
                  {wing.processes.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#BFA16F]">✔</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`lg:col-span-6 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-[4/3] bg-[#E8E2D5] border border-[#E8E2D5] overflow-hidden shadow-xl">
                  <Image
                    src={wing.image}
                    alt={wing.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showroom Appointment Banner */}
        <div className="bg-[#141312] text-[#FBF9F5] p-8 sm:p-16 border border-[#2E2C2A] text-center space-y-6">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#BFA16F]">
            Visit Our Facilities
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] font-light max-w-2xl mx-auto">
            Experience our workshop in Mohali.
          </h2>
          <p className="font-sans text-sm text-[#8C8780] max-w-xl mx-auto font-light">
            We welcome architects and interior designers to tour our production floor and inspect raw hardwood selection in person.
          </p>
          <div className="pt-4">
            <Link
              href="/showroom"
              className="inline-flex items-center gap-2 bg-[#BFA16F] text-[#141312] px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-white transition-all"
            >
              <span>Schedule Atelier Tour</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
