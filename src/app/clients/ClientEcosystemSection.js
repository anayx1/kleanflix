'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ECOSYSTEM_ITEMS = [
    {
        title: "Institutional Buyers",
        description: "Managing consistency across locations and teams.",
    },
    {
        title: "OEM & Private Label Brands",
        description: "Building scalable product lines with controlled output.",
    },
    {
        title: "Export Buyers & Distributors",
        description: "Requiring predictable performance across markets.",
    },
    {
        title: "Product Developers",
        description: "Working on cleaning and hygiene product systems.",
    },
];

export default function ClientEcosystemSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-2">
                <div className="max-w-[95%] mx-auto">
                    {/* Top Content: Split Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                        {/* Left Column: Heading and Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-5 space-y-4 md:space-y-6"
                        >
                            <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-tight">
                                Client ecosystem
                            </h2>
                            <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                Engagement is aligned to requirement, scale, and system fit — not product selection.
                            </p>
                        </motion.div>

                        {/* Right Column: 4-Row Structured Breakdown List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="md:col-span-7 divide-y divide-primary/20 border-t border-b border-primary/20"
                        >
                            {ECOSYSTEM_ITEMS.map((item) => (
                                <div
                                    key={item.title}
                                    className="py-3.5 md:py-4 transition-colors duration-200"
                                >
                                    <p className="text-primary text-sm md:text-base lg:text-[17px] font-normal leading-relaxed">
                                        <span className="font-normal">{item.title}</span>
                                        <span className="mx-2">→</span>
                                        <span className="font-normal">{item.description}</span>
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Bottom Content: sec3.avif Showcase Image Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full aspect-[1.7/1] md:aspect-[2.2/1] overflow-hidden rounded-xl mt-10 md:mt-14 shadow-sm"
                    >
                        <Image
                            src="/clients/sec3.avif"
                            alt="Client ecosystem operational environments"
                            fill
                            sizes="(max-width: 1001px) 100vw, 90vw"
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
