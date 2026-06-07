// Experience.jsx - Ultra Professional Version
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Code2, Server, Database, Award, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

export default function Experience() {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  const experiences = [
    {
      titleEn: "Backend (.NET Core) Development Trainee",
      titleAr: "متدرب تطوير Backend (.NET Core)",
      company: "Route IT Training Center",
      location: "Cairo, Egypt",
      period: "2024",
      icon: <Server size={24} />,
      gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
      achievementsEn: [
        "Completed intensive Backend development diploma specializing in C# and the .NET Core ecosystem.",
        "Built dynamic RESTful APIs and secure services utilizing JWT authentication.",
        "Integrated SQL Server databases, applied EF Core, and performed schema optimizations.",
        "Implemented clean software architectures and separation of concerns principles.",
        "Practiced Git workflow for code version control and team collaboration."
      ],
      achievementsAr: [
        "إتمام دبلومة تطوير Backend مكثفة متخصصة في لغة C# ومنظومة عمل .NET Core.",
        "بناء واجهات برمجية RESTful APIs ديناميكية وتطوير خدمات آمنة باستخدام مصادقة JWT.",
        "ربط قواعد بيانات SQL Server، تطبيق EF Core، وإجراء تحسينات على الجداول والاستعلامات.",
        "تطبيق معماريات برمجية نظيفة (Clean Architecture) ومبادئ فصل الاهتمامات.",
        "ممارسة سير العمل باستخدام Git لإدارة الإصدارات والتعاون البرمجي."
      ]
    },
    {
      titleEn: "Graduation Project Developer",
      titleAr: "مطور مشروع التخرج",
      company: "MTIS, Port Said",
      location: "Port Said, Egypt",
      period: "2023 - 2024",
      icon: <Code2 size={24} />,
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      achievementsEn: [
        "Designed and implemented the full Backend (.NET) architecture for the graduation project.",
        "Achieved a score of 97/100 (Excellent Grade) for implementation excellence.",
        "Applied SOLID design principles, Repository pattern, and Unit of Work pattern.",
        "Optimized database indexing and table relations for rapid API responses."
      ],
      achievementsAr: [
        "تصميم وتنفيذ معمارية الـ Backend (.NET) الكاملة لمشروع التخرج.",
        "الحصول على تقييم 97/100 (درجة ممتاز) لتميز التنفيذ البرمجي.",
        "تطبيق مبادئ تصميم SOLID، ونمط المستودع (Repository) ونمط وحدة العمل (Unit of Work).",
        "تحسين فهارس قاعدة البيانات وعلاقات الجداول لضمان سرعة استجابة الـ API."
      ]
    }
  ];

  const projects = [
    {
      titleEn: "Company Management System",
      titleAr: "نظام إدارة الشركات",
      period: "2024",
      icon: <Database size={22} />,
      gradient: "linear-gradient(135deg, #8B5CF6, #6366F1)",
      tech: ["ASP.NET Core", "SQL Server", "C#", "AJAX"],
      achievementsEn: [
        "Built complete CRUD operations with robust data models.",
        "Developed a highly responsive search system using AJAX.",
        "Structured secure user authentication and login systems."
      ],
      achievementsAr: [
        "بناء عمليات CRUD كاملة بنماذج بيانات قوية.",
        "تطوير نظام بحث عالي الاستجابة في الوقت الفعلي باستخدام AJAX.",
        "هيكلة أنظمة مصادقة المستخدمين وتسجيل الدخول الآمن."
      ]
    },
    {
      titleEn: "E-commerce API System",
      titleAr: "API للتجارة الإلكترونية",
      period: "2024",
      icon: <Server size={22} />,
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      tech: ["ASP.NET Core", "EF Core", "Redis", "Payment Gateway"],
      achievementsEn: [
        "Architected product catalog, orders, and basket management systems.",
        "Implemented Redis caching to accelerate data retrieval speed.",
        "Integrated payment gateway logic to handle secure purchases."
      ],
      achievementsAr: [
        "بناء نظام كتالوج المنتجات، وإدارة الطلبات وسلة التسوق.",
        "تطبيق التخزين المؤقت عبر Redis لتسريع استرجاع البيانات.",
        "دمج منطق بوابة الدفع الإلكتروني لمعالجة عمليات الشراء الآمنة."
      ]
    },
    {
      titleEn: "Warehouse Management System",
      titleAr: "نظام إدارة المستودعات",
      period: "2024",
      icon: <Award size={22} />,
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
      tech: ["ASP.NET Core", "SQL Server", "RBAC", "Dashboard"],
      achievementsEn: [
        "Designed comprehensive inventory and stock tracking databases.",
        "Built Role-Based Access Control (RBAC) to manage users and supervisors.",
        "Developed an interactive administrative dashboard for analytics."
      ],
      achievementsAr: [
        "تصميم قواعد بيانات شاملة لتتبع المخزون والسلع.",
        "بناء تفويض قائم على الأدوار (RBAC) لإدارة صلاحيات المستخدمين والمشرفين.",
        "تطوير لوحة تحكم تفاعلية للمسؤولين لمتابعة مؤشرات الأداء."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="experience-section" ref={containerRef}>
      {/* Animated Background */}
      <div className="exp-bg-animation">
        <div className="exp-bg-orb exp-bg-orb-1"></div>
        <div className="exp-bg-orb exp-bg-orb-2"></div>
        <div className="exp-bg-orb exp-bg-orb-3"></div>
        <div className="exp-grid-pattern"></div>
      </div>

      <div className="section-container" style={{ opacity, scale }}>
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="experience-header"
        >
          <div className="experience-badge-wrapper">
            <span className="experience-badge">
              <Sparkles size={16} />
              {language === 'ar' ? 'الخبرة العملية' : 'Work Experience'}
              <Sparkles size={16} />
            </span>
          </div>
          <h2 className="experience-title">
            <span className="title-gradient">
              {language === 'ar' ? 'رحلتي المهنية' : 'My Professional'}
            </span>
            <span className="title-highlight">
              {language === 'ar' ? ' Journey' : ' Journey'}
            </span>
          </h2>
          <p className="experience-subtitle-header">
            {language === 'ar'
              ? 'خبراتي ومشاريعي في مجال تطوير الويب'
              : 'My experiences and projects in web development'}
          </p>
        </motion.div>

        {/* Timeline Style Internship - Animated */}
        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-icon-wrapper">
                <div className="timeline-icon-pulse"></div>
                <div className="timeline-icon" style={{ background: exp.gradient }}>
                  {exp.icon}
                </div>
              </div>
              <div className="timeline-content-glass">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <h3>{language === 'ar' ? exp.titleAr : exp.titleEn}</h3>
                    <div className="timeline-badge-group">
                      <span className="timeline-badge current">Current</span>
                      <span className="timeline-badge featured">Featured</span>
                    </div>
                  </div>
                  <div className="timeline-meta">
                    <span><Briefcase size={14} /> {exp.company}</span>
                    <span><Calendar size={14} /> {exp.period}</span>
                    <span><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-list">
                  {(language === 'ar' ? exp.achievementsAr : exp.achievementsEn).map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="projects-section-header"
        >
          <div className="projects-icon-wrapper">
            <Award size={24} />
          </div>
          <div className="projects-header-text">
            <h3>{language === 'ar' ? 'المشاريع البارزة' : 'Key Projects'}</h3>
            <p>{language === 'ar' ? 'أبرز المشاريع التي قمت بتطويرها' : 'Highlighted projects I have developed'}</p>
          </div>
          <div className="projects-header-line"></div>
        </motion.div>
        
        {/* Projects Grid - 3D Cards */}
        <motion.div 
          className="experience-projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="project-card-3d"
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: idx % 2 === 0 ? 3 : -3,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-card-glow" style={{ background: project.gradient }}></div>
              <div className="project-card-header">
                <div className="project-icon" style={{ background: project.gradient }}>
                  {project.icon}
                </div>
                <div className="project-period">{project.period}</div>
              </div>
              <h4>{language === 'ar' ? project.titleAr : project.titleEn}</h4>
              <div className="project-tech-stack">
                {project.tech.map((t, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <ul className="project-achievements">
                {(language === 'ar' ? project.achievementsAr : project.achievementsEn).map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="project-card-hover-effect">
                <ArrowUpRight size={20} />
                <span>View Details</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}