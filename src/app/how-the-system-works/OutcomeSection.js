'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function OutcomeSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 ">
                {/* Header & Right CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-12"
                >
                    <div>
                        <h2 className="font-semibold text-3xl md:text-5xl text-primary tracking-tight mb-2 md:mb-3">
                            Outcome:
                        </h2>
                        <p className="font-medium text-base md:text-xl lg:text-2xl text-primary-dark">
                            One system. One logic. One consistent output.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <Button
                            variant="pill-secondary"
                            showArrow={false}
                            href="/products"
                            className="font-bold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 shadow-md whitespace-nowrap"
                        >
                            VIEW PRODUCT SYSTEMS
                        </Button>
                    </div>
                </motion.div>

                {/* Full-width Diagram Image */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="relative w-full overflow-hidden"
                >
                    <Image
                        src="/how-the-system-works/how-system-works.avif"
                        alt="How the system works outcome diagram"
                        width={4050}
                        height={2400}
                        sizes="(max-width: 1800px) 100vw, 1800px"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
