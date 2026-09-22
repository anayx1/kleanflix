import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import WhatFoundersActuallyExperienceSection from './WhatFoundersActuallyExperienceSection';
import BuildProductLineSystemSolvesScroll from './BuildProductLineSystemSolvesScroll';
import HowKleanfixStructuresProductDevelopmentSection from './HowKleanfixStructuresProductDevelopmentSection';
import WhatThisMeansForFoundersSection from './WhatThisMeansForFoundersSection';

export const metadata = {
    title: 'Build Your Product Line | Kleanfix',
    description:
        'Build your custom cleaning and hygiene product line without losing control of formulation, production, and quality - Kleanfix.',
};

export default function BuildYourProductLinePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title="Build Your Product Line"
                subtitle={
                    <div className="space-y-1 mt-2">
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            Build Your Product Line Without Losing Control of It
                        </p>
                        <p className="text-white text-sm md:text-base lg:text-lg font-normal drop-shadow-sm">
                            Most products don’t fail because of lack of demand.
                        </p>
                        <p className="text-white text-sm md:text-base lg:text-lg font-normal drop-shadow-sm">
                            They fail because they cannot scale consistently.
                        </p>
                    </div>
                }
                imageSrc="/product-line/hero.png"
                imageAlt="Build Your Product Line Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-4 text-primary-dark max-w-7xl leading-snug">
                        <div>
                            <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] mb-2">
                                What starts as an idea quickly turns into:
                            </p>
                            <div className="space-y-0.5 text-base md:!text-[18px] font-normal">
                                <p className="text-primary-dark font-normal md:!text-[18px]">Vendor Dependency</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">Inconsistent Output</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">Delays and Rework</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">Loss of Control</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                Kleanfix helps founders turn product ideas into structured, scalable systems.
                            </p>
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

            {/* What Founders Actually Experience Section */}
            <WhatFoundersActuallyExperienceSection />

            {/* What Goes Wrong / System Solves Scroll Section */}
            <BuildProductLineSystemSolvesScroll />

            {/* How Kleanfix Structures Product Development Banner & System Section */}
            <HowKleanfixStructuresProductDevelopmentSection />

            {/* OEM Execution Card & What This Means For Founders Section (with Video) */}
            <WhatThisMeansForFoundersSection />
        </main>
    );
}
