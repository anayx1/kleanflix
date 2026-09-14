'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const facilityCareSlides = [
    {
        title: "What this\nsystem solves",
        isLargeTitle: true,
        subtitle: "Inconsistent cleaning across facility environments directly impacts:",
        items: [
            "Hygiene Standards",
            "Surface Cleanliness",
            "Odor Control",
            "Maintenance Efficiency"
        ],
        imageSrc: "/facility-care/slide1.webp",
        imageAlt: "What this system solves - Caution cleaning in progress signs"
    },
    {
        title: "Facility Care addresses critical operational challenges such as:",
        items: [
            "Inconsistent surface hygiene",
            "Washroom cleanliness issues",
            "Odor buildup",
            "High-touch contamination risk",
            "Stains, dirt, and deposit buildup"
        ],
        imageSrc: "/facility-care/slide2.webp",
        imageAlt: "Operational challenges in unhygienic washroom facilities"
    },
    {
        title: "Without system alignment:",
        items: [
            "Cleaning becomes inconsistent",
            "Hygiene standards drop",
            "Maintenance effort increases"
        ],
        footerText: "This ensures predictable cleaning outcomes across teams, shifts, and locations.",
        cta: {
            text: "VIEW HOW THE SYSTEM WORKS",
            href: "/how-the-system-works",
            variant: "pill-secondary",
            showArrow: true
        },
        imageSrc: "/facility-care/slide3.webp",
        imageAlt: "Predictable cleaning outcomes in pristine modern washroom"
    }
];

/**
 * Facility Care WhatThisSystemSolvesScroll component
 * Passes the facility care slides into the reusable SystemSolvesScroll component.
 */
export default function WhatThisSystemSolvesScroll(props) {
    return <SystemSolvesScroll slides={facilityCareSlides} {...props} />;
}
