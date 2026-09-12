'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IndustryMappingGridSection from '@/components/industry/IndustryMappingGridSection';
import Button from '@/components/Button';

const PROOF_OF_APPLICATION_CARDS = [
    {
        id: 'hospitality-operations',
        title: 'Hospitality Operations',
        description: 'Managing multi-location consistency.',
        imageSrc: '/clients/hospitality-sec5.avif',
        imageAlt: 'Hospitality Operations - Proof of Application',
        href: '/industries/hospitality',
        isMiddle: false,
    },
    {
        id: 'healthcare-environments',
        title: 'Healthcare Environments',
        description: 'Requiring controlled hygiene execution.',
        imageSrc: '/clients/healthcare-sec5.avif',
        imageAlt: 'Healthcare Environments - Proof of Application',
        href: '/industries/healthcare',
        isMiddle: true,
    },
    {
        id: 'facility-management-operations',
        title: 'Facility Management Operations',
        description: 'Scaling across sites.',
        imageSrc: '/clients/facility-sec5.avif',
        imageAlt: 'Facility Management Operations - Proof of Application',
        href: '/industries/facility-services',
        isMiddle: false,
    },
    {
        id: 'oem-brands',
        title: 'OEM Brands',
        description: 'Stabilizing product quality.',
        imageSrc: '/clients/oem-sec5.avif',
        imageAlt: 'OEM Brands - Proof of Application',
        href: '/oem-private-label',
        isMiddle: false,
    },
    {
        id: 'export-distributors',
        title: 'Export Distributors',
        description: 'Maintaining repeatable performance across markets.',
        imageSrc: '/clients/exports-sec5.avif',
        imageAlt: 'Export Distributors - Proof of Application',
        href: '/exports',
        isMiddle: true,
    },
    {
        id: 'proof-statement',
        isStatement: true,
        text: 'This reflects real-world application, not theoretical capability.',
        isMiddle: false,
    },
];

export default function ProofOfApplicationSection() {
    return (
        <IndustryMappingGridSection
            title="Proof of application"
            subtitle="Kleanfix systems are actively used in:"
            cards={PROOF_OF_APPLICATION_CARDS}
        >
            {/* Industry Reference Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-primary rounded-xl py-10 md:py-14 lg:py-16 px-6 md:px-12 text-center text-white mt-8 md:mt-10"
            >
                <h3 className="text-white font-semibold text-2xl md:text-4xl lg:text-[48px] tracking-tight leading-tight">
                    Industry reference
                </h3>
                <p className="text-base md:text-lg lg:text-[20px] leading-relaxed mt-2 md:mt-3">
                    Systems are deployed across multiple industries.
                </p>
                <div className="mt-6 md:mt-7 flex justify-center">
                    <Button
                        variant="pill-secondary"
                        showArrow={false}
                        href="/industries"
                        className="font-semibold text-xs md:text-sm px-8 py-3.5 md:px-9 md:py-4 uppercase"
                    >
                        VIEW INDUSTRIES
                    </Button>
                </div>
            </motion.div>
        </IndustryMappingGridSection>
    );
}
