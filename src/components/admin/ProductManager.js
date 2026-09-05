'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, Filter, Loader2, Package, Check, X } from 'lucide-react';
import Image from 'next/image';
import MediaUploader from './MediaUploader';

const DEFAULT_CATEGORIES = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Window Cleaning',
  'Carpet & Upholstery',
  'Post-Construction',
  'Specialty Care',
];

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Category creation inline state
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [creatingCategoryLoading, setCreatingCategoryLoading] = useState(false);
  const [categoryFeedback, setCategoryFeedback] = useState('');

  // Form State (Price and inStock removed, detailImage added)
  const [formData, setFormData] = useState({
    title: '',
    category: DEFAULT_CATEGORIES[0],
    description: '',
    image: '',
    detailImage: '',
  });

  // Fetch all categories from API
  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
        }
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let url = '/api/products';
      const params = new URLSearchParams();
      if (selectedCategory !== 'All') params.append('category', selectedCategory);
      if (search) params.append('search', search);

      if (params.toString()) url += `?${params.toString()}`;

      const res = await fetch(url);
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, search]);

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData({
      title: '',
      category: categories[0] || DEFAULT_CATEGORIES[0],
      description: '',
      image: '',
      detailImage: '',
    });
    setErrorMsg('');
    setIsCreatingCategory(false);
    setNewCategoryName('');
    setCategoryFeedback('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title || '',
      category: product.category || categories[0] || DEFAULT_CATEGORIES[0],
      description: product.description || '',
      image: product.image || '',
      detailImage: product.detailImage || '',
    });
    setErrorMsg('');
    setIsCreatingCategory(false);
    setNewCategoryName('');
    setCategoryFeedback('');
    setIsModalOpen(true);
  };

  const handleCreateNewCategory = async () => {
    const trimmed = newCategoryName.trim();
    if (!trimmed) return;

    setCreatingCategoryLoading(true);
    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmed }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create category');
      }

      if (Array.isArray(data.categories)) {
        setCategories(data.categories);
      } else if (!categories.includes(data.category)) {
        setCategories((prev) => [...prev, data.category].sort((a, b) => a.localeCompare(b)));
      }

      setFormData((prev) => ({ ...prev, category: data.category }));
      setIsCreatingCategory(false);
      setNewCategoryName('');
      setCategoryFeedback(`Category "${data.category}" added and selected!`);
      setTimeout(() => setCategoryFeedback(''), 4000);
    } catch (err) {
      alert(err.message || 'Error creating category');
    } finally {
      setCreatingCategoryLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProducts();
      } else {
        alert('Failed to delete product.');
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.description) {
      setErrorMsg('Title, category, and description are required.');
      return;
    }

    setFormLoading(true);
    setErrorMsg('');

    try {
      const url = editingProduct ? `/api/products/${editingProduct.id}` : '/api/products';
      const method = editingProduct ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save product');
      }

      setIsModalOpen(false);
      fetchProducts();
      fetchCategories();
    } catch (err) {
      setErrorMsg(err.message || 'Error saving product');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="w-6 h-6 text-[#1E6BB8]" />
            Products Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your service packages and products catalog
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-[#1E6BB8] hover:bg-[#0E4A8A] text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition shadow-md hover:shadow-lg cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E6BB8] cursor-pointer"
          >
            <option value="All">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product List Grid */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-3 bg-white rounded-2xl border border-gray-100">
          <Loader2 className="w-10 h-10 text-[#1E6BB8] animate-spin" />
          <span className="text-gray-500 text-sm">Loading products...</span>
        </div>
      ) : products.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-2xl border border-gray-100 p-8 space-y-3">
          <Package className="w-12 h-12 text-gray-300 mx-auto" />
          <span className="text-gray-700 font-medium block">No products found</span>
          <span className="text-sm text-gray-400 block">Click &quot;Add Product&quot; above to create your first item.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-52 w-full bg-gray-50">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-3"
                    unoptimized
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <Package className="w-10 h-10 opacity-40" />
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-[#1E6BB8] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {product.category}
                </span>
                {product.detailImage && (
                  <span className="absolute bottom-3 right-3 bg-white/95 text-[#1E6BB8] text-[11px] font-bold px-2.5 py-1 rounded-md shadow border border-blue-100 flex items-center gap-1">
                    Detail Graphic Added
                  </span>
                )}
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{product.title}</h3>
                  <p className="text-gray-600 text-sm mt-1.5 line-clamp-3 leading-relaxed">{product.description}</p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleOpenEdit(product)}
                    className="p-2 text-gray-600 hover:text-[#1E6BB8] hover:bg-blue-50 rounded-lg transition"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form for Add/Edit with 7xl Width, Max 90dvh Height, and Inline CSS */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: '80rem', // 7xl width
              width: '100%',
              maxHeight: '90dvh',
              overflowY: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              border: '1px solid #e2e8f0',
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                borderBottom: '1px solid #f1f5f9',
                paddingBottom: '18px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    backgroundColor: '#eff6ff',
                    color: '#1E6BB8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid #dbeafe',
                  }}
                >
                  <Package style={{ width: '22px', height: '22px' }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#0f172a',
                      margin: 0,
                      lineHeight: '1.25',
                      fontFamily: 'inherit',
                    }}
                  >
                    {editingProduct ? 'Edit Product' : 'Add New Product'}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#64748b',
                      margin: '4px 0 0 0',
                      lineHeight: '1.4',
                    }}
                  >
                    {editingProduct
                      ? 'Update product details and media for your catalog'
                      : 'Fill in the information below to add a new product to your catalog'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  color: '#94a3b8',
                  padding: '8px',
                  borderRadius: '10px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s',
                }}
                title="Close modal"
              >
                <X style={{ width: '22px', height: '22px' }} />
              </button>
            </div>

            {errorMsg && (
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#fef2f2',
                  color: '#b91c1c',
                  borderRadius: '12px',
                  fontSize: '14px',
                  border: '1px solid #fecaca',
                  marginBottom: '18px',
                }}
              >
                {errorMsg}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                flex: 1,
              }}
            >
              {/* 2-Column Responsive Grid to make full use of 7xl width */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left Column: Title, Category, Description */}
                <div className="md:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Product Title */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1e293b',
                        marginBottom: '6px',
                      }}
                    >
                      Product Title <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. K1 Bathroom Cleaner & Sanitizer"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '14px',
                        color: '#0f172a',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '12px',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    />
                  </div>

                  {/* Category Selector with inline Create Feature */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '6px',
                      }}
                    >
                      <label
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#1e293b',
                          margin: 0,
                        }}
                      >
                        Category <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      {!isCreatingCategory && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCreatingCategory(true);
                            setNewCategoryName('');
                          }}
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: '#1E6BB8',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: 0,
                          }}
                        >
                          <Plus style={{ width: '15px', height: '15px' }} />
                          Create New Category
                        </button>
                      )}
                    </div>

                    {isCreatingCategory ? (
                      <div
                        style={{
                          padding: '14px 16px',
                          backgroundColor: '#f0f9ff',
                          border: '1px solid #bae6fd',
                          borderRadius: '14px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span style={{ fontSize: '13px', fontWeight: 600, color: '#1E6BB8' }}>
                            Enter new category name:
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setIsCreatingCategory(false);
                              setNewCategoryName('');
                            }}
                            style={{
                              color: '#64748b',
                              fontSize: '12px',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input
                            type="text"
                            autoFocus
                            placeholder="e.g. Industrial Floor Care, Laundry Care..."
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleCreateNewCategory();
                              }
                            }}
                            style={{
                              flex: 1,
                              padding: '10px 14px',
                              fontSize: '14px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #cbd5e1',
                              borderRadius: '10px',
                              outline: 'none',
                            }}
                          />
                          <button
                            type="button"
                            disabled={creatingCategoryLoading || !newCategoryName.trim()}
                            onClick={handleCreateNewCategory}
                            style={{
                              padding: '10px 18px',
                              backgroundColor: '#1E6BB8',
                              color: '#ffffff',
                              borderRadius: '10px',
                              fontSize: '13px',
                              fontWeight: 600,
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              flexShrink: 0,
                              opacity: creatingCategoryLoading || !newCategoryName.trim() ? 0.5 : 1,
                            }}
                          >
                            {creatingCategoryLoading ? (
                              <Loader2 style={{ width: '15px', height: '15px', animation: 'spin 1s linear infinite' }} />
                            ) : (
                              <Check style={{ width: '15px', height: '15px' }} />
                            )}
                            Add Category
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <select
                          value={formData.category}
                          onChange={(e) => {
                            if (e.target.value === '__CREATE_NEW__') {
                              setIsCreatingCategory(true);
                              setNewCategoryName('');
                            } else {
                              setFormData({ ...formData, category: e.target.value });
                            }
                          }}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            fontSize: '14px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #cbd5e1',
                            borderRadius: '12px',
                            outline: 'none',
                            color: '#0f172a',
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                          }}
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                          <option value="__CREATE_NEW__" style={{ fontWeight: 600, color: '#1E6BB8' }}>
                            + Create New Category...
                          </option>
                        </select>
                      </div>
                    )}

                    {categoryFeedback && (
                      <span
                        style={{
                          fontSize: '13px',
                          color: '#16a34a',
                          fontWeight: 500,
                          marginTop: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <Check style={{ width: '14px', height: '14px' }} /> {categoryFeedback}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1e293b',
                        marginBottom: '6px',
                      }}
                    >
                      Description <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Detailed description of the product, key features, application guidance, dilution instructions..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: '14px',
                        color: '#0f172a',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '12px',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        lineHeight: '1.55',
                      }}
                    />
                  </div>
                </div>

                {/* Right Column: Main Product Image & Detail Image */}
                <div className="md:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <MediaUploader
                    label="Product Image"
                    value={formData.image}
                    onChange={(url) => setFormData({ ...formData, image: url })}
                    height="190px"
                  />
                  <MediaUploader
                    label="Product Detail Image"
                    suffix="description"
                    helperText="Upload image of product details, specifications, or usage"
                    value={formData.detailImage}
                    onChange={(url) => setFormData({ ...formData, detailImage: url })}
                    height="190px"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  paddingTop: '18px',
                  borderTop: '1px solid #f1f5f9',
                  marginTop: '10px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    padding: '10px 22px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#334155',
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  style={{
                    padding: '10px 26px',
                    backgroundColor: '#1E6BB8',
                    color: '#ffffff',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(30, 107, 184, 0.3)',
                    opacity: formLoading ? 0.6 : 1,
                    transition: 'background-color 0.2s',
                  }}
                >
                  {formLoading && (
                    <Loader2 style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} />
                  )}
                  {editingProduct ? 'Update Product' : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
