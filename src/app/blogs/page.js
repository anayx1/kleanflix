import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import { getAllBlogs } from '@/lib/db';
import BlogsListSection from '@/components/blogs/BlogsListSection';

export const metadata = {
    title: "Blogs | Kleanfix",
    description: "Knowledge That Helps You Understand Systems — Not Just Products. Real-world insights into cleaning systems, product development, and operational consistency.",
};

export default function BlogsPage() {
    // Server-side fetching of published blogs per AGENTS.md guidelines
    const publishedBlogs = getAllBlogs({ status: 'PUBLISHED' });

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title="Blogs"
                subtitle="Knowledge That Helps You Understand Systems — Not Just Products"
                imageSrc="/faq/hero.webp"
                imageAlt="Blogs Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary max-w-7xl leading-snug">
                        {/* Block 1 */}
                        <div className="space-y-1">
                            <p className="text-primary-dark text-xl md:text-2xl lg:text-[26px] font-medium leading-tight">
                                The real challenge for most buyers is not lack of options.
                            </p>
                            <p className="text-primary-dark text-xl md:text-2xl lg:text-[26px] font-medium leading-tight">
                                It is a lack of clarity.
                            </p>
                        </div>

                        {/* Block 2: The Knowledge Centre */}
                        <div>
                            <p className="text-primary-dark text-xl md:text-2xl lg:text-[26px] font-medium leading-tight">
                                The Knowledge Centre is built to explain how:
                            </p>
                            <div>
                                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-medium leading-snug">• Cleaning Systems</p>
                                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-medium leading-snug">• Product Development</p>
                                <p className="text-primary-dark text-base md:text-lg lg:text-[20px] font-medium leading-snug">• Operational Consistency <br /> actually, work in real business environments.</p>
                            </div>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-2 md:pt-4">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="#insights"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase"
                            >
                                EXPLORE LATEST INSIGHTS
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* List of All Published Blogs with Pagination */}
            <BlogsListSection initialBlogs={publishedBlogs} />
        </main>
    );
}
