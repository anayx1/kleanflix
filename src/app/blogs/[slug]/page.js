import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogByIdOrSlug, getAdjacentBlogs } from '@/lib/db';
import BlogContentRenderer from '@/components/blogs/BlogContentRenderer';
import BlogFeaturedImage from '@/components/blogs/BlogFeaturedImage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogByIdOrSlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Kleanfix',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: blog.metaTitle || `${blog.title} | Kleanfix`,
    description: blog.metaDescription || blog.excerpt || blog.title,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.featuredImage ? [{ url: blog.featuredImage }] : [],
    },
  };
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const blog = getBlogByIdOrSlug(slug);

  if (!blog) {
    notFound();
  }

  // Get adjacent published posts for bottom navigation
  const { prev, next } = getAdjacentBlogs(blog.publishedAt, blog.id);

  // Format date nicely (e.g. "Aug 6, 2026")
  let formattedDate = 'Aug 6, 2026';
  try {
    if (blog.publishedAt) {
      formattedDate = new Date(blog.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    }
  } catch (e) {
    formattedDate = blog.publishedAt || '';
  }

  const authorName = blog.author || 'Kleanfix Team';

  return (
    <main className="min-h-screen bg-white">
      <article className="main-container max-w-5xl mx-auto px-6 md:px-12 py-10">
        {/* Blog Title (Orange / Secondary) */}
        <h1 className="text-secondary text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight tracking-tight mb-2 md:mb-3">
          {blog.title}
        </h1>

        {/* Meta Info (Date & Author) */}
        <div className="flex items-center gap-2 text-primary font-medium text-xs md:text-sm mb-6 md:mb-8">
          <span>{formattedDate}</span>
          <span className="text-primary/60">•</span>
          <span>By kleanfix Team</span>
        </div>

        {/* Featured Image with Entry (115% -> 110%) & Scroll (110% -> 100%) Scale Animation */}
        {blog.featuredImage && (
          <BlogFeaturedImage
            src={blog.featuredImage}
            alt={blog.title}
          />
        )}

        {/* Article Body Content */}
        <div className="max-w-4xl text-primary-dark mx-auto">
          <BlogContentRenderer content={blog.content} />
        </div>

        {/* Bottom Adjacent Navigation */}
        <div className="pt-10 md:pt-14 mt-12 md:mt-16 border-t border-gray-100 flex items-center justify-between">
          {prev ? (
            <Link
              href={`/blogs/${prev.slug}`}
              className="text-secondary hover:underline font-semibold text-sm md:text-base transition-colors"
            >
              Previous
            </Link>
          ) : (
            <span className="text-gray-300 font-semibold text-sm md:text-base cursor-not-allowed select-none">
              Previous
            </span>
          )}

          {next ? (
            <Link
              href={`/blogs/${next.slug}`}
              className="text-secondary hover:underline font-semibold text-sm md:text-base transition-colors flex items-center gap-1"
            >
              Next blog →
            </Link>
          ) : (
            <span className="text-gray-300 font-semibold text-sm md:text-base cursor-not-allowed select-none">
              Next blog →
            </span>
          )}
        </div>
      </article>
    </main>
  );
}
