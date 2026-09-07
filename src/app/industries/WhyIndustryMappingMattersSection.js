'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyIndustryMappingMattersSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Column: Image with rounded corners */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 w-full"
                    >
                        <div className="relative w-full aspect-[4/3.8] md:aspect-[4/4.2] lg:aspect-[4/4.1] rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm">
                            <Image
                                src="/industries/why-industry.avif"
                                alt="Laboratory technician pouring formulation into a beaker on precision scale"
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
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-6 space-y-6 md:space-y-7 text-primary max-w-xl"
                    >
                        {/* Heading */}
                        <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.15]">
                            Why industry<br />mapping matters
                        </h2>

                        {/* Block 1 */}
                        <div className="space-y-1 text-base md:text-lg lg:text-[20px] leading-relaxed text-primary-dark">
                            <p className="font-normal text-inherit">
                                Every environment operates under different conditions.
                            </p>
                            <ul className="space-y-0 pl-1 font-normal text-inherit">
                                <li className='leading-relaxed text-primary-dark font-medium'>• Different usage patterns</li>
                                <li className='leading-relaxed text-primary-dark font-medium'>• Different expectations</li>
                                <li className='leading-relaxed text-primary-dark font-medium'>• Different levels of control</li>
                            </ul>
                            <p className="font-normal text-inherit pt-1">
                                When this is ignored, businesses rely on trial and error.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-1 text-base md:text-lg lg:text-[20px] leading-tight text-primary-dark">
                            <p className="font-normal text-inherit">
                                That leads to inconsistency, inefficiency, and dependency on people instead of systems.
                            </p>
                            <p className="font-normal text-inherit">
                                Kleanfix removes that guesswork by structuring the path from requirement to system — before product selection begins.
                            </p>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-3 pt-1">
                            <p className="text-base md:text-lg lg:text-[20px] leading-tight font-semibold text-inherit text-primary-dark">
                                Each environment is mapped across the relevant system layers:
                            </p>

                            {/* System Layer Badge */}
                            <div>
                                <span className="inline-block bg-[#D7E4ED] text-primary text-xs md:text-sm lg:text-[14px] font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full tracking-normal shadow-xs">
                                    Functional Systems (cleaning, hygiene, operational performance)
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
