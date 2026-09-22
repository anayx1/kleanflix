import React from 'react';
import IndustryOperationsSection from '@/components/industry/IndustryOperationsSection';

export default function HowIndustrialOperationsWorksSection() {
    return (
        <IndustryOperationsSection
            imageSrc="/industrial/how-industrial.avif"
            imageAlt="How industrial operations actually works"
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15]">
                    How industrial operations <br className="hidden md:block" />actually works
                </h2>
            }
        >
            <div className="space-y-6 text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug">
                <div className="space-y-1">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Industrial processes are continuous.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Machinery runs → residue builds → cleaning occurs → performance is restored → production continues.
                    </p>
                </div>

                <div className="space-y-1">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Cleaning is not a support function.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        It is part of the production cycle.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        If cleaning is inconsistent, performance drops.
                    </p>
                </div>
            </div>
        </IndustryOperationsSection>
    );
}
