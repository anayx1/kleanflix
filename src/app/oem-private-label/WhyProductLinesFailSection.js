'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyProductLinesFailSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full flex flex-col"
                    >
                        <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] md:min-h-[440px] rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm">
                            <Image
                                src="/oem/why-product-line-fail.webp"
                                alt="Why product lines fail - robotic assembly packaging"
                                fill
                                priority
                                sizes="(max-width: 1001px) 100vw, 50vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col justify-between py-1 md:py-2 text-primary-dark"
                    >
                        {/* Top Group: Heading + Context + Bullets */}
                        <div className="space-y-5 md:space-y-6">
                            <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                                Why product lines fail
                            </h2>

                            <div className="space-y-2">
                                <div className="space-y-0.5">
                                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                        Product demand alone does not create a successful product line.
                                    </p>
                                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                        Without structured execution:
                                    </p>
                                </div>

                                <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Formulation Varies Across Batches</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Quality Becomes Inconsistent</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Scaling Introduces New Variables</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Vendor Dependency Increases</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Group: Concluding Statement */}
                        <div className="pt-6 md:pt-8">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                Even strong products fail when execution is not <br className="hidden md:block" />
                                controlled at scale.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
