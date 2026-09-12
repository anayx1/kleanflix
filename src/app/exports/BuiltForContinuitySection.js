'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BuiltForContinuitySection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Part 1: Built for continuity - Infrastructure */}
                <div className="space-y-8 md:space-y-12">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[95%]"
                    >
                        <h2 className="text-primary font-bold text-2xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15]">
                            Built for continuity- Export supply is supported by structured infrastructure:
                        </h2>
                    </motion.div>

                    {/* Content Row: Bullets & Statement (Left) + Warehouse High-Bay Racks Photo (Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Left Column: Bullets + Concluding Statement */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-primary-dark"
                        >
                            <div>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[20px] text-primary-dark leading-snug">
                                    • 3 production lines
                                </p>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[20px] text-primary-dark leading-snug">
                                    • ~50 KL monthly capacity
                                </p>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[20px] text-primary-dark leading-snug">
                                    • in-house R&D and formulation control
                                </p>
                            </div>

                            <div className="pt-2">
                                <p className="font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary-dark leading-relaxed">
                                    This ensures consistency is maintained — <br className="hidden md:inline" />
                                    not compromised — as scale increases.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Warehouse High-Bay Racks Photo (fixed rounded-xl) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-5 flex justify-center md:justify-end"
                        >
                            <div className="relative w-full max-w-[260px] md:max-w-[290px] lg:max-w-[310px] aspect-[3/4] rounded-xl overflow-hidden shadow-xs bg-slate-100">
                                <Image
                                    src="/exports/this-ensures.webp"
                                    alt="Warehouse high-bay racking and storage infrastructure - Built for continuity"
                                    fill
                                    sizes="(max-width: 1001px) 100vw, 310px"
                                    className="object-cover object-center"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Part 2: What This Means For You */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center pt-16 md:pt-24 lg:pt-32">
                    {/* Left Column: Business Handshake in Front of Containers Photo (fixed rounded-xl) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 flex justify-center md:justify-start"
                    >
                        <div className="relative w-full max-w-[440px] md:max-w-[500px] lg:max-w-[540px] aspect-[3/2] rounded-xl overflow-hidden shadow-xs bg-slate-100">
                            <Image
                                src="/exports/what-this-means.avif"
                                alt="International trade partners shaking hands at shipping port - What this means for you"
                                fill
                                sizes="(max-width: 1001px) 100vw, 540px"
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Heading, Subtitle, Bullets & Concluding Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-4 md:space-y-5 text-primary-dark"
                    >
                        <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[54px]">
                            What this means for you
                        </h2>

                        <p className="font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary-dark leading-snug">
                            Instead of managing uncertainty, you get:
                        </p>

                        <div>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[20px] text-primary-dark leading-snug">
                                • Predictable Product Behaviour Across Markets
                            </p>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[20px] text-primary-dark leading-snug">
                                • Reduced Operational Risk
                            </p>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[20px] text-primary-dark leading-snug">
                                • Higher Acceptance Rates
                            </p>
                            <p className="font-sans font-normal text-xs md:text-sm lg:text-[20px] text-primary-dark leading-snug">
                                • Stronger Repeat Order Cycles
                            </p>
                        </div>

                        <div className="pt-2 md:pt-4">
                            <p className="font-sans font-semibold text-base md:text-lg lg:text-[22px] text-primary-dark leading-snug">
                                This is what builds long- <br className="hidden md:inline" />
                                term export relationships.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
