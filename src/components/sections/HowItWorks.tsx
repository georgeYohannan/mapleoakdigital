import { Upload, Settings, Sparkles, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Container } from '../common/Container';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Memories',
    description:
      'Select photos, videos, and audio recordings that capture the essence of your loved one. Our platform securely processes all your materials.',
    color: 'from-forest-500 to-forest-700',
  },
  {
    icon: Settings,
    title: 'Customize Your Tribute',
    description:
      'Choose music, add voice narration, write personal messages, and select from professional templates that match your vision.',
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: Sparkles,
    title: 'AI Creates Magic',
    description:
      'Our advanced AI analyzes your content, creates smooth transitions, enhances quality, and weaves everything into a beautiful narrative.',
    color: 'from-rose-500 to-rose-700',
  },
  {
    icon: Download,
    title: 'Share & Preserve',
    description:
      'Download your memorial video in high quality, share it with family and friends, or store it securely in our cloud platform.',
    color: 'from-forest-600 to-amber-600',
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-white dark:bg-charcoal-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-6">
            Simple Process, Beautiful Results
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-cream-300 max-w-3xl mx-auto">
            Create a lasting tribute in four easy steps. No technical expertise required.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-200 via-amber-200 to-rose-200 dark:from-forest-900 dark:via-amber-900 dark:to-rose-900 transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-600 dark:text-cream-400 rounded-full text-sm font-semibold mb-4">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-charcoal-600 dark:text-cream-300 max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>

                <div className="hidden md:block relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-white dark:bg-charcoal-900 border-4 border-forest-500 dark:border-forest-400 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-2xl font-bold text-forest-600 dark:text-forest-400">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-forest-50 to-amber-50 dark:from-forest-900/20 dark:to-amber-900/20 rounded-2xl p-8 md:p-12 border border-forest-200 dark:border-forest-800">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 mb-6 max-w-2xl mx-auto">
              Join our beta program and be among the first to experience the future of digital memorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.scrollTo({ top: document.getElementById('demo')?.offsetTop || 0, behavior: 'smooth' })}
                className="px-8 py-3 bg-forest-600 hover:bg-forest-700 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                Try Demo
              </button>
              <button
                onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
                className="px-8 py-3 bg-white dark:bg-charcoal-800 hover:bg-charcoal-50 dark:hover:bg-charcoal-700 text-charcoal-900 dark:text-cream-50 rounded-lg font-medium transition-all hover:scale-105 shadow-lg border-2 border-charcoal-200 dark:border-charcoal-700"
              >
                Request Access
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
