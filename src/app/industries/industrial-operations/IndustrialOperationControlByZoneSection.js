import React from 'react';
import IndustryOperationControlByZoneSection from '@/components/industry/IndustryOperationControlByZoneSection';

const INDUSTRIAL_ZONE_CARDS = [
    {
        id: 'machinery-equipment',
        title: 'Machinery & Equipment',
        paragraphs: [
            'Continuous operation leads to heavy residue buildup.',
            'Kleanfix structures cleaning systems to restore performance without damaging sensitive equipment.',
        ],
    },
    {
        id: 'floors-work-areas',
        title: 'Floors & Work Areas',
        paragraphs: [
            'Oil spills and contamination create safety and usability risks.',
            'Kleanfix aligns cleaning systems to maintain controlled surface conditions under continuous use.',
        ],
    },
    {
        id: 'maintenance-cleaning',
        title: 'Maintenance Cleaning',
        paragraphs: [
            'Unstructured cleaning leads to unpredictable downtime.',
            'Kleanfix enables scheduled, system-driven cleaning aligned to maintenance cycles.',
        ],
    },
];

export default function IndustrialOperationControlByZoneSection() {
    return (
        <IndustryOperationControlByZoneSection
            backgroundImage="/industrial/operation-control.webp"
            backgroundAlt="Industrial operation control by zone"
            title="Operation control by zone"
            cards={INDUSTRIAL_ZONE_CARDS}
        />
    );
}
