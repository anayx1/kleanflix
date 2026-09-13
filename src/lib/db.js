import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import fs from 'fs';

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'kleanflix.db');
const db = new DatabaseSync(dbPath);

// Enable WAL mode for high concurrency
db.exec('PRAGMA journal_mode = WAL;');

// Initialize Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL DEFAULT 0,
    image TEXT,
    detailImage TEXT,
    inStock INTEGER DEFAULT 1,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS blogs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    featuredImage TEXT,
    author TEXT DEFAULT 'Kleanflix Team',
    tags TEXT DEFAULT '',
    status TEXT DEFAULT 'PUBLISHED',
    publishedAt TEXT NOT NULL,
    metaTitle TEXT,
    metaDescription TEXT,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    createdAt TEXT NOT NULL
  );
`);

// Migration: ensure detailImage column exists on existing databases
try {
  db.exec('ALTER TABLE products ADD COLUMN detailImage TEXT;');
} catch (e) {
  // Column already exists
}

// --- Default Categories Seeding ---
const DEFAULT_CATEGORIES = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Window Cleaning',
  'Carpet & Upholstery',
  'Post-Construction',
  'Specialty Care',
];

try {
  const catCount = db.prepare('SELECT count(*) as count FROM categories').all()[0]?.count || 0;
  const now = new Date().toISOString();
  const insertCat = db.prepare('INSERT OR IGNORE INTO categories (id, name, createdAt) VALUES (?, ?, ?)');

  if (catCount === 0) {
    for (let i = 0; i < DEFAULT_CATEGORIES.length; i++) {
      insertCat.run(`${Date.now()}_cat_${i}`, DEFAULT_CATEGORIES[i], now);
    }
  }

  const existingProductCats = db.prepare("SELECT DISTINCT category FROM products WHERE category IS NOT NULL AND category != ''").all();
  for (let i = 0; i < existingProductCats.length; i++) {
    const cat = existingProductCats[i].category;
    if (cat && cat.trim()) {
      insertCat.run(`${Date.now()}_prodcat_${i}`, cat.trim(), now);
    }
  }
} catch (e) {
  console.error('Error initializing categories:', e);
}


// --- Helper Utilities ---
export function generateSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function generateId() {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// --- PRODUCT DB OPERATIONS ---
export function getAllProducts({ category, search } = {}) {
  let query = 'SELECT * FROM products';
  const conditions = [];
  const params = [];

  if (category && category !== 'All') {
    const formatted = category.trim();
    conditions.push('(category = ? COLLATE NOCASE OR LOWER(REPLACE(category, \' \', \'-\')) = LOWER(?) OR LOWER(category) = LOWER(REPLACE(?, \'-\', \' \')))');
    params.push(formatted, formatted, formatted);
  }
  if (search) {
    conditions.push('(title LIKE ? OR description LIKE ?)');
    params.push(`%${search}%`, `%${search}%`);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }
  query += ' ORDER BY datetime(createdAt) DESC';

  const stmt = db.prepare(query);
  const rows = stmt.all(...params);

  return rows.map((r) => ({
    ...r,
    price: Number(r.price),
    inStock: Boolean(r.inStock),
  }));
}

export function getProductByIdOrSlug(identifier) {
  const stmt = db.prepare('SELECT * FROM products WHERE id = ? OR slug = ? LIMIT 1');
  const row = stmt.all(identifier, identifier)[0];
  if (!row) return null;
  return {
    ...row,
    price: Number(row.price),
    inStock: Boolean(row.inStock),
  };
}

export function formatImageFileName(originalName) {
  if (!originalName) return '';
  const parsed = path.parse(originalName);
  const ext = parsed.ext.toLowerCase();
  const cleanBase = parsed.name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${cleanBase || 'image'}${ext}`;
}

export function normalizeImagePath(imagePath) {
  if (!imagePath || typeof imagePath !== 'string') return imagePath || null;
  const trimmed = imagePath.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('/uploads/')) {
    const rawFileName = trimmed.substring('/uploads/'.length);
    const cleanFileName = formatImageFileName(rawFileName);

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const oldPath = path.join(uploadDir, rawFileName);
    const newPath = path.join(uploadDir, cleanFileName);

    if (fs.existsSync(oldPath) && oldPath !== newPath && !fs.existsSync(newPath)) {
      try {
        fs.renameSync(oldPath, newPath);
      } catch (err) {
        console.error('Error renaming file to clean name:', err);
      }
    }

    return `/uploads/${cleanFileName}`;
  }

  return trimmed;
}

