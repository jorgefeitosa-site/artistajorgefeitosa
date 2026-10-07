import { motion } from 'motion/react';
import { footerTranslations } from '../locales';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = footerTranslations[currentLang];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-white py-16 px-6 md:px-12 select-none">
      {/* Visual element: Linha dourada horizontal no topo do footer */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-clay-black/20 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        
        {/* Left segment - logo, role details */}
        <div className="space-y-3">
          <h4
            onClick={() => handleScrollTo('hero')}
            className="font-serif text-xl font-medium tracking-[0.2em] text-clay-black hover:text-clay-black transition-colors cursor-pointer select-text"
          >
            JORGE FEITOSA
          </h4>
          <p className="font-mono text-[9px] sm:text-[10px] text-clay-black tracking-wider">
            {t.role}
          </p>
        </div>

        {/* Center segment - editorial links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-mono tracking-[0.15em] uppercase text-clay-black">
          <button
            onClick={() => handleScrollTo('portfolio')}
            className="hover:text-clay-black transition-colors cursor-pointer"
          >
            {currentLang === 'pt' ? 'OBRA' : 'WORK'}
          </button>
          <button
            onClick={() => handleScrollTo('biography')}
            className="hover:text-clay-black transition-colors cursor-pointer"
          >
            {currentLang === 'pt' ? 'BIOGRAFIA' : 'BIOGRAPHY'}
          </button>
          <button
            onClick={() => handleScrollTo('exhibitions')}
            className="hover:text-clay-black transition-colors cursor-pointer"
          >
            {currentLang === 'pt' ? 'EXPOSIÇÕES' : 'EXHIBITIONS'}
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="hover:text-clay-black transition-colors cursor-pointer"
          >
            {currentLang === 'pt' ? 'CONTATO' : 'CONTACT'}
          </button>
        </div>

        {/* Right segment - copyrights policies */}
        <div className="space-y-2 text-[10px] font-mono text-clay-black tracking-wide md:text-right select-text">
          <p>{t.rights}</p>
          <a
            href="#privacy"
            className="hover:text-clay-black transition-colors block underline-offset-4 underline"
          >
            {t.privacy}
          </a>
        </div>

      </div>
    </footer>
  );
}
