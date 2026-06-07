import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, 
  Layout, GitBranch, Cloud, 
  Globe, Terminal, Braces, 
  Palette, Cpu, Wifi,
  Globe2, Languages
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

export default function Skills() {
  const { language } = useLanguage();

  const skills = {
    backend: {
      icon: <Server size={24} />,
      nameEn: 'Backend Development',
      nameAr: 'تطوير الخلفية (Backend)',
      descriptionEn: 'Building reliable, high-performance server logic and robust web services',
      descriptionAr: 'بناء منطق خادم قوي وعالي الأداء وخدمات ويب متكاملة',
      technologies: ['C#', '.NET Core', 'ASP.NET Core', 'Entity Framework Core', 'LINQ', 'SignalR', 'RESTful APIs', 'MVC']
    },
    frontend: {
      icon: <Layout size={24} />,
      nameEn: 'Frontend Development',
      nameAr: 'تطوير الواجهات الأمامية',
      descriptionEn: 'Creating responsive, dynamic user experiences with modern frameworks',
      descriptionAr: 'إنشاء تجارب مستخدم ديناميكية وسريعة الاستجابة باستخدام أحدث الأطر',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React', 'Angular']
    },
    database: {
      icon: <Database size={24} />,
      nameEn: 'Database & Caching',
      nameAr: 'قواعد البيانات والتخزين المؤقت',
      descriptionEn: 'Designing optimized relational tables and performance caching strategies',
      descriptionAr: 'تصميم جداول علائقية محسنة واستراتيجيات تخزين مؤقت عالية الأداء',
      technologies: ['SQL Server', 'Redis', 'Entity Framework Core', 'T-SQL']
    },
    architecture: {
      icon: <Cpu size={24} />,
      nameEn: 'Software Architecture',
      nameAr: 'معمارية البرمجيات',
      descriptionEn: 'Applying design patterns and clean architectures for maintainable codebases',
      descriptionAr: 'تطبيق أنماط التصميم والبنى النظيفة لضمان كود قابل للصيانة والتطوير',
      technologies: ['Clean Architecture', 'N-Tier Architecture', 'SOLID Principles', 'Design Patterns', 'Repository Pattern', 'Unit of Work Pattern']
    },
    tools: {
      icon: <GitBranch size={24} />,
      nameEn: 'Tools & Utilities',
      nameAr: 'الأدوات والخدمات المساعدة',
      descriptionEn: 'Leveraging modern version control, AI assistance, and productivity suites',
      descriptionAr: 'الاستفادة من أدوات التحكم في الإصدارات، والذكاء الاصطناعي، والإنتاجية',
      technologies: ['Git', 'GitHub', 'ChatGPT', 'Claude', 'Gemini', 'Notion', 'MS Office']
    },
    softSkills: {
      icon: <Globe size={24} />,
      nameEn: 'Soft Skills',
      nameAr: 'المهارات الشخصية',
      descriptionEn: 'Professional traits for productive collaboration and logical problem solving',
      descriptionAr: 'السمات المهنية للتعاون الفعال وحل المشكلات البرمجية بشكل منطقي',
      technologies: ['Problem Solving', 'Teamwork', 'Communication', 'Time Management', 'Clean Code', 'Agile']
    }
  };

  const languages = [
    { name: 'Arabic', levelEn: 'Native', levelAr: 'لغة أم', flag: '🇪🇬' },
    { name: 'English', levelEn: 'Very Good', levelAr: 'جيد جداً', flag: '🇬🇧' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <span className="projects-badge">
            <Code2 size={16} />
            {language === 'ar' ? 'المهارات التقنية' : 'Technical Skills'}
          </span>
          <h2 className="skills-title">
            {language === 'ar' ? 'مهاراتي التقنية' : 'My Technical Skills'}
          </h2>
          <p className="skills-subtitle">
            {language === 'ar'
              ? 'التقنيات والأدوات التي أستخدمها لبناء تطبيقات مميزة'
              : 'Technologies and tools I use to build amazing applications'}
          </p>
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skills).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skills-category"
            >
              <div className="skills-category-header">
                <div className="skills-category-icon">
                  {category.icon}
                </div>
                <div className="skills-category-title-wrapper">
                  <h3 className="skills-category-title">
                    {language === 'ar' ? category.nameAr : category.nameEn}
                  </h3>
                  <p className="skills-category-description">
                    {language === 'ar' ? category.descriptionAr : category.descriptionEn}
                  </p>
                </div>
              </div>
              
              <div className="skills-list">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="skills-tech-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (techIndex * 0.02) }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="languages-section"
        >
          <div className="languages-header">
            <div className="languages-icon">
              <Languages size={24} />
            </div>
            <h3 className="languages-title">
              {language === 'ar' ? 'اللغات' : 'Languages'}
            </h3>
          </div>
          
         
        </motion.div> */}
      </div>
    </section>
  );
}