'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CLOUDINARY_VIDEO_URL = "https://res.cloudinary.com/spqd54wy/video/upload/v1788804712/2025_Recap_Video_in_Pink_Yellow_Dynamic_Photo_Video_Dump_Style_Variant_B_1_1.mp4";
const LOCAL_FALLBACK_VIDEO_URL = "/how-the-system-works/sec2.mp4";

export default function WhyMostSetupsFailSection() {
    const [videoSrc, setVideoSrc] = useState(CLOUDINARY_VIDEO_URL);
    const videoRef = useRef(null);

    const handleVideoError = () => {
        if (videoSrc !== LOCAL_FALLBACK_VIDEO_URL) {
            setVideoSrc(LOCAL_FALLBACK_VIDEO_URL);
        }
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 md:mb-14"
                >
                    <h2 className="font-semibold text-3xl md:text-5xl text-primary tracking-tight mb-2 md:mb-3">
                        Why most setups fail?
                    </h2>
                    <p className="font-medium text-base md:text-xl lg:text-2xl text-primary-dark">
                        Even high-quality products fail inside fragmented systems.
                    </p>
                </motion.div>

                {/* 3-Column Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
                    {/* Left Card: Disconnected Layers & Result */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#F6F8FA] rounded-xl p-6 md:p-8 lg:p-10 flex flex-col justify-between space-y-8"
                    >
                        <div>
                            <p className="font-semibold text-base md:text-lg text-primary leading-snug mb-4">
                                Most businesses operate<br />through disconnected layers:
                            </p>
                            <ul className="space-y-2 text-primary font-medium text-sm md:text-base leading-snug">
                                <li>• Multiple Vendors</li>
                                <li>• Inconsistent Formulation</li>
                                <li>• No Standardization Across Locations</li>
                                <li>• Reactive Problem-Solving</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-base md:text-lg text-primary mb-3">
                                Result:
                            </p>
                            <ul className="space-y-2 text-primary font-medium text-sm md:text-base leading-snug">
                                <li>• Unpredictable Output</li>
                                <li>• Quality Variation</li>
                                <li>• Scaling Becomes Difficult</li>
                                <li>• Dependency On People Instead of Systems</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Center Column: Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="rounded-xl overflow-hidden shadow-sm bg-slate-100 relative min-h-[340px] md:min-h-[420px] flex items-center justify-center"
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            controls={false}
                            disablePictureInPicture
                            disableRemotePlayback
                            key={videoSrc}
                            onError={handleVideoError}
                            onCanPlay={(e) => {
                                e.currentTarget.muted = true;
                                e.currentTarget.play().catch(() => { });
                            }}
                            className="w-full h-full object-cover"
                        >
                            <source src={videoSrc} type="video/mp4" />
                            <source src={LOCAL_FALLBACK_VIDEO_URL} type="video/mp4" />
                        </video>
                    </motion.div>

                    {/* Right Card: The Kleanfix System */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="bg-[#F6F8FA] rounded-xl p-6 md:p-8 lg:p-10 flex flex-col justify-start space-y-6 text-primary"
                    >
                        <div>
                            <p className="font-semibold text-base md:text-lg text-primary mb-3">
                                The kleanfix system:
                            </p>
                            <p className="font-medium text-sm md:text-base leading-relaxed text-primary">
                                Kleanfix does not operate as a product supplier.<br />
                                It builds controlled, structured systems.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-sm md:text-base leading-relaxed text-primary mb-4">
                                Instead of managing multiple variables and vendors separately, the system aligns:
                            </p>
                            <ul className="space-y-2 font-medium text-sm md:text-base leading-snug">
                                <li>• Application-Based Product Systems</li>
                                <li>• Formulation Consistency Across Batches</li>
                                <li>• Manufacturing-Backed Execution</li>
                                <li>• OEM And Export Integration</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
