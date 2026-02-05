import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { Input } from '../common/Input';
import { Textarea } from '../common/Textarea';
import { Button } from '../common/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submission:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-cream-50 to-cream-100 dark:from-charcoal-950 dark:to-charcoal-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-cream-300 max-w-3xl mx-auto">
            Have questions? Want to join our beta program? We're here to help you create meaningful tributes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-6">
                Contact Information
              </h3>
              <p className="text-charcoal-600 dark:text-cream-300 mb-8">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <Card hover={false} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-forest-100 dark:bg-forest-900/30">
                    <Mail className="w-6 h-6 text-forest-600 dark:text-forest-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900 dark:text-cream-50 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:hello@mapleoakdigital.com"
                      className="text-charcoal-600 dark:text-cream-300 hover:text-forest-600 dark:hover:text-forest-400 transition-colors"
                    >
                      hello@mapleoakdigital.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card hover={false} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                    <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900 dark:text-cream-50 mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+1-714-244-7383"
                      className="text-charcoal-600 dark:text-cream-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      +1 (714) 244-7383
                    </a>
                  </div>
                </div>
              </Card>

              <Card hover={false} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-rose-100 dark:bg-rose-900/30">
                    <MapPin className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900 dark:text-cream-50 mb-1">
                      Location
                    </h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      North America
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card hover={false} className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    error={errors.name?.message}
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
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>

                <Input
                  label="Subject"
                  placeholder="How can we help you?"
                  error={errors.subject?.message}
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: {
                      value: 5,
                      message: 'Subject must be at least 5 characters',
                    },
                  })}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell us about your needs..."
                  error={errors.message?.message}
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
                  className="w-full"
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
              </form>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 bg-forest-100 dark:bg-forest-900/30 border border-forest-300 dark:border-forest-700 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-forest-600 dark:text-forest-400 flex-shrink-0" />
                    <p className="text-forest-800 dark:text-forest-200">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                    <p className="text-rose-800 dark:text-rose-200">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
