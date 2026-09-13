import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import WhyMostSetupsFailSection from './WhyMostSetupsFailSection';
import OutcomeSection from './OutcomeSection';
import WhereSystemsConnectSection from './WhereSystemsConnectSection';
import WhatThisLooksLikeSection from './WhatThisLooksLikeSection';
import WhatThisMeansForYouSection from './WhatThisMeansForYouSection';

export const metadata = {
    title: "How The System Works | kleanfix",
    description: "This is not a product flow. This is a system designed to control output - kleanfix.",
};

export default function HowTheSystemWorksPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Effect */}
            <ReededGlassHero
                title="How the system works"
                subtitle={
                    <>
                        This is not a product flow.<br />
                        This is a system designed to control output.
                    </>
                }
                imageSrc="/how-the-system-works/hero.png"
                imageAlt="How the system works Hero Background"
            />

            {/* Static Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-4 text-primary font-medium max-w-5xl leading-snug">
                        <div>
                            <p className='text-primary-dark'>Most businesses don’t fail because of poor products.</p>
                            <p className='text-primary-dark'>They fail because the system behind those products is fragmented.</p>
                            <p>Different vendors.</p>
                            <p>Different formulations.</p>
                            <p>Different outcomes across operations.</p>
                        </div>

                        <div>
                            <p>Kleanfix replaces that fragmentation with one structured system.</p>
                        </div>

                        <div>
                            <p className='text-primary-dark'>Designed to deliver consistent output across operations and scale:</p>
                            <p>Same formulation.</p>
                            <p>Same performance.</p>
                            <p>Same output — at scale.</p>
                        </div>

                        <div>
                            <p>Your requirement does not need to be fully defined.</p>
                            <p>Share what you are trying to solve — the system will map the rest.</p>
                        </div>

                        {/* Action CTAs */}
                        <div className="pt-2 flex flex-wrap items-center gap-4 md:gap-6">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/contact-us"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5"
                            >
                                SUBMIT REQUIREMENT
                            </Button>
                            <Button
                                variant="secondary"
                                href="/products"
                                className="font-semibold text-xs md:text-sm"
                            >
                                VIEW PRODUCT SYSTEMS
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Most Setups Fail Section (3-column layout with video) */}
            <WhyMostSetupsFailSection />

            {/* Outcome Section with Diagram Image */}
            <OutcomeSection />

            {/* Where Systems Connect Section */}
            <WhereSystemsConnectSection />

            {/* What This Looks Like Section */}
            <WhatThisLooksLikeSection />

            {/* What This Means For You Section */}
            <WhatThisMeansForYouSection />
        </main>
    );
}
