import React from 'react';
import IndustryBannerVideoSection from '@/components/industry/IndustryBannerVideoSection';

export default function ScalabilityAndReplicationSection() {
    return (
        <IndustryBannerVideoSection
            bannerImageSrc="/facility-service/sec-top-img.avif"
            bannerImageAlt="Scalability and replication banner"
            bannerRoundedAll={true}
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.18]">
                    Scalability and replication
                </h2>
            }
            row1Content={
                <div className="space-y-5 text-primary-dark">
                    <div className="space-y-1">
                        <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                            The biggest challenge in facility management is not cleaning.
                        </p>
                        <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                            It is achieving the same result across all sites.
                        </p>
                    </div>

                    <div className="space-y-1 text-primary-dark text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">
                            With system-based execution:
                        </p>
                        <p className="font-normal">• Processes Remain Consistent</p>
                        <p className="font-normal">• Output Remains Stable</p>
                        <p className="font-normal">• Team Dependency Reduces</p>
                        <p className="font-normal">• New Staff Onboarding Becomes Faster</p>
                    </div>

                    <div className="space-y-0.5 text-primary-dark text-sm md:text-base lg:text-[17px] pt-1">
                        <p className="font-normal">
                            This shifts operations from:
                        </p>
                        <p className="font-normal">
                            → Person-Driven → System-Driven
                        </p>
                    </div>
                </div>
            }
            videoSrc="/hospitality/hygiene-consistency-comp.mp4"
            row2Content={
                <div className="space-y-5 text-primary-dark">
                    <div className="space-y-1 text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">Without systems:</p>
                        <p className="font-normal">• More Vendors</p>
                        <p className="font-normal">• More Supervision</p>
                        <p className="font-normal">• More Inconsistency</p>
                        <p className="font-normal">• Higher Cost</p>
                    </div>

                    <div className="space-y-1 text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">With structured systems:</p>
                        <p className="font-normal">• Vendor Fragmentation Reduces</p>
                        <p className="font-normal">• Product Usage Becomes Controlled</p>
                        <p className="font-normal">• Supervision Dependency Decreases</p>
                        <p className="font-normal">• Efficiency Improves</p>
                    </div>

                    <div className="pt-2">
                        <p className="text-primary-dark text-base md:text-lg lg:text-[19px] font-normal leading-snug">
                            This reduces operational chaos and improves control across sites.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
