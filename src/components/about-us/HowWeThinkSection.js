'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Parallax image card with spring-damped physics and amplified Y-translation for noticeable, smooth scrolling.
 */
function ParallaxImage({ src, alt, priority = false, className = '', translateYRange = [-110, 110] }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Spring physics for buttery-smooth, fluid inertia that outlasts abrupt scroll steps
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 85,
        damping: 24,
        restDelta: 0.001,
    });

    const y = useTransform(smoothProgress, [0, 1], translateYRange);

    return (
        <div ref={containerRef} className={`relative overflow-hidden bg-gray-50 ${className}`}>
            <motion.div
                style={{ y }}
                className="absolute -top-[25%] -bottom-[25%] -left-[6%] -right-[6%] w-[112%] h-[150%] will-change-transform"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 1001px) 100vw, 45vw"
                    className="object-cover object-center scale-105"
                    priority={priority}
                />
            </motion.div>
        </div>
    );
}

export default function HowWeThinkSection() {
    return (
        <section className="relative w-full py-15 bg-white overflow-hidden">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">

                    {/* Left Column: Heading, Subtitle & Left Parallax Image */}
                    <div className="md:col-span-6 flex flex-col">
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-semibold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight mb-3 md:mb-4"
                        >
                            How we think
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-snug mb-8 md:mb-12"
                        >
                            <p>Most businesses add vendors.</p>
                            <p>Kleanfix reduces complexity.</p>
                        </motion.div>

                        {/* Left Parallax Image (Meeting handshake) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <ParallaxImage
                                src="/about-us/how-we-think-left.avif"
                                alt="Business partners aligning on system-driven operations"
                                className="w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[28px] md:rounded-[36px] shadow-sm"
                                translateYRange={[-120, 120]}
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Sticky Notes Parallax Image & Approach Details */}
                    <div className="md:col-span-6 flex flex-col justify-start">
                        {/* Right Parallax Image (Woman with sticky notes on whiteboard) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <ParallaxImage
                                src="/about-us/how-we-think-right.avif"
                                alt="Strategic planning and structured operational approach"
                                className="w-full md:w-[320px] lg:w-[380px] h-[300px] md:h-[380px] lg:h-[420px] rounded-[24px] md:rounded-[30px] shadow-sm mb-8 md:mb-10"
                                translateYRange={[-95, 95]}
                                priority
                            />
                        </motion.div>

                        {/* Text Block: Approach bullets & summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            className="space-y-3"
                        >
                            <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-snug">
                                Our approach is built on:
                            </p>
                            <div className="pl-1 space-y-1">
                                <p className="text-[18px] text-primary-dark">• Structure Over Randomness</p>
                                <p className="text-[18px] text-primary-dark">• Systems Over Isolated Products</p>
                                <p className="text-[18px] text-primary-dark">• Consistency Over Variation</p>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] mt-6 md:mt-8 leading-relaxed max-w-xl"
                        >
                            This allows businesses to operate with more control and less dependency on fragmented decision-making.
                        </motion.p>
                    </div>

                </div>
            </div>
        </section>
    );
}
