import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import WhyIndustryMappingMattersSection from './WhyIndustryMappingMattersSection';
import IndustriesWeServeSection from './IndustriesWeServeSection';
import IndustryBreakdownSection from './IndustryBreakdownSection';
import CTASection from '@/components/CTASection';

export const metadata = {
    title: 'Industries We Serve | Kleanfix',
    description:
        'Institutional cleaning and hygiene solutions built around how your business actually operates at scale - Kleanfix.',
};

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title="Industries"
                subtitle="Solutions built around how your business actually operates at scale."
                imageSrc="/industries/hero.webp"
                imageAlt="Industries Hero Background"
            />

            {/* Static Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark max-w-5xl leading-snug">
                        <div>
                            <p>The same product does not behave the same way in every environment.</p>
                            <p>A cleaner used in a hotel is not used the same way in a hospital.</p>
                            <p>A formulation designed for a product line is not built the same way as an industrial solution.</p>
                        </div>

                        <div>
                            <p className='font-medium'>Kleanfix bridges this gap by aligning:</p>
                            <p>Environment → Requirement → System → Output</p>
                        </div>

                        <div>
                            <p>So, the solution fits how your business actually runs — not just what category it belongs to.</p>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-2 md:pt-4">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/contact-us"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5"
                            >
                                SUBMIT REQUIREMENT
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Industry Mapping Matters Section */}
            <WhyIndustryMappingMattersSection />

            {/* Industries We Serve Section */}
            <IndustriesWeServeSection />

            {/* Industry Breakdown Section */}
            <IndustryBreakdownSection />

            {/* Decision Support CTA Section */}
            <CTASection
                title="Decision support"
                description={
                    <>
                        If your requirement spans multiple environments or systems:
                        <span className="block mt-1">
                            Share your environment, use-case, and challenge — the system maps the right path.
                        </span>
                    </>
                }
                ctaText="SUBMIT REQUIREMENT"
                href="/contact-us"
                bg="white"
                className="bg-[#F7F7F7] py-12 md:py-16 lg:py-20"
            />
        </main>
    );
}
