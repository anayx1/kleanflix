'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HowKleanfixStructuresProductDevelopmentSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Top Wide Banner Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-[2.4/1] md:aspect-[3.5/1] rounded-2xl md:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-sm mb-12 md:mb-16 lg:mb-20"
                >
                    <Image
                        src="/product-line/all-product-banner.webp"
                        alt="How kleanfix structures product development"
                        fill
                        priority
                        sizes="(max-width: 1001px) 100vw, 1800px"
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* Two-Column Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                    {/* Left Column: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6"
                    >
                        <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                            How kleanfix structures <br className="hidden md:block" />
                            product development
                        </h2>
                    </motion.div>

                    {/* Right Column: Structured Points & Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-6 text-primary-dark"
                    >
                        {/* Lead-in and Bullets */}
                        <div className="space-y-2">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                Kleanfix connects all layers of product building into one system:
                            </p>

                            <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Idea And Positioning</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Formulation Development</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Production Alignment</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Packaging Readiness</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Supply Consistency</p>
                            </div>
                        </div>

                        {/* Concluding Statement */}
                        <div className="pt-2 md:pt-4">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                This converts a fragmented journey into a controlled <br className="hidden md:block" />
                                product system.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
