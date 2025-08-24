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
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" 
            text-anchor="middle" dy=".3em" fill="#64748B">
        Amaya Soap
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

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, type: keyof typeof PLACEHOLDERS = 'product') => {
  const target = e.target as HTMLImageElement;
  target.onerror = null;
  target.src = PLACEHOLDERS[type];
};

export const optimizeUnsplashUrl = (url: string, width: number, height: number): string => {
  // Replace any malformed parameters
  let optimizedUrl = url.replace(/\$w=\d+\$h=\d+\$/, `?w=${width}&h=${height}`);
  
  // If no query parameters exist, add them
  if (!optimizedUrl.includes('?')) {
    optimizedUrl += `?w=${width}&h=${height}&fit=crop&q=80`;
  } else {
    // Replace existing width/height parameters
    optimizedUrl = optimizedUrl
      .replace(/([?&])w=\d+/, `$1w=${width}`)
      .replace(/([?&])h=\d+/, `$1h=${height}`);
    
    // Ensure fit and quality parameters
    if (!optimizedUrl.includes('fit=')) {
      optimizedUrl += '&fit=crop';
    }
    if (!optimizedUrl.includes('q=')) {
      optimizedUrl += '&q=80';
    }
  }
  
  return optimizedUrl;
};