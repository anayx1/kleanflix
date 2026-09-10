'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IndustryOperationsSection({
    imageSrc,
    imageAlt,
    heading,
    children,
    className = '',
}) {
    return (
        <section className={`py-12 md:py-16 lg:py-20 bg-white ${className}`}>
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
                    {/* Left Column: Image stretching to match content height */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full flex flex-col"
                    >
                        <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] md:min-h-0 rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                sizes="(max-width: 1001px) 100vw, 50vw"
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col justify-between space-y-4 md:space-y-5 text-primary-dark"
                    >
                        {/* Heading */}
                        {typeof heading === 'string' ? (
                            <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15]">
                                {heading}
                            </h2>
                        ) : (
                            heading
                        )}

                        {/* Content Body */}
                        {children}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
