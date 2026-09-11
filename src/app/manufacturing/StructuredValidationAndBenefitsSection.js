'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StructuredValidationAndBenefitsSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Part 1: Manufacturing R&D and Validation Processes */}
                <div className="space-y-8 md:space-y-12">
                    {/* Centered Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.15]">
                            Manufacturing is supported by structured <br className="hidden md:block" />
                            R&D and validation processes:
                        </h2>
                    </motion.div>

                    {/* Content Row: Bullets & Statement (Left) + Lab Image (Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Left Column: Bullets + Concluding Statement */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-primary-dark"
                        >
                            <div className="text-primary-dark font-normal text-sm md:text-base lg:text-[17px] leading-snug space-y-1.5">
                                <p>• In-House Formulation Support</p>
                                <p>• Stability and Compatibility Testing</p>
                                <p>• Batch-Level Consistency Checks</p>
                                <p>• Controlled Formulation Processes</p>
                                <p>• Documentation Aligned to Regulatory and Category Needs</p>
                            </div>

                            <div className="pt-2">
                                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                    This ensures products perform <br className="hidden md:block" />
                                    consistently under real usage conditions.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Lab Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-5 flex justify-center md:justify-end"
                        >
                            <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[340px] aspect-[2/3] rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm bg-slate-100">
                                <Image
                                    src="/manufacturing/this-ensures-products-perform.jpg"
                                    alt="Laboratory chemistry glassware setup - Structured R&D and validation processes"
                                    fill
                                    sizes="(max-width: 1001px) 100vw, 340px"
                                    className="object-cover object-center"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Part 2: What This Means For You */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center pt-16 md:pt-24 lg:pt-32">
                    {/* Left Column: Hands Stacking Coins Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 flex justify-center md:justify-start"
                    >
                        <div className="relative w-full max-w-[440px] md:max-w-[500px] lg:max-w-[540px] aspect-[16/10] rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm bg-slate-100">
                            <Image
                                src="/manufacturing/what-this-means-for-you.webp"
                                alt="Hands stacking coins - What this means for you"
                                fill
                                sizes="(max-width: 1001px) 100vw, 540px"
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Heading, Subtitle & Bullets */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-4 md:space-y-5 text-primary-dark"
                    >
                        <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                            What this means for you
                        </h2>

                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                            For the buyer, this translates into:
                        </p>

                        <div className="text-primary-dark font-normal text-sm md:text-base lg:text-[17px] leading-snug space-y-1.5 pt-0.5">
                            <p>• Reliable Supply Across Production Cycles</p>
                            <p>• Reduced Variation Between Batches</p>
                            <p>• Predictable Product Performance</p>
                            <p>• Lower Operational and Quality Risk</p>
                            <p>• Smoother Scale-Up Without Disruption</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
