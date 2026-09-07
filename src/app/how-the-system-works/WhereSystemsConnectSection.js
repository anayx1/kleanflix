'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CONNECT_CARDS = [
    {
        id: 'cleaning',
        title: 'Cleaning',
        image: '/how-the-system-works/cleaning.png',
        alt: 'Cleaning operations',
    },
    {
        id: 'oem-manufacturing-export',
        title: 'OEM + Manufacturing + Export',
        image: '/how-the-system-works/oem.webp',
        alt: 'OEM, Manufacturing, and Export operations',
    },
    {
        id: 'product-development',
        title: 'Product Development',
        image: '/how-the-system-works/product-development.webp',
        alt: 'Product Development operations',
    },
];

export default function WhereSystemsConnectSection() {
    return (
        <section className="py-5 bg-white">
            <div className="main-container px-6 md:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
                >
                    <h2 className="font-semibold text-3xl md:text-5xl text-primary tracking-tight mb-3">
                        Where systems connect
                    </h2>
                    <p className="font-medium text-base md:text-xl lg:text-2xl text-primary-dark mb-1">
                        In real-world operations, needs are not isolated.
                    </p>
                    <p className="font-medium text-base md:text-xl lg:text-2xl text-primary-dark">
                        A business may require:
                    </p>
                </motion.div>

                {/* 3 Static Cards (Mapped from array with sequential entry animation) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
                    {CONNECT_CARDS.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative w-full h-[360px] md:h-[440px] lg:h-[480px] rounded-2xl md:rounded-[24px] overflow-hidden shadow-sm bg-slate-900 select-none"
                        >
                            {/* Background Image */}
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                sizes="(max-width: 1001px) 100vw, 33vw"
                                className="object-cover object-center"
                                priority={index === 0}
                            />

                            {/* Dark Gradient Overlay for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 pointer-events-none" />

                            {/* Bottom-left Title */}
                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 pr-6">
                                <h3 className="text-white font-medium text-lg md:text-xl lg:text-2xl leading-snug drop-shadow-md">
                                    {card.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Connection Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mt-10 md:mt-14 max-w-7xl mx-auto"
                >
                    <p className="font-medium text-base md:text-xl lg:text-2xl text-primary leading-relaxed">
                        Kleanfix connects these into one structured system instead of multiple dependencies.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
