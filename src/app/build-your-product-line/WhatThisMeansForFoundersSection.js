'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function WhatThisMeansForFoundersSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Top: OEM execution and connection Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-primary text-white rounded-2xl md:rounded-[28px] lg:rounded-[32px] p-8 md:p-12 lg:p-14 text-center shadow-sm mb-16 md:mb-20 lg:mb-24"
                >
                    <h2 className="text-white font-semibold text-2xl md:text-4xl lg:text-[42px] tracking-tight leading-tight mb-3 md:mb-4">
                        OEM execution and connection
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-1 text-white/95 text-base md:text-lg lg:text-[19px] font-normal leading-relaxed mb-6 md:mb-8">
                        <p>
                            This page defines the system thinking behind product building.
                        </p>
                        <p>
                            Detailed execution — including manufacturing, packaging, MOQ, and timelines — is handled within OEM & Private Label Execution.
                        </p>
                    </div>

                    <div>
                        <Button
                            variant="pill-secondary"
                            href="/oem-private-label"
                            showArrow={false}
                            className="font-bold text-xs md:text-sm uppercase px-8 py-3.5 tracking-wider inline-flex"
                        >
                            VIEW OEM & PRIVATE LABEL EXECUTION
                        </Button>
                    </div>
                </motion.div>

                {/* Bottom: Video + What this means for founders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Column: Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-sm bg-slate-100">
                            <video
                                src="/product-line/video-section.mp4"
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

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-6 text-primary-dark"
                    >
                        {/* Heading */}
                        <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                            What this means <br className="hidden md:block" />
                            for founders
                        </h2>

                        {/* Structured System Points */}
                        <div className="space-y-2">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                With a structured system:
                            </p>

                            <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Products Launch Faster</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Quality Remains Consistent</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Dependency on Vendors Reduces</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Differentiation Improves</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Scaling Becomes Predictable</p>
                            </div>
                        </div>

                        {/* Concluding Statement */}
                        <div className="pt-2 md:pt-4 space-y-1">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                This is not just launching a product.
                            </p>
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                It is building a product that can grow.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
