import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { bioTranslations, timelineList } from '../locales';
import { Language } from '../types';

interface BiographyProps {
  currentLang: Language;
}

export default function Biography({ currentLang }: BiographyProps) {
  const t = bioTranslations[currentLang];
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Checking in view
  const isVisible = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="biography"
      className="relative w-full bg-white py-24 md:py-36 px-6 md:px-12 select-text overflow-hidden border-t border-clay-light/20"
    >
      <h2 className="sr-only">{t.seoTitle}</h2>

      <div className="max-w-7xl mx-auto">

        {/* ── Foto de abertura ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 flex flex-col items-center"
        >
          <div className="relative w-full max-w-lg mx-auto overflow-hidden shadow-xl">
            <img
              src="/biografia.jpeg"
              alt="Jorge Feitosa, Porto Velho, 1976"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 font-mono text-[10px] text-black/50 tracking-[0.25em] uppercase text-center">
            Porto Velho, 1976, 7 anos de idade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT COLUMN: Deep Narrative Biography Prose (No Bullets) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-mono text-xs text-clay-black tracking-widest uppercase block mb-3 font-medium"
            >
              {currentLang === 'pt' ? 'MATÉRIA EM TRAVESSIA' : 'MATTER IN TRANSIT'}
            </motion.span>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl text-clay-black font-light tracking-wide mb-8 xl:mb-12"
            >
              {t.title}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-6 text-sm sm:text-base text-clay-black dark:text-neutral-300 leading-relaxed text-justify xl:leading-loose font-normal"
            >
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p>{t.p4}</p>
              <p>{t.p5}</p>
              <p>{t.p6}</p>
              <p>{t.p7}</p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Visual Timeline */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-start lg:pl-8 xl:pl-16 relative mt-12 lg:mt-0">
            
            {/* Background vertical subtle gold line thread */}
            <div className="absolute left-[13px] sm:left-[17px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-clay-black/40 via-clay-light to-transparent" />

            <div className="mb-8 pl-8 sm:pl-12">
              <span className="font-mono text-[10px] sm:text-xs text-clay-black tracking-widest uppercase font-semibold">
                {t.timelineTitle}
              </span>
            </div>

            {/* Timeline Milestones Cards */}
            <div className="space-y-8 md:space-y-12 relative">
              {timelineList.map((item, idx) => {
                return (
                  <div key={item.year} className="flex group select-none">
                    {/* Glowing point container */}
                    <div className="relative shrink-0 flex justify-center items-start pt-[5px]">
                      {/* Interactive ring wrapping node */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : {}}
                        transition={{
                          type: 'spring',
                          stiffness: 120,
                          delay: 0.3 + idx * 0.15
                        }}
                        className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full border border-museum-gold/30 bg-white flex items-center justify-center z-10 group-hover:border-museum-gold transition-colors duration-300"
                      >
                        {/* Core gold node */}
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-clay-black group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                    </div>

                    {/* Timeline Data Card - Slide in from right */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 1.0,
                        delay: 0.3 + idx * 0.15,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="ml-6 sm:ml-8 flex-grow bg-clay-medium/20 hover:bg-clay-medium/45 p-5 md:p-6 border border-clay-light/20 hover:border-museum-gold/30 transition-all duration-500 rounded-none relative"
                    >
                      <span className="font-mono text-xs text-clay-black font-bold tracking-widest block mb-1">
                        {item.year}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-clay-black tracking-wide font-light">
                        {currentLang === 'pt' ? item.titlePT : item.titleEN}
                      </h4>
                      {(item.subtitlePT || item.subtitleEN) && (
                        <p className="mt-2 font-sans text-xs sm:text-sm text-clay-black font-normal leading-relaxed">
                          {currentLang === 'pt' ? item.subtitlePT : item.subtitleEN}
                        </p>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
