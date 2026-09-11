'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PackagingAndExecutionSupportSection() {
    return (
        <section className="relative w-full min-h-[560px] md:min-h-[660px] lg:min-h-[760px] py-14 md:py-20 lg:py-24 flex items-center overflow-hidden bg-slate-900">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
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
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            >
                <source src="https://res.cloudinary.com/spqd54wy/video/upload/v1788202715/10598760-hd_3840_2160_30fps_1_1_1.mp4" type="video/mp4" />
                <source src="/homepage/sec13.mp4" type="video/mp4" />
            </video>

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/15 z-0 pointer-events-none" />

            {/* Main Container with Right-Aligned Card */}
            <div className="main-container px-6 md:px-12 w-full relative z-10 flex justify-center md:justify-end items-center">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-2xl md:rounded-[32px] p-7 md:p-10 lg:p-12 shadow-2xl w-full max-w-full md:max-w-xl lg:max-w-[620px] text-primary-dark"
                >
                    {/* Heading */}
                    <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-5 md:mb-6">
                        Packaging and <br />
                        execution support
                    </h2>

                    {/* Subtitle & Bullets */}
                    <div className="space-y-2">
                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                            OEM execution extends beyond manufacturing:
                        </p>

                        <div className="text-base md:!text-[18px] font-normal leading-snug pt-1 space-y-1">
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Packaging Formats Aligned to Product Category</p>
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Private Label Execution with Controlled Systems</p>
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Label and Artwork Alignment Based on Requirement</p>
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Batch Coding and Traceability</p>
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Export-Ready Packaging (Where Applicable)</p>
                        </div>
                    </div>

                    {/* Concluding Statement */}
                    <div className="pt-6 md:pt-8">
                        <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                            This ensures the product is not just <br className="hidden md:block" />
                            manufactured — but market-ready.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
