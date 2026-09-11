'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function InfrastructureAndHowItWorksSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Part 1: Infrastructure */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start pb-16 md:pb-24 lg:pb-28">
                    {/* Left Column: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6"
                    >
                        <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                            Infrastructure
                        </h2>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-6 text-primary-dark"
                    >
                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            Kleanfix operates as a structured system designed for <br className="hidden md:block" />
                            consistency — not isolated supply.
                        </p>

                        {/* Execution Infrastructure */}
                        <div className="space-y-1">
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-medium leading-snug">
                                Execution Infrastructure:
                            </p>
                            <div className="text-base md:!text-[18px] font-normal leading-snug pt-0.5 space-y-0.5">
                                <p className="text-primary-dark font-normal md:!text-[18px]">• 3 production lines</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• ~50 KL monthly production capacity</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• In-house R&D and chemist support</p>
                            </div>
                        </div>

                        {/* System Support */}
                        <div className="space-y-1">
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-medium leading-snug">
                                System Support:
                            </p>
                            <div className="text-base md:!text-[18px] font-normal leading-snug pt-0.5 space-y-0.5">
                                <p className="text-primary-dark font-normal md:!text-[18px]">• OEM & private label execution</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">
                                    • Export-active supply across Nepal, Bhutan, Oman, UAE, Saudi Arabia, and Middle East
                                </p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• SDS / TDS documentation support</p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="pt-2">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/products"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"
                            >
                                VIEW PRODUCT SYSTEMS
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Part 2: How It Works (Video + Content Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Column: Video (~60% width) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-7"
                    >
                        <div className="relative w-full aspect-[16/10] md:aspect-[1.55/1] rounded-2xl md:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-sm bg-slate-100">
                            <video
                                src="/oem/video-section.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls={false}
                                disablePictureInPicture
                                disableRemotePlayback
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Steps & Conclusion (~40% width) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-5 space-y-6 text-primary-dark"
                    >
                        {/* Heading */}
                        <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                            How it works
                        </h2>

                        {/* Numbered Steps */}
                        <div className="text-base md:!text-[18px] font-normal leading-snug space-y-1.5 text-primary-dark">
                            <p className="text-primary-dark font-normal md:!text-[18px]">
                                1. Share your requirement (product, category, and scale)
                            </p>
                            <p className="text-primary-dark font-normal md:!text-[18px]">
                                2. Feasibility is assessed and structured
                            </p>
                            <p className="text-primary-dark font-normal md:!text-[18px]">
                                3. Formulation, packaging, and scale are aligned
                            </p>
                            <p className="text-primary-dark font-normal md:!text-[18px]">
                                4. Execution is planned and initiated
                            </p>
                        </div>

                        {/* Concluding Statement */}
                        <div className="pt-2 space-y-1">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                This flow ensures controlled, <br className="hidden md:block" />
                                repeatable output across <br className="hidden md:block" />
                                batches.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="pt-2">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/contact-us"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"
                            >
                                SUBMIT REQUIREMENT
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
