'use client';

import React from 'react';
import IndustryMappingGridSection from '@/components/industry/IndustryMappingGridSection';

const EXECUTION_CAPABILITIES_CARDS = [
    {
        id: 'custom-formulation',
        title: 'Custom Formulation',
        description: 'Translate requirement into a repeatable product system',
        imageSrc: '/oem/custom-feature.avif',
        imageAlt: 'Custom Formulation - Laboratory Glassware',
        isMiddle: false,
    },
    {
        id: 'bulk-manufacturing',
        title: 'Bulk Manufacturing',
        description: 'Structured production for consistent batches',
        imageSrc: '/oem/bulk-manufacturing.avif',
        imageAlt: 'Bulk Manufacturing - Forklift and Warehouse',
        isMiddle: true,
    },
    {
        id: 'private-label-packaging',
        title: 'Private Label Packaging',
        description: 'Your brand on a controlled product system',
        imageSrc: '/oem/private-label.avif',
        imageAlt: 'Private Label Packaging - Cleaning Product Bottles',
        isMiddle: false,
    },
    {
        id: 'label-artwork-support',
        title: 'Label & Artwork Support',
        description: 'Aligned to product and market requirements',
        imageSrc: '/oem/label-and-artwork.avif',
        imageAlt: 'Label & Artwork Support - Cleaning Time Supplies',
        isMiddle: false,
    },
    {
        id: 'regulatory-documentation-support',
        title: (
            <>
                Regulatory Documentation <br className="hidden md:block" />
                Support
            </>
        ),
        description: 'Based on category and geography',
        imageSrc: '/oem/regulatory.avif',
        imageAlt: 'Regulatory Documentation Support - Document Binders',
        isMiddle: true,
    },
    {
        id: 'nda-support',
        title: 'NDA Support',
        description: 'Available for confidential product development discussions',
        imageSrc: '/oem/nda-support.avif',
        imageAlt: 'NDA Support - Safe and Confidential Documents',
        isMiddle: false,
    },
];

export default function ExecutionCapabilitiesSection() {
    return (
        <IndustryMappingGridSection
            title="Execution capabilities"
            subtitle="Execution requires control across formulation, manufacturing, and delivery:"
            cards={EXECUTION_CAPABILITIES_CARDS}
            cta={{
                text: 'SUBMIT REQUIREMENT',
                href: '/contact-us',
                variant: 'pill-secondary',
                showArrow: false,
            }}
        />
    );
}
