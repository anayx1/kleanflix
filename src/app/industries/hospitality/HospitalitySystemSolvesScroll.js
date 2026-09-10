'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const hospitalitySlides = [
    {
        title: "What goes wrong\nwithout a system",
        isLargeTitle: true,
        headingClassName: "font-bold text-3xl md:text-5xl lg:text-[50px] text-primary mb-4 md:mb-6 leading-tight",
        sections: [
            {
                subtitle: "Different teams use products differently:",
                titleClassName: "font-sans font-medium text-base md:text-xl lg:text-[22px] text-primary leading-tight mb-2 md:mb-3",
                items: [
                    "Standards vary from room to room and property to property.",
                    "Kitchen hygiene becomes reactive.",
                    "Laundry results become inconsistent."
                ]
            },
            {
                className: "mt-4 md:mt-5",
                subtitle: "The result:",
                titleClassName: "font-sans font-medium text-base md:text-xl lg:text-[22px] text-primary leading-tight mb-2 md:mb-3",
                items: [
                    "Inconsistent Guest Experience",
                    "Operational Inefficiency",
                    "Higher Maintenance Effort",
                    "Weaker Brand Perception"
                ]
            }
        ],
        imageSrc: "/hospitality/slide1.webp",
        imageAlt: "What goes wrong without a system - Caution cleaning in progress sign"
    },
    {
        title: "Why hospitality\nneeds system",
        isLargeTitle: true,
        headingClassName: "font-bold text-3xl md:text-5xl lg:text-[50px] text-primary mb-5 md:mb-7 leading-tight",
        subtitle: "Hospitality environments operate across multiple interconnected touchpoints.",
        footerText: "Guests may not see the backend operations — but they experience the outcome of every inconsistency.",
        footerClassName: "font-sans font-medium text-base md:text-xl lg:text-[22px] text-primary leading-relaxed mt-4 md:mt-5",
        imageSrc: "/hospitality/slide2.avif",
        imageAlt: "Why hospitality needs system - Front desk and hotel operations"
    },
    {
        sections: [
            {
                subtitle: "Without structured system:",
                titleClassName: "font-sans font-medium text-lg md:text-2xl lg:text-[26px] text-primary leading-tight mb-3 md:mb-4",
                items: [
                    "Room quality varies",
                    "Laundry output becomes unstable",
                    "Kitchen hygiene becomes reactive",
                    "Guest experience becomes dependent on individual teams"
                ]
            },
            {
                className: "mt-6 md:mt-7",
                subtitle: "Hospitality operations require:",
                titleClassName: "font-sans font-medium text-lg md:text-2xl lg:text-[26px] text-primary leading-tight mb-3 md:mb-4",
                items: [
                    "Repeatable Execution",
                    "Standardized Processes",
                    "Consistent Output Across Properties"
                ]
            }
        ],
        footerText: "Kleanfix converts hospitality cleaning and hygiene into a structured operational system — not isolated activities.",
        footerClassName: "font-sans font-normal text-base md:text-lg lg:text-[20px] text-primary leading-relaxed mt-6 md:mt-8",
        imageSrc: "/hospitality/slide3.avif",
        imageAlt: "Hospitality operations require structured system - Housekeeping and kitchen staff"
    }
];

export default function HospitalitySystemSolvesScroll(props) {
    return (
        <SystemSolvesScroll
            bgColor="bg-[#F7F7F7]"
            slides={hospitalitySlides}
            {...props}
        />
    );
}
