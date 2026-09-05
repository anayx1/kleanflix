'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

/**
 * OEM / Scaling Support Section Component
 *
 * Renders a centered section with an animated heading and a two-tone rounded card.
 *
 * @param {Object} props
 * @param {string} [props.title="OEM / Scaling support"] - Section heading
 * @param {string} [props.introText="For large-scale operations, distributors, or brands, this system can be aligned to support:"] - Top card description
 * @param {Array<string>} [props.features] - Features list shown separated by pipes
 * @param {string} [props.footerText="This enables consistent product performance across markets and at scale."] - Bottom card description
 * @param {string} [props.ctaText="SUBMIT REQUIREMENT"] - Button label
 * @param {string} [props.href="/contact-us"] - Button destination link
 * @param {string} [props.className=""] - Additional container class names
 */
export default function OEMScalingSupportSection({
    title = "OEM / Scaling support",
    introText = "For large-scale operations, distributors, or brands, this system can be aligned to support:",
    features = [
        "OEM / Private Label Development",
        "Bulk & Institutional Supply",
        "Export-Ready Product Structures",
    ],
    footerText = "This enables consistent product performance across markets and at scale.",
    ctaText = "SUBMIT REQUIREMENT",
    href = "/contact-us",
    className = "",
}) {
    return (
        <section className={`py-16 bg-white ${className}`}>
            <div className="main-container px-6 md:px-12">
                {/* Heading with smooth decent-duration slide-up fade-in animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.85,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-semibold text-3xl md:text-5xl lg:text-[48px] text-primary text-center tracking-tight mb-10 md:mb-14"
                >
                    {title}
                </motion.h2>

                {/* Two-tone Card Container */}
                <div className="max-w-4xl lg:max-w-[960px] mx-auto rounded-xl overflow-hidden border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                    {/* Top Half: Off-white background with support scope */}
                    <div className="bg-[#F4F6F8] px-6 py-8 md:px-12 md:py-10 lg:px-14 lg:py-12 text-center">
                        <p className="font-medium text-sm md:text-base lg:text-[17px] text-primary-dark leading-relaxed mb-3 md:mb-4">
                            {introText}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-2.5 md:gap-x-3 gap-y-1 font-medium text-sm md:text-base lg:text-[17px] text-primary">
                            {features.map((feature, idx) => (
                                <React.Fragment key={feature}>
                                    <span>{feature}</span>
                                    {idx < features.length - 1 && (
                                        <span className="text-primary/50 select-none hidden sm:inline">|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Half: Soft blue-gray background with summary and button */}
                    <div className="bg-[#D7E4EE] px-6 py-8 md:px-12 md:py-10 text-center flex flex-col items-center justify-center">
                        <p className="font-medium text-sm md:text-base lg:text-[17px] text-primary-dark leading-relaxed mb-6 md:mb-7">
                            {footerText}
                        </p>
                        <Button
                            variant="pill-secondary"
                            href={href}
                            showArrow={false}
                            className="font-bold text-xs md:text-sm uppercase tracking-wider px-8 py-3.5 md:px-9 md:py-4 shadow-md hover:shadow-lg"
                        >
                            {ctaText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
