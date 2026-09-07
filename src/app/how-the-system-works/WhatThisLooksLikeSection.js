'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SYSTEMS_EXECUTION_LIST = [
    {
        title: "Cleaning",
        result: "consistent performance across operations",
    },
    {
        title: "OEM + Manufacturing",
        result: "stable product performance across batches and scale",
    },
    {
        title: "Export Supply",
        result: "consistent product quality across markets",
    },
];

export default function WhatThisLooksLikeSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-10">
                {/* Header Grid: Title on Left, 3 Divider Lines on Right (Bottom Aligned) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-end mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-5 lg:col-span-5 pb-1 md:pb-1.5"
                    >
                        <h2 className="font-semibold text-3xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-none">
                            What this looks like
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-7 lg:col-span-7 space-y-3.5 md:space-y-4"
                    >
                        {SYSTEMS_EXECUTION_LIST.map((item, index) => (
                            <div key={index} className="pb-3 md:pb-3.5 border-b border-slate-200">
                                <p className="text-primary-dark font-medium text-sm md:text-base lg:text-lg leading-snug">
                                    <span className="font-semibold">{item.title}</span>
                                    <span className="mx-2 text-primary/70">→</span>
                                    <span>{item.result}</span>
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Single Full-width Image */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="relative w-full rounded-2xl md:rounded-[28px] overflow-hidden"
                >
                    <Image
                        src="/how-the-system-works/sec7.avif"
                        alt="What this looks like - Cleaning, OEM Manufacturing, and Export Supply"
                        width={1920}
                        height={1080}
                        sizes="(max-width: 1800px) 100vw, 1800px"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
