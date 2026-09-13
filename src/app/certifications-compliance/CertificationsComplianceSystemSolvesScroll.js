'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const certificationsComplianceSlides = [
    {
        content: (
            <div className="space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    Testing & <br className="hidden md:block" />
                    documentation <br className="hidden md:block" />
                    support
                </h2>

                <div className="space-y-2">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                        Compliance is supported by structured validation and documentation systems. Kleanfix provides:
                    </p>

                    <div className="text-base md:!text-[18px] font-normal leading-snug pt-1 space-y-1">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• SDS / TDS Documentation (Based on Requirement)</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Stability Testing (Based on Requirement)</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Compatibility Testing (Based on Requirement)</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Application-Level Validation (Based on Requirement)</p>
                    </div>
                </div>

                <div className="pt-2">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        This ensures products are not only manufactured — but verified for performance before deployment.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/certifications-compliance/slide1.avif',
        imageAlt: 'Testing & documentation support - Laboratory liquid verification',
    },
    {
        content: (
            <div className="space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    Statutory <br className="hidden md:block" />
                    compliance
                </h2>

                <div className="space-y-2">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                        Kleanfix maintains statutory registrations required for regulated operations. This includes:
                    </p>

                    <div className="text-base md:!text-[18px] font-normal leading-snug pt-1 space-y-1">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• GST Registration</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Udyam (MSME) Registration</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Factory License</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Other Applicable Statutory Compliances</p>
                    </div>
                </div>

                <div className="pt-2">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        All documentation is maintained as per regulatory requirements and available where required.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/certifications-compliance/slide2.avif',
        imageAlt: 'Statutory compliance - Regulated registration desk documentation',
    },
    {
        content: (
            <div className="space-y-6 text-primary-dark">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12]">
                    What this <br className="hidden md:block" />
                    means for you
                </h2>

                <div className="space-y-2">
                    <p className="text-primary-dark text-lg md:text-xl lg:text-[22px] font-medium leading-snug">
                        For the buyer, this translates into:
                    </p>

                    <div className="text-base md:!text-[18px] font-normal leading-snug pt-1 space-y-1">
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Compliance-Ready Supply</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Reduced Regulatory Risk</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Consistent Product Quality</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Reliable Documentation Support</p>
                        <p className="text-primary-dark font-normal md:!text-[18px]">• Smoother Institutional and Export Alignment</p>
                    </div>
                </div>

                <div className="pt-2">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        This ensures operations are supported by systems that meet compliance expectations.
                    </p>
                </div>
            </div>
        ),
        imageSrc: '/certifications-compliance/slide3.avif',
        imageAlt: 'What this means for you - Professional partnership and compliance assurance handshake',
    },
];

export default function CertificationsComplianceSystemSolvesScroll(props) {
    return (
        <SystemSolvesScroll
            bgColor="bg-[#F7F7F7]"
            slides={certificationsComplianceSlides}
            {...props}
        />
    );
}
