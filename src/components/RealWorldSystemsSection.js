'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function RealWorldSystemsSection() {
    const [videoSrc, setVideoSrc] = useState(
        'https://res.cloudinary.com/spqd54wy/video/upload/v1788609629/sec2.mp4'
    );
    const [hasError, setHasError] = useState(false);

    const handleVideoError = () => {
        if (!hasError) {
            setHasError(true);
            setVideoSrc('/products/sec2.mp4');
        }
    };

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Top Statement Headline */}
                <motion.div

                >
                    <h2 className="text-primary font-semibold !text-2xl md:!text-3xl lg:!text-[40px] leading-[1.25] tracking-tight">
                        Kleanflix organizes systems around real-world usage conditions — not technical complexity.
                        <br />
                        You don’t need to think in formulations.
                    </h2>
                </motion.div>

                {/* Two-column Content & Video Grid */}
                <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    {/* Left Column: Information and Action */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="md:col-span-6 flex flex-col justify-center pl-10"
                    >
                        {/* Section Title */}
                        <h3 className="text-primary font-semibold text-3xl md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight">
                            You don’t need<br />
                            to understand<br />
                            all systems.
                        </h3>

                        {/* Subheading */}
                        <p className="!text-lg md:!text-xl font-medium text-primary mt-2 mb-6 md:mb-8">
                            Start with your need:
                        </p>

                        {/* Bulleted Need List */}
                        <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-primary font-medium !text-base md:!text-lg">
                            <li className="flex items-center gap-2">
                                <span className="text-primary select-none text-base leading-none">•</span>
                                <span>Daily Cleaning</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary select-none text-base leading-none">•</span>
                                <span>Kitchen hygiene</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary select-none text-base leading-none">•</span>
                                <span>Laundry</span>
                            </li>
                        </ul>

                        {/* Prompt */}
                        <p className="!text-base md:!text-lg font-medium text-primary mt-6 md:mt-8">
                            Not sure?
                        </p>

                        {/* Submit Requirement Action CTA */}
                        <div>
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/contact-us"
                                className="font-bold text-xs md:!text-sm px-6 py-2.5 md:px-7 md:py-3 mt-4"
                            >
                                SUBMIT REQUIREMENT
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Video Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="md:col-span-6 flex items-center justify-center"
                    >
                        <div className="w-full aspect-[16/11] rounded-xl overflow-hidden shadow-sm bg-slate-100 relative">
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
                                key={videoSrc}
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
                                onError={handleVideoError}
                                className="w-full h-full object-cover rounded-xl pointer-events-none"
                            >
                                <source src={videoSrc} type="video/mp4" onError={handleVideoError} />
                                <source src="/products/sec2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                </div>

                {/* Requirements / Customization Banner Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-16 md:mt-24 lg:mt-28 bg-primary rounded-xl py-12 md:py-16 lg:py-20 px-6 md:px-12 text-center text-white"
                >
                    <h3 className="font-semibold text-3xl md:text-4xl lg:text-[44px] text-white leading-tight">
                        If your requirement:
                    </h3>

                    <ul className="mt-4 md:mt-6 space-y-1 md:space-y-1.5 text-white/95 font-medium text-base md:text-lg lg:text-[20px]">
                        <li>• Spans Multiple Systems</li>
                        <li>• Needs Customization</li>
                        <li>• Involves Product Development Or Scale</li>
                    </ul>

                    <div className="mt-6 md:mt-8 flex justify-center">
                        <Button
                            variant="pill-secondary"
                            showArrow={false}
                            href="/contact-us"
                            className="font-bold text-xs md:!text-sm px-7 py-3 md:px-8 md:py-3.5"
                        >
                            SUBMIT REQUIREMENT
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
