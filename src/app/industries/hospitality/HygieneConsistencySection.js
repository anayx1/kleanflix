import React from 'react';
import IndustryBannerVideoSection from '@/components/industry/IndustryBannerVideoSection';

export default function HygieneConsistencySection() {
    return (
        <IndustryBannerVideoSection
            bannerImageSrc="/hospitality/yellow-glove-microfiver.webp"
            bannerImageAlt="Hygiene consistency - tile cleaning with microfiber cloth"
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.18]">
                    Hygiene consistency — the <br className="hidden md:block" />
                    invisible experience layer
                </h2>
            }
            row1Content={
                <>
                    <div className="space-y-1 md:space-y-1.5">
                        <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            Guests may not always notice good hygiene directly.
                        </p>
                        <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            But they immediately notice inconsistency.
                        </p>
                    </div>

                    <div className="space-y-1 text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">• Odor variation</p>
                        <p className="font-normal">• Washroom instability</p>
                        <p className="font-normal">• Poor surface hygiene</p>
                        <p className="font-normal">• Unclean touchpoints</p>
                        <p className="font-normal">all weaken perception of quality and trust.</p>
                    </div>
                </>
            }
            videoSrc="/hospitality/hygiene-consistency-comp.mp4"
            row2Content={
                <div className="space-y-6 md:space-y-8 text-primary">
                    <div className="space-y-1 text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">
                            Without structured hygiene control:
                        </p>
                        <p className="font-normal">• Standards fluctuate across rooms and properties</p>
                        <p className="font-normal">• Guest confidence reduces</p>
                        <p className="font-normal">• Operational consistency weakens</p>
                    </div>

                    <div>
                        <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                            Kleanfix integrates hygiene systems into daily hospitality operations to support cleaner, more stable, and more predictable guest environments.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
