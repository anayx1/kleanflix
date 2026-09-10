import React from 'react';
import IndustryOperatorBenefitsSection from '@/components/industry/IndustryOperatorBenefitsSection';

const FACILITY_OPERATOR_BULLETS = [
    '• Output Becomes Consistent Across Locations',
    '• Operations Become Easier to Manage',
    '• Efficiency Improves',
    '• Cost of Inconsistency Reduces',
    '• Scaling Becomes Structured',
];

const CLOSING_STATEMENTS = [
    'This is not a better cleaning.',
    'It is better control of operations at scale.',
];

export default function WhatThisMeansForFacilityOperatorsSection() {
    return (
        <IndustryOperatorBenefitsSection
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight mb-6 md:mb-8">
                    What this means for <br />
                    facility operators
                </h2>
            }
            introContent="With Kleanfix systems:"
            bullets={FACILITY_OPERATOR_BULLETS}
            closingStatements={CLOSING_STATEMENTS}
            imageSrc="/hospitality/pink-glove.avif"
            imageAlt="Kleanfix spray bottle with pink glove"
        />
    );
}
