import React from 'react';
import IndustryBannerVideoSection from '@/components/industry/IndustryBannerVideoSection';

export default function GermControlCoreLayerSection() {
    return (
        <IndustryBannerVideoSection
            bannerImageSrc="/healthcare/sectopimg.avif"
            bannerImageAlt="Germ control — the core layer banner"
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.18]">
                    Germ control — <br className="hidden md:block" />
                    the core layer
                </h2>
            }
            row1Content={
                <>
                    <div className="space-y-1">
                        <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                            Cleaning removes what is visible.
                        </p>
                        <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                            Germ control addresses what is not.
                        </p>
                    </div>

                    <div className="space-y-1 text-primary-dark text-sm md:text-base lg:text-[17px] leading-relaxed">
                        <p className="font-normal">
                            Without structured sanitization:
                        </p>
                        <p className="font-normal">• Microbial Presence Persists</p>
                        <p className="font-normal">• Risk Remains Uncontrolled</p>
                        <p className="font-normal">• Compliance Becomes Difficult</p>
                    </div>
                </>
            }
            videoSrc="/hospitality/hygiene-consistency-comp.mp4"
            row2Content={
                <div className="space-y-1 text-primary-dark text-sm md:text-base lg:text-[17px] leading-relaxed">
                    <p className="font-normal">
                        With system integration:
                    </p>
                    <p className="font-normal">• Hygiene Becomes Controlled</p>
                    <p className="font-normal">• Variability Reduces</p>
                    <p className="font-normal">• Risk Exposure Is Minimized</p>
                </div>
            }
        />
    );
}
