'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package } from 'lucide-react';
import Button from '@/components/Button';

/**
 * ProductDetailModal Component
 *
 * Displays a modal when a product card is clicked.
 * - Pure white background, borderless modal card with smooth elevation.
 * - Header removed, close 'X' button fixed at top right.
 * - When a product has a detailImage (PIS / Detail Graphic):
 *     - Left side: Full prominent Product Image
 *     - Right side: Detail Graphic
 *     - Bottom: Action CTAs ("SUBMIT REQUIREMENT" & "REQUEST TECHNICAL DETAILS ↗")
 * - When a product does not have a detailImage:
 *     - Left side: Full prominent Product Image
 *     - Right side: Title, Category, Description, and CTAs
 *
 * @param {Object} props
 * @param {Object} props.product - The product object to display
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {Function} props.onClose - Close handler function
 */
export default function ProductDetailModal({ product, isOpen, onClose }) {
    // Lock body scroll and listen for Escape key
    useEffect(() => {
        if (!isOpen) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !product) return null;

    const hasDetailImage = Boolean(product.detailImage);
    const encodedTitle = encodeURIComponent(product.title || 'Product');
    const submitRequirementHref = `/contact-us?product=${encodedTitle}#contact-form`;
    const whatsappMessage = `hi, i want to know more about ${product.title || ''}`.trim();
    const whatsappHref = `https://wa.me/919818998806?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6  overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                        aria-hidden="true"
                    />

                    {/* Modal Card: Pure White Background, Borderless, Rounded */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 15 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="product-modal-title"
                        className="relative w-full max-w-5xl bg-white rounded-2xl md:rounded-[32px] shadow-2xl p-6 my-auto z-10 max-h-[92dvh] flex flex-col overflow-y-auto"
                    >
                        {/* Close 'X' Button Fixed At Top Right */}
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close modal"
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-30 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Main Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center flex-1 pt-2">
                            {/* Left Column: Full Product Image */}
                            <div className="modal-product-image-wrapper">
                                {product.image ? (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 1001px) 90vw, 45vw"
                                        className="object-contain"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2 bg-slate-50 rounded-xl">
                                        <Package className="w-12 h-12 opacity-40" />
                                        <span className="text-xs md:text-sm font-medium">No Image Available</span>
                                    </div>
                                )}
                            </div>

                            {/* Right Column */}
                            {hasDetailImage ? (
                                /* Case 1: Detail Graphic Image (PIS Sheet) */
                                <div className="modal-detail-image-wrapper">
                                    <Image
                                        src={product.detailImage}
                                        alt={`${product.title} Technical Sheet`}
                                        fill
                                        sizes="(max-width: 1001px) 90vw, 45vw"
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            ) : (
                                /* Case 2: Product Without Detail Graphic */
                                <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                                    <div>
                                        <span className="inline-block bg-primary/10 text-primary font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                                            {product.category || 'Facility Care'}
                                        </span>
                                        <h3
                                            id="product-modal-title"
                                            className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary leading-tight"
                                        >
                                            {product.title}
                                        </h3>
                                    </div>

                                    {product.description && (
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            {product.description}
                                        </p>
                                    )}


                                    {/* Right-side Action CTAs for products without Detail Graphic */}
                                    <div className="pt-2 flex flex-col min-[500px]:flex-row md:flex-col lg:flex-row items-stretch min-[500px]:items-center md:items-stretch lg:items-center gap-4">
                                        <Button
                                            variant="pill-secondary"
                                            size="sm"
                                            href={submitRequirementHref}
                                            onClick={onClose}
                                            showArrow={false}
                                            className="!text-xs md:!text-sm font-bold px-6 py-2.5 md:px-7 md:py-3 shadow-md justify-center whitespace-nowrap"
                                        >
                                            SUBMIT REQUIREMENT
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            href={whatsappHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="!text-xs md:!text-sm font-bold justify-center whitespace-nowrap"
                                        >
                                            REQUEST TECHNICAL DETAILS
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom CTA Row (for products with Detail Graphic) */}
                        {hasDetailImage && (
                            <div className="mt-6 md:mt-8 pt-2 flex flex-col min-[500px]:flex-row items-center justify-center gap-4 md:gap-7">
                                <Button
                                    variant="pill-secondary"
                                    size="sm"
                                    href={submitRequirementHref}
                                    onClick={onClose}
                                    showArrow={false}
                                    className="!text-xs md:!text-sm font-bold px-7 py-3 shadow-md whitespace-nowrap"
                                >
                                    SUBMIT REQUIREMENT
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="!text-xs md:!text-sm font-bold whitespace-nowrap"
                                >
                                    REQUEST TECHNICAL DETAILS
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
