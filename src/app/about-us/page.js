import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import StructureNotProductsSection from '@/components/about-us/StructureNotProductsSection';
import WhoWeAreSection from '@/components/about-us/WhoWeAreSection';
import WhereItAppliesSection from '@/components/about-us/WhereItAppliesSection';
import HowWeThinkSection from '@/components/about-us/HowWeThinkSection';
import StructureShiftScroll from '@/components/about-us/StructureShiftScroll';

export const metadata = {
    title: 'About Us | Kleanfix',
    description:
        'Building Systems — Not Just Supplying Products. Kleanfix operates as a manufacturing-led B2B business structured around controlled execution across cleaning and hygiene systems.',
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <ReededGlassHero
                title="About Us"
                subtitle="Building Systems — Not Just Supplying Products"
                imageSrc="/about-us/hero.webp"
                imageAlt="About Us Hero Background"
            />

            {/* Intro Content Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="max-w-7xl leading-snug">
                        <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] mb-6">
                            Most companies supply products.<br />
                            Few build systems.
                        </p>

                        <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] mb-6">
                            Kleanfix is built on a simple idea:<br />
                            Consistent output is more valuable than isolated product supply.
                        </p>

                        <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] mb-6">
                            We operate as a manufacturing-led B2B business structured around controlled execution — across cleaning and hygiene systems.<br />
                            Designed for environments where consistency must be maintained across scale, teams, and operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: Structure Over Products */}
            <StructureNotProductsSection />

            {/* Section 3: Who We Are */}
            <WhoWeAreSection />

            {/* Section 4: Where It Applies */}
            <WhereItAppliesSection />

            {/* Section 5: How We Think */}
            <HowWeThinkSection />

            {/* Section 6: Horizontal Scroll Shift */}
            <StructureShiftScroll />
        </main>
    );
}
