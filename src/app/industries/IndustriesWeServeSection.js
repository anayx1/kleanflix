'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const INDUSTRIES_LIST = [
    { number: "01", name: "Hospitality" },
    { number: "02", name: "Healthcare" },
    { number: "03", name: "Facility Management" },
    { number: "04", name: "Industrial Operations" },
];

export default function IndustriesWeServeSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-[#F7F7F7]">
            <div className="main-container px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10 md:gap-14 lg:gap-20">
                    {/* Left Column: Heading, descriptions, and indented numbered list */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 flex flex-col justify-between py-1 space-y-10 md:space-y-12 lg:space-y-16"
                    >
                        {/* Top Content Block */}
                        <div className="space-y-4 md:space-y-5 max-w-2xl">
                            <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[52px] tracking-tight leading-tight">
                                Industries we serve
                            </h2>

                            <p className="text-primary-dark font-normal text-base md:text-lg lg:text-[20px] leading-relaxed">
                                Each industry is mapped based on real operational conditions, usage patterns, and performance requirements — not generic product categories.
                            </p>

                            <p className="text-primary/80 font-normal text-xs md:text-sm lg:text-[15px] leading-relaxed">
                                Used across environments where consistency and operational control directly impact outcomes at scale.
                            </p>
                        </div>

                        {/* Bottom Content Block: Indented Numbered Industry List */}
                        <div className="pl-6 md:pl-16 lg:pl-28 space-y-4 md:space-y-5">
                            {INDUSTRIES_LIST.map((item) => (
                                <div
                                    key={item.number}
                                    className="flex items-center gap-6 md:gap-10 group select-none"
                                >
                                    {/* Number */}
                                    <span className="font-normal text-base md:text-lg lg:text-[20px] text-[#8EA7BE] w-7 md:w-9 shrink-0">
                                        {item.number}
                                    </span>

                                    {/* Industry Name with arrow */}
                                    <div className="flex items-center gap-2 text-primary font-semibold text-base md:text-lg lg:text-[21px] transition-colors group-hover:text-primary-dark">
                                        <span>{item.name}</span>
                                        <span className="text-primary text-base md:text-lg lg:text-[21px] transition-transform duration-200 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: 4-image visual strip */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-[180px] md:w-[200px] lg:w-[220px] shrink-0 self-center md:self-stretch flex items-center justify-center md:justify-end"
                    >
                        <div className="relative w-full aspect-[196/507] rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src="/industries/industries-we-serve.avif"
                                alt="Industries we serve: Hospitality, Healthcare, Facility Management, Industrial Operations"
                                fill
                                sizes="(max-width: 1001px) 200px, 220px"
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
