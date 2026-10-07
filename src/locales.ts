import { Artwork, TimelineItem, ExhibitionItem, CollectionItem, ProcessBlock, PressClipping } from './types';

export const navigationTranslations = {
  pt: {
    works: 'Obra',
    about: 'Quem é',
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
    quote: 'Investigo identidade, memória e território entre a Amazônia e a arte contemporânea',
    scrollDown: 'Role para explorar',
  },
  en: {
    subtitle: 'Visual Artist · Amazon · Matter, Rite & Memory',
    quote: 'I investigate identity, memory and territory between the Amazon and contemporary art',
    scrollDown: 'Scroll to explore',
  }
};

export const aboutTranslations = {
  pt: {
    seoTitle: 'Sobre Jorge Feitosa — Artista Visual Brasileiro',
    manifesto: 'A Amazônia não é cenário.\nÉ matéria, é corpo, é argumento.',
    paragraph: 'Jorge Feitosa é artista visual nascido em Porto Velho, Rondônia. Seu trabalho não representa a floresta — ele é feito dela. Da argila do Rio Madeira ao ouro, dos ossos de peixe à performance do próprio corpo, Feitosa constrói uma cartografia visceral que inverte o olhar colonial: a Amazônia que ocupa o mundo, não a que é explorada por ele.',
  },
  en: {
    seoTitle: 'About Jorge Feitosa — Brazilian Visual Artist',
    manifesto: 'The Amazon is not a background.\nIt is matter, it is body, it is argument.',
    paragraph: 'Jorge Feitosa is a visual artist born in Porto Velho, Rondônia. His work does not represent the forest — it is made from it. From the clay of the Madeira River to gold leaf, from fish bones to the performance of his own body, Feitosa builds a visceral cartography that inverts the colonial gaze: the Amazon that occupies the world, rather than being exploited by it.',
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
    p1: 'Jorge Feitosa nasceu em Porto Velho, capital de Rondônia, filho de marceneiro e costureira — duas formas de transformar matéria com as mãos. Essa herança artesanal atravessa toda a sua prática artística.',
    p2: 'Graduado em Artes Visuais pela Escola de Belas Artes (2013) e formado em fotografia pelo MAM-SP (2009), construiu uma linguagem que une performance, escultura, fotografia e vídeo para interrogar temas como identidade, deslocamento e enraizamento.',
    p3: 'Baseado em São Paulo, mantém um elo constante com a Amazônia — não como memória saudosista, mas como material vivo. A argila do Rio Madeira é pigmento. As espinhas do peixe são escultura. O corpo do artista é território.',
    p4: 'Em 2016, suas primeiras exposições individuais — "Lágrimas de Ouro" (São Paulo) e "Navegar Es Preciso" (Havana, Cuba) — já anunciavam a escala internacional de sua investigação.',
    p5: 'Em 2022, integrou a 16ª Verbo – Mostra de Performance Arte na Galeria Vermelho. Em 2024, participou da ArtRio (programa Brasil Contemporâneo) e do Jardim das Esculturas na Marina da Glória, Rio de Janeiro.',
    p6: 'Em 2025, levou sua individual "Viagem – Matéria, rito e memória ancestral" a Paris, França — invertendo a rota colonial: a Amazônia que ocupa os centros globais, não a que é deles extraída.',
    p7: 'Seu trabalho integra os acervos permanentes do Museu de Arte do Rio (MAR/RJ) e do MUnA – Museu Universitário de Arte (IARTE/UFU/MG).',
    timelineTitle: 'Linha do Tempo',
  },
  en: {
    seoTitle: 'Biography — Jorge Feitosa, Visual Artist',
    title: 'Biography',
    p1: 'Jorge Feitosa was born in Porto Velho, capital of Rondônia, the son of a carpenter and a seamstress — two organic ways of shaping matter using one\'s hands. This inherited craftsman heritage flows through his entire artistic practice.',
    p2: 'Graduated in Visual Arts from the School of Fine Arts (2013) and trained in photography at MAM-SP (2009), he built an artistic language bridging performance, sculpture, photography, and video to interrogate themes of identity, displacement, and deep-seated roots.',
    p3: 'Based in São Paulo, he maintains an unbroken bond with the Amazon—not as a nostalgic memory, but as raw, living matter. Clay from the Madeira River is pigment. Fish bones are sculpture. The body of the artist is territory itself.',
    p4: 'In 2016, his first solo exhibitions — "Lágrimas de Ouro" (São Paulo) and "Navegar Es Preciso" (Havana, Cuba) — heralded the international scale of his visceral investigations.',
    p5: 'In 2022, he participated in the 16th Verbo – Performance Art Exhibition at Galeria Vermelho. In 2024, he took part in ArtRio (Brasil Contemporâneo program) and the Sculptures Garden at Marina da Glória, Rio de Janeiro.',
    p6: 'In 2025, he brought his solo exhibition "Viagem – Matéria, rito e memória ancestral" to Paris, France — inverting the historical colonial route: the Amazon occupying global centers, rather than being extracted by them.',
    p7: 'His work is part of the permanent collections of the Rio Art Museum (MAR/RJ) and MUnA – University Art Museum (IARTE/UFU/MG).',
    timelineTitle: 'Timeline',
  }
};

