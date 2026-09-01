'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalExportSection() {
    return (
        <section className="py-12 md:py-15 bg-white relative overflow-hidden">
            <div className="main-container px-6 md:px-12">
                <div className="max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

                    {/* Left Column: Heading and Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="md:col-span-5 flex flex-col justify-center space-y-6"
                    >
                        <h2 className="font-sans font-bold text-3xl md:text-5xl lg:text-[56px] text-primary leading-[1.12] tracking-tight">
                            Global Export Presence
                        </h2>

                        <p className="font-sans font-medium text-primary-dark/80 text-lg md:text-xl leading-relaxed max-w-md">
                            Delivering quality products to international markets through a reliable and expanding export network.
                        </p>
                    </motion.div>

                    {/* Right Column: World Map Video Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="md:col-span-7 bg-[#F4F7FA] rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden shadow-sm flex items-center justify-center"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-contain rounded-2xl"
                        >
                            <source src="https://res.cloudinary.com/spqd54wy/video/upload/v1788197347/map.mp4" type="video/mp4" />
                            <source src="/homepage/map.mp4" type="video/mp4" />
                        </video>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
