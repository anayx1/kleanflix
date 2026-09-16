'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function WhereThisAppliesSection() {
    const cards = [
        {
            title: "Bulk Supply",
            description: "Consistent production for\ninstitutional and commercial use",
            bgColor: "bg-[#F7F7F7]",
        },
        {
            title: "OEM & Private Label",
            description: "Scalable product development\nwith controlled output",
            bgColor: "bg-[#D1E1E8]",
        },
        {
            title: "Export Supply",
            description: "Manufacturing aligned for\ninternational consistency and\nrepeatability",
            bgColor: "bg-[#F7F7F7]",
        },
    ];

    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 where-this-applies-wrapper">
                    {/* Header: Title and Subtitle */}
                    <div className="text-center space-y-2 md:space-y-3">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-tight"
                        >
                            Where this applies
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug"
                        >
                            Manufacturing support is structured for:
                        </motion.p>
                    </div>

                    {/* 3 Application Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch max-w-5xl mx-auto where-this-applies-cards">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`${card.bgColor} rounded-xl p-6 flex flex-col justify-between min-h-[170px] md:min-h-[190px] lg:min-h-[210px] shadow-xs`}
                            >
                                <h3 className="text-primary font-semibold text-xl md:text-2xl lg:text-[24px] tracking-tight leading-snug">
                                    {card.title}
                                </h3>

                                <p className="text-primary-dark font-normal text-sm md:text-base lg:text-[15px] leading-relaxed whitespace-pre-line mt-auto pt-6 md:pt-8">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Blue Callout Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full bg-primary-dark rounded-xl py-10 md:py-14 lg:py-16 px-6 md:px-12 text-center text-white shadow-sm flex flex-col items-center justify-center"
                    >
                        <h3 className="font-semibold text-2xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.2] max-w-4xl mx-auto">
                            The system adapts based on application, <br className="hidden md:block" />
                            scale, and operational requirements.
                        </h3>

                        <div className="mt-6 md:mt-8">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/industries"
                                className="font-bold text-xs md:text-sm px-7 md:px-8 py-3 md:py-3.5 uppercase tracking-wide"
                            >
                                VIEW INDUSTRIES
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
