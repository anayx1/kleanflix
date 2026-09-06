import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import PersonalWhySystemCleaningMatters from './PersonalWhySystemCleaningMatters';
import PersonalWhereItAppliesSection from './PersonalWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

export const metadata = {
    title: "Personal Hygiene | Kleanflix",
    description: "High-Frequency Hygiene That Shapes User Experience - Kleanflix Personal Hygiene System.",
};

const personalHygieneSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Inconsistent hygiene products directly impact:",
        items: [
            "User Experience",
            "Comfort During Repeated Use",
            "Facility Perception"
        ],
        imageSrc: "/personal-hygiene/slide1.avif",
        imageAlt: "What this system solves - Inconsistent hygiene products"
    },
    {
        title: "Personal Hygiene addresses critical operational challenges such as:",
        items: [
            "Frequent hand hygiene",
            "User comfort",
            "Washroom experience",
            "Amenity-level hygiene"
        ],
        imageSrc: "/personal-hygiene/slide2.webp",
        imageAlt: "Personal Hygiene addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "User Experience Becomes Inconsistent",
            "Comfort Declines",
            "Facility Perception Drops"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-it-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/personal-hygiene/slide3.webp",
        imageAlt: "Without system alignment - User experience drops"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Personal Hygiene');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Personal Hygiene"
                subtitle="High-Frequency Hygiene That Shapes User Experience"
                imageSrc="/personal-hygiene/hero.webp"
                imageAlt="Personal Hygiene Hero Background"
            />

            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Personal Hygiene is designed for environments where:</p>
                            <p>Frequent usage</p>
                            <p>User comfort</p>
                            <p>Hygiene consistency</p>
                            <p>Washroom experience</p>
                            <p>must be maintained across interactions.</p>
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

            <SystemSolvesScroll slides={personalHygieneSlides} />
            <PersonalWhySystemCleaningMatters />
            <PersonalWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Personal Hygiene system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across personal hygiene operations."
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

