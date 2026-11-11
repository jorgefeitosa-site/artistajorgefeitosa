import { TimelineItem, ExhibitionItem, CollectionItem, ProcessBlock } from './types';

export const navigationTranslations = {
  pt: {
    works: 'Obra',
    about: 'Sobre',
    biography: 'Biografia',
    exhibitions: 'Exposições',
    process: 'Processo',
    press: 'Imprensa',
    contact: 'Contato',
    toggleLang: 'EN',
  },
  en: {
    works: 'Work',
    about: 'About',
    biography: 'Biography',
    exhibitions: 'Exhibitions',
    process: 'Process',
    press: 'Press',
    contact: 'Contact',
    toggleLang: 'PT',
  }
};

export const heroTranslations = {
  pt: {
    subtitle: 'Deslocamento · memória · corpo · identidade',
    quote: 'Investigo as relações entre corpo, matéria, memória e território a partir da Amazônia.',
    scrollDown: 'Role para explorar',
  },
  en: {
    subtitle: 'Visual Artist · Amazon · Matter, Rite & Memory',
    quote: 'My work explores the relationships between body, material, memory and territory, drawing on experiences of the Amazon.',
    scrollDown: 'Scroll to explore',
  }
};

export const aboutTranslations = {
  pt: {
    seoTitle: 'Sobre Jorge Feitosa — Artista Visual Brasileiro',
    manifesto: 'A Amazônia não é cenário.\nÉ matéria, é corpo, é argumento.',
    paragraph: 'Nascido em Porto Velho, Rondônia, Jorge Feitosa trabalha com escultura, performance, fotografia e vídeo. A argila recolhida às margens do Rio Madeira, os ossos de peixes e a folha de ouro aparecem em diferentes momentos de sua produção. Sua pesquisa relaciona essas matérias à memória de infância e às transformações sociais e ambientais do território amazônico.',
  },
  en: {
    seoTitle: 'About Jorge Feitosa — Brazilian Visual Artist',
    manifesto: 'The Amazon is not a background.\nIt is matter, it is body, it is argument.',
    paragraph: 'Born in Porto Velho, Rondônia, Jorge Feitosa works across sculpture, performance, photography and video. Clay collected along the Madeira River, fish bones and gold leaf recur in different periods of his work. His practice relates these materials to childhood memories and to the social and environmental changes affecting the Amazon region.',
  }
};

export const portfolioTranslations = {
  pt: {
    seoTitle: 'Obras de Jorge Feitosa — Arte Contemporânea Brasileira',
    title: 'Galeria de Obras',
    toggleLayout: 'Mudar Layout',
    layoutHorizontal: 'Galeria Editorial (Horizontal)',
    layoutVertical: 'Grid Assimétrico (Vertical)',
    details: 'Detalhes da Obra',
    back: 'Voltar',
    close: 'Fechar',
    series: 'Série',
    location: 'Local / Acervo',
    year: 'Ano',
    category: 'Categoria',
    all: 'TODOS',
    placeholderAlt: 'Imagem conceitual de obra artística contemporânea de Jorge Feitosa baseada em texturas amazônicas, terra e ouro.',
  },
  en: {
    seoTitle: 'Artworks by Jorge Feitosa — Brazilian Contemporary Art',
    title: 'Artwork Gallery',
    toggleLayout: 'Change Layout',
    layoutHorizontal: 'Editorial Gallery (Horizontal)',
    layoutVertical: 'Asymmetrical Grid (Vertical)',
    details: 'Artwork Details',
    back: 'Back',
    close: 'Close',
    series: 'Series',
    location: 'Location / Collection',
    year: 'Year',
    category: 'Category',
    all: 'ALL',
    placeholderAlt: 'Conceptual image of contemporary artwork by Jorge Feitosa based on Amazonian textures, clay, and gold leaf.',
  }
};

