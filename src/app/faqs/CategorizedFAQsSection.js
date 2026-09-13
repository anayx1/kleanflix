'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Button';

export const FAQ_CATEGORIES = [
    {
        id: 'understanding-kleanfix',
        navLabel: 'Understanding Kleanfix',
        title: 'General',
        faqs: [
            {
                id: 'gen-1',
                question: 'What does Kleanfix do?',
                answer: 'Kleanfix builds structured systems for cleaning and product development — focused on consistent, scalable output.',
            },
            {
                id: 'gen-2',
                question: 'Who is Kleanfix relevant for?',
                answer: 'Institutional buyers, OEM brands, exporters, distributors, and product developers.',
            },
            {
                id: 'gen-3',
                question: 'How is Kleanfix different from a regular supplier?',
                answer: 'Kleanfix operates as a system — mapping application → system → output to ensure consistency.',
            },
        ],
    },
    {
        id: 'selecting-product-systems',
        navLabel: 'Selecting product systems',
        title: 'Product systems',
        cta: {
            text: 'VIEW PRODUCT SYSTEMS',
            href: '/products',
        },
        faqs: [
            {
                id: 'prod-1',
                question: 'How do I select the right system?',
                answer: 'Start with your environment or use-case. Systems are mapped to real operations.',
            },
            {
                id: 'prod-2',
                question: 'Do I need technical knowledge?',
                answer: 'No. Systems are application-driven, not chemistry-driven.',
            },
            {
                id: 'prod-3',
                question: 'Can systems be combined?',
                answer: 'Yes. Most environments require multiple systems working together.',
            },
        ],
    },
    {
        id: 'building-a-product-line',
        navLabel: 'Building a product line (OEM)',
        title: 'OEM & private label',
        cta: {
            text: 'START OEM DISCUSSION',
            href: '/oem-private-label',
        },
        faqs: [
            {
                id: 'oem-1',
                question: 'Can I launch my own product line?',
                answer: 'Yes. Kleanfix supports formulation, manufacturing, and private label execution.',
            },
            {
                id: 'oem-2',
                question: 'Do you support confidential development?',
                answer: 'Yes. NDA-backed discussions are available.',
            },
            {
                id: 'oem-3',
                question: 'What about MOQ and timelines?',
                answer: 'These depend on product type and scale.',
            },
        ],
    },
    {
        id: 'evaluating-manufacturing-capability',
        navLabel: 'Evaluating manufacturing capability',
        title: 'Manufacturing',
        cta: {
            text: 'VIEW MANUFACTURING',
            href: '/manufacturing',
        },
        faqs: [
            {
                id: 'mfg-1',
                question: 'Where is manufacturing based?',
                answer: 'Delhi-based facility with controlled production systems.',
            },
            {
                id: 'mfg-2',
                question: 'How is consistency maintained?',
                answer: 'Through structured formulation, process control, and validation.',
            },
        ],
    },
    {
        id: 'planning-export-supply',
        navLabel: 'Planning export supply',
        title: 'Exports',
        cta: {
            text: 'VIEW EXPORTS',
            href: '/exports',
        },
        faqs: [
            {
                id: 'exp-1',
                question: 'Do you export internationally?',
                answer: 'Yes — across Nepal, Bhutan, Oman, UAE, Saudi Arabia, and wider Middle East.',
            },
            {
                id: 'exp-2',
                question: 'How is consistency maintained across shipments?',
                answer: 'Through controlled formulation and batch-level production systems.',
            },
        ],
    },
    {
        id: 'getting-started',
        title: 'Getting started',
        cta: {
            text: 'SUBMIT REQUIREMENT',
            href: '/contact-us',
        },
        faqs: [
            {
                id: 'start-1',
                question: 'How do I know if my requirement fits?',
                answer: 'If it involves cleaning systems, product development, or bulk supply — it can be mapped.',
            },
            {
                id: 'start-2',
                question: 'What happens after submission?',
                answer: 'Your requirement is reviewed and aligned to the correct system or discussion track.',
            },
            {
                id: 'start-3',
                question: 'How should I start?',
                answer: 'Share:\nApplication\nProduct Type\nObjective',
            },
        ],
    },
];

export default function CategorizedFAQsSection() {
    // Track open state for each FAQ question (allows independent multi-open)
    const [openFaqs, setOpenFaqs] = useState({});

    const toggleFaq = (faqId) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [faqId]: !prev[faqId],
        }));
    };

    const scrollToCategory = (categoryId) => {
        const el = document.getElementById(categoryId);
        if (el) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
                    {/* Left Column: Sticky Requirement Exploration Header */}
                    <div className="md:col-span-6 md:sticky md:top-28 lg:top-32 self-start space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-primary font-semibold tracking-tight leading-tight">
                                Explore based on <br className='hidden md:block' />
                                your requirement:
                            </h2>
                        </div>

                        {/* Interactive Navigation List */}
                        <div className="text-base md:text-lg lg:text-[20px] font-normal leading-tight">
                            {FAQ_CATEGORIES.map((cat) => cat.navLabel ? (
                                <p key={cat.id} className='text-primary-dark text-lg md:text-xl lg:text-[20px]'>
                                    • {cat.navLabel}
                                </p>
                            ) : null)}
                        </div>

                        <div>
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-tight">
                                Start with what is closest to your need.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Scrollable Categories & Accordion FAQs */}
                    <div className="md:col-span-6 space-y-12 md:space-y-16 lg:space-y-20">
                        {FAQ_CATEGORIES.map((category) => (
                            <div
                                key={category.id}
                                id={category.id}
                                className="space-y-4 md:space-y-6 scroll-mt-28"
                            >
                                {/* Category Header */}
                                <div className="border-b border-[#D8E4EC] pb-2 md:pb-3">
                                    <h3 className="text-primary font-semibold text-xl md:text-2xl lg:text-[26px] tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Accordion Items for this Category */}
                                <div className="divide-y divide-[#D8E4EC]">
                                    {category.faqs.map((faq) => {
                                        const isOpen = !!openFaqs[faq.id];

                                        return (
                                            <div key={faq.id} className="py-4 md:py-5">
                                                <button
                                                    type="button"
                                                    onClick={() => toggleFaq(faq.id)}
                                                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                                                >
                                                    <span className="text-primary font-medium text-lg md:text-xl lg:text-[22px] leading-tight text-primary-dark transition-colors">
                                                        {faq.question}
                                                    </span>
                                                    <span className="text-primary text-2xl md:text-3xl font-light shrink-0 select-none transition-transform duration-200">
                                                        {isOpen ? '−' : '+'}
                                                    </span>
                                                </button>

                                                <AnimatePresence initial={false}>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-3 md:pt-4 ">
                                                                <p className='text-primary-dark text-base md:text-[20px] leading-tight'>{faq.answer}</p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Optional Category CTA Button */}
                                {category.cta && (
                                    <div className="pt-2 md:pt-3">
                                        <Button
                                            variant="pill-secondary"
                                            showArrow={false}
                                            href={category.cta.href}
                                            className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"
                                        >
                                            {category.cta.text}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
