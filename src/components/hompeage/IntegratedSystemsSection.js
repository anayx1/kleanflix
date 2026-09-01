'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/Button';

const slides = [
    { src: '/homepage/cleaning-chemistry.png', label: 'Cleaning chemistry' },
    { src: '/homepage/manufacturing.png', label: 'Manufacturing' },
    { src: '/homepage/oem-exports.webp', label: 'OEM & export execution' },
];

export default function IntegratedSystemsSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    // ─── Background opacity ───
    // Hidden during image 1, fades in for image 2 and stays at 0.6 until the end
    const bgOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.92, 1], [0, 0.6, 0.6, 0.6]);

    // ─── Background scroll (scrolls during images 2 & 3) ───
    const bgY = useTransform(scrollYProgress, [0.3, 0.95], [0, -450]);

    // ─── Right column vertical scroll ───
    // Card blocks: image 380px + label ~52px + gap 48px ≈ 480px per step.
    const stackY = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.92], [0, 0, -480, -960]);

    // ─── Per-image opacity ───
    // Image 1: starts dim, becomes full, stays full when scrolling up/exiting
    const img1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.25, 0.38], [0.3, 1, 1, 1]);
    // Image 2: starts dim, becomes full, stays full when scrolling up/exiting
    const img2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.68], [0.3, 1, 1, 1]);
    // Image 3: starts dim, becomes full, stays full
    const img3Opacity = useTransform(scrollYProgress, [0.55, 0.7, 0.92, 1], [0.3, 1, 1, 1]);

    // ─── Per-image X offset (enter from right) ───
    const img1X = useTransform(scrollYProgress, [0, 0.08], [500, 0]);
    const img2X = useTransform(scrollYProgress, [0.25, 0.4], [500, 0]);
    const img3X = useTransform(scrollYProgress, [0.55, 0.7], [500, 0]);

    // ─── Per-image Y offset (enter from bottom) ───
    const img1ExtraY = useTransform(scrollYProgress, [0, 0.08], [350, 0]);
    const img2ExtraY = useTransform(scrollYProgress, [0.25, 0.4], [350, 0]);
    const img3ExtraY = useTransform(scrollYProgress, [0.55, 0.7], [350, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[400vh]"
        >
            {/* Sticky viewport container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Background image layer — scrolls during images 2 & 3 */}
                <motion.div
                    className="absolute inset-x-0 top-0 z-0 pointer-events-none h-[calc(100vh+400px)]"
                    style={{ opacity: bgOpacity, y: bgY }}
                >
                    <Image
                        src="/homepage/sec-7-bg.jpg"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority
                    />
                </motion.div>

                {/* Content grid */}
                <div className="relative z-10 h-full w-full flex items-center">
                    <div className="main-container px-6 md:px-12 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">

                            {/* Left Column: Sticky text */}
                            <div className="md:col-span-5 flex flex-col items-start space-y-6 md:space-y-8">
                                <h2 className=" font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight">
                                    Kleanfix builds integrated systems across:
                                </h2>

                                <p className=" font-medium text-primary-dark leading-relaxed max-w-md">
                                    This structure aligns formulation, production, and application into one controlled system — eliminating variation across batches, locations, and usage conditions.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
                                    <Button variant="pill-secondary" showArrow={false} href="/products" className='font-medium'>
                                        View Products
                                    </Button>
                                    <Button variant="secondary" href="/industries" className='font-medium'>
                                        View Industries
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column: Vertically stacked image cards scrolling upward (reduced sizes) */}
                            <div className="md:col-span-7 relative h-[420px] md:h-[460px] lg:h-[480px] overflow-visible flex justify-end">
                                <motion.div
                                    className="flex flex-col gap-12 w-full max-w-[580px]"
                                    style={{ y: stackY }}
                                >
                                    {slides.map((slide, idx) => {
                                        // Pick the correct opacity and X/Y offset for this index
                                        const opacityValue = idx === 0 ? img1Opacity : idx === 1 ? img2Opacity : img3Opacity;
                                        const xValue = idx === 0 ? img1X : idx === 1 ? img2X : img3X;
                                        const extraYValue = idx === 0 ? img1ExtraY : idx === 1 ? img2ExtraY : img3ExtraY;

                                        return (
                                            <motion.div
                                                key={slide.label}
                                                className="flex flex-col gap-3 shrink-0"
                                                style={{ opacity: opacityValue, x: xValue, y: extraYValue }}
                                            >
                                                <div className="relative w-full h-[280px] md:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg shrink-0">
                                                    <Image
                                                        src={slide.src}
                                                        alt={slide.label}
                                                        fill
                                                        sizes="(max-width: 1001px) 100vw, 40vw"
                                                        className="object-cover object-center"
                                                        priority
                                                    />
                                                </div>
                                                <div className="bg-white rounded-xl px-6 py-3 w-full shadow-sm">
                                                    <span className="font-sans font-medium text-base md:text-lg text-primary select-none">
                                                        {slide.label}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
