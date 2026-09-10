import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import HowMultiSiteOperationsWorksSection from './HowMultiSiteOperationsWorksSection';
import FacilityServicesSystemSolvesScroll from './FacilityServicesSystemSolvesScroll';
import HowKleanfixMapsFacilityOperationsSection from './HowKleanfixMapsFacilityOperationsSection';
import FacilityOperationControlByZoneSection from './FacilityOperationControlByZoneSection';
import FacilityHighRiskAreasSection from './FacilityHighRiskAreasSection';
import ScalabilityAndReplicationSection from './ScalabilityAndReplicationSection';
import WhatThisMeansForFacilityOperatorsSection from './WhatThisMeansForFacilityOperatorsSection';

export const metadata = {
    title: "Facility Services | Kleanflix",
    description: "Where Scale Demands System Control - Kleanflix.",
};

export default function FacilityCarePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title="Facility Services"
                subtitle="Where Scale Demands System Control"
                imageSrc="/facility-service/hero.webp"
                imageAlt="Facility Services Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-0 text-primary-dark max-w-7xl leading-snug">
                        <div>
                            <p className="text-primary-dark">
                                Facility management is not about cleaning one site.
                            </p>
                            <p className="text-primary-dark">
                                It is about maintaining consistency across multiple locations, teams, surfaces, and standards.
                            </p>
                        </div>

                        <div>
                            <p className="text-primary-dark leading-tight">
                                The challenge is not execution.
                            </p>
                            <p className="text-primary-dark leading-tight">
                                The challenge is replication at scale.
                            </p>
                        </div>

                        <div>
                            <p className="text-primary-dark leading-tight">
                                Kleanfix structures facility operations into systems that deliver controlled output across all sites.
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

            {/* How Multi-Site Operations Actually Works Section */}
            <HowMultiSiteOperationsWorksSection />

            {/* What Goes Wrong / System Solves Scroll Section */}
            <FacilityServicesSystemSolvesScroll />

            {/* How Kleanfix Maps Facility Operations Section */}
            <HowKleanfixMapsFacilityOperationsSection />

            {/* Facility Operation Control by Zone Sticky Scroll Section */}
            <FacilityOperationControlByZoneSection />

            {/* High-Risk Areas Alert Banner Section */}
            <FacilityHighRiskAreasSection />

            {/* Scalability and Replication Section with Top Banner & Video */}
            <ScalabilityAndReplicationSection />

            {/* What This Means for Facility Operators Section */}
            <WhatThisMeansForFacilityOperatorsSection />
        </main>
    );
}
