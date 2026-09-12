'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ConsistentPerformanceSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
                    {/* Left Column: Chemistry Stability Testing Photo (fixed rounded-xl) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative min-h-[320px] md:min-h-[420px] lg:min-h-[460px] rounded-xl overflow-hidden shadow-xs bg-slate-100"
                    >
                        <Image
                            src="/exports/consistent-performance-across.webp"
                            alt="Laboratory technician conducting formulation stability testing - Consistent performance across markets"
                            fill
                            sizes="(max-width: 1001px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </motion.div>

                    {/* Right Column: Consistent Performance Card (fixed rounded-xl) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#E9ECEF] rounded-xl p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-8"
                    >
                        <div>
                            <p className="font-sans font-semibold text-lg md:text-xl lg:text-[22px] text-primary-dark leading-snug">
                                Consistent performance across these <br className="hidden lg:inline" />
                                markets reflects:
                            </p>

                            <div className="space-y-1 md:space-y-1.5 pt-3 md:pt-4">
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                    • Tested Formulation Stability
                                </p>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                    • Controlled Manufacturing Systems
                                </p>
                                <p className="font-sans font-normal text-xs md:text-sm lg:text-[15px] text-primary-dark leading-snug">
                                    • Adaptability Across Conditions
                                </p>
                            </div>
                        </div>

                        <div className="pt-2 md:pt-4">
                            <p className="font-sans font-semibold text-lg md:text-xl lg:text-[22px] text-primary-dark leading-snug">
                                This is not theoretical capability — it is <br className="hidden lg:inline" />
                                active execution.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
