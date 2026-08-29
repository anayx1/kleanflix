'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function WhyThisMattersSection() {
    const sectionRef = useRef(null);

    // Track scroll position of the section relative to viewport:
    // Starts when section is ~20% on screen (start 0.85)
    // Reaches fully stacked state at ~50% on screen (start 0.35)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 0.85', 'start 0.35'],
    });

    // Spring physics for smooth 60fps scrolling
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 28,
        restDelta: 0.001,
    });

    // Card 2 animation: reveals smoothly flush under Card 1 between 20% and 35% on screen
    const maxHeightCard2 = useTransform(smoothProgress, [0.0, 0.45], ['0px', '200px']);
    const opacityCard2 = useTransform(smoothProgress, [0.0, 0.35], [0, 1]);
    const yCard2 = useTransform(smoothProgress, [0.0, 0.45], [-10, 0]);

    // Card 3 animation: reveals smoothly flush under Card 2 between 35% and 50% on screen
    const maxHeightCard3 = useTransform(smoothProgress, [0.45, 0.95], ['0px', '450px']);
    const opacityCard3 = useTransform(smoothProgress, [0.45, 0.85], [0, 1]);
    const yCard3 = useTransform(smoothProgress, [0.45, 0.95], [-10, 0]);

    return (
        <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-4 md:px-8 xl:px-12">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-primary mb-6 md:mb-8">
                    Why this matters?
                </h2>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    
                    {/* Left Column: Stacked Card Container */}
                    <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start">
                        <div className="rounded-[24px] md:rounded-[28px] overflow-hidden border border-slate-100/90 shadow-sm flex flex-col w-full bg-white">
                            
                            {/* Card 1: Top Base Stack Card (Blue) - Always visible when section enters screen */}
                            <div className="bg-primary p-6 md:p-8 text-white relative z-30">
                                <p className="font-semibold text-lg md:text-xl lg:text-[22px] leading-snug !text-white">
                                    You are not just sending a message.
                                </p>
                            </div>

                            {/* Card 2: Middle Stacked Card (Muted Blue) - Expands flush under Card 1 */}
                            <motion.div
                                style={{
                                    maxHeight: maxHeightCard2,
                                    opacity: opacityCard2,
                                    y: yCard2,
                                }}
                                className="bg-[#D9E6F2] overflow-hidden relative z-20 origin-top transform-gpu"
                            >
                                <div className="p-6 md:p-8">
                                    <p className="font-medium text-primary text-lg md:text-xl lg:text-[22px] leading-snug !text-primary">
                                        You are entering a structured solution process.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Card 3: Bottom Stacked Card (Light Off-white) - Expands flush under Card 2 */}
                            <motion.div
                                style={{
                                    maxHeight: maxHeightCard3,
                                    opacity: opacityCard3,
                                    y: yCard3,
                                }}
                                className="bg-[#F5F7FA] overflow-hidden relative z-10 origin-top transform-gpu"
                            >
                                <div className="p-6 md:p-8 pb-4">
                                    <p className="font-medium text-primary text-lg md:text-xl lg:text-[22px] leading-snug !text-primary mb-4 md:mb-6">
                                        Correct routing reduces delays and improves response accuracy.
                                    </p>
                                    
                                    {/* Products Image */}
                                    <div className="mt-2 pt-2 flex justify-center">
                                        <Image
                                            src="/contactus/products.avif"
                                            alt="Kleanfix product lineup"
                                            width={480}
                                            height={180}
                                            className="w-full h-auto object-contain max-h-[160px] md:max-h-[190px]"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Right Column: Main Image */}
                    <div className="lg:col-span-7 xl:col-span-7">
                        <div className="relative w-full h-[340px] md:h-[440px] lg:h-[480px] rounded-[24px] md:rounded-[28px] overflow-hidden shadow-sm">
                            <Image
                                src="/contactus/why-this-matter.avif"
                                alt="Why this matters - solution process"
                                fill
                                className="object-cover rounded-[24px] md:rounded-[28px]"
                                sizes="(max-width: 1000px) 100vw, 55vw"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
