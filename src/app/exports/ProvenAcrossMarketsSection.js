'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function ProvenAcrossMarketsSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 items-stretch">
                    {/* Left Column: Delivery Van Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-4 relative min-h-[320px] md:min-h-full rounded-xl overflow-hidden shadow-xs bg-slate-100"
                    >
                        <Image
                            src="/exports/proven-across-markets.avif"
                            alt="Delivery van loaded with cargo packages - Proven across markets"
                            fill
                            sizes="(max-width: 1001px) 100vw, 35vw"
                            className="object-cover object-center"
                        />
                    </motion.div>

                    {/* Right Column: Track Record Snapshot Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-8 bg-[#F7F7F7] rounded-xl p-8 md:p-12 lg:p-14 flex flex-col justify-between text-primary-dark"
                    >
                        <div>
                            <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-6 md:mb-8">
                                Proven across markets
                            </h2>

                            <div className="space-y-2">
                                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                    Export Track Record Snapshot:
                                </p>

                                <div className="space-y-1.5 pt-1">
                                    <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">• Active supply across 5+ countries</p>
                                    <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">• Repeat orders across multiple markets</p>
                                    <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">• Consistent batch performance across varying climates</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8 md:pt-12">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/contact-us"
                                className="font-bold text-xs md:text-sm px-7 md:px-8 py-3 md:py-3.5 uppercase tracking-wide"
                            >
                                VIEW EXPORTS
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
