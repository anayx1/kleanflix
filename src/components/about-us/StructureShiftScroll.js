'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const aboutUsStructureSlides = [
    {
        content: (
            <div className="flex flex-col justify-center text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-4 md:mb-6">
                    What goes wrong <br />
                    without structure
                </h2>

                <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-snug mb-3">
                    Without a structured system:
                </p>

                <div className="space-y-1 pl-1 mb-6 md:mb-8">
                    <p className="text-[18px] text-primary-dark">• Multiple Vendors Increase Complexity</p>
                    <p className="text-[18px] text-primary-dark">• Output Becomes Inconsistent</p>
                    <p className="text-[18px] text-primary-dark">• Product Performance Becomes Unpredictable</p>
                    <p className="text-[18px] text-primary-dark">• Scaling Becomes Difficult</p>
                </div>

                <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-relaxed max-w-xl">
                    This increases operational cost, reduces control, and creates dependency on fragmented execution.
                </p>
            </div>
        ),
        imageSrc: '/about-us/slide1.avif',
        imageAlt: 'What goes wrong without structure - Cleaning bottles and supplies on foamy surface',
        imageContainerClassName: 'relative w-full h-[320px] md:h-[480px] lg:h-[560px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm',
    },
    {
        content: (
            <div className="flex flex-col justify-center text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-4 md:mb-6">
                    What this means <br />
                    in practice
                </h2>

                <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-snug mb-3">
                    With structured systems:
                </p>

                <div className="space-y-1 pl-1 mb-6 md:mb-8">
                    <p className="text-[18px] text-primary-dark">• Execution Becomes Controlled</p>
                    <p className="text-[18px] text-primary-dark">• Output Becomes Predictable</p>
                    <p className="text-[18px] text-primary-dark">• Scaling Becomes Stable</p>
                    <p className="text-[18px] text-primary-dark">• Dependency on Multiple Vendors Reduces</p>
                </div>

                <p className="text-primary-dark font-medium text-lg md:text-xl lg:text-[22px] leading-relaxed max-w-xl">
                    This is the shift Kleanfix is designed to enable.
                </p>
            </div>
        ),
        imageSrc: '/about-us/slide2.avif',
        imageAlt: 'What this means in practice - Cleaning tools, sponges, and spray bottles',
        imageContainerClassName: 'relative w-full h-[320px] md:h-[480px] lg:h-[560px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm',
    },
];

export default function StructureShiftScroll({ heightClass = "h-[300vh]" }) {
    return <SystemSolvesScroll slides={aboutUsStructureSlides} heightClass={heightClass} />;
}
