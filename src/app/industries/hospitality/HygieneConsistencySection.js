import React from 'react';
import Image from 'next/image';

export default function HygieneConsistencySection() {
    return (
        <section className="py-14 md:py-20 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Top Wide Banner Image */}
                <div className="relative w-full aspect-[2.4/1] md:aspect-[3.7/1] overflow-hidden rounded-t-2xl md:rounded-t-[28px] lg:rounded-t-[32px] rounded-b-none shadow-sm mb-12 md:mb-16 lg:mb-20">
                    <Image
                        src="/hospitality/yellow-glove-microfiver.webp"
                        alt="Hygiene consistency - tile cleaning with microfiber cloth"
                        fill
                        sizes="(max-width: 1001px) 100vw, 1800px"
                        className="object-cover object-center"
                    />
                </div>

                {/* Row 1: Headline & Initial Inconsistency Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Left Column: Headline */}
                    <div className="md:col-span-6">
                        <h2 className=" text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.18] ">
                            Hygiene consistency — the <br className="hidden md:block" />
                            invisible experience layer
                        </h2>
                    </div>

                    {/* Right Column: Descriptions & Details */}
                    <div className="md:col-span-6 space-y-6 md:space-y-7 text-primary">
                        <div className="space-y-1 md:space-y-1.5">
                            <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                Guests may not always notice good hygiene directly.
                            </p>
                            <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                But they immediately notice inconsistency.
                            </p>
                        </div>

                        <div className="space-y-1 text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                • Odor variation
                            </p>
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                • Washroom instability
                            </p>
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                • Poor surface hygiene
                            </p>
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                • Unclean touchpoints
                            </p>
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                all weaken perception of quality and trust.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 2: Video & Structured Hygiene Control Context */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12  items-center mt-14 md:mt-20 lg:mt-24">
                    {/* Left Column: Video */}
                    <div className="md:col-span-7">
                        <div className="relative w-full aspect-video overflow-hidden rounded-2xl md:rounded-[24px] shadow-sm bg-slate-100">
                            <video
                                src="/hospitality/hygiene-consistency-comp.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls={false}
                                disablePictureInPicture
                                disableRemotePlayback
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Without Structured Hygiene Control & Summary */}
                    <div className="md:col-span-5 space-y-6 md:space-y-8 text-primary">
                        <div className="space-y-1 text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                            <p className="text-primary text-sm md:text-base lg:text-[17px] font-normal leading-relaxed">
                                Without structured hygiene control:
                            </p>
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                • Standards fluctuate across rooms and properties
                            </p>
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                • Guest confidence reduces
                            </p>
                            <p className="text-primary text-sm md:text-base lg:text-[17px] leading-relaxed">
                                • Operational consistency weakens
                            </p>
                        </div>

                        <div>
                            <p className="text-primary text-lg md:text-xl lg:text-[22px] font-normal leading-snug">
                                Kleanfix integrates hygiene systems into daily hospitality operations to support cleaner, more stable, and more predictable guest environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
