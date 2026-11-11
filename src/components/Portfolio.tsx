import { obras, type Piece } from '../works';

import { motion } from 'motion/react';
import { Language } from '../types';

interface PortfolioProps {
  currentLang: Language;
}

function PhotoSlot({
  index,
  src,
  piece,
  lang,
}: {
  index: number;
  src?: string;
  piece?: Piece;
  lang: Language;
}) {
  return (
    <div className="flex flex-col">
      {/* Imagem */}
      {src ? (
        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
          <img
            src={src}
            alt={piece ? (lang === 'pt' ? `${piece.titlePT}, obra de Jorge Feitosa` : `${piece.titleEN}, artwork by Jorge Feitosa`) : (lang === 'pt' ? `Registro da série de Jorge Feitosa, imagem ${index + 1}` : `Jorge Feitosa series documentation, image ${index + 1}`)}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[4/5] border border-dashed border-black/20 bg-gray-50 flex flex-col items-center justify-center gap-3 hover:border-black/40 transition-colors duration-300">
          <div className="w-8 h-8 border border-black/20 flex items-center justify-center">
            <span className="text-black/30 text-xs font-mono">+</span>
          </div>
          <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase">
            {'Foto ' + String(index + 1)}
          </span>
        </div>
      )}

      {/* Metadados da peça individual */}
      {piece && (
        <div className="mt-3 space-y-1 border-t border-gray-100 pt-3">
          <p className="font-serif text-sm text-black font-light italic">
            {lang === 'pt' ? piece.titlePT : piece.titleEN}
          </p>
          <p className="font-mono text-[9px] text-black/60 leading-relaxed">
            {piece.medium}
          </p>
          <p className="font-mono text-[9px] text-black/50">
            {piece.dimensions}
          </p>
          <p className="font-mono text-[9px] text-black/40">{piece.year}</p>
        </div>
      )}
    </div>
  );
}

export default function Portfolio({ currentLang }: PortfolioProps) {
  const t = {
    pt: { label: 'GALERIA EDITORIAL', title: 'Obras', section: 'OBRA', dims: 'Dimensões', medium: 'Técnica', year: 'Ano' },
    en: { label: 'EDITORIAL GALLERY', title: 'Works', section: 'WORK', dims: 'Dimensions', medium: 'Medium', year: 'Year' },
  }[currentLang];

  return (
    <section id="portfolio" className="relative w-full bg-white py-16 md:py-28">
      <h2 className="sr-only">{t.label} — Jorge Feitosa</h2>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-black tracking-widest uppercase block mb-2">{t.label}</span>
          <h3 className="font-serif text-3xl md:text-5xl text-black font-light tracking-wide">{t.title}</h3>
        </div>
      </div>

      {/* Works list */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
        {obras.map((obra, obraIdx) => (
          <motion.div
            key={obra.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-gray-200 pt-10"
          >
            {/* Work header */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10">
              <div>
                <span className="font-mono text-[10px] text-black/50 tracking-widest block mb-1">
                  {String(obraIdx + 1).padStart(2, '0')} · {t.section}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl text-black font-light tracking-wide">
                  {currentLang === 'pt' ? obra.titlePT : obra.titleEN}
                </h4>
              </div>

              {/* Metadata — só mostra se não tiver pieces individuais */}
              {!obra.pieces && (
                <div className="flex gap-8 shrink-0">
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-widest uppercase block">{t.year}</span>
                    <span className="font-mono text-sm text-black">{obra.year}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-widest uppercase block">{t.dims}</span>
                    <span className="font-mono text-sm text-black">{obra.dimensions}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-black/40 tracking-widest uppercase block">{t.medium}</span>
                    <span className="font-mono text-sm text-black">{obra.medium}</span>
                  </div>
                </div>
              )}

              {/* Se tem pieces, mostra só o ano da série */}
              {obra.pieces && (
                <div className="shrink-0">
                  <span className="font-mono text-[9px] text-black/40 tracking-widest uppercase block">{t.year}</span>
                  <span className="font-mono text-sm text-black">{obra.year}</span>
                </div>
              )}
            </div>

            {/* 3 photo slots */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-10">
              <PhotoSlot index={0} src={obra.images ? obra.images[0] : undefined} piece={obra.pieces ? obra.pieces[0] : undefined} lang={currentLang} />
              <PhotoSlot index={1} src={obra.images ? obra.images[1] : undefined} piece={obra.pieces ? obra.pieces[1] : undefined} lang={currentLang} />
              <PhotoSlot index={2} src={obra.images ? obra.images[2] : undefined} piece={obra.pieces ? obra.pieces[2] : undefined} lang={currentLang} />
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-black leading-relaxed max-w-2xl">
              {currentLang === 'pt' ? obra.descPT : obra.descEN}
            </p>

            {/* Crédito de texto */}
            {obra.creditPT && (
              <p className="mt-4 font-mono text-[10px] text-black/50 tracking-widest italic">
                {currentLang === 'pt' ? obra.creditPT : obra.creditEN}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
