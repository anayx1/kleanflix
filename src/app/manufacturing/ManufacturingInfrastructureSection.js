'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ManufacturingInfrastructureSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-[#F7F7F7]">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start">
                    {/* Left Column: Heading + Image slid right as in screenshot */}
                    <div className="md:col-span-5 flex flex-col items-start md:items-end">
                        <div className="w-full max-w-[340px] flex flex-col items-start md:items-end">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-6 md:mb-8 text-left"
                            >
                                Manufacturing <br />
                                Infrastructure
                            </motion.h2>

                            {/* Image Container with Bottom-to-Top Reveal Animation & Cover preservation */}
                            <div className="relative w-full max-w-[280px] md:max-w-[250px] aspect-[3/4] rounded-xl overflow-hidden self-start md:self-end">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="absolute inset-0 w-full h-full "
                                >
                                    <motion.div
                                        variants={{
                                            hidden: { y: "100%" },
                                            visible: { y: 0 }
                                        }}
                                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute inset-0 w-full h-full  overflow-hidden"
                                    >
                                        <motion.div
                                            variants={{
                                                hidden: { y: "-100%" },
                                                visible: { y: 0 }
                                            }}
                                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute inset-0 w-full h-full "
                                        >
                                            <Image
                                                src="/manufacturing/manufacturing-infrastructure.webp"
                                                alt="Manufacturing Infrastructure - Hand operating control switch"
                                                fill
                                                priority
                                                sizes="(max-width: 1001px) 100vw, 320px"
                                                className="object-cover object-center"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-7 md:pt-4 lg:pt-6 space-y-6 md:space-y-8 text-primary-dark items-start md:flex flex-col justify-end h-full"
                    >
                        {/* Lead Paragraph */}
                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug mt-15">
                            Kleanfix operates a Delhi-based <br className="hidden md:block" />
                            manufacturing setup designed for <br className="hidden md:block" />
                            controlled, repeatable production.
                        </p>

                        {/* Current Capability Includes */}
                        <div className="space-y-2">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                                Current capability includes:
                            </p>

                            <div className="text-base md:!text-[18px] font-normal leading-snug pt-0.5 space-y-1">
                                <p className="text-primary-dark font-normal md:!text-[18px]">• ~10,000 sq. ft. built-up facility</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• 3 production lines</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• ~50 KL monthly production capacity</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• ~500 litre maximum batch size</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• semi-automatic packaging capability</p>
                            </div>
                        </div>

                        {/* Consistency Concluding Block */}
                        <div className="pt-2 md:pt-4 space-y-1">
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                                Consistency is not a function of size.
                            </p>
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                                It is a function of process discipline.
                            </p>
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                                Even high-capacity setups fail when process control <br className="hidden md:block" />
                                is inconsistent.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
