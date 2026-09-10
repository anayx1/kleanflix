'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

const INDUSTRIES_DATA = [
    {
        id: 'hospitality',
        title: 'Hospitality',
        subtitle: 'From guest rooms to kitchens to laundry operations, hospitality runs on consistency.',
        inRealityLabel: 'In reality:',
        descriptions: [
            'Different staff, different usage patterns, and fast turnaround cycles create variation from room to room.',
            'Kleanfix structures cleaning and hygiene systems so output remains consistent across every touchpoint — not dependent on execution variability.',
        ],
        alignedSystemsLabel: 'Aligned systems:',
        functionalSystemsLabel: 'Functional systems:',
        systems: [
            'Facility Care',
            'Laundry Care',
            'Kitchen Care',
            'Personal Hygiene',
        ],
        result: 'A more consistent guest experience, faster operations, and stronger hygiene perception.',
        ctaText: 'VIEW HOSPITALITY RELEVANT SYSTEMS',
        ctaHref: '/industries/hospitality',
        image: '/industries/hospitality.avif',
        imageAlt: 'Hospitality commercial kitchen and hygiene setup',
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        subtitle: 'Healthcare environments operate under pressure — where hygiene is not optional.',
        inRealityLabel: null,
        descriptions: [
            'High-touch surfaces, infection risk, and strict protocols leave no room for variation.',
            'Kleanfix systems are structured to maintain consistent sanitization control across critical areas — even under continuous usage conditions.',
        ],
        alignedSystemsLabel: 'Aligned systems:',
        functionalSystemsLabel: 'Functional systems:',
        systems: [
            'Germ Control',
            'Facility Care',
            'Laundry Care',
        ],
        result: 'Safer environments with better control over hygiene outcomes.',
        ctaText: 'VIEW HEALTHCARE RELEVANT SYSTEMS',
        ctaHref: '/industries/healthcare',
        image: '/industries/healthcare.jpg',
        imageAlt: 'Healthcare hospital room sanitization and equipment',
    },
    {
        id: 'facility-management',
        title: 'Facility management',
        subtitle: 'Managing multiple sites means managing inconsistency.',
        inRealityLabel: null,
        descriptions: [
            'Different teams, different surfaces, different usage conditions — all leading to unpredictable output.',
            'Kleanfix brings structure to these operations by standardizing systems across locations and teams.',
        ],
        alignedSystemsLabel: 'Aligned systems:',
        functionalSystemsLabel: 'Functional systems:',
        systems: [
            'Facility Care',
            'Carpet Care',
            'Marble Care',
            'Germ Control',
        ],
        result: 'More predictable performance across sites and reduced dependency on execution variability.',
        ctaText: 'VIEW FACILITY MANAGEMENT RELEVANT SYSTEMS',
        ctaHref: '/industries/facility-services',
        image: '/industries/facility-management.avif',
        imageAlt: 'Facility management surface cleaning and maintenance',
    },
    {
        id: 'industrial-operations',
        title: 'Industrial operations',
        subtitle: 'Industrial environments demand performance under pressure.',
        inRealityLabel: null,
        descriptions: [
            'Grease, residue, continuous usage, and downtime risks make standard solutions unreliable.',
            'Kleanfix systems are built for these conditions — designed to perform consistently under operational pressure without disruption.',
        ],
        alignedSystemsLabel: 'Aligned systems:',
        functionalSystemsLabel: 'Functional systems:',
        systems: [
            'Industrial-grade Facility Care',
            'Degreasing systems',
            'Scale removal systems',
            'Maintenance-focused cleaning solutions',
        ],
        result: 'Improved operational cleanliness with minimal disruption.',
        ctaText: 'VIEW INDUSTRIAL CLEANING RELEVANT SYSTEMS',
        ctaHref: '/industries/industrial-operations',
        image: '/industries/industrial-operations.avif',
        imageAlt: 'Industrial operations equipment degreasing and maintenance',
    },
];

