'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WHAT_YOU_GET_LIST = [
    'Consistent Formulation',
    'Predictable Performance',
    'Reduced Coordination',
    'Faster Scaling',
    'Control Over Output',
];

const WHEN_CRITICAL_LIST = [
    'Scale Operations',
    'Manage Multiple Locations',
    'Build A Product Line',
    'Enter OEM Or Private Label',
    'Export Products',
    'Face Inconsistency Issues',
];

export default function WhatThisMeansForYouSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-10 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 items-stretch">
                    {/* Left Card: What this means for you (Image Background) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full rounded-2xl md:rounded-[28px] lg:rounded-[32px] overflow-hidden min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex flex-col justify-end p-7 md:p-10 lg:p-12 xl:p-14 shadow-sm"
                    >
                        {/* Background Image */}
                        <Image
                            src="/how-the-system-works/what-this-means-by-you.png"
                            alt="What this means for you"
                            fill
                            sizes="(max-width: 1001px) 100vw, 50vw"
                            className="object-cover object-center"
                            priority
                        />

                        {/* Subtle contrast gradient on left side for text clarity */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent pointer-events-none" />

                        {/* Main Content Block */}
                        <div className="relative z-10 max-w-[340px] md:max-w-[400px] lg:max-w-[440px]">
                            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] tracking-tight leading-[1.1] mb-4 md:mb-5">
                                What this<br />means for you
                            </h2>

                            <p className="text-white font-medium text-sm md:text-base lg:text-[17px] leading-snug mb-5 md:mb-6">
                                Instead of managing multiple<br />vendors and variables, you get:
                            </p>

                            <ul className="space-y-2 md:space-y-2.5 mb-6 md:mb-8">
                                {WHAT_YOU_GET_LIST.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2.5 text-white font-medium text-base md:text-lg lg:text-[20px] leading-snug"
                                    >
                                        <span className="select-none text-white">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-white/95 font-medium text-xs md:text-sm lg:text-[15px] leading-relaxed">
                                This reduces operational risk and<br className="hidden sm:inline md:hidden lg:inline" /> improves predictability across scale.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Card: When this system becomes critical (Solid Blue Background) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-primary rounded-2xl md:rounded-[28px] lg:rounded-[32px] overflow-hidden min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex flex-col justify-center p-7 md:p-10 lg:p-12 xl:p-14 shadow-sm"
                    >
                        <div className="max-w-[340px] md:max-w-[400px] lg:max-w-[440px]">
                            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] tracking-tight leading-[1.1] mb-4 md:mb-5">
                                When this system<br />becomes critical
                            </h2>

                            <p className="text-white font-medium text-sm md:text-base lg:text-[17px] leading-snug mb-5 md:mb-6">
                                This system becomes critical when you:
                            </p>

                            <ul className="space-y-2 md:space-y-2.5">
                                {WHEN_CRITICAL_LIST.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2.5 text-white font-medium text-base md:text-lg lg:text-[20px] leading-snug"
                                    >
                                        <span className="select-none text-white">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
