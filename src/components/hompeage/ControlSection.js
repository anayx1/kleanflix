'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function ControlSection() {
    return (
        <section className="py-5 bg-[#E9ECEF] relative overflow-hidden">
            <div className="main-container px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">

                    {/* Left Column: Heading and description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="md:col-span-1 flex flex-col justify-center space-y-6 md:space-y-8 bg-white h-full rounded-lg p-10"
                    >
                        <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight">
                            You do not <br className="hidden lg:block" />
                            need a factory. <br />
                            You need control.
                        </h2>

                        <p className="font-sans font-medium text-primary-dark/80 text-lg md:text-xl leading-relaxed max-w-xl">
                            Most brands don’t struggle with access — they struggle with maintaining consistency across production.
                        </p>
                    </motion.div>

                    {/* Right Column: Video card container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="md:col-span-1 "
                    >
                        <div className="relative w-full h-[500px] md:h-[550px] lg:h-[600px]h-full rounded-lg p-5 overflow-hidden shadow-2xl flex flex-col justify-end p-8 md:p-12 text-white">

                            {/* Background Video */}
                            <video
                                src="/homepage/sec91.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover z-0"
                            />

                            {/* Dark Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />

                            {/* Overlaid Content */}
                            <div className="relative z-20 space-y-6">
                                <h3 className="font-sans font-bold text-3xl md:text-4xl">
                                    Kleanfix enables:
                                </h3>

                                <ul className="space-y-2 font-sans font-semibold text-lg md:text-xl opacity-95">
                                    <li className="flex items-center">
                                        <span className="mr-2 select-none">•</span> Formulation
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 select-none">•</span> Manufacturing
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 select-none">•</span> Private Label Development
                                    </li>
                                </ul>

                                <p className="font-sans font-medium text-sm md:text-base opacity-80 pt-2">
                                    All integrated within one controlled system.
                                </p>

                                <div className="pt-4">
                                    <Button variant="pill-secondary" showArrow={false} href="/contact" className="font-semibold">
                                        START OEM DISCUSSION
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
