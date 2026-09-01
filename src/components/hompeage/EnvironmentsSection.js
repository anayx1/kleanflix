'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const industries = [
    { id: '01', name: 'Hospitality', href: '/industries/hospitality' },
    { id: '02', name: 'Healthcare', href: '/industries/healthcare' },
    { id: '03', name: 'Facility Services', href: '/industries/facility-services' },
    { id: '04', name: 'Industrial Operations', href: '/industries/industrial-operations' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.215, 0.610, 0.355, 1.000] // easeOutCubic for smooth deceleration
        }
    }
};

export default function EnvironmentsSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-[#E9ECEF] overflow-hidden flex flex-col">
            <div className="main-container px-6 md:px-12">
                {/* Top Row: Heading and Paragraph on Left, White Card on Right */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 md:items-stretch items-start">

                    {/* Left Column: Heading + Paragraph + Button */}
                    <div className="md:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight"
                        >
                            Different environments require different system structures.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-medium text-primary-dark leading-relaxed max-w-2xl"
                        >
                            Systems are aligned based on application, usage conditions, and operational scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="pt-2"
                        >
                            <Button
                                href="/industries"
                                variant="pill-secondary"
                                size="md"
                                text="VIEW INDUSTRIES"
                                showArrow={false}
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Card with List Items */}
                    <div className="md:col-span-5 relative mt-16 md:mt-0 z-20 w-full h-full flex flex-col justify-end">
                        {/* Wrapper to shift both bottles and white card down on desktop to overlap bottom panels */}
                        <div className="relative w-full max-w-md md:ml-auto transform md:translate-y-16 lg:translate-y-24">
                            {/* Decorative Bottles overlapping the top right of the card */}
                            <div className="absolute -top-[75px] md:-top-[95px] lg:-top-[115px] -right-2 md:right-0 w-[140px] md:w-[180px] lg:w-[210px] z-30 pointer-events-none select-none">
                                <Image
                                    src="/homepage/sec4bottles.png"
                                    alt="Cleaning product bottles"
                                    width={210}
                                    height={119}
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* White Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.75, delay: 0.15 }}
                                className="bg-white rounded-3xl py-4 md:py-6 px-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10 overflow-hidden"
                            >
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="flex flex-col divide-y divide-slate-100"
                                >
                                    {industries.map((ind, idx) => (
                                        <motion.div
                                            key={ind.id}
                                            variants={itemVariants}
                                            className="w-full"
                                        >
                                            <Link
                                                href={ind.href}
                                                className="flex items-center justify-between py-4 md:py-5 px-6 md:px-8 group transition-all duration-300 hover:bg-secondary hover:translate-x-2 md:hover:translate-x-3 hover:shadow-md select-none"
                                                onMouseEnter={() => setHoveredIndex(idx)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                <div className="flex items-center gap-6 md:gap-8">
                                                    <span className="text-sm font-semibold text-primary/50 group-hover:text-white transition-colors duration-300 w-8 shrink-0">
                                                        {ind.id}
                                                    </span>
                                                    <span className="text-lg md:text-xl font-semibold text-primary-dark group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                                                        {ind.name}
                                                        <ArrowRight className="w-5 h-5 text-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                                                    </span>
                                                </div>

                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Row: Bottom panels single image */}
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative w-full select-none z-10 main-container pl-6 md:pl-12 pr-0 mt-8 md:mt-12 overflow-hidden"
            >
                <motion.div style={{ scale }} className="w-full h-auto origin-center">
                    <Image
                        src="/homepage/sec4.webp"
                        alt="System structures for different environments"
                        width={1296}
                        height={329}
                        sizes="100vw"
                        className="w-full h-auto rounded-l-full"
                        priority
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
