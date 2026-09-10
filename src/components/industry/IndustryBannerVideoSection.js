import React from 'react';
import Image from 'next/image';

export default function IndustryBannerVideoSection({
    bannerImageSrc,
    bannerImageAlt = 'Industry section banner',
    bannerRoundedAll = false,
    heading,
    row1Content,
    videoSrc = '/hospitality/hygiene-consistency-comp.mp4',
    mediaImageSrc,
    mediaImageAlt = 'Industry section media',
    row2Content,
    className = '',
}) {
    return (
        <section className={`py-14 md:py-20 lg:py-24 bg-white ${className}`}>
            <div className="main-container px-6 md:px-12">
                {/* Top Wide Banner Image */}
                {bannerImageSrc && (
                    <div
                        className={`relative w-full aspect-[2.4/1] md:aspect-[3.7/1] overflow-hidden ${
                            bannerRoundedAll
                                ? 'rounded-2xl md:rounded-[28px] lg:rounded-[32px]'
                                : 'rounded-t-2xl md:rounded-t-[28px] lg:rounded-t-[32px] rounded-b-none'
                        } shadow-sm mb-12 md:mb-16 lg:mb-20`}
                    >
                        <Image
                            src={bannerImageSrc}
                            alt={bannerImageAlt}
                            fill
                            sizes="(max-width: 1001px) 100vw, 1800px"
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                )}

                {/* Row 1: Headline & Row 1 Context */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Left Column: Headline */}
                    <div className="md:col-span-6">
                        {typeof heading === 'string' ? (
                            <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.18]">
                                {heading}
                            </h2>
                        ) : (
                            heading
                        )}
                    </div>

                    {/* Right Column: Row 1 Content */}
                    <div className="md:col-span-6 space-y-5 md:space-y-6 text-primary-dark">
                        {row1Content}
                    </div>
                </div>

                {/* Row 2: Media & Row 2 Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mt-14 md:mt-20 lg:mt-24">
                    {/* Left Column: Media (Image or Video) */}
                    <div className="md:col-span-7">
                        <div className="relative w-full aspect-video overflow-hidden rounded-2xl md:rounded-[24px] shadow-sm bg-slate-100">
                            {mediaImageSrc ? (
                                <Image
                                    src={mediaImageSrc}
                                    alt={mediaImageAlt}
                                    fill
                                    sizes="(max-width: 1001px) 100vw, 58vw"
                                    className="object-cover object-center"
                                />
                            ) : (
                                <video
                                    src={videoSrc}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controls={false}
                                    disablePictureInPicture
                                    disableRemotePlayback
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </div>

                    {/* Right Column: Row 2 Content */}
                    <div className="md:col-span-5 text-primary-dark">
                        {row2Content}
                    </div>
                </div>
            </div>
        </section>
    );
}
