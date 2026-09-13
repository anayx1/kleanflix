'use client';

import React, { useRef, useEffect } from 'react';

export default function WhyMeetAtEventsSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handle autoplay rejection gracefully
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full min-h-[580px] md:min-h-[640px] lg:min-h-[720px] overflow-hidden flex items-center justify-end">
      {/* Background Video with Cloudinary CDN first and local /events/videosec.mp4 as fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
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
          className="w-full h-full object-cover object-center pointer-events-none"
        >
          <source
            src="https://res.cloudinary.com/spqd54wy/video/upload/v1789266462/14468494_3840_2160_30fps_2.mp4"
            type="video/mp4"
          />
          <source src="/events/videosec.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Floating Content Card on the Right */}
      <div className="relative z-10 w-full main-container px-6 md:px-12 py-12 md:py-16 lg:py-20 flex justify-end">
        <div className="bg-white rounded-3xl md:rounded-[32px] p-8 md:p-10 lg:p-12 shadow-2xl max-w-xl lg:max-w-2xl w-full">
          {/* Section Heading */}
          <h2 className="text-primary text-3xl md:text-4xl lg:text-[44px] font-semibold leading-tight mb-5 md:mb-7">
            Why meet at events
          </h2>

          {/* Block 1: Evaluation */}
          <div className=" mb-3">
            <p className="text-primary-dark text-base md:!text-[20px] md:!leading-snug font-medium leading-snug ">Exhibitions are not for browsing.</p>
            <p className="text-primary-dark text-base md:!text-[20px] md:!leading-snug font-medium leading-snug ">They are for evaluation.</p>
          </div>

          {/* Block 2: Focused Discussion Points */}
          <div className="mb-3">
            <p className="mb-1.5 text-primary-dark text-base md:!text-[20px] md:!leading-snug font-medium leading-snug">A focused discussion helps you:</p>
            <div className="space-y-1">
              <p className='text-primary-dark text-base md:!text-[20px] md:!leading-snug font-normal leading-snug'>• Understand How Systems Work in Real Environments</p>
              <p className='text-primary-dark text-base md:!text-[20px] md:!leading-snug font-normal leading-snug'>• Explore OEM And Private Label Opportunities</p>
              <p className='text-primary-dark text-base md:!text-[20px] md:!leading-snug font-normal leading-snug'>• Evaluate Product Development and OEM Capabilities</p>
              <p className='text-primary-dark text-base md:!text-[20px] md:!leading-snug font-normal leading-snug'>• Assess Export and Bulk Supply Capability</p>
            </div>
          </div>

          {/* Block 3: Conclusion */}
          <div>
            <p className='text-primary-dark text-base md:!text-[20px] md:!leading-snug font-normal leading-snug'>Direct conversations.</p>
            <p className='text-primary-dark text-base md:!text-[20px] md:!leading-snug font-normal leading-snug'>Real use-case discussions.</p>
            <p className='text-primary-dark text-base md:!text-[20px] md:!leading-snug font-normal leading-snug'>Faster decision-making.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
