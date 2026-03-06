import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Shield, Eye, Heart, FileText, Lock, UserCheck, Globe, Award } from 'lucide-react';

export function Trust() {
  const principles = [
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Every feature is built with your needs at the forefront, ensuring an intuitive, meaningful experience."
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "Your data is protected at every level through encryption, secure storage, and strict access controls."
    },
    {
      icon: Shield,
      title: "Ethical AI",
      description: "Our AI models are trained responsibly, with transparency and respect for dignity in every decision."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We openly share how your data is used, stored, and protected—no hidden practices."
    }
  ];

  const dataProtection = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All uploads and storage are encrypted using AES-256 bit encryption"
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "Data centers with SOC 2 Type II compliance and 24/7 monitoring"
    },
    {
      icon: Globe,
      title: "GDPR & CCPA Compliant",
      description: "Full compliance with international data protection regulations"
    },
    {
      icon: Award,
      title: "Regular Audits",
      description: "Independent third-party security audits conducted quarterly"
    }
  ];

  const rights = [
    {
      icon: Eye,
      title: "Right to Access",
      description: "View all data we hold about you at any time"
    },
    {
      icon: FileText,
      title: "Right to Portability",
      description: "Download your data in standard formats"
    },
    {
      icon: UserCheck,
      title: "Right to Control",
      description: "Manage permissions and sharing settings"
    },
    {
      icon: Lock,
      title: "Right to Deletion",
      description: "Permanently delete your account and all associated data"
    },
    {
      icon: Shield,
      title: "Right to Object",
      description: "Opt out of specific data processing activities"
    },
    {
      icon: Heart,
      title: "Right to Dignity",
      description: "Your memories are treated with the utmost respect"
    }
  ];

  return (
    <>
      <Section className="pt-32 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 text-primary dark:text-cream">
              Trust & Ethics
            </h1>
            <p className="text-xl text-charcoal-600 dark:text-cream-300 leading-relaxed">
              Your trust is sacred. We've built Maple Oak Digital on a foundation of transparency,
              security, and respect for your most precious memories.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream">
              Foundational Principles
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 max-w-2xl mx-auto">
              These core values guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="glass-card-light dark:glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <principle.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold font-display mb-3 text-primary dark:text-cream">
                  {principle.title}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-primary/5 dark:bg-primary/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream">
              Data Protection & Security
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 max-w-2xl mx-auto">
              Industry-leading security measures protect your memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dataProtection.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-charcoal-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-bold font-display mb-2 text-primary dark:text-cream">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-600 dark:text-cream-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-charcoal-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-display mb-4 text-primary dark:text-cream">
              How We Protect Your Data
            </h3>
            <ul className="space-y-3 text-charcoal-600 dark:text-cream-300">
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Zero-knowledge architecture: we cannot access your unencrypted data</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Multi-factor authentication available on all accounts</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>Regular penetration testing and vulnerability assessments</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                <span>24/7 security monitoring and incident response team</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display mb-4 text-primary dark:text-cream">
              Your Rights & Ownership
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 max-w-2xl mx-auto">
              You maintain complete control and ownership of your content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rights.map((right) => (
              <div
                key={right.title}
                className="bg-white dark:bg-charcoal-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-accent/20"
              >
                <right.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-bold font-display mb-2 text-primary dark:text-cream">
                  {right.title}
                </h3>
                <p className="text-sm text-charcoal-600 dark:text-cream-300">
                  {right.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 dark:bg-accent/5 rounded-2xl p-8 max-w-4xl mx-auto border border-accent/30">
            <h3 className="text-2xl font-bold font-display mb-4 text-primary dark:text-cream">
              100% Content Ownership
            </h3>
            <p className="text-charcoal-600 dark:text-cream-300 mb-4 leading-relaxed">
              You retain full ownership of all photos, videos, and content you upload. We never claim
              rights to your memories, never sell your data to third parties, and never use your content
              for AI training without explicit permission.
            </p>
            <p className="text-charcoal-600 dark:text-cream-300 leading-relaxed">
              When you delete content or close your account, it's permanently removed from our systems
              within 30 days, including all backups.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-primary/5 dark:bg-primary/10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-display mb-6 text-primary dark:text-cream">
              Still Have Questions?
            </h2>
            <p className="text-lg text-charcoal-600 dark:text-cream-300 mb-8">
              Our team is here to address any privacy or security concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white dark:bg-charcoal-900 hover:bg-cream-100 dark:hover:bg-charcoal-800 text-primary dark:text-cream rounded-lg font-semibold transition-colors duration-300 border border-primary/20"
              >
                Read Full Privacy Policy
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
