import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { language } = useLanguage();

  const content = {
    title: language === 'ar' ? 'عني' : 'About Me',
    heading: language === 'ar' ? 'شغف بالحلول البرمجية القوية وقابلية التوسع' : 'Driven by Robust Code & Scalable Solutions',
    desc: language === 'ar' 
      ? 'أنا <strong>جابر عزت</strong>، مطور ويب Full Stack .NET شغوف ببناء تطبيقات عالية الأداء وقابلة للصيانة. متخصص في <strong>ASP.NET Core</strong> و <strong>Entity Framework Core</strong>، مع خبرة عملية في تصميم <strong>RESTful APIs</strong> و <strong>Clean Architecture</strong> بالإضافة إلى بناء واجهات أمامية تفاعلية باستخدام <strong>React</strong> و <strong>Angular</strong>.'
      : 'I am <strong>Gaber Ezzat</strong>, a passionate Full Stack .NET Developer dedicated to crafting clean, scalable, and high-performance web applications. I specialize in <strong>ASP.NET Core</strong> and <strong>Entity Framework Core</strong>, designing robust <strong>RESTful APIs</strong> and structuring systems with <strong>Clean Architecture</strong>, alongside building dynamic frontends with <strong>React</strong> and <strong>Angular</strong>.',
    desc2: language === 'ar'
      ? 'تتضمن خبرتي بناء أنظمة خادم متكاملة، وإدارة قواعد بيانات SQL Server، وتحسين الأداء باستخدام Redis، وتطبيق مبادئ SOLID لضمان سهولة صيانة وتطوير الأنظمة.'
      : 'My expertise covers backend systems architecture, SQL Server database design, Redis caching optimizations, and applying SOLID design principles to ensure modular, long-term maintainability.',
    projects: language === 'ar' ? 'المشاريع: 5+' : 'Projects: 5+',
    location: language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt',
    availability: language === 'ar' ? 'متاح للعمل' : 'Open to Work',
    projectGrade: language === 'ar' ? 'درجة التخرج' : 'Graduation Project',
    techStack: language === 'ar' 
      ? '<strong>التقنيات:</strong> ASP.NET Core، Entity Framework Core، C#، SQL Server، Redis، React، Angular، Clean Architecture'
      : '<strong>Tech stack:</strong> ASP.NET Core, Entity Framework Core, C#, SQL Server, Redis, React, Angular, Clean Architecture'
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          
          <h2 className="about-title-main">{content.title}</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left Side: Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-image-wrapper"
          >
            <div className="about-icon-container hover-glow">
              <div className="about-icon-glow"></div>
              <div className="about-icon-inner">
                <Code2 size={80} className="about-icon-code" />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-content"
          >
            <h3 className="about-heading">{content.heading}</h3>
            
            <p className="about-text" dangerouslySetInnerHTML={{ __html: content.desc }} />
            
            <p className="about-text">{content.desc2}</p>

          
            {/* Stats Row */}
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">97/100</span>
                <span className="stat-label">{content.projectGrade}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">{language === 'ar' ? 'مشاريع عملية' : 'Practical Projects'}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">{language === 'ar' ? 'دقة وتفاني' : 'Commitment'}</span>
              </div>
            </div>

            <div className="divider-light"></div>
            
            <p className="about-text" style={{ fontSize: '0.9rem', marginTop: '0' }} dangerouslySetInnerHTML={{ __html: content.techStack }} />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}