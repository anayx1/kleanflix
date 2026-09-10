'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const healthcareSlides = [
    {
        content: (
            <div>
                <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[50px] leading-tight mb-4 md:mb-5">
                    What goes wrong <br />
                    without a system
                </h2>

                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-tight mb-4 md:mb-5">
                    In healthcare, small inconsistencies create large risks.
                </p>

                <div className="space-y-1 mb-4 md:mb-5">
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-medium leading-tight">
                        Different staff execute differently.
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Cleaning may be done — but not validated.
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Protocols are defined — but not consistently followed.
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Hygiene layers remain incomplete.
                    </p>
                </div>

                <div className="space-y-1 mb-4 md:mb-5">
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-medium leading-tight">
                        This leads to:
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Persistent Contamination
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Gaps in High-Touch Areas
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Cross-Contamination Through Linen
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Inconsistent Hand Hygiene
                    </p>
                    <p className="text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                        • Difficulty Maintaining Protocol Discipline
                    </p>
                </div>

                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-medium leading-snug pt-1">
                    The result is increased infection risk and compliance pressure.
                </p>
            </div>
        ),
        imageSrc: "/healthcare/slide1.webp",
        imageAlt: "What goes wrong without a system - Caution cleaning in progress sign"
    },
    {
        content: (
            <div className="space-y-4 md:space-y-6">
                <h2 className="text-primary font-semibold text-3xl md:text-5xl lg:text-[50px] leading-tight">
                    Why healthcare <br />
                    needs system
                </h2>

                <div className="space-y-1 text-primary-dark font-medium leading-snug">
                    <p className="text-primary-dark font-normal leading-snug">
                        Cleaning removes visible dirt.
                    </p>
                    <p className="text-primary-dark font-normal leading-snug">
                        Risk remains invisible.
                    </p>
                </div>
            </div>
        ),
        imageSrc: "/healthcare/slide2.webp",
        imageAlt: "Why healthcare needs system - Hospital sanitation"
    },
    {
        content: (
            <div className="space-y-6 ">
                <h3 className="text-primary-dark font-semibold text-2xl md:text-3xl lg:text-[34px] leading-tight">
                    Hygiene in healthcare must be:
                </h3>

                <div className="space-y-0 text-primary-dark font-medium leading-relaxed">
                    <p className="text-primary-dark font-normal leading-relaxed">
                        • Repeatable
                    </p>
                    <p className="text-primary-dark font-normal leading-relaxed">
                        • Controlled
                    </p>
                    <p className="text-primary-dark font-normal leading-relaxed">
                        • Protocol-Driven
                    </p>
                </div>

                <div className="space-y-1 text-primary pt-2">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        Without system structure, hygiene depends on people.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        With system structure, hygiene becomes predictable.
                    </p>
                </div>
            </div>
        ),
        imageSrc: "/healthcare/slide3.webp",
        imageAlt: "Hygiene in healthcare must be repeatable, controlled, protocol-driven"
    }
];

export default function HealthcareSystemSolvesScroll(props) {
    return (
        <SystemSolvesScroll
            bgColor="bg-[#F7F7F7]"
            slides={healthcareSlides}
            {...props}
        />
    );
}
