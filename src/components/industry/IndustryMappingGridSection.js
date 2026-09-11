'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function IndustryMappingGridSection({
    title,
    subtitle,
    cards = [],
    className = '',
    cta = null,
    children = null,
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
                            className={`bg-[#F7F7F7] rounded-[20px] md:rounded-[24px] p-6 md:p-7 lg:p-8 flex flex-col justify-between ${card.height || 'h-[280px] md:h-[300px] lg:h-[320px]'} shadow-xs transition-transform duration-300 hover:shadow-sm ${
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
                                        <div className={`relative w-full ${card.imageHeight || 'h-[110px] md:h-[125px] lg:h-[135px]'} mt-auto`}>
                                            <Image
                                                src={card.imageSrc}
                                                alt={card.imageAlt || (typeof card.title === 'string' ? card.title : 'Card image')}
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

                {/* Optional CTA Button */}
                {cta && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center mt-6 md:mt-10"
                    >
                        <Button
                            variant={cta.variant || "pill-secondary"}
                            showArrow={cta.showArrow ?? false}
                            href={cta.href || "/contact-us"}
                            className={cta.className || "font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"}
                        >
                            {cta.text || "SUBMIT REQUIREMENT"}
                        </Button>
                    </motion.div>
                )}

                {children}
            </div>
        </section>
    );
}
