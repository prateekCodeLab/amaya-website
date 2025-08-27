// New src/components/ProductShowcase.tsx
import { motion } from 'framer-motion';
import { FiStar, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Lavender Dream',
      description: 'Calming French lavender essential oil in a creamy goat milk base',
      price: 14.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594035910387-df1d6b81b590?w=400&h=400&fit=crop&crop=center&q=80',
      category: 'Calming'
    },
    {
      id: 2,
      name: 'Honey Oat Bliss',
      description: 'Nourishing blend with organic honey and colloidal oatmeal',
      price: 12.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center&q=80',
      category: 'Nourishing'
    },
    {
      id: 3,
      name: 'Citrus Burst',
      description: 'Invigorating blend of orange, lemon, and grapefruit essential oils',
      price: 13.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center&q=80',
      category: 'Energizing'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Signature Collection
          </h2>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto text-lg">
            Handcrafted with care and tradition, each soap is a masterpiece of natural ingredients 
            and artisan craftsmanship.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  width={400}
                  height={400}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif font-bold text-xl text-slate-800">
                    {product.name}
                  </h3>
                  <span className="font-sans font-bold text-teal-600">
                    ${product.price}
                  </span>
                </div>

                <p className="font-sans text-slate-600 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500 ml-1">
                      ({product.rating})
                    </span>
                  </div>

                  <button className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors">
                    <FiShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            View All Products
            <FiShoppingBag className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;