import { getAllProducts } from '@/lib/db';

/**
 * Server-side helper to fetch products by category
 *
 * @param {string} category - Category name or slug (e.g. 'Facility Care' or 'facility-care')
 * @returns {Promise<Array>} Array of product objects sorted naturally (K1, K2, K3...)
 */
export async function getProductsByCategory(category = 'Facility Care') {
  try {
    const products = getAllProducts({ category });
    
    // Sort naturally by title (K1, K2, K3...)
    return products.sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { numeric: true })
    );
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}
