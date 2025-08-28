import { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../components/LoadingSpinner";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-50 via-white to-lime-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-teal-200/30 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-lime-200/30 rounded-full backdrop-blur-sm"></div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6 relative z-10">
              Get In Touch
            </h1>
            <p className="font-sans text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-800 mb-6">Let's Connect</h2>
              <p className="font-sans text-slate-600 mb-8 leading-relaxed">
                Have questions about our products or need assistance with your order? 
                Our team is here to help you with any inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <FiMail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-slate-800">Email Us</h3>
                  <p className="font-sans text-slate-600">hello@amayasoaps.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <FiPhone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-slate-800">Call Us</h3>
                  <p className="font-sans text-slate-600">+1 (555) 123-AMAYA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <FiMapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-slate-800">Visit Us</h3>
                  <p className="font-sans text-slate-600">123 Artisan Street, Sofia, Bulgaria</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h3 className="font-sans font-medium text-slate-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-100 p-3 rounded-lg hover:bg-teal-100 transition-colors">
                  <span className="text-slate-700 hover:text-teal-600">Instagram</span>
                </a>
                <a href="#" className="bg-slate-100 p-3 rounded-lg hover:bg-teal-100 transition-colors">
                  <span className="text-slate-700 hover:text-teal-600">Facebook</span>
                </a>
                <a href="#" className="bg-slate-100 p-3 rounded-lg hover:bg-teal-100 transition-colors">
                  <span className="text-slate-700 hover:text-teal-600">Pinterest</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            {submitSuccess ? (
              <div className="text-center p-8">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h2 className="font-serif text-2xl font-bold mb-2 text-slate-800">Thank You!</h2>
                <p className="font-sans text-slate-600 mb-6">
                  Your message has been sent successfully. Our team will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-teal-600 text-white font-sans font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors hover-lift"
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
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-sans font-medium px-6 py-4 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center hover-lift shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="small" className="mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2 h-5 w-5" />
                      Let's Connect
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="font-sans text-slate-600 mt-10 text-center italic border-t border-slate-100 pt-6">
              "Your journey with Amaya is personal. And so is our promise to always listen."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}