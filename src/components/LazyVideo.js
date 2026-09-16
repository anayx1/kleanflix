'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

/**
 * LazyVideo - A performance-optimized video component that:
 * - Uses IntersectionObserver to only play video when visible in viewport
 * - Starts with preload="none" and switches to loading when near viewport
 * - Shows a poster image while the video loads
 * - Handles mobile autoplay compliance (muted, playsInline)
 * - Pauses video when scrolled out of view to save resources
 *
 * @param {Object} props
 * @param {string} props.src - Primary video source URL (passed as <source> element)
 * @param {string} [props.fallbackSrc] - Fallback video source URL
 * @param {string} [props.poster] - Static poster image shown while video loads
 * @param {string} [props.className] - CSS classes for the <video> element
 * @param {number} [props.rootMargin=200] - IntersectionObserver rootMargin in px (how far before viewport to start loading)
 */
export default function LazyVideo({
    src,
    fallbackSrc,
    poster,
    className = '',
    rootMargin = 200,
}) {
    const videoRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    const playVideo = useCallback((video) => {
        if (video && video.paused) {
            video.muted = true;
            video.play().catch(() => {});
        }
    }, []);

    const pauseVideo = useCallback((video) => {
        if (video && !video.paused) {
            video.pause();
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Start loading the video when it enters the expanded viewport
                        setShouldLoad(true);
                        playVideo(video);
                    } else {
                        // Pause when scrolled out of view to save resources
                        pauseVideo(video);
                    }
                });
            },
            {
                rootMargin: `${rootMargin}px 0px`,
                threshold: 0,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [rootMargin, playVideo, pauseVideo]);

    return (
        <video
            ref={(el) => {
                videoRef.current = el;
                if (el) {
                    el.muted = true;
                    el.defaultMuted = true;
                }
            }}
            loop
            muted
            playsInline
            preload={shouldLoad ? 'auto' : 'none'}
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            poster={poster}
            onCanPlay={(e) => {
                e.currentTarget.muted = true;
                e.currentTarget.play().catch(() => {});
            }}
            className={className}
        >
            {shouldLoad && (
                <>
                    <source src={src} type="video/mp4" />
                    {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
                </>
            )}
        </video>
    );
}
