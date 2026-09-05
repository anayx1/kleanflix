import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

/**
 * Reusable CTASection Component
 *
 * @param {Object} props
 * @param {string} [props.title=""] - Main heading
 * @param {string} [props.description=""] - Subtitle / description
 * @param {string} [props.ctaText="SUBMIT REQUIREMENT"] - Primary button text
 * @param {string} [props.href="/contact-us"] - Target URL for primary CTA button
 * @param {string} [props.secondaryCtaText=""] - Secondary button text (e.g. "VIEW HOW THE SYSTEM WORKS")
 * @param {string} [props.secondaryButtonText=""] - Alias for secondary button text
 * @param {string} [props.secondaryText=""] - Alias for secondary button text
 * @param {string} [props.secondaryHref="/contact-us"] - Target URL for secondary button
 * @param {string} [props.secondaryButtonHref=""] - Alias for secondary button URL
 * @param {string} [props.imageSrc="/homepage/woman.avif"] - Image source path
 * @param {string} [props.imageAlt] - Image alt text
 * @param {string} [props.className=""] - Additional custom classes for the outer wrapper
 * @param {"white" | "#F7F7F7" | "gray" | string} [props.bg="white"] - Card background: "white" or "#F7F7F7"
 * @param {string} [props.cardBg] - Explicit card background class
 */
export default function CTASection({
    title = "",
    description = "",
    ctaText = "SUBMIT REQUIREMENT",
    href = "/contact-us",
    secondaryCtaText = "",
    secondaryButtonText = "",
    secondaryText = "",
    secondaryHref = "/contact-us",
    secondaryButtonHref = "",
    imageSrc = "/homepage/woman.avif",
    imageAlt,
    className = "",
    bg = "white",
    cardBg,
}) {
    // Resolve secondary button props
    const secText = secondaryCtaText || secondaryButtonText || secondaryText;
    const secHref = secondaryButtonHref || secondaryHref || "/contact-us";

    // Resolve card background color ("white", "#F7F7F7", "gray", or custom class)
    const isGray = bg === "#F7F7F7" || bg === "#f7f7f7" || bg === "gray";
    const resolvedCardBg = cardBg
        ? (cardBg.startsWith('bg-') ? cardBg : (cardBg === 'white' ? 'bg-white' : `bg-[${cardBg}]`))
        : (isGray ? 'bg-[#F7F7F7]' : (bg.startsWith('bg-') ? bg : (bg === 'white' ? 'bg-white' : `bg-[${bg}]`)));

    return (
        <section className={`py-12 ${className}`}>
            <div className="main-container px-4 md:px-10 flex justify-center">
                <div className={`relative ${resolvedCardBg} rounded-xl md:rounded-2xl overflow-hidden w-full md:max-w-[95%] shadow-sm`}>
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center">

                        {/* Left Column: Text Content and Button(s) */}
                        <div className="md:col-span-7 p-6 md:p-14 lg:p-18 flex flex-col items-start">
                            <h3 className={`font-semibold text-2xl md:text-4xl lg:text-[42px] text-primary leading-tight ${description ? 'mb-3 md:mb-4' : 'mb-6 md:mb-8'}`}>
                                {title}
                            </h3>
                            {description ? (
                                <p className="text-base md:text-lg lg:text-xl text-primary-dark mb-6 md:mb-8 max-w-2xl leading-tight">
                                    {description}
                                </p>
                            ) : null}

                            <div className="flex flex-wrap items-center gap-4 md:gap-6">
                                <Button
                                    href={href}
                                    variant="pill-secondary"
                                    showArrow={false}
                                >
                                    {ctaText}
                                </Button>

                                {secText ? (
                                    <Button
                                        href={secHref}
                                        variant="secondary"
                                        showArrow={true}
                                        size="sm"
                                        className="font-bold text-xs md:text-sm"
                                    >
                                        {secText}
                                    </Button>
                                ) : null}
                            </div>
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
