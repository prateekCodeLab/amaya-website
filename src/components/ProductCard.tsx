import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiStar, FiEye } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import LoadingSpinner from './LoadingSpinner';
import ImageWithFallback from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  showWishlist?: boolean;
  className?: string;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart,
  showWishlist = true,
  className = '',
  index = 0
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={cardVisible ? "visible" : "hidden"}
      className={`product-card group ${className} bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div className="relative aspect-square overflow-hidden">
        <Link 
          to={`/product/${product.id}`} 
          className="block h-full relative overflow-hidden"
          aria-label={`View details for ${product.name}`}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            fallbackType="product"
            width={400}
            height={400}
          />
          
          {/* Hover overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <FiEye className="h-8 w-8 text-white" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
        
        {/* Wishlist button */}
        {showWishlist && (
          <motion.button
            onClick={handleWishlistToggle}
            className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              isWishlisted 
                ? 'text-coral-500 bg-white shadow-lg' 
                : 'text-slate-600 bg-white/90 hover:bg-white hover:text-coral-500'
            }`}
            whileTap={{ scale: 0.9 }}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FiHeart className={`h-5 w-5 transition-all ${isWishlisted ? 'fill-current' : ''}`} />
          </motion.button>
        )}

        {/* Out of stock badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-slate-500/95 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
            Out of Stock
          </div>
        )}

        {/* Quick add to cart button */}
        <AnimatePresence>
          {isHovered && product.inStock && (
            <motion.button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="absolute bottom-4 right-4 bg-teal-600 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Add to cart"
            >
              {isAddingToCart ? (
                <LoadingSpinner size="small" />
              ) : (
                <FiShoppingBag className="h-5 w-5" />
              )}
            </motion.button>
          )}
        </AnimatePresence>
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

          <motion.button
            onClick={handleAddToCart}
            disabled={isAddingToCart || !product.inStock}
            className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Add to cart"
          >
            {isAddingToCart ? (
              <LoadingSpinner size="small" />
            ) : (
              <FiShoppingBag className="h-4 w-4" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;