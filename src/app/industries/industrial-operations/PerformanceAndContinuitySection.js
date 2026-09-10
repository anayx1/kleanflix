import React from 'react';
import IndustryBannerVideoSection from '@/components/industry/IndustryBannerVideoSection';

export default function PerformanceAndContinuitySection() {
    return (
        <IndustryBannerVideoSection
            bannerImageSrc="/industrial/sec-top.webp"
            bannerImageAlt="Performance and operational continuity banner"
            bannerRoundedAll={true}
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.18]">
                    Performance and <br className="hidden md:block" />
                    operational continuity
                </h2>
            }
            row1Content={
                <div className="space-y-5 text-primary-dark">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        Industrial cleaning systems must perform under stress.
                    </p>

                    <div className="space-y-1 text-primary-dark text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">That means:</p>
                        <p className="font-normal">• Consistent Performance Across Cycles</p>
                        <p className="font-normal">• Effectiveness Under Pressure</p>
                        <p className="font-normal">• Minimal Need for Rework</p>
                    </div>

                    <div className="space-y-1 text-primary-dark text-sm md:text-base lg:text-[17px] leading-relaxed pt-1">
                        <p className="font-normal">When cleaning is unstructured:</p>
                        <p className="font-normal">• Operations Are Interrupted</p>
                        <p className="font-normal">• Downtime Increases</p>
                        <p className="font-normal">• Results Become Unpredictable</p>
                    </div>
                </div>
            }
            videoSrc="/hospitality/hygiene-consistency-comp.mp4"
            row2Content={
                <div className="space-y-5 text-primary-dark">
                    <div className="space-y-1 text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">With system-based cleaning:</p>
                        <p className="font-normal">• Cleaning Aligns with Production Schedules</p>
                        <p className="font-normal">• Disruption Is Minimized</p>
                        <p className="font-normal">• Performance Remains Stable</p>
                    </div>

                    <div className="pt-2">
                        <p className="text-primary-dark text-base md:text-lg lg:text-[19px] font-normal leading-snug">
                            Cleaning becomes part of the process — not an interruption.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
