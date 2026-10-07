import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Portfolio from './components/Portfolio';
import Biography from './components/Biography';
import Exhibitions from './components/Exhibitions';
import Process from './components/Process';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';

export default function App() {
  const [currentLang, setLang] = useState<Language>('pt');
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  }, [currentLang]);

  useEffect(() => {
    const listSections = ['hero', 'about', 'portfolio', 'biography', 'exhibitions', 'process', 'testimonials', 'contact'];
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0,
    });
    listSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      listSections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-white font-sans text-clay-black min-h-screen flex flex-col justify-between selection:bg-clay-black/10 selection:text-clay-black antialiased">

      <Navbar currentLang={currentLang} setLang={setLang} activeSection={activeSection} />

      <main className="w-full">
        <Hero currentLang={currentLang} />
        <Manifesto currentLang={currentLang} />
        <VideoSection currentLang={currentLang} />
        <Portfolio currentLang={currentLang} />
        <Biography currentLang={currentLang} />
        <Exhibitions currentLang={currentLang} />
        <Process currentLang={currentLang} />
        <Testimonials currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
