'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import BlurText from '@/components/BlurText';

export default function SystemLevelSection() {
    return (
        <section className="relative w-full py-10 bg-white overflow-hidden">
            <div className="main-container px-6 md:px-12">

                {/* Heading */}
                <BlurText
                    as="h2"
                    text="Kleanflix solves this at the system level — by bringing formulation, manufacturing, and application under one controlled structure."
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight mb-12 md:mb-16 max-w-6xl"
                />

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* Left Column: Cards Grid */}
                    <div className="md:col-span-7 flex flex-col justify-between gap-6 md:gap-8">

                        {/* Top Sub-Row: We Build vs Result */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

                            {/* Card 1: We Build */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="bg-[#F4F7FA] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[220px]"
                            >
                                <h3 className="font-sans font-semibold text-lg md:text-xl text-primary-dark leading-snug">
                                    We build structured systems across:
                                </h3>
                                <p className="font-sans !text-sm font-semibold text-primary leading-relaxed mt-6">
                                    Cleaning Chemistry • Manufacturing<br />
                                    • Oem & Export Execution
                                </p>
                            </motion.div>

                            {/* Card 2: Result */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="bg-[#F4F7FA] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[220px]"
                            >
                                <h3 className="font-sans font-semibold text-lg md:text-xl text-primary-dark leading-snug">
                                    Result:
                                </h3>
                                <p className="font-sans !text-sm font-semibold text-primary leading-relaxed mt-6">
                                    Same formulation • Same performance<br />
                                    • Same output
                                </p>
                            </motion.div>

                        </div>

                        {/* Bottom Sub-Row: Airplane Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative w-full min-h-[280px] md:h-[320px] rounded-3xl overflow-hidden p-8 flex flex-col justify-between"
                        >
                            {/* Background Image */}
                            <Image
                                src="/homepage/sec5rightcover.jpg"
                                alt="Paper airplanes background"
                                fill
                                sizes="(max-width: 1001px) 100vw, 55vw"
                                className="object-cover object-center"
                                priority
                            />
                            {/* Subtle dark tint overlay */}
                            <div className="absolute inset-0 bg-slate-900/[0.03]" />

                            {/* Content overlay */}
                            <div className="relative z-10 flex flex-col justify-between h-full items-start gap-8">
                                <p className="font-sans font-semibold text-lg md:text-xl lg:text-2xl text-primary-dark max-w-xl leading-snug">
                                    Built for multi-location operations, OEM production, and export environments where consistency is non-negotiable.
                                </p>
                                <Button variant="pill-secondary" showArrow={false} href="/system-works" className='font-medium leading-tight'>
                                    View how the system works
                                </Button>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Before After Slider */}
                    <div className="md:col-span-5 relative min-h-[450px] md:min-h-0 w-full h-full flex flex-col justify-stretch">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.75, delay: 0.1 }}
                            className="w-full h-full relative"
                        >
                            <BeforeAfterSlider
                                beforeImage="/homepage/sec5before.webp"
                                afterImage="/homepage/sec5after.webp"
                                beforeLabel="BEFORE"
                                afterLabel="AFTER"
                                className="w-full h-full shadow-sm"
                            />
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
