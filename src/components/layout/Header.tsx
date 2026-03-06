import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DarkModeToggle } from '../ui/DarkModeToggle';
import { Button } from '../common/Button';
import { scrollToSection } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '/', isSection: false },
  { name: 'Products', href: 'products', isSection: true },
  { name: 'Trust', href: '/trust', isSection: false },
  { name: 'About', href: '/about', isSection: false },
  { name: 'Contact', href: '/contact', isSection: false },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.isSection) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(link.href), 100);
      } else {
        scrollToSection(link.href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOverHero = location.pathname === '/' && !isScrolled;
  const navLinkClass = isOverHero
    ? 'text-hero-muted hover:text-cream-200 transition-colors font-medium'
    : 'text-charcoal-700 dark:text-cream-200 hover:text-primary dark:hover:text-accent transition-colors font-medium';

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
          <Link to="/" className="flex items-center">
            <img
              src={isOverHero || theme === 'dark' ? '/maple_oak_digital_darkmode_.png' : '/mapleoakdigitallogo.png'}
              alt="Maple Oak Digital"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.name === 'Home' ? (
                <button
                  key={link.name}
                  onClick={handleHomeClick}
                  className={navLinkClass}
                >
                  {link.name}
                </button>
              ) : link.isSection ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={navLinkClass}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={navLinkClass}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            <div className="hidden md:block">
              <Button
                size="sm"
                onClick={() => navigate('/contact')}
                className={isOverHero ? '!bg-hero-button-green !text-cream-100 hover:!bg-forest-700 !border-0' : ''}
              >
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isOverHero ? 'text-hero-muted hover:bg-white/10' : 'hover:bg-charcoal-100 dark:hover:bg-charcoal-800'}`}
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
              {navLinks.map((link) =>
                link.name === 'Home' ? (
                  <button
                    key={link.name}
                    onClick={handleHomeClick}
                    className="block w-full text-left px-4 py-3 rounded-lg text-charcoal-700 dark:text-cream-200 hover:bg-forest-50 dark:hover:bg-charcoal-800 transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                ) : link.isSection ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-charcoal-700 dark:text-cream-200 hover:bg-forest-50 dark:hover:bg-charcoal-800 transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-charcoal-700 dark:text-cream-200 hover:bg-forest-50 dark:hover:bg-charcoal-800 transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button
                className="w-full"
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
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
