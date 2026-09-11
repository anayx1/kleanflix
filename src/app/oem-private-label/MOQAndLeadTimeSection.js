'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MOQAndLeadTimeSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                    {/* Left Card: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 bg-[#F7F7F7] rounded-l-2xl p-8 md:p-12 lg:p-14 flex flex-col justify-center text-primary-dark"
                    >
                        {/* Heading */}
                        <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-6 md:mb-8">
                            MOQ and lead time
                        </h2>

                        <div className="space-y-6 md:space-y-8">
                            {/* MOQ (Indicative) */}
                            <div className="space-y-2">
                                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                    MOQ (Indicative):
                                </p>

                                <div className="text-base md:!text-[18px] font-normal leading-snug pt-1 space-y-1">
                                    <p className="text-primary-dark font-normal md:!text-[18px]">
                                        • Cleaning chemicals: ~3000 litres per SKU
                                    </p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">
                                        • Custom formulation: ~200 litres (based on <br className="hidden md:block" />
                                        requirement)
                                    </p>
                                </div>
                            </div>

                            {/* Typical Lead Time (Post Approval) */}
                            <div className="space-y-2">
                                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                    Typical Lead Time (Post Approval):
                                </p>

                                <div className="text-base md:!text-[18px] font-normal leading-snug pt-1 space-y-1">
                                    <p className="text-primary-dark font-normal md:!text-[18px]">
                                        • Existing SKUs: ~20 days
                                    </p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">
                                        • Custom formulation: ~15–20 days
                                    </p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">
                                        • Private label packaging: ~20 days
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Card: Image with Arch / Semicircle Radius on Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 relative w-full min-h-[340px] md:min-h-[460px] lg:min-h-[520px] overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-full shadow-sm"
                    >
                        <Image
                            src="/oem/clockinhand.webp"
                            alt="MOQ and lead time - Person holding alarm clock"
                            fill
                            priority
                            sizes="(max-width: 1001px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
