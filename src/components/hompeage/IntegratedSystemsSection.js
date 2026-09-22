'use client';

import React, { useRef, useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1001);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    // ─── Right column vertical scroll (Desktop only) ───
    const stackY = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.92], [0, 0, -480, -960]);

    // ─── Per-image opacity (Desktop only) ───
    const img1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.25, 0.38], [0.3, 1, 1, 1]);
    const img2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.68], [0.3, 1, 1, 1]);
    const img3Opacity = useTransform(scrollYProgress, [0.55, 0.7, 0.92, 1], [0.3, 1, 1, 1]);

    // ─── Per-image X offset (Desktop only) ───
    const img1X = useTransform(scrollYProgress, [0, 0.08], [500, 0]);
    const img2X = useTransform(scrollYProgress, [0.25, 0.4], [500, 0]);
    const img3X = useTransform(scrollYProgress, [0.55, 0.7], [500, 0]);

    // ─── Per-image Y offset (Desktop only) ───
    const img1ExtraY = useTransform(scrollYProgress, [0, 0.08], [350, 0]);
    const img2ExtraY = useTransform(scrollYProgress, [0.25, 0.4], [350, 0]);
    const img3ExtraY = useTransform(scrollYProgress, [0.55, 0.7], [350, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-0 md:min-h-[400vh] py-12 md:py-0 bg-transparent"
        >
            {/* Sticky viewport container on desktop, static container on mobile */}
            <div className="relative md:sticky md:top-0 h-auto md:h-screen w-full overflow-hidden flex items-center">

                {/* Static Fixed Background Image Layer */}
                <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/homepage/sec-7-bg.jpg"
                        alt="Integrated systems background"
                        fill
                        sizes="100vw"
                        className="object-cover object-center opacity-60"
                        priority
                    />
                </div>

                {/* Content grid */}
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                    <div className="main-container px-6 md:px-12 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

                            {/* Left Column: Text & CTA buttons */}
                            <div className="md:col-span-5 flex flex-col items-start space-y-4 md:space-y-8">
                                <h2 className="font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-tight md:leading-[1.12] tracking-tight">
                                    Kleanfix builds integrated systems across:
                                </h2>

                                <p className="font-medium text-base md:text-base lg:text-lg text-primary-dark leading-relaxed max-w-md">
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

                            {/* Right Column: Card stack */}
                            <div className="md:col-span-7 relative h-auto md:h-[460px] lg:h-[480px] overflow-visible flex justify-end">
                                <motion.div
                                    className="flex flex-col gap-6 md:gap-12 w-full max-w-[580px]"
                                    style={isMobile ? {} : { y: stackY }}
                                >
                                    {slides.map((slide, idx) => {
                                        const opacityValue = idx === 0 ? img1Opacity : idx === 1 ? img2Opacity : idx === 2 ? img3Opacity : 1;
                                        const xValue = idx === 0 ? img1X : idx === 1 ? img2X : idx === 2 ? img3X : 0;
                                        const extraYValue = idx === 0 ? img1ExtraY : idx === 1 ? img2ExtraY : idx === 2 ? img3ExtraY : 0;

                                        return (
                                            <motion.div
                                                key={slide.label}
                                                className="flex flex-col gap-3 shrink-0"
                                                style={isMobile ? { opacity: 1, x: 0, y: 0 } : { opacity: opacityValue, x: xValue, y: extraYValue }}
                                            >
                                                <div className="relative w-full h-[220px] md:h-[350px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg shrink-0">
                                                    <Image
                                                        src={slide.src}
                                                        alt={slide.label}
                                                        fill
                                                        sizes="(max-width: 1001px) 100vw, 40vw"
                                                        className="object-cover object-center"
                                                        priority
                                                    />
                                                </div>
                                                <div className="bg-white rounded-xl px-5 py-3 w-full shadow-sm">
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
