import React from 'react';
import IndustryOperationsSection from '@/components/industry/IndustryOperationsSection';

export default function WhatFoundersActuallyExperienceSection() {
    return (
        <IndustryOperationsSection
            imageSrc="/product-line/what-founder.webp"
            imageAlt="What founders actually experience"
            heading={
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    What founders <br className="hidden md:block" />
                    actually experience
                </h2>
            }
        >
            <div className="space-y-6 text-primary-dark">
                {/* Block 1: Launching a product & decisions */}
                <div className="space-y-2">
                    <div className="space-y-0.5">
                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            Launching a product is not one step.
                        </p>
                        <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                            It is a chain of decisions:
                        </p>
                    </div>

                    <div className=" text-base md:!text-[18px] font-normal leading-snug pt-1">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Formulation</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Manufacturing</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Packaging</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Supply</p>
                    </div>
                </div>

                {/* Block 2: Without structure */}
                <div className="space-y-1">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                        Without structure, this becomes:
                    </p>
                    <p className="text-primary-dark text-base md:!text-[18px] font-normal leading-relaxed">
                        Idea → Vendor Search → Sampling → Rework → Delays → Inconsistency → Lost Momentum
                    </p>
                </div>

                {/* Block 3: Conclusion */}
                <div className="space-y-0.5">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                        Execution becomes fragmented.
                    </p>
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                        Control is lost early.
                    </p>
                </div>
            </div>
        </IndustryOperationsSection>
    );
}
