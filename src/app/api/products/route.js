import { NextResponse } from 'next/server';
import { getAllProducts, createProduct } from '@/lib/db';

// GET /api/products - List all products with optional filters (?category=, ?search=)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const products = getAllProducts({ category, search });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Create a new product
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, category, description, price, image, detailImage, inStock } = body;

    if (!title || !category || !description) {
      return NextResponse.json(
        { error: 'Title, category, and description are required.' },
        { status: 400 }
      );
    }

    const newProduct = createProduct({
      title,
      category,
      description,
      price,
      image,
      detailImage,
      inStock,
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
