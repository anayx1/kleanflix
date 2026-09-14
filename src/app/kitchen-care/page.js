import ReededGlassHero from '@/components/ReededGlassHero'
import Button from '@/components/Button'
import SystemSolvesScroll from '@/components/SystemSolvesScroll'
import React from 'react'
import KitchenWhySystemCleaningMatters from './KitchenWhySystemCleaningMatters';
import KitchenWhereItAppliesSection from './KitchenWhereItAppliesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection';
import { getProductsByCategory } from '@/lib/api';

const kitchenCareSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Inconsistent cleaning in kitchen environments directly impacts:",
        items: [
            "Hygiene Standards",
            "Food Safety",
            "Equipment Performance"
        ],
        imageSrc: "/kitchen-care/slide1.avif",
        imageAlt: "What this system solves - Kitchen cleaning operations"
    },
    {
        title: "Kitchen Care addresses critical operational challenges such as:",
        items: [
            "Grease Accumulation",
            "Inefficient Utensil Cleaning",
            "Sanitization Gaps",
            "Odor Buildup",
            "Equipment Performance Issues"
        ],
        imageSrc: "/kitchen-care/slide2.avif",
        imageAlt: "Kitchen Care addresses critical operational challenges"
    },
    {
        title: "Without system alignment:",
        items: [
            "Grease Hardens",
            "Hygiene Risks Increase",
            "Equipment Efficiency Drops"
        ],
        footerText: "This system replaces trial-and-error with system-driven execution.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-the-system-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/kitchen-care/slide3.avif",
        imageAlt: "Without system alignment - Stovetop grease and cleaning"
    }
];

const page = async () => {
    const products = await getProductsByCategory('Kitchen Care');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Kitchen Care"
                subtitle="A High-Control Hygiene System for Food Environments"
                imageSrc="/kitchen-care/hero.webp"
                imageAlt="Kitchen Care Hero Background"
            />
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Kitchen Care is designed for environments where:</p>
                            <p>Grease and oil buildup</p>
                            <p>Food residue management</p>
                            <p>Hygiene-sensitive surfaces</p>
                            <p>Equipment performance</p>
                            <p>must be controlled consistently.</p>
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
            <SystemSolvesScroll slides={kitchenCareSlides} />
            <KitchenWhySystemCleaningMatters />
            <KitchenWhereItAppliesSection />
            <ProductsSection
                products={products}
                subtitle="Below is a visual reference of the products within the Kitchen Care system for operational understanding."
                actionCardText="This system removes guesswork and standardizes cleaning execution across kitchen operations."
            />
            <CTASection
                title="Not sure which combination fits your requirement?"
                description="Share your use-case and we’ll map the right system."
                ctaText="SUBMIT REQUIREMENT"
                href="/contact-us"
            />
            <OEMScalingSupportSection />
        </main>
    )
}

export default page