'use client';

import React from 'react';
import SystemSolvesScroll from '@/components/SystemSolvesScroll';

export const facilityServicesSlides = [
    {
        content: (
            <div>
                <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[50px] leading-tight mb-4 md:mb-5">
                    What goes wrong <br />
                    without a system
                </h2>

                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-tight mb-4 md:mb-5">
                    Most facility operations struggle not <br className="hidden md:block" />
                    because work is not done — but <br className="hidden md:block" />
                    because it is not consistent.
                </p>

                <div className="space-y-1 mb-4 md:mb-5 text-primary-dark text-xs md:text-sm lg:text-[15px] font-normal leading-tight">
                    <p className="text-primary-dark">• Teams execute differently.</p>
                    <p className="text-primary-dark">• Standards vary across locations.</p>
                    <p className="text-primary-dark">• Vendors operate independently.</p>
                    <p className="text-primary-dark">• Maintenance becomes reactive instead of structured.</p>
                </div>

                <div className="space-y-1 text-primary-dark text-xs md:text-sm lg:text-[15px] leading-tight">
                    <p className="text-primary-dark font-medium pb-0.5">
                        The result:
                    </p>
                    <p className="text-primary-dark font-normal">• Variation Across Sites</p>
                    <p className="text-primary-dark font-normal">• Increased Supervision Load</p>
                    <p className="text-primary-dark font-normal">• Higher Operational Cost</p>
                    <p className="text-primary-dark font-normal">• Reduced Client Satisfaction</p>
                </div>
            </div>
        ),
        imageSrc: "/healthcare/slide1.webp",
        imageAlt: "What goes wrong without a system - Caution cleaning in progress"
    },
    {
        content: (
            <div className="space-y-4 md:space-y-6">
                <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[50px] leading-tight">
                    Why facility <br />
                    management <br />
                    needs system
                </h2>

                <div className="space-y-1 text-primary-dark font-normal leading-snug">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] leading-snug">
                        Manual control may work for one site.
                    </p>
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] leading-snug">
                        It does not work across multiple sites.
                    </p>
                </div>
            </div>
        ),
        imageSrc: "/facility-service/how-multi-site.webp",
        imageAlt: "Why facility management needs system - Cleaning floor"
    },
    {
        content: (
            <div className="space-y-6">
                <h3 className="text-primary-dark font-semibold text-2xl md:text-3xl lg:text-[34px] leading-tight">
                    Facility management at scale requires:
                </h3>

                <div className="space-y-0 text-primary-dark font-normal leading-relaxed">
                    <p className="text-primary-dark">• Standardization</p>
                    <p className="text-primary-dark">• Repeatable Execution</p>
                    <p className="text-primary-dark">• Reduced Dependency on Individual Teams</p>
                </div>

                <div className="pt-2">
                    <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-normal leading-snug">
                        Kleanfix converts cleaning into a system that can be replicated across locations.
                    </p>
                </div>
            </div>
        ),
        imageSrc: "/facility-service/slide3.webp",
        imageAlt: "Facility management at scale requires standardization and repeatable execution"
    }
];

export default function FacilityServicesSystemSolvesScroll(props) {
    return (
        <SystemSolvesScroll
            bgColor="bg-[#F7F7F7]"
            slides={facilityServicesSlides}
            {...props}
        />
    );
}
