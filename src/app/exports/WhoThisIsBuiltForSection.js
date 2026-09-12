'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoThisIsBuiltForSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Main Card with Top Image Banner and Content */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-[#F7F7F7] rounded-xl overflow-hidden shadow-xs"
                >
                    {/* Top Image Banner */}
                    <div className="relative w-full h-[200px] md:h-[280px] lg:h-[340px]">
                        <Image
                            src="/exports/who-this-is-build-for.avif"
                            alt="Warehouse logistics personnel partnering in supply facility - Who this is built for"
                            fill
                            sizes="(max-width: 1001px) 100vw, 1400px"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Bottom Card Content */}
                    <div className="p-6 md:p-10 lg:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                            {/* Left Column: Heading */}
                            <div className="md:col-span-8">
                                <h2 className="text-primary font-bold text-2xl md:text-4xl lg:text-[42px] tracking-tight leading-[1.15]">
                                    Who this is built for
                                </h2>
                            </div>

                            {/* Right Column: Audience Bullets */}
                            <div className="md:col-span-4 space-y-1.5 md:space-y-2">
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                    • Distributors seeking reliable resale supply
                                </p>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                    • Importers needing predictable product performance
                                </p>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                    • OEM brands scaling private label exports
                                </p>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                    • International product lines expanding into new markets
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
