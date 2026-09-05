import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

/**
 * Reusable CTASection Component
 *
 * @param {Object} props
 * @param {string} [props.title="Need help choosing the right system?"] - Main heading
 * @param {string} [props.description="Not sure where to start or need a customized recommendation?"] - Subtitle / description
 * @param {string} [props.ctaText="SUBMIT REQUIREMENT"] - Button text
 * @param {string} [props.href="/contact-us"] - Target URL for CTA button
 * @param {string} [props.imageSrc="/homepage/woman.avif"] - Image source path
 * @param {string} [props.imageAlt] - Image alt text
 * @param {string} [props.className=""] - Additional custom classes for the outer wrapper
 */
export default function CTASection({
    title = "",
    description = "",
    ctaText = "SUBMIT REQUIREMENT",
    href = "/contact-us",
    imageSrc = "/homepage/woman.avif",
    imageAlt,
    className = "",
}) {
    return (
        <section className={`py-12 ${className}`}>
            <div className="main-container px-4 md:px-10 flex justify-center">
                <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden w-full md:max-w-[95%] shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center">

                        {/* Left Column: Text Content and Button */}
                        <div className="md:col-span-7 p-6 md:p-14 lg:p-18 flex flex-col items-start">
                            <h3 className=" font-semibold text-2xl md:text-4xl lg:text-[42px] text-primary leading-tight mb-3 md:mb-4">
                                {title}
                            </h3>
                            <p className=" text-base md:text-lg lg:text-xl text-primary-dark mb-6 md:mb-8 max-w-2xl leading-tight">
                                {description}
                            </p>
                            <Button
                                href={href}
                                variant="pill-secondary"
                                showArrow={false}
                            >
                                {ctaText}
                            </Button>
                        </div>

                        {/* Right Column: Image of pointing woman */}
                        <div className="md:col-span-5 relative self-stretch min-h-[260px] md:min-h-0 flex items-end justify-end mt-2 md:mt-0">
                            <div className="relative w-full h-[260px] md:h-[400px] lg:h-[430px]">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt || (typeof title === 'string' ? title : 'CTA illustration')}
                                    fill
                                    sizes="(max-width: 1001px) 100vw, 35vw"
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
