'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "BEFORE",
    afterLabel = "AFTER",
    className = ""
}) {
    const [position, setPosition] = useState(50); // percentage (0 - 100)
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setPosition(percentage);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
        }
    };

    // When dragging starts
    const handleStart = (e) => {
        setIsDragging(true);
        // Move immediately to the click position
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        handleMove(clientX);
    };

    // When dragging stops
    useEffect(() => {
        const handleStop = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mouseup', handleStop);
            window.addEventListener('touchend', handleStop);
        }

        return () => {
            window.removeEventListener('mouseup', handleStop);
            window.removeEventListener('touchend', handleStop);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full select-none overflow-hidden rounded-3xl touch-none ${className}`}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Base) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Image
                    src={afterImage}
                    alt="After comparison"
                    fill
                    sizes="(max-width: 1001px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                />
                <span className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white font-sans text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider select-none z-10">
                    {afterLabel}
                </span>
            </div>

            {/* Before Image (Overlay clipped with clipPath) */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before comparison"
                    fill
                    sizes="(max-width: 1001px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                />
                <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white font-sans text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider select-none z-10">
                    {beforeLabel}
                </span>
            </div>

            {/* Slider Divider Line */}
            <div
                className="absolute inset-y-0 z-20 w-[3px] bg-secondary pointer-events-none cursor-ew-resize"
                style={{ left: `${position}%` }}
            />

            {/* Slider Handle button */}
            <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center cursor-ew-resize shadow-[0_4px_20px_rgba(244,122,31,0.4)] transition-transform duration-200 active:scale-95"
                style={{ left: `${position}%` }}
            >
                <ChevronsLeftRight className="w-5 h-5 text-white" />
            </div>
        </div>
    );
}
