'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';
import Button from '@/components/Button';

export const oemExecutionSlides = [
    {
        content: (
            <div className="space-y-4 md:space-y-5 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    How kleanfix <br className="hidden md:block" />
                    structures <br className="hidden md:block" />
                    OEM execution
                </h2>

                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                    Kleanfix does not operate as a manufacturing vendor. It operates as a controlled product development and execution system.
                </p>

                <div className="space-y-1">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-medium leading-snug">
                        Instead of fragmented execution, the system aligns:
                    </p>

                    <div className="text-base md:!text-[18px] font-normal leading-snug pt-1">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Product Formulation</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Manufacturing Processes</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Private Label Execution</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Documentation and Compliance</p>
                    </div>
                </div>

                <div className="space-y-1 pt-1">
                    <h3 className="text-primary font-semibold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-snug">
                        Outcome:
                    </h3>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        A product line that performs the same — every time it is produced.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/oem/slide1.avif',
        imageAlt: 'How kleanfix structures OEM execution',
    },
    {
        content: (
            <div className="space-y-4 md:space-y-5 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    Product <br className="hidden md:block" />
                    categories <br className="hidden md:block" />
                    and applications
                </h2>

                <div className="space-y-3">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                        OEM systems adapt across product categories:
                    </p>

                    <div className="space-y-2 text-base md:!text-[18px] font-normal leading-snug">
                        <div>
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Cleaning Products</p>
                            <p className="text-primary-dark font-normal md:!text-[16px] text-opacity-90">
                                Floor cleaners | detergents | surface systems
                            </p>
                        </div>
                        <div>
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Personal Care</p>
                            <p className="text-primary-dark font-normal md:!text-[16px] text-opacity-90">
                                Hand hygiene | body care
                            </p>
                        </div>
                        <div>
                            <p className="text-primary-dark font-normal md:!text-[18px]">• Specialty Products</p>
                            <p className="text-primary-dark font-normal md:!text-[16px] text-opacity-90">
                                Custom formulations based on requirement
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-2 md:pt-4">
                    <Button
                        variant="pill-secondary"
                        showArrow={false}
                        href="/how-the-system-works"
                        className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"
                    >
                        VIEW HOW THE SYSTEM WORKS
                    </Button>
                </div>
            </div>
        ),
        imageSrc: '/oem/slide2.avif',
        imageAlt: 'Product categories and applications',
    },
    {
        content: (
            <div className="space-y-4 md:space-y-5 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    How execution <br className="hidden md:block" />
                    is controlled
                </h2>

                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                    Execution is not a single step — it is a controlled chain:
                </p>

                <div className="space-y-1">
                    <p className="text-primary-dark text-base md:!text-[18px] font-normal leading-relaxed">
                        Requirement → Formulation → Production → Packaging → Delivery
                    </p>
                    <p className="text-primary-dark text-base md:!text-[18px] font-normal leading-snug">
                        Each stage is aligned before scale begins.
                    </p>
                </div>

                <div className="space-y-2 pt-1">
                    <h3 className="text-primary font-semibold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-snug">
                        This ensures:
                    </h3>

                    <div className="text-base md:!text-[18px] font-normal leading-snug pt-0.5">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Consistent Batches</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Stable Product Behaviour</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Predictable Performance</p>
                    </div>
                </div>
            </div>
        ),
        imageSrc: '/oem/slide3.avif',
        imageAlt: 'How execution is controlled',
    },
];

export default function OEMSystemSolvesScroll(props) {
    return (
        <SystemSolvesScroll
            bgColor="bg-[#F7F7F7]"
            slides={oemExecutionSlides}
            {...props}
        />
    );
}
