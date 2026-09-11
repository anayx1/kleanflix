'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BuiltForControlledExecutionSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Main Card with Top Image Banner and Content */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-[#F7F7F7] rounded-2xl md:rounded-[28px] overflow-hidden shadow-xs max-w-[95%] mx-auto"
                >
                    {/* Top Image Banner */}
                    <div className="relative w-full h-[180px] md:h-[240px] lg:h-[280px]">
                        <Image
                            src="/manufacturing/build-for-banner.avif"
                            alt="Industrial manufacturing control setup - Built for controlled execution"
                            fill
                            priority
                            sizes="(max-width: 1001px) 100vw, 1400px"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Bottom Card Content */}
                    <div className="p-8 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start ">
                            {/* Left Column: Heading and Description */}
                            <div className="md:col-span-1 space-y-4 md:space-y-6">
                                <h2 className="text-primary font-semibold text-3xl md:text-4xl lg:text-[42px] tracking-tight leading-[1.15]">
                                    Built for controlled <br />
                                    execution
                                </h2>
                                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                                    Manufacturing at Kleanfix <br className="hidden md:block" />
                                    is structured as a system <br className="hidden md:block" />
                                    — not isolated production.
                                </p>
                            </div>

                            {/* Right Column: Focus Areas & Supported By */}
                            <div className="md:col-span-1 space-y-6 md:space-y-8 text-primary-dark">
                                {/* The focus is on */}
                                <div className="space-y-1.5">
                                    <p className="text-primary-dark font-medium text-base md:text-lg lg:text-[20px] leading-snug">
                                        The focus is on:
                                    </p>
                                    <div className=" space-y-1">
                                        <p className='text-primary-dark font-normal text-sm md:text-base lg:text-[20px] leading-snug'>• Process Consistency</p>
                                        <p className='text-primary-dark font-normal text-sm md:text-base lg:text-[20px] leading-snug'>• Batch-Level Control</p>
                                        <p className='text-primary-dark font-normal text-sm md:text-base lg:text-[20px] leading-snug'>• Repeatable Output</p>
                                    </div>
                                </div>

                                {/* Supported by */}
                                <div className="space-y-1.5">
                                    <p className="text-primary-dark font-medium text-base md:text-lg lg:text-[20px] leading-snug">
                                        Supported by:
                                    </p>
                                    <div className="space-y-1">
                                        <p className='text-sm md:text-base lg:text-[20px] text-primary-dark font-normal  leading-snug'>• In-House Chemist and R&D Lab</p>
                                        <p className='text-sm md:text-base lg:text-[20px] text-primary-dark font-normal  leading-snug'>• SDS / TDS Documentation Capability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Statement below the Card */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 text-center px-4"
                >
                    <p className="text-primary-dark font-normal leading-relaxed max-w-7xl mx-auto">
                        This ensures production remains aligned with formulation and system requirements.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
