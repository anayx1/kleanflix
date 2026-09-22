import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import GermWhySystemCleaningMatters from './GermWhySystemCleaningMatters';
import GermWhereItAppliesSection from './GermWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

export const metadata = {
    title: 'Germ Control & Disinfection Systems | Kleanfix',
    description:
        'Hygiene beyond visible cleaning - high-level sanitization and disinfection systems by Kleanfix.',
};

const germControlSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Inconsistent sanitization directly impacts:",
        items: [
            "Hygiene Control",
            "Contamination Risk",
            "Operational Safety"
        ],
        imageSrc: "/germ-control/slide1.avif",
        imageAlt: "What this system solves - Inconsistent sanitization"
    },
    {
        title: "Germ Control addresses critical operational challenges such as:",
        items: [
            "Surface sanitization",
            "Hand sanitization",
            "Contamination risk",
            "Hygiene protocol support"
        ],
        imageSrc: "/germ-control/slide2.avif",
        imageAlt: "Germ Control addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "Microbial Presence Persists",
            "Hygiene Standards Drop",
            "Operational Risk Increases"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-the-system-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/germ-control/slide3.avif",
        imageAlt: "Without system alignment - Microbial presence persists"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Germ Control');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Germ Control"
                subtitle="Hygiene Beyond Visible Cleaning"
                imageSrc="/hero/germ-hero.jpeg"
                imageAlt="Germ Control Hero Background"
            />

            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Germ Control is designed for environments where:</p>
                            <p>Microbial control</p>
                            <p>Surface sanitization</p>
                            <p>Hand hygiene</p>
                            <p>Contamination risk reduction</p>
                            <p>must be ensured beyond visible cleaning.</p>
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

            <SystemSolvesScroll slides={germControlSlides} />
            <GermWhySystemCleaningMatters />
            <GermWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Germ Control system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across germ control operations."
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

