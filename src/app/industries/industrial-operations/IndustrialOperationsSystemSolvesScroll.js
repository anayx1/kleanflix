'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const industrialOperationsSlides = [
    {
        content: (
            <div>
                <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[50px] leading-tight mb-4 md:mb-5">
                    What goes wrong <br />
                    without a system
                </h2>

                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-tight mb-4 md:mb-5">
                    Industrial cleaning challenges are structural.
                </p>

                <div className="space-y-1 mb-4 md:mb-5">
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Grease and residue accumulate under continuous usage.
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Cleaning becomes inconsistent across teams.
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Manual methods create variation.
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Cleaning cycles disrupt operations instead of supporting them.
                    </p>
                </div>

                <div className="space-y-1 mb-4 md:mb-5">
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-medium leading-tight">
                        The result:
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Reduced Equipment Efficiency
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Increased Downtime
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Higher Maintenance Frequency
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Safety Risks Due To Contamination
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/industrial/slide1.webp',
        imageAlt: 'What goes wrong without a system - Caution cleaning in progress',
    },
    {
        content: (
            <div className="space-y-4 md:space-y-6">
                <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[50px] leading-tight">
                    Why industrial <br />
                    cleaning <br />
                    needs system
                </h2>

                <div className="space-y-3 text-primary-dark leading-snug">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        Industrial environments cannot depend on:
                    </p>
                    <div className="space-y-1 text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                            • General-Purpose Products
                        </p>
                        <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                            • Trial-Based Cleaning Methods
                        </p>
                        <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                            • Operator-Dependent Execution
                        </p>
                    </div>
                </div>
            </div>
        ),
        imageSrc: '/industrial/slide2.webp',
        imageAlt: 'Why industrial cleaning needs system',
    },
    {
        content: (
            <div className="space-y-6">
                <h3 className="text-primary-dark font-semibold text-2xl md:text-3xl lg:text-[34px] leading-tight">
                    Cleaning must be:
                </h3>

                <div className="space-y-1 text-primary-dark font-medium leading-relaxed">
                    <p className="text-primary-dark text-sm md:text-base lg:text-[17px] font-normal leading-relaxed">
                        • Repeatable
                    </p>
                    <p className="text-primary-dark text-sm md:text-base lg:text-[17px] font-normal leading-relaxed">
                        • Aligned to Operational Cycles
                    </p>
                    <p className="text-primary-dark text-sm md:text-base lg:text-[17px] font-normal leading-relaxed">
                        • Predictable Under Load
                    </p>
                </div>

                <div className="pt-4">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] font-normal leading-snug">
                        Kleanfix converts cleaning into a controlled process system — aligned with production.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/industrial/slide3.webp',
        imageAlt: 'Cleaning must be repeatable, aligned to operational cycles, predictable under load',
    },
];

export default function IndustrialOperationsSystemSolvesScroll(props) {
    return (
        <SystemSolvesScroll
            bgColor="bg-[#F7F7F7]"
            slides={industrialOperationsSlides}
            {...props}
        />
    );
}
