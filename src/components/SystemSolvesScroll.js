'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from '@/components/Button';

/**
 * Reusable SystemSolvesScroll Component
 * Pinned viewport horizontal scroll-reveal slider driven by vertical scroll.
 *
 * @param {Object} props
 * @param {Array<Object>} [props.slides=[]] - Array of slide objects passed dynamically
 * @param {string} [props.heightClass="h-[250vh]"] - Total vertical scroll track height
 * @param {string} [props.className=""] - Additional custom classes for wrapper section
 */
export default function SystemSolvesScroll({
    slides = [],
    heightClass = "h-[250vh]",
    className = ""
}) {
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const totalSlides = slides?.length || 0;

    // Discrete slide change effect on vertical scroll
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (totalSlides <= 1) {
            setActiveSlide(0);
            return;
        }

        if (totalSlides === 3) {
            // Fine-tuned thresholds for 3 slides with resting dwell on final slide
            if (latest < 0.28) {
                setActiveSlide(0);
            } else if (latest >= 0.28 && latest < 0.62) {
                setActiveSlide(1);
            } else {
                setActiveSlide(2);
            }
        } else {
            // Dynamic threshold calculation for N slides
            const step = 0.72 / (totalSlides - 1);
            const index = Math.min(totalSlides - 1, Math.floor(latest / step));
            setActiveSlide(index);
        }
    });

    return (
        <section
            ref={containerRef}
            className={`relative ${heightClass} bg-white ${className}`}
        >
            {/* Sticky viewport pinned to top during vertical scroll */}
            <div className="sticky top-0 h-screen h-[120dvh] w-full overflow-hidden flex items-center bg-white">
                {/* Horizontal sliding track with smooth slide-change transition */}
                <motion.div
                    className="flex flex-nowrap w-full h-full will-change-transform"
                    animate={{ x: `-${activeSlide * 100}%` }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    {slides.map((slide, idx) => {
                        const headingText = slide.title || slide.heading || "";
                        const subText = slide.subtitle || slide.subheading;
                        const bullets = slide.items || slide.points || [];
                        const footer = slide.footerText || slide.description;
                        const ctaConfig = slide.cta || (slide.ctaText ? {
                            text: slide.ctaText,
                            href: slide.ctaHref || "/contact-us",
                            variant: slide.ctaVariant || "pill-secondary",
                            showArrow: slide.ctaShowArrow ?? true
                        } : null);

                        const imgSrc = slide.imageSrc || slide.image?.src || (typeof slide.image === 'string' ? slide.image : '');
                        const imgAlt = slide.imageAlt || slide.image?.alt || (typeof headingText === 'string' ? headingText : `Slide ${idx + 1}`);

                        const isLargeTitle = slide.isLargeTitle || (idx === 0 && !slide.headingClassName);

                        return (
                            <div
                                key={idx}
                                className="w-full min-w-full h-full flex-shrink-0 flex items-center justify-center px-6 md:px-12 py-10"
                            >
                                <div className="main-container w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                                        {/* Left Column: Typography */}
                                        <div className="md:col-span-5 flex flex-col justify-center">
                                            {/* Main Slide Title */}
                                            <h2
                                                className={`${slide.headingClassName ||
                                                    (isLargeTitle
                                                        ? "font-semibold text-3xl md:text-5xl lg:text-[50px] text-primary    mb-4 md:mb-6"
                                                        : "font-medium text-2xl md:text-3xl lg:text-[34px] text-primary leading-snug mb-4 md:mb-5")
                                                    }`}
                                            >
                                                {typeof headingText === 'string' && headingText.includes('\n') ? (
                                                    headingText.split('\n').map((line, i, arr) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            {i < arr.length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))
                                                ) : (
                                                    headingText
                                                )}
                                            </h2>

                                            {/* Subtitle / Intro Text */}
                                            {subText && (
                                                <p className="font-sans font-medium text-base md:text-xl lg:text-[22px] text-primary leading-tight mb-5 md:mb-6">
                                                    {typeof subText === 'string' && subText.includes('\n') ? (
                                                        subText.split('\n').map((line, i, arr) => (
                                                            <React.Fragment key={i}>
                                                                {line}
                                                                {i < arr.length - 1 && <br className="hidden md:block" />}
                                                            </React.Fragment>
                                                        ))
                                                    ) : (
                                                        subText
                                                    )}
                                                </p>
                                            )}

                                            {/* Bullet Points */}
                                            {bullets.length > 0 && (
                                                <ul className={`space-y-0 font-sans font-medium text-base md:text-lg lg:text-[20px] text-primary ${footer || ctaConfig ? 'mb-2' : ''}`}>
                                                    {bullets.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="flex items-center gap-2.5">
                                                            <span className="text-primary text-base select-none">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Concluding / Footer Paragraph */}
                                            {footer && (
                                                <p className="font-sans font-medium text-base md:text-xl lg:text-[22px] text-primary leading-relaxed mb-6 md:mb-8">
                                                    {typeof footer === 'string' && footer.includes('\n') ? (
                                                        footer.split('\n').map((line, i, arr) => (
                                                            <React.Fragment key={i}>
                                                                {line}
                                                                {i < arr.length - 1 && <br className="hidden md:block" />}
                                                            </React.Fragment>
                                                        ))
                                                    ) : (
                                                        footer
                                                    )}
                                                </p>
                                            )}

                                            {/* Optional CTA Button */}
                                            {ctaConfig && (
                                                <div>
                                                    <Button
                                                        variant={ctaConfig.variant || "pill-secondary"}
                                                        showArrow={ctaConfig.showArrow ?? true}
                                                        href={ctaConfig.href || "/how-it-works"}
                                                        className="font-semibold text-xs md:text-sm px-6 py-3 md:px-8 md:py-3.5 gap-2.5"
                                                    >
                                                        {ctaConfig.text}
                                                    </Button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column: Slide Image */}
                                        <div className="md:col-span-7">
                                            <div className="relative w-full h-[280px] md:h-[460px] lg:h-[540px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm">
                                                {imgSrc && (
                                                    <Image
                                                        src={imgSrc}
                                                        alt={imgAlt}
                                                        fill
                                                        priority={idx === 0}
                                                        sizes="(max-width: 1000px) 100vw, 60vw"
                                                        className="object-cover rounded-[24px] md:rounded-[32px]"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
