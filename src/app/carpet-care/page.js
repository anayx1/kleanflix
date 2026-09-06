import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import CarpetWhySystemCleaningMatters from './CarpetWhySystemCleaningMatters';
import CarpetWhereItAppliesSection from './CarpetWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

export const metadata = {
    title: "Carpet Care | Kleanflix",
    description: "A Deep-Cleaning System for Textile Surfaces - Kleanflix Carpet Care System.",
};

const carpetCareSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Surface-level cleaning in textile environments directly impacts:",
        items: [
            "Hygiene Quality",
            "Appearance",
            "Maintenance Efficiency"
        ],
        imageSrc: "/carpet-care/slide1.avif",
        imageAlt: "What this system solves - Surface-level cleaning in textile environments"
    },
    {
        title: "Carpet Care addresses critical operational challenges such as:",
        items: [
            "Embedded dirt and dust",
            "Stain removal",
            "Fabric hygiene",
            "Appearance maintenance"
        ],
        imageSrc: "/carpet-care/slide2.avif",
        imageAlt: "Carpet Care addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "Dirt Accumulates Within Fibres",
            "Appearance Deteriorates",
            "Hygiene Standards Drop"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-it-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/carpet-care/slide3.avif",
        imageAlt: "Without system alignment - Dirt accumulates within fibres"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Carpet Care');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Carpet Care"
                subtitle="A Deep-Cleaning System for Textile Surfaces"
                imageSrc="/carpet-care/hero.png"
                imageAlt="Carpet Care Hero Background"
            />

            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Carpet Care is designed for environments where:</p>
                            <p>Fibre-level cleaning</p>
                            <p>Embedded dirt removal</p>
                            <p>Stain management</p>
                            <p>Appearance maintenance</p>
                            <p>must be handled beyond surface cleaning.</p>
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

            <SystemSolvesScroll slides={carpetCareSlides} />
            <CarpetWhySystemCleaningMatters />
            <CarpetWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Carpet Care system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across carpet operations."
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
