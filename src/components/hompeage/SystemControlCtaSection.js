'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function SystemControlCtaSection() {
    return (
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[120dvh] flex items-end justify-center overflow-hidden bg-black pb-12 md:pb-20 lg:pb-24">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/spqd54wy/video/upload/v1788205188/lastsec.mp4" type="video/mp4" />
                <source src="/homepage/lastsec.mp4" type="video/mp4" />
            </video>

            {/* Dark Bottom Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

            {/* Overlaid Content - Centered at Bottom */}
            <div className="relative z-20 main-container px-6 md:px-12 w-full text-center flex flex-col items-center justify-end">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto space-y-6 md:space-y-8 flex flex-col items-start text-left"
                >
                    {/* Main Heading */}
                    <h2 className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] !text-white leading-[1.12] tracking-tight text-left">
                        If consistency matters to your business, you don’t need more suppliers. <br className="hidden md:block" />
                        You need control over the system.
                    </h2>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <Button variant="pill-secondary" showArrow={false} href="/submit-requirement" className="font-medium">
                            SUBMIT REQUIREMENT
                        </Button>
                    </div>

                    {/* Bottom Disclaimer Paragraph */}
                    <p className="font-sans font-medium text-white text-sm md:text-base lg:text-lg leading-relaxed pt-2 text-left mx-auto">
                        Once submitted, your requirement is mapped to the right system based on application, scale, and performance needs — before any recommendation is made.
                    </p>
                </motion.div>
            </div>

        </section>
    );
}
