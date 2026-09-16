'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ConsistentOutputSection() {
    return (
        <section className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[150dvh] flex items-end justify-center overflow-hidden bg-black">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                ref={(el) => {
                    if (el) {
                        el.muted = true;
                        el.defaultMuted = true;
                    }
                }}
                onCanPlay={(e) => {
                    e.currentTarget.muted = true;
                    e.currentTarget.play().catch(() => { });
                }}
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            >
                <source src="https://res.cloudinary.com/spqd54wy/video/upload/v1788202715/10598760-hd_3840_2160_30fps_1_1_1.mp4" type="video/mp4" />
                <source src="/homepage/sec13.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* White to Transparent Gradient Overlay at Bottom */}
            <div className="absolute bottom-0 inset-x-0 h-48 md:h-72 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

            {/* Center Overlaid Content */}
            <div className="relative z-20 main-container px-6 md:px-12 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto space-y-6 md:space-y-8 mb-20"
                >
                    {/* Main Headline */}
                    <h2 className="font-sans font-bold text-3xl md:text-5xl lg:text-[54px] !text-white leading-[1.15] tracking-tight">
                        Designed to deliver consistent output across operations, production cycles, and markets — without dependency on fragmented vendors.
                    </h2>

                    {/* Subtext Bullets */}
                    <div className="font-sans font-medium text-white/90 text-base md:text-xl lg:text-2xl space-y-2 max-w-4xl mx-auto">
                        <p>
                            Manufacturing-led production • OEM-ready systems • Export-active supply
                        </p>
                        <p>
                            • In-house R&D and formulation • SDS / TDS documentation support
                        </p>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
