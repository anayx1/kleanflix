'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProblemSolveSection() {
    return (
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
            <div className="main-container px-6 md:px-12">

                {/* Top Row: Left Column (Title), Right Column (Subheading, Badges, Text) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start mb-16 md:mb-20">

                    {/* Left Column: Heading */}
                    <div className="md:col-span-6 flex flex-col items-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-sans font-bold text-primary leading-[1.12] tracking-tight"
                        >
                            The problem<br />kleanfix solves
                        </motion.h2>
                    </div>

                    {/* Right Column: Subheading + Pill Badges + Description */}
                    <div className="md:col-span-6 flex flex-col items-start space-y-6">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-sans font-semibold text-xl md:text-2xl lg:text-[26px] text-primary-dark leading-tight"
                        >
                            Most businesses operate in fragments.
                        </motion.h3>

                        {/* Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap gap-3 items-center"
                        >
                            <span className="bg-primary/20 text-primary-dark font-medium text-xs md:text-sm px-4 py-2 rounded-full tracking-wide select-none">
                                One vendor for chemicals
                            </span>
                            <span className="bg-primary/20 text-primary-dark font-medium text-xs md:text-sm px-4 py-2 rounded-full tracking-wide select-none">
                                Another for manufacturing
                            </span>
                        </motion.div>

                        {/* Spacing & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="font-sans font-medium text-lg md:text-xl lg:text-[22px] text-primary-dark/80 leading-relaxed space-y-1"
                        >
                            <p className="m-0">Each delivers their part.</p>
                            <p className="m-0">No one controls the final outcome.</p>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Row: 3 Image Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-5">
                    {/* Card 1: One system */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full h-[280px] md:h-[360px] lg:h-[400px] rounded-lg overflow-hidden shadow-sm"
                    >
                        <Image
                            src="/homepage/onesystem.jpg"
                            alt="One system"
                            fill
                            sizes="(max-width: 1001px) 100vw, 33vw"
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Badge */}
                        <div className="absolute bottom-5 left-5 bg-white rounded-lg px-5 py-3 shadow-md z-10 w-[90%]">
                            <span className="font-sans text-base md:text-lg text-primary select-none">
                                One system.
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 2: One logic */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full h-[280px] md:h-[360px] lg:h-[400px] rounded-lg overflow-hidden shadow-sm"
                    >
                        <Image
                            src="/homepage/onelogic.png"
                            alt="One logic"
                            fill
                            sizes="(max-width: 1001px) 100vw, 33vw"
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Badge */}
                        <div className="absolute bottom-5 left-5 bg-white rounded-lg px-5 py-3 shadow-md z-10 w-[90%]">
                            <span className="font-sans text-base md:text-lg text-primary select-none">
                                One logic.
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 3: One output */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full h-[280px] md:h-[360px] lg:h-[400px] rounded-lg overflow-hidden shadow-sm"
                    >
                        <Image
                            src="/homepage/oneoutput.webp"
                            alt="One output"
                            fill
                            sizes="(max-width: 1001px) 100vw, 33vw"
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Badge */}
                        <div className="absolute bottom-5 left-5 bg-white rounded-lg px-5 py-3 shadow-md z-10 w-[90%]">
                            <span className="font-sans  text-base md:text-lg text-primary select-none">
                                One output.
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex justify-center"
                >
                    <p className="font-sans text-primary-dark leading-relaxed text-center">
                        kleanfix replaces this fragmentation with one structured, controlled system.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
