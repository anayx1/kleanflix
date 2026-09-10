import React from 'react';
import IndustryOperationsSection from '@/components/industry/IndustryOperationsSection';

export default function HowHotelOperationsWorksSection() {
    return (
        <IndustryOperationsSection
            imageSrc="/hospitality/how-hotel-operations-works.avif"
            imageAlt="How hotel operations actually works"
            heading={
                <h2 className="text-primary font-bold text-3xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.15]">
                    How hotel operations<br />actually works
                </h2>
            }
        >
            {/* Block 1 */}
            <div className="space-y-1 text-base md:text-lg lg:text-[20px] leading-relaxed text-primary-dark">
                <p className="font-normal text-inherit">
                    Hotels do not run on isolated products.
                </p>
                <p className="font-normal text-inherit">
                    They run on connected processes:
                </p>
                <ul className="space-y-0 pl-1 font-normal text-inherit">
                    <li className="leading-relaxed text-primary-dark">• Room turnover affects guest perception.</li>
                    <li className="leading-relaxed text-primary-dark">• Washroom hygiene affects trust.</li>
                    <li className="leading-relaxed text-primary-dark">• Laundry quality affects comfort.</li>
                    <li className="leading-relaxed text-primary-dark">• Kitchen hygiene affects safety.</li>
                    <li className="leading-relaxed text-primary-dark">• Public area maintenance affects presentation.</li>
                </ul>
            </div>

            {/* Block 2 */}
            <div className="space-y-1 text-base md:text-lg lg:text-[20px] leading-tight text-primary-dark pt-1">
                <p className="font-normal text-inherit">
                    Each stage impacts the next.
                </p>
                <p className="font-normal text-inherit">
                    If one layer becomes inconsistent, the guest notices — and the brand pays for it.
                </p>
                <p className="font-normal text-inherit pt-1">
                    That is why hospitality needs systems, not fragmented supply.
                </p>
            </div>
        </IndustryOperationsSection>
    );
}
