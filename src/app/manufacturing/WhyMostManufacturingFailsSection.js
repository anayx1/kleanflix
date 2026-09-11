'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyMostManufacturingFailsSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
                    {/* Left Card: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#F7F7F7] rounded-xl p-8 md:p-12 lg:p-14 flex flex-col justify-between text-primary-dark"
                    >
                        {/* Top Group: Heading & Bullets */}
                        <div>
                            <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-5 md:mb-6">
                                Why most <br />
                                manufacturing fails
                            </h2>


                            <div className="space-y-2">
                                <div className="space-y-0.5">
                                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                        Most manufacturing systems are built <br className="hidden md:block" />
                                        for scale — not control.
                                    </p>
                                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                        As production increases:
                                    </p>
                                </div>

                                <div className="text-base md:!text-[18px] font-normal leading-snug pt-1 space-y-1">
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Batch Variation Increases</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Output Becomes Unpredictable</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Manual Intervention Increases</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Scaling Becomes Unstable</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Group: Concluding Block */}
                        <div className="pt-6 md:pt-10 space-y-1">
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                                Consistency is not a function of size.
                            </p>
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                                It is a function of process discipline.
                            </p>
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                                Even high-capacity setups fail when <br className="hidden md:block" />
                                process control is inconsistent.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Card: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full aspect-[4/3] md:aspect-auto md:h-full min-h-[360px] md:min-h-[460px] lg:min-h-[520px] rounded-xl overflow-hidden shadow-sm"
                    >
                        <Image
                            src="/manufacturing/why-most-fail-section.webp"
                            alt="Why most manufacturing fails - Technician at factory machinery"
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
