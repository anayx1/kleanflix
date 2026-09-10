import React from 'react';
import IndustryOperationControlByZoneSection from '@/components/industry/IndustryOperationControlByZoneSection';

const ZONE_CARDS = [
    {
        id: 'patient-areas',
        title: 'Patient Areas',
        paragraphs: [
            'Continuous usage and high-touch surfaces increase contamination exposure.',
            'Kleanfix structures cleaning and sanitization layers together to maintain controlled hygiene environments.',
        ],
    },
    {
        id: 'washrooms',
        title: 'Washrooms',
        paragraphs: [
            'High microbial load and frequent use create hygiene instability.',
            'Kleanfix ensures controlled conditions through combined cleaning and sanitization layers.',
        ],
    },
    {
        id: 'linen-laundry',
        title: 'Linen & Laundry',
        paragraphs: [
            'Fabric becomes a major contamination carrier if not controlled.',
            'Kleanfix structures laundry processes to reduce cross-contamination and maintain hygiene consistency.',
        ],
    },
    {
        id: 'hand-hygiene-points',
        title: 'Hand Hygiene Points',
        paragraphs: [
            'Compliance is often inconsistent due to usability and behaviour.',
            'Kleanfix aligns systems to improve both accessibility and repeat usage.',
        ],
    },
];

export default function HealthcareOperationControlByZoneSection() {
    return (
        <IndustryOperationControlByZoneSection
            backgroundImage="/healthcare/operation-control-bg.avif"
            backgroundAlt="Healthcare operation control background"
            title="Operation control by zone"
            cards={ZONE_CARDS}
        />
    );
}
