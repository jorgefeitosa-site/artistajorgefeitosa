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
    descPT: 'A série Disparo investiga as relações entre identidade, memória, enraizamento e violência a partir da realidade amazônica. Inspiradas pelo impacto do garimpo ilegal e da grilagem sobre os povos indígenas, as esculturas em cerâmica transformam a argila em vestígios simbólicos de corpos e territórios feridos. As marcas do gesto, a materialidade do barro e o contraste entre esmaltes preto e branco evocam cicatrizes, contaminação e resistência, propondo uma reflexão sobre a permanência da memória ancestral diante da destruição ambiental e humana.',
    descEN: 'The Disparo series investigates the relationships between identity, memory, rootedness and violence from the Amazonian reality. Inspired by the impact of illegal mining and land-grabbing on indigenous peoples, the ceramic sculptures transform clay into symbolic vestiges of wounded bodies and territories. The marks of gesture, the materiality of clay, and the contrast between black and white glazes evoke scars, contamination and resistance, proposing a reflection on the permanence of ancestral memory in the face of environmental and human destruction.',
    dimensions: 'Dimensões variadas',
    medium: 'Cerâmica esmaltada',
    images: ['/disparo1.jpeg', '/disparo2.jpeg', '/disparo3.jpeg'],
  },
  {
    id: 'obra-02',
    titlePT: 'Os que habitam o silêncio',
    titleEN: 'Those Who Inhabit Silence',
    year: '2026',
    descPT: 'Nas máscaras O Guardião, Eco do Abismo e Observador Silencioso, Jorge Feitosa explora a potência expressiva da argila por meio de uma manipulação direta e vigorosa do barro, preservando em suas superfícies os gestos do fazer. Associadas a uma prática milenar, essas formas entram em confluência com suportes estruturais e um dispositivo sonoro que deslocam sua leitura para um território híbrido, entre o ancestral e o tecnológico. O assobio que atravessa o espaço expositivo surpreende o visitante e intensifica esse estranhamento, oscilando entre sopro e ruído, presença e máquina. As obras aproximam diferentes temporalidades sem opô-las, sugerindo que técnicas ancestrais e tecnologias contemporâneas coexistem como dimensões de uma mesma experiência poética.',
    descEN: 'In the masks O Guardião, Eco do Abismo and Observador Silencioso, Jorge Feitosa explores the expressive power of clay through a direct and vigorous manipulation of the material, preserving the gestures of making on their surfaces. Associated with a millenary practice, these forms converge with structural supports and a sound device that shift their reading to a hybrid territory, between the ancestral and the technological. The whistle that crosses the exhibition space surprises the visitor and intensifies this strangeness, oscillating between breath and noise, presence and machine. The works bring different temporalities together without opposing them, suggesting that ancestral techniques and contemporary technologies coexist as dimensions of the same poetic experience.',
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
    descPT: 'Kintsugi (2024) emerge do encontro entre memória, matéria e reparação. A série reúne esculturas construídas a partir de ossos de peixes nativos da Amazônia, madeira e folhas de ouro, apropriando-se do nome da técnica japonesa de restauração de cerâmicas quebradas para deslocar seu sentido em direção ao território amazônico. Ao recompor fragmentos de um corpo que já existiu, as obras transformam vestígios em permanência e atribuem novo valor ao que foi descartado. A pesquisa parte de memórias da minha infância em Porto Velho (RO), durante o auge do garimpo no Rio Madeira, e da compreensão posterior dos impactos da exploração do ouro sobre os rios, as populações ribeirinhas e os povos indígenas, cuja sobrevivência depende diretamente desses ecossistemas. O ouro, símbolo histórico de riqueza, torna-se aqui um elemento de tensão, enquanto as esculturas em madeira evocam a devastação da floresta impulsionada pela expansão da agropecuária. Acondicionadas em caixas de madeira que remetem simultaneamente a vitrines de museus de história natural e relicários, as obras apresentam esses fragmentos como testemunhos de um território em permanente disputa, propondo uma reflexão sobre memória, perda e resistência na Amazônia.',
    descEN: 'Kintsugi (2024) emerges from the encounter between memory, matter and repair. The series brings together sculptures built from bones of Amazonian native fish, wood and gold leaf, appropriating the name of the Japanese technique of restoring broken ceramics to shift its meaning toward the Amazonian territory. By recomposing fragments of a body that once existed, the works transform vestiges into permanence and attribute new value to what was discarded. The research departs from memories of childhood in Porto Velho (RO), during the height of gold mining on the Madeira River, and from the subsequent understanding of the impacts of gold extraction on rivers, riverside communities and indigenous peoples, whose survival depends directly on these ecosystems. Gold, a historical symbol of wealth, becomes here an element of tension, while the wooden sculptures evoke the devastation of the forest driven by the expansion of agribusiness.',
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
            alt={'Foto ' + String(index + 1)}
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
    <section id="portfolio" className="relative w-full bg-white py-24 md:py-32">
      <h2 className="sr-only">{t.label} — Jorge Feitosa</h2>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-black tracking-widest uppercase block mb-2">{t.label}</span>
          <h3 className="font-serif text-3xl md:text-5xl text-black font-light tracking-wide">{t.title}</h3>
        </div>
      </div>

      {/* Works list */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28">
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