export function createProduct({ title, category, description, price, image, detailImage, inStock }) {
  const id = generateId();
  let baseSlug = generateSlug(title) || 'product';
  let slug = baseSlug;
  let count = 1;

  while (db.prepare('SELECT id FROM products WHERE slug = ?').all(slug).length > 0) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  const cleanedImage = normalizeImagePath(image);
  const cleanedDetailImage = normalizeImagePath(detailImage);
  const now = new Date().toISOString();
  const stmt = db.prepare(`
    INSERT INTO products (id, title, slug, category, description, price, image, detailImage, inStock, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    id,
    title,
    slug,
    category,
    description,
    price ? parseFloat(price) : 0,
    cleanedImage || null,
    cleanedDetailImage || null,
    inStock !== undefined ? (inStock ? 1 : 0) : 1,
    now,
    now
  );

  return getProductByIdOrSlug(id);
}

export function updateProduct(id, data) {
  const existing = getProductByIdOrSlug(id);
  if (!existing) return null;

  let title = data.title !== undefined ? data.title : existing.title;
  let category = data.category !== undefined ? data.category : existing.category;
  let description = data.description !== undefined ? data.description : existing.description;
  let price = data.price !== undefined ? parseFloat(data.price) : existing.price;
  let image = data.image !== undefined ? normalizeImagePath(data.image) : existing.image;
  let detailImage = data.detailImage !== undefined ? normalizeImagePath(data.detailImage) : existing.detailImage;
  let inStock = data.inStock !== undefined ? (data.inStock ? 1 : 0) : existing.inStock ? 1 : 0;
  let slug = existing.slug;

  if (data.title && data.title !== existing.title) {
    let baseSlug = generateSlug(data.title) || 'product';
    slug = baseSlug;
    let count = 1;
    while (
      db.prepare('SELECT id FROM products WHERE slug = ? AND id != ?').all(slug, id).length > 0
    ) {
      slug = `${baseSlug}-${count}`;
      count++;
    }
  }

  const now = new Date().toISOString();
  const stmt = db.prepare(`
    UPDATE products
    SET title = ?, slug = ?, category = ?, description = ?, price = ?, image = ?, detailImage = ?, inStock = ?, updatedAt = ?
    WHERE id = ?
  `);

  stmt.run(title, slug, category, description, price, image, detailImage, inStock, now, id);

  return getProductByIdOrSlug(id);
}

export function deleteProduct(id) {
  const existing = getProductByIdOrSlug(id);
  if (!existing) return false;
  const stmt = db.prepare('DELETE FROM products WHERE id = ?');
  stmt.run(id);
  return true;
}

// --- BLOG DB OPERATIONS ---
export function getAllBlogs({ status, search, tag } = {}) {
  let query = 'SELECT * FROM blogs';
  const conditions = [];
  const params = [];

  if (status) {
    conditions.push('status = ?');
    params.push(status);
  }
  if (tag) {
    conditions.push('tags LIKE ?');
    params.push(`%${tag}%`);
  }
  if (search) {
    conditions.push('(title LIKE ? OR content LIKE ? OR excerpt LIKE ?)');
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }
  query += ' ORDER BY datetime(publishedAt) DESC';

  const stmt = db.prepare(query);
  const rows = stmt.all(...params);
  return rows.map((r) => ({ ...r }));
}

export function getBlogByIdOrSlug(identifier) {
  if (!identifier) return null;
  const raw = String(identifier).trim();
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw).trim();
  } catch (e) {
    // Keep raw if decoding fails
  }
  const slugified = generateSlug(decoded);

  const stmt = db.prepare(`
    SELECT * FROM blogs 
    WHERE id = ? 
       OR slug = ? 
       OR slug = ? 
       OR slug = ? 
       OR LOWER(title) = LOWER(?)
    LIMIT 1
  `);
  const row = stmt.all(raw, raw, decoded, slugified, decoded)[0];
  return row || null;
}

export function getAdjacentBlogs(publishedAt, currentId) {
  if (!publishedAt) return { prev: null, next: null };

  const prevStmt = db.prepare(`
    SELECT id, title, slug 
    FROM blogs 
    WHERE status = 'PUBLISHED' 
      AND (datetime(publishedAt) < datetime(?) OR (datetime(publishedAt) = datetime(?) AND id < ?))
    ORDER BY datetime(publishedAt) DESC, id DESC 
    LIMIT 1
  `);

  const nextStmt = db.prepare(`
    SELECT id, title, slug 
    FROM blogs 
    WHERE status = 'PUBLISHED' 
      AND (datetime(publishedAt) > datetime(?) OR (datetime(publishedAt) = datetime(?) AND id > ?))
    ORDER BY datetime(publishedAt) ASC, id ASC 
    LIMIT 1
  `);

  const prev = prevStmt.all(publishedAt, publishedAt, currentId || '')[0] || null;
  const next = nextStmt.all(publishedAt, publishedAt, currentId || '')[0] || null;

  return { prev, next };
}



export function normalizeBlogFeaturedImage(imagePath, blogTitle) {
  if (!imagePath || typeof imagePath !== 'string' || !blogTitle) return imagePath || null;
  const trimmed = imagePath.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('/uploads/')) {
    const rawFileName = trimmed.substring('/uploads/'.length);
    const targetSlug = generateSlug(blogTitle);
    if (!targetSlug) return trimmed;

    const targetFileName = `${targetSlug}.webp`;
    if (rawFileName === targetFileName) return trimmed;

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const oldPath = path.join(uploadDir, rawFileName);

    if (fs.existsSync(oldPath)) {
      let finalTargetName = targetFileName;
      let counter = 1;
      while (
        fs.existsSync(path.join(uploadDir, finalTargetName)) &&
        path.join(uploadDir, finalTargetName) !== oldPath
      ) {
        finalTargetName = `${targetSlug}-${counter}.webp`;
        counter++;
      }
      const newPath = path.join(uploadDir, finalTargetName);

      try {
        if (rawFileName.toLowerCase().endsWith('.webp')) {
          fs.renameSync(oldPath, newPath);
        }
        return `/uploads/${finalTargetName}`;
      } catch (err) {
        console.error('Error renaming blog image to webp:', err);
      }
    }
  }

  return trimmed;
}

export function createBlog(data) {
  const id = generateId();
  let baseSlug = generateSlug(data.title) || 'blog-post';
  let slug = baseSlug;
  let count = 1;

  while (db.prepare('SELECT id FROM blogs WHERE slug = ?').all(slug).length > 0) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  const cleanedImage = normalizeBlogFeaturedImage(data.featuredImage, data.title);
  const now = new Date().toISOString();
  const publishedAt = data.publishedAt ? new Date(data.publishedAt).toISOString() : now;

  const stmt = db.prepare(`
    INSERT INTO blogs (id, title, slug, content, excerpt, featuredImage, author, tags, status, publishedAt, metaTitle, metaDescription, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    id,
    data.title,
    slug,
    data.content,
    data.excerpt || data.title,
    cleanedImage || null,
    data.author || 'Kleanfix Team',
    data.tags || '',
    data.status || 'PUBLISHED',
    publishedAt,
    data.metaTitle || data.title,
    data.metaDescription || data.excerpt || '',
    now,
    now
  );

  return getBlogByIdOrSlug(id);
}

export function updateBlog(id, data) {
  const existing = getBlogByIdOrSlug(id);
  if (!existing) return null;

  let title = data.title !== undefined ? data.title : existing.title;
  let content = data.content !== undefined ? data.content : existing.content;
  let excerpt = data.excerpt !== undefined ? data.excerpt : existing.excerpt;
  let author = data.author !== undefined ? data.author : existing.author;
  let tags = data.tags !== undefined ? data.tags : existing.tags;
  let status = data.status !== undefined ? data.status : existing.status;
  let publishedAt = data.publishedAt ? new Date(data.publishedAt).toISOString() : existing.publishedAt;
  let metaTitle = data.metaTitle !== undefined ? data.metaTitle : existing.metaTitle;
  let metaDescription = data.metaDescription !== undefined ? data.metaDescription : existing.metaDescription;
  let slug = existing.slug;

  if (data.title && data.title !== existing.title) {
    let baseSlug = generateSlug(data.title) || 'blog-post';
    slug = baseSlug;
    let count = 1;
    while (
      db.prepare('SELECT id FROM blogs WHERE slug = ? AND id != ?').all(slug, id).length > 0
    ) {
      slug = `${baseSlug}-${count}`;
      count++;
    }
  }

  const rawFeaturedImage = data.featuredImage !== undefined ? data.featuredImage : existing.featuredImage;
  const featuredImage = normalizeBlogFeaturedImage(rawFeaturedImage, title);

  const now = new Date().toISOString();
  const stmt = db.prepare(`
    UPDATE blogs
    SET title = ?, slug = ?, content = ?, excerpt = ?, featuredImage = ?, author = ?, tags = ?, status = ?, publishedAt = ?, metaTitle = ?, metaDescription = ?, updatedAt = ?
    WHERE id = ?
  `);

  stmt.run(
    title,
    slug,
    content,
    excerpt,
    featuredImage,
    author,
    tags,
    status,
    publishedAt,
    metaTitle,
    metaDescription,
    now,
    id
  );

  return getBlogByIdOrSlug(id);
}

export function deleteBlog(id) {
  const existing = getBlogByIdOrSlug(id);
  if (!existing) return false;
  const stmt = db.prepare('DELETE FROM blogs WHERE id = ?');
  stmt.run(id);
  return true;
}

// --- CATEGORY DB OPERATIONS ---
export function getAllCategories() {
  const stmt = db.prepare('SELECT name FROM categories ORDER BY name COLLATE NOCASE ASC');
  const rows = stmt.all();
  return rows.map((r) => r.name);
}

export function createCategory(name) {
  if (!name || !name.trim()) {
    throw new Error('Category name cannot be empty');
  }
  const cleanName = name.trim();
  const existing = db.prepare('SELECT name FROM categories WHERE LOWER(name) = LOWER(?) LIMIT 1').all(cleanName)[0];
  if (existing) {
    return existing.name;
  }
  const id = generateId();
  const now = new Date().toISOString();
  db.prepare('INSERT INTO categories (id, name, createdAt) VALUES (?, ?, ?)').run(id, cleanName, now);
  return cleanName;
}

export default db;

