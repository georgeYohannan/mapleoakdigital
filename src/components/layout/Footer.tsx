import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

const footerLinks = {
  products: [
    { name: 'Memorial Video Generator', href: 'demo', isSection: true },
    { name: 'Digital Avatars', href: 'products', isSection: true },
  ],
  company: [
    { name: 'About Us', href: '/about', isSection: false },
    { name: 'Trust & Ethics', href: '/trust', isSection: false },
    { name: 'For Partners', href: '/partners', isSection: false },
    { name: 'Contact', href: '/contact', isSection: false },
  ],
  support: [
    { name: 'FAQ', href: '#', isSection: false },
    { name: 'Help Center', href: '#', isSection: false },
    { name: 'Privacy Policy', href: '#', isSection: false },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (link: { href: string; isSection: boolean }) => {
    if (link.href.startsWith('#')) {
      return;
    }
    if (link.isSection) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(link.href), 100);
      } else {
        scrollToSection(link.href);
      }
    } else {
      navigate(link.href);
    }
  };

  return (
    <footer className="bg-charcoal-900 dark:bg-charcoal-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src={theme === 'dark' ? '/maple_oak_digital_darkmode_.png' : '/mapleoakdigitallogo.png'}
                alt="Maple Oak Digital"
                className="h-12 w-auto transition-opacity duration-300"
              />
            </Link>
            <p className="text-cream-300 mb-6 max-w-md">
              Transforming cherished memories into timeless tributes with the power of AI.
              Innovation with Heart.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@mapleoakdigital.com"
                className="flex items-center gap-2 text-cream-300 hover:text-forest-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@mapleoakdigital.com</span>
              </a>
              <a
                href="tel:+1-555-0123"
                className="flex items-center gap-2 text-cream-300 hover:text-forest-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (555) 012-3456</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-cream-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-cream-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-gold fill-rose-gold" />
              <span>by MapleOakDigital</span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-charcoal-800 hover:bg-forest-600 text-cream-300 hover:text-white transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-cream-400 text-sm">
              &copy; {currentYear} MapleOakDigital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
