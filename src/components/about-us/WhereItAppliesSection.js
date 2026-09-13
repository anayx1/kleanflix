'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function WhereItAppliesSection() {
    return (
        <section className="relative w-full py-15 bg-white overflow-hidden">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">

                    {/* Left Column: Headline, Description & Application Bullets */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-semibold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight mb-4 md:mb-6"
                        >
                            Where it applies
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-relaxed mb-6 md:mb-8"
                        >
                            Kleanfix systems are designed for environments where consistency, hygiene, and performance matter.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            className="space-y-3"
                        >
                            <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-snug">
                                These include:
                            </p>
                            <div className=" pl-1">
                                <p className="text-[18px] text-primary-dark">• Hospitality</p>
                                <p className="text-[18px] text-primary-dark">• Healthcare</p>
                                <p className="text-[18px] text-primary-dark">• Facility Management</p>
                                <p className="text-[18px] text-primary-dark">• Industrial Operations</p>
                                <p className="text-[18px] text-primary-dark">• OEM & Private Label Execution</p>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] mt-6 md:mt-8 leading-snug"
                        >
                            Each environment operates differently.
                        </motion.p>
                    </div>

                    {/* Right Column: Autoplay Looping Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                        className="md:col-span-7 flex items-center justify-center"
                    >
                        <div className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                controls={false}
                                disablePictureInPicture
                                disableRemotePlayback
                                ref={(el) => {
                                    if (el) {
                                        el.muted = true;
                                        el.defaultMuted = true;
                                    }
                                }}
                                onCanPlay={(e) => {
                                    e.currentTarget.muted = true;
                                    e.currentTarget.play().catch(() => { });
                                }}
                                className="w-full h-full object-cover pointer-events-none"
                            >
                                <source src="/about-us/sec5.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Callout Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-primary rounded-xl py-10 md:py-14 lg:py-16 px-6 md:px-12 text-center text-white shadow-sm flex flex-col items-center justify-center mt-12 md:mt-16 lg:mt-20"
                >
                    <h3 className="font-semibold text-2xl md:text-4xl lg:text-[42px] tracking-tight leading-[1.2] max-w-4xl mx-auto">
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
        </section>
    );
}
