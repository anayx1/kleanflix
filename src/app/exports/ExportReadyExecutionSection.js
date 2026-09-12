'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ExportReadyExecutionSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-primary font-bold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-8 md:mb-12"
                >
                    Export ready execution
                </motion.h2>

                {/* Two-Column Text Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start mb-8 md:mb-12">
                    {/* Left Column: Alignment Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-4"
                    >
                        <p className="text-primary-dark font-normal text-base md:text-lg lg:text-[20px] leading-snug max-w-md">
                            Support is aligned based on country, <br className="hidden md:inline" />
                            product category, and scale.
                        </p>
                    </motion.div>

                    {/* Right Column: Kleanfix Supports Export Through */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-2 text-primary-dark"
                    >
                        <p className="font-sans font-semibold text-base md:text-lg lg:text-[20px] text-primary-dark leading-snug">
                            Kleanfix supports export through:
                        </p>

                        <div className="space-y-1.5 pt-1">
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                • Batch-Level Consistency Across Shipments
                            </p>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                • Packaging Aligned to International Formats
                            </p>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                • Documentation Support (SDS / TDS And Specifications)
                            </p>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                • Supply Continuity for Repeat Orders
                            </p>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                • OEM And Private Label Export Capability
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Video Container (Fixed rounded-xl) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-[16/9] md:aspect-[1.9/1] rounded-xl overflow-hidden shadow-xs bg-slate-100"
                >
                    <video
                        src="/exports/video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
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
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