export const bioTranslations = {
  pt: {
    seoTitle: 'Biografia — Jorge Feitosa, Artista Visual',
    title: 'Biografia',
    p1: 'Jorge Feitosa nasceu em Porto Velho, Rondônia. Seu pai era marceneiro e sua mãe, costureira. O convívio com esses ofícios faz parte de sua história e da atenção que dedica aos materiais.',
    p2: 'Estudou fotografia no Museu de Arte Moderna de São Paulo (2009) e Artes Visuais na Belas Artes (2013). Sua produção reúne escultura, performance, fotografia e vídeo.',
    p3: 'Baseado em São Paulo, mantém Porto Velho e o Rio Madeira como referências de pesquisa. A argila do rio, os ossos de peixes e a folha de ouro aparecem em diferentes séries, em trabalhos que investigam memória e território.',
    p4: 'Em 2016, apresentou as exposições individuais "Lágrimas de Ouro", em São Paulo, e "Navegar Es Preciso", em Havana, Cuba.',
    p5: 'Em 2022, participou da 16ª Verbo – Mostra de Performance Arte, na Galeria Vermelho. Em 2024, integrou a programação da ArtRio e do Jardim das Esculturas, na Marina da Glória, Rio de Janeiro.',
    p6: 'Em 2025, apresentou em Paris a exposição individual "Viagem – Matéria, rito e memória ancestral", vinculada à sua pesquisa sobre matéria, deslocamento e memória.',
    p7: 'Obras de Jorge Feitosa integram os acervos do Museu de Arte do Rio (MAR) e do Museu Universitário de Arte (MUnA/UFU).',
    timelineTitle: 'Linha do Tempo',
  },
  en: {
    seoTitle: 'Biography — Jorge Feitosa, Visual Artist',
    title: 'Biography',
    p1: 'Jorge Feitosa was born in Porto Velho, Rondônia. His father worked as a carpenter and his mother as a seamstress. Growing up around these trades is part of his history and informs his attention to materials.',
    p2: 'He studied photography at the Museum of Modern Art of São Paulo (2009) and visual arts at Belas Artes (2013). His practice encompasses sculpture, performance, photography and video.',
    p3: 'Based in São Paulo, he continues to draw on Porto Velho and the Madeira River as points of reference. River clay, fish bones and gold leaf appear across different series in works exploring memory and territory.',
    p4: 'In 2016, he presented the solo exhibitions "Lágrimas de Ouro" in São Paulo and "Navegar Es Preciso" in Havana, Cuba.',
    p5: 'In 2022, he took part in the 16th Verbo Performance Art Festival at Galeria Vermelho. In 2024, he participated in ArtRio and the Jardim das Esculturas exhibition at Marina da Glória, Rio de Janeiro.',
    p6: 'In 2025, he presented the solo exhibition "Viagem – Matéria, rito e memória ancestral" in Paris, continuing his research into material, displacement and memory.',
    p7: 'Works by Jorge Feitosa are held in the collections of the Museu de Arte do Rio (MAR) and the Museu Universitário de Arte (MUnA/UFU).',
    timelineTitle: 'Timeline',
  }
};

export const exhibitionsTranslations = {
  pt: {
    seoTitle: 'Exposições e Mostras — Jorge Feitosa no Brasil e no Mundo',
    title: 'Exposições e acervos',
    solosTitle: 'Exposições Individuais',
    groupsTitle: 'Exposições coletivas e participações',
    collectionsTitle: 'Acervos institucionais',
    mapTooltipHeader: 'Trajetória expositiva',
    clickPoint: 'Toque para ver detalhes',
    hoverPoint: 'Passe o cursor para ver detalhes',
  },
  en: {
    seoTitle: 'Exhibitions and Shows — Jorge Feitosa in Brazil and the World',
    title: 'Exhibitions and Collections',
    solosTitle: 'Solo Exhibitions',
    groupsTitle: 'Group Exhibitions and Participations',
    collectionsTitle: 'Institutional Collections',
    mapTooltipHeader: 'Exhibition History',
    clickPoint: 'Click to view details',
    hoverPoint: 'Hover to view details',
  }
};

export const processTranslations = {
  pt: {
    seoTitle: 'O Processo Criativo de Jorge Feitosa — Matéria, Corpo e Território',
    title: 'Processo e materiais',
  },
  en: {
    seoTitle: 'The Creative Process of Jorge Feitosa — Matter, Body and Territory',
    title: 'Process and Materials',
  }
};

export const pressTranslations = {
  pt: {
    seoTitle: 'Imprensa e Crítica — Jorge Feitosa na Mídia',
    title: 'Imprensa & Crítica de Arte',
    readFull: 'Ler matéria completa',
    clientHint: 'Espaços destinados a recortes de imprensa reais do artista. Insira aqui clippings editoriais correspondentes.',
  },
  en: {
    seoTitle: 'Press and Criticism — Jorge Feitosa in the Media',
    title: 'Press & Art Criticism',
    readFull: 'Read full article',
    clientHint: 'Spaces reserved for authentic press clippings of the artist. Place corresponding editorial clippings here.',
  }
};

