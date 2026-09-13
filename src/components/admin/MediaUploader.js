'use client';

import { useState } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function MediaUploader({
  value,
  onChange,
  label = 'Product Image',
  suffix = '',
  customName = '',
  helperText = '',
  height = '200px',
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      if (suffix) {
        formData.append('suffix', suffix);
      }
      if (customName) {
        formData.append('customName', customName);
      }

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to upload image');
      }

      onChange(data.url);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div>
        <label
          style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 600,
            color: '#1e293b',
            marginBottom: helperText ? '2px' : '4px',
          }}
        >
          {label}
        </label>
        {helperText && (
          <span
            style={{
              display: 'block',
              fontSize: '12px',
              color: '#64748b',
              marginBottom: '4px',
            }}
          >
            {helperText}
          </span>
        )}
      </div>

      {value ? (
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #cbd5e1',
            backgroundColor: '#f8fafc',
            height: height,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <Image
            src={value}
            alt="Uploaded preview"
            fill
            className="object-contain p-2"
            unoptimized
          />
          <button
            type="button"
            onClick={() => onChange('')}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            }}
            title="Remove image"
          >
            <X style={{ width: '14px', height: '14px' }} />
            Remove
          </button>
        </div>
      ) : (
        <div
          style={{
            border: '2px dashed #cbd5e1',
            borderRadius: '16px',
            padding: '20px 16px',
            textAlign: 'center',
            backgroundColor: '#f8fafc',
            cursor: 'pointer',
            position: 'relative',
            height: height,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={loading}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0,
              cursor: 'pointer',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {loading ? (
              <Loader2 style={{ width: '28px', height: '28px', color: '#1E6BB8', animation: 'spin 1s linear infinite' }} />
            ) : (
              <div
                style={{
                  padding: '10px',
                  backgroundColor: '#eff6ff',
                  color: '#1E6BB8',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Upload style={{ width: '20px', height: '20px' }} />
              </div>
            )}
            <div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#1e293b',
                  display: 'block',
                }}
              >
                {loading ? 'Uploading image...' : 'Click or drag image here'}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  marginTop: '2px',
                  display: 'block',
                }}
              >
                PNG, JPG, WEBP, AVIF (Saved as lossless WebP)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Or manually type image URL */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '2px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: 500,
            color: '#64748b',
          }}
        >
          Or paste image URL:
        </label>
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com/product.jpg or /uploads/..."
          style={{
            width: '100%',
            fontSize: '12px',
            padding: '8px 12px',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '10px',
            outline: 'none',
            color: '#0f172a',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {error && (
        <span
          style={{
            fontSize: '12px',
            color: '#dc2626',
            fontWeight: 500,
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
