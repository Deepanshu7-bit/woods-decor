import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/workshop";

export default function ShowroomMohali() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141312] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Showroom Information */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              number="06"
              eyebrow="The Atelier Showroom"
              title="Experience Woods Decor in person."
              subtitle="Visit our flagship showroom and active manufacturing facility in Mohali. Experience scale, touch solid wood finishes, and inspect active upholstery craftsmanship with our design directors."
            />

            <div className="space-y-4 pt-2 text-xs sm:text-sm font-sans text-[#2E2C2A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9E7E47] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#141312]">Atelier &amp; Showroom Address:</strong><br />
                  <span className="text-[#3D3A37]">{COMPANY_INFO.headquarters.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#9E7E47] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#141312]">Visiting Hours:</strong><br />
                  <span className="text-[#3D3A37]">{COMPANY_INFO.headquarters.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#9E7E47] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#141312]">Direct Concierge:</strong><br />
                  <span className="text-[#3D3A37]">{COMPANY_INFO.headquarters.phone} &nbsp;|&nbsp; {COMPANY_INFO.headquarters.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/showroom"
                className="inline-flex items-center gap-2 bg-[#141312] text-[#FBF9F5] px-7 py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold hover:bg-[#9E7E47] transition-all duration-300 shadow-lg"
              >
                <span>Book A Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4BC8B]" />
              </Link>
              <a
                href={COMPANY_INFO.headquarters.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E8E2D5] bg-[#F4F0E8] text-[#141312] px-7 py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-medium hover:border-[#141312] transition-colors"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Showroom Image + Interactive Map Frame */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[16/10] bg-[#E8E2D5] border border-[#E8E2D5] overflow-hidden shadow-2xl">
              <Image
                src={COMPANY_INFO.headquarters.image}
                alt="Woods Decor Mohali Showroom"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#141312]/90 backdrop-blur-md px-3.5 py-1.5 text-white text-[10px] font-sans uppercase tracking-widest border border-white/10 font-medium">
                Sector 82, JLPL, Mohali Flagship
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-48 border border-[#E8E2D5] overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=30.655495,76.728207&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Woods Decor Mohali Showroom Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
