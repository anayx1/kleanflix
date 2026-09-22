import React from 'react';
import IndustryOperationsSection from '@/components/industry/IndustryOperationsSection';

const RISK_LAYERS = [
    '• Patient Rooms',
    "• ICU’s",
    '• Operation Theatres',
    '• Washrooms',
    '• High-Touch Zones',
    '• Laundry Systems',
];

export default function HowHealthcareEnvironmentOperatesSection() {
    return (
        <IndustryOperationsSection
            imageSrc="/healthcare/how-healthcare.webp"
            imageAlt="How healthcare environment actually operate"
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15]">
                    How healthcare environment <br className="hidden md:block" />actually operate
                </h2>
            }
        >
            <div className="space-y-3.5 text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug">
                <div>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Hospitals are not standard facilities.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        They operate across multiple risk layers:
                    </p>
                </div>

                <div className="space-y-0.5">
                    {RISK_LAYERS.map((item, idx) => (
                        <p key={idx} className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                            {item}
                        </p>
                    ))}
                </div>

                <div className="pt-1">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Each with different levels of exposure.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        And one constant requirement:
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        controlled hygiene execution.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                        Failure at any stage increases risk.
                    </p>
                </div>
            </div>
        </IndustryOperationsSection>
    );
}
