'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function IndustryOperationControlByZoneSection({
    backgroundImage,
    backgroundAlt = 'Operation control background',
    title = 'Operation control by zone',
    cards = [],
    className = '',
}) {
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
            if (!cardRefs.current || cardRefs.current.length < cards.length) return;
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

            if (newTargets.length === cards.length && newTargets.some((val) => val !== 0)) {
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
    }, [cards.length]);

    const cardCount = cards.length;

    // Dynamic scroll choreography:
    // Card 0 is immediately active & centered at the start of the section (eliminates empty 1st scroll).
    // Scrolling smoothly transitions between remaining zone cards.
    const cardsY = useTransform(scrollYProgress, (v) => {
        if (cardCount <= 1) return targets[0] ?? 0;

        const totalTransitions = cardCount - 1;
        const usableRange = 0.90; // 0.00 to 0.90 for card transitions, 0.90 to 1.00 rests on final card
        const step = usableRange / totalTransitions;

        for (let i = 0; i < totalTransitions; i++) {
            const startV = i * step;
            const endV = (i + 1) * step;
            if (v < endV) {
                const t = Math.max(0, Math.min(1, (v - startV) / (endV - startV)));
                const from = targets[i] ?? 0;
                const to = targets[i + 1] ?? 0;
                return from + (to - from) * t;
            }
        }

        return targets[cardCount - 1] ?? 0;
    });

    const sectionHeightClass =
        cardCount <= 3
            ? 'min-h-[200vh] md:min-h-[230vh]'
            : 'min-h-[270vh] md:min-h-[300vh]';

    return (
        <section
            ref={sectionRef}
            className={`relative ${sectionHeightClass} w-full ${className}`}
        >
            {/* Pinned Sticky Viewport */}
            <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden">
                {/* Fixed Background Image Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src={backgroundImage}
                        alt={backgroundAlt}
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
                                {title}
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
                                }}
                                className="w-full max-w-lg lg:max-w-xl zone-cards-container flex flex-col gap-8 md:gap-12 lg:gap-14 will-change-transform py-0"
                            >
                                {cards.map((card, idx) => (
                                    <div
                                        key={card.id || idx}
                                        ref={(el) => (cardRefs.current[idx] = el)}
                                        className="bg-white/90 md:bg-[#F8F9FA]/92 backdrop-blur-md rounded-2xl md:rounded-[30px] p-5 md:p-8 lg:p-10 shadow-xl shadow-slate-900/5 border border-white/80"
                                    >
                                        <h3 className="text-primary font-bold text-2xl md:text-3xl lg:text-[36px] leading-tight mb-3 md:mb-5">
                                            {card.title}
                                        </h3>
                                        <div className="space-y-2.5 md:space-y-4 text-primary-dark font-normal">
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
