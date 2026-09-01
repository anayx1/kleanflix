'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        title: "Testimonial Card 1",
        text: "I’m very satisfied with Kleanfix products. The quality, performance, reasonable pricing, and prompt delivery exceeded our expectations. I highly recommend Kleanfix for homes, bakeries, restaurants, kitchens, and industries.",
        designation: "Founder, M's Bake Houz",
        name: "Moniya Garg"
    },
    {
        id: 2,
        title: "Testimonial Card 2",
        text: "Kleanfix solved our faucet stains and hygiene concerns effectively. The products are cost-effective, eco-friendly, and certified. Shashank's guidance and product knowledge made the experience smooth. I highly recommend Kleanfix.",
        designation: "Owner & Director, Cloverleaf",
        name: "Sanjay Kumar Khanna"
    },
    {
        id: 3,
        title: "Testimonial Card 3",
        text: "Kleanfix consistently delivers housekeeping chemicals and reliable service. The products meet high standards, while Shashank's helpful nature and willingness to support others make the experience commendable. I highly recommend Kleanfix.",
        designation: "President & CEO, Zen Software Solutions Pvt. Ltd.",
        name: "Manoj K. Goel"
    },
    {
        id: 4,
        title: "Testimonial Card 4",
        text: "Kleanfix stands out for quality, innovation, and customer service. Their certified, eco-friendly products deliver effective results, while their responsive team and R&D focus make them a trusted partner.",
        designation: "AP’s Business Head",
        name: "Swarnan Singh"
    },
    {
        id: 5,
        title: "Testimonial Card 5",
        text: "Kleanfix detergent and floor cleaner impressed us with their quality and performance. They clean effectively while leaving freshness and shine. Shashank's genuine care makes Kleanfix a trusted brand.",
        designation: "Exotica Blinds",
        name: "Dinesh Gupta"
    },
    {
        id: 6,
        title: "Testimonial Card 6",
        text: "When paint spilled at our site, Shashank promptly provided the right Kleanfix solution and arranged quick delivery. His clear guidance and helpful service solved the problem efficiently. I recommend Kleanfix.",
        designation: "Director, Bhambri Solvar Pvt. Ltd.",
        name: "Ruchi Bhambri"
    }
];

const slideVariants = {
    enter: (direction) => ({
        y: direction > 0 ? '100%' : '-100%',
    }),
    center: {
        y: '0%',
    },
    exit: (direction) => ({
        y: direction > 0 ? '-100%' : '100%',
    }),
};

export default function TestimonialsSection() {
    const [[currentIndex, direction], setPage] = useState([0, 0]);

    const handleNext = () => {
        setPage(([prevIndex]) => [(prevIndex + 1) % testimonials.length, 1]);
    };

    const handlePrev = () => {
        setPage(([prevIndex]) => [
            (prevIndex - 1 + testimonials.length) % testimonials.length,
            -1
        ]);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden w-full">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="text-primary tracking-tight leading-tight">
                        What our clients say
                    </h2>
                </motion.div>

                {/* 2-Column Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* Left Column: Image Container with scale 1.1 -> 1.0 entry animation */}
                    <div className="md:col-span-6 relative min-h-[360px] md:min-h-[440px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-sm">
                        <motion.div
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src="/homepage/sec14.png"
                                alt="Customer satisfaction smiley keyboard"
                                fill
                                sizes="(max-width: 1001px) 100vw, 50vw"
                                className="object-cover object-center"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Testimonial Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-6 relative min-h-[360px] md:min-h-[440px] lg:min-h-[480px] bg-white rounded-3xl border border-primary-dark p-8  flex flex-col justify-between overflow-hidden shadow-sm"
                    >
                        <div className="relative z-10 flex-1 h-full w-full overflow-hidden">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentTestimonial.id}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 flex flex-col justify-between space-y-6"
                                >
                                    {/* Testimonial Quote */}
                                    <p className="font-sans text-primary-dark text-lg md:text-xl lg:text-[22px] leading-relaxed">
                                        “{currentTestimonial.text}”
                                    </p>

                                    {/* Designation & Name */}
                                    <div className="pr-14">
                                        <p className="font-sans font-medium text-primary-dark">
                                            {currentTestimonial.designation}
                                        </p>
                                        <h3 className=" text-primary-dark text-lg md:text-xl mt-0.5">
                                            {currentTestimonial.name}
                                        </h3>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows (Bottom-Right) */}
                        <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 flex flex-col gap-2">
                            <button
                                onClick={handlePrev}
                                aria-label="Previous testimonial"
                                className="w-8 h-8 md:w-9 md:h-9 rounded-lg border border-primary/30 flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/5 active:scale-95 transition-all duration-200 cursor-pointer select-none"
                            >
                                <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-black" />
                            </button>
                            <button
                                onClick={handleNext}
                                aria-label="Next testimonial"
                                className="w-8 h-8 md:w-9 md:h-9 rounded-lg border border-primary/30 flex items-center justify-center text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/5 active:scale-95 transition-all duration-200 cursor-pointer select-none"
                            >
                                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-black" />
                            </button>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
