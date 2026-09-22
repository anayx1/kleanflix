import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import HowHealthcareEnvironmentOperatesSection from './HowHealthcareEnvironmentOperatesSection';
import HealthcareSystemSolvesScroll from './HealthcareSystemSolvesScroll';
import HowKleanfixMapsHealthcareSection from './HowKleanfixMapsHealthcareSection';
import HealthcareOperationControlByZoneSection from './HealthcareOperationControlByZoneSection';
import GermControlCoreLayerSection from './GermControlCoreLayerSection';
import WhatThisMeansForHealthcareOperatorsSection from './WhatThisMeansForHealthcareOperatorsSection';

export const metadata = {
    title: 'Healthcare Cleaning & Hygiene Systems | Kleanfix',
    description:
        'Hospital-grade infection control, sanitization, and hygiene management systems for healthcare environments - Kleanfix.',
};

export default function HealthcarePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title="Healthcare"
                subtitle="Where Hygiene Is a Control System, not a Task"
                imageSrc="/healthcare/hero.webp"
                imageAlt="Healthcare Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 text-primary-dark max-w-5xl leading-snug">
                        <div>
                            <p className="text-primary-dark ">
                                Healthcare environments operate under continuous risk.
                            </p>
                            <p className="text-primary-dark ">
                                Every surface, every touchpoint, every process directly impacts:
                            </p>
                            <div className="space-y-1 text-primary-dark  pt-2">
                                <p className="text-primary-dark ">
                                    • Infection Risk
                                </p>
                                <p className="text-primary-dark ">
                                    • Patient Safety
                                </p>
                                <p className="text-primary-dark ">
                                    • Compliance Standards
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-primary-dark leading-tight">
                                This is not a cleaning problem.
                            </p>
                            <p className="text-primary-dark leading-tight">
                                It is a control problem.
                            </p>
                        </div>

                        <div>
                            <p className="text-primary-dark leading-tight">
                                Kleanfix structures hygiene as a controlled system — not a set of products.
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

            {/* How Healthcare Environment Actually Operate Section */}
            <HowHealthcareEnvironmentOperatesSection />

            {/* What Goes Wrong / System Solves Scroll Section */}
            <HealthcareSystemSolvesScroll />

            {/* How Kleanfix Maps Healthcare Operations Section */}
            <HowKleanfixMapsHealthcareSection />

            {/* Healthcare Operation Control by Zone Sticky Scroll Section */}
            <HealthcareOperationControlByZoneSection />

            {/* Germ Control - The Core Layer Section with Video */}
            <GermControlCoreLayerSection />

            {/* What This Means for Healthcare Operators Section */}
            <WhatThisMeansForHealthcareOperatorsSection />
        </main>
    );
}
