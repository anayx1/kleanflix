'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WhyKleanfixSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    // ─── Text Block 1 (RIGHT): "Why kleanfix works?" ───
    // Starts at center with image, smoothly scrolls up to exit
    const t1Y = useTransform(scrollYProgress, [0.08, 0.35], [0, -550]);

    // ─── Text Block 2 (LEFT): "Not a trader network..." ───
    // Continuously scrolls from bottom offscreen (+550) -> center (0) -> top offscreen (-550)
    const t2Y = useTransform(scrollYProgress, [0.08, 0.52], [550, -550]);

    // ─── Text Block 3 (RIGHT): "Kleanfix is a structured system..." ───
    // Continuously scrolls from bottom offscreen (+550) -> center (0) -> top offscreen (-550)
    const t3Y = useTransform(scrollYProgress, [0.32, 0.78], [550, -550]);

    // ─── Text Block 4 (LEFT): "This enables:..." ───
    // Continuously scrolls from bottom offscreen (+550) -> center (0) and stays for section end
    const t4Y = useTransform(scrollYProgress, [0.55, 0.90], [550, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[800vh]"
        >
            {/* Sticky viewport container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div className="relative h-full w-full flex items-center justify-center">
                    <div className="main-container px-6 md:px-12 w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full md:h-auto flex items-center justify-center md:grid md:grid-cols-12 md:gap-8 items-center">

                            {/* Left Column: Text blocks 2 and 4 */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 md:relative md:inset-auto md:z-auto md:col-span-4 md:justify-start min-h-[200px]">
                                {/* Text Block 2 */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center md:justify-start"
                                    style={{ y: t2Y }}
                                >
                                    <div className="space-y-2 md:space-y-1 text-center md:text-left px-4 md:px-0">
                                        <p className="text-primary-dark text-lg md:text-xl leading-tight font-medium md:font-normal">
                                            Not a trader network
                                        </p>
                                        <p className="text-primary-dark text-lg md:text-xl leading-tight font-medium md:font-normal">
                                            Not multi-vendor coordination
                                        </p>
                                        <p className="text-primary-dark text-lg md:text-xl leading-tight font-medium md:font-normal">
                                            Not product-only supply
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Text Block 4 */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center md:justify-start"
                                    style={{ y: t4Y }}
                                >
                                    <div className="space-y-3 px-4 md:px-0 max-w-xs md:max-w-none">
                                        <p className="text-primary-dark text-lg md:text-xl font-semibold md:font-normal text-left">
                                            This enables:
                                        </p>
                                        <ul className="space-y-1 md:space-y-0 font-sans font-medium text-primary-dark text-base md:text-lg">
                                            <li className="flex items-start text-base md:text-xl">
                                                <span className="mr-2 select-none">•</span>
                                                <span>Batch-Level Consistency</span>
                                            </li>
                                            <li className="flex items-start text-base md:text-xl">
                                                <span className="mr-2 select-none">•</span>
                                                <span>Reduced Dependency On Multiple Vendors</span>
                                            </li>
                                            <li className="flex items-start text-base md:text-xl">
                                                <span className="mr-2 select-none">•</span>
                                                <span>Predictable Performance Across Locations</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center Column: Sticky Image */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 md:relative md:inset-auto md:pointer-events-auto md:z-auto md:col-span-4">
                                <div className="relative w-[80vw] max-w-[300px] md:w-full md:max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg mt-0 md:mt-20 opacity-25 md:opacity-100 transition-opacity duration-300">
                                    <Image
                                        src="/homepage/sec11.avif"
                                        alt="Warehouse worker carrying cleaning products"
                                        fill
                                        sizes="(max-width: 1001px) 80vw, 33vw"
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Right Column: Text blocks 1 and 3 */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 md:relative md:inset-auto md:z-auto md:col-span-4 md:justify-start min-h-[200px]">
                                {/* Text Block 1 — comes with the image, always visible initially */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center md:justify-start"
                                    style={{ y: t1Y }}
                                >
                                    <h2 className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight text-center md:text-left mt-0 md:mt-20">
                                        Why kleanfix <br className="hidden md:inline" /> works?
                                    </h2>
                                </motion.div>

                                {/* Text Block 3 */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center md:justify-start"
                                    style={{ y: t3Y }}
                                >
                                    <p className="text-primary-dark text-lg md:text-xl leading-tight max-w-xs md:max-w-sm text-center md:text-left px-4 md:px-0 font-medium md:font-normal">
                                        Kleanfix is a structured system engineered for controlled, repeatable outcomes.
                                    </p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
