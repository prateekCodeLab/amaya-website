import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiStar, FiEye } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PLACEHOLDERS } from '../utils/constants';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import LoadingSpinner from './LoadingSpinner';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  showWishlist?: boolean;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart,
  showWishlist = true,
  className = '' 
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      addToCart(product);
      onAddToCart?.();
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleImageError = () => {
    console.warn(`Image failed to load: ${product.image}`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const imageSrc = imageError ? PLACEHOLDERS.product : product.image;

  return (
    <div 
      ref={cardRef}
      className={`product-card group ${className} ${
        cardVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-2xl">
        <Link 
          to={`/product/${product.id}`} 
          className="block h-full relative overflow-hidden"
          aria-label={`View details for ${product.name}`}
        >
          {/* Loading state */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-lime-50 flex items-center justify-center">
              <LoadingSpinner size="small" />
            </div>
          )}
          
          {/* Main image */}
          <LazyLoadImage
            src={imageSrc}
            alt={product.name}
            className={`product-card-image w-full h-full object-cover transition-all duration-700 ease-out-quint ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            effect="blur"
            placeholderSrc={PLACEHOLDERS.product}
            onLoad={handleImageLoad}
            onError={handleImageError}
            width={400}
            height={400}
            crossOrigin="anonymous"
          />
          
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="transform transition-all duration-500 ease-out-quint translate-y-4 group-hover:translate-y-0">
              <FiEye className="h-8 w-8 text-white" />
            </div>
          </div>
        </Link>
        
        {/* Wishlist button */}
        {showWishlist && (
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              isWishlisted 
                ? 'text-coral-500 bg-white shadow-lg scale-100' 
                : 'text-slate-600 bg-white/90 hover:bg-white hover:text-coral-500 scale-90 group-hover:scale-100'
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FiHeart className={`h-5 w-5 transition-all duration-300 ${
              isWishlisted ? 'fill-current scale-110' : 'group-hover:scale-110'
            }`} />
          </button>
        )}

        {/* Out of stock badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-slate-500/95 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
            Out of Stock
          </div>
        )}

        {/* Quick add to cart button */}
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart || !product.inStock}
          className={`absolute bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full transition-all duration-500 ease-out-quint focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label="Add to cart"
        >
          {isAddingToCart ? (
            <LoadingSpinner size="small" />
          ) : (
            <FiShoppingBag className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Link 
            to={`/product/${product.id}`} 
            className="hover:text-teal-600 transition-colors flex-1 group/title"
          >
            <h3 className="font-serif font-bold text-lg text-slate-800 line-clamp-2 leading-tight group-hover/title:text-teal-600 transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          <span className="font-sans font-bold text-teal-600 ml-4 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="font-sans text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`h-4 w-4 transition-colors duration-300 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-sans text-xs text-slate-500 ml-1">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart || !product.inStock}
            className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transform hover:scale-110 disabled:hover:scale-100 shadow-md hover:shadow-lg"
            aria-label="Add to cart"
          >
            {isAddingToCart ? (
              <LoadingSpinner size="small" />
            ) : (
              <FiShoppingBag className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;