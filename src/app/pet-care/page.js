import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import PetWhySystemCleaningMatters from './PetWhySystemCleaningMatters';
import PetWhereItAppliesSection from './PetWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

const petCareSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Inconsistent cleaning in pet environments directly impacts:",
        items: [
            "Hygiene Stability",
            "Odor Control",
            "Maintenance Effort"
        ],
        imageSrc: "/pet-care/slide1.avif",
        imageAlt: "What this system solves - Inconsistent cleaning in pet environments"
    },
    {
        title: "Pet Care addresses critical operational challenges such as:",
        items: [
            "Pet hygiene",
            "Area cleaning",
            "Odor control",
            "Grooming freshness"
        ],
        imageSrc: "/pet-care/slide2.avif",
        imageAlt: "Pet Care addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "Odor Builds Up Repeatedly",
            "Cleaning Frequency Increases",
            "Hygiene Remains Inconsistent"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-the-system-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/pet-care/slide3.avif",
        imageAlt: "Without system alignment - Hygiene inconsistency"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Pet Care');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Pet Care"
                subtitle="Hygiene and Odor Control for Pet Environments"
                imageSrc="/pet-care/hero.png"
                imageAlt="Pet Care Hero Background"
            />

            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Pet Care is designed for environments where:</p>
                            <p>Pet hygiene</p>
                            <p>Recurring odor cycles</p>
                            <p>Area cleanliness</p>
                            <p>Continuous maintenance</p>
                            <p>must be controlled together.</p>
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

            <SystemSolvesScroll slides={petCareSlides} />
            <PetWhySystemCleaningMatters />
            <PetWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Pet Care system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across pet care operations."
                usageNote={[
                    "IMPORTANT USAGE NOTE:",
                    "Products should be used only as per intended pet-environment applications.",
                    "Avoid overuse or incorrect application.",
                    "Safety and suitability should always be validated for the specific use-case."
                ]}
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
