import { motion } from 'motion/react';
import { Language } from '../types';

interface PortfolioProps {
  currentLang: Language;
}

interface Piece {
  titlePT: string;
  titleEN: string;
  medium: string;
  dimensions: string;
  year: string;
}

interface Obra {
  id: string;
  titlePT: string;
  titleEN: string;
  year: string;
  descPT: string;
  descEN: string;
  dimensions: string;
  medium: string;
  images?: string[];
  pieces?: Piece[];
  creditPT?: string;
  creditEN?: string;
}

const obras: Obra[] = [
  {
    id: 'obra-01',
    titlePT: 'Série Disparo',
    titleEN: 'Disparo Series',
    year: '2026',
    descPT: 'Na série Disparo, Jorge Feitosa trabalha a cerâmica esmaltada a partir de questões relacionadas à violência ambiental e aos conflitos territoriais na Amazônia. O contraste entre superfícies claras e escuras, os volumes e as marcas de modelagem participam da construção das esculturas. A série associa essas decisões formais à memória de corpos e territórios afetados pelo garimpo ilegal e pela grilagem, sem converter a experiência de outras comunidades em representação literal.',
    descEN: 'In the Disparo series, Jorge Feitosa uses glazed ceramics to address environmental violence and territorial conflict in the Amazon. Contrasts between light and dark surfaces, sculptural volumes and modelling marks shape the works. The series relates these formal choices to the memory of bodies and territories affected by illegal mining and land grabbing, without claiming to represent the experiences of other communities literally.',
    dimensions: 'Dimensões variadas',
    medium: 'Cerâmica esmaltada',
    images: ['/disparo1.jpeg', '/disparo2.jpeg', '/disparo3.jpeg'],
  },
  {
    id: 'obra-02',
    titlePT: 'Os que habitam o silêncio',
    titleEN: 'Those Who Inhabit Silence',
    year: '2026',
    descPT: 'Em Os que habitam o silêncio, as máscaras modeladas em cerâmica conservam marcas do trabalho manual. As peças apresentam suportes de madeira e outros materiais; uma delas incorpora elementos sonoros. A combinação desloca a leitura das máscaras para além de sua forma escultórica e introduz uma dimensão de presença, escuta e percepção do espaço. A série explora a continuidade de procedimentos manuais em obras que também recorrem a dispositivos contemporâneos.',
    descEN: 'In Os que habitam o silêncio, ceramic masks retain traces of the modelling process. The pieces incorporate wooden supports and other materials; one also includes sound elements. This combination extends the works beyond their sculptural form and introduces questions of presence, listening and spatial perception. The series explores the continuation of manual processes in works that also make use of contemporary devices.',
    dimensions: 'Dimensões variadas',
    medium: 'Cerâmica',
    images: ['/mascaras1.jpeg', '/mascaras2.jpeg', '/mascaras3.jpeg'],
    pieces: [
      {
        titlePT: 'O Eco do Abismo',
        titleEN: 'The Echo of the Abyss',
        medium: 'Escultura em cerâmica, cabo e madeira',
        dimensions: '22 × 26 × 89,5 cm (máscara + suporte)',
        year: '2026',
      },
      {
        titlePT: 'O Guardião',
        titleEN: 'The Guardian',
        medium: 'Cerâmica esmaltada com aplicação de fibras naturais, cabo, chocalho e áudio',
        dimensions: '35 × 32 × 96 cm (máscara + tripé)',
        year: '2026',
      },
      {
        titlePT: 'O Observador Silencioso',
        titleEN: 'The Silent Observer',
        medium: 'Escultura em cerâmica',
        dimensions: '23 × 28 × 87 cm (máscara + suporte)',
        year: '2026',
      },
    ],
    creditPT: '— Moroni Henrique',
    creditEN: '— Moroni Henrique',
  },
  {
    id: 'obra-03',
    titlePT: 'Kintsugi',
    titleEN: 'Kintsugi',
    year: '2024',
    descPT: 'A série Kintsugi (2024) reúne esculturas feitas com ossos de peixes amazônicos, madeira e aplicações de folha de ouro. O título remete à técnica japonesa de reparação de cerâmicas, aqui retomada como referência conceitual, sem reproduzir necessariamente seu procedimento. Parte das obras é apresentada em caixas de madeira e vidro. A pesquisa se relaciona às memórias de infância de Jorge Feitosa em Porto Velho e aos impactos da extração de ouro sobre o Rio Madeira e suas populações. A justaposição de fragmentos ósseos e ouro convida a reconsiderar o valor atribuído à matéria descartada, ao mesmo tempo que aponta para conflitos ambientais e econômicos associados ao território amazônico.',
    descEN: 'Kintsugi (2024) comprises sculptures made with Amazonian fish bones, wood and applied gold leaf. Its title refers to the Japanese practice of repairing broken ceramics, invoked here as a conceptual reference rather than necessarily as a technical procedure. Some works are displayed in wood-and-glass cases. The research draws on Jorge Feitosa\'s childhood memories of Porto Velho and on the effects of gold extraction on the Madeira River and its communities. The juxtaposition of bone fragments and gold invites a reconsideration of how discarded material is valued, while drawing attention to the environmental and economic conflicts associated with the Amazon region.',
    dimensions: 'Dimensões variadas',
    medium: 'Técnicas mistas',
    images: ['/kintsugi1.jpeg', '/kintsugi2.jpeg', '/kintsugi3.jpeg'],
    pieces: [
      {
        titlePT: 'Panapaná',
        titleEN: 'Panapaná',
        medium: 'Osso de peixe com aplicação de folha de ouro, caixa de madeira e vidro',
        dimensions: '20 × 20 × 11 cm',
        year: '2024',
      },
      {
        titlePT: 'Boca de Ouro',
        titleEN: 'Boca de Ouro',
        medium: 'Escultura em ossos de peixe com aplicação de folhas de ouro, caixa de madeira e vidro',
        dimensions: '20 × 20 × 11 cm',
        year: '2024',
      },
      {
        titlePT: 'Dente de Gado II',
        titleEN: 'Dente de Gado II',
        medium: 'Madeira esculpida com aplicação de folha de ouro',
        dimensions: '50 × 47 cm',
        year: '2024',
      },
    ],
  },
];

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
