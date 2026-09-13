'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CertificationsValidationSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-[98%] mx-auto">
                    {/* Left: Certifications Stamping Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative aspect-[4/3] md:aspect-[1.12/1] w-full rounded-xl overflow-hidden shadow-xs"
                    >
                        <Image
                            src="/certifications-compliance/kleanfix-operates-with-certifications.avif"
                            alt="Kleanfix operates with certifications that support structured processes"
                            fill
                            sizes="(max-width: 1001px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </motion.div>

                    {/* Right: Validation Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6 text-primary-dark"
                    >
                        <p className="text-primary-dark text-xl md:text-2xl lg:text-[26px] font-medium leading-snug">
                            Kleanfix operates with certifications that support structured processes and controlled execution.
                        </p>

                        <div className="">
                            <p className="text-primary-dark text-xl md:text-2xl lg:text-[26px] font-medium leading-snug">
                                These certifications validate:
                            </p>
                            <div className="text-primary-dark text-xl md:text-2xl lg:text-[26px] font-normal leading-relaxed">
                                <p>Process Discipline</p>
                                <p>Quality Management</p>
                                <p>Consistency Across Production Cycles</p>
                            </div>
                        </div>

                        <p className="text-primary-dark text-xl md:text-2xl lg:text-[26px] font-medium leading-relaxed">
                            Each certification is aligned to operational requirements — not just documentation.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
