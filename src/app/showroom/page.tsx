import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Compass, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechnicalRule from "@/components/ui/TechnicalRule";
import { COMPANY_INFO } from "@/data/workshop";

export const metadata = {
  title: "Showroom & Atelier Headquarters — Woods Decor",
  description: "Visit the Woods Decor flagship showroom, manufacturing facility, and design office in Mohali, Punjab."
};

export default function ShowroomPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FBF9F5] text-[#141312]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeading
            number="09"
            eyebrow="The Atelier Showroom"
            title="A physical encounter with craft."
            subtitle="Our flagship showroom, specialized manufacturing facility, and corporate headquarters sit under one roof in Mohali, Punjab. We invite patrons, architects, and designers to experience scale and timber finishes in person."
          />
        </div>

        {/* Mohali Headquarters Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#F4F0E8] border border-[#E8E2D5] p-8 sm:p-12 shadow-2xl mb-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#BFA16F]">HEADQUARTERS</span>
              <span className="text-xs uppercase tracking-widest text-[#8C8780]">
                Mohali, India
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
              Mohali Integrated Atelier
            </h2>

            <div className="space-y-4 text-xs sm:text-sm font-sans text-[#2E2C2A]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#BFA16F] shrink-0 mt-0.5" />
                <div>
                  <strong>Address:</strong><br />
                  Plot no. 786-787, Sector 82, JLPL, Mohali, Punjab 160055, India
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#BFA16F] shrink-0 mt-0.5" />
                <div>
                  <strong>Visiting Hours:</strong><br />
                  Monday – Saturday: 10:00 AM – 7:00 PM<br />
                  Sunday: 11:00 AM – 5:00 PM
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#BFA16F] shrink-0 mt-0.5" />
                <div>
                  <strong>Direct Concierge:</strong><br />
                  +91 98154 20668 &nbsp;|&nbsp; info@woodsdecor.in
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8E2D5]">
              <a
                href="https://wa.me/919815420668?text=Hello%20Woods%20Decor%20team%2C%20I%20would%20like%20to%20schedule%20a%20showroom%20and%20workshop%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#141312] text-[#FBF9F5] px-7 py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-medium hover:bg-[#BFA16F] transition-all shadow-lg"
              >
                <span>Book Appointment (WhatsApp)</span>
                <ArrowUpRight className="w-4 h-4 text-[#BFA16F]" />
              </a>
              <a
                href={COMPANY_INFO.headquarters.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E8E2D5] bg-[#FBF9F5] text-[#141312] px-7 py-3.5 text-xs font-sans uppercase tracking-[0.2em] hover:border-[#141312] transition-colors"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] bg-[#E8E2D5] border border-[#E8E2D5] overflow-hidden shadow-xl">
              <Image
                src={COMPANY_INFO.headquarters.image}
                alt="Woods Decor Mohali Showroom"
                fill
                className="object-cover"
              />
            </div>
            {/* Embedded Google Map */}
            <div className="w-full h-48 border border-[#E8E2D5] overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=30.655495,76.728207&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Woods Decor Mohali Location Map"
              />
            </div>
          </div>
        </div>

        {/* International Showrooms */}
        <div className="border-t border-[#E8E2D5] pt-16 mb-16">
          <div className="max-w-xl mb-12">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BFA16F] block mb-2">
              International Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
              Melbourne Flagship
            </h2>
            <p className="text-xs font-sans text-[#66625D] font-light mt-2">
              Opened in 2023, bringing Woods Decor custom handcrafted Indian hardwoods and contemporary bespoke furniture to Australian patrons and international design practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#F4F0E8] border border-[#E8E2D5] p-8">
            <div className="relative aspect-[16/10] bg-[#E8E2D5] border border-[#E8E2D5] overflow-hidden">
              <Image
                src="/assets/woodsdecor/showroom/melbourne-showroom.jpg"
                alt="Woods Decor Melbourne Flagship"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-xs font-sans text-[#66625D]">
              <div className="text-[10px] uppercase tracking-widest text-[#141312] font-medium">
                Melbourne International Hub
              </div>
              <p>
                Servicing private residential commissions, commercial hospitality projects, and bespoke furniture imports across Australia.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:info@woodsdecor.in?subject=Melbourne%20Showroom%20Inquiry"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#141312] hover:text-[#BFA16F] font-medium"
                >
                  <span>Inquire for Melbourne Appointments</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
