// Updated src/components/CartDropdown.tsx
import { Link } from 'react-router-dom';
import { FiX, FiShoppingBag, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { optimizeImageUrl } from '../utils/constants';
import ImageWithFallback from './ImageWithFallback';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-slate-200"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif font-bold text-lg text-slate-800 flex items-center">
                <FiShoppingBag className="mr-2" />
                Your Cart ({cartItems.length})
              </h3>
              <button 
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close cart"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <FiShoppingBag className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="btn-primary inline-block px-6 py-2 text-sm"
                  onClick={onClose}
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src={optimizeImageUrl(item.image, 80, 80)}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-800 truncate">{item.name}</h4>
                      <p className="text-sm text-slate-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-slate-500 hover:text-teal-600 transition-colors p-1"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus className="h-3 w-3" />
                        </button>
                        <span className="text-sm text-slate-700">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-slate-500 hover:text-teal-600 transition-colors p-1"
                          aria-label="Increase quantity"
                        >
                          <FiPlus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-coral-500 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-slate-800">Total:</span>
                    <span className="font-bold text-teal-600">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <Link
                    to="/checkout"
                    className="btn-primary w-full text-center py-3"
                    onClick={onClose}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}