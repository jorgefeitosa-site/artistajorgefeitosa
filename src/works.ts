export interface Piece {
  titlePT: string;
  titleEN: string;
  medium: string;
  dimensions: string;
  year: string;
}

export interface Obra {
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

export const obras: Obra[] = [
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

