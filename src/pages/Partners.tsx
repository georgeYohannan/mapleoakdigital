import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Handshake, Users, Zap, TrendingUp, Code, Headphones as HeadphonesIcon, Building2, Globe } from 'lucide-react';

export function Partners() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Sharing",
      description: "Competitive revenue share model that grows with your success"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Priority technical support and account management"
    },
    {
      icon: Zap,
      title: "Fast Integration",
      description: "Simple API integration with comprehensive documentation"
    },
    {
      icon: Code,
      title: "White Label Options",
      description: "Customize the experience to match your brand"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to international markets and multi-language support"
    },
    {
      icon: Building2,
      title: "Co-Marketing",
      description: "Joint marketing initiatives and promotional opportunities"
    }
  ];

  const models = [
    {
      title: "Funeral Homes & Directors",
      description: "Enhance your memorial services with AI-powered video tributes. Offer families a meaningful way to celebrate their loved ones.",
      features: [
        "Seamless integration with existing workflows",
        "Custom branding options",
        "Volume pricing discounts",
        "Priority processing for urgent requests"
      ]
    },
    {
      title: "Healthcare & Senior Living",
      description: "Provide residents and patients with tools to preserve their life stories and connect with families through digital avatars.",
      features: [
        "HIPAA-compliant data handling",
        "Staff training and onboarding",
        "Facility-wide licensing options",
        "Integration with care coordination systems"
      ]
    },
    {
      title: "Technology Partners",
      description: "Integrate our AI capabilities into your platform. Power your application with our memorial video and digital avatar technology.",
      features: [
        "RESTful API with comprehensive docs",
        "SDK for major platforms",
        "Scalable infrastructure",
        "Technical partnership team"
      ]
    }
  ];

  return (
    <>
      <Section className="pt-32 pb-16 hero-gradient dark:hero-gradient-dark">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 text-primary dark:text-cream-100">
              For Partners
            </h1>
            <p className="text-xl text-charcoal-600 dark:text-cream-100-300 leading-relaxed">
              Join us in transforming how families preserve and celebrate cherished memories.
              Together, we can bring innovation with heart to more communities.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream-100">
              Partnership Models
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-100-300 max-w-2xl mx-auto">
              Flexible partnership options designed for your business
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {models.map((model, index) => (
              <div
                key={model.title}
                className="glass-card-light dark:glass-card p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-display mb-3 text-primary dark:text-cream-100">
                      {model.title}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-100-300 mb-6 leading-relaxed">
                      {model.description}
                    </p>
                    <ul className="space-y-2">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Zap className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-charcoal-600 dark:text-cream-100-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-primary/5 dark:bg-primary/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream-100">
              Benefits for Partners
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-100-300 max-w-2xl mx-auto">
              Everything you need to succeed with Maple Oak Digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white dark:bg-charcoal-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <benefit.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold font-display mb-2 text-primary dark:text-cream-100">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-100-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream-100">
                Integration & Support
              </h2>
              <p className="text-lg text-charcoal-600 dark:text-cream-100-300">
                Simple implementation with ongoing support
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-charcoal-900 p-8 rounded-xl shadow-lg">
                <Code className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold font-display mb-3 text-primary dark:text-cream-100">
                  Developer Friendly
                </h3>
                <p className="text-charcoal-600 dark:text-cream-100-300 mb-4">
                  RESTful API with SDKs for major platforms. Comprehensive documentation,
                  code samples, and sandbox environment for testing.
                </p>
                <ul className="space-y-2 text-sm text-charcoal-600 dark:text-cream-100-300">
                  <li>• OpenAPI/Swagger documentation</li>
                  <li>• Webhooks for real-time updates</li>
                  <li>• Rate limiting and monitoring</li>
                  <li>• Test environment with sample data</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-charcoal-900 p-8 rounded-xl shadow-lg">
                <HeadphonesIcon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold font-display mb-3 text-primary dark:text-cream-100">
                  Dedicated Support
                </h3>
                <p className="text-charcoal-600 dark:text-cream-100-300 mb-4">
                  Your success is our priority. Every partner gets access to dedicated
                  technical support and account management.
                </p>
                <ul className="space-y-2 text-sm text-charcoal-600 dark:text-cream-100-300">
                  <li>• 24/7 technical support via email</li>
                  <li>• Dedicated Slack channel</li>
                  <li>• Quarterly business reviews</li>
                  <li>• Training and onboarding assistance</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 dark:bg-accent/5 rounded-2xl p-8 border border-accent/30">
              <h3 className="text-2xl font-bold font-display mb-4 text-primary dark:text-cream-100 text-center">
                Ready to Partner With Us?
              </h3>
              <p className="text-charcoal-600 dark:text-cream-100-300 mb-6 text-center max-w-2xl mx-auto">
                Let's discuss how Maple Oak Digital can enhance your services and create
                value for your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  Schedule a Call
                </a>
                <a
                  href="#"
                  className="px-8 py-4 bg-white dark:bg-charcoal-900 hover:bg-cream-100 dark:hover:bg-charcoal-800 text-primary dark:text-cream-100 rounded-lg font-semibold transition-colors duration-300 border border-primary/20 text-center"
                >
                  View API Documentation
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-primary/5 dark:bg-primary/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Handshake className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-display mb-4 text-primary dark:text-cream-100">
              Join Our Growing Partner Network
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-100-300 mb-8">
              Trusted by funeral homes, senior living facilities, and technology platforms
              across North America and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-charcoal-600 dark:text-cream-100-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50k+</div>
                <div className="text-sm">Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm">Partner Satisfaction</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
