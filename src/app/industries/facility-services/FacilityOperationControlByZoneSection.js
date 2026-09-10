import React from 'react';
import IndustryOperationControlByZoneSection from '@/components/industry/IndustryOperationControlByZoneSection';

const ZONE_CARDS = [
    {
        id: 'general-areas',
        title: 'General Areas',
        paragraphs: [
            'High-frequency use creates visible variation across sites.',
            'Kleanfix ensures a consistent baseline of hygiene and presentation through structured daily systems.',
        ],
    },
    {
        id: 'washrooms',
        title: 'Washrooms',
        paragraphs: [
            'Frequent usage and hygiene sensitivity make these areas unstable without control.',
            'Kleanfix aligns cleaning systems to maintain predictable hygiene conditions and reduce complaints.',
        ],
    },
    {
        id: 'carpets-upholstery',
        title: 'Carpets & Upholstery',
        paragraphs: [
            'Embedded dirt and inconsistent cleaning cycles reduce appearance and hygiene.',
            'Kleanfix structures deep cleaning and maintenance cycles for better surface performance.',
        ],
    },
    {
        id: 'marble-premium-surfaces',
        title: 'Marble & Premium Surfaces',
        paragraphs: [
            'Improper maintenance leads to damage, dullness, and high restoration cost.',
            'Kleanfix supports preservation-focused systems to extend surface life and reduce long-term cost.',
        ],
    },
];

export default function FacilityOperationControlByZoneSection() {
    return (
        <IndustryOperationControlByZoneSection
            backgroundImage="/facility-service/operation-control.webp"
            backgroundAlt="Facility services operation control background"
            title="Operation control by zone"
            cards={ZONE_CARDS}
        />
    );
}
