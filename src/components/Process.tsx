import React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { processTranslations, processBlocksList } from '../locales';
import { Language, ProcessBlock } from '../types';

interface ProcessProps {
  currentLang: Language;
}

interface BlockConfig {
  images: string[];
  sideLayout?: boolean;   // coloca imagens lado a lado em grid
  mainAspect?: string;
  imageFit?: string;
  imageBg?: string;
  gap?: string;
}

const blockConfig: Record<string, BlockConfig> = {
  // "O Processo: A Carne da Arte" — lado a lado, sem borda visível
  'process-1': {
    images: ['/ouro2.jpeg', '/ouro3.jpeg'],
    sideLayout: true,
    mainAspect: 'aspect-square',
    imageFit: 'object-cover',
    imageBg: 'bg-gray-50',
    gap: 'gap-4',
  },
  // "O artista é o primeiro suporte" — empilhadas, maiores e próximas
  'process-2': {
    images: ['/performance1.jpeg', '/performance2.jpeg'],
    sideLayout: false,
    mainAspect: 'aspect-[4/3]',
    imageFit: 'object-cover',
    imageBg: 'bg-gray-100',
    gap: 'gap-2',
  },
  // "Ouro sobre osso. Luxo sobre lixo." — imagem um pouco menor
  'process-3': {
    images: ['/ouro1.jpeg'],
    sideLayout: false,
    mainAspect: 'aspect-[16/9]',
    imageFit: 'object-cover',
    imageBg: 'bg-gray-100',
    gap: 'gap-3',
  },
  // "A floresta que ocupa o mundo."
  'process-4': {
    images: ['/amazonia.jpeg'],
    sideLayout: false,
    mainAspect: 'aspect-[4/3]',
    imageFit: 'object-cover',
    imageBg: 'bg-gray-100',
    gap: 'gap-3',
  },
};

export default function Process({ currentLang }: ProcessProps) {
  const t = processTranslations[currentLang];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative w-full bg-white py-24 md:py-36 px-6 md:px-12 select-text overflow-hidden border-t border-gray-100"
    >
      <h2 className="sr-only">{t.seoTitle}</h2>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-mono text-xs text-black tracking-widest uppercase block mb-3">
            {currentLang === 'pt' ? 'DIRETRIZ FILOSÓFICA' : 'PHILOSOPHICAL ETHOS'}
          </span>
          <h3 className="font-serif text-3xl md:text-5xl text-black font-light tracking-wide">
            {t.title}
          </h3>
        </div>

        <div className="space-y-32 md:space-y-48">
          {processBlocksList.map((block, index) => {
            const isEven = index % 2 === 0;
            const cfg = blockConfig[block.id] || { images: [] };
            return (
              <ProcessLayoutBlock
                key={block.id}
                block={block}
                currentLang={currentLang}
                isEven={isEven}
                cfg={cfg}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface BlockProps {
  block: ProcessBlock;
  currentLang: Language;
  isEven: boolean;
  cfg: BlockConfig;
  key?: React.Key;
}

function ProcessLayoutBlock({ block, currentLang, isEven, cfg }: BlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(blockRef, { once: true, amount: 0.2 });

  const title    = currentLang === 'pt' ? block.titlePT    : block.titleEN;
  const subtitle = currentLang === 'pt' ? block.subtitlePT : block.subtitleEN;
  const text1    = currentLang === 'pt' ? block.text1PT    : block.text1EN;
  const text2    = currentLang === 'pt' ? block.text2PT    : block.text2EN;
  const matName  = currentLang === 'pt' ? block.materialNamePT : block.materialNameEN;
  const imageAlt = currentLang === 'pt' ? block.imageAltPT : block.imageAltEN;

  const {
    images = [],
    sideLayout = false,
    mainAspect = 'aspect-[4/3]',
    imageFit = 'object-cover',
    imageBg = 'bg-gray-100',
    gap = 'gap-3',
  } = cfg;

  const [mainImg, ...extraImgs] = images;

  return (
    <div
      ref={blockRef}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-12 lg:gap-20`}
    >
      {/* Visual column */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 flex flex-col"
      >
        {images.length === 0 ? (
          /* Placeholder gradiente se não houver imagem */
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <div className={`absolute inset-0 ${block.materialColor} opacity-80`} />
            <div className="absolute top-3 left-3">
              <span className="font-mono text-[9px] tracking-widest text-white bg-black/50 px-2 py-0.5 uppercase">
                {subtitle} · {matName}
              </span>
            </div>
          </div>
        ) : sideLayout ? (
          /* Imagens lado a lado */
          <div className={`grid grid-cols-${images.length} ${gap}`}>
            {images.map((src, i) => (
              <div key={i} className={`relative ${mainAspect} overflow-hidden ${imageBg} group`}>
                <img
                  src={src}
                  alt={imageAlt + (i > 0 ? ' ' + String(i + 1) : '')}
                  className={`w-full h-full ${imageFit} grayscale group-hover:grayscale-0 transition-all duration-700`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Imagem principal + extras empilhadas */
          <div className={`flex flex-col ${gap}`}>
            {mainImg && (
              <div className={`relative ${mainAspect} overflow-hidden ${imageBg} group`}>
                <img
                  src={mainImg}
                  alt={imageAlt}
                  className={`w-full h-full ${imageFit} grayscale group-hover:grayscale-0 transition-all duration-700`}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[9px] tracking-widest text-white bg-black/50 px-2 py-0.5 uppercase">
                    {subtitle} · {matName}
                  </span>
                </div>
              </div>
            )}
            {extraImgs.map((src, i) => (
              <div key={i} className={`relative ${mainAspect} overflow-hidden ${imageBg} group`}>
                <img
                  src={src}
                  alt={imageAlt + ' ' + String(i + 2)}
                  className={`w-full h-full ${imageFit} grayscale group-hover:grayscale-0 transition-all duration-700`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        <span className="font-mono text-[10px] tracking-widest text-black/50 uppercase block mb-4">
          {subtitle}
        </span>
        <h3 className="font-serif text-2xl md:text-4xl text-black font-light tracking-wide mb-8 leading-snug">
          {title}
        </h3>
        <div className="space-y-5">
          <p className="font-sans text-sm text-black leading-relaxed">{text1}</p>
          <p className="font-sans text-sm text-black leading-relaxed">{text2}</p>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <span className="font-mono text-[10px] text-black/40 tracking-widest uppercase">
            [ {matName} ]
          </span>
        </div>
      </motion.div>
    </div>
  );
}
