import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import MarbleWhySystemCleaningMatters from './MarbleWhySystemCleaningMatters';
import MarbleWhereItAppliesSection from './MarbleWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

export const metadata = {
    title: 'Marble Care & Stone Maintenance Systems | Kleanfix',
    description:
        'Specialized marble and natural stone care formulations for gentle pH-neutral cleaning, surface protection, shine restoration, and longevity.',
};

const marbleCareSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Improper cleaning of marble surfaces directly impacts:",
        items: [
            "Surface Finish",
            "Shine Retention",
            "Material Life"
        ],
        imageSrc: "/marble-care/slide1.jpg",
        imageAlt: "What this system solves - Improper cleaning of marble surfaces"
    },
    {
        title: "Marble Care addresses critical operational challenges such as:",
        items: [
            "Surface dullness",
            "Loss of shine",
            "Risk of permanent damage",
            "Increased restoration cost"
        ],
        imageSrc: "/marble-care/slide2.avif",
        imageAlt: "Marble Care addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "Surface Finish Deteriorates",
            "Shine Reduces Over Time",
            "Damage Risk Increases"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-the-system-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/marble-care/slide3.avif",
        imageAlt: "Without system alignment - Marble damage risk"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Marble Care');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Marble Care"
                subtitle="A Surface Preservation System for Premium Stone Finishes"
                imageSrc="/marble-care/hero.webp"
                imageAlt="Marble Care Hero Background"
            />

            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Marble Care is designed for environments where:</p>
                            <p>Surface sensitivity</p>
                            <p>Finish preservation</p>
                            <p>Controlled chemical use</p>
                            <p>Long-term appearance</p>
                            <p>must be maintained without damage.</p>
                            <p className="mt-2">
                                <span className="text-red-600 font-bold tracking-wider">!!!</span> Use only on suitable calcareous stone surfaces.
                            </p>
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

            <SystemSolvesScroll slides={marbleCareSlides} />
            <MarbleWhySystemCleaningMatters />
            <MarbleWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Marble Care system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across marble care operations."
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
