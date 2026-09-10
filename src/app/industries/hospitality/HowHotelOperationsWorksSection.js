'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HowHotelOperationsWorksSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Column: Image Mosaic */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 w-full"
                    >
                        <div className="relative w-full aspect-[4/3.8] md:aspect-[4/4.2] lg:aspect-[4/4.1] rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm">
                            <Image
                                src="/hospitality/how-hotel-operations-works.avif"
                                alt="How hotel operations actually works"
                                fill
                                sizes="(max-width: 1001px) 100vw, 50vw"
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-6 md:space-y-7 text-primary max-w-xl"
                    >
                        {/* Heading */}
                        <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.15]">
                            How hotel operations<br />actually works
                        </h2>

                        {/* Block 1 */}
                        <div className="space-y-1 text-base md:text-lg lg:text-[20px] leading-relaxed text-primary-dark">
                            <p className="font-normal text-inherit">
                                Hotels do not run on isolated products.
                            </p>
                            <p className="font-normal text-inherit">
                                They run on connected processes:
                            </p>
                            <ul className="space-y-0 pl-1 font-normal text-inherit">
                                <li className="leading-relaxed text-primary-dark">• Room turnover affects guest perception.</li>
                                <li className="leading-relaxed text-primary-dark">• Washroom hygiene affects trust.</li>
                                <li className="leading-relaxed text-primary-dark">• Laundry quality affects comfort.</li>
                                <li className="leading-relaxed text-primary-dark">• Kitchen hygiene affects safety.</li>
                                <li className="leading-relaxed text-primary-dark">• Public area maintenance affects presentation.</li>
                            </ul>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-1 text-base md:text-lg lg:text-[20px] leading-tight text-primary-dark pt-1">
                            <p className="font-normal text-inherit">
                                Each stage impacts the next.
                            </p>
                            <p className="font-normal text-inherit">
                                If one layer becomes inconsistent, the guest notices — and the brand pays for it.
                            </p>
                            <p className="font-normal text-inherit pt-1">
                                That is why hospitality needs systems, not fragmented supply.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
