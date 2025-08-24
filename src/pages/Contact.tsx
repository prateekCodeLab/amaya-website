import { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../components/LoadingSpinner";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
            We'd Love to Hear From You
          </h1>

          {submitSuccess ? (
            <div className="text-center p-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h2 className="font-serif text-2xl font-bold mb-2 text-slate-800">Thank You!</h2>
              <p className="font-sans text-slate-600 mb-6">
                Your message has been sent successfully. Our team will respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="bg-teal-600 text-white font-sans font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-sans font-medium block mb-2 text-slate-700">
                  Full Name*
                </label>
                <input
                  id="name"
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors`}
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="font-sans font-medium block mb-2 text-slate-700">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors`}
                  placeholder="your@email.com"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="font-sans font-medium block mb-2 text-slate-700">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors`}
                  placeholder="How can we help you?"
                  {...register("message", { 
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white font-sans font-medium px-6 py-4 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="small" className="mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}

          <p className="font-sans text-slate-600 mt-10 text-center italic">
            "Your journey with Amaya is personal. And so is our promise to always listen."
          </p>
        </div>
      </div>
    </div>
  );
}