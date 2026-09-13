'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from 'framer-motion';

// Scroll-progress (0 → 1) checkpoints that drive the stack.
// Phase 1 [0 → CARD2_DOCK]: Card 2 rises and docks flush under Card 1.
//   Card 3 rises with it in lockstep (same speed), staying `gap`px
//   behind the whole time — this is the "grouped" motion.
// Phase 2 [CARD2_DOCK → CARD3_DOCK]: Card 2 is already docked; Card 3
//   alone covers the remaining `gap`px and docks under Card 2.
const CARD2_DOCK = 0.48;
const CARD3_DOCK = 0.88;
const RADIUS_MORPH = 0.06; // progress-width of the corner-flattening, ending exactly at each dock point

export default function WhyThisMattersSection() {
    const sectionRef = useRef(null);

    const [isDesktop, setIsDesktop] = useState(false);

    const prefersReducedMotion = useReducedMotion();
    const shouldAnimate = isDesktop && !prefersReducedMotion;

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1001px)');
        const syncBreakpoint = () => setIsDesktop(mq.matches);
        syncBreakpoint();
        mq.addEventListener('change', syncBreakpoint);
        return () => mq.removeEventListener('change', syncBreakpoint);
    }, []);

    // Section is a normal (non-sticky) block. Progress 0 = its top is 85%
    // down the viewport (just entering); progress 1 = its top reaches 20%
    // from the top.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 0.85', 'start 0.2'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 30,
        restDelta: 0.0001,
    });

    // Card 2: slides up from fully below (500px) to cover Card 1
    const yCard2 = useTransform(smoothProgress, [0, CARD2_DOCK], ['100%', '0%']);
    // Card 3: stays hidden below until Card 2 docks, then slides up to cover Card 2
    const yCard3 = useTransform(smoothProgress, [0, CARD2_DOCK, CARD3_DOCK], ['100%', '100%', '0%']);

    return (
        <section
            ref={sectionRef}
            className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden"
        >
            <div className="main-container px-4 md:px-8 xl:px-12 w-full">
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-primary mb-6 md:mb-8">
                    Why this matters?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

                    {/* ── Left Column ── */}
                    <div className="md:col-span-5 xl:col-span-5">

                        {/* ─── MOBILE: normal stacked flow (no animation) ─── */}
                        <div className="md:hidden flex flex-col gap-0 rounded-[24px] overflow-hidden shadow-sm">
                            <div className="bg-primary p-6 text-white">
                                <p className="font-semibold text-lg leading-snug !text-white">
                                    You are not just sending a message.
                                </p>
                            </div>
                            <div className="bg-[#D9E6F2] p-6 border-x border-slate-200/80">
                                <p className="font-medium text-primary text-lg leading-snug !text-primary">
                                    You are entering a structured solution process.
                                </p>
                            </div>
                            <div className="bg-[#F5F7FA] p-6 pb-4 border-x border-b border-slate-200/80">
                                <p className="font-medium text-primary text-lg leading-snug !text-primary mb-4">
                                    Correct routing reduces delays and improves response accuracy.
                                </p>
                                <div className="flex justify-center">
                                    <Image
                                        src="/contactus/products.avif"
                                        alt="Kleanfix product lineup"
                                        width={1080}
                                        height={1080}
                                        className="w-full h-auto object-contain max-h-[160px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ─── DESKTOP: absolute + scroll-animated cards ─── */}
                        <div className="hidden md:block relative h-[440px] lg:h-[480px] rounded-[28px] overflow-hidden shadow-sm">
                            {/* Card 1 — base layer, always visible, full height */}
                            <div className="absolute inset-0 bg-primary p-8 text-white z-10 rounded-[28px]">
                                <p className="font-semibold text-xl lg:text-[22px] leading-snug !text-white">
                                    You are not just sending a message.
                                </p>
                            </div>

                            {/* Card 2 — slides up from below to cover Card 1 */}
                            <motion.div
                                style={shouldAnimate ? { y: yCard2 } : { y: 0 }}
                                className="absolute top-[80px] left-0 right-0 bottom-0 bg-[#D9E6F2] p-8 z-20 rounded-[28px] border border-slate-200/80"
                            >
                                <p className="font-medium text-primary text-xl lg:text-[22px] leading-snug !text-primary">
                                    You are entering a structured solution process.
                                </p>
                            </motion.div>

                            {/* Card 3 — slides up from below to cover Card 2 */}
                            <motion.div
                                style={shouldAnimate ? { y: yCard3 } : { y: 0 }}
                                className="absolute top-[160px] left-0 right-0 bottom-0 bg-[#F5F7FA] p-8 pb-4 z-30 rounded-[28px] border border-slate-200/80"
                            >
                                <p className="font-medium text-primary text-xl lg:text-[22px] leading-snug !text-primary mb-6">
                                    Correct routing reduces delays and improves response accuracy.
                                </p>
                                <div className="flex justify-center">
                                    <Image
                                        src="/contactus/products.avif"
                                        alt="Kleanfix product lineup"
                                        width={1080}
                                        height={1080}
                                        className="w-full h-auto object-contain max-h-[250px]"
                                    />
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    <div className="md:col-span-7 xl:col-span-7">
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