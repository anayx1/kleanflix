'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function CoreManufacturingCapabilitiesSection() {
    return (
        <section className="py-15 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-8 md:mb-12"
                >
                    Core manufacturing capabilities
                </motion.h2>

                {/* Two-Column Text and Action Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start mb-8 md:mb-12">
                    {/* Left Column: Focus Statement + CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-4 md:space-y-6"
                    >
                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            The focus remains on controlled execution <br className="hidden md:block" />
                            — not isolated output.
                        </p>

                        <div className="pt-1 md:pt-2">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/products"
                                className="font-bold text-xs md:text-sm px-7 md:px-8 py-3 md:py-3.5 uppercase tracking-wide"
                            >
                                VIEW PRODUCT SYSTEMS
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Categories and Bullets */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-2 text-primary-dark"
                    >
                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                            Kleanfix manufacturing supports <br className="hidden md:block" />
                            controlled production across categories:
                        </p>

                        <div className="text-primary-dark font-normal text-sm md:text-base lg:text-[17px] leading-snug space-y-1 pt-1">
                            <p>• Multi-category production within structured systems</p>
                            <p>• Batch consistency through process discipline</p>
                            <p>• Documentation aligned to product and category requirements</p>
                        </div>
                    </motion.div>
                </div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-[16/9] md:aspect-[1.9/1] rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm bg-slate-100"
                >
                    <video
                        src="/manufacturing/lastsec.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
