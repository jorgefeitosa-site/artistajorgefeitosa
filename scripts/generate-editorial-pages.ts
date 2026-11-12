/**
 * Build-time HTML for the artist's editorial pages.
 * The same biography, exhibitions and artworks data powers the React site.
 * Generated files are published to dist/ and do not need a browser to display text.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import {
  aboutTranslations, bioTranslations, timelineList,
  soloExhibitions, groupExhibitions, permanentCollections,
} from '../src/locales.ts';
import { obras } from '../src/works.ts';

const domain = 'https://www.jorgefeitosa.art';
const pages = [
  { kind: 'artist', pt: '/artista/', en: '/en/artist/' },
  { kind: 'works', pt: '/obras/', en: '/en/works/' },
  { kind: 'exhibitions', pt: '/exposicoes/', en: '/en/exhibitions/' },
];

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[ch]);
}
function el(tag, text, className) {
  return '<' + tag + (className ? ' class="' + esc(className) + '"' : '') + '>' +
    esc(text) + '</' + tag + '>';
}
function link(href, text) {
  return '<a href="' + esc(href) + '">' + esc(text) + '</a>';
}
const translations = {
  pt: {
    home: 'Início', bio: 'Biografia', works: 'Obras', exhibitions: 'Exposições',
    back: 'Portfólio principal', bioTitle: 'Jorge Feitosa: biografia e trajetória',
    worksTitle: 'Obras e séries de Jorge Feitosa',
    exhibitionsTitle: 'Exposições e acervos',
    research: 'Pesquisa artística', timeline: 'Trajetória',
    solo: 'Exposições individuais', group: 'Exposições coletivas e participações',
    collections: 'Acervos institucionais',
    artistDesc: 'Biografia de Jorge Feitosa, artista visual nascido em Porto Velho, Rondônia. Formação, produção artística e trajetória expositiva.',
    worksDesc: 'Séries Disparo, Os que habitam o silêncio e Kintsugi: obras, materiais e pesquisa de Jorge Feitosa, artista visual de Porto Velho.',
    exhibitionsDesc: 'Registros de exposições, participações e acervos institucionais associados ao artista visual Jorge Feitosa.',
    workMedium: { 'obra-01': 'Cerâmica esmaltada', 'obra-02': 'Cerâmica', 'obra-03': 'Técnicas mistas' },
    year: 'Ano', medium: 'Técnica', dimensions: 'Dimensões', individual: 'Obras individuais',
    acervoTitle: 'Acervo Jorge Feitosa',
    acervoText: 'Em paralelo à produção autoral, Jorge Feitosa conduz com Fábio Garcia o Acervo Jorge Feitosa, dedicado à pesquisa e à curadoria de objetos vintage, design histórico e artes decorativas. O Acervo é uma iniciativa distinta deste portfólio artístico.',
    acervoSite: 'Site do Acervo', acervoInstagram: 'Instagram do Acervo',
    viewWork: 'Fotografia de obra da série ',
    references: 'Registros externos da trajetória',
    referencesIntro: 'Publicações de galerias e veículos editoriais que identificam o artista e documentam sua atuação.',
  },
  en: {
    home: 'Home', bio: 'Biography', works: 'Work', exhibitions: 'Exhibitions',
    back: 'Main portfolio', bioTitle: 'Jorge Feitosa: Biography and Practice',
    worksTitle: 'Works and Series by Jorge Feitosa',
    exhibitionsTitle: 'Exhibitions and Collections',
    research: 'Artistic research', timeline: 'Career',
    solo: 'Solo exhibitions', group: 'Group exhibitions and participations',
    collections: 'Institutional collections',
    artistDesc: 'Biography of Jorge Feitosa, a Brazilian visual artist born in Porto Velho, Rondônia. Education, practice and exhibitions.',
    worksDesc: 'Disparo, Os que habitam o silêncio and Kintsugi: works, materials and research by Jorge Feitosa, a Brazilian visual artist.',
    exhibitionsDesc: 'Exhibitions, group presentations and institutional collections associated with Brazilian visual artist Jorge Feitosa.',
    workMedium: { 'obra-01': 'Glazed ceramic', 'obra-02': 'Ceramic', 'obra-03': 'Mixed media' },
    year: 'Year', medium: 'Medium', dimensions: 'Dimensions', individual: 'Individual works',
    acervoTitle: 'Acervo Jorge Feitosa',
    acervoText: 'Alongside his artistic practice, Jorge Feitosa runs Acervo Jorge Feitosa with Fábio Garcia. The initiative researches and curates vintage objects, historical design and decorative arts, independently of this artist portfolio.',
    acervoSite: 'Acervo website', acervoInstagram: 'Acervo on Instagram',
    viewWork: 'Photograph of artwork from the series ',
    references: 'Independent records of the artist\'s career',
    referencesIntro: 'Gallery records and editorial coverage identifying the artist and documenting his practice.',
  },
};

function siteNav(lang, kind) {
  const t = translations[lang];
  const links = pages.map(page => {
    const label = page.kind === 'artist' ? t.bio : (page.kind === 'works' ? t.works : t.exhibitions);
    const path = page[lang];
    return '<a href="' + path + '"' + (page.kind === kind ? ' aria-current="page"' : '') +
      '>' + esc(label) + '</a>';
  }).join('\n');
  const current = pages.find(page => page.kind === kind);
  const altLang = lang === 'pt' ? 'en' : 'pt';
  return '<a class="skip-link" href="#content">' + (lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content') + '</a>' +
    '<header class="site-header"><div class="wrap header-inner">' +
    '<a class="brand" href="/">JORGE FEITOSA</a>' +
    '<nav aria-label="' + (lang === 'pt' ? 'Páginas do artista' : 'Artist pages') + '">' +
    link('/', t.home) + links +
    '<a href="' + current[altLang] + '" lang="' + altLang + '" hreflang="' + (altLang === 'pt' ? 'pt-BR' : 'en') + '">' +
      altLang.toUpperCase() + '</a>' +
    '</nav></div></header>';
}
function acervoPanel(lang) {
  const t = translations[lang];
  return '<aside class="acervo">' +
    el('h2', t.acervoTitle) + el('p', t.acervoText) +
    '<div class="aux-links">' +
    '<a href="https://www.acervojorgefeitosa.com/" rel="noopener noreferrer">' + esc(t.acervoSite) + '</a>' +
    '<a href="https://www.instagram.com/acervo.jorgefeitosa/" rel="noopener noreferrer">' + esc(t.acervoInstagram) + '</a>' +
    '</div></aside>';
}
const artistReferences = [
  {
    url: 'https://www.bolsadearte.com/oparalelo/jorge-feitosa-na-gal-vilanova-2',
    pt: '2018 · Bolsa de Arte / O Paralelo — exposição Lágrimas de Ouro na Galeria VilaNova',
    en: '2018 · Bolsa de Arte / O Paralelo — Lágrimas de Ouro exhibition at Galeria VilaNova'
  },
  {
    url: 'https://galeriavermelho.com.br/verbo/16a-edicao/',
    pt: '2022 · Galeria Vermelho — 16ª VERBO, Corpo Ocupa Espaço Diminuto I',
    en: '2022 · Galeria Vermelho — 16th VERBO, Corpo Ocupa Espaço Diminuto I'
  },
  {
    url: 'https://jc.uol.com.br/social1/agenda/2025/10/04/chamar-o-rio-christal-galeria-abre-mostra-com-16-artistas-latino-americanos-sobre-direitos-dos-rios.html',
    pt: '2025 · Jornal do Commercio — Chamar o Rio, Christal Galeria, Recife',
    en: '2025 · Jornal do Commercio — Chamar o Rio, Christal Galeria, Recife'
  }
];

function bioPage(lang) {
  const t = translations[lang];
  const bio = bioTranslations[lang];
  const about = aboutTranslations[lang];
  const paragraphs = ['p1','p2','p3','p4','p5','p6','p7'].map(k => el('p', bio[k])).join('\n');
  const timeline = timelineList.map(entry => '<li><span class="year">' + esc(entry.year) + '</span>' +
      el('h3', lang === 'pt' ? entry.titlePT : entry.titleEN) +
      el('p', lang === 'pt' ? entry.subtitlePT : entry.subtitleEN) + '</li>').join('\n');
  return '<div class="masthead">' + el('span', t.research, 'eyebrow') +
    el('h1', t.bioTitle) + el('p', about.paragraph, 'lede') + '</div>' +
    '<section class="section"><h2>' + esc(t.bio) + '</h2>' + paragraphs + '</section>' +
    '<section class="section"><h2>' + esc(t.timeline) + '</h2>' +
    '<ol class="event-list">' + timeline + '</ol></section>' +
    '<section class="section"><h2>' + esc(t.references) + '</h2>' +
    el('p', t.referencesIntro) +
    '<ul class="event-list">' + artistReferences.map(ref =>
      '<li><a href="' + esc(ref.url) + '" target="_blank" rel="noopener noreferrer">' +
      esc(lang === 'pt' ? ref.pt : ref.en) + '</a></li>').join('') +
    '</ul></section>' +
    acervoPanel(lang);
}
function worksPage(lang) {
  const t = translations[lang];
  const sections = obras.map(work => {
    const title = lang === 'pt' ? work.titlePT : work.titleEN;
    const description = lang === 'pt' ? work.descPT : work.descEN;
    const images = (work.images || []).map(src => '<img src="' + esc(src) + '" alt="' +
      esc(t.viewWork + title) + '" loading="lazy" width="450" height="560">').join('\n');
    const individual = (work.pieces || []).map(piece => '<li>' +
      esc(lang === 'pt' ? piece.titlePT : piece.titleEN) +
      ' · ' + esc(piece.dimensions) + ' (' + esc(piece.year) + ')</li>').join('\n');
    return '<article class="work" id="' + esc(work.id) + '">' +
      el('h2', title) +
      '<div class="work-meta">' + esc(t.year) + ': ' + esc(work.year) +
      ' · ' + esc(t.medium) + ': ' + esc(t.workMedium[work.id] || work.medium) + '</div>' +
      '<div class="photo-grid">' + images + '</div>' +
      el('p', description) +
      (individual ? '<h3>' + esc(t.individual) + '</h3><ul class="pieces">' + individual + '</ul>' : '') +
      (work.creditPT ? el('p', lang === 'pt' ? work.creditPT : work.creditEN) : '') +
      '</article>';
  }).join('\n');
  return '<div class="masthead">' + el('span', 'JORGE FEITOSA', 'eyebrow') +
    el('h1', t.worksTitle) + el('p', t.worksDesc, 'lede') +
    '</div><section class="section" aria-label="' + esc(t.works) + '">' + sections + '</section>' +
    acervoPanel(lang);
}
function exhibitionsList(items, lang) {
  return '<ul class="event-list">' + items.map(entry => '<li>' +
    '<span class="year">' + esc(entry.year || '') + '</span>' +
    el('h3', lang === 'pt' ? (entry.titlePT || entry.institutionPT) : (entry.titleEN || entry.institutionEN)) +
    el('small', lang === 'pt' ? entry.locationPT : entry.locationEN) + '</li>').join('\n') + '</ul>';
}
function exhibitionsPage(lang) {
  const t = translations[lang];
  return '<div class="masthead">' + el('span', 'JORGE FEITOSA', 'eyebrow') +
    el('h1', t.exhibitionsTitle) + el('p', t.exhibitionsDesc, 'lede') + '</div>' +
    '<section class="section"><h2>' + esc(t.solo) + '</h2>' + exhibitionsList(soloExhibitions, lang) + '</section>' +
    '<section class="section"><h2>' + esc(t.group) + '</h2>' + exhibitionsList(groupExhibitions, lang) + '</section>' +
    '<section class="section"><h2>' + esc(t.collections) + '</h2>' + exhibitionsList(permanentCollections, lang) + '</section>' +
    acervoPanel(lang);
}
function htmlPage(page, lang) {
  const t = translations[lang];
  const canonical = domain + page[lang];
  const title = (page.kind === 'artist' ? t.bioTitle : page.kind === 'works' ? t.worksTitle : t.exhibitionsTitle);
  const description = (page.kind === 'artist' ? t.artistDesc : page.kind === 'works' ? t.worksDesc : t.exhibitionsDesc);
  const main = (page.kind === 'artist' ? bioPage(lang) : page.kind === 'works' ? worksPage(lang) : exhibitionsPage(lang));
  const artistEntity = {
    '@type': 'Person',
    '@id': domain + '/#artist',
    name: 'Jorge Feitosa',
    alternateName: '@jorgefeitosa.artista',
    url: domain + '/',
    jobTitle: lang === 'pt' ? 'Artista visual' : 'Visual artist',
    description: lang === 'pt'
      ? 'Artista visual brasileiro nascido em Porto Velho, Rondônia, com pesquisa em performance, fotografia, escultura, pintura e vídeo.'
      : 'Brazilian visual artist born in Porto Velho, Rondônia, working across performance, photography, sculpture, painting and video.',
    disambiguatingDescription: lang === 'pt'
      ? 'Artista visual natural de Porto Velho, Rondônia, cuja produção investiga corpo, território e materiais associados ao Rio Madeira e à Amazônia.'
      : 'Visual artist from Porto Velho, Rondônia, whose practice explores the body, place and materials associated with the Madeira River and the Amazon.',
    birthPlace: { '@type': 'Place', name: 'Porto Velho, Rondônia, Brasil' },
    homeLocation: { '@type': 'Place', name: 'São Paulo, São Paulo, Brasil' },
    image: domain + '/hero.jpeg',
    sameAs: [
      'https://www.instagram.com/jorgefeitosa.artista/',
      'https://www.acervojorgefeitosa.com/jorge-feitosa-artista-visual/'
    ],
    affiliation: { '@id': domain + '/#acervo' }
  };
  const schema = {
    '@context': 'https://schema.org',
    '@type': page.kind === 'artist' ? 'ProfilePage' : 'CollectionPage',
    '@id': canonical + '#webpage',
    url: canonical, name: title, description,
    inLanguage: lang === 'pt' ? 'pt-BR' : 'en',
    about: { '@id': domain + '/#artist' },
    isPartOf: { '@id': domain + '/#website' },
    mainEntity: page.kind === 'artist'
      ? artistEntity
      : { '@id': domain + '/#artist' },
  };
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  return '<!doctype html>\n' +
    '<html lang="' + (lang === 'pt' ? 'pt-BR' : 'en') + '"><head>' +
    '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>' + esc(title) + ' | Jorge Feitosa</title>' +
    '<meta name="description" content="' + esc(description) + '">' +
    '<meta name="robots" content="index,follow">' +
    '<link rel="canonical" href="' + canonical + '">' +
    '<link rel="alternate" hreflang="pt-BR" href="' + domain + page.pt + '">' +
    '<link rel="alternate" hreflang="en" href="' + domain + page.en + '">' +
    '<meta property="og:type" content="website">' +
    '<meta property="og:title" content="' + esc(title) + '">' +
    '<meta property="og:description" content="' + esc(description) + '">' +
    '<meta property="og:url" content="' + canonical + '">' +
    '<meta property="og:image" content="' + domain + '/hero.jpeg">' +
    '<meta name="twitter:card" content="summary_large_image">' +
    '<link rel="stylesheet" href="/editorial.css">' +
    '<script type="application/ld+json">' + json + '</script>' +
    '</head><body>' +
    siteNav(lang, page.kind) +
    '<main id="content" class="wrap">' + main + '</main>' +
    '<footer><div class="wrap"><span>© 2026 Jorge Feitosa</span>' +
    '<span>' + link('/', t.back) + ' · ' + link('https://www.acervojorgefeitosa.com/', t.acervoTitle) +
    '</span></div></footer></body></html>\n';
}

for (const page of pages) {
  for (const lang of ['pt','en']) {
    const filename = join('dist', page[lang].replace(/^\/|\/$/g, ''), 'index.html');
    await mkdir(dirname(filename), { recursive: true });
    await writeFile(filename, htmlPage(page, lang), 'utf8');
    console.log('HTML:', filename);
  }
}
// The sitemap is built from the same route table to prevent stale URLs.
const sitemapUrls = ['/'].concat(pages.flatMap(page => [page.pt, page.en]));
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  sitemapUrls.map(path => {
    const pg = pages.find(page => page.pt === path || page.en === path);
    const alternatives = pg
      ? '    <xhtml:link rel="alternate" hreflang="pt-BR" href="' + domain + pg.pt + '"/>\n' +
        '    <xhtml:link rel="alternate" hreflang="en" href="' + domain + pg.en + '"/>\n'
      : '';
    return '  <url>\n    <loc>' + domain + path + '</loc>\n' + alternatives + '  </url>';
  }).join('\n') + '\n</urlset>\n';
await writeFile('dist/sitemap.xml', xml, 'utf8');
console.log('Sitemap:', sitemapUrls.length, 'URLs');
