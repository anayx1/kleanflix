import React from 'react';
import IndustryMappingGridSection from '@/components/industry/IndustryMappingGridSection';

const INDUSTRIAL_MAP_CARDS = [
    {
        id: 'machinery-equipment',
        title: 'Machinery & Equipment',
        description: 'Targeted degreasing and residue removal systems',
        imageSrc: '/industrial/machinery.webp',
        imageAlt: 'Machinery & Equipment',
        isMiddle: false,
    },
    {
        id: 'equipment-maintenance',
        title: 'Equipment Maintenance',
        description: 'Controlled cleaning aligned with maintenance cycles',
        imageSrc: '/industrial/equipments.webp',
        imageAlt: 'Equipment Maintenance',
        isMiddle: true,
    },
    {
        id: 'floors-work-areas',
        title: 'Floors & Work Areas',
        description: 'Structured cleaning for contamination and safety control',
        imageSrc: '/industrial/floor-and-work.webp',
        imageAlt: 'Floors & Work Areas',
        isMiddle: false,
    },
    {
        id: 'scale-build-up',
        title: 'Scale & Build-Up',
        description: 'Specialized scale-removal and residue-control systems',
        imageSrc: '/industrial/scale.webp',
        imageAlt: 'Scale & Build-Up',
        isMiddle: false,
    },
    {
        id: 'high-risk-areas',
        title: 'High-Risk Areas',
        description: 'Germ Control where contamination risk requires additional control',
        imageSrc: '/industrial/high-risk.webp',
        imageAlt: 'High-Risk Areas',
        isMiddle: true,
    },
    {
        id: 'conclusion-statement',
        isStatement: true,
        text: 'This mapping ensures cleaning aligns with operational function — not generic categories.',
        isMiddle: false,
    },
];

export default function HowKleanfixMapsIndustrialOperationsSection() {
    return (
        <IndustryMappingGridSection
            title="How kleanfix maps industrial operations"
            subtitle="Industrial cleaning requirements are structured into systems:"
            cards={INDUSTRIAL_MAP_CARDS}
        />
    );
}