export default function IndustryBreakdownSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="space-y-14 md:space-y-20 lg:space-y-24">
                    {INDUSTRIES_DATA.map((item, index) => (
                        <div
                            key={item.id}
                            id={item.id}
                            className="scroll-mt-24"
                        >
                            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10 md:gap-14 lg:gap-20">
                                {/* Left Column: Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex-1 max-w-2xl flex flex-col justify-between space-y-6"
                                >
                                    {/* Title & Subtitle */}
                                    <div className="space-y-3">
                                        <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[52px] tracking-tight leading-tight">
                                            {item.title}
                                        </h2>
                                        <p className="text-primary-dark font-normal !text-base md:!text-lg lg:!text-[20px] leading-relaxed">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    {/* In Reality & Descriptions */}
                                    <div className="space-y-3 md:space-y-3.5 leading-tight">
                                        {item.inRealityLabel && (
                                            <p className="font-semibold text-primary-dark !text-base md:!text-lg lg:!text-[20px]">
                                                {item.inRealityLabel}
                                            </p>
                                        )}
                                        {item.descriptions.map((desc, i) => (
                                            <p key={i} className="font-normal text-primary-dark !text-base md:!text-lg lg:!text-[20px]">
                                                {desc}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Systems Section */}
                                    <div className="space-y-2">
                                        <p className="text-primary-dark font-normal !text-base md:!text-lg lg:!text-[20px]">
                                            {item.alignedSystemsLabel}
                                        </p>
                                        <p className="text-primary-dark font-semibold !text-base md:!text-lg lg:!text-[20px]">
                                            {item.functionalSystemsLabel}
                                        </p>
                                        <div className="flex flex-wrap gap-2 md:gap-3 pt-1">
                                            {item.systems.map((sys) => (
                                                <span
                                                    key={sys}
                                                    className="inline-flex items-center px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-[#DCE8F3] text-primary font-medium text-xs md:text-sm lg:text-[15px] select-none"
                                                >
                                                    {sys}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Result Section */}
                                    <div className="space-y-1 md:space-y-1.5 leading-relaxed">
                                        <p className="font-semibold text-primary-dark !text-base md:!text-lg lg:!text-[20px]">
                                            Result:
                                        </p>
                                        <p className="font-normal text-primary-dark !text-base md:!text-lg lg:!text-[20px]">
                                            {item.result}
                                        </p>
                                    </div>

                                    {/* Action CTA Button */}
                                    <div className="pt-2 md:pt-4">
                                        <Button
                                            variant="pill-secondary"
                                            showArrow={false}
                                            href={item.ctaHref}
                                            className="font-bold text-xs md:text-sm px-7 md:px-8 py-3 md:py-3.5 uppercase tracking-wide"
                                        >
                                            {item.ctaText}
                                        </Button>
                                    </div>
                                </motion.div>

                                {/* Right Column: Responsive Image Animations */}
                                <div className="w-full md:w-[380px] lg:w-[440px] xl:w-[480px] shrink-0 self-center md:self-stretch flex items-center justify-center md:justify-end">
                                    {/* Desktop: Top-to-Bottom Unmasking Reveal Effect */}
                                    <div className="hidden md:block relative w-full aspect-[4/4.2] rounded-[28px] overflow-hidden shadow-md bg-[#EBF1F7]">
                                        <motion.div
                                            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                                            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                                            viewport={{ once: true, margin: '-40px' }}
                                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            <motion.div
                                                initial={{ y: -35, scale: 1.08 }}
                                                whileInView={{ y: 0, scale: 1 }}
                                                viewport={{ once: true, margin: '-40px' }}
                                                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                                                className="relative w-full h-full"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.imageAlt}
                                                    fill
                                                    sizes="480px"
                                                    className="object-cover object-center"
                                                    priority={index === 0}
                                                />
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    {/* Mobile: Smooth Top-to-Bottom Enter Animation */}
                                    <div className="block md:hidden w-full">
                                        <motion.div
                                            initial={{ opacity: 0, y: -32 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.imageAlt}
                                                fill
                                                sizes="100vw"
                                                className="object-cover object-center"
                                                priority={index === 0}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Divider between items */}
                            {index < INDUSTRIES_DATA.length - 1 && (
                                <div className="w-full border-t border-gray-200/70 mt-14 md:mt-20 lg:mt-24" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
