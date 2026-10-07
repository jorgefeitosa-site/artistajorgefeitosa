import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Language } from '../types';

interface TestimonialsProps {
  currentLang: Language;
}

const quotes = [
  {
    textPT: 'Certos artistas estabelecem com a matéria um compromisso que ultrapassa modismos e tendências. Feitosa é um deles. [...] Em Feitosa, aquilo que chamamos de divino não se apresenta como uma dimensão separada do mundo, mas como efeito de uma percepção radical do que nos cerca, capaz de revelar, nas formas mais ordinárias da natureza, potência de transformação e encantamento.',
    textEN: 'Certain artists establish with matter a commitment that transcends fashions and trends. Feitosa is one of them. [...] In Feitosa, what we call the divine does not present itself as a dimension separate from the world, but as the effect of a radical perception of what surrounds us, capable of revealing, in the most ordinary forms of nature, the power of transformation and enchantment.',
    authorPT: 'Renan Marcondes',
    authorEN: 'Renan Marcondes',
    rolePT: 'Artista, curador e pesquisador. Doutor em Artes pela USP',
    roleEN: 'Artist, curator and researcher. PhD in Arts from USP',
  },
];

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.2 });

  const label = currentLang === 'pt' ? 'O QUE DIZEM SOBRE JORGE FEITOSA' : 'WHAT THEY SAY ABOUT JORGE FEITOSA';

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative w-full bg-white py-20 md:py-28 px-6 md:px-12 border-t border-clay-light"
    >
      <h2 className="sr-only">{label}</h2>

      <div className="max-w-5xl mx-auto">
        {/* Section label — very discreet */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-mono text-[9px] tracking-[0.3em] text-clay-black uppercase block mb-16 text-center"
        >
          {label}
        </motion.span>

        {/* Quotes grid — adapta ao número de itens */}
        <div className={`grid gap-12 md:gap-16 ${quotes.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : quotes.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {quotes.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: idx * 0.2, ease: 'easeOut' }}
              className="flex flex-col"
            >
              {/* Quote mark */}
              <span className={`font-elegant text-4xl text-clay-black leading-none mb-4 select-none ${quotes.length === 1 ? 'text-center block' : ''}`}>"</span>

              {/* Text */}
              <p className={`font-elegant italic leading-relaxed font-light flex-grow ${quotes.length === 1 ? 'text-lg md:text-xl text-center' : 'text-base'} text-clay-black`}>
                {currentLang === 'pt' ? q.textPT : q.textEN}
              </p>

              {/* Author */}
              <div className={`mt-6 pt-4 border-t border-clay-light ${quotes.length === 1 ? 'text-center' : ''}`}>
                <span className="font-sans text-xs font-medium text-clay-black block tracking-wide">
                  {currentLang === 'pt' ? q.authorPT : q.authorEN}
                </span>
                <span className="font-mono text-[9px] text-clay-black tracking-widest uppercase block mt-1">
                  {currentLang === 'pt' ? q.rolePT : q.roleEN}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
