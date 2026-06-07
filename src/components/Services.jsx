import { motion } from 'framer-motion';
import { Database, Code2, Globe, Monitor, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const services = [
  {
    icon: <Database size={32} />,
    titleEn: 'Database Design',
    titleAr: 'تصميم قواعد البيانات',
    descEn: 'Efficient schemas optimized for performance and scalability.',
    descAr: 'مخططات فعالة محسّنة للأداء وقابلية التوسع.',
    tags: ['SQL Server', 'Entity Framework', 'T-SQL', 'LINQ'],
  },
  {
    icon: <Code2 size={32} />,
    titleEn: 'API Development',
    titleAr: 'تطوير الـ API',
    descEn: 'Secure and documented RESTful APIs for web & mobile apps.',
    descAr: 'واجهات برمجية آمنة وموثقة لتطبيقات الويب والجوال.',
    tags: ['.NET Core', 'Swagger', 'JWT Auth', 'Postman'],
  },
  {
    icon: <Globe size={32} />,
    titleEn: 'Web Applications',
    titleAr: 'تطبيقات الويب',
    descEn: 'Building full-featured web applications using the .NET ecosystem.',
    descAr: 'بناء تطبيقات ويب متكاملة باستخدام منظومة .NET.',
    tags: ['ASP.NET MVC', 'Razor Pages', 'Redis', 'Stripe'],
  },

];

export default function Services() {
  const { language } = useLanguage();

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-title">
            {language === 'ar' ? 'الخدمات' : 'Services'}
          </h2>
          <div className="services-divider" />
        </motion.div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="service-icon-box">{svc.icon}</div>
              <h3 className="service-name">
                {language === 'ar' ? svc.titleAr : svc.titleEn}
              </h3>
              <p className="service-desc">
                {language === 'ar' ? svc.descAr : svc.descEn}
              </p>
              <div className="service-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    <Tag size={11} />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Pricing */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="services-cta-label">
            {language === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to start your project?'}
          </p>
          <a href="/Pricing.html" className="services-pricing-btn">
            <span>💎</span>
            {language === 'ar' ? 'عرض خطط الأسعار' : 'View Pricing Plans'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
