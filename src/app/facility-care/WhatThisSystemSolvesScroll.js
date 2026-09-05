'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from '@/components/Button';

export default function WhatThisSystemSolvesScroll() {
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    // Track native vertical scroll progress through the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Discrete slide change effect on scroll:
    // User scrolls slightly -> triggers slide change to next/previous slide
    // Slide 3 has a long resting dwell (0.62 - 1.00) so it never scrolls away prematurely
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (latest < 0.28) {
            setActiveSlide(0);
        } else if (latest >= 0.28 && latest < 0.62) {
            setActiveSlide(1);
        } else {
            setActiveSlide(2);
        }
    });

    return (
        <section
            ref={containerRef}
            className="relative h-[250vh] bg-white"
        >
            {/* Sticky viewport pinned to top during vertical scroll */}
            <div className="sticky top-0 h-screen h-[120dvh] w-full overflow-hidden flex items-center bg-white">
                {/* Horizontal sliding track with smooth slide-change transition */}
                <motion.div
                    className="flex flex-nowrap w-full h-full will-change-transform"
                    animate={{ x: `-${activeSlide * 100}%` }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* ══════════════════════════════════════════════
                        SLIDE 1: What this system solves
                    ══════════════════════════════════════════════ */}
                    <div className="w-full min-w-full h-full flex-shrink-0 flex items-center justify-center px-6 md:px-12 py-10">
                        <div className="main-container w-full">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                                {/* Left Column: Typography */}
                                <div className="md:col-span-5 flex flex-col justify-center">
                                    <h2 className="font-sans font-semibold text-3xl md:text-5xl lg:text-[54px] text-primary leading-[1.15] tracking-tight mb-4 md:mb-6">
                                        What this<br />system solves
                                    </h2>
                                    <p className="font-sans font-medium text-base md:text-xl lg:text-[22px] text-primary leading-snug mb-5 md:mb-6">
                                        Inconsistent cleaning across facility<br className="hidden md:block" /> environments directly impacts:
                                    </p>
                                    <ul className="space-y-2 md:space-y-3 font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary">
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Hygiene Standards</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Surface Cleanliness</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Odor Control</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Maintenance Efficiency</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Column: Image */}
                                <div className="md:col-span-7">
                                    <div className="relative w-full h-[280px] md:h-[460px] lg:h-[540px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm">
                                        <Image
                                            src="/facility-care/slide1.webp"
                                            alt="What this system solves - Caution cleaning in progress signs"
                                            fill
                                            priority
                                            sizes="(max-width: 1000px) 100vw, 60vw"
                                            className="object-cover rounded-[24px] md:rounded-[32px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════════
                        SLIDE 2: Facility Care addresses critical operational challenges
                    ══════════════════════════════════════════════ */}
                    <div className="w-full min-w-full h-full flex-shrink-0 flex items-center justify-center px-6 md:px-12 py-10">
                        <div className="main-container w-full">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                                {/* Left Column: Typography */}
                                <div className="md:col-span-5 flex flex-col justify-center">
                                    <h2 className="font-sans font-medium text-2xl md:text-3xl lg:text-[34px] text-primary leading-snug tracking-tight mb-5 md:mb-6">
                                        Facility Care addresses critical<br className="hidden md:block" /> operational challenges such as:
                                    </h2>
                                    <ul className="space-y-2 md:space-y-3 font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary">
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Inconsistent surface hygiene</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Washroom cleanliness issues</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Odor buildup</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>High-touch contamination risk</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Stains, dirt, and deposit buildup</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Column: Image */}
                                <div className="md:col-span-7">
                                    <div className="relative w-full h-[280px] md:h-[460px] lg:h-[540px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm">
                                        <Image
                                            src="/facility-care/slide2.webp"
                                            alt="Operational challenges in unhygienic washroom facilities"
                                            fill
                                            sizes="(max-width: 1000px) 100vw, 60vw"
                                            className="object-cover rounded-[24px] md:rounded-[32px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════════
                        SLIDE 3: Without system alignment
                    ══════════════════════════════════════════════ */}
                    <div className="w-full min-w-full h-full flex-shrink-0 flex items-center justify-center px-6 md:px-12 py-10">
                        <div className="main-container w-full">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                                {/* Left Column: Typography */}
                                <div className="md:col-span-5 flex flex-col justify-center">
                                    <h2 className="font-sans font-medium text-2xl md:text-3xl lg:text-[34px] text-primary leading-snug tracking-tight mb-4 md:mb-5">
                                        Without system alignment:
                                    </h2>
                                    <ul className="space-y-2 md:space-y-3 font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary mb-6 md:mb-7">
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Cleaning becomes inconsistent</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Hygiene standards drop</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <span className="text-primary text-base select-none">•</span>
                                            <span>Maintenance effort increases</span>
                                        </li>
                                    </ul>
                                    <p className="font-sans font-medium text-base md:text-xl lg:text-[22px] text-primary leading-relaxed mb-6 md:mb-8">
                                        This ensures predictable cleaning outcomes across<br className="hidden md:block" /> teams, shifts, and locations.
                                    </p>
                                    <div>
                                        <Button
                                            variant="pill-secondary"
                                            showArrow={true}
                                            href="/how-it-works"
                                            className="font-semibold text-xs md:text-sm px-6 py-3 md:px-8 md:py-3.5 gap-2.5"
                                        >
                                            VIEW HOW THE SYSTEM WORKS
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Column: Image */}
                                <div className="md:col-span-7">
                                    <div className="relative w-full h-[280px] md:h-[460px] lg:h-[540px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm">
                                        <Image
                                            src="/facility-care/slide3.webp"
                                            alt="Predictable cleaning outcomes in pristine modern washroom"
                                            fill
                                            sizes="(max-width: 1000px) 100vw, 60vw"
                                            className="object-cover rounded-[24px] md:rounded-[32px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
