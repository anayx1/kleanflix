'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

function formatDate(dateStr) {
  if (!dateStr) return 'Aug 6, 2026';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch (e) {
    return dateStr;
  }
}

export default function BlogsListSection({ initialBlogs = [] }) {
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleBlogs = initialBlogs.slice(0, visibleCount);
  // Show load more button only if total blogs >= 10 and there are more blogs remaining to show
  const canLoadMore = initialBlogs.length >= 10 && visibleCount < initialBlogs.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <section id="insights" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="main-container px-6 md:px-12">
        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto blogs-grid-container">
          {visibleBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group bg-[#F8F9FA] rounded-xl overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Card Image Area */}
              <div className="relative w-full md:w-[44%] h-52 md:h-auto min-h-[200px] overflow-hidden flex-shrink-0 bg-gray-200">
                <Image
                  src={blog.featuredImage || '/blogs/commercial-laundry.png'}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 1000px) 100vw, 550px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs md:text-sm font-medium text-primary mb-2">
                    {formatDate(blog.publishedAt)}
                  </p>
                  <h3 className="text-primary font-medium text-lg md:text-xl lg:text-[22px] leading-snug group-hover:text-secondary transition-colors line-clamp-3 mb-4">
                    {blog.title}
                  </h3>
                </div>

                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-secondary uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                    READ MORE
                    <ArrowUpRight className="w-4 h-4 text-secondary" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button - hidden if total blogs < 10 or all are loaded */}
        {canLoadMore && (
          <div className="mt-12 md:mt-16 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="bg-secondary hover:bg-[#d96714] text-white font-bold text-xs md:text-sm tracking-wider uppercase px-8 md:px-10 py-2 md:py-4 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
