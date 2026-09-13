'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StructureNotProductsSection() {
    return (
        <section className="relative w-full py-15 bg-white overflow-hidden">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">

                    {/* Left Column: Heading + Lower Subgrid (Small Image + Text) */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full">
                        {/* Main Section Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight mb-10 md:mb-16"
                        >
                            Most businesses do not<br />
                            struggle because they lack<br />
                            products.<br />
                            They struggle because<br />
                            they lack structure.
                        </motion.h2>

                        {/* Lower Row: Left Tall Pill Image & Descriptive Text Block */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                            {/* Left Image with smooth scroll reveal */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                className="md:col-span-4 relative h-[320px] md:h-[380px] w-full md:w-[200px] rounded-[32px] md:rounded-[36px] overflow-hidden"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { y: "100%", opacity: 0 },
                                        visible: { y: 0, opacity: 1 }
                                    }}
                                    transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="absolute inset-0 w-full h-full overflow-hidden"
                                >
                                    <motion.div
                                        variants={{
                                            hidden: { y: "-100%" },
                                            visible: { y: 0 }
                                        }}
                                        transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <Image
                                            src="/about-us/sec2-left-side.avif"
                                            alt="Formulation and chemical development in laboratory"
                                            fill
                                            sizes="(max-width: 1001px) 100vw, 30vw"
                                            className="object-cover object-center transition-transform duration-700"
                                            priority
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Right Text Details */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                                className="md:col-span-8 flex flex-col justify-between self-stretch space-y-6 pt-2"
                            >
                                <div>
                                    <p className="text-primary font-medium text-lg md:text-xl lg:text-[22px] mb-3 leading-snug">
                                        Without a system:
                                    </p>
                                    <div className="space-y-1 pl-1">
                                        <p className="text-[18px] text-primary">• Output Varies</p>
                                        <p className="text-[18px] text-primary">• Quality Fluctuates</p>
                                        <p className="text-[18px] text-primary">• Execution Becomes Inconsistent</p>
                                        <p className="text-[18px] text-primary">• Scaling Becomes Difficult</p>
                                    </div>
                                </div>

                                <div className="mt-6 md:mt-8 space-y-1">
                                    <p className="text-primary font-medium text-lg md:text-xl lg:text-[22px] leading-snug">
                                        Products alone do not solve this.
                                    </p>
                                    <p className="text-primary font-medium text-lg md:text-xl lg:text-[22px] leading-snug">
                                        Systems do.
                                    </p>
                                    <p className="text-primary font-medium text-lg md:text-xl lg:text-[22px] leading-snug">
                                        Kleanfix is built to solve that gap.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Large Feature Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="md:col-span-5 relative w-full h-[520px] md:h-[740px] lg:h-[820px] xl:h-[860px] rounded-[36px] md:rounded-[44px] overflow-hidden"
                    >
                        <motion.div
                            variants={{
                                hidden: { y: "100%", opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="absolute inset-0 w-full h-full overflow-hidden"
                        >
                            <motion.div
                                variants={{
                                    hidden: { y: "-100%" },
                                    visible: { y: 0 }
                                }}
                                transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src="/about-us/sec2-right-side.avif"
                                    alt="Structured cleaning and hygiene execution in practice"
                                    fill
                                    sizes="(max-width: 1001px) 100vw, 45vw"
                                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

