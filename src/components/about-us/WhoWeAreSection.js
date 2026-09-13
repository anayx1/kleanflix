'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
    return (
        <section className="relative w-full py-15 bg-white overflow-hidden">
            <div className="main-container px-6 md:px-12">
                {/* Header: Title + Subtitle */}
                <div className="mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight mb-3 md:mb-4"
                    >
                        Who we are
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-primary font-medium text-lg md:text-xl lg:text-[22px]"
                    >
                        We design and deliver systems — not isolated products.
                    </motion.p>
                </div>

                {/* 3 Columns / Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {/* Card 1: Image with simple smooth reveal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full h-[460px] md:h-[520px] lg:h-[560px] rounded-[28px] md:rounded-[36px] overflow-hidden"
                    >
                        <Image
                            src="/about-us/who-we-are.avif"
                            alt="Kleanfix manufacturing line and automated bottling system"
                            fill
                            sizes="(max-width: 1001px) 100vw, 33vw"
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>

                    {/* Card 2: Light Blue Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full h-[460px] md:h-[520px] lg:h-[560px] rounded-[28px] md:rounded-[36px] bg-[#D7E4ED] p-8 md:p-10 flex flex-col justify-between"
                    >
                        <div>
                            <p className="font-sans font-medium text-xl md:text-2xl lg:text-[26px] text-primary leading-snug">
                                Kleanfix is a manufacturing-<br />
                                led B2B company that<br />
                                combines:
                            </p>
                        </div>

                        <div className="space-y-1.5 pl-0.5">
                            <p className="text-[17px] md:text-[18px] text-primary">• Application-Based Cleaning Systems</p>
                            <p className="text-[17px] md:text-[18px] text-primary">• Controlled Production and Execution</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Light Blue Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full h-[460px] md:h-[520px] lg:h-[560px] rounded-[28px] md:rounded-[36px] bg-[#D7E4ED] p-8 md:p-10 flex flex-col justify-between"
                    >
                        <div>
                            <p className="font-sans font-medium text-xl md:text-2xl lg:text-[26px] text-primary leading-snug">
                                This includes:
                            </p>
                        </div>

                        <div className="space-y-1.5 pl-0.5">
                            <p className="text-[17px] md:text-[18px] text-primary">• Real-World Aligned Cleaning Solutions</p>
                            <p className="text-[17px] md:text-[18px] text-primary">• Product Development and Execution Support</p>
                            <p className="text-[17px] md:text-[18px] text-primary">• OEM And Private Label Execution</p>
                            <p className="text-[17px] md:text-[18px] text-primary">• Export-Ready Manufacturing Systems</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
