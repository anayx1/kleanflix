import ReededGlassHero from '@/components/ReededGlassHero'
import RealWorldSystemsSection from '@/components/RealWorldSystemsSection'
import React from 'react'
import SolveOrBuildSection from '@/components/hompeage/SolveOrBuildSection'
import SystemOverviewTableSection from '@/components/SystemOverviewTableSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'

const productsFaqs = [
    {
        question: "How do I choose the right system?",
        answer: "Start with your requirement above — each option maps directly to a system"
    },
    {
        question: "Do I need technical knowledge?",
        answer: "No — the system is designed around application, not chemistry"
    },
    {
        question: "Can multiple systems be combined?",
        answer: "Yes — most real-world environments require a combination of systems"
    },
    {
        question: "Do you support OEM and customization?",
        answer: "Yes — including formulation, manufacturing, and sensory integration"
    }
];

const ProductsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <ReededGlassHero
                title="Products"
                subtitle="Find the right system — without needing to understand the chemistry or formulations."
                imageSrc="/products/hero.webp"
                imageAlt="Products Hero Background"
            />
            <RealWorldSystemsSection />
            <SolveOrBuildSection />
            <SystemOverviewTableSection />
            <CTASection
                title="Need technical validation before proceeding?"
                ctaText="REQUEST TECHNICAL DETAILS"
                href="/contact-us"
                secondaryCtaText="VIEW HOW THE SYSTEM WORKS"
                secondaryHref="/contact-us"
                bg="#F7F7F7"
            />
            <FAQSection faqs={productsFaqs} />
        </main>
    )
}

export default ProductsPage