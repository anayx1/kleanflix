import React from 'react';
import IndustryMappingGridSection from '@/components/industry/IndustryMappingGridSection';

const HOSPITALITY_MAP_CARDS = [
    {
        id: 'rooms-washrooms',
        title: 'Rooms & Washrooms',
        description: 'Facility Care for daily cleaning, hygiene, and Odor control',
        imageSrc: '/hospitality/rooms.avif',
        imageAlt: 'Rooms & Washrooms - Facility Care',
        isMiddle: false,
    },
    {
        id: 'kitchens',
        title: 'Kitchens',
        description: 'Kitchen Care for grease removal, hygiene, and safe food-prep support',
        imageSrc: '/hospitality/kitchen.avif',
        imageAlt: 'Kitchens - Kitchen Care',
        isMiddle: true,
    },
    {
        id: 'laundry',
        title: 'Laundry',
        description: 'Laundry Care for linen cleaning, stain control, and fabric consistency',
        imageSrc: '/hospitality/laundry.avif',
        imageAlt: 'Laundry - Laundry Care',
        isMiddle: false,
    },
    {
        id: 'guest-amenities',
        title: 'Guest Amenities & Hygiene Touchpoints',
        description: 'Personal Care systems for hand hygiene and user-facing products',
        imageSrc: '/hospitality/guest.avif',
        imageAlt: 'Guest Amenities & Hygiene Touchpoints - Personal Care',
        isMiddle: false,
    },
    {
        id: 'public-areas',
        title: 'Public Areas',
        description: 'Facility Care for multi-surface consistency and presentation',
        imageSrc: '/hospitality/public-area.avif',
        imageAlt: 'Public Areas - Facility Care',
        isMiddle: true,
    },
    {
        id: 'conclusion-statement',
        isStatement: true,
        text: 'This converts hotel operations into one connected execution system — instead of multiple disconnected activities.',
        isMiddle: false,
    },
];

export default function HowKleanfixMapsHospitalitySection() {
    return (
        <IndustryMappingGridSection
            title="How kleanfix maps hospitality operations"
            subtitle="Kleanfix structures hotel operations into aligned systems:"
            cards={HOSPITALITY_MAP_CARDS}
        />
    );
}
