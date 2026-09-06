import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import LaundryWhySystemCleaningMatters from './LaundryWhySystemCleaningMatters';
import LaundryWhereItAppliesSection from './LaundryWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

const laundryCareSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Inconsistent laundry processes directly impact:",
        items: [
            "Cleaning Quality",
            "Fabric Safety",
            "Operational Efficiency"
        ],
        imageSrc: "/laundry-care/slide1.webp",
        imageAlt: "What this system solves - Inconsistent laundry processes"
    },
    {
        title: "Laundry Care addresses critical operational challenges such as:",
        items: [
            "Dirt and soil removal",
            "Stain handling",
            "Grease and oil contamination",
            "pH balancing",
            "Bleaching and whitening",
            "Fabric finishing",
            "Machine maintenance"
        ],
        imageSrc: "/laundry-care/slide2.webp",
        imageAlt: "Laundry Care addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "Inconsistent Output",
            "Higher Rewash Cycles",
            "Fabric Damage",
            "Inefficient Cleaning"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-it-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/laundry-care/slide3.webp",
        imageAlt: "Without system alignment - Laundry issues"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Laundry Care');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Laundry Care"
                subtitle="A Multi-Stage System for Consistent Fabric Performance"
                imageSrc="/laundry-care/hero.webp"
                imageAlt="Laundry Care Hero Background"
            />

            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Laundry Care is designed for environments where:</p>
                            <p>Fabric cleanliness</p>
                            <p>Hygiene</p>
                            <p>Stain removal</p>
                            <p>Process consistency</p>
                            <p>must be maintained at scale.</p>
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

            <SystemSolvesScroll slides={laundryCareSlides} />
            <LaundryWhySystemCleaningMatters />
            <LaundryWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Laundry Care system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across laundry operations."
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