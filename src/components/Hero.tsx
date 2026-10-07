import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { heroTranslations } from '../locales';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = heroTranslations[currentLang];
  const [scrollY, setScrollY] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Pull quote appears after 2 seconds
    const timer = setTimeout(() => {
      setShowQuote(true);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax calculations
  const bgTransformY = scrollY * 0.4;
  const contentTransformY = scrollY * 0.15;

  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-white select-none"
    >
      {/* Editorial Background Image/Animation */}
      <div 
        className="absolute inset-0 w-full h-full scale-105 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${bgTransformY}px)` }}
      >
        {/* Imagem do artista — preto e branco */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale md:opacity-90 opacity-80" 
          style={{ backgroundImage: "url('/hero.jpeg')" }} 
        />
        {/* Overlay branco para manter identidade clean */}
        <div className="absolute inset-0 bg-white/55" />
        
        {/* Organic, fluid golden/terracotta dust overlay simulations */}
        <div className="absolute inset-0 bg-radial-at-t from-terracotta/15 via-transparent to-clay-black/80" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/30 to-transparent" />
        
        {/* Dynamic moving river/earth organic abstract SVG line */}
        <svg className="absolute bottom-0 left-0 w-full h-[400px] text-clay-medium/20 pointer-events-none opacity-40" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path d="M0,224L120,208C240,192,480,160,720,176C960,192,1200,256,1320,288L1440,320L1440,400L1320,400C1200,400,960,400,720,400C480,400,240,400,120,400L0,400Z" fill="currentColor" />
          <path d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,186.7C1120,171,1280,181,1360,186.7L1440,192L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z" fill="var(--color-clay-dark)" opacity="0.6" />
        </svg>
      </div>

      {/* Hero Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-5xl flex flex-col items-center justify-center h-full pt-16"
        style={{ transform: `translateY(${contentTransformY}px)` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Logo Heading (Extreme Tracking) */}
          <h1 className="font-serif text-[44px] sm:text-[68px] md:text-[96px] lg:text-[110px] font-medium tracking-[0.25em] md:tracking-[0.35em] leading-none text-clay-black select-text drop-shadow-2xl">
            JORGE FEITOSA
          </h1>

          {/* Subtitle */}
          <p className="mt-6 md:mt-8 font-mono text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-black/70">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Pull Quote after 2s */}
        <div className="h-28 mt-12 md:mt-16 overflow-hidden">
          {showQuote && (
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-elegant text-lg sm:text-2xl md:text-3xl italic font-light text-clay-black max-w-2xl px-6 leading-relaxed"
            >
              {t.quote}
            </motion.p>
          )}
        </div>

        {/* Animated Arrow Down at center bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 cursor-pointer"
          onClick={handleScrollDown}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-clay-black hover:text-clay-black transition-colors p-4"
          >
            <ChevronDown className="w-8 h-8 stroke-[1.2px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
