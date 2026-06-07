import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Education.css';

export default function Education() {
  const { language } = useLanguage();

  const education = {
    degree: {
      titleEn: "Bachelor's Degree in Management Technology & Information Systems (MTIS)",
      titleAr: "بكالوريوس تكنولوجيا الإدارة ونظم المعلومات",
      university: "MTIS, Port Said",
      location: "Port Said, Egypt",
      period: "09/2020 - 07/2024",
      grade: "Grade: B+ - GPA: 3.5/4",
      project: "Graduation Project: Backend (.NET) Project - Grade: 97/100 (Excellent)",
      logo: "ZagazigUniversity.png",
      certLink: "https://linkedin.com/in/gaberezzat11"
    }
  };

  const certifications = [
    {
      nameEn: "Backend (.NET Core) Diploma",
      nameAr: "دبلومة تطوير الخلفية (.NET Core)",
      provider: "Route IT Training Center",
      period: "2024",
      descriptionEn: "Comprehensive hands-on training covering C#, ASP.NET Core, EF Core, Web APIs, and Clean Architecture.",
      descriptionAr: "برنامج تدريبي متكامل يغطي لغة C# و ASP.NET Core و EF Core وبنية Clean Architecture.",
      logo: "Route.jpg",
      certLink: "https://linkedin.com/in/gaberezzat11"
    },
    {
      nameEn: "SQL Basic & Intermediate Certificates",
      nameAr: "شهادات SQL الأساسية والمتقدمة",
      provider: "HackerRank",
      period: "2024",
      descriptionEn: "Demonstrated advanced problem-solving capabilities in database structures, complex queries, and joins.",
      descriptionAr: "إثبات الكفاءة في حل مشكلات قواعد البيانات، والاستعلامات المعقدة وعمليات الربط (Joins).",
      logo: "Digi.jpg",
      certLink: "https://linkedin.com/in/gaberezzat11"
    },
    {
      nameEn: "LeetCode SQL 50 & SoloLearn SQL",
      nameAr: "تحدي LeetCode SQL 50 وشهادة SoloLearn",
      provider: "LeetCode / SoloLearn",
      period: "2024",
      descriptionEn: "Completed curated SQL tracks covering data aggregation, subqueries, and database manipulation.",
      descriptionAr: "إتمام مسارات قواعد البيانات المنسقة، تجميع البيانات والاستعلامات الفرعية.",
      logo: "Digi1.png",
      certLink: "https://linkedin.com/in/gaberezzat11"
    },
    {
      nameEn: "Soft Skills, MOS & English Level 3",
      nameAr: "المهارات الشخصية، MOS ومستوى اللغة الإنجليزية 3",
      provider: "Academic & Professional Centers",
      period: "2024",
      descriptionEn: "Training in ICDL, Principles of MOS, professional English (Level 3), communication, and teamwork.",
      descriptionAr: "التدريب على أساسيات ICDL و MOS، واللغة الإنجليزية المهنية، والتواصل والعمل الجماعي.",
      logo: "Digi.jpg",
      certLink: "https://linkedin.com/in/gaberezzat11"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="education-header"
        >
          <span className="projects-badge">
            <GraduationCap size={16} />
            {language === 'ar' ? 'التعليم والشهادات' : 'Education & Certifications'}
          </span>
          <h2 className="education-title">
            {language === 'ar' ? 'رحلتي التعليمية' : 'My Learning Journey'}
          </h2>
        </motion.div>

        {/* Degree Section with Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="education-degree"
        >
          <div className="education-degree-logo">
            <img src={education.degree.logo} alt="Zagazig University Logo" />
          </div>
          <div className="education-degree-content">
            <h3>{language === 'ar' ? education.degree.titleAr : education.degree.titleEn}</h3>
            <div className="education-degree-meta">
              <span className="meta-item">
                <MapPin size={14} /> {education.degree.university}
              </span>
              <span className="meta-item">
                <Calendar size={14} /> {education.degree.period}
              </span>
            </div>
            <p className="education-degree-grade">{education.degree.grade}</p>
            <p className="education-degree-project">{education.degree.project}</p>
            <a href={education.degree.certLink} target="_blank" className="education-cert-link" rel="noopener noreferrer">
              <span>{language === 'ar' ? 'عرض الشهادة' : 'View Certificate'}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="education-certifications">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="education-cert-title"
          >
            <Award size={20} />
            <span>{language === 'ar' ? 'الشهادات والدورات' : 'Certifications & Courses'}</span>
          </motion.div>

          <div className="education-cert-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="education-cert-card"
              >
                <div className="education-cert-logo">
                  <img src={cert.logo} alt={cert.provider} />
                </div>
                <div className="education-cert-content">
                  <div className="education-cert-header">
                    <h4>{language === 'ar' ? cert.nameAr : cert.nameEn}</h4>
                    <span className="education-cert-period">{cert.period}</span>
                  </div>
                  <p className="education-cert-provider">{cert.provider}</p>
                  <p className="education-cert-desc">
                    {language === 'ar' ? cert.descriptionAr : cert.descriptionEn}
                  </p>
                  <a href={cert.certLink} target="_blank" className="education-cert-link" rel="noopener noreferrer">
                    <span>{language === 'ar' ? 'عرض الشهادة' : 'View Certificate'}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}