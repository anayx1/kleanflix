'use client';

import React from 'react';
import Image from 'next/image';

export default function PastParticipationsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="main-container px-6 md:px-12">
        {/* Header and Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <h2 className="text-primary text-3xl md:text-5xl lg:text-[52px] font-semibold tracking-tight leading-tight mb-3 md:mb-4">
            Past Participations
          </h2>
          <p className="text-primary-dark text-base md:!text-[20px] md:!leading-relaxed font-medium leading-relaxed">
            Kleanfix has participated in B2B exhibitions across: Cleaning And Hygiene Industries • Facility Management • Hospitality • Product Development Ecosystems
          </p>
        </div>

        {/* Top Row: 2 Landscape Exhibition Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-2xl md:rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/events/image1.jpeg"
              alt="Kleanfix at Aahar International Food and Hospitality Fair"
              fill
              sizes="(max-width: 1000px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/3] md:aspect-[16/11] rounded-2xl md:rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/events/image2.jpeg"
              alt="Kleanfix Exhibition Stall Display at Aahar"
              fill
              sizes="(max-width: 1000px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Row: 3 Portrait Exhibition Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/events/image3.jpeg"
              alt="Kleanfix Industries Stall Booth C-7C at Hitex Hyderabad"
              fill
              sizes="(max-width: 1000px) 100vw, 550px"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/events/image4.jpeg"
              alt="International Soap Detergent Cosmetics Expo 2026 Invitation"
              fill
              sizes="(max-width: 1000px) 100vw, 550px"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[3/4] rounded-2xl md:rounded-[24px] overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/events/image5.jpeg"
              alt="Kleanfix Industries Stall Overview at Exhibition"
              fill
              sizes="(max-width: 1000px) 100vw, 550px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-8 md:mt-12 bg-[#E9F1F6] rounded-xl md:rounded-2xl py-3.5 px-6 md:py-4 md:px-8 text-center">
          <p className="text-primary-dark text-sm md:!text-[17px] font-medium leading-normal">
            This reflects ongoing engagement with real operational requirements — not passive presence.
          </p>
        </div>
      </div>
    </section>
  );
}
