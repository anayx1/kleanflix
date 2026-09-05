import { NextResponse } from 'next/server';
import { getBlogByIdOrSlug, updateBlog, deleteBlog } from '@/lib/db';

// GET /api/blogs/[id] - Fetch single blog post by ID or Slug
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const blog = getBlogByIdOrSlug(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id] - Update blog post
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updated = updateBlog(id, body);

    if (!updated) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id] - Delete blog post
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const success = deleteBlog(id);

    if (!success) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
