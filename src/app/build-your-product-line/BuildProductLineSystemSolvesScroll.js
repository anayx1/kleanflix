'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const buildProductLineSlides = [
    {
        content: (
            <div className="space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    What goes wrong <br className="hidden md:block" />
                    without a structure
                </h2>

                {/* Block 1: Most product journeys break at execution */}
                <div className="space-y-2">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                        Most product journeys break at execution:
                    </p>

                    <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Different vendors deliver different results.</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Formulations vary across batches.</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Development cycles become slow and unpredictable.</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Scaling introduces inconsistency.</p>
                    </div>
                </div>

                {/* Block 2: This leads to */}
                <div className="space-y-2">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                        This leads to:
                    </p>

                    <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Inconsistent Guest Experience</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Delayed Launches</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Unstable Product Quality</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Weak Differentiation</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Difficulty Scaling</p>
                    </div>
                </div>
            </div>
        ),
        imageSrc: '/product-line/slide1.webp',
        imageAlt: 'What goes wrong without a structure',
    },
    {
        content: (
            <div className="space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    Why product <br className="hidden md:block" />
                    building <br className="hidden md:block" />
                    needs system
                </h2>

                <div className="space-y-0.5">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                        Building a product is not about finding vendors.
                    </p>
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                        It is about controlling the system behind it.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/product-line/slide2.webp',
        imageAlt: 'Why product building needs system',
    },
    {
        content: (
            <div className="space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    A structured approach ensures:
                </h2>

                <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                    <p className="text-primary-dark font-normal md:!text-[18px]">• Consistent Formulation</p>
                    <p className="text-primary-dark font-normal md:!text-[18px]">• Controlled Production</p>
                    <p className="text-primary-dark font-normal md:!text-[18px]">• Faster Stabilization</p>
                    <p className="text-primary-dark font-normal md:!text-[18px]">• Scalable Execution</p>
                </div>

                <div className="pt-2">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                        Kleanfix operates as a system-driven partner — not a fragmented vendor network.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/product-line/slide3.webp',
        imageAlt: 'A structured approach ensures consistent formulation, controlled production, faster stabilization, scalable execution',
    },
];

export default function BuildProductLineSystemSolvesScroll(props) {
    return (
        <SystemSolvesScroll
            bgColor="bg-[#F7F7F7]"
            slides={buildProductLineSlides}
            {...props}
        />
    );
}
