'use client';

import React, { useEffect, useState, useId } from 'react';
import Image from 'next/image';
import { motion, animate } from 'framer-motion';

/**
 * Generates a 40-stripe sinusoidal displacement map data URL
 * to produce Framer's exact vertical reeded glass wave distortion.
 */
function createSinusoidalReededMap(stripes = 40) {
    if (typeof window === 'undefined') return '';
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1; // 1px height stretched to 100% for 0ms execution
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    const imgData = ctx.createImageData(512, 1);
    const data = imgData.data;

    for (let x = 0; x < 512; x++) {
        const sine = Math.sin((x / 512) * stripes * Math.PI * 2);
        const r = Math.floor(128 + 127 * sine);
        const idx = x * 4;
        data[idx] = r;       // Red channel controls X displacement
        data[idx + 1] = 128; // Green neutral
        data[idx + 2] = 128; // Blue neutral
        data[idx + 3] = 255; // Alpha
    }

    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
}

/**
 * Reusable Hero Component with Reeded Glass Wave Blending Entry Animation.
 * Configured with Framer's exact transition specs:
 * - Ease In Out cubic-bezier(0.44, 0, 0.56, 1)
 * - Duration: 2.0 seconds
 * - Delay: 0 seconds
 * - Zero white/blank stripes on initial paint
 *
 * @param {Object} props
 * @param {string} props.title - Hero main title text
 * @param {string} props.subtitle - Hero subtitle text
 * @param {string} props.imageSrc - Path to background image
 * @param {string} [props.imageAlt] - Image alt text
 * @param {number} [props.stripes=40] - Number of vertical reeded glass stripes
 * @param {string} [props.className] - Additional wrapper container styles
 * @param {React.ReactNode} [props.children] - Additional content inside hero
 */
export default function ReededGlassHero({
    title,
    subtitle,
    imageSrc,
    imageAlt = 'Hero Background',
    stripes = 40,
    className = '',
    children,
}) {
    const rawId = useId();
    const filterId = `reeded-glass-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

    // Initialize mapUrl synchronously on first client render (eliminates blank stripe flashes)
    const [mapUrl, setMapUrl] = useState(() => createSinusoidalReededMap(stripes));
    const [filterScale, setFilterScale] = useState(60);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        if (!mapUrl) {
            const url = createSinusoidalReededMap(stripes);
            setMapUrl(url);
        }

        // Framer Transition parameters: Ease In Out Bezier (0.44, 0, 0.56, 1), Time: 2s, Delay: 0s
        const controls = animate(60, 0, {
            duration: 2.0,
            delay: 0,
            ease: [0.44, 0, 0.56, 1],
            onUpdate: (latest) => {
                setFilterScale(latest);
            },
            onComplete: () => {
                setIsCompleted(true);
            },
        });

        return () => {
            controls.stop();
        };
    }, [stripes, mapUrl]);

    return (
        <section className={`relative w-full overflow-hidden bg-black ${className}`}>
            {/* Sinusoidal Reeded Glass SVG Filter with 0px Y shift */}
            {!isCompleted && mapUrl && (
                <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                    <defs>
                        <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
                            <feImage
                                href={mapUrl}
                                result="reededMap"
                                preserveAspectRatio="none"
                                width="100%"
                                height="100%"
                            />
                            {/* Force G channel to exact 0.5 for 0px Y displacement (prevents vertical shifting) */}
                            <feComponentTransfer in="reededMap" result="zeroYMap">
                                <feFuncG type="discrete" tableValues="0.5" />
                            </feComponentTransfer>
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="zeroYMap"
                                scale={filterScale}
                                xChannelSelector="R"
                                yChannelSelector="G"
                            />
                        </filter>
                    </defs>
                </svg>
            )}

            {/* Hero Main Container */}
            <div className="relative w-full h-[480px] md:h-[620px] lg:h-[60dvh] overflow-hidden">

                {/* Background Image with Reeded Glass distortion blending 60 -> 0 using Bezier(0.44, 0, 0.56, 1) over 2s */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        filter: !isCompleted && mapUrl ? `url(#${filterId})` : 'none',
                        willChange: 'filter',
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Gradient Contrast Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" /> */}

                {/* Hero Text Content */}
                <div className="absolute inset-0 flex items-end">
                    <div className="main-container px-6 md:px-12 pb-12 md:pb-10 w-full">
                        <div className="max-w-4xl">
                            {title && (
                                <motion.h1
                                    initial={{ opacity: 0, y: 35 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 55,
                                        mass: 2.9,
                                        delay: 0.1,
                                    }}
                                    className="font-anton text-[52px] md:text-[80px] lg:text-[100px] font-normal text-secondary tracking-normal mb-2 leading-[1.1] drop-shadow-md"
                                >
                                    {title}
                                </motion.h1>
                            )}
                            {subtitle && (
                                <motion.p
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 55,
                                        mass: 2.9,
                                        delay: 0.25,
                                    }}
                                    className="text-white text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide drop-shadow-sm"
                                >
                                    {subtitle}
                                </motion.p>
                            )}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
