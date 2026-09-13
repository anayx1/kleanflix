import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import CertificationsValidationSection from './CertificationsValidationSection';
import CertificatesShowcaseSection from './CertificatesShowcaseSection';
import CertificationsComplianceSystemSolvesScroll from './CertificationsComplianceSystemSolvesScroll';

export const metadata = {
    title: "Certifications & Compliance | Kleanfix",
    description: "That Support Consistent Execution. Compliance is not documentation — it is a system requirement.",
};

export default function CertificationsCompliancePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title={
                    <>
                        Certifications &amp; <br />
                        Compliance
                    </>
                }
                subtitle="That Support Consistent Execution"
                imageSrc="/certifications-compliance/hero.webp"
                imageAlt="Certifications and Compliance Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary max-w-7xl leading-snug">
                        {/* Block 1 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                Compliance is not documentation.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                It is a system requirement.
                            </p>
                        </div>

                        {/* Block 3: Operates with */}
                        <div className="space-y-2">
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                Kleanfix operates with:
                            </p>
                            <div className="text-base md:text-lg lg:text-[20px] font-normal leading-snug pt-0.5 space-y-1">
                                <p className="text-primary">• Structured Manufacturing Processes</p>
                                <p className="text-primary">• Controlled Formulation Systems</p>
                                <p className="text-primary">• Aligned Documentation Practices</p>
                            </div>
                        </div>

                        {/* Block 4 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                To ensure consistency in output — not just compliance on paper.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Validation Split Section */}
            <CertificationsValidationSection />

            {/* All 5 Official Certificates Showcase Section */}
            <CertificatesShowcaseSection />

            {/* Horizontal Scroll: Testing, Statutory Compliance & Value Delivered */}
            <CertificationsComplianceSystemSolvesScroll />
        </main>
    );
}
