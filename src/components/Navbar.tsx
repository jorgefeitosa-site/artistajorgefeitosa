import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { navigationTranslations } from '../locales';
import { Language } from '../types';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
}

export default function Navbar({ currentLang, setLang, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = navigationTranslations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: 'Jorge Feitosa' },
    { id: 'about', label: t.about },
    { id: 'portfolio', label: t.works },
    { id: 'biography', label: t.biography },
    { id: 'exhibitions', label: t.exhibitions },
    { id: 'process', label: t.process },
    { id: 'testimonials', label: currentLang === 'pt' ? 'SOBRE ELE' : 'ABOUT HIM' },
    { id: 'contact', label: t.contact },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLangToggle = () => {
    const nextLang = currentLang === 'pt' ? 'en' : 'pt';
    setLang(nextLang);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-clay-light/40 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => handleScrollTo('hero')}
            className="font-serif text-lg md:text-xl font-medium tracking-[0.25em] text-clay-black hover:text-museum-gold transition-colors text-left"
            aria-label="Jorge Feitosa Home"
          >
            JORGE FEITOSA
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6 text-[11px] font-mono tracking-widest uppercase">
              {menuItems.slice(1).map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`relative py-1 cursor-pointer transition-colors duration-300 ${
                      isActive ? 'text-museum-gold' : 'text-clay-black hover:text-clay-black'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-museum-gold"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Language Switch */}
            <div className="h-4 w-[1px] bg-clay-light" />
            
            <button
              onClick={handleLangToggle}
              className="flex items-center space-x-2 text-[11px] font-mono tracking-widest uppercase text-clay-black hover:text-museum-gold cursor-pointer transition-colors group"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300 text-museum-gold" />
              <span>{currentLang === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center space-x-6">
            <button
              onClick={handleLangToggle}
              className="flex items-center space-x-1.5 text-xs font-mono tracking-wider text-clay-black' hover:text-museum-gold cursor-pointer transition-colors"
              aria-label="Mudar idioma / Toggle language"
            >
              <Globe className="w-4 h-4 text-museum-gold" />
              <span className="text-[10px] font-bold">{currentLang === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-clay-black hover:text-museum-gold transition-colors focus:outline-none cursor-pointer"
              aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Elegant Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-xl z-45 lg:hidden flex flex-col justify-center items-center px-8"
          >
            <div className="flex flex-col space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
                  onClick={() => handleScrollTo(item.id)}
                  className={`font-serif text-2xl tracking-[0.1em] transition-colors ${
                    activeSection === item.id ? 'text-museum-gold font-semibold' : 'text-clay-black hover:text-museum-gold'
                  }`}
                >
                  {item.id === 'hero' ? 'JORGE FEITOSA' : item.label}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-12 h-[1px] bg-clay-light mx-auto my-4"
              />

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                onClick={() => {
                  handleLangToggle();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 text-xs font-mono tracking-widest text-museum-gold uppercase mx-auto px-4 py-2 border border-museum-gold/30 rounded-none bg-clay-medium/30"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
