import { Video, UserCircle, ArrowRight, Sparkles, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../common/Section';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { scrollToSection } from '../../lib/utils';

const products = [
  {
    icon: Video,
    title: 'Memorial Video Generator',
    description:
      'Create beautiful, AI-powered memorial videos that honor your loved ones. Combine cherished photos, meaningful music, and heartfelt messages into a lasting tribute.',
    features: [
      'AI-powered video compilation',
      'Custom music and voiceovers',
      'Professional transitions and effects',
      'Easy sharing with family and friends',
    ],
    color: 'forest',
    action: 'demo',
  },
  {
    icon: UserCircle,
    title: 'Digital Avatars',
    description:
      'Preserve memories and personalities with lifelike digital avatars. Advanced AI technology brings voices and mannerisms to life, creating interactive experiences.',
    features: [
      'Voice cloning technology',
      'Realistic facial animations',
      'Interactive conversations',
      'Secure cloud storage',
    ],
    color: 'amber',
    action: 'contact',
  },
];

export function Products() {
  return (
    <Section id="products" className="bg-cream-100 dark:bg-charcoal-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-forest-100 dark:bg-forest-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-forest-600 dark:text-forest-400" />
            <span className="text-sm font-medium text-forest-700 dark:text-forest-300">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-6">
            Preserve What Matters Most
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-cream-300 max-w-3xl mx-auto">
            Cutting-edge AI technology designed with compassion and care,
            helping families celebrate and remember their loved ones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col p-8">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${
                    product.color === 'forest'
                      ? 'from-forest-500 to-forest-700'
                      : 'from-amber-500 to-amber-700'
                  } mb-6 w-fit`}
                >
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal-950 dark:text-cream-100 mb-4">
                  {product.title}
                </h3>

                <p className="text-charcoal-600 dark:text-cream-300 mb-6 text-lg">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-charcoal-700 dark:text-cream-200"
                    >
                      <Heart
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          product.color === 'forest'
                            ? 'text-forest-600 dark:text-forest-400'
                            : 'text-amber-600 dark:text-amber-400'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={product.color === 'forest' ? 'primary' : 'secondary'}
                  className="w-full group"
                  onClick={() => scrollToSection(product.action)}
                >
                  {product.action === 'demo' ? 'Try Demo' : 'Learn More'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/30 px-6 py-3 rounded-full">
            <Clock className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <p className="text-charcoal-700 dark:text-cream-200">
              <span className="font-semibold">Limited Beta Access:</span> Be among the first to experience our technology
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
