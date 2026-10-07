import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Language } from '../types';

interface VideoSectionProps {
  currentLang: Language;
}

export default function VideoSection({ currentLang }: VideoSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="video"
      className="relative w-full bg-white py-24 md:py-36 px-6 md:px-12 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-mono text-[10px] tracking-[0.35em] text-black/40 uppercase block mb-3"
            >
              {currentLang === 'pt' ? 'REGISTRO · PERFORMANCE' : 'RECORD · PERFORMANCE'}
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="font-serif text-3xl md:text-5xl text-black font-light tracking-wide leading-snug"
            >
              {currentLang === 'pt' ? 'O corpo como\nprimeiro suporte.' : 'The body as\nfirst support.'}
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-sm text-black/50 max-w-xs leading-relaxed md:text-right"
          >
            {currentLang === 'pt'
              ? 'Matéria, gesto e território em confluência.'
              : 'Matter, gesture and territory in confluence.'}
          </motion.p>
        </div>

        {/* Layout: vídeo + espaço branco respirado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20"
        >
          {/* Vídeo vertical — Shorts */}
          <div className="w-full max-w-[280px] md:max-w-[320px] flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-full aspect-[9/16] overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/RMqPji1jtjE?autoplay=1&mute=1&loop=1&playlist=RMqPji1jtjE&controls=0&playsinline=1&rel=0&modestbranding=1"
                title="Jorge Feitosa — Performance"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            {/* Legenda */}
            <p className="mt-3 font-mono text-[9px] text-black/35 tracking-widest uppercase text-center">
              Jorge Feitosa · 2017
            </p>
          </div>

          {/* Linha divisória vertical + texto longo */}
          <div className="flex flex-row gap-8 md:gap-12 items-stretch flex-1 pt-0 md:pt-2">
            <div className="w-px bg-black/10 self-stretch hidden md:block flex-shrink-0" />
            <div className="flex flex-col justify-center gap-8 max-w-lg">
              <p className="font-sans text-sm text-black leading-relaxed">
                {currentLang === 'pt'
                  ? 'O artista é o primeiro suporte. Antes da tela, antes da argila, antes de qualquer superfície: o corpo entra em contato com a matéria e inaugura a obra.'
                  : 'The artist is the first support. Before the canvas, before the clay, before any surface: the body makes contact with matter and inaugurates the work.'}
              </p>
              <p className="font-sans text-sm text-black/60 leading-relaxed">
                {currentLang === 'pt'
                  ? 'Em Feitosa, a performance não é representação — é inscrição. O gesto deixa marca não apenas na matéria, mas no próprio artista.'
                  : 'In Feitosa, performance is not representation — it is inscription. The gesture leaves a mark not only on matter, but on the artist himself.'}
              </p>
              <div className="pt-2 border-t border-black/10">
                <span className="font-mono text-[9px] text-black/30 tracking-widest uppercase">
                  [ CORPO · MATÉRIA · GESTO ]
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
