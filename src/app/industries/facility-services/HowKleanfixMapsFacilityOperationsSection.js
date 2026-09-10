import React from 'react';
import IndustryMappingGridSection from '@/components/industry/IndustryMappingGridSection';

const FACILITY_MAP_CARDS = [
    {
        id: 'general-areas',
        title: 'General Areas',
        description: 'Facility Care for daily cleaning and hygiene consistency',
        imageSrc: '/facility-service/generalareas.avif',
        imageAlt: 'General Areas - Facility Care',
        isMiddle: false,
    },
    {
        id: 'washrooms',
        title: 'Washrooms',
        description: 'Facility Care for hygiene, Odor control, and maintenance',
        imageSrc: '/facility-service/washrooms.avif',
        imageAlt: 'Washrooms - Facility Care',
        isMiddle: true,
    },
    {
        id: 'high-traffic-areas',
        title: 'High-Traffic Areas',
        description: 'Facility Care for durability and consistent output',
        imageSrc: '/facility-service/high-traffic-areas.avif',
        imageAlt: 'High-Traffic Areas - Facility Care',
        isMiddle: false,
    },
    {
        id: 'textile-surfaces',
        title: 'Textile Surfaces',
        description: 'Carpet Care for deep cleaning and stain management',
        imageSrc: '/facility-service/textile-surface.avif',
        imageAlt: 'Textile Surfaces - Carpet Care',
        isMiddle: false,
    },
    {
        id: 'premium-surfaces',
        title: 'Premium Surfaces',
        description: 'Marble Care for preservation and finish control',
        imageSrc: '/facility-service/premium-surfaces.avif',
        imageAlt: 'Premium Surfaces - Marble Care',
        isMiddle: true,
    },
    {
        id: 'high-risk-areas',
        title: 'High-Risk Areas',
        description: 'Germ Control for sanitization and contamination control',
        imageSrc: '/facility-service/high-risk.avif',
        imageAlt: 'High-Risk Areas - Germ Control',
        isMiddle: false,
    },
    {
        id: 'conclusion-statement',
        isStatement: true,
        text: 'This creates a unified system across different surfaces and site conditions.',
        isMiddle: false,
    },
];

export default function HowKleanfixMapsFacilityOperationsSection() {
    return (
        <IndustryMappingGridSection
            title="How kleanfix maps facility operations"
            subtitle="Facility operations are structured into aligned systems:"
            cards={FACILITY_MAP_CARDS}
        />
    );
}
