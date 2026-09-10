'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const ZONE_CARDS = [
    {
        id: 'rooms-washrooms',
        title: 'Rooms & Washrooms',
        paragraphs: [
            'These are the most visible zones in the guest journey. Inconsistency here shows up immediately through Odor variation, uneven cleaning quality, and poor room perception.',
            'Kleanfix brings control through structured daily maintenance systems that ensure predictable room quality across teams and properties.',
        ],
    },
    {
        id: 'kitchens',
        title: 'Kitchens',
        paragraphs: [
            'Hotel kitchens are high-pressure, hygiene-sensitive environments.',
            'Grease buildup, safety risks, and inconsistent cleaning routines directly affect operational quality.',
            'Kleanfix structures kitchen cleaning through stage-based systems designed for safer, more controlled back-of-house operations.',
        ],
    },
    {
        id: 'laundry',
        title: 'Laundry',
        paragraphs: [
            'Linen is one of the clearest signals of hospitality quality. When stains, fabric damage, or rewash cycles increase, the guest experience suffers and costs rise.',
            'Kleanfix aligns laundry operations through process-driven systems that support cleaner linen, better fabric handling, and consistent output.',
        ],
    },
    {
        id: 'guest-touchpoints',
        title: 'Guest Touchpoints',
        paragraphs: [
            'Hand hygiene, washroom products, and amenity experience shape how a property feels.',
            'When these touchpoints feel inconsistent, perception of quality weakens.',
            'Kleanfix supports these areas through controlled personal care and hygiene systems aligned to frequent guest use.',
        ],
    },
];

export default function OperationControlByZoneSection() {
    const sectionRef = useRef(null);
    const rightColRef = useRef(null);
    const cardRefs = useRef([]);

    // Calculated target Y offsets to bring each card precisely to screen center
    const [targets, setTargets] = useState([200, -150, -500, -850]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const calculateTargets = () => {
            if (!cardRefs.current || cardRefs.current.length < ZONE_CARDS.length) return;
            const vh = window.innerHeight;
            const isMobile = window.innerWidth < 1001;
            const screenCenter = vh / 2;

            // On mobile, the right column is pushed down below the headline in the single-column grid.
            // Measuring colTop allows us to cancel this offset so cards center on the screen.
            const colTop = isMobile && rightColRef.current ? rightColRef.current.offsetTop : 0;

            // On mobile, apply upward nudge to ensure generous space below the card
            const yNudge = isMobile ? -45 : 0;

            const newTargets = cardRefs.current.map((card) => {
                if (!card) return 0;
                const cardCenter = card.offsetTop + card.offsetHeight / 2;
                return screenCenter - colTop - cardCenter + yNudge;
            });

            if (newTargets.length === ZONE_CARDS.length && newTargets.some((val) => val !== 0)) {
                setTargets(newTargets);
            }
        };

        calculateTargets();
        const timeoutId = setTimeout(calculateTargets, 100);
        window.addEventListener('resize', calculateTargets);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', calculateTargets);
        };
    }, []);

    // Scroll choreograph:
    // 0.00 -> 0.15: Pure initial screen (only background and title, cards hidden)
    // 0.15 -> 0.36: Card 0 enters and centers
    // 0.36 -> 0.58: Card 1 enters and centers
    // 0.58 -> 0.79: Card 2 enters and centers
    // 0.79 -> 0.95: Card 3 enters and reaches screen center (with clean space below it)
    // 0.95 -> 1.00: Card 3 stays centered, then continuing scroll unpins the section
    const cardsY = useTransform(scrollYProgress, (v) => {
        const initY = typeof window !== 'undefined' ? window.innerHeight * 1.1 : 900;
        const t0 = targets[0] ?? 200;
        const t1 = targets[1] ?? -150;
        const t2 = targets[2] ?? -500;
        const t3 = targets[3] ?? -850;

        // Phase 0: Pure initial screen
        if (v <= 0.15) return initY;

        // Phase 1: Card 0 enters and centers
        if (v < 0.36) {
            const t = (v - 0.15) / (0.36 - 0.15);
            return initY + (t0 - initY) * t;
        }

        // Phase 2: Card 0 -> Card 1 centers
        if (v < 0.58) {
            const t = (v - 0.36) / (0.58 - 0.36);
            return t0 + (t1 - t0) * t;
        }

        // Phase 3: Card 1 -> Card 2 centers
        if (v < 0.79) {
            const t = (v - 0.58) / (0.79 - 0.58);
            return t1 + (t2 - t1) * t;
        }

        // Phase 4: Card 2 -> Card 3 centers smoothly
        const t = Math.min(1, (v - 0.79) / (0.95 - 0.79));
        return t2 + (t3 - t2) * t;
    });

    // Keep cards invisible during the initial clean hero screen
    const cardsOpacity = useTransform(scrollYProgress, (v) => {
        if (v <= 0.14) return 0;
        if (v < 0.20) return (v - 0.14) / (0.20 - 0.14);
        return 1;
    });

    const cardsPointerEvents = useTransform(scrollYProgress, (v) => (v <= 0.15 ? 'none' : 'auto'));

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[380vh] md:min-h-[420vh] w-full"
        >
            {/* Pinned Sticky Viewport */}
            <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden">
                {/* Fixed Background Image Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/hospitality/operation-control-bg.avif"
                        alt="Luxury hotel lobby background"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    {/* Subtle translucent wash for text contrast */}
                    <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 main-container px-5 md:px-12 w-full h-full">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-16 w-full h-full">
                        {/* Left Column: Fixed Headline */}
                        <div className="md:col-span-5 flex flex-col justify-start pt-14 md:pt-[22vh]">
                            <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[50px] xl:text-[54px] tracking-tight leading-tight md:whitespace-nowrap">
                                Operation control by zone
                            </h2>
                        </div>

                        {/* Right Column: Moving Glass Cards */}
                        <div
                            ref={rightColRef}
                            className="md:col-span-7 relative flex items-start justify-center md:justify-end h-screen h-[100dvh] overflow-visible pt-0"
                        >
                            <motion.div
                                style={{
                                    y: cardsY,
                                    opacity: cardsOpacity,
                                    pointerEvents: cardsPointerEvents,
                                }}
                                className="w-full max-w-lg lg:max-w-xl flex flex-col gap-8 md:gap-12 lg:gap-14 will-change-transform py-0"
                            >
                                {ZONE_CARDS.map((card, idx) => (
                                    <div
                                        key={card.id}
                                        ref={(el) => (cardRefs.current[idx] = el)}
                                        className="bg-white/90 md:bg-[#F8F9FA]/92 backdrop-blur-md rounded-2xl md:rounded-[30px] p-5 md:p-8 lg:p-10 shadow-xl shadow-slate-900/5 border border-white/80"
                                    >
                                        <h3 className="text-primary font-bold text-2xl md:text-3xl lg:text-[36px] leading-tight mb-3 md:mb-5">
                                            {card.title}
                                        </h3>
                                        <div className="space-y-2.5 md:space-y-4 text-primary font-normal">
                                            {card.paragraphs.map((p, pIdx) => (
                                                <p key={pIdx} className="text-base md:text-lg lg:text-[19px] leading-snug md:leading-tight">
                                                    {p}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
