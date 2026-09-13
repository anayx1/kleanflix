const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding kleanfix Database...');

  // Create Sample Products
  const products = [
    {
      title: 'Residential Deep Home Cleaning',
      slug: 'residential-deep-home-cleaning',
      category: 'Residential Cleaning',
      description: 'Comprehensive deep cleaning package covering kitchens, bathrooms, bedrooms, living spaces, and hard-to-reach surfaces.',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      inStock: true,
    },
    {
      title: 'Commercial Office Sanitation',
      slug: 'commercial-office-sanitation',
      category: 'Commercial Cleaning',
      description: 'Daily or weekly office cleaning, floor polishing, workspace disinfection, and trash management for corporate suites.',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      inStock: true,
    },
    {
      title: 'High-Rise Window & Glass Treatment',
      slug: 'high-rise-window-glass-treatment',
      category: 'Window Cleaning',
      description: 'Crystal-clear streak-free window cleaning for interior and exterior glass panels on modern residential and office buildings.',
      price: 149.0,
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
      inStock: true,
    },
  ];

  for (const prod of products) {
    await prisma.product.upsert({
      where: { slug: prod.slug },
      update: prod,
      create: prod,
    });
  }

  // Create Sample Blog Posts
  const blogs = [
    {
      title: '10 Secrets to Keeping a Spotless Home Between Professional Cleanings',
      slug: '10-secrets-to-keeping-a-spotless-home',
      content: `Maintaining a clean home doesn't have to consume your weekends. With a few daily habits and simple routines, you can preserve that post-cleaning shine effortlessly. Here are our top professional tips...`,
      excerpt: 'Discover easy daily habits to keep your living room, kitchen, and bathrooms shining bright between professional visits.',
      featuredImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      author: 'kleanfix Experts',
      tags: 'Home Care, Cleaning Tips, Maintenance',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      metaTitle: '10 Home Cleaning Tips | kleanfix Blog',
      metaDescription: 'Learn top cleaning tips from kleanfix professionals to keep your home clean every day.',
    },
    {
      title: 'Why Office Cleanliness Directly Impacts Employee Productivity',
      slug: 'why-office-cleanliness-impacts-productivity',
      content: `A clean office environment is more than just aesthetically pleasing; it directly influences indoor air quality, employee wellbeing, and overall workplace morale...`,
      excerpt: 'Studies show that sanitized workspaces reduce sick leave by up to 30% and boost focus.',
      featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Jenkins',
      tags: 'Commercial, Office, Productivity',
      status: 'PUBLISHED',
      publishedAt: new Date(Date.now() - 86400000 * 3), // 3 days ago
      metaTitle: 'Office Cleanliness & Productivity | kleanfix Blog',
      metaDescription: 'Explore the connection between clean office environments and workplace output.',
    },
  ];

  for (const blog of blogs) {
    await prisma.blogPost.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
  }

  console.log('Database Seeding Completed Successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
