import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Linkedin, Github, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const TEXTS_EN = ['Full Stack Developer', '.NET Developer', 'ASP.NET Core Developer'];
const TEXTS_AR = ['مطور Full Stack', 'مطور دوت نت (.NET)', 'مطور ASP.NET Core'];

export default function Hero() {
  const { language } = useLanguage();

  // ✅ FIX: useRef بدل useState للـ typing state — يتجنب stale closure و race condition
  const displayRef = useRef('');
  const isDeletingRef = useRef(false);
  const loopNumRef = useRef(0);
  const tickerRef = useRef(null);
  const [displayText, setDisplayText] = useState('');

  const TEXTS = language === 'ar' ? TEXTS_AR : TEXTS_EN;

  useEffect(() => {
    const tick = () => {
      const i = loopNumRef.current % TEXTS.length;
      const fullText = TEXTS[i];
      const isDeleting = isDeletingRef.current;
      const current = displayRef.current;

      const next = isDeleting
        ? fullText.substring(0, current.length - 1)
        : fullText.substring(0, current.length + 1);

      displayRef.current = next;
      setDisplayText(next);

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && next === fullText) {
        isDeletingRef.current = true;
        speed = 2000;
      } else if (isDeleting && next === '') {
        isDeletingRef.current = false;
        loopNumRef.current++;
        speed = 300;
      }

      tickerRef.current = setTimeout(tick, speed);
    };

    // reset on language change
    displayRef.current = '';
    isDeletingRef.current = false;
    setDisplayText('');
    clearTimeout(tickerRef.current);
    tickerRef.current = setTimeout(tick, 300);

    return () => clearTimeout(tickerRef.current);
  }, [TEXTS]); // ✅ FIX: dependency صح — بس TEXTS

  return (
    // ✅ FIX: dir="rtl" لما اللغة عربي
    <section id="home" className="hero-section" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="hero-bg">
        <div className="hero-grid-pattern"></div>
        <div className="hero-glow-orb hero-glow-orb-1"></div>
        <div className="hero-glow-orb hero-glow-orb-2"></div>
      </div>

      <div className="section-container hero-container">
        <div className="hero-content">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="hero-code-badge"
          >
            <span className="hero-badge-dot"></span>
            <Sparkles size={14} />
            <span>&lt; fullstack .net developer /&gt;</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="hero-greeting"
          >
            {language === 'ar' ? 'مرحباً، أنا' : "Hi, I'm"}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="hero-name-wrapper"
          >
            <h2 className="hero-name">Gaber</h2>
            <h2 className="hero-name hero-name-gradient">Ezzat</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hero-typed-wrapper"
          >
            <div className="hero-typed-prefix">
              <span>=&gt;</span>
            </div>
            <div className="hero-typed-text">
              {displayText}
              {/* ✅ FIX: cursor height بـ em بدل rem عشان يتناسب مع font-size */}
              <span className="hero-cursor"></span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="hero-description"
          >
            {language === 'ar'
              ? 'مطور Full Stack .NET متخصص في بناء تطبيقات ويب قوية وقابلة للتطوير باستخدام ASP.NET Core و Entity Framework مع كود نظيف وتصميم معماري حديث.'
              : 'Full Stack .NET Developer specialized in building scalable, high-performance web applications with ASP.NET Core, Entity Framework Core, clean code, and modern architectures.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="hero-buttons"
          >
            <a href="https://drive.google.com/file/d/1Z3ipmm4FaOsBAbu83B9ENsLW9QMZefBQ/view?usp=sharing" className="hero-btn hero-btn-primary" target="_blank" >
              <span>{language === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}</span>
              <Download size={18} />
            </a>
            <a href="#projects" className="hero-btn hero-btn-secondary">
              <span>{language === 'ar' ? 'مشاريعي' : 'My Work'}</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="hero-social"
          >
            <a
              href="https://linkedin.com/in/gaberezzat11"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Gaber11"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="hero-visual"
        >
          <div className="hero-image-frame">
            <div className="hero-image-glow"></div>
            <div className="hero-image-inner">
              <img src="profile_gaber.png" alt="Gaber Ezzat" className="hero-image" />
            </div>

            <motion.div
              className="hero-tech-tag hero-tech-tag-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>ASP.NET Core</span>
            </motion.div>
            <motion.div
              className="hero-tech-tag hero-tech-tag-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
            >
              <span>React.js</span>
            </motion.div>
            <motion.div
              className="hero-tech-tag hero-tech-tag-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
            >
              <span>SQL Server</span>
            </motion.div>
            <motion.div
              className="hero-tech-tag hero-tech-tag-4"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <span>Angular</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}