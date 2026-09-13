'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';

export default function BlogFeaturedImage({ src, alt, className = '' }) {
  const containerRef = useRef(null);
  const [endScroll, setEndScroll] = useState(450);

  // Dynamic calculation of scroll distance based on element size and position
  useEffect(() => {
    const updateRange = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const totalDistance = window.scrollY + rect.bottom;
        setEndScroll(Math.max(250, Math.round(totalDistance * 0.75)));
      }
    };

    updateRange();
    window.addEventListener('resize', updateRange);
    return () => window.removeEventListener('resize', updateRange);
  }, []);

  // 1. Entry animation: extra scale offset starts at +0.05 (1.15 total) and glides to 0 (1.10 total)
  const entryOffset = useMotionValue(0.05);

  useEffect(() => {
    const controls = animate(entryOffset, 0, {
      duration: 1.4,
      ease: [0.30, 1, 0.3, 1], // Smooth deceleration curve
    });
    return () => controls.stop();
  }, [entryOffset]);

  // 2. Scroll animation: scales from 1.10 down to 1.00 as the user scrolls
  const { scrollY } = useScroll();
  const scrollScale = useTransform(scrollY, [0, endScroll], [1.10, 1.00], { clamp: true });

  // Combined scale: (1.10 + 0.05 = 1.15) on entry -> settles to 1.10 -> scrolls down to 1.00
  const scale = useTransform([scrollScale, entryOffset], ([s, e]) => {
    const combined = s + e;
    return Math.min(1.15, Math.max(1.00, combined));
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[16/9] md:aspect-[21/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm mb-8 md:mb-12 bg-gray-100 ${className}`}
    >
      <motion.div
        style={{ scale, willChange: 'transform' }}
        className="relative w-full h-full origin-center"
      >
        <Image
          src={src}
          alt={alt || 'Blog featured image'}
          fill
          priority
          sizes="(max-width: 1000px) 100vw, 1200px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
