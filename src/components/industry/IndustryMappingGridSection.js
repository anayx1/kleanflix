'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IndustryMappingGridSection({
    title,
    subtitle,
    cards = [],
    className = '',
}) {
    return (
        <section className={`py-14 md:py-20 lg:py-24 bg-white ${className}`}>
            <div className="main-container px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-7xl mx-auto mb-10 md:mb-14 lg:mb-16"
                >
                    <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[50px] tracking-tight leading-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-primary font-medium text-base md:text-lg lg:text-[20px] leading-relaxed mt-3 md:mt-4">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {/* 3-Column Staggered Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pb-0 md:pb-12">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={card.id || idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`bg-[#F7F7F7] rounded-[20px] md:rounded-[24px] p-6 md:p-7 lg:p-8 flex flex-col justify-between h-[270px] md:h-[290px] lg:h-[310px] shadow-xs transition-transform duration-300 hover:shadow-sm ${
                                card.isMiddle ? 'md:translate-y-7 lg:translate-y-8' : ''
                            }`}
                        >
                            {card.isStatement ? (
                                /* Concluding Text Card */
                                <div className="flex flex-col justify-center h-full px-2 md:px-3">
                                    <p className="text-primary-dark font-normal text-base md:text-lg lg:text-[20px] leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            ) : (
                                /* Area Cards */
                                <>
                                    {/* Top Content: Title and Description */}
                                    <div>
                                        <h3 className="text-primary font-semibold text-lg md:text-xl lg:text-[22px] leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-primary-dark font-normal text-xs md:text-sm lg:text-[15px] leading-relaxed mt-1 md:mt-1.5">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Bottom Content: 3D Illustration */}
                                    {card.imageSrc && (
                                        <div className="relative w-full h-[110px] md:h-[125px] lg:h-[135px] mt-auto">
                                            <Image
                                                src={card.imageSrc}
                                                alt={card.imageAlt || card.title}
                                                fill
                                                sizes="(max-width: 1001px) 100vw, 33vw"
                                                className="object-contain object-bottom"
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
