import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react'; // ✅ FIX: أضفنا Sparkles
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'Home',         href: '#home',         ar: 'الرئيسية'    },
  { name: 'About',        href: '#about',        ar: 'عني'          },
  { name: 'Education',    href: '#education',    ar: 'التعليم'      },
  { name: 'Skills',       href: '#skills',       ar: 'المهارات'     },
  { name: 'Experience',   href: '#experience',   ar: 'الخبرة'       },
  { name: 'Services',     href: '#services',     ar: 'الخدمات'      },
  { name: 'Projects',     href: '#projects',     ar: 'المشاريع'     },
  { name: 'Achievements', href: '#achievements', ar: 'الإنجازات'    },
  { name: 'Testimonials', href: '#testimonials', ar: 'آراء العملاء' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('#home');
  const { theme, toggleTheme }       = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ إغلاق الـ mobile menu لو الشاشة كبرت
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (href) => {
    setActive(href);
    setIsOpen(false);
  };

  return (
    // ✅ FIX: dir للـ RTL support
    <header
      className={`nav-header ${scrolled ? 'scrolled' : ''}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <nav className="nav-container">

        {/* ── Logo ── */}
        <a href="#home" className="nav-logo" onClick={() => handleLinkClick('#home')}>
          <span className="nav-logo-icon">
            <Sparkles size={15} />
          </span>
          <span className="nav-logo-text">GABER</span>
        </a>

        {/* ── Desktop Links ── */}
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${active === link.href ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.href)}
            >
              {language === 'ar' ? link.ar : link.name}
            </a>
          ))}
        </div>

        {/* ── Controls ── */}
        <div className="nav-controls">
          {/* Theme toggle */}
          <button
            className="nav-icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Language toggle */}
          <button
            className="nav-icon-btn"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <span className="nav-lang-text">
              {language === 'ar' ? 'EN' : 'AR'}
            </span>
          </button>

          {/* Contact — desktop only */}
          <a href="#contact" className="nav-contact-btn">
            {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="nav-mobile-menu"
          >
            <div className="nav-mobile-links">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-mobile-link ${active === link.href ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {language === 'ar' ? link.ar : link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="nav-mobile-contact"
              onClick={() => setIsOpen(false)}
            >
              {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}