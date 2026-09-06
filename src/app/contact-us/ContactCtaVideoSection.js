'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactCtaVideoSection() {
    return (
        <section className="relative w-full min-h-[90vh] md:h-screen flex items-end justify-center w-full overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    defaultMuted
                    playsInline
                    preload="auto"
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                    ref={(el) => {
                        if (el) {
                            el.muted = true;
                            el.defaultMuted = true;
                        }
                    }}
                    onCanPlay={(e) => {
                        e.currentTarget.muted = true;
                        e.currentTarget.play().catch(() => {});
                    }}
                    className="w-full h-full object-cover object-center pointer-events-none"
                >
                    <source src="/contactus/cta-section.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            </div>

            {/* Content Container positioned at the lower-left */}
            <div className="relative z-10 w-full px-6 md:px-12  pb-8 md:pb-10 lg:pb-12 pt-28 flex items-center justify-center">
                <div className="max-w-5xl ">
                    {/* Main Headline with exact 3-line layout matching screenshot */}
                    <h2 className="text-white font-semibold !text-white leading-tight">
                        If consistency matters to your business, you
                        <br />
                        don’t need more suppliers.
                        <br />
                        You need control over the system.
                    </h2>

                    {/* Submit Requirement Pill Button */}
                    <div className="my-5 md:my-6">
                        <Link
                            href="#contact-form"
                            className="inline-flex items-center justify-center rounded-full bg-secondary hover:bg-[#e06912] text-white font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-2.5 md:px-7 md:py-3 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
                        >
                            SUBMIT REQUIREMENT
                        </Link>
                    </div>

                    {/* Subtext with exact 2-line max-width flow */}
                    <p className="font-normal !text-xs md:!text-sm lg:!text-[15px] leading-relaxed max-w-[780px] !text-white/95">
                        Once submitted, your requirement is mapped to the right system based on application, scale, and performance needs — before any recommendation is made.
                    </p>
                </div>
            </div>
        </section>
    );
}
