'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

const DISCUSSION_BENEFITS = [
  'Focused Interaction',
  'Better Alignment on Requirement',
  'No On-Site Delays',
];

export default function PlanYourDiscussionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="main-container px-6 md:px-12">
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Intro */}
          <div className="md:col-span-6 lg:col-span-6 space-y-4 md:space-y-6">
            <h2 className="text-primary text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight tracking-tight">
              Plan your discussion
            </h2>
            <p className="text-primary-dark text-base md:!text-[20px] md:!leading-snug font-medium leading-snug max-w-xl">
              If you are attending an upcoming exhibition,schedule a discussion with the Kleanfix team in advance.
            </p>
          </div>

          {/* Right Column: Pre-scheduled benefits list & CTA */}
          <div className="md:col-span-6 lg:col-span-6 space-y-2">
            <h3 className="text-primary-dark text-base md:!text-[24px] md:!leading-snug font-medium leading-snug">
              Pre-scheduled discussions ensure:
            </h3>

            {/* Benefits List with bottom dividers */}
            <div>
              {DISCUSSION_BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="py-2.5 md:py-3 border-b border-slate-200/80"
                >
                  <p className="text-primary-dark text-sm md:!text-[17px] font-normal leading-normal">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-3 md:pt-4">
              <Button
                variant="pill-secondary"
                showArrow={false}
                href="/contact-us"
                className="font-semibold text-xs md:text-sm px-7 py-2 uppercase"
              >
                SCHEDULE EXHIBITION MEETING
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Banner Image */}
        <div className="relative w-full rounded-2xl md:rounded-[32px] overflow-hidden mt-10 md:mt-14 lg:mt-16 bg-gray-100 shadow-sm">
          <Image
            src="/events/banner.jpg"
            alt="Hourglass and clock - Plan your discussion in advance with Kleanfix"
            width={1230}
            height={593}
            sizes="(max-width: 1800px) 100vw, 1800px"
            className="w-full h-auto object-cover rounded-2xl md:rounded-[32px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
