import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Footer from './components/Footer';
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
        <WhatsAppButton />
         <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;