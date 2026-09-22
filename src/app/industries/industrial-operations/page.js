import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import HowIndustrialOperationsWorksSection from './HowIndustrialOperationsWorksSection';
import IndustrialOperationsSystemSolvesScroll from './IndustrialOperationsSystemSolvesScroll';
import HowKleanfixMapsIndustrialOperationsSection from './HowKleanfixMapsIndustrialOperationsSection';
import IndustrialOperationControlByZoneSection from './IndustrialOperationControlByZoneSection';
import IndustrialScaleResidueControlSection from './IndustrialScaleResidueControlSection';
import PerformanceAndContinuitySection from './PerformanceAndContinuitySection';
import WhatThisMeansForIndustrialOperatorsSection from './WhatThisMeansForIndustrialOperatorsSection';

export const metadata = {
    title: 'Industrial Operations Cleaning Solutions | Kleanfix',
    description:
        'Heavy-duty industrial cleaning systems built for performance, degreasing, and residue control under high-load operations - Kleanfix.',
};

export default function IndustrialOperationsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title="Industrial Operations"
                subtitle="Industrial Cleaning Systems Built for Performance Under Load"
                imageSrc="/industrial/hero.webp"
                imageAlt="Industrial Operations Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-4 text-primary-dark max-w-7xl leading-snug">
                        <div>
                            <p className="text-primary-dark">
                                Industrial environments do not operate at rest.
                            </p>
                            <p className="text-primary-dark">
                                They operate under continuous load — with machinery, residue buildup, and constant usage cycles.
                            </p>
                        </div>

                        <div>
                            <p className="text-primary-dark leading-tight">
                                In these conditions, cleaning is not cosmetic.
                            </p>
                            <p className="text-primary-dark leading-tight">
                                It directly impacts efficiency, safety, and uptime.
                            </p>
                        </div>

                        <div>
                            <p className="text-primary-dark leading-tight">
                                Kleanfix structures cleaning as part of the operational system — not as a separate activity.
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

            {/* How Industrial Operations Actually Works Section */}
            <HowIndustrialOperationsWorksSection />

            {/* What Goes Wrong / System Solves Scroll Section */}
            <IndustrialOperationsSystemSolvesScroll />

            {/* How Kleanfix Maps Industrial Operations Section */}
            <HowKleanfixMapsIndustrialOperationsSection />

            {/* Operation Control by Zone Sticky Scroll Section */}
            <IndustrialOperationControlByZoneSection />

            {/* Scale & Residue Control Alert Banner Section */}
            <IndustrialScaleResidueControlSection />

            {/* Performance and Operational Continuity Section with Top Banner & Video */}
            <PerformanceAndContinuitySection />

            {/* What This Means for Operators Section */}
            <WhatThisMeansForIndustrialOperatorsSection />
        </main>
    );
}
