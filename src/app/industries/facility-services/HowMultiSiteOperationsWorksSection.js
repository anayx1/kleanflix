import React from 'react';
import IndustryOperationsSection from '@/components/industry/IndustryOperationsSection';

export default function HowMultiSiteOperationsWorksSection() {
    return (
        <IndustryOperationsSection
            imageSrc="/facility-service/how-multi-site.webp"
            imageAlt="How multi-site operations actually works"
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15]">
                    How multi-site operations <br className="hidden md:block" />actually works
                </h2>
            }
        >
            <div className="space-y-4 md:space-y-6 text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug">
                <div>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Facility operations are distributed by nature:
                    </p>
                    <div className="space-y-0.5 pt-1">
                        <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">• Multiple sites</p>
                        <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">• Multiple teams</p>
                        <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">• Multiple surfaces</p>
                        <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">• Multiple execution styles</p>
                    </div>
                </div>

                <div className="pt-2">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Without system control, each location begins to behave differently.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Output becomes dependent on people — not process.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        This is where inconsistency begins.
                    </p>
                </div>
            </div>
        </IndustryOperationsSection>
    );
}