export const exhibitionsTranslations = {
  pt: {
    seoTitle: 'Exposições e Mostras — Jorge Feitosa no Brasil e no Mundo',
    title: 'Exposições & Mapas de Presença',
    solosTitle: 'Exposições Individuais',
    groupsTitle: 'Exposições e Mostras Coletivas',
    collectionsTitle: 'Acervos Permanentes',
    mapTooltipHeader: 'Presença Artística',
    clickPoint: 'Toque para ver detalhes',
    hoverPoint: 'Passe o cursor para ver detalhes',
  },
  en: {
    seoTitle: 'Exhibitions and Shows — Jorge Feitosa in Brazil and the World',
    title: 'Exhibitions & Presence Maps',
    solosTitle: 'Solo Exhibitions',
    groupsTitle: 'Group Exhibitions & Group Shows',
    collectionsTitle: 'Permanent Collections',
    mapTooltipHeader: 'Artistic Presence',
    clickPoint: 'Click to view details',
    hoverPoint: 'Hover to view details',
  }
};

export const processTranslations = {
  pt: {
    seoTitle: 'O Processo Criativo de Jorge Feitosa — Matéria, Corpo e Território',
    title: 'O Processo.',
  },
  en: {
    seoTitle: 'The Creative Process of Jorge Feitosa — Matter, Body and Territory',
    title: 'The Process.',
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

// Data models containing the specific works and exhibitions requested
export const artworksList: Artwork[] = [
  {
    id: 'lagrimas-de-ouro',
    titlePT: 'Lágrimas de Ouro',
    titleEN: 'Tears of Gold',
    year: '2016',
    mediumPT: 'Performance e Escultura (Argila do Rio Madeira e Folha de Ouro)',
    mediumEN: 'Performance and Sculpture (Madeira River Clay and Gold Leaf)',
    seriesPT: 'Lágrimas de Ouro',
    seriesEN: 'Tears of Gold',
    locationPT: 'São Paulo, Brasil',
    locationEN: 'São Paulo, Brazil',
    category: 'performance',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop',
    dimensions: 'Dimensões variáveis',
    altPT: 'Performance Lágrimas de Ouro por Jorge Feitosa - argila vermelha, expressão corporal profunda e adornos dourados contrastantes.',
    altEN: 'Lágrimas de Ouro performance by Jorge Feitosa - red clay, deep bodily expression, and contrasting gold leaf adornments.',
    descriptionPT: 'Investigação visceral sobre a sobreposição de valores: a folha de ouro aplicada ao rastro terroso da argila do Rio Madeira, contrastando o luxo colonial com a terra espoliada.',
    descriptionEN: 'A visceral investigation on the overlaying of values: gold leaf applied to the earthy trail of the Madeira River clay, contrasting colonial luxury with despoiled ground.'
  },
  {
    id: 'navegar-es-preciso',
    titlePT: 'Navegar Es Preciso',
    titleEN: 'To Sail is Necessary',
    year: '2016',
    mediumPT: 'Instalacão e Fotografia (Madeira e Cordas)',
    mediumEN: 'Installation and Photography (Wood and Ropes)',
    seriesPT: 'Navegar Es Preciso',
    seriesEN: 'Navegar Es Preciso',
    locationPT: 'Individual, Havana, Cuba',
    locationEN: 'Solo exhibition, Havana, Cuba',
    category: 'instalacao',
    imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop',
    dimensions: '300cm x 150cm x 220cm',
    altPT: 'Instalação de vanguarda com fragmentos de madeira antiga de demolição dispostos em simetria poética suspensos por fios metálicos.',
    altEN: 'Avant-garde installation with fragments of reclaimed aged wood arranged in poetic symmetry suspended by metallic wires.',
    descriptionPT: 'Exposição individual que explora a travessia das águas fluviais amazônicas até os mares caribenhos. Metáfora de desterro, conexões ancestrais e a carcaça de embarcações artesanais.',
    descriptionEN: 'Solo exhibition exploring the crossing from Amazonian river waters to Caribbean seas. A metaphor for exile, ancestral connections, and the skeleton of hand-crafted wooden boats.'
  },
  {
    id: 'materia-ancestral-2025',
    titlePT: 'Viagem — Matéria, rito e memória ancestral',
    titleEN: 'Journey — Matter, rite, and ancestral memory',
    year: '2025',
    mediumPT: 'Escultura e Instalação (Espinhas de peixe, argila e ouro)',
    mediumEN: 'Sculpture and Installation (Fish bones, clay, and gold)',
    seriesPT: 'Viagem Ancestral',
    seriesEN: 'Ancestral Journey',
    locationPT: 'Individual, Paris, França',
    locationEN: 'Solo exhibition, Paris, France',
    category: 'escultura',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    dimensions: '180cm de altura',
    altPT: 'Escultura esbelta combinando uma coluna de argila negra fosca cercada por uma espiral de espinhas de peixe Pirarucu polidas e detalhes dourados.',
    altEN: 'Slender sculpture combining a matte black clay column encircled by a spiral of polished Pirarucu fish bones and golden leaf accents.',
    descriptionPT: 'Apresentada em Paris, esta obra inverte deliberadamente a rota de espoliação: a Amazônia que ocupa o coração da Europa, impondo seus ritos, segredos e matéria orgânica viva.',
    descriptionEN: 'Presented in Paris, this artwork deliberately inverts the route of historical extraction: the Amazon occupying the heart of Europe, imposing its rites, secrets, and living organic matter.'
  },
  {
    id: 'rio-madeira-clay',
    titlePT: 'Série com Argila do Rio Madeira II',
    titleEN: 'Rio Madeira Clay Series II',
    year: '2019',
    mediumPT: 'Pintura Escultórica (Argila do Rio Madeira sobre tela e linho)',
    mediumEN: 'Sculptural Painting (Madeira River clay on canvas and linen)',
    seriesPT: 'Retorno à Terra',
    seriesEN: 'Return to the Soil',
    locationPT: 'Acervo Museu de Arte do Rio (MAR/RJ)',
    locationEN: 'Permanent Collection Rio Art Museum (MAR/RJ)',
    category: 'escultura',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop',
    altPT: 'Textura tridimensional em relevo craquelado de argila pura vermelha-marrom com sutis linhas de folha de ouro brotando das fendas.',
    altEN: 'Three-dimensional textured craquelure of pure reddish-brown clay with subtle streaks of gold leaf surging from the fissures.',
    descriptionPT: 'A própria pele da floresta sob ataque. A lama seca do Rio Madeira torna-se suporte pictórico, lembrando o impacto das barragens, mas imortalizada como memória sagrada nas paredes do museu.',
    descriptionEN: 'The very skin of the forest under distress. Drought clay from the Madeira River turns into a pictorial support, remembering dam impacts, yet immortalized as sacred memory on museum walls.'
  },
  {
    id: 'ossadas-peixe',
    titlePT: 'Relíquias das Águas Silenciosas',
    titleEN: 'Relics of the Silent Waters',
    year: '2021',
    mediumPT: 'Escultura de Mesa (Espinhas e ossos de pirarucu e cabo de jacarandá)',
    mediumEN: 'Tabletop Sculpture (Pirarucu bones and vertebrae, Brazilian rosewood handle)',
    seriesPT: 'Arqueologia das Águas',
    seriesEN: 'Water Archaeology',
    locationPT: 'MUnA – Museu Universitário de Arte (IARTE/UFU/MG)',
    locationEN: 'MUnA – University Art Museum (IARTE/UFU/MG)',
    category: 'escultura',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
    dimensions: '45cm x 60cm x 30cm',
    altPT: 'Escultura ritualística feita de ossos cranianos e vértebras de peixes amazônicos de grande porte, limpos e fixados em base escura de jacarandá.',
    altEN: 'Ritualistic sculpture made of cleaned skull bones and vertebrae of large Amazonian fish, mounted on a dark rosewood base.',
    descriptionPT: 'Uso de matérias descartadas pela pesca tradicional na comunidade de ribeirinhos. O osso, a estrutura oculta que sustentou a vida no rio, é consagrado como arquitetura de luz.',
    descriptionEN: 'Sourced from traditional fishing waste in riverine communities. The bone, the hidden structural design that sustained river life, is consecrated as a luminous architecture.'
  },
  {
    id: 'performance-corpo-territorio',
    titlePT: 'Geografia do Pertencimento',
    titleEN: 'Geography of Belonging',
    year: '2023',
    mediumPT: 'Fotografia Fine Art (Registro de Ação)',
    mediumEN: 'Fine Art Photography (Action Recording)',
    seriesPT: 'Corpo-Território',
    seriesEN: 'Body-Territory',
    locationPT: 'Galeria Vermelho, São Paulo',
    locationEN: 'Vermelho Gallery, São Paulo',
    category: 'fotografia',
    imageUrl: 'https://images.unsplash.com/photo-1501472312651-726afd116ff1?q=80&w=1200&auto=format&fit=crop',
    altPT: 'Fotografia em tons de terra do artista com o torso coberto de pigmento de argila natural, mesclando-se com troncos de árvores amazônicas.',
    altEN: 'Earthy-toned photograph of the artist with his torso covered in natural clay pigment, blending seamlessly into Amazonian tree trunks.',
    descriptionPT: 'Registro em altíssima resolução da performance realizada nas margens do Rio Madeira. O corpo do artista, imerso nas fendas da argila seca, propunha uma fusão profunda contra a dissociação ecológica.',
    descriptionEN: 'High-resolution archival record of the performance presented on the margins of the Madeira River. The artist’s body, integrated into the dry clay fissures, proposed a profound fusion counteracting ecological dissociation.'
  }
];

export const timelineList: TimelineItem[] = [
  {
    year: '2009',
    titlePT: 'Formação em Fotografia · MAM-SP',
    titleEN: 'Photography Specialization · MAM-SP',
    subtitlePT: 'Museu de Arte Moderna de São Paulo. Início da pesquisa do olhar.',
    subtitleEN: 'Modern Art Museum of São Paulo. Starting the exploration of the visual gaze.'
  },
  {
    year: '2013',
    titlePT: 'Graduação em Artes Visuais · Belas Artes',
    titleEN: 'BFA in Visual Arts · Belas Artes',
    subtitlePT: 'Escola de Belas Artes de São Paulo. Desenvolvimento da prática multi-meio.',
    subtitleEN: 'School of Fine Arts of São Paulo. Developing multi-medium practices.'
  },
  {
    year: '2016',
    titlePT: 'Primeiras individuais · São Paulo e Havana',
    titleEN: 'First solo exhibitions · São Paulo & Havana',
    subtitlePT: 'Apresentação pública de "Lágrimas de Ouro" e "Navegar Es Preciso" em Cuba.',
    subtitleEN: 'Public debut of "Lágrimas de Ouro" and "To Sail is Necessary" in Cuba.'
  },
  {
    year: '2022',
    titlePT: 'Galeria Vermelho · 16ª Verbo Performance Arte',
    titleEN: 'Vermelho Gallery · 16th Verbo Performance Art',
    subtitlePT: 'Inserção na principal mostra brasileira de arte performativa contemporânea.',
    subtitleEN: 'Insertion in Brazil’s primary contemporary performance art showcase.'
  },
  {
    year: '2024',
    titlePT: 'ArtRio · Jardim das Esculturas, Marina da Glória',
    titleEN: 'ArtRio · Sculpture Garden at Marina da Glória',
    subtitlePT: 'Curadoria especial "Brasil Contemporâneo" e exposição monumental ao ar livre.',
    subtitleEN: 'Special curatorship "Brasil Contemporâneo" and monumental open-air displays.'
  },
  {
    year: '2025',
    titlePT: 'Individual em Paris · "Viagem – Matéria, rito e memória ancestral"',
    titleEN: 'Paris Solo Exhibition · "Journey – Matter, rite, and ancestral memory"',
    subtitlePT: 'Inversão da rota colonial de extração ao expor as memórias da floresta diretamente na Europa.',
    subtitleEN: 'Inverting the colonial extraction route by exhibiting the forest’s memory directly to Europe.'
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
    titlePT: 'Da argila do Rio Madeira ao ouro.',
    titleEN: 'From Madeira River clay to gold leaf.',
    subtitlePT: 'A Matéria',
    subtitleEN: 'The Matter',
    text1PT: 'O trabalho começa antes do atelier. Começa no rio. A argila coletada manualmente nas margens do Rio Madeira em Rondônia torna-se nosso pigmento base primordial — não por simbolismo poético distante, mas por honestidade intrínseca à terra.',
    text1EN: 'The work starts long before the studio. It starts right at the river. Clay hand-harvested from the shores of the Madeira River in Rondônia becomes our primal base pigment — not as a distant poetic symbolism, but as visceral honesty with the land.',
    text2PT: 'Ossos de peixes como tambaqui e pirarucu, escamas colossais e troncos de demolição. O que a civilização moderna descarta, o rito consagra como obra sagrada. O lixo que vira o mais supremo luxo espiritual.',
    text2EN: 'Bones of native fish such as tambaqui and pirarucu, colossal scales, and structures of demised woods. What modern civilization discards, the artistic rite consecrates as sacred reliquary. Reclaiming waste into spiritual gold.',
    imageAltPT: 'Mãos calejadas esculpindo argila crua vermelho-escura misturada com folhas de ouro reluzentes.',
    imageAltEN: 'Calloused hands shaping raw reddish-dark clay mixed with sparkling fragments of fine gold leaf.',
    materialColor: 'bg-gradient-to-br from-amber-950 via-amber-900 to-amber-700',
    materialNamePT: 'Argila & Ouro',
    materialNameEN: 'Clay & Gold'
  },
  {
    id: 'process-2',
    titlePT: 'O artista é o primeiro suporte.',
    titleEN: 'The artist is the primal support.',
    subtitlePT: 'O Corpo',
    subtitleEN: 'The Body',
    text1PT: 'Na performance física, o corpo de Jorge Feitosa não finge, não encena: ele age de fato. Ele testa e imprime na própria pele e músculos o que propõe ao debate do mundo global.',
    text1EN: 'In raw physical performance, the body of Jorge Feitosa does not act or pretend: it takes physical action. He tests and imprints upon his own flesh and muscles what he proposes to the world.',
    text2PT: 'A simbiose absoluta com a floresta e o rio, a resistência física extrema ao calor e à lama, as cicatrizes conscientes e a herança rítmica inscrita na carne: corpo como manifesto vivo, território insubmisso.',
    text2EN: 'The absolute symbiosis with forest and river, extreme physical endurance to heat and soil, conscious marks, and rhythmic heritage written in tissue: the body acting as a living manifesto, an unyielding territory.',
    imageAltPT: 'Performance expressionista mostrando o artista com as costas curvadas cobertas de poeira terrosa brilhando sob luz solar dramática.',
    imageAltEN: 'Expressionist performance showing the artist with bent back covered in golden earthy soil dust shining under dramatic sunlight.',
    materialColor: 'bg-gradient-to-tr from-[#1C1510] via-neutral-900 to-[#3C3025]',
    materialNamePT: 'Flesh & Dirt',
    materialNameEN: 'Flesh & Dirt'
  },
  {
    id: 'process-3',
    titlePT: 'Ouro sobre osso. Luxo sobre lixo.',
    titleEN: 'Gold over bone. Luxury over waste.',
    subtitlePT: 'A Subversão Histórica',
    subtitleEN: 'The Historical Subversion',
    text1PT: 'A fulgurante folha de ouro de 24 quilates aplicada meticulosamente aos ossados descartados não é uma ironia estética fácil — é uma inversão deliberada, violenta e poética de valores históricos.',
    text1EN: 'The brilliant 24-carat gold leaf meticulously detailed over discarded fishing bones is not an easy aesthetic irony — it represents a deliberate, violent, and poetic inversion of historic values.',
    text2PT: 'O que a sociedade colonialista e extrativista devasta e rejeita, o artista entroniza como relíquia de altar. O que a história oficial eurocêntrica tentou apagar na violência, a obra de arte contemporânea recupera e dignifica.',
    text2EN: 'What colonial and extractivist societies devastate and reject, the artist elevates to a cathedral reliquary. What the official Eurocentric narrative attempted to erase through violence, contemporary art restores with dignity.',
    imageAltPT: 'Foco detalhado em uma vértebra de peixe pirarucu adornada com folhas de ouro cintilantes, disposta sobre veludo escuro.',
    imageAltEN: 'Detailed focus on a massive Pirarucu fish vertebra adorned with sparkling gold leaf design elements, lying on a dark velvet surface.',
    materialColor: 'bg-gradient-to-r from-[#856526] via-[#C5A25D] to-[#4A3916]',
    materialNamePT: 'Ouro & Osso',
    materialNameEN: 'Gold & Bone'
  },
  {
    id: 'process-4',
    titlePT: 'A floresta que ocupa o mundo.',
    titleEN: 'The forest occupying the globe.',
    subtitlePT: 'A Amazônia Política',
    subtitleEN: 'The Political Amazon',
    text1PT: 'De Porto Velho direto aos salões seculares de Paris, o trabalho de Jorge Feitosa subverte radicalmente as rotas tradicionais da exploração e do silenciamento geográfico.',
    text1EN: 'From Porto Velho directly to the secular galleries of Paris, Jorge Feitosa\'s creation radically subverts traditional routes of geographical exploitation and erasure.',
    text2PT: 'Ele não envia a Amazônia para ser consumida passivamente de forma exótica pelo norte global; ele traz a denúncia material, a altivez amazônida e o sagrado como uma provocadora barreira ética contra a ruína ecológica.',
    text2EN: 'He does not ship the Amazon to be passively and exotically consumed by the Global North; he delivers material denunciation, sovereign Amazonian pride, and the sacred as a provocative ethical boundary to ecological ruin.',
    imageAltPT: 'Fachada externa ou sala de galeria elegante em Paris contendo esculturas imponentes cercadas de luz intimista rústica.',
    imageAltEN: 'External view or minimalist gallery space in Paris displaying monumental sculptures surrounded by raw intimate lighting.',
    materialColor: 'bg-gradient-to-b from-neutral-900 to-[#12100E]',
    materialNamePT: 'Caminho Colonial Cruzado',
    materialNameEN: 'Crossed Colonial Path'
  }
];

export const pressClippingsList: PressClipping[] = [
  {
    id: 'clipping-1',
    source: 'Le Monde / Art Review',
    quotePT: '"Jorge Feitosa arrasta a materialidade crua da Amazônia para os salões parisienses sem dar espaço para o exotismo de consumo. É uma arte de confronto e beleza assustadora."',
    quoteEN: '"Jorge Feitosa drags the raw materiality of the Amazon into Parisian salons without yielding space to consumerist exoticism. It is an art born of confrontation and frightening beauty."',
    authorPT: 'Antoine Debray',
    authorEN: 'Antoine Debray'
  },
  {
    id: 'clipping-2',
    source: 'Revista Select / SP',
    quotePT: '"A fusão de argila barrenta coletada no Rio Madeira com a folha de ouro evoca os séculos de saques coloniais, mas reverte os vetores: a arte de Feitosa é soberana e consagra o que foi brutalizado."',
    quoteEN: '"The fusion of muddy clay harvested from the Madeira River and delicate gold leaf evokes centuries of colonial pillage, yet reverses variables: Feitosa\'s art is sovereign, consecrating what was brutalized."',
    authorPT: 'Juliana Camargo',
    authorEN: 'Juliana Camargo'
  },
  {
    id: 'clipping-3',
    source: 'El País / Arte',
    quotePT: '"Sua obra individual exposta em Havana trouxe uma cartografia naval dramática dos rios amazônicos. Há ali um profundo, solene e misterioso senso de parentesco rítmico, guiado pelo corpo."',
    quoteEN: '"His solo exhibition presented in Havana delivered a dramatic naval cartography of Amazonian rivers. There lies a deep, solemn, and mysterious sense of rhythmic kinship guided by the body."',
    authorPT: 'Diego Menendez',
    authorEN: 'Diego Menendez'
  }
];