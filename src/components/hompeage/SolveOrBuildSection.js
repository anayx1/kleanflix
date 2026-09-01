'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const divisions = [
    {
        title: "Cleaning & Hygiene Operations",
        tags: "Hospitality | Healthcare | Facility Services | Industrial Operations",
        description: "Professional systems for operational cleaning, hygiene, and maintenance:",
        image: "/homepage/sec21.jpg",
        minHeightClass: "min-h-[320px] md:min-h-[600px] lg:min-h-[650px] md:-mb-2",
        items: [
            "Facility Care",
            "Kitchen Care",
            "Laundry Care",
            "Carpet Care",
            "Marble Care",
            "Automotive Care",
            "Pet Care",
            "Personal Hygiene",
            "Germ Control"
        ]
    },
    {
        title: "Product / Brand Development",
        tags: "Formulation | Manufacturing | Private Label | Sensory Integration (Piselli)",
        description: "End-to-end support for creating and scaling your products:",
        image: "/homepage/sec22.jpg",
        minHeightClass: "min-h-[250px] md:min-h-[350px] lg:min-h-[600px]",
        items: [
            "OEM & Private Label Execution",
            "Building your own product line"
        ]
    }
];

export default function SolveOrBuildSection() {
    return (
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-[#F7F7F7] overflow-hidden">

            {/* Main Section Header — inside container */}
            <div className="main-container px-6 md:px-12">
                <div className='w-full justify-center items-center md:flex md:-ml-32'>

                    <div className="mb-16 md:mb-24 lg:mb-28 max-w-4xl">

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight mb-6"
                        >
                            What are you trying to solve or build?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-sans font-medium text-lg md:text-xl lg:text-[22px] text-primary-dark leading-relaxed"
                        >
                            This structure aligns formulation, production, and application into one controlled system — eliminating variation across batches, locations, and usage conditions.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Grid Rows — full width so images can reach the right edge */}
            <div className="flex flex-col space-y-0">

                {/* Division 1 & 2 Map */}
                {divisions.map((division, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-12 items-center">

                        {/* Left Column: Text & List Items — padded inside container bounds */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            className="md:col-span-7 flex flex-col px-6 md:px-12"
                        >
                            {/* Title */}
                            <h3 className="font-sans font-bold text-xl md:text-2xl lg:text-3xl text-primary leading-tight mb-2">
                                {division.title}
                            </h3>

                            {/* Tags */}
                            {division.tags && (
                                <p className="font-sans text-xs md:text-sm lg:text-base text-primary-dark/80 tracking-wide mb-1 leading-snug">
                                    {division.tags}
                                </p>
                            )}

                            {/* Description */}
                            {division.description && (
                                <p className="font-sans text-xs md:text-sm lg:text-base text-primary-dark/80 mb-6 leading-relaxed">
                                    {division.description}
                                </p>
                            )}

                            {/* List Items */}
                            <div className="flex flex-col space-y-2 md:space-y-3">
                                {division.items.map((item, itemIdx) => {
                                    const numStr = String(itemIdx + 1).padStart(2, '0');
                                    return (
                                        <Link
                                            key={itemIdx}
                                            href="#"
                                            className="group flex items-start py-1.5 text-primary-dark hover:text-secondary transition-colors duration-200 select-none"
                                        >
                                            {/* Consecutive Number */}
                                            <span className="w-20 md:w-24 text-xs md:text-sm font-sans text-primary-dark/50 group-hover:text-secondary transition-colors duration-200 mt-0.5">
                                                {numStr}
                                            </span>
                                            {/* Text & Arrow */}
                                            <span className="font-sans font-semibold text-base md:text-lg flex items-center gap-1.5 md:gap-2 leading-normal">
                                                {item}
                                                <ArrowRight className="w-4 h-4 text-primary-dark group-hover:text-secondary group-hover:translate-x-1.5 transition-all duration-200 shrink-0" />
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Right Column: Image 400px wide, right-aligned, full height visible */}
                        <div className={`md:col-span-5 flex justify-end ${division.minHeightClass}`}>
                            <Image
                                src={division.image}
                                alt={division.title}
                                width={400}
                                height={600}
                                className="w-full md:w-[400px] h-auto "
                                priority
                            />
                        </div>

                    </div>
                ))}

                {/* Row 3: Export Supply & Explore All Products combined */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center md:-mt-8">

                    {/* Left Column: Export Supply details + Explore All Products details */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="md:col-span-7 flex flex-col px-6 md:px-12"
                    >
                        {/* Block 1: Export Supply */}
                        <div className="flex flex-col mb-16 md:mb-24 justify-between">
                            <h3 className="font-sans font-bold text-xl md:text-2xl lg:text-3xl text-primary leading-tight mb-2">
                                Export Supply
                            </h3>
                            <p className="font-sans text-xs md:text-sm lg:text-base text-primary-dark/80 tracking-wide mb-1 leading-snug">
                                Bulk Supply | Repeat Orders | Multi-Market Delivery | Consistent Output | Exports
                            </p>
                            <p className="font-sans text-xs md:text-sm lg:text-base text-primary-dark/80 mb-6 leading-relaxed">
                                Reliable bulk supply and international fulfillment solutions:
                            </p>
                            <div className="flex flex-col">
                                <Link
                                    href="#"
                                    className="group flex items-start py-1.5 text-primary-dark hover:text-secondary transition-colors duration-200 select-none"
                                >
                                    <span className="w-20 md:w-24 text-xs md:text-sm font-sans text-primary-dark/50 group-hover:text-secondary transition-colors duration-200 mt-0.5">
                                        01
                                    </span>
                                    <span className="font-sans font-semibold text-base md:text-lg flex items-center gap-1.5 md:gap-2 leading-normal">
                                        View Exports
                                        <ArrowRight className="w-4 h-4 text-primary-dark group-hover:text-secondary group-hover:translate-x-1.5 transition-all duration-200 shrink-0" />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Block 2: Explore All Products */}
                        <div className="flex flex-col">
                            <h3 className="font-sans font-bold text-xl md:text-2xl lg:text-3xl text-primary leading-tight mb-6">
                                Explore All Products
                            </h3>
                            <div className="flex flex-col">
                                <Link
                                    href="#"
                                    className="group flex items-start py-1.5 text-primary-dark hover:text-secondary transition-colors duration-200 select-none"
                                >
                                    <span className="w-20 md:w-24 text-xs md:text-sm font-sans text-primary-dark/50 group-hover:text-secondary transition-colors duration-200 mt-0.5">
                                        01
                                    </span>
                                    <span className="font-sans font-semibold text-base md:text-lg flex items-center gap-1.5 md:gap-2 leading-normal">
                                        View All Products
                                        <ArrowRight className="w-4 h-4 text-primary-dark group-hover:text-secondary group-hover:translate-x-1.5 transition-all duration-200 shrink-0" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Export/Cargo Image 400px wide, right-aligned, full height visible */}
                    <div className="md:col-span-5 flex justify-end">
                        <Image
                            src="/homepage/sec23.jpg"
                            alt="Global cargo and export supply logistics"
                            width={400}
                            height={800}
                            className="w-full md:w-[400px] h-auto"
                            priority
                        />
                    </div>

                </div>

            </div>

            {/* Main Help CTA Banner Section */}
            <div className="main-container px-6 md:px-10 mt-16 md:mt-24 lg:mt-32 flex justify-center">
                <div className="relative bg-white rounded-md overflow-hidden max-w-[95%]">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center">

                        {/* Left Column: Text Content and Button */}
                        <div className="md:col-span-7 p-8 md:p-16 lg:p-20 flex flex-col items-start">
                            <h3 className="font-sans font-bold text-2xl md:text-4xl lg:text-[44px] text-primary leading-tight mb-4">
                                Need help choosing the right system?
                            </h3>
                            <p className="font-sans text-base md:text-lg lg:text-xl text-primary-dark/80 mb-8 max-w-xl">
                                Not sure where to start or need a customized recommendation?
                            </p>
                            <Link
                                href="/contact-us"
                                className="bg-secondary text-white font-bold uppercase tracking-wider text-xs md:text-sm px-8 py-3.5 md:px-10 md:py-4.5 rounded-full hover:bg-[#d96610] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] select-none"
                            >
                                SUBMIT REQUIREMENT
                            </Link>
                        </div>

                        {/* Right Column: Image of pointing woman */}
                        <div className="md:col-span-5 relative self-stretch min-h-[300px] md:min-h-0 flex items-end justify-end">
                            <div className="relative w-full h-[320px] md:h-[400px] lg:h-[430px]">
                                <Image
                                    src="/homepage/woman.avif"
                                    alt="Need help choosing the right system"
                                    fill
                                    sizes="(max-width: 1001px) 100vw, 30vw"
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}
