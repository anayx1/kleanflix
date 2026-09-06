'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function PersonalWhySystemCleaningMatters() {
    return (
        <section className="relative w-full min-h-[640px] md:min-h-[720px] lg:h-screen lg:min-h-[700px] overflow-hidden flex items-center bg-black">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                defaultMuted
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                ref={(el) => {
                    if (el) {
                        el.muted = true;
                        el.defaultMuted = true;
                    }
                }}
                onCanPlay={(e) => {
                    e.currentTarget.muted = true;
                    e.currentTarget.play().catch(() => {});
                }}
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            >
                <source
                    src="https://res.cloudinary.com/spqd54wy/video/upload/v1788711238/sec512323.mp4"
                    type="video/mp4"
                />
                <source src="/personal-hygiene/sec512323.mp4" type="video/mp4" />
            </video>

            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none z-1" />

            {/* Content Container - Card positioned right center */}
            <div className="relative z-10 main-container px-6 md:px-12 w-full py-16 md:py-20 flex justify-end items-center">
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="bg-white rounded-xl p-8 md:p-12 lg:p-14 shadow-2xl max-w-xl lg:max-w-[650px] w-full"
                >
                    {/* Heading */}
                    <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-[44px] text-primary leading-[1.12] tracking-tight mb-4 md:mb-5">
                        Why system based<br />cleaning matters
                    </h2>

                    {/* Subtitle / Intro Text */}
                    <p className="text-primary-dark leading-tight text-base md:text-xl mb-4">
                        Personal hygiene environments fail not because cleaning is absent — but because systems are not followed consistently.
                    </p>

                    {/* Section Subtitle */}
                    <p className="text-base md:text-xl text-primary-dark mb-2">
                        Cleaning Must Be:
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-0.5 font-sans font-medium text-sm md:text-base lg:text-[17px] text-primary-dark mb-4">
                        <li className="flex items-center gap-2">
                            <span className="text-primary text-base select-none">•</span>
                            <span>Frequent-Use Formulated</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary text-base select-none">•</span>
                            <span>Skin-Compatible & Gentle</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary text-base select-none">•</span>
                            <span>Experience-Driven</span>
                        </li>
                    </ul>

                    {/* Concluding Paragraph */}
                    <p className="text-base md:text-xl text-primary-dark leading-tight mb-7 md:mb-6">
                        Only then can user comfort, hygiene consistency, and facility perception remain consistent.
                    </p>

                    {/* CTA Button */}
                    <div>
                        <Button
                            variant="pill-secondary"
                            showArrow={false}
                            href="/contact-us"
                            className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5"
                        >
                            SUBMIT REQUIREMENT
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
