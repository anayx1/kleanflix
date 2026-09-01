'use client';

import React, { useEffect, useState, useId } from 'react';
import Image from 'next/image';
import { animate } from 'framer-motion';

/**
 * Pre-computed 512x1 8-bit RGBA Sinusoidal Displacement Map (40 vertical sinusoidal waves).
 * Embedded as a static constant to ensure 0ms SSR availability, eliminating initial paint flashes.
 */
const SINUSOIDAL_MAP_DATA_URI =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAABCAYAAACouxZ2AAAArUlEQVR4nO2UIQ6DQBBFS0gqanB1tVh0fT0H6AF6AA7AO0APwAE4QH09urYWh6tBkDR9DcncAQFqMzvz/8/LbmYH+AQH8AeO4AtswCuYg3swBU9gCd7BDvyAxtnFfRlzaejy8GnCd4ycIXLn/At4BBPwABbgDWzBNziBX7AHH2AFnsEsNFnUVfT7mJ9C34ZfEf5J5M259ca/KH+9cv61v//S/Evvv+3/b/xL8v8BROP9RVRUtCAAAAAASUVORK5CYII=';

/**
 * ReededGlassHero - Hero banner component with sinusoidal fluted glass reveal animation.
 *
 * Visual Features:
 * - Instant First-Paint Loading: Uses static displacement map so SSR renders the exact fluted glass state immediately on page load.
 * - Fluted Glass Rib Structure: Combines pure horizontal sinusoidal refraction with 3D glass bar specular highlights.
 * - Smooth Ease-Out Reveal: Ribs and highlights smoothly flatten over 1.2s to reveal the crystal-sharp photo.
 * - Zero GPU Overhead after completion: Filter is completely disabled once the reveal finishes.
 * - Crisp Separate Text Layer: Orange headline and white subtitle sit in an unfiltered top layer.
 *
 * @param {Object} props
 * @param {string} props.title - Hero main headline (rendered in bold secondary orange with Anton font)
 * @param {string} props.subtitle - Hero subtitle (rendered in crisp white Open Sans)
 * @param {string} props.imageSrc - Path to background image
 * @param {string} [props.imageAlt] - Image alt text
 * @param {number} [props.stripes=40] - Number of vertical sinusoidal reeded glass stripes
 * @param {number} [props.initialScale=65] - Starting displacement distortion scale
 * @param {number} [props.duration=1.2] - Duration of reveal animation in seconds
 * @param {string} [props.className] - Additional wrapper container styles
 * @param {React.ReactNode} [props.children] - Additional content inside hero
 */
export default function ReededGlassHero({
    title,
    subtitle,
    imageSrc,
    imageAlt = 'Hero Background',
    stripes = 40,
    initialScale = 65,
    duration = 1.2,
    className = '',
    children,
}) {
    const rawId = useId();
    const filterId = `reeded-glass-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

    const [filterScale, setFilterScale] = useState(initialScale);
    const [overlayOpacity, setOverlayOpacity] = useState(0.45);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        // Smooth ease-out reveal animation starting right on page load
        const controls = animate(0, 1, {
            duration: duration,
            delay: 0.08,
            ease: [0.25, 0.1, 0.25, 1], // Natural ease-out curve
            onUpdate: (progress) => {
                setFilterScale(initialScale * (1 - progress));
                setOverlayOpacity(0.45 * (1 - progress));
            },
            onComplete: () => {
                setIsCompleted(true);
            },
        });

        return () => {
            controls.stop();
        };
    }, [initialScale, duration]);

    return (
        <section className={`relative w-full overflow-hidden bg-black ${className}`}>
            {/* Sinusoidal Reeded Glass SVG Filter with pure horizontal displacement */}
            {!isCompleted && (
                <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
                    <defs>
                        <filter id={filterId} x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
                            <feImage
                                href={SINUSOIDAL_MAP_DATA_URI}
                                result="reededMap"
                                preserveAspectRatio="none"
                                width="100%"
                                height="100%"
                            />
                            {/* Force G channel to exact 0.5 for 0.00px Y displacement (pure horizontal wave refraction) */}
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
                {/* Background Image Layer with Reeded Glass distortion resolving into full clarity */}
                {/* Negative insets extend the image beyond visible bounds so displacement at edges */}
                {/* pulls from real image pixels instead of the black background (overflow:hidden clips it) */}
                <div
                    className="absolute w-full h-full"
                    style={{
                        top: '-20px',
                        left: isCompleted ? '0px' : '-40px',
                        right: isCompleted ? '0px' : '-40px',
                        bottom: '-20px',
                        width: isCompleted ? '100%' : 'calc(100% + 80px)',
                        height: 'calc(100% + 40px)',
                        filter: !isCompleted ? `url(#${filterId})` : 'none',
                        willChange: isCompleted ? 'auto' : 'filter',
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

                {/* Reeded Glass Ribs Surface Highlights & Shading (Synchronized with refraction) */}
                {!isCompleted && (
                    <div
                        className="absolute inset-0 pointer-events-none z-1"
                        style={{
                            opacity: overlayOpacity,
                            backgroundImage: `repeating-linear-gradient(
                                90deg,
                                rgba(255, 255, 255, 0.28) 0px,
                                rgba(255, 255, 255, 0.08) 2px,
                                transparent 3px,
                                transparent calc(100% / ${stripes} - 3px),
                                rgba(0, 0, 0, 0.25) calc(100% / ${stripes} - 1px),
                                rgba(0, 0, 0, 0.40) calc(100% / ${stripes})
                            )`,
                            mixBlendMode: 'overlay',
                        }}
                    />
                )}

                {/* Hero Text Content - Separate, completely unfiltered layer sitting crisp on top */}
                <div className="absolute inset-0 z-10 flex items-end">
                    <div className="main-container px-6 md:px-12 pb-12 md:pb-10 w-full">
                        <div className="max-w-4xl">
                            {title && (
                                <h1 className="font-anton text-[52px] md:text-[80px] lg:text-[100px] font-normal text-secondary tracking-normal mb-2 leading-[1.1] drop-shadow-md">
                                    {title}
                                </h1>
                            )}
                            {subtitle && (
                                <p className="text-white text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide drop-shadow-sm">
                                    {subtitle}
                                </p>
                            )}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
