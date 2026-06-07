// Achievements.jsx
import { motion } from 'framer-motion';
import { Award, Clock, Sparkles, Code2, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Achievements.css';

export default function Achievements() {
  const { language } = useLanguage();

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="achievements-header"
        >
          <span className="achievements-badge">
            <Clock size={16} />
            {language === 'ar' ? 'قريباً' : 'Coming Soon'}
          </span>
          <h2 className="achievements-title">
            {language === 'ar' ? 'إنجازاتي القادمة' : 'My Upcoming Achievements'}
          </h2>
          <p className="achievements-subtitle">
            {language === 'ar'
              ? 'أعمل حالياً على مشاريع مميزة وجوائز جديدة سيتم الإعلان عنها قريباً'
              : 'Currently working on exciting projects and new achievements that will be announced soon'}
          </p>
        </motion.div>

        {/* Single Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="coming-soon-card"
        >
          <div className="coming-soon-card-inner">
            <div className="coming-soon-icon">
              <Rocket size={48} />
            </div>
            <h3>
              {language === 'ar' ? 'قيد الإنجاز' : 'In Progress'}
            </h3>
            <p>
              {language === 'ar'
                ? 'أعمل حالياً على مشاريع مميزة وإنجازات جديدة. تابعوا هذه المساحة قريباً لمشاهدة أحدث إنجازاتي وشهاداتي الاحترافية.'
                : 'I am currently working on exciting projects and new achievements. Stay tuned to this space for my latest accomplishments and professional certifications.'}
            </p>
            <div className="coming-soon-tag">
              <Sparkles size={14} />
              <span>Coming Soon</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="achievements-stats"
        >
          <div className="achievement-stat">
            <span className="achievement-stat-number">590+</span>
            <span className="achievement-stat-label">Training Hours</span>
          </div>
          <div className="achievement-stat">
            <span className="achievement-stat-number">5+</span>
            <span className="achievement-stat-label">Projects Completed</span>
          </div>
          <div className="achievement-stat">
            <span className="achievement-stat-number">2</span>
            <span className="achievement-stat-label">Major APIs Built</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}