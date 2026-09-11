import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import WhyMostManufacturingFailsSection from './WhyMostManufacturingFailsSection';
import ManufacturingInfrastructureSection from './ManufacturingInfrastructureSection';
import BuiltForControlledExecutionSection from './BuiltForControlledExecutionSection';
import WhereThisAppliesSection from './WhereThisAppliesSection';
import CoreManufacturingCapabilitiesSection from './CoreManufacturingCapabilitiesSection';
import StructuredValidationAndBenefitsSection from './StructuredValidationAndBenefitsSection';

export const metadata = {
    title: "Manufacturing | Kleanfix",
    description: "Manufacturing Designed for Consistency — Not Just Capacity. Built for operations where output must remain stable across batches, teams, and production cycles.",
};

export default function ManufacturingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title="Manufacturing"
                subtitle={
                    <div className="space-y-1 mt-2">
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            Manufacturing Designed for Consistency — Not Just Capacity
                        </p>
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            Capacity does not guarantee consistency.
                        </p>
                    </div>
                }
                imageSrc="/manufacturing/hero.webp"
                imageAlt="Manufacturing Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark max-w-7xl leading-snug">
                        {/* Block 1: Consistency comes from */}
                        <div className="space-y-2">
                            <p className="text-primary font-semibold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-snug">
                                Consistency comes from:
                            </p>

                            <div className="text-base md:!text-[18px] font-normal leading-snug pt-0.5 space-y-0.5">
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Process Control</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Formulation Accuracy</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Batch Discipline</p>
                            </div>
                        </div>

                        {/* Block 2: Kleanfix manufacturing is structured to ensure */}
                        <div className="space-y-2">
                            <p className="text-primary-dark font-semibold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-snug">
                                Kleanfix manufacturing is structured to ensure:
                            </p>
                            <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-relaxed">
                                Same Formulation → Same Process → Same Output
                            </p>
                        </div>

                        {/* Block 3: Built for operations */}
                        <div className="pt-1">
                            <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                Built for operations where output must remain stable across batches, teams, and production cycles.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2 md:pt-3">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/contact-us"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"
                            >
                                SUBMIT REQUIREMENT
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Most Manufacturing Fails Section */}
            <WhyMostManufacturingFailsSection />

            {/* Manufacturing Infrastructure Section */}
            <ManufacturingInfrastructureSection />

            {/* Built for Controlled Execution Section */}
            <BuiltForControlledExecutionSection />

            {/* Where this applies Section */}
            <WhereThisAppliesSection />

            {/* Core Manufacturing Capabilities Section */}
            <CoreManufacturingCapabilitiesSection />

            {/* Structured Validation and What This Means For You Section */}
            <StructuredValidationAndBenefitsSection />
        </main>
    );
}
