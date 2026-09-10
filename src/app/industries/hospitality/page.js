import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import HowHotelOperationsWorksSection from './HowHotelOperationsWorksSection';
import HospitalitySystemSolvesScroll from './HospitalitySystemSolvesScroll';
import HowKleanfixMapsHospitalitySection from './HowKleanfixMapsHospitalitySection';
import OperationControlByZoneSection from './OperationControlByZoneSection';
import HygieneConsistencySection from './HygieneConsistencySection';
import WhatThisMeansForHotelOperatorsSection from './WhatThisMeansForHotelOperatorsSection';

export const metadata = {
    title: "Hospitality | Kleanflix",
    description: "Where Consistency Defines Guest Experience - Kleanflix.",
};

export default function HospitalityPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title="Hospitality"
                subtitle="Where Consistency Defines Guest Experience"
                imageSrc="/hospitality/hero.webp"
                imageAlt="Hospitality Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark max-w-5xl leading-snug">
                        <div>
                            <p>A hotel does not operate in one environment.</p>
                            <p>It operates across rooms, washrooms, kitchens, laundry, and public spaces — each with different requirements, but one common expectation: a consistent guest experience.</p>
                        </div>

                        <div>
                            <p>That consistency does not come from products alone.</p>
                            <p>It comes from having the right system across every operational layer.</p>
                        </div>

                        <div>
                            <p>Kleanfix is built for hospitality environments where output must remain controlled across teams, zones, and properties.</p>
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

            {/* How Hotel Operations Actually Works Section */}
            <HowHotelOperationsWorksSection />

            {/* What Goes Wrong / System Solves Scroll Section */}
            <HospitalitySystemSolvesScroll />

            {/* How Kleanfix Maps Hospitality Operations Section */}
            <HowKleanfixMapsHospitalitySection />

            {/* Operation Control By Zone Sticky Scroll Section */}
            <OperationControlByZoneSection />

            {/* Hygiene Consistency Section */}
            <HygieneConsistencySection />

            {/* What This Means For Hotel Operators Section */}
            <WhatThisMeansForHotelOperatorsSection />
        </main>
    );
}
