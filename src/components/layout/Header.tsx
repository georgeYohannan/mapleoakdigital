import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DarkModeToggle } from '../ui/DarkModeToggle';
import { Button } from '../common/Button';
import { scrollToSection } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'Products', href: 'products' },
  { name: 'Demo', href: 'demo' },
  { name: 'How It Works', href: 'how-it-works' },
  { name: 'Contact', href: 'contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-charcoal-950/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={theme === 'dark' ? '/maple_oak_digital_darkmode_.png' : '/untitled_design.png'}
              alt="MapleOakDigital"
              className="h-16 w-auto transition-opacity duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-charcoal-700 dark:text-cream-200 hover:text-forest-600 dark:hover:text-forest-400 transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            <div className="hidden md:block">
              <Button size="sm" onClick={() => scrollToSection('contact')}>
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-charcoal-950 border-t border-charcoal-200 dark:border-charcoal-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-charcoal-700 dark:text-cream-200 hover:bg-forest-50 dark:hover:bg-charcoal-800 transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Button
                className="w-full"
                onClick={() => {
                  handleNavClick('contact');
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
