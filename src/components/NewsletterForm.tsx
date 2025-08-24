import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingSpinner from './LoadingSpinner';

interface NewsletterFormData {
  email: string;
}

export default function NewsletterForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-4"
      aria-live="polite"
    >
      {submitSuccess ? (
        <p className="text-green-600 font-sans text-sm">
          Thank you for subscribing! Check your email for confirmation.
        </p>
      ) : (
        <>
          <div>
            <input
              type="email"
              placeholder="Your email"
              className={`w-full px-4 py-2 rounded border ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors`}
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email"
                }
              })}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors w-full flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size="small" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </>
      )}
    </form>
  );
}