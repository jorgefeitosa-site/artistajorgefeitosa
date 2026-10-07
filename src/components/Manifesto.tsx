import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { aboutTranslations } from '../locales';
import { Language } from '../types';

interface ManifestoProps {
  currentLang: Language;
}

export default function Manifesto({ currentLang }: ManifestoProps) {
  const t = aboutTranslations[currentLang];
  const sectionRef = useRef(null);
  
  // Triggers once it is partially visible
  const isVisible = useInView(sectionRef, { once: true, amount: 0.3 });

  // Splitting the manifesto quote to animate each line separately
  const manifestoLines = t.manifesto.split('\n');

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen py-24 md:py-36 flex flex-col justify-center items-center bg-clay-dark px-6 md:px-12 text-center"
    >
      {/* SEO Title - Hidden from visual frame, fully indexable by search bots */}
      <h2 id="seo-about-title" className="sr-only">
        {t.seoTitle}
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Decorative minimal divider representing river line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: '80px' } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-[1px] bg-clay-black/30 mb-12"
        />

        {/* Big Serif Manifesto Quote - Line by Line Reveal */}
        <div className="space-y-4 md:space-y-6">
          {manifestoLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-serif text-3xl sm:text-5xl md:text-6xl text-clay-black tracking-wide font-light leading-snug"
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Decorative organic point indicator */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="my-10 w-1.5 h-1.5 rounded-full bg-clay-black"
        />

        {/* Position text below doing a smooth dramatic visual entrance */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1.4, ease: 'easeOut' }}
          className="font-sans text-sm sm:text-base md:text-lg text-clay-black dark:text-neutral-300 max-w-2xl leading-relaxed text-justify sm:text-center md:leading-loose font-normal select-text"
        >
          {t.paragraph}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 text-[9px] font-mono tracking-[0.25em] text-clay-black uppercase"
        >
          {currentLang === 'pt' ? 'MATÉRIA · CORPULÊNCIAS · MEMÓRIA' : 'MATTER · EMBODIMENT · MEMORY'}
        </motion.div>
      </div>
    </section>
  );
}
