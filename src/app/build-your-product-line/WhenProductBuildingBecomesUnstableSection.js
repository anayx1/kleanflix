import React from 'react';
import IndustryOperatorBenefitsSection from '@/components/industry/IndustryOperatorBenefitsSection';

const UNSTABLE_BULLETS = [
    '• Fragmented',
    '• Delayed',
    '• Inconsistent',
    '• Dependent on Multiple Vendors',
];

const CLOSING_STATEMENTS = [
    'The issue is not execution.',
    'It is a lack of system control.',
];

export default function WhenProductBuildingBecomesUnstableSection() {
    return (
        <IndustryOperatorBenefitsSection
            heading={
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] mb-6 md:mb-8">
                    When product <br className="hidden md:block" />
                    building <br className="hidden md:block" />
                    becomes unstable
                </h2>
            }
            introContent={
                <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] leading-snug font-normal">
                    If your journey feels:
                </p>
            }
            bullets={UNSTABLE_BULLETS}
            closingStatements={CLOSING_STATEMENTS}
            imageSrc="/hospitality/pink-glove.avif"
            imageAlt="Kleanfix spray bottle with pink glove"
        />
    );
}
