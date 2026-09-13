import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import CategorizedFAQsSection from './CategorizedFAQsSection';

export const metadata = {
    title: "FAQs | Kleanfix",
    description: "Clarity Before You Decide. Most wrong decisions don't happen because of bad products — they happen because of incomplete understanding.",
};

export default function FAQsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title="FAQs"
                subtitle="Clarity Before You Decide"
                imageSrc="/faq/hero.webp"
                imageAlt="FAQs Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary max-w-7xl leading-snug">
                        {/* Block 1 */}
                        <div className="space-y-1">
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                Most wrong decisions don’t happen because of bad products.
                            </p>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                They happen because of incomplete understanding.
                            </p>
                        </div>

                        {/* Block 2: Helps you */}
                        <div className="space-y-2">
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                This section helps you:
                            </p>
                            <div className="text-base md:text-lg lg:text-[20px] font-normal leading-snug pt-0.5 space-y-1">
                                <p className="text-primary">• Understand How Systems Work</p>
                                <p className="text-primary">• Evaluate Your Requirement Correctly</p>
                                <p className="text-primary">• Decide Your Next Step with Clarity</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 md:pt-4">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/products"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"
                            >
                                VIEW PRODUCT SYSTEMS
                            </Button>

                            <Button
                                variant="secondary"
                                showArrow={true}
                                href="/contact-us"
                                size="sm"
                                className="font-semibold text-xs md:text-sm uppercase text-secondary"
                            >
                                SUBMIT REQUIREMENT
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categorized FAQs Section with Sticky Left Sidebar Navigation */}
            <CategorizedFAQsSection />
        </main>
    );
}
