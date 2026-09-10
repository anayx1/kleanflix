'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FacilityHighRiskAreasSection() {
    return (
        <section className="py-8 md:py-12 lg:py-14 bg-white">
            <div className="main-container px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-primary text-white rounded-2xl md:rounded-[28px] px-6 py-10 md:px-12 md:py-12 lg:py-14 text-center shadow-sm"
                >
                    <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-[36px] tracking-tight leading-tight mb-3 md:mb-4">
                        ! High-Risk Areas
                    </h2>

                    <div className="space-y-1 text-white font-normal leading-tight max-w-7xl mx-auto">
                        <p>
                            These zones require additional control due to contamination exposure.
                        </p>
                        <p>
                            Kleanfix integrates germ control systems to reduce risk and maintain hygiene standards.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
