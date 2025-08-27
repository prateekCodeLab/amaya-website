// Updated NewsletterSection.tsx
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

const NewsletterSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6TTI0IDM0YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <FiMail className="h-10 w-10 text-white" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
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
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl placeholder:text-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-white text-lg"
            />
            <button
              type="submit"
              className="bg-white text-teal-700 px-8 py-5 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-1 text-lg min-w-[160px]"
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