'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Image from 'next/image';

export default function StructuredProductionSection() {
    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="main-container px-6 md:px-12">
                <div className="max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch structured-production-grid">

                    {/* Left Column: Packaging / Robotic Arms Video Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="md:col-span-4 rounded-3xl overflow-hidden shadow-sm relative h-[380px] md:h-[460px] lg:h-[500px]"
                    >
                        {/* <video
                            src="/homepage/sec91.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        /> */}
                        <Image
                            src={'/homepage/sec10.jpg'}
                            className="w-full h-full object-cover"
                            alt='test'
                            width={1000}
                            height={1000}
                        />
                    </motion.div>

                    {/* Right Column: Structured Production Information Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="md:col-span-8 bg-[#F4F7FA] rounded-3xl p-8 md:p-12 lg:p-14 flex flex-col justify-between h-[380px] md:h-[460px] lg:h-[500px]"
                    >
                        <div>
                            <h2 className="font-bold text-primary tracking-tight leading-[1.15] mb-8 md:mb-10">
                                Structured production ensures:
                            </h2>

                            <ul className="space-y-3 text-primary-dark text-xl md:text-2xl lg:text-2xl">
                                <li className="flex items-center">
                                    <span className="mr-2 select-none">•</span>Repeatable Batches
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 select-none">•</span>Stable Performance
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 select-none">•</span>Consistent Supply Across Markets
                                </li>
                            </ul>
                        </div>

                        <div className="pt-6">
                            <Button variant="pill-secondary" showArrow={false} href="/exports" className="font-semibold">
                                VIEW EXPORTS
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
