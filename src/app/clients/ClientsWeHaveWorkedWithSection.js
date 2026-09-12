'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Exactly maps to the 6 rows x 9 columns layout from the reference
// Odd rows (1, 3, 5): Cards at columns 1, 3, 7, 9
// Even rows (2, 4, 6): Cards at columns 2, 4, 5, 6, 8
const GRID_ITEMS = [
    // Row 1
    { col: 1, id: 'surya', src: '/clients/client-logos/surya.webp', alt: 'The Suryaa' },
    { col: 2, empty: true, id: 'e-1-2' },
    { col: 3, id: 'forties', src: '/clients/client-logos/forties.webp', alt: 'Fortis Healthcare' },
    { col: 4, empty: true, id: 'e-1-4' },
    { col: 5, empty: true, id: 'e-1-5' },
    { col: 6, empty: true, id: 'e-1-6' },
    { col: 7, id: 'iss', src: '/clients/client-logos/iss.webp', alt: 'ISS Facility Services' },
    { col: 8, empty: true, id: 'e-1-8' },
    { col: 9, id: 'indian-railways', src: '/clients/client-logos/indian-railways.webp', alt: 'Indian Railways' },

    // Row 2
    { col: 1, empty: true, id: 'e-2-1' },
    { col: 2, id: 'moolchand', src: '/clients/client-logos/moolchand.webp', alt: 'Moolchand Hospital' },
    { col: 3, empty: true, id: 'e-2-3' },
    { col: 4, id: 'licious', src: '/clients/client-logos/licious.webp', alt: 'Licious' },
    { col: 5, id: 'naryana', src: '/clients/client-logos/naryana.webp', alt: 'Narayana Health' },
    { col: 6, id: 'delhimetro', src: '/clients/client-logos/delhimetro.webp', alt: 'Delhi Metro' },
    { col: 7, empty: true, id: 'e-2-7' },
    { col: 8, id: 'days-hotel', src: '/clients/client-logos/days-hotel.webp', alt: 'Days Hotel' },
    { col: 9, empty: true, id: 'e-2-9' },

    // Row 3
    { col: 1, id: 'dhaba', src: '/clients/client-logos/dhaba.avif', alt: 'Dhaba' },
    { col: 2, empty: true, id: 'e-3-2' },
    { col: 3, id: 'world-of-hayatt', src: '/clients/client-logos/world-of-hayatt.webp', alt: 'World of Hyatt' },
    { col: 4, empty: true, id: 'e-3-4' },
    { col: 5, empty: true, id: 'e-3-5' },
    { col: 6, empty: true, id: 'e-3-6' },
    { col: 7, id: 'the-altius', src: '/clients/client-logos/the-altius.webp', alt: 'The Altius' },
    { col: 8, empty: true, id: 'e-3-8' },
    { col: 9, id: 'bikanervala', src: '/clients/client-logos/bikanervala.webp', alt: 'Bikanervala' },

    // Row 4
    { col: 1, empty: true, id: 'e-4-1' },
    { col: 2, id: 'burgrill', src: '/clients/client-logos/burgrill.webp', alt: 'Burgrill' },
    { col: 3, empty: true, id: 'e-4-3' },
    { col: 4, id: '60', src: '/clients/client-logos/60.webp', alt: '60th Anniversary' },
    { col: 5, id: 'speedy-chow', src: '/clients/client-logos/speedy-chow.webp', alt: 'Speedy Chow' },
    { col: 6, id: 'irene', src: '/clients/client-logos/irene.webp', alt: 'Irene Hospital' },
    { col: 7, empty: true, id: 'e-4-7' },
    { col: 8, id: 'the-melting-pot', src: '/clients/client-logos/the-melting-pot.webp', alt: 'The Melting Pot' },
    { col: 9, empty: true, id: 'e-4-9' },

    // Row 5
    { col: 1, id: 'daawat', src: '/clients/client-logos/daawat.webp', alt: 'Daawat' },
    { col: 2, empty: true, id: 'e-5-2' },
    { col: 3, id: 'aarvy', src: '/clients/client-logos/aarvy.webp', alt: 'Aarvy Healthcare' },
    { col: 4, empty: true, id: 'e-5-4' },
    { col: 5, empty: true, id: 'e-5-5' },
    { col: 6, empty: true, id: 'e-5-6' },
    { col: 7, id: 'foxtrot', src: '/clients/client-logos/foxtrot.webp', alt: 'Foxtrot' },
    { col: 8, empty: true, id: 'e-5-8' },
    { col: 9, id: 'pratiksha', src: '/clients/client-logos/pratiksha.webp', alt: 'Pratiksha Hospital' },

    // Row 6
    { col: 1, empty: true, id: 'e-6-1' },
    { col: 2, id: 'sly-granny', src: '/clients/client-logos/sly-granny.webp', alt: 'Sly Granny' },
    { col: 3, empty: true, id: 'e-6-3' },
    { col: 4, id: 'aakash-hospital', src: '/clients/client-logos/aakash-hospital.webp', alt: 'Aakash Hospital' },
    { col: 5, id: 'best-western', src: '/clients/client-logos/best-western.webp', alt: 'Best Western' },
    { col: 6, id: 'tanishq', src: '/clients/client-logos/tanishq.webp', alt: 'Tanishq' },
    { col: 7, empty: true, id: 'e-6-7' },
    { col: 8, id: 'mamagoto', src: '/clients/client-logos/mamagoto.webp', alt: 'Mamagoto' },
    { col: 9, empty: true, id: 'e-6-9' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function ClientsWeHaveWorkedWithSection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-2">
                <div className="max-w-[95%] mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14 lg:mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-tight"
                        >
                            Clients we have worked with
                        </motion.h2>
                    </div>

                    {/* Staggered Logo Grid */}
                    {/* On desktop (md: 1001px+): exact 9-column scattered grid matching reference */}
                    {/* On mobile (< 1001px): responsive 3-column grid showing all 27 logos */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-3 md:grid-cols-9 gap-3 md:gap-3.5 lg:gap-4 items-center"
                    >
                        {GRID_ITEMS.map((item) => {
                            if (item.empty) {
                                return (
                                    <div
                                        key={item.id}
                                        aria-hidden="true"
                                        className="hidden md:block aspect-square pointer-events-none"
                                    />
                                );
                            }

                            return (
                                <motion.div
                                    key={item.id}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-[#F7F7F7] rounded-xl aspect-square p-2.5 md:p-3 lg:p-4 flex items-center justify-center relative overflow-hidden shadow-xs hover:shadow-sm hover:bg-[#F0F0F0] transition-colors"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 1001px) 33vw, 11vw"
                                            className="object-contain p-1.5 md:p-2"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
