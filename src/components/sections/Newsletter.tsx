import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrorMessage('');

    if (!email) {
      setErrorMessage('Please enter your email address');
      setSubmitStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Newsletter subscription:', email);
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="bg-gradient-to-br from-forest-600 to-amber-600 dark:from-forest-900 dark:to-amber-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Stay Updated on Our Journey
          </h2>

          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Be the first to know about new features, early access opportunities, and special offers.
            Join our community of families preserving precious memories.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 rounded-lg bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-cream-50 placeholder-charcoal-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-cream-100 text-forest-700 hover:text-forest-800 shadow-xl whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center gap-3 text-left"
                >
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <p className="text-white">
                    Thank you for subscribing! Check your email for confirmation.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 bg-rose-500/20 backdrop-blur-sm border border-rose-300/30 rounded-lg flex items-center gap-3 text-left"
                >
                  <AlertCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <p className="text-white">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <p className="mt-6 text-sm text-cream-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
