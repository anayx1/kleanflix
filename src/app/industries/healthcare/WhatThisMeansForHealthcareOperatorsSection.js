import React from 'react';
import IndustryOperatorBenefitsSection from '@/components/industry/IndustryOperatorBenefitsSection';

const HEALTHCARE_OPERATOR_BULLETS = [
    '• Hygiene Execution Becomes Consistent',
    '• Contamination Risk Reduces',
    '• Protocol Adherence Improves',
    '• Variation Across Staff and Shifts Decreases',
    '• Operations Become More Predictable',
];

const CLOSING_STATEMENTS = [
    'This is not a better cleaning.',
    'It is controlled hygiene execution.',
];

export default function WhatThisMeansForHealthcareOperatorsSection() {
    return (
        <IndustryOperatorBenefitsSection
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight mb-6 md:mb-8">
                    What this means for <br />
                    healthcare operators
                </h2>
            }
            introContent="With structured systems in place:"
            bullets={HEALTHCARE_OPERATOR_BULLETS}
            closingStatements={CLOSING_STATEMENTS}
            imageSrc="/hospitality/pink-glove.avif"
            imageAlt="Kleanfix spray bottle with pink glove"
        />
    );
}
