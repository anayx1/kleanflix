'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OPERATING_ENVIRONMENTS = [
    {
        title: "Hotels & hospitality chains",
        imageSrc: "/clients/hotels-and-hospitality-chains.jpg",
        imageAlt: "Hotels and hospitality cleaning operations",
        href: "/industries/hospitality",
    },
    {
        title: "Hospitals & healthcare facilities",
        imageSrc: "/clients/hospital-healthcare-facilities.jpg",
        imageAlt: "Hospitals and healthcare hygiene operations",
        href: "/industries/healthcare",
    },
    {
        title: "Facility management companies",
        imageSrc: "/clients/facility-management-companies.jpg",
        imageAlt: "Facility management professional operations",
        href: "/industries/facility-services",
    },
    {
        title: "Industrial operations",
        imageSrc: "/clients/industrial-operations.jpg",
        imageAlt: "Industrial sanitization and cleaning operations",
        href: "/industries/industrial-operations",
    },
    {
        title: "OEM & private label brands",
        imageSrc: "/clients/oem.jpg",
        imageAlt: "OEM and private label custom bottled solutions",
        href: "/oem-private-label",
    },
    {
        title: "Export distributors & importers",
        imageSrc: "/clients/export-distributors.jpg",
        imageAlt: "Export distributors freight shipping operations",
        href: "/exports",
    },
];

// Stagger container animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

// Quick, smooth card entrance
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 28,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1], // Smooth cubic ease-out
        },
    },
};

export default function WhereSystemsOperateSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-2">
                {/* Header */}
                <div className="text-center space-y-2 md:space-y-3 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-tight"
                    >
                        Where systems operate
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug"
                    >
                        Kleanfix supports environments where structured execution is required:
                    </motion.p>
                </div>

                {/* 6 Grid Cards with staggered entrance */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[90%] mx-auto mt-10 md:mt-14"
                >
                    {OPERATING_ENVIRONMENTS.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                        >
                            <Link
                                href={item.href}
                                className="relative block overflow-hidden rounded-xl aspect-[1.12/1] md:aspect-[1.05/1] shadow-sm group cursor-pointer"
                            >
                                {/* Background Image - smoothly scales on hover only */}
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    fill
                                    sizes="(max-width: 1001px) 100vw, 33vw"
                                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40" />

                                {/* Content pinned to bottom left */}
                                <div className="absolute inset-0 p-5 md:p-6 lg:p-7 flex flex-col justify-end z-10">
                                    <p className="text-white text-lg md:text-xl lg:text-[22px] font-semibold tracking-wide drop-shadow-md leading-snug">
                                        {item.title}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 md:mt-14 text-center max-w-4xl mx-auto"
                >
                    <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug tracking-normal">
                        Each environment operates differently. The system is aligned accordingly.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
