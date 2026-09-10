'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HOSPITALITY_MAP_CARDS = [
    {
        id: 'rooms-washrooms',
        title: 'Rooms & Washrooms',
        description: 'Facility Care for daily cleaning, hygiene, and Odor control',
        imageSrc: '/hospitality/rooms.avif',
        imageAlt: 'Rooms & Washrooms - Facility Care',
        isMiddle: false,
    },
    {
        id: 'kitchens',
        title: 'Kitchens',
        description: 'Kitchen Care for grease removal, hygiene, and safe food-prep support',
        imageSrc: '/hospitality/kitchen.avif',
        imageAlt: 'Kitchens - Kitchen Care',
        isMiddle: true,
    },
    {
        id: 'laundry',
        title: 'Laundry',
        description: 'Laundry Care for linen cleaning, stain control, and fabric consistency',
        imageSrc: '/hospitality/laundry.avif',
        imageAlt: 'Laundry - Laundry Care',
        isMiddle: false,
    },
    {
        id: 'guest-amenities',
        title: 'Guest Amenities & Hygiene Touchpoints',
        description: 'Personal Care systems for hand hygiene and user-facing products',
        imageSrc: '/hospitality/guest.avif',
        imageAlt: 'Guest Amenities & Hygiene Touchpoints - Personal Care',
        isMiddle: false,
    },
    {
        id: 'public-areas',
        title: 'Public Areas',
        description: 'Facility Care for multi-surface consistency and presentation',
        imageSrc: '/hospitality/public-area.avif',
        imageAlt: 'Public Areas - Facility Care',
        isMiddle: true,
    },
    {
        id: 'conclusion-statement',
        isStatement: true,
        text: 'This converts hotel operations into one connected execution system — instead of multiple disconnected activities.',
        isMiddle: false,
    },
];

export default function HowKleanfixMapsHospitalitySection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-7xl mx-auto mb-10 md:mb-14 lg:mb-16"
                >
                    <h2 className="text-primary">
                        How kleanfix maps hospitality operations
                    </h2>
                    <p className="text-primary font-medium text-base md:text-lg lg:text-[20px] leading-relaxed mt-3 md:mt-4">
                        Kleanfix structures hotel operations into aligned systems:
                    </p>
                </motion.div>

                {/* 3-Column Staggered Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pb-0 md:pb-10">
                    {HOSPITALITY_MAP_CARDS.map((card, idx) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`bg-[#F7F7F7] rounded-[20px] md:rounded-[24px] p-6 md:p-7 lg:p-8 flex flex-col justify-between h-[270px] md:h-[290px] lg:h-[310px] shadow-xs transition-transform duration-300 hover:shadow-sm ${card.isMiddle ? 'md:translate-y-7 lg:translate-y-8' : ''
                                }`}
                        >
                            {card.isStatement ? (
                                /* Card 6: Concluding Text Card */
                                <div className="flex flex-col justify-center h-full px-2 md:px-3">
                                    <p className="text-primary-dark font-normal text-base md:text-lg lg:text-[20px] leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            ) : (
                                /* Cards 1-5: Product/Area Cards */
                                <>
                                    {/* Top Content: Title and Description */}
                                    <div>
                                        <h3 className="text-primary font-semibold text-lg md:text-xl lg:text-[22px] leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-primary font-normal text-xs md:text-sm lg:text-[15px] leading-relaxed mt-1 md:mt-1.5">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Bottom Content: 3D Illustration */}
                                    <div className="relative w-full h-[110px] md:h-[125px] lg:h-[135px] mt-auto">
                                        <Image
                                            src={card.imageSrc}
                                            alt={card.imageAlt}
                                            fill
                                            sizes="(max-width: 1001px) 100vw, 33vw"
                                            className="object-contain object-bottom"
                                        />
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
