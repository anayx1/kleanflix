import React from 'react';

const STEPS = [
    {
        number: '01',
        title: 'Your requirement is reviewed',
    },
    {
        number: '02',
        title: 'Mapped to the correct system',
    },
    {
        number: '03',
        title: 'Responded to based on context and complexity',
    },
];

export default function OnceYouSubmitSection() {
    return (
        <div className="pt-10 md:pt-14 mt-10">
            {/* Heading */}
            <h2 className="font-semibold text-primary mb-8 md:mb-10">
                Once you submit:
            </h2>

            {/* 3-Step Card Container */}
            <div className="bg-white border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
                {STEPS.map((step) => (
                    <div key={step.number} className="p-6 md:p-8 lg:p-10 flex flex-col justify-start min-h-[160px] md:min-h-[180px]">
                        {/* Circle Number Badge */}
                        <div className="w-10 h-10 rounded-full bg-[#EEF4FB] text-primary text-sm md:text-base flex items-center justify-center mb-6 md:mb-8">
                            {step.number}
                        </div>
                        {/* Step Description */}
                        <p className="text-primary font-medium !text-lg md:!text-xl lg:!text-[22px] leading-snug">
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom Center Paragraph */}
            <div className="mt-8 md:mt-12 text-center text-primary font-medium leading-relaxed max-w-3xl mx-auto space-y-0.5">
                <p className="!text-base md:!text-lg lg:!text-xl">
                    Complex requirements may lead to a structured discussion.
                </p>
                <p className="!text-base md:!text-lg lg:!text-xl">
                    Every response is aligned to your specific need.
                </p>
            </div>
        </div>
    );
}
