'use client';

import React from 'react';
import VideoGlassHero from '../VideoGlassHero';

export default function HomeHero() {
    return (
        <VideoGlassHero
            videoSrc="https://res.cloudinary.com/spqd54wy/video/upload/v1788284419/home-hero.mp4"
            fallbackVideoSrc="/homepage/home-hero.mp4"
            containerHeightClass="h-screen max-h-[90dvh] min-h-[550px]"
        >
            <div className="flex flex-col md:flex-row items-start md:items-end justify-start gap-6 md:gap-10 w-full">
                {/* Hero Main Headline: Klean in Primary Blue, Fix in Secondary Orange */}
                <h1 className="font-anton text-[90px] md:text-[160px] lg:text-[300px] leading-[0.88] tracking-wide select-none">
                    <span className="text-primary">Klean</span>
                    <span className="text-secondary">Fix</span>
                </h1>

                {/* Subtitle text matching reference screenshot */}
                <div className="text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.3] max-w-xl md:mb-4 drop-shadow-md">
                    <p className="m-0 text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug">
                        Not Just a Manufacturer.
                    </p>
                    <p className="m-0 text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug">
                        A Structured System Behind
                    </p>
                    <p className="m-0 text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug">
                        Cleaning and Hygiene
                    </p>
                    <p className="m-0 text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug">
                        Businesses.
                    </p>
                </div>
            </div>
        </VideoGlassHero>
    );
}

