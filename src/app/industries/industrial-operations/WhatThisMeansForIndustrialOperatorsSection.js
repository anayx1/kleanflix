import React from 'react';
import IndustryOperatorBenefitsSection from '@/components/industry/IndustryOperatorBenefitsSection';

const INDUSTRIAL_OPERATOR_BULLETS = [
    '• Equipment Efficiency Improves',
    '• Downtime Reduces',
    '• Cleaning Outcomes Become Consistent',
    '• Maintenance Cycles Stabilize',
    '• Operations Become More Predictable',
];

const CLOSING_STATEMENTS = [
    'This is not a stronger cleaning.',
    'It is a more efficient operation.',
];

export default function WhatThisMeansForIndustrialOperatorsSection() {
    return (
        <IndustryOperatorBenefitsSection
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight mb-6 md:mb-8">
                    What this means <br />
                    for operators
                </h2>
            }
            introContent="With structured systems:"
            bullets={INDUSTRIAL_OPERATOR_BULLETS}
            closingStatements={CLOSING_STATEMENTS}
            imageSrc="/hospitality/pink-glove.avif"
            imageAlt="Kleanfix spray bottle with pink glove"
        />
    );
}
