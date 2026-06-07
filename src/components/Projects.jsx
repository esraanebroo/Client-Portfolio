// Projects.jsx
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

export default function Projects() {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      titleEn: "Company Management System",
      titleAr: "نظام إدارة الشركات",
      descriptionEn: "A comprehensive corporate solution featuring secure authentication, full CRUD operations, and real-time search utilizing AJAX.",
      descriptionAr: "نظام متكامل لإدارة الشركات يتميز بمصادقة آمنة، وعمليات CRUD كاملة، وبحث متقدم في الوقت الفعلي باستخدام تقنيات AJAX.",
      tech: ["ASP.NET Core", "SQL Server", "C#", "AJAX"],
      github: "https://github.com/Gaber11",
      live: "",
      image: "MVC.png",
      period: "2024"
    },
    {
      id: 2,
      titleEn: "E-commerce API System",
      titleAr: "API للتجارة الإلكترونية",
      descriptionEn: "A robust RESTful API system for e-commerce featuring product, basket, and order management, secure payment integration, and Redis caching.",
      descriptionAr: "نظام API قوي ومتكامل للتجارة الإلكترونية يدير المنتجات، وسلة التسوق، والطلبات، مع تكامل بوابات الدفع والتخزين المؤقت عبر Redis.",
      tech: ["ASP.NET Core", "Entity Framework Core", "Redis", "C#"],
      github: "https://github.com/Gaber11",
      live: "",
      image: "ECommerce.png",
      period: "2024"
    },
    {
      id: 3,
      titleEn: "Warehouse Management System",
      titleAr: "نظام إدارة المستودعات",
      descriptionEn: "An inventory and stock tracking platform with role-based access control and an administrative dashboard.",
      descriptionAr: "منصة متكاملة لإدارة المخازن وتتبع حركة البضائع، تتميز بنظام تفويض قائم على الأدوار ولوحة تحكم إدارية.",
      tech: ["ASP.NET Core", "SQL Server", "RBAC", "Dashboard"],
      github: "https://github.com/Gaber11",
      live: "",
      image: "MVCProject.png",
      period: "2024"
    },
    {
      id: 4,
      titleEn: "Secure Auth API",
      titleAr: "API المصادقة الآمنة",
      descriptionEn: "A specialized security service providing JWT authentication, role-based authorization, and fully documented endpoints using Swagger.",
      descriptionAr: "خدمة مصادقة وحماية متخصصة تقدم مصادقة JWT، وتفويض الوصول بحسب الصلاحيات، مع توثيق كامل للـ APIs عبر Swagger.",
      tech: ["ASP.NET Core", "JWT Auth", "Swagger", "Web API"],
      github: "https://github.com/Gaber11",
      live: "",
      image: "",
      period: "2024"
    },
    {
      id: 5,
      titleEn: "Dentist Clinic Website",
      titleAr: "موقع عيادة الأسنان",
      descriptionEn: "An interactive dentist clinic portal featuring appointment booking, an AI chat assistant, QR support, and a responsive Arabic UI/UX.",
      descriptionAr: "موقع تفاعلي لعيادة أسنان يتميز بحجز المواعيد، ومساعد ذكي مدعوم بالذكاء الاصطناعي، ودعم رموز QR، وواجهة مستخدم عربية متجاوبة.",
      tech: ["HTML5", "CSS3", "JavaScript", "AI Chatbot"],
      github: "https://github.com/Gaber11",
      live: "",
      image: "",
      period: "2023"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <span className="projects-badge">
            <Code2 size={16} />
            {language === 'ar' ? 'المشاريع' : 'Portfolio'}
          </span>
          <h2 className="projects-title">
            {language === 'ar' ? 'مشاريعي' : 'My Projects'}
          </h2>
          <p className="projects-subtitle">
            {language === 'ar'
              ? 'بعض المشاريع التي قمت بتطويرها'
              : 'Some of the projects I have developed'}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="project-card"
            >

              {/* Image area */}
              <div className="project-image-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={language === 'ar' ? project.titleAr : project.titleEn}
                    className="project-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-placeholder">
                    <Code2 size={52} />
                  </div>
                )}

                {/* Period badge */}
                <div className="project-period-badge">
                  <Calendar size={10} />
                  <span>{project.period}</span>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">
                  {language === 'ar' ? project.titleAr : project.titleEn}
                </h3>

                <p className="project-description">
                  {language === 'ar' ? project.descriptionAr : project.descriptionEn}
                </p>

                {/* Tech stack */}
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn--github"
                    aria-label="View on GitHub"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn--live"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={16} />
                      <span>{language === 'ar' ? 'عرض مباشر' : 'Live Demo'}</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}