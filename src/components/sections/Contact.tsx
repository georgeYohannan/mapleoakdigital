import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Send,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Handshake,
  Megaphone,
  Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Input } from '../common/Input';
import { Textarea } from '../common/Textarea';
import { Button } from '../common/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const subjectOptions = [
  'General Inquiry',
  'Product Support',
  'Partnership',
  'Media Inquiry',
  'Other',
];

const supportCards = [
  {
    icon: HelpCircle,
    title: 'Product Support',
    description:
      'Need help with a specific device or app? Browse our FAQ or submit a ticket.',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    description:
      'Learn how Maple Oak can power your memorial enterprise or funeral home.',
  },
  {
    icon: Megaphone,
    title: 'Media Inquiries',
    description:
      'Access our brand kit and connect with our communications team.',
  },
];

const offices = [
  {
    name: 'Maple Oak Digital',
    location: '8 THE GREEN, SUITE# 25727, DOVER, DE 19901',
    hours: '(714) 244-7383',
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  // Force dark theme on contact page so header/logo match design; restore on leave
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    };
  }, [theme]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-contact-bg pt-24 pb-16 dark text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream-100">
            Let's <span className="text-contact-accent">Connect</span>
          </h1>
          <p className="text-lg text-cream-300 max-w-2xl">
            Whether you have a question about our products or are interested in a
            partnership, our team is here to help you navigate your digital
            legacy journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Direct Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-contact-accent/20 text-contact-accent">
              DIRECT INQUIRY
            </span>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <Input
                label="Full Name"
                placeholder="John Doe"
                error={errors.name?.message}
                className="!bg-contact-card !border-contact-card !text-cream-50 placeholder:!text-cream-500 focus:!ring-contact-accent focus:!border-contact-accent"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message}
                className="!bg-contact-card !border-contact-card !text-cream-50 placeholder:!text-cream-500 focus:!ring-contact-accent focus:!border-contact-accent"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />

              <div className="w-full">
                <label className="block text-sm font-medium text-cream-200 mb-2">
                  Subject
                </label>
                <select
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 rounded-lg bg-contact-card border border-contact-card text-cream-50 focus:outline-none focus:ring-2 focus:ring-contact-accent focus:border-contact-accent [&>option]:bg-contact-card [&>option]:text-cream-50"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.subject?.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <Textarea
                label="Message"
                placeholder="How can we assist you today?"
                error={errors.message?.message}
                className="!bg-contact-card !border-contact-card !text-cream-50 placeholder:!text-cream-500 focus:!ring-contact-accent focus:!border-contact-accent min-h-[140px]"
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters',
                  },
                })}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full !bg-contact-accent hover:!bg-contact-accent/90 !text-white !border-0"
                size="lg"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="flex items-start gap-2 text-sm text-contact-mint">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                Your messages are handled with the same privacy and care as our
                products. We typically respond within 24 hours.
              </p>
            </form>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-lg bg-contact-card border border-contact-mint/30 flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-contact-mint flex-shrink-0" />
                  <p className="text-contact-mint">
                    Thank you for your message! We'll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-lg bg-contact-card border border-red-400/50 flex items-center gap-3"
                >
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-red-300">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Dedicated Support + Global Presence */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-xl font-bold text-cream-100 mb-6">
                Dedicated Support
              </h2>
              <div className="space-y-4">
                {supportCards.map((card) => (
                  <div
                    key={card.title}
                    className="p-5 rounded-xl bg-contact-card border border-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-contact-mint/20">
                        <card.icon className="w-5 h-5 text-contact-mint" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cream-100 mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-cream-300">{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-cream-100 mb-6">
                Global Presence
              </h2>
              <div className="space-y-4 mb-6">
                {offices.map((office) => (
                  <div
                    key={office.name}
                    className="p-5 rounded-xl bg-contact-card border border-white/5"
                  >
                    <h3 className="font-semibold text-cream-100">{office.name}</h3>
                    <p className="text-contact-mint text-sm uppercase tracking-wide mt-1">
                      {office.location}
                    </p>
                    <p className="text-cream-300 text-sm mt-1">{office.hours}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center p-8 rounded-xl bg-contact-card border border-white/5">
                <div className="flex flex-col items-center gap-2 text-contact-mint">
                  <Globe className="w-12 h-12 text-contact-accent" />
                  <span className="text-sm font-medium">Worldwide</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
