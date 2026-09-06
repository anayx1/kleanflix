'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GermWhereItAppliesSection() {
    return (
        <section className="py-16 md:py-24 lg:py-28 bg-[#F4F7FA]">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-stretch">
                    {/* Left Column: Heading & 2 White Cards */}
                    <div className="md:col-span-6 flex flex-col justify-between">
                        {/* Section Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-sans font-semibold text-3xl md:text-5xl lg:text-[54px] text-primary leading-tight tracking-tight mb-8 md:mb-10"
                        >
                            Where it applies
                        </motion.h2>

                        {/* Cards Stack */}
                        <div className="space-y-6 md:space-y-8 flex-1 flex flex-col justify-center">
                            {/* Card 1: Used across */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                className="bg-white rounded-xl p-6 md:p-8 flex items-center gap-6 md:gap-8 shadow-sm"
                            >
                                {/* Left: Building Icon */}
                                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 relative flex items-center justify-center">
                                    <Image
                                        src="/facility-care/used-across.avif"
                                        alt="Used across healthcare and commercial environments icon"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div>
                                    <h3 className="font-semibold text-lg md:text-xl lg:text-[22px] text-primary-dark mb-2 leading-snug">
                                        Used across:
                                    </h3>
                                    <ul className="space-y-1 font-sans font-medium text-sm md:text-base lg:text-[16px] text-primary-dark">
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Hospitals and clinics</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Public spaces</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Commercial environments</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Food-adjacent environments</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>High-touch operational zones</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Card 2: Supports */}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                className="bg-white rounded-xl p-6 md:p-8 flex items-center gap-6 md:gap-8 shadow-sm"
                            >
                                {/* Left: Cleaning Tools Icon */}
                                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 relative flex items-center justify-center">
                                    <Image
                                        src="/facility-care/support.avif"
                                        alt="Supports sanitization protocols icon"
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div>
                                    <h3 className="font-semibold text-lg md:text-xl lg:text-[22px] text-primary-dark mb-2 leading-snug">
                                        Supports:
                                    </h3>
                                    <ul className="space-y-1 font-sans font-medium text-sm md:text-base lg:text-[16px] text-primary-dark">
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Post-cleaning sanitization</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Routine hygiene cycles</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>High-risk environments</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        className="md:col-span-6 flex items-stretch"
                    >
                        <div className="relative w-full h-[360px] md:h-full min-h-[460px] md:min-h-[520px] lg:min-h-[580px] rounded-xl overflow-hidden shadow-sm">
                            <Image
                                src="/germ-control/whereitapplies.webp"
                                alt="Where germ control applies across healthcare, clinics, and commercial spaces"
                                fill
                                priority
                                sizes="(max-width: 1000px) 100vw, 50vw"
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