export const contactTranslations = {
  pt: {
    seoTitle: 'Contato — Jorge Feitosa · Obras Disponíveis',
    title: 'Contato & Colecionismo',
    headline: 'Interesse em obra ou curadoria?',
    subtext: 'Para aquisição de obras, projetos expositivos ou residências artísticas, entre em contato através do formulário abaixo.',
    labelName: 'Seu Nome',
    labelEmail: 'Seu E-mail',
    labelInterest: 'Tipo de Interesse',
    interestAcquisition: 'Aquisição de obra',
    interestCuratorship: 'Curadoria / Exposição',
    interestPress: 'Mensagem Geral',
    interestOther: 'Outro',
    labelMessage: 'Mensagem',
    sendButton: 'Enviar Mensagem',
    sending: 'Enviando...',
    success: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
    error: 'Ocorreu um erro ao enviar. Por favor, tente novamente.',
  },
  en: {
    seoTitle: 'Contact — Jorge Feitosa · Available Artworks',
    title: 'Contact & Art Collecting',
    headline: 'Interested in artwork or curating?',
    subtext: 'For artwork acquisitions, exhibition projects, or artist residencies, please connect using the form below.',
    labelName: 'Your Name',
    labelEmail: 'Your Email',
    labelInterest: 'Type of Interest',
    interestAcquisition: 'Acquisition of artwork',
    interestCuratorship: 'Curatorship / Exhibition',
    interestPress: 'General Message',
    interestOther: 'Other inquiry',
    labelMessage: 'Your Message',
    sendButton: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully! We will get back to you shortly.',
    error: 'An error occurred while sending. Please try again.',
  }
};

export const footerTranslations = {
  pt: {
    role: 'Artista Visual · Amazônia · Matéria, Rito e Memória',
    rights: '© 2026 Jorge Feitosa · Todos os direitos reservados.',
    privacy: 'Política de Privacidade',
  },
  en: {
    role: 'Visual Artist · Amazon · Matter, Rite and Memory',
    rights: '© 2026 Jorge Feitosa · All rights reserved.',
    privacy: 'Privacy Policy',
  }
};

// Verified exhibition chronology and editorial process content are maintained below.
export const timelineList: TimelineItem[] = [
  {
    year: '2009',
    titlePT: 'Formação em Fotografia · MAM-SP',
    titleEN: 'Photography studies · MAM-SP',
    subtitlePT: 'Formação em fotografia no Museu de Arte Moderna de São Paulo.',
    subtitleEN: 'Photography studies at the Museum of Modern Art of São Paulo.'
  },
  {
    year: '2013',
    titlePT: 'Graduação em Artes Visuais · Belas Artes',
    titleEN: 'Visual Arts studies · Belas Artes',
    subtitlePT: 'Formação em Artes Visuais na Belas Artes, São Paulo.',
    subtitleEN: 'Visual arts studies at Belas Artes, São Paulo.'
  },
  {
    year: '2016',
    titlePT: 'Primeiras individuais · São Paulo e Havana',
    titleEN: 'First solo exhibitions · São Paulo & Havana',
    subtitlePT: 'Exposições individuais "Lágrimas de Ouro", em São Paulo, e "Navegar Es Preciso", em Havana.',
    subtitleEN: 'Solo exhibitions "Lágrimas de Ouro" in São Paulo and "Navegar Es Preciso" in Havana.'
  },
  {
    year: '2022',
    titlePT: 'Galeria Vermelho · 16ª Verbo Performance Arte',
    titleEN: 'Vermelho Gallery · 16th Verbo Performance Art',
    subtitlePT: 'Participação na 16ª Verbo – Mostra de Performance Arte, na Galeria Vermelho.',
    subtitleEN: 'Participation in the 16th Verbo Performance Art Festival at Galeria Vermelho.'
  },
  {
    year: '2024',
    titlePT: 'ArtRio · Jardim das Esculturas, Marina da Glória',
    titleEN: 'ArtRio · Sculpture Garden at Marina da Glória',
    subtitlePT: 'Participação na ArtRio e no Jardim das Esculturas, no Rio de Janeiro.',
    subtitleEN: 'Participation in ArtRio and Jardim das Esculturas in Rio de Janeiro.'
  },
  {
    year: '2025',
    titlePT: 'Individual em Paris · "Viagem – Matéria, rito e memória ancestral"',
    titleEN: 'Paris Solo Exhibition · "Journey – Matter, rite, and ancestral memory"',
    subtitlePT: 'Exposição individual "Viagem – Matéria, rito e memória ancestral", em Paris.',
    subtitleEN: 'Solo exhibition "Viagem – Matéria, rito e memória ancestral" in Paris.'
  }
];

