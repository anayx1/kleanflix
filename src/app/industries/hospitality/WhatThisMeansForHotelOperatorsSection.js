import React from 'react';
import IndustryOperatorBenefitsSection from '@/components/industry/IndustryOperatorBenefitsSection';

const BULLET_POINTS = [
    '• Consistent Room Experience',
    '• Standardized Operations Across Properties',
    '• Improved Hygiene Control',
    '• Better Laundry Reliability',
    '• Reduced Dependency on Individual Teams',
    '• Stronger Guest Perception and Recall',
];

const CLOSING_STATEMENTS = [
    'This is not just better cleaning.',
    'It is better controlled hospitality operations.',
];

export default function WhatThisMeansForHotelOperatorsSection() {
    return (
        <IndustryOperatorBenefitsSection
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight mb-6 md:mb-8">
                    What this means <br />
                    for hotel operators
                </h2>
            }
            introContent={
                <>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal max-w-md">
                        With Kleanfix, hospitality operations become controlled across zones and properties.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-medium">
                        That means:
                    </p>
                </>
            }
            bullets={BULLET_POINTS}
            closingStatements={CLOSING_STATEMENTS}
            imageSrc="/hospitality/pink-glove.avif"
            imageAlt="Kleanfix spray bottle with pink glove"
        />
    );
}
