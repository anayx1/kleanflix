import React from 'react'
import ReededGlassHero from '@/components/ReededGlassHero'
import Button from '@/components/Button'
import WhatThisSystemSolvesScroll from './WhatThisSystemSolvesScroll'
import WhySystemCleaningMattersSection from './WhySystemCleaningMattersSection'
import WhereItAppliesSection from './WhereItAppliesSection'
import ProductsSection from '@/components/ProductsSection'
import OEMScalingSupportSection from '@/components/OEMScalingSupportSection'
import CTASection from '@/components/CTASection'
import { getProductsByCategory } from '@/lib/api'

const facilityCare = async () => {
    const products = await getProductsByCategory('Facility Care');

    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Facility Care"
                subtitle="The Backbone of Daily Hygiene Systems"
                imageSrc="/facility-care/hero.webp"
                imageAlt="Contact Us Hero Background"
            />
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary-dark font-medium max-w-5xl leading-relaxed">
                        <div>
                            <p>Facility Care is designed for environments where:</p>
                            <p>Continuous cleaning</p>
                            <p>Multi-surface maintenance</p>
                            <p>Washroom hygiene</p>
                            <p>Odor control</p>
                            <p>must be maintained consistently across operations.</p>
                        </div>

                        <div className='text-primary'>
                            <p>Your requirement does not need to be fully defined yet.</p>
                            <p>Share what you are trying to solve — the system will map the rest.</p>
                        </div>

                        <div className="pt-2">
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
            <WhatThisSystemSolvesScroll />
            <WhySystemCleaningMattersSection />
            <WhereItAppliesSection />
            <ProductsSection products={products} />
            <CTASection
                title="Not sure which combination fits your requirement?"
                description="Share your use-case and we’ll map the right system."
                ctaText="SUBMIT REQUIREMENT"
                href="/contact-us"
            />
            <OEMScalingSupportSection />
        </main>
    )
}

export default facilityCare