export const soloExhibitions: ExhibitionItem[] = [
  {
    year: '2025',
    titlePT: '"Viagem – Matéria, rito e memória ancestral"',
    titleEN: '"Journey – Matter, rite, and ancestral memory"',
    locationPT: 'Paris, França',
    locationEN: 'Paris, France'
  },
  {
    year: '2016',
    titlePT: '"Lágrimas de Ouro"',
    titleEN: '"Tears of Gold"',
    locationPT: 'São Paulo, Brasil',
    locationEN: 'São Paulo, Brazil'
  },
  {
    year: '2016',
    titlePT: '"Navegar Es Preciso"',
    titleEN: '"To Sail is Necessary"',
    locationPT: 'Havana, Cuba',
    locationEN: 'Havana, Cuba'
  }
];

export const groupExhibitions: ExhibitionItem[] = [
  {
    year: '2025',
    titlePT: 'Mappa Dell\'arte Nuova – Imago · Fondazione Giorgio Cini',
    titleEN: 'Mappa Dell\'arte Nuova – Imago · Giorgio Cini Foundation',
    locationPT: 'Veneza, Itália',
    locationEN: 'Venice, Italy'
  },
  {
    year: '2024',
    titlePT: 'ArtRio – Brasil Contemporâneo',
    titleEN: 'ArtRio – Contemporary Brazil',
    locationPT: 'Rio de Janeiro, Brasil',
    locationEN: 'Rio de Janeiro, Brazil'
  },
  {
    year: '2024',
    titlePT: 'Jardim das Esculturas · Marina da Glória',
    titleEN: 'Sculpture Garden · Marina da Glória',
    locationPT: 'Rio de Janeiro, Brasil',
    locationEN: 'Rio de Janeiro, Brazil'
  },
  {
    year: '2022',
    titlePT: '16ª Verbo – Mostra de Performance Arte · Galeria Vermelho',
    titleEN: '16th Verbo – Performance Art Exhibition · Vermelho Gallery',
    locationPT: 'São Paulo, Brasil',
    locationEN: 'São Paulo, Brazil'
  },
  {
    year: '2017',
    titlePT: 'Presença Permeável · Praça das Artes',
    titleEN: 'Permeable Presence · Praça das Artes',
    locationPT: 'São Paulo, Brasil',
    locationEN: 'São Paulo, Brazil'
  }
];

export const permanentCollections: CollectionItem[] = [
  {
    institutionPT: 'Museu de Arte do Rio — MAR/RJ',
    institutionEN: 'Rio Art Museum — MAR/RJ',
    locationPT: 'Rio de Janeiro, Brasil',
    locationEN: 'Rio de Janeiro, Brazil'
  },
  {
    institutionPT: 'MUnA – Museu Universitário de Arte (IARTE/UFU/MG)',
    institutionEN: 'MUnA – University Art Museum (IARTE/UFU/MG)',
    locationPT: 'Uberlândia, Brasil',
    locationEN: 'Uberlândia, Brazil'
  }
];

export const processBlocksList: ProcessBlock[] = [
  {
    id: 'process-1',
    titlePT: 'Da argila do Rio Madeira à folha de ouro',
    titleEN: 'From Madeira River clay to gold leaf',
    subtitlePT: 'A Matéria',
    subtitleEN: 'The Matter',
    text1PT: 'A argila recolhida às margens do Rio Madeira, em Rondônia, integra a prática de Jorge Feitosa como matéria de trabalho. Seu uso aproxima a superfície das obras da experiência do artista em Porto Velho e da geografia do rio.',
    text1EN: 'Clay collected along the Madeira River in Rondônia is part of Jorge Feitosa\'s material practice. Its use connects the surfaces of his works to his experience of Porto Velho and to the river\'s geography.',
    text2PT: 'Em outras obras, ossos e espinhas de peixes, madeira e folha de ouro passam a integrar esculturas e instalações. A escolha desses materiais orienta uma pesquisa sobre descarte, permanência e atribuição de valor.',
    text2EN: 'Elsewhere in his work, fish bones, wood and gold leaf become elements of sculptures and installations. These materials frame questions about disposal, what remains and how value is assigned.',
    imageAltPT: 'Registro do trabalho de Jorge Feitosa com materiais utilizados em suas obras.',
    imageAltEN: 'Documentation of Jorge Feitosa\'s work with materials used in his artworks.',
    materialColor: 'bg-gradient-to-br from-amber-950 via-amber-900 to-amber-700',
    materialNamePT: 'Argila & Ouro',
    materialNameEN: 'Clay & Gold'
  },
  {
    id: 'process-2',
    titlePT: 'O corpo como suporte e ação',
    titleEN: 'The body as support and action',
    subtitlePT: 'O Corpo',
    subtitleEN: 'The Body',
    text1PT: 'Nas performances, o corpo participa diretamente da elaboração da obra. Gestos, movimentos e o contato com materiais são parte do processo artístico e podem permanecer documentados em fotografia e vídeo.',
    text1EN: 'In Feitosa\'s performances, the body takes an active part in making the work. Gesture, movement and contact with materials form part of the artistic process and may be documented through photography and video.',
    text2PT: 'Essa prática investiga a relação entre experiência física e território. O que o corpo faz e as marcas deixadas pela ação constituem elementos da pesquisa do artista.',
    text2EN: 'This practice examines the relationship between physical experience and territory. Bodily actions and the traces they leave are central to the artist\'s research.',
    imageAltPT: 'Registro fotográfico de uma performance de Jorge Feitosa.',
    imageAltEN: 'Photographic documentation of a performance by Jorge Feitosa.',
    materialColor: 'bg-gradient-to-tr from-[#1C1510] via-neutral-900 to-[#3C3025]',
    materialNamePT: 'Corpo e terra',
    materialNameEN: 'Body and earth'
  },
  {
    id: 'process-3',
    titlePT: 'Folha de ouro sobre ossos de peixe',
    titleEN: 'Gold leaf on fish bones',
    subtitlePT: 'Matéria e valor',
    subtitleEN: 'Material and value',
    text1PT: 'Na série Kintsugi, fragmentos ósseos de peixes amazônicos recebem aplicações de folha de ouro. Algumas obras são apresentadas em caixas de madeira e vidro, em uma disposição que aproxima escultura e objeto de coleção.',
    text1EN: 'In the Kintsugi series, fragments of Amazonian fish bones receive applications of gold leaf. Some works are presented in wooden and glass cases, in arrangements that bring sculpture and collected objects into proximity.',
    text2PT: 'O contraste entre osso e ouro remete às histórias de extração mineral presentes na memória do Rio Madeira. A série examina a mudança de valor de uma matéria descartada quando passa a ser preservada e exposta.',
    text2EN: 'The contrast between bone and gold recalls the history of mineral extraction associated with the Madeira River. The series considers how the perceived value of discarded material changes when it is preserved and displayed.',
    imageAltPT: 'Detalhe de obra com osso de peixe e aplicação de folha de ouro.',
    imageAltEN: 'Detail of an artwork using fish bone and applied gold leaf.',
    materialColor: 'bg-gradient-to-r from-[#856526] via-[#C5A25D] to-[#4A3916]',
    materialNamePT: 'Ouro & Osso',
    materialNameEN: 'Gold & Bone'
  },
  {
    id: 'process-4',
    titlePT: 'Da Amazônia a outros contextos expositivos',
    titleEN: 'From the Amazon to other exhibition contexts',
    subtitlePT: 'Território e circulação',
    subtitleEN: 'Territory and circulation',
    text1PT: 'Nascido em Porto Velho e baseado em São Paulo, Jorge Feitosa apresentou sua produção em cidades como Havana e Paris. A circulação das obras amplia os contextos em que materiais e referências amazônicas são observados e interpretados.',
    text1EN: 'Born in Porto Velho and based in São Paulo, Jorge Feitosa has shown his work in cities including Havana and Paris. These exhibitions place Amazonian materials and references in different contexts of viewing and interpretation.',
    text2PT: 'As transformações ambientais da região e as consequências da exploração de seus recursos atravessam sua pesquisa. Mesmo quando expostas longe do Rio Madeira, as obras conservam vínculos com as experiências e os materiais que lhes deram origem.',
    text2EN: 'Environmental change and the consequences of resource extraction are recurring concerns in his practice. Even when exhibited far from the Madeira River, the works remain connected to the experiences and materials from which they emerged.',
    imageAltPT: 'Registro relacionado à pesquisa de Jorge Feitosa sobre a Amazônia.',
    imageAltEN: 'Documentation associated with Jorge Feitosa\'s research on the Amazon.',
    materialColor: 'bg-gradient-to-b from-neutral-900 to-[#12100E]',
    materialNamePT: 'Circulação e território',
    materialNameEN: 'Circulation and territory'
  }
];
