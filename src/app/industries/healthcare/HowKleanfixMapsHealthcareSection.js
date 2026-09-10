import React from 'react';
import IndustryMappingGridSection from '@/components/industry/IndustryMappingGridSection';

const HEALTHCARE_MAP_CARDS = [
    {
        id: 'patient-areas',
        title: 'Patient Areas',
        description: 'Facility Care for surface cleaning + Germ Control for sanitization layer',
        imageSrc: '/healthcare/patient-areas.webp',
        imageAlt: 'Patient Areas - Facility Care and Germ Control',
        isMiddle: false,
    },
    {
        id: 'washrooms',
        title: 'Washrooms',
        description: 'Facility Care + Germ Control for hygiene and maintenance',
        imageSrc: '/healthcare/washrooms.webp',
        imageAlt: 'Washrooms - Facility Care and Germ Control',
        isMiddle: true,
    },
    {
        id: 'linen-laundry',
        title: 'Linen & Laundry',
        description: 'Laundry Care for contamination control and consistency',
        imageSrc: '/healthcare/laundry.avif',
        imageAlt: 'Linen & Laundry - Laundry Care',
        isMiddle: false,
    },
    {
        id: 'hand-hygiene',
        title: 'Hand Hygiene Points',
        description: 'Personal Care systems for compliance and usability',
        imageSrc: '/healthcare/hygiene.avif',
        imageAlt: 'Hand Hygiene Points - Personal Care systems',
        isMiddle: false,
    },
    {
        id: 'conclusion-statement',
        isStatement: true,
        text: 'This mapping ensures hygiene is executed as a system — not as isolated actions.',
        isMiddle: true,
    },
];

export default function HowKleanfixMapsHealthcareSection() {
    return (
        <IndustryMappingGridSection
            title="How kleanfix maps healthcare operations"
            subtitle="Kleanfix aligns healthcare environments into controlled systems:"
            cards={HEALTHCARE_MAP_CARDS}
        />
    );
}
