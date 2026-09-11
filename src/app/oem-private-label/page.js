import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import WhyProductLinesFailSection from './WhyProductLinesFailSection';
import OEMSystemSolvesScroll from './OEMSystemSolvesScroll';
import ExecutionCapabilitiesSection from './ExecutionCapabilitiesSection';
import PackagingAndExecutionSupportSection from './PackagingAndExecutionSupportSection';
import InfrastructureAndHowItWorksSection from './InfrastructureAndHowItWorksSection';
import MOQAndLeadTimeSection from './MOQAndLeadTimeSection';

export const metadata = {
    title: "OEM & Private Label Execution | Kleanfix",
    description: "OEM & Private Label Execution - Turn product ideas into structured, scalable systems with Kleanfix.",
};

export default function OEMPrivateLabelPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title={
                    <>
                        OEM & Private Label Execution
                    </>
                }
                subtitle={
                    <div className="space-y-1 mt-2">
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            Product lines don’t fail because of demand.
                        </p>
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            They fail when execution breaks at scale.
                        </p>
                    </div>
                }
                imageSrc="/oem/hero.webp"
                imageAlt="OEM & Private Label Execution Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-4 text-primary-dark max-w-7xl leading-snug">
                        <div className="space-y-1 text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            <p>Different batches behave differently.</p>
                            <p>Vendors introduce variation.</p>
                            <p>Control gets diluted as production grows.</p>
                        </div>

                        <div className="pt-2 space-y-1 text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            <p>
                                Kleanfix operates as a structured OEM system — not a contract manufacturer or vendor network.
                            </p>
                            <p>
                                Built to deliver consistent output across batches, scale, and markets.
                            </p>
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

            {/* Why Product Lines Fail Section */}
            <WhyProductLinesFailSection />

            {/* Horizontal Scroll: How Kleanfix Structures OEM Execution */}
            <OEMSystemSolvesScroll />

            {/* Execution Capabilities Grid Section */}
            <ExecutionCapabilitiesSection />

            {/* Packaging and Execution Support Video Banner Section */}
            <PackagingAndExecutionSupportSection />

            {/* Infrastructure and How It Works Section */}
            <InfrastructureAndHowItWorksSection />

            {/* MOQ and Lead Time Section */}
            <MOQAndLeadTimeSection />
        </main>
    );
}
