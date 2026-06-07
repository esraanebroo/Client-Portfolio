// Testimonials.jsx - Single Card with Dark/Light Mode Support
import { motion } from 'framer-motion';
import { Star, Quote, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Testimonials.css';

export default function Testimonials() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const testimonial = {
    name: "Menna Omar",
    roleEn: "Software Engineer",
    roleAr: "مهندسة برمجيات",
    textEn: "Gaber is an exceptional Full Stack Developer. His technical skills in ASP.NET Core and React are outstanding, and he delivers high-quality work with great attention to detail. I highly recommend working with him!",
    textAr: "جابر مطور Full Stack استثنائي. مهاراته التقنية في ASP.NET Core و React مذهلة، ويقدم عملاً عالي الجودة مع اهتمام كبير بالتفاصيل. أوصي بشدة بالعمل معه!",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/mennaomar/"
  };

  return (
    <section id="testimonials" className={`testimonials-section ${theme}`}>
      {/* Animated Background */}
      <div className="testimonials-bg">
        <div className="testimonials-bg-orb testimonials-bg-orb-1"></div>
        <div className="testimonials-bg-orb testimonials-bg-orb-2"></div>
        <div className="testimonials-grid-pattern"></div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <div className="testimonials-badge-wrapper">
            <span className="testimonials-badge">
              <Star size={16} fill="currentColor" />
              {language === 'ar' ? 'آراء العملاء' : 'Testimonials'}
            </span>
          </div>
          <h2 className="testimonials-title">
            <span className="title-light">{language === 'ar' ? 'ماذا يقولون' : 'What People'}</span>
            <span className="title-bold"> {language === 'ar' ? 'عني' : 'Say'}</span>
          </h2>
          <p className="testimonials-subtitle">
            {language === 'ar'
              ? 'ثقة وتوصيات من عملائي السابقين'
              : 'Trust and recommendations from my previous clients'}
          </p>
        </motion.div>

        {/* Single Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="testimonial-single-card"
        >
          <div className="testimonial-card-glow"></div>
          
          <div className="testimonial-card-inner">
            {/* Quote Icon */}
            <div className="testimonial-quote-icon">
              <Quote size={40} />
            </div>
            
            {/* Rating Stars */}
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
              <span className="rating-number">5.0</span>
            </div>
            
            {/* Testimonial Text */}
            <p className="testimonial-text">
              "{language === 'ar' ? testimonial.textAr : testimonial.textEn}"
            </p>
            
            {/* Author Info - الاسم والمسمى */}
            <div className="testimonial-author">
              <div className="testimonial-author-avatar">
                <div className="avatar-initials">MO</div>
              </div>
              <div className="testimonial-author-info">
                <h4>{testimonial.name}</h4>
                <span>{language === 'ar' ? testimonial.roleAr : testimonial.roleEn}</span>
              </div>
            </div>

            {/* LinkedIn Button - تحت الاسم */}
            <a 
              href={testimonial.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="testimonial-linkedin-btn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="testimonials-rating-summary"
        >
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <p className="rating-text">100% Client Satisfaction</p>
          <p className="rating-subtext">
            {language === 'ar'
              ? 'بناءً على آراء وتوصيات العملاء'
              : 'Based on client reviews and recommendations'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}