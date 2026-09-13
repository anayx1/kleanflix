import React from 'react';
import Image from 'next/image';

export default function IndustryOperatorBenefitsSection({
    heading,
    introContent,
    bullets = [],
    closingStatements = [],
    imageSrc = '/hospitality/pink-glove.avif',
    imageAlt = 'kleanfix spray bottle with pink glove',
    className = '',
}) {
    return (
        <section className={`py-14 md:py-20 lg:py-24 bg-white ${className}`}>
            <div className="main-container px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-5 items-stretch">
                    {/* Left Card: Content */}
                    <div className="md:col-span-6 bg-[#F7F7F7] rounded-2xl md:rounded-r-none md:rounded-l-[32px] p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                        {/* Top Content Area */}
                        <div>
                            {typeof heading === 'string' ? (
                                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight tracking-tight mb-6 md:mb-8">
                                    {heading}
                                </h2>
                            ) : (
                                heading
                            )}

                            {introContent && (
                                <div className="space-y-3 md:space-y-4 mb-2">
                                    {typeof introContent === 'string' ? (
                                        <p className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-snug font-normal">
                                            {introContent}
                                        </p>
                                    ) : (
                                        introContent
                                    )}
                                </div>
                            )}

                            {/* Bullets List */}
                            {bullets.length > 0 && (
                                <div className="space-y-1.5 md:space-y-2 text-primary-dark text-sm md:text-base leading-relaxed mb-10 md:mb-14">
                                    {bullets.map((bullet, idx) => (
                                        <p key={idx} className="text-primary-dark text-sm md:text-base leading-tight font-normal">
                                            {bullet}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Bottom Closing Statement */}
                        {closingStatements.length > 0 && (
                            <div className="space-y-1 pt-6 md:pt-8">
                                {closingStatements.map((statement, idx) => (
                                    <p key={idx} className="text-primary-dark text-base md:text-lg lg:text-[19px] leading-tight font-normal">
                                        {statement}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Card: Image with Arch / Semicircle Radius on Right */}
                    <div className="md:col-span-6 relative w-full min-h-[380px] md:min-h-[540px] lg:min-h-[600px] overflow-hidden rounded-2xl md:rounded-l-none md:rounded-r-full">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 1001px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
