'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const exportDemandsSlides = [
    {
        content: (
            <div className="space-y-4 md:space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    What export <br />
                    actually demands
                </h2>

                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                    Export success is not driven by <br className="hidden md:block" />
                    logistics.
                </p>

                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                    It depends on whether the product <br className="hidden md:block" />
                    performs the same — every time it <br className="hidden md:block" />
                    reaches a new market.
                </p>

                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                    Across conditions. Across usage <br className="hidden md:block" />
                    environments.
                </p>
            </div>
        ),
        imageSrc: '/exports/slide1.webp',
        imageAlt: 'What export actually demands - Stacks of shipping containers',
    },
    {
        content: (
            <div className="space-y-4 md:space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-2xl md:text-4xl lg:text-[42px] tracking-tight leading-snug">
                    That requires control over:
                </h2>

                <div className="text-primary-dark font-normal text-base md:text-lg lg:text-[20px] leading-snug space-y-2 pt-1">
                    <p>• Formulation Consistency</p>
                    <p>• Manufacturing Discipline</p>
                    <p>• Packaging Alignment</p>
                    <p>• Documentation Readiness</p>
                </div>
            </div>
        ),
        imageSrc: '/exports/slide2.avif',
        imageAlt: 'Cardboard package boxes moving on automated roller conveyor',
    },
    {
        content: (
            <div className="space-y-4 md:space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-2xl md:text-4xl lg:text-[42px] tracking-tight leading-snug">
                    Without this alignment:
                </h2>

                <div className="text-primary-dark font-normal text-base md:text-lg lg:text-[20px] leading-snug space-y-2 pt-1">
                    <p>• Products Behave Differently</p>
                    <p>• Complaints Increase</p>
                    <p>• Rejections Happen</p>
                    <p>• Trust Breaks</p>
                </div>

                <div className="pt-2 md:pt-4">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                        Kleanfix aligns these layers into <br className="hidden md:block" />
                        one structured system before <br className="hidden md:block" />
                        supply begins.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/exports/slide3.avif',
        imageAlt: 'Business team observing falling wooden jenga tower blocks',
    },
];

export default function ExportDemandsScroll() {
    return <SystemSolvesScroll slides={exportDemandsSlides} />;
}
