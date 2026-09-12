import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import ExportDemandsScroll from './ExportDemandsScroll';
import ProvenAcrossMarketsSection from './ProvenAcrossMarketsSection';
import GlobalExportSection from '@/components/hompeage/GlobalExportSection';
import ConsistentPerformanceSection from './ConsistentPerformanceSection';
import HowExportRiskControlledSection from './HowExportRiskControlledSection';
import WhoThisIsBuiltForSection from './WhoThisIsBuiltForSection';
import ExportReadyExecutionSection from './ExportReadyExecutionSection';
import BuiltForContinuitySection from './BuiltForContinuitySection';

export const metadata = {
    title: "Exports | Kleanfix",
    description: "Export is not about shipping products. It is about delivering the same result — across markets. Kleanfix structures export as a controlled supply system — not dispatch or trading.",
};

export default function ExportsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title="Exports"
                subtitle={
                    <div className="space-y-1 mt-2">
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            Export is not about shipping products.
                        </p>
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            It is about delivering the same result — across markets.
                        </p>
                    </div>
                }
                imageSrc="/exports/hero.webp"
                imageAlt="Exports Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark max-w-7xl leading-snug">
                        {/* Block 1: Bullet items */}
                        <div className="space-y-1 text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            <p>• Different climates.</p>
                            <p>• Different usage conditions.</p>
                            <p>• Different regulatory environments.</p>
                        </div>

                        {/* Block 2: Without control statement */}
                        <div className="space-y-1 text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            <p>Without control, the same product behaves differently across geographies.</p>
                            <p>Kleanfix structures export as a controlled supply system — not dispatch or trading.</p>
                        </div>

                        {/* Block 3: Designed to deliver */}
                        <div className="space-y-2">
                            <p className="text-primary font-semibold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-snug">
                                Designed to deliver:
                            </p>

                            <div className="text-base md:!text-[18px] font-normal leading-snug pt-0.5 space-y-1">
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Consistent Formulation Across Shipments</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Stable Performance Across Markets</p>
                                <p className="text-primary-dark font-normal md:!text-[18px]">• Reliable Supply Across Timelines</p>
                            </div>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-2 md:pt-4">
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

            {/* Horizontal Scroll: What Export Actually Demands */}
            <ExportDemandsScroll />

            {/* Proven Across Markets Section */}
            <ProvenAcrossMarketsSection />

            {/* Global Export Presence Section */}
            <GlobalExportSection />

            {/* Consistent Performance Across Markets Section */}
            <ConsistentPerformanceSection />

            {/* How Export Risk Is Controlled Section */}
            <HowExportRiskControlledSection />

            {/* Who This Is Built For Section */}
            <WhoThisIsBuiltForSection />

            {/* Export Ready Execution Section with Video */}
            <ExportReadyExecutionSection />

            {/* Built For Continuity & What This Means For You Section */}
            <BuiltForContinuitySection />
        </main>
    );
}
