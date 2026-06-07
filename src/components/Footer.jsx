// components/Footer.jsx
import { motion } from 'framer-motion';
import { Linkedin, Github, Code2, ArrowUp, Send, Briefcase, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content - Two Columns Layout */}
        <div className="footer-main">
          {/* Left Column - Let's Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-left"
          >
            <h2 className="footer-cta-title">
              {language === 'ar' ? 'لنعمل معاً!' : "LET'S WORK TOGETHER!"}
            </h2>
            <p className="footer-cta-text">
              {language === 'ar'
                ? 'لا تتردد في التواصل معي. أنا دائماً منفتحة لمناقشة مشاريع جديدة، أفكار إبداعية، أو فرص لأكون جزءاً من رؤيتك.'
                : 'Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.'}
            </p>
            {/* <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="footer-cta-btn"
            >
              {language === 'ar' ? 'تواصل معي' : 'Get In Touch'}
              <Send size={16} />
            </button> */}
          </motion.div>

          {/* Right Column - Who I Am + Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="footer-right"
          >
            <div className="footer-about">
              <h3 className="footer-section-title">
                {language === 'ar' ? 'من أنا؟' : 'WHO I AM?'}
              </h3>
              <p className="footer-about-text">
                {language === 'ar'
                  ? 'أنا مطور Full Stack متخصص في منظومة عمل .NET، شغوف ومخلص لعملي. لقد اكتسبت المهارات والمعرفة اللازمة لتصميم وتطوير تجارب ويب سهلة الاستخدام، وعالية الأداء وقابلة للتوسع لتضمن نجاح مشروعك.'
                  : "I'm a Full-Stack Developer specialized in the .NET ecosystem, passionate and dedicated to my work. I have acquired the skills and knowledge necessary to design and develop user-friendly, high-performance, and scalable digital web solutions."}
              </p>
            </div>

            {/* Social & Platform Links */}
            <div className="footer-social">
              
              <a href="https://linkedin.com/in/gaberezzat11" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Gaber11" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Github size={18} />
                <span>GitHub</span>
              </a>
               <a href="mailto:gaberezzat.1001@gmail.com" className="footer-social-link">
                <Send size={18} />
                <span>Email</span>
              </a>
            </div>
           
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            {currentYear}. © Gaber Ezzat. Portfolio
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="footer-scroll-top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} />
            <span>{language === 'ar' ? 'أعلى' : 'Top'}</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}