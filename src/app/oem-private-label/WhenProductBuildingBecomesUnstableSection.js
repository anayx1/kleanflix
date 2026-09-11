'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhenProductBuildingBecomesUnstableSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch">
                    {/* Left Card: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 bg-[#F7F7F7] rounded-2xl md:rounded-[32px] p-8 md:p-12 lg:p-14 flex flex-col justify-between"
                    >
                        {/* Top Area: Heading & Bullets */}
                        <div>
                            <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-6 md:mb-8">
                                When product <br />
                                building <br />
                                becomes unstable
                            </h2>

                            <div className="space-y-2">
                                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                    If your journey feels:
                                </p>

                                <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Fragmented</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Delayed</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Inconsistent</p>
                                    <p className="text-primary-dark font-normal md:!text-[18px]">• Dependent on Multiple Vendors</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Area: Closing Statements */}
                        <div className="space-y-0.5 pt-8 md:pt-12">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                The issue is not execution.
                            </p>
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                It is a lack of system control.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Card: Image with Arch / Semicircle Radius on Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 relative w-full min-h-[360px] md:min-h-[500px] lg:min-h-[580px] overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-full shadow-sm"
                    >
                        <Image
                            src="/hospitality/pink-glove.avif"
                            alt="When product building becomes unstable"
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
