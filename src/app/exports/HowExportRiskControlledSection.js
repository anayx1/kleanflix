'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HowExportRiskControlledSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-[#F7F7F7]">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
                    {/* Left Column: Heading + Port Container Crane Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-5 flex flex-col items-start md:items-end space-y-6 md:space-y-8 export-risk-left-col"
                    >
                        {/* Heading */}
                        <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.08] text-left md:text-right export-risk-heading">
                            How export risk <br className="export-risk-br" />
                            is controlled
                        </h2>

                        {/* Image */}
                        <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[10/11] rounded-2xl md:rounded-[26px] overflow-hidden shadow-xs bg-slate-200 export-risk-img-box">
                            <Image
                                src="/exports/how-export-risk.jpg"
                                alt="Cargo container crane operations at shipping port - How export risk is controlled"
                                fill
                                sizes="(max-width: 1001px) 100vw, 320px"
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Risk Control Systems & Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-7 md:pt-36 lg:pt-40 flex flex-col space-y-6 md:space-y-7 text-primary-dark export-risk-right-col"
                    >
                        {/* Statement 1 */}
                        <p className="font-sans font-normal text-base md:text-lg lg:text-[20px] text-primary-dark leading-snug">
                            Export consistency is engineered — not assumed.
                        </p>

                        {/* Block 2: Kleanfix controls risk through */}
                        <div className="space-y-1.5">
                            <p className="font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary-dark leading-snug">
                                Kleanfix controls risk through:
                            </p>
                            <div className=" space-y-1 pt-0.5">
                                <p>• Structured Formulation Systems</p>
                                <p>• Standardized Manufacturing Processes</p>
                                <p>• Aligned Packaging Formats</p>
                                <p>• Documentation Readiness for Destination Markets</p>
                            </div>
                        </div>

                        {/* Statement 3 */}
                        <p className="font-sans font-normal text-base md:text-lg lg:text-[20px] text-primary-dark leading-snug max-w-lg export-risk-statement-3">
                            Instead of managing multiple dependencies, <br className="hidden md:inline export-risk-text-br" />
                            everything operates within one system.
                        </p>

                        {/* Block 4: This results in */}
                        <div className="space-y-1.5">
                            <p className="font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary-dark leading-snug">
                                This results in:
                            </p>
                            <div className="text-primary-dark font-normal text-sm md:text-base lg:text-[17px] leading-snug space-y-1 pt-0.5">
                                <p>• Reduced Complaints</p>
                                <p>• Lower Rejection Risk</p>
                                <p>• Higher Repeat Order Confidence</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
