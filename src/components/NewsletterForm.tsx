// New src/components/NewsletterSection.tsx
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FiMail className="h-8 w-8" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join the Amaya Family
          </h2>
          
          <p className="font-sans text-teal-100 mb-8 text-lg">
            Subscribe to our newsletter for exclusive offers, skincare tips, and new product launches.
          </p>

          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl placeholder:text-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
            >
              Subscribe
            </button>
          </motion.form>

          <p className="font-sans text-teal-200 text-sm mt-4">
            No spam, just pure skincare goodness. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;