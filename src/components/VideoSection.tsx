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
      className="relative w-full bg-white py-16 md:py-28 px-6 md:px-12 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-6">
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
              ? 'O corpo, a ação e seus registros na pesquisa do artista.'
              : 'The body, action and their documentation in the artist’s practice.'}
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
                  ? 'Em suas performances, Jorge Feitosa utiliza o próprio corpo como meio de investigação. O contato com a matéria participa da construção das ações e de seus registros.'
                  : 'In his performances, Jorge Feitosa uses his body as a means of inquiry. Contact with materials shapes both the actions and their documentation.'}
              </p>
              <p className="font-sans text-sm text-black/60 leading-relaxed">
                {currentLang === 'pt'
                  ? 'Fotografia e vídeo permitem acompanhar os gestos e a relação entre movimento, espaço e superfície. Esses registros integram a documentação de sua produção artística.'
                  : 'Photography and video document the gestures and the relationship between movement, space and surface. These records form part of the documentation of his artistic practice.'}
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
