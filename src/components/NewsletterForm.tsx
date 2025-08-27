// NewsletterForm.tsx
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

const NewsletterForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="flex items-center mb-3">
        <FiMail className="h-5 w-5 text-teal-400 mr-2" />
        <span className="font-sans text-teal-400 text-sm font-medium">NEWSLETTER</span>
      </div>
      
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-lg placeholder:text-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-400 transition-colors w-full"
        >
          Subscribe
        </button>
      </motion.form>

      <p className="font-sans text-slate-400 text-xs mt-2">
        No spam, just skincare goodness. Unsubscribe anytime.
      </p>
    </motion.div>
  );
};

export default NewsletterForm;