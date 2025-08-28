export const PLACEHOLDERS = {
  product: `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2AB7CA;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#A3D93B;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      <rect x="50" y="50" width="300" height="300" rx="20" fill="white" opacity="0.8" />
      <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="18" 
            text-anchor="middle" fill="#64748B" font-weight="bold">
        Amaya
      </text>
      <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="14" 
            text-anchor="middle" fill="#64748B">
        Goat Milk Soap
      </text>
    </svg>
  `)}`,
  hero: `data:image/svg+xml;base64,${btoa(`
    <svg width="2070" height="1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2AB7CA;stop-opacity:0.7" />
          <stop offset="50%" style="stop-color:#4ECDC4;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#A3D93B;stop-opacity:0.7" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#heroGrad)" />
      <text x="50%" y="45%" font-family="Playfair Display, serif" font-size="80" 
            text-anchor="middle" fill="white" font-weight="bold">
        Amaya Luxury Soaps
      </text>
      <text x="50%" y="55%" font-family="Montserrat, sans-serif" font-size="24" 
            text-anchor="middle" fill="white" opacity="0.9">
        Handcrafted with Tradition, Perfected with Care
      </text>
    </svg>
  `)}`,
  article: `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="articleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2AB7CA;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#A3D93B;stop-opacity:0.4" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#articleGrad)" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" 
            text-anchor="middle" dy=".3em" fill="#64748B">
        Journal Article
      </text>
    </svg>
  `)}`,
  about: `data:image/svg+xml;base64,${btoa(`
    <svg width="800" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2AB7CA;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#A3D93B;stop-opacity:0.4" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#aboutGrad)" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" 
            text-anchor="middle" dy=".3em" fill="#64748B">
        About Amaya
      </text>
    </svg>
  `)}`
};

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'The Art of Traditional Soap Making',
    excerpt: 'Discover the centuries-old techniques that make our soaps unique and how we preserve these methods in modern production.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Benefits of Goat Milk for Skin',
    excerpt: 'Learn why goat milk is nature\'s perfect ingredient for sensitive skin and how it provides natural moisturizing benefits.',
    image: 'https://images.unsplash.com/photo-1594035910387-df1d6b81b590',
    date: 'February 28, 2024',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Sustainable Sourcing Practices',
    excerpt: 'How we ensure ethical and environmentally responsible ingredient sourcing from local Bulgarian farmers and producers.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b',
    date: 'January 12, 2024',
    readTime: '4 min read'
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'Shop', path: '/shop', icon: '🛍️' },
  { name: 'About', path: '/about', icon: 'ℹ️' },
  { name: 'Journal', path: '/journal', icon: '📝' },
  { name: 'Contact', path: '/contact', icon: '📞' },
];

export const SOCIAL_MEDIA = [
  { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
  { name: 'Facebook', icon: '👍', url: 'https://facebook.com' },
  { name: 'Pinterest', icon: '📌', url: 'https://pinterest.com' }
];

export const POLICY_LINKS = [
  { name: 'Shipping Policy', path: '/policies#shipping' },
  { name: 'Returns Policy', path: '/policies#returns' },
  { name: 'Privacy Policy', path: '/policies#privacy' },
  { name: 'Contact Us', path: '/contact' }
];

export const optimizeImageUrl = (
  url: string, 
  width: number = 800, 
  height: number = 600, 
  quality: number = 80
): string => {
  if (!url || url.startsWith('data:')) return url;
  
  try {
    const urlObj = new URL(url);
    
    // Handle Unsplash images
    if (url.includes('unsplash.com')) {
      urlObj.searchParams.set('w', width.toString());
      urlObj.searchParams.set('h', height.toString());
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('q', quality.toString());
      urlObj.searchParams.set('auto', 'format');
      return urlObj.toString();
    }
    
    // Handle other image URLs
    return url;
  } catch {
    return url;
  }
};