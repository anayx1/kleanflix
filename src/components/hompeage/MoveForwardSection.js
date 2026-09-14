'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

const steps = [
    { number: 1, text: 'Identify your requirement' },
    { number: 2, text: 'We map it to the right system' },
    { number: 3, text: 'You get a structured solution' },
];

export default function MoveForwardSection() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="main-container px-6 md:px-12">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="font-sans font-semibold text-3xl md:text-5xl lg:text-[56px] text-primary tracking-tight leading-[1.12]">
                        Here’s how you can move forward
                    </h2>
                </motion.div>

                {/* Steps Flow Container */}
                <div className="relative max-w-7xl mx-auto mb-16 md:mb-24">

                    {/* Horizontal dotted connector line (desktop only) */}
                    <div className="absolute top-5 left-[15%] right-[15%] h-[1px] border-t-2 border-dotted border-primary/20 z-0 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Circle Number Badge */}
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F4F7FA] text-[#1E6BB8] font-sans font-semibold text-lg border border-[#1E6BB8]/10 shadow-sm mb-6">
                                    {step.number}
                                </div>

                                {/* Step Label */}
                                <p className="text-primary-dark text-lg md:text-xl w-auto leading-tight">
                                    {step.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Submit Requirement Action CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Button variant="pill-secondary" showArrow={false} href="/contact-us" className="font-semibold">
                        SUBMIT REQUIREMENT
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
