// src/components/ImageWithFallback.tsx
import { useState, useEffect } from 'react';
import { PLACEHOLDERS } from '../utils/constants';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'product' | 'hero' | 'article' | 'about';
  width?: number;
  height?: number;
}

export const ImageWithFallback = ({
  src,
  alt,
  className = '',
  fallbackType = 'product',
  width,
  height
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    setImgSrc(PLACEHOLDERS[fallbackType]);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-lime-50 animate-pulse rounded" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithFallback;