import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import AutomotiveWhySystemCleaningMatters from './AutomotiveWhySystemCleaningMatters';
import AutomotiveWhereItAppliesSection from './AutomotiveWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

export const metadata = {
    title: 'Automotive Care Cleaning Systems | Kleanfix',
    description:
        'High-performance automotive cleaning chemicals and vehicle maintenance systems for exterior wash, interior care, engine degreasing, and surface protection.',
};

const automotiveCareSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Inconsistent vehicle cleaning directly impacts:",
        items: [
            "Surface Finish",
            "Material Safety",
            "Cleaning Efficiency"
        ],
        imageSrc: "/automotive-care/slide1.avif",
        imageAlt: "What this system solves - Inconsistent vehicle cleaning"
    },
    {
        title: "Automotive Care addresses critical operational challenges such as:",
        items: [
            "Exterior dirt and grime removal",
            "Interior surface cleaning",
            "Upholstery maintenance",
            "Finish enhancement"
        ],
        imageSrc: "/automotive-care/slide2.avif",
        imageAlt: "Automotive Care addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "Incorrect Products Damage Surfaces",
            "Finish Becomes Inconsistent",
            "Cleaning Efficiency Drops"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-the-system-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/automotive-care/slide3.avif",
        imageAlt: "Without system alignment - Vehicle surface damage risk"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Automotive Care');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Automotive Care"
                subtitle="A Structured Cleaning System for Multi-Surface Vehicles"
                imageSrc="/hero/automotive-hero.jpg"
                imageAlt="Automotive Care Hero Background"
            />

            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Automotive Care is designed for environments where:</p>
                            <p>Multiple material surfaces</p>
                            <p>Exterior and interior cleaning</p>
                            <p>Finish consistency</p>
                            <p>Surface protection</p>
                            <p>must be managed together.</p>
                        </div>

                        <div className="text-primary">
                            <p>Your requirement does not need to be fully defined yet.</p>
                            <p>Share what you are trying to solve — the system will map the rest.</p>
                        </div>

                        <div className="pt-2">
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

            <SystemSolvesScroll slides={automotiveCareSlides} />
            <AutomotiveWhySystemCleaningMatters />
            <AutomotiveWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Automotive Care system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across automotive care operations."
            />
            <CTASection
                title="Not sure which combination fits your requirement?"
                description="Share your use-case and we’ll map the right system."
                ctaText="SUBMIT REQUIREMENT"
                href="/contact-us"
            />
            <OEMScalingSupportSection />
        </main>
    );
};

export default page;
