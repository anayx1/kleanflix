'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Button from '@/components/Button';

export const defaultProductsFaqs = [
    {
        question: "How do I choose the right system?",
        answer: "Start with your requirement above — each option maps directly to a system"
    },
    {
        question: "Do I need technical knowledge?",
        answer: "No — the system is designed around application, not chemistry"
    },
    {
        question: "Can multiple systems be combined?",
        answer: "Yes — most real-world environments require a combination of systems"
    },
    {
        question: "Do you support OEM and customization?",
        answer: "Yes — including formulation, manufacturing, and sensory integration"
    }
];

/**
 * Reusable FAQ Section Component
 *
 * @param {Object} props
 * @param {Array<{question: string, answer: string}>} [props.faqs] - Dynamic array of Q&A objects
 * @param {Array<{question: string, answer: string}>} [props.items] - Alias for faqs array
 * @param {string} [props.title="Frequently asked questions"] - Fixed section headline
 * @param {string} [props.description] - Fixed section subtitle text
 * @param {string} [props.viewAllHref="/faq"] - Link for "VIEW ALL" button
 * @param {string} [props.submitHref="/contact-us"] - Link for "SUBMIT REQUIREMENT" button
 * @param {boolean} [props.allowMultiple=true] - Whether multiple items can be opened simultaneously
 * @param {string} [props.className=""] - Optional wrapper container classes
 */
export default function FAQSection({
    faqs,
    items,
    title = "Frequently asked questions",
    description = "Got questions? We've got answers! Find quick responses to common queries about our services, timelines, and more.",
    viewAllHref = "/contact-us",
    submitHref = "/contact-us",
    allowMultiple = true,
    className = ""
}) {
    const faqList = faqs || items || defaultProductsFaqs;
    const [openIndices, setOpenIndices] = useState([]);

    const toggleFaq = (index) => {
        if (allowMultiple) {
            setOpenIndices((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <section className={`py-12 md:py-16 lg:py-24 bg-white ${className}`}>
            <div className="main-container px-6 md:px-12">
                {/* Header Block with Fixed Title, Description, and Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-10 md:mb-16"
                >
                    {/* Left: Heading */}
                    <div className="max-w-2xl">
                        <h2 className="font-semibold !text-3xl md:!text-4xl lg:!text-[46px] text-primary leading-tight tracking-tight">
                            {title}
                        </h2>
                    </div>

                    {/* Right: Description & Action Buttons */}
                    <div className="flex flex-col items-start gap-4 md:gap-5 max-w-2xl">
                        <p className="text-primary-dark leading-tight font-normal">
                            {description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 md:gap-5">
                            <Button
                                href={viewAllHref}
                                variant="pill-secondary"
                                showArrow={false}
                                className="font-bold text-xs md:text-sm px-6 py-2.5 md:px-7 md:py-2.5"
                            >
                                VIEW ALL
                            </Button>

                            <Button
                                href={submitHref}
                                variant="secondary"
                                showArrow={true}
                                size="sm"
                                className="font-bold text-xs md:text-sm"
                            >
                                SUBMIT REQUIREMENT
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* FAQ Items List with Smooth Expand & Clockwise Rotation */}
                <div className="border-t border-gray-300">
                    {faqList.map((faq, idx) => {
                        const isOpen = openIndices.includes(idx);

                        return (
                            <div
                                key={faq.question || idx}
                                className="border-b border-gray-300 transition-colors duration-150"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(idx)}
                                    aria-expanded={isOpen}
                                    className="w-full py-5 md:py-6 flex items-center justify-between gap-4 text-left cursor-pointer group select-none"
                                >
                                    <span className="text-lg md:text-xl lg:text-[22px] font-medium text-primary leading-snug group-hover:text-primary-dark transition-colors duration-150">
                                        {faq.question}
                                    </span>

                                    {/* Smooth clockwise transition from '+' (0deg) to 'x' (45deg) */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="flex-shrink-0 text-primary group-hover:text-primary-dark transition-colors duration-150"
                                    >
                                        <Plus className="w-5 h-5 md:w-6 md:h-6 stroke-[1.75]" />
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="overflow-hidden mb-5"
                                        >
                                            <p className="pb-5 md:pb-6 text-sm md:!text-[18px] text-primary-dark leading-relaxed font-normal">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
