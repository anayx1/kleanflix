'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

/**
 * Reusable ProductsSection Component
 *
 * Displays a responsive grid of products (1 column on mobile, 2 columns on tablet, 3 columns on desktop md:).
 * All cards in the grid dynamically equalize to the height of the card with the maximum content.
 * Includes an action card after the last product card, and an important packaging note at the bottom.
 * Features smooth row slide-up fade-in scroll animations using Framer Motion.
 *
 * @param {Object} props
 * @param {Array} props.products - Array of product objects fetched from server
 * @param {string} [props.title="Products & Packaging"] - Section title
 * @param {string} [props.subtitle="Below is a visual reference of the products within the Facility Care system for operational understanding."] - Section subtitle
 * @param {string} [props.className=""] - Additional custom classes for the section
 * @param {boolean} [props.showActionCard=true] - Whether to show the final action card
 * @param {string} [props.actionCardText] - Text for the final action card
 * @param {string} [props.actionCardButtonText="REQUEST TECHNICAL DETAILS"] - CTA button label
 * @param {string} [props.actionCardHref="/contact-us"] - CTA link URL
 * @param {string} [props.footerNote] - Note banner text at bottom of section
 */
export default function ProductsSection({
    products = [],
    title = "Products & Packaging",
    subtitle = "Below is a visual reference of the products within the Facility Care system for operational understanding.",
    className = "",
    showActionCard = true,
    actionCardText = "This system removes guesswork and standardizes cleaning execution across facility operations.",
    actionCardButtonText = "REQUEST TECHNICAL DETAILS",
    actionCardHref = "/contact-us",
    usageNote = null,
    footerNote = "IMPORTANT NOTE: Packaging may vary by pack size, format, or supply requirement.",
}) {
    const gridRef = useRef(null);

    // Dynamically equalize all cards to the height of the card with the maximum content
    const syncCardHeights = useCallback(() => {
        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll('.product-card-inner');
        if (!cards || cards.length === 0) return;

        // Reset to auto first to accurately calculate natural content heights
        cards.forEach((card) => {
            card.style.height = 'auto';
        });

        // Find the tallest card based on content
        let maxHeight = 0;
        cards.forEach((card) => {
            const h = card.offsetHeight;
            if (h > maxHeight) {
                maxHeight = h;
            }
        });

        // Apply equal max height across every card in the grid
        if (maxHeight > 0) {
            cards.forEach((card) => {
                card.style.height = `${maxHeight}px`;
            });
        }
    }, []);

    useEffect(() => {
        if (!products || products.length === 0) return;
        syncCardHeights();
        const rafId = requestAnimationFrame(syncCardHeights);
        window.addEventListener('resize', syncCardHeights);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', syncCardHeights);
        };
    }, [syncCardHeights, products, showActionCard]);

    const hasProducts = Array.isArray(products) && products.length > 0;

    return (
        <section className={`py-16 bg-[#F8F9FA] ${className}`}>
            <div className="main-container px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <h2 className="font-semibold text-3xl md:text-5xl text-primary leading-tight mb-3 md:mb-4 tracking-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="font-medium text-sm md:text-lg lg:text-xl text-primary-dark/90 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                {!hasProducts ? (
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl p-8 md:p-12 text-center border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-w-xl mx-auto flex flex-col items-center"
                    >
                        <p className="font-semibold text-lg md:text-xl lg:text-2xl text-primary mb-2">
                            No products found
                        </p>
                        <p className="font-medium text-xs md:text-sm lg:text-base text-primary-dark/80 leading-relaxed max-w-md mb-6">
                            There are currently no products listed under this category. Contact us to request system specifications or custom formulations.
                        </p>
                        <Button
                            variant="pill-secondary"
                            href={actionCardHref}
                            showArrow={false}
                            className="text-xs md:text-sm font-semibold uppercase tracking-wider px-7 py-3 md:px-8 md:py-3.5 shadow-md"
                        >
                            {actionCardButtonText}
                        </Button>
                    </motion.div>
                ) : (
                    <>
                        {/* Products Grid: 1 col on mobile, 2 cols on tablet, 3 cols on md: */}
                        <div ref={gridRef} className="grid grid-cols-1 min-[640px]:grid-cols-2 md:grid-cols-3 gap-5 items-stretch">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id || product.slug}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: (index % 3) * 0.1,
                                    }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="product-card-inner bg-white rounded-xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border border-slate-100/90 w-full flex-1">
                                        {/* Product Image Container */}
                                        <div className="product-card-image-wrapper mb-5 md:mb-6 flex items-center justify-center">
                                            {product.image ? (
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1001px) 50vw, 33vw"
                                                    className="object-contain object-center"
                                                    priority={index < 3}
                                                    onLoad={syncCardHeights}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-400 rounded-xl text-sm">
                                                    No Image Available
                                                </div>
                                            )}
                                        </div>

                                        {/* Product Title */}
                                        <h3 className="font-semibold text-lg md:text-xl lg:text-[22px] text-primary mb-2 leading-snug">
                                            {product.title}
                                        </h3>

                                        {/* Product Description */}
                                        <p className="font-medium text-xs md:text-sm lg:text-[15px] text-primary-dark leading-tight max-w-[320px] mx-auto">
                                            {product.description?.trim()}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Final Action Card after all products */}
                            {showActionCard && (
                                <motion.div
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: (products.length % 3) * 0.1,
                                    }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="product-card-inner bg-white rounded-xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center border border-slate-100/90 w-full flex-1">
                                        <p className="font-medium text-base md:text-lg lg:text-xl text-primary leading-relaxed max-w-[280px] mb-8">
                                            {actionCardText}
                                        </p>
                                        <Button
                                            variant="pill-secondary"
                                            href={actionCardHref}
                                            showArrow={false}
                                            className="text-xs md:text-sm font-semibold uppercase tracking-wider px-7 py-3 md:px-8 md:py-3.5 shadow-md"
                                        >
                                            {actionCardButtonText}
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Usage Note Banner */}
                        {usageNote && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mt-6 md:mt-8 bg-[#E2EAF2]/90 rounded-xl py-4 px-6 text-center"
                            >
                                <div className="space-y-1 leading-snug ">
                                    {Array.isArray(usageNote) ? (
                                        usageNote.map((line, i) => (
                                            <p
                                                key={i}
                                                className={
                                                    i === 0
                                                        ? "text-xs md:text-sm font-bold tracking-wide text-primary mb-1 uppercase"
                                                        : "text-xs md:text-sm font-semibold text-primary"
                                                }
                                            >
                                                {line}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-xs md:text-sm font-semibold text-primary">{usageNote}</p>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Bottom Packaging Note Banner */}
                        {footerNote && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className={`${usageNote ? "mt-3 md:mt-4" : "mt-6 md:mt-8"} bg-[#E2EAF2]/90 rounded-xl py-3.5 md:py-4 px-6 text-center`}
                            >
                                <p className="text-xs md:text-sm lg:text-[14px] font-semibold text-primary tracking-normal">
                                    {footerNote}
                                </p>
                            </motion.div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
