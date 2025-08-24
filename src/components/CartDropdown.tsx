import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  const { cartItems, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50">
      <div className="p-4">
        <h3 className="font-serif font-bold text-lg mb-4">Your Cart</h3>
        {cartItems.length === 0 ? (
          <p className="text-slate-600">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-slate-600">${item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <Link
              to="/checkout"
              className="block bg-gold-600 text-white text-center py-2 rounded hover:bg-gold-700"
              onClick={onClose}
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}