import React from 'react';
import IndustryOperationControlByZoneSection from '@/components/industry/IndustryOperationControlByZoneSection';

const ZONE_CARDS = [
    {
        id: 'rooms-washrooms',
        title: 'Rooms & Washrooms',
        paragraphs: [
            'These are the most visible zones in the guest journey. Inconsistency here shows up immediately through Odor variation, uneven cleaning quality, and poor room perception.',
            'Kleanfix brings control through structured daily maintenance systems that ensure predictable room quality across teams and properties.',
        ],
    },
    {
        id: 'kitchens',
        title: 'Kitchens',
        paragraphs: [
            'Hotel kitchens are high-pressure, hygiene-sensitive environments.',
            'Grease buildup, safety risks, and inconsistent cleaning routines directly affect operational quality.',
            'Kleanfix structures kitchen cleaning through stage-based systems designed for safer, more controlled back-of-house operations.',
        ],
    },
    {
        id: 'laundry',
        title: 'Laundry',
        paragraphs: [
            'Linen is one of the clearest signals of hospitality quality. When stains, fabric damage, or rewash cycles increase, the guest experience suffers and costs rise.',
            'Kleanfix aligns laundry operations through process-driven systems that support cleaner linen, better fabric handling, and consistent output.',
        ],
    },
    {
        id: 'guest-touchpoints',
        title: 'Guest Touchpoints',
        paragraphs: [
            'Hand hygiene, washroom products, and amenity experience shape how a property feels.',
            'When these touchpoints feel inconsistent, perception of quality weakens.',
            'Kleanfix supports these areas through controlled personal care and hygiene systems aligned to frequent guest use.',
        ],
    },
];

export default function OperationControlByZoneSection() {
    return (
        <IndustryOperationControlByZoneSection
            backgroundImage="/hospitality/operation-control-bg.avif"
            backgroundAlt="Luxury hotel lobby background"
            title="Operation control by zone"
            cards={ZONE_CARDS}
        />
    );
}
