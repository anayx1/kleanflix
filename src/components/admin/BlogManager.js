'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  Loader2,
  FileText,
  Calendar,
  User,
  Tag,
  Globe,
  X,
  Bold,
  Italic,
  Heading,
  List,
  CheckSquare,
  Quote,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import MediaUploader from './MediaUploader';
import BlogContentRenderer, { FloralBulletIcon } from '@/components/blogs/BlogContentRenderer';

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('write');
  const contentTextareaRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    author: 'kleanfix Team',
    tags: '',
    status: 'PUBLISHED',
    publishedAt: new Date().toISOString().split('T')[0],
    metaTitle: '',
    metaDescription: '',
  });

  const insertFormatting = (prefix, suffix = '', defaultText = '') => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.content;
    const selectedText = text.substring(start, end) || defaultText;

    const newText = text.substring(0, start) + prefix + selectedText + suffix + text.substring(end);
    setFormData((prev) => ({ ...prev, content: newText }));

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
    }, 0);
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      let url = '/api/blogs';
      const params = new URLSearchParams();
      if (statusFilter !== 'All') params.append('status', statusFilter);
      if (search) params.append('search', search);

      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [statusFilter, search]);

  const handleOpenAdd = () => {
    setEditingBlog(null);
    setActiveTab('write');
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      featuredImage: '',
      author: 'kleanfix Team',
      tags: 'Cleaning, Tips, Maintenance',
      status: 'PUBLISHED',
      publishedAt: new Date().toISOString().split('T')[0],
      metaTitle: '',
      metaDescription: '',
    });
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (blog) => {
    setEditingBlog(blog);
    setActiveTab('write');
    setFormData({
      title: blog.title || '',
      content: blog.content || '',
      excerpt: blog.excerpt || '',
      featuredImage: blog.featuredImage || '',
      author: blog.author || 'Kleanfix Team',
      tags: blog.tags || '',
      status: blog.status || 'PUBLISHED',
      publishedAt: blog.publishedAt ? new Date(blog.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || '',
    });
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchBlogs();
      } else {
        alert('Failed to delete blog post.');
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setErrorMsg('Title and Content are required.');
      return;
    }

    setFormLoading(true);
    setErrorMsg('');

    try {
      const url = editingBlog ? `/api/blogs/${editingBlog.id}` : '/api/blogs';
      const method = editingBlog ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save blog post');
      }

      setIsModalOpen(false);
      fetchBlogs();
    } catch (err) {
      setErrorMsg(err.message || 'Error saving blog post');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#1E6BB8]" />
            Blogs & Articles Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Publish news, cleaning tips, and company updates
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-[#1E6BB8] hover:bg-[#0E4A8A] text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition shadow-md hover:shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Create Blog Post
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles by title or content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
          >
            <option value="All">All Statuses</option>
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
          </select>
        </div>
      </div>

      {/* Blogs List */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-3 bg-white rounded-2xl border border-gray-100">
          <Loader2 className="w-10 h-10 text-[#1E6BB8] animate-spin" />
          <p className="text-gray-500 text-sm">Loading blog posts...</p>
        </div>
      ) : blogs.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-gray-100 p-8 space-y-3">
          <FileText className="w-12 h-12 text-gray-300 mx-auto" />
          <p className="text-gray-700 font-medium">No blog posts found</p>
          <p className="text-sm text-gray-400">Click "Create Blog Post" to add your first article.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* Featured Image */}
              <div className="relative h-52 w-full bg-gray-100">
                {blog.featuredImage ? (
                  <Image
                    src={blog.featuredImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <FileText className="w-12 h-12 opacity-40" />
                  </div>
                )}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow ${blog.status === 'PUBLISHED'
                    ? 'bg-green-600 text-white'
                    : 'bg-yellow-500 text-white'
                    }`}
                >
                  {blog.status}
                </span>
              </div>

              {/* Blog Metadata & Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-xl line-clamp-2">{blog.title}</h3>
                  {blog.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-2">{blog.excerpt}</p>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {blog.tags ? (
                      blog.tags.split(',').map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3 text-gray-400" />
                          {t.trim()}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400">No tags</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`/blogs/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-[#1E6BB8] hover:bg-blue-50 rounded-lg transition"
                      title="View Live Blog"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleOpenEdit(blog)}
                      className="p-2 text-gray-600 hover:text-[#1E6BB8] hover:bg-blue-50 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form for Add/Edit Blog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-5 my-8">
            <div className="flex justify-between items-center border-b pb-4 border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">
                {editingBlog ? 'Edit Blog Post' : 'Create Blog Post'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 10 Essential House Cleaning Tips for Spring"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Publish Date</label>
                  <input
                    type="date"
                    value={formData.publishedAt}
                    onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
                  >
                    <option value="PUBLISHED">Published</option>
                    <option value="DRAFT">Draft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tags (Comma separated)</label>
                  <input
                    type="text"
                    placeholder="Cleaning, Tips, Home Care"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Short Excerpt / Summary</label>
                <textarea
                  rows={2}
                  placeholder="Brief summary to display on article list cards..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full p-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-gray-700">Article Content *</label>
                  <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setActiveTab('write')}
                      className={`px-3 py-1 rounded-md transition ${activeTab === 'write'
                        ? 'bg-white shadow-xs text-primary font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      Write
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('preview')}
                      className={`px-3 py-1 rounded-md transition ${activeTab === 'preview'
                        ? 'bg-white shadow-xs text-primary font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      Preview
                    </button>
                  </div>
                </div>

                {activeTab === 'write' ? (
                  <div className="border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#1E6BB8] focus-within:border-transparent">
                    {/* Formatting Toolbar */}
                    <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-200 text-xs text-gray-700">
                      <button
                        type="button"
                        onClick={() => insertFormatting('**', '**', 'bold text')}
                        title="Bold"
                        className="px-2 py-1 hover:bg-white hover:shadow-xs rounded font-bold text-gray-800 flex items-center gap-1 border border-transparent hover:border-gray-200 transition"
                      >
                        <Bold className="w-3.5 h-3.5" /> Bold
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('*', '*', 'italic text')}
                        title="Italic"
                        className="px-2 py-1 hover:bg-white hover:shadow-xs rounded italic text-gray-800 flex items-center gap-1 border border-transparent hover:border-gray-200 transition"
                      >
                        <Italic className="w-3.5 h-3.5" /> Italic
                      </button>
                      <div className="h-4 w-px bg-gray-300 mx-1" />
                      <button
                        type="button"
                        onClick={() => insertFormatting('### ', '\n', 'Subheading Title')}
                        title="Heading"
                        className="px-2 py-1 hover:bg-white hover:shadow-xs rounded font-semibold text-[#1E6BB8] flex items-center gap-1 border border-transparent hover:border-gray-200 transition"
                      >
                        <Heading className="w-3.5 h-3.5" /> Heading
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('- ', '\n', 'Bullet point item')}
                        title="Bullet List"
                        className="px-2 py-1 hover:bg-white hover:shadow-xs rounded text-gray-800 flex items-center gap-1 border border-transparent hover:border-gray-200 transition"
                      >
                        <List className="w-3.5 h-3.5" /> Bullets
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('✓ ', '\n', 'Checklist item')}
                        title="Checkmark Bullet"
                        className="px-2 py-1 hover:bg-white hover:shadow-xs rounded text-primary font-semibold flex items-center gap-1 border border-transparent hover:border-gray-200 transition"
                      >
                        <CheckSquare className="w-3.5 h-3.5" /> Checkmark (✓)
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('✤ ', '\n', 'Floral bullet item')}
                        title="Floral Bullet (✤)"
                        className="px-2 py-1 hover:bg-white hover:shadow-xs rounded text-primary-dark font-semibold flex items-center gap-1 border border-transparent hover:border-gray-200 transition"
                      >
                        <FloralBulletIcon className="w-3.5 h-3.5 text-primary-dark" /> Floral (✤)
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('> ', '\n', 'Quote callout')}
                        title="Quote"
                        className="px-2 py-1 hover:bg-white hover:shadow-xs rounded text-gray-800 flex items-center gap-1 border border-transparent hover:border-gray-200 transition"
                      >
                        <Quote className="w-3.5 h-3.5" /> Quote
                      </button>
                    </div>

                    <textarea
                      ref={contentTextareaRef}
                      rows={8}
                      required
                      placeholder="Full blog content (use toolbar for bold words, checkmarks, bullets, headings)..."
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full p-3 text-sm focus:outline-none font-mono text-xs text-gray-800 leading-relaxed resize-y min-h-[160px]"
                    />
                  </div>
                ) : (
                  <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 min-h-[200px] max-h-[350px] overflow-y-auto text-primary-dark">
                    {formData.content ? (
                      <BlogContentRenderer content={formData.content} />
                    ) : (
                      <p className="text-gray-400 text-sm italic">
                        Nothing to preview. Enter some content in Write mode.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <MediaUploader
                label="Featured Image"
                value={formData.featuredImage}
                onChange={(url) => setFormData({ ...formData, featuredImage: url })}
                customName={formData.title}
                helperText="Saved as lossless WebP named after blog title ({blog-title}.webp)"
              />

              {/* SEO Meta Details */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <h4 className="font-bold text-gray-800 text-sm flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#1E6BB8]" /> SEO & Meta Details (Optional)
                </h4>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Meta Title</label>
                  <input
                    type="text"
                    placeholder="Custom SEO Title Tag"
                    value={formData.metaTitle}
                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#1E6BB8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Meta Description</label>
                  <input
                    type="text"
                    placeholder="Custom SEO Meta Description"
                    value={formData.metaDescription}
                    onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#1E6BB8]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 sticky bottom-0 bg-white">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-5 py-2 bg-[#1E6BB8] hover:bg-[#0E4A8A] text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow"
                >
                  {formLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingBlog ? 'Update Blog' : 'Publish Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
