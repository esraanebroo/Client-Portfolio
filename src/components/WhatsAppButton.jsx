// WhatsAppButton.jsx
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-float-container">
      <motion.a
        href="https://wa.me/201113749645"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.5 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Ring */}
        <motion.div
          className="whatsapp-pulse-ring"
          animate={{
            scale: [1, 1.4, 1.6],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        <div className="whatsapp-icon-wrapper">
          <FaWhatsapp size={32} />
        </div>
        
        <span className="whatsapp-btn-text">Chat on WhatsApp</span>
      </motion.a>
    </div>
  );
}
