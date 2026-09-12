import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import WhereSystemsOperateSection from './WhereSystemsOperateSection';
import ClientEcosystemSection from './ClientEcosystemSection';
import ProofOfApplicationSection from './ProofOfApplicationSection';
import ClientsWeHaveWorkedWithSection from './ClientsWeHaveWorkedWithSection';

export const metadata = {
    title: "Clients | Kleanfix",
    description: "Where Kleanfix Systems Are Deployed. Kleanfix systems are applied across environments where consistency and scale are critical.",
};

export default function ClientsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title="Clients"
                subtitle={
                    <div className="space-y-1 mt-2">
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            Where Kleanfix Systems Are Deployed
                        </p>
                        <p className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-wide drop-shadow-sm">
                            Kleanfix systems are applied across environments where consistency and scale are critical.
                        </p>
                    </div>
                }
                imageSrc="/clients/hero.webp"
                imageAlt="Clients Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary max-w-7xl leading-snug">
                        {/* Block 1 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                These are not theoretical use-cases.
                            </p>
                        </div>

                        {/* Block 2: Operational deployments */}
                        <div className="space-y-2">
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                They are real operational deployments across:
                            </p>
                            <div className="text-base md:text-lg lg:text-[20px] font-normal leading-snug pt-0.5 space-y-1">
                                <p className="text-primary">• Institutional Environments</p>
                                <p className="text-primary">• Product Manufacturing Ecosystems</p>
                                <p className="text-primary">• Export Markets</p>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                The focus is not on supplying products.
                            </p>
                        </div>

                        {/* Block 4 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                It is on enabling predictable performance across operations.
                            </p>
                        </div>

                        {/* CTA Button */}
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

            {/* Where Systems Operate Section */}
            <WhereSystemsOperateSection />

            {/* Client Ecosystem Section */}
            <ClientEcosystemSection />

            {/* Proof of Application Section */}
            <ProofOfApplicationSection />

            {/* Clients We Have Worked With Section */}
            <ClientsWeHaveWorkedWithSection />
        </main>
    );
}
