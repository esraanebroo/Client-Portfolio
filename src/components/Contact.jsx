// Contact.jsx - Adjusted layout with proper spacing and blue theme
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import './Contact.css';

export default function Contact() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`New Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:gaberezzat.1001@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      id: 'email',
      icon: <Mail size={20} />,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'gaberezzat.1001@gmail.com',
      href: 'mailto:gaberezzat.1001@gmail.com'
    },
    {
      id: 'phone',
      icon: <Phone size={20} />,
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      value: '+20 111 374 9645',
      href: 'tel:+201113749645'
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={20} />,
      title: language === 'ar' ? 'لينكد إن' : 'LinkedIn',
      value: 'linkedin.com/in/gaberezzat11',
      href: 'https://linkedin.com/in/gaberezzat11',
      target: '_blank'
    },
    {
      id: 'location',
      icon: <MapPin size={20} />,
      title: language === 'ar' ? 'الموقع' : 'Location',
      value: language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt',
    }
  ];

  return (
    <section id="contact" className={`contact-section ${theme}`}>
      {/* Background */}
      <div className="contact-bg">
        <div className="contact-bg-orb contact-bg-orb-1"></div>
        <div className="contact-bg-orb contact-bg-orb-2"></div>
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <div className="contact-badge-wrapper">
            <span className="contact-badge">
              <Sparkles size={14} />
              {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
            </span>
          </div>
          <h2 className="contact-section-title">
            {language === 'ar' ? 'لنتحدث' : "Let's Talk"}
          </h2>
          <p className="contact-section-subtitle">
            {language === 'ar' 
              ? 'لديك مشروع في ذهنك أو تريد التعاون؟ لا تتردد في التواصل.' 
              : "Have a project in mind or want to collaborate? Feel free to reach out."}
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info-side"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.id}
                href={info.href}
                target={info.target}
                rel={info.target ? "noopener noreferrer" : undefined}
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="contact-card-icon">
                  {info.icon}
                </div>
                <div className="contact-card-content">
                  <h3>{info.title}</h3>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-side"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="input-group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder=" "
                  />
                  <label htmlFor="name">{language === 'ar' ? 'الاسم' : 'Your Name'}</label>
                </div>
                <div className="input-group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder=" "
                  />
                  <label htmlFor="email">{language === 'ar' ? 'البريد الإلكتروني' : 'Your Email'}</label>
                </div>
              </div>
              <div className="input-group full-width">
                <textarea 
                  id="message"
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder=" "
                />
                <label htmlFor="message">{language === 'ar' ? 'رسالتك' : 'Your Message'}</label>
              </div>
              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                <Send size={18} className="send-icon" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}