import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { MapPin, ArrowRight, Award, Trophy, Compass } from 'lucide-react';
import { exhibitionsTranslations, soloExhibitions, groupExhibitions, permanentCollections } from '../locales';
import { Language } from '../types';

interface ExhibitionsProps {
  currentLang: Language;
}

interface MapTargetCity {
  id: string;
  name: string;
  coords: { x: number; y: number }; // Percentage coords on SVG (relative 0-100)
  latLon?: string;
  eventsPT: string[];
  eventsEN: string[];
}

export default function Exhibitions({ currentLang }: ExhibitionsProps) {
  const t = exhibitionsTranslations[currentLang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.15 });
  const [activeCity, setActiveCity] = useState<MapTargetCity | null>(null);

  // High-fidelity map markers
  const cities: MapTargetCity[] = [
    {
      id: 'porto-velho',
      name: 'Porto Velho (Nascimento & Matéria)',
      coords: { x: 22, y: 70 },
      latLon: '08° 45′ S, 63° 54′ W',
      eventsPT: [
        'Berço de Nascimento e Origem Primordial.',
        'As frentes barrentas do Rio Madeira fornecem a argila vermelha de onde surgem suas séries mais viscerais.'
      ],
      eventsEN: [
        'Cradle of Birth & Primordial Source.',
        'The muddy banks of the Madeira River provide the sacred red clay from which his most visceral series emerge.'
      ]
    },
    {
      id: 'paris',
      name: 'Paris',
      coords: { x: 48, y: 32 },
      latLon: '48° 51′ N, 02° 21′ E',
      eventsPT: ['2025 · Exposição Individual: "Viagem – Matéria, rito e memória ancestral" na Galerie.'],
      eventsEN: ['2025 · Solo Exhibition: "Journey – Matter, rite, and ancestral memory" at Gallery.']
    },
    {
      id: 'havana',
      name: 'Havana',
      coords: { x: 26, y: 54 },
      latLon: '23° 08′ N, 82° 21′ W',
      eventsPT: ['2016 · Exposição Individual: "Navegar Es Preciso" em Havana, Cuba.'],
      eventsEN: ['2016 · Solo Exhibition: "To Sail is Necessary" in Havana, Cuba.']
    },
    {
      id: 'sao-paulo',
      name: 'São Paulo',
      coords: { x: 33, y: 78 },
      latLon: '23° 33′ S, 46° 38′ W',
      eventsPT: [
        'Ateliê de Criação Principal no Brasil.',
        '2016 · Exposição Individual: "Lágrimas de Ouro".',
        '2025 · Mostra: "Presença Permeável" na Praça das Artes.',
        '2022 · Mostra: "16ª Verbo Performance" na Galeria Vermelho.'
      ],
      eventsEN: [
        'Primary Creative Studio inside Brazil.',
        '2016 · Solo Exhibition: "Tears of Gold".',
        '2025 · Collective Showcase: "Permeable Presence" at Praça das Artes.',
        '2022 · Showcase: "16th Verbo Performance" at Vermelho Gallery.'
      ]
    },
    {
      id: 'rio-de-janeiro',
      name: 'Rio de Janeiro',
      coords: { x: 36, y: 76 },
      latLon: '22° 54′ S, 43° 11′ W',
      eventsPT: [
        'Acervo Oficial: Museu de Arte do Rio (MAR).',
        '2024 · Feira de Arte: "ArtRio — Brasil Contemporâneo".',
        '2024 · Exposição Externa: "Jardim das Esculturas" na Marina da Glória.'
      ],
      eventsEN: [
        'Permanent Collection: Rio Art Museum (MAR).',
        '2024 · Contemporary Art Fair: "ArtRio — Contemporary Brazil".',
        '2024 · Open-air Exhibition: "Sculptures Garden" at Marina da Glória.'
      ]
    },
    {
      id: 'uberlandia',
      name: 'Uberlândia',
      coords: { x: 31, y: 74 },
      latLon: '18° 55′ S, 48° 16′ W',
      eventsPT: ['Acervo Permanente: MUnA – Museu Universitário de Arte / MG.'],
      eventsEN: ['Permanent Collection: MUnA – University Art Museum / MG.']
    },
    {
      id: 'recife',
      name: 'Recife / PE',
      coords: { x: 38, y: 60 },
      latLon: '08° 03′ S, 34° 53′ W',
      eventsPT: ['Presença artística e exposições no Nordeste brasileiro.'],
      eventsEN: ['Artistic presence and exhibitions in northeastern Brazil.']
    },
    {
      id: 'san-juan',
      name: 'San Juan / Puerto Rico',
      coords: { x: 31, y: 49 },
      latLon: '18° 27′ N, 66° 06′ W',
      eventsPT: ['Participação em projetos e intercâmbios artísticos no Caribe.'],
      eventsEN: ['Participation in artistic projects and exchanges in the Caribbean.']
    },
    {
      id: 'veneza',
      name: 'Veneza / Itália',
      coords: { x: 53, y: 35 },
      latLon: '45° 26′ N, 12° 20′ E',
      eventsPT: ['Presença no circuito artístico europeu em Veneza, Itália.'],
      eventsEN: ['Presence in the European art circuit in Venice, Italy.']
    }
  ];

  // Creative vector flow routes connecting raw material source with centers
  const routes = [
    { from: 'porto-velho', to: 'sao-paulo', d: "M 220,350 Q 275,370 330,390" },
    { from: 'porto-velho', to: 'havana', d: "M 220,350 Q 240,310 260,270" },
    { from: 'havana', to: 'paris', d: "M 260,270 Q 370,215 480,160" },
    { from: 'paris', to: 'rio-de-janeiro', d: "M 480,160 Q 420,270 360,380" },
    { from: 'sao-paulo', to: 'rio-de-janeiro', d: "M 330,390 Q 345,385 360,380" },
    { from: 'sao-paulo', to: 'uberlandia', d: "M 330,390 Q 320,380 310,370" }
  ];

  return (
    <section
      ref={sectionRef}
      id="exhibitions"
      className="relative w-full bg-white py-24 md:py-36 px-6 md:px-12 select-text"
    >
      <h2 className="sr-only">{t.seoTitle}</h2>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs text-clay-black tracking-widest uppercase block mb-3 font-medium">
            {currentLang === 'pt' ? 'GEOGRAFIA DA MATÉRIA' : 'GEOGRAPHY OF MATTER'}
          </span>
          <h3 className="font-serif text-3xl md:text-5xl text-clay-black font-light tracking-wide">
            {t.title}
          </h3>
          <p className="mt-4 font-sans text-xs sm:text-sm text-clay-black font-mono tracking-wider">
            {currentLang === 'pt' ? 'Toque nos pontos brilhantes para ver os detalhes da presença' : 'Click the glowing nodes to view artistic presence details'}
          </p>
        </div>

        {/* INTERACTIVE STYLIZED MAP BLOCK */}
        <div className="relative w-full h-[360px] md:h-[520px] border border-clay-black/25 bg-clay-dark/30 bg-[linear-gradient(to_right,rgba(197,160,89,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.03)_1px,transparent_1px)] bg-[size:32px_32px] overflow-hidden mb-24 flex items-center justify-center p-2 select-none">
          
          {/* Subtle frame borders */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-clay-black/30"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-clay-black/30"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-clay-black/30"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-clay-black/30"></div>

          {/* Map watermarks & custom projection grid */}
          <svg
            className="absolute inset-0 w-full h-full text-clay-medium/30 pointer-events-none opacity-85"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <style>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: -40;
                }
              }
              .animate-dash-route {
                animation: dash 8s linear infinite;
              }
            `}</style>

            {/* Earth Latitudes/Longitudes projection lines */}
            <line x1="50" y1="320" x2="950" y2="320" stroke="#c5a059" strokeOpacity="0.12" strokeDasharray="3 3" />
            <text x="60" y="315" fill="#c5a059" fillOpacity="0.25" className="font-mono text-[8px]">EQUATOR 0° 00′</text>

            <line x1="50" y1="170" x2="950" y2="170" stroke="#c5a059" strokeOpacity="0.08" strokeDasharray="3 3" />
            <text x="60" y="165" fill="#c5a059" fillOpacity="0.18" className="font-mono text-[8px]">TROPIC OF CANCER 23.5° N</text>

            <line x1="50" y1="440" x2="950" y2="440" stroke="#c5a059" strokeOpacity="0.08" strokeDasharray="3 3" />
            <text x="60" y="435" fill="#c5a059" fillOpacity="0.18" className="font-mono text-[8px]">TROPIC OF CAPRICORN 23.5° S</text>

            <path d="M 250,50 Q 200,250 250,450" fill="none" stroke="#c5a059" strokeOpacity="0.08" strokeDasharray="3 3" />
            <path d="M 450,50 Q 420,250 450,450" fill="none" stroke="#c5a059" strokeOpacity="0.08" strokeDasharray="3 3" />
            <path d="M 650,50 Q 640,250 650,450" fill="none" stroke="#c5a059" strokeOpacity="0.08" strokeDasharray="3 3" />

            {/* Highly stylized organic continents outline vector */}
            {/* North America / Greenland */}
            <path d="M 20,40 C 40,20 80,10 130,20 C 180,30 200,60 220,90 C 240,110 280,130 290,160 C 290,180 270,190 260,210 C 250,225 210,210 180,240 C 170,245 150,230 140,200 C 120,200 100,210 80,170 C 60,150 40,150 20,120 C 10,90 10,60 20,40 Z" fill="#c5a059" fillOpacity="0.05" stroke="#c5a059" strokeOpacity="0.1" strokeWidth="1" />
            
            {/* Central America connection */}
            <path d="M 180,240 Q 200,260 220,270 T 250,300 Q 240,305 220,285 T 180,240 Z" fill="#c5a059" fillOpacity="0.05" stroke="#c5a059" strokeOpacity="0.1" strokeWidth="1" />
            
            {/* South America (Território de Matéria) */}
            <path d="M 220,285 C 240,295 270,300 290,320 C 310,340 370,350 390,380 C 400,400 370,440 340,460 C 310,480 295,495 285,495 C 275,490 270,460 265,420 C 260,380 230,340 220,310 Z" fill="#c5a059" fillOpacity="0.07" stroke="#c5a059" strokeOpacity="0.15" strokeWidth="1.2" />
            
            {/* Europe */}
            <path d="M 400,140 C 420,110 450,115 480,110 C 510,105 520,120 540,135 C 550,155 520,170 510,185 C 490,200 460,210 440,200 Q 420,180 400,140 Z" fill="#c5a059" fillOpacity="0.05" stroke="#c5a059" strokeOpacity="0.1" strokeWidth="1" />
            
            {/* Africa */}
            <path d="M 440,200 C 465,225 490,240 540,240 C 580,240 600,280 610,320 C 620,360 590,410 560,430 C 530,450 510,420 500,380 C 490,340 460,320 445,280 C 430,240 435,210 440,200 Z" fill="#c5a059" fillOpacity="0.04" stroke="#c5a059" strokeOpacity="0.08" strokeWidth="1" />

            {/* Pulsating pathways (Curved routes tracking Feitosa's visual geography) */}
            {routes.map((route, idx) => (
              <path
                key={idx}
                d={route.d}
                fill="none"
                stroke="#c5a059"
                strokeWidth="1.5"
                strokeOpacity="0.45"
                strokeDasharray="5 5"
                className="animate-dash-route"
              />
            ))}
          </svg>

          {/* Sutil Amazon decorative compass layout */}
          <div className="absolute top-6 left-6 flex items-center space-x-2 text-clay-black font-mono text-[9px] tracking-widest">
            <Compass className="w-5 h-5 animate-[spin_25s_linear_infinite]" />
            <span>COSMOGRAFIA DE FLUXOS</span>
          </div>

          <div className="absolute bottom-6 left-6 font-mono text-[8px] text-clay-black tracking-widest uppercase">
            GEODÉSICA: PROJEÇÃO MERCATOR ESTILIZADA • ESCALA INDEFINIDA
          </div>

          {/* MAP PINS & TOOLTIPS */}
          <div className="absolute inset-0 max-w-[1000px] h-[500px] mx-auto hidden md:block">
            {cities.map((city) => {
              const isActive = activeCity?.id === city.id;
              const isSourceNode = city.id === 'porto-velho';
              
              return (
                <div
                  key={city.id}
                  style={{ left: `${city.coords.x}%`, top: `${city.coords.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
                  onMouseEnter={() => setActiveCity(city)}
                  onMouseLeave={() => setActiveCity(null)}
                  onClick={() => setActiveCity(isActive ? null : city)}
                >
                  {/* Outer pulsating radial aura */}
                  <div className={`absolute -inset-3 rounded-full animate-ping opacity-60 ${
                    isSourceNode ? 'bg-clay-black/30' : 'bg-clay-black/15'
                  }`} />
                  
                  {/* Pin core button representing map coordinates */}
                  <button
                    className={`relative w-5 w-5 rounded-full border border-clay-black flex items-center justify-center cursor-pointer shadow-xl transition-all duration-300 ${
                      isActive 
                        ? 'scale-135 bg-clay-black text-clay-black' 
                        : isSourceNode 
                          ? 'bg-clay-black border-2 border-clay-black ring-2 ring-museum-gold/25'
                          : 'bg-clay-black group-hover:scale-115'
                    }`}
                    aria-label={`Ver eventos em ${city.name}`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isActive ? 'bg-clay-black' : isSourceNode ? 'bg-clay-black animate-pulse' : 'bg-clay-black/75'
                    }`} />
                  </button>

                  {/* Elegant floating metadata label under node */}
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-clay-black tracking-widest uppercase bg-white/80 px-1.5 py-0.5 whitespace-nowrap border border-clay-light/20 select-text">
                    {city.id === 'porto-velho' ? city.name.split(' (')[0].toUpperCase() + ' ✦' : city.name.split('/')[0].trim().toUpperCase()}
                  </span>

                  {/* Elegant hovering tooltip card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 bg-clay-black border border-clay-black/56 p-4 shadow-2xl z-30 pointer-events-none rounded-none text-left"
                      >
                        <div className="border-b border-clay-black/30 pb-2 mb-2">
                          <div className="flex items-center space-x-1.5">
                            <MapPin className="w-3.5 h-3.5 text-clay-black" />
                            <span className="font-serif text-sm font-semibold text-clay-black tracking-wider">
                              {city.name}
                            </span>
                          </div>
                          <span className="font-mono text-[9px] text-clay-black block mt-0.5">
                            {city.latLon}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          {(currentLang === 'pt' ? city.eventsPT : city.eventsEN).map((ev, i) => (
                            <p key={i} className="font-sans text-[11px] text-clay-black leading-relaxed font-normal">
                              {ev}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile Map Carousel Fallback */}
          <div className="md:hidden w-full flex flex-col justify-end p-4 h-full relative z-10">
            <div className="bg-clay-dark/95 backdrop-blur-md border border-clay-black/30 p-4 flex flex-col justify-center select-text w-full">
              <div className="flex justify-between items-center border-b border-clay-light/30 pb-2 mb-2">
                <span className="font-serif text-xs font-bold text-clay-black flex flex-col gap-0.5 text-left">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {activeCity?.name || 'Selecione no mapa'}
                  </span>
                  <span className="font-mono text-[8px] text-clay-black pl-4">{activeCity?.latLon}</span>
                </span>
                <div className="flex space-x-1 shrink-0">
                  {cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => setActiveCity(city)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        activeCity?.id === city.id ? 'bg-clay-black scale-110' : 'bg-clay-light'
                      }`}
                      aria-label={city.name}
                    />
                  ))}
                </div>
              </div>
              <div className="min-h-12 flex flex-col justify-center text-left">
                {activeCity ? (
                  (currentLang === 'pt' ? activeCity.eventsPT : activeCity.eventsEN).map((ev, idx) => (
                    <p key={idx} className="text-[11px] font-sans text-clay-black leading-relaxed font-normal mt-1">
                      {ev}
                    </p>
                  ))
                ) : (
                  <p className="text-[11px] font-sans text-clay-black italic text-center">
                    Toque nos pontos de paginação para navegar nas rotas geográficas
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* RECENT / DETAILED EDITORIAL DIRECTORY LISTINGS (Two Column split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Solo Exhibitions (Individuais) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5 border-b border-clay-black/30 pb-4 mb-4">
              <Compass className="w-4 h-4 text-clay-black" />
              <h4 className="font-serif text-lg tracking-wide text-clay-black font-light uppercase">
                {t.solosTitle}
              </h4>
            </div>
            <div className="space-y-4">
              {soloExhibitions.map((expo, idx) => (
                <div key={idx} className="group-list-item py-4 border-b border-clay-light/15 hover:border-clay-black/20 transition-colors last:border-0">
                  <div className="flex items-baseline justify-between select-text gap-2">
                    <span className="font-serif text-sm text-clay-black group-hover:text-clay-black transition-colors block">
                      {currentLang === 'pt' ? expo.titlePT : expo.titleEN}
                    </span>
                    <span className="font-mono text-[10px] text-clay-black shrink-0">
                      {expo.year}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-clay-black block mt-1">
                    {currentLang === 'pt' ? expo.locationPT : expo.locationEN}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Collective Exhibitions & Mostras (Coletivas) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5 border-b border-clay-black/30 pb-4 mb-4">
              <Award className="w-4 h-4 text-clay-black" />
              <h4 className="font-serif text-lg tracking-wide text-clay-black font-light uppercase">
                {t.groupsTitle}
              </h4>
            </div>
            <div className="space-y-4">
              {groupExhibitions.map((expo, idx) => (
                <div key={idx} className="group-list-item py-4 border-b border-clay-light/15 last:border-0 hover:border-clay-black/20 transition-colors">
                  <div className="flex items-baseline justify-between select-text gap-2">
                    <span className="font-serif text-sm text-clay-black block">
                      {currentLang === 'pt' ? expo.titlePT : expo.titleEN}
                    </span>
                    <span className="font-mono text-[10px] text-clay-black shrink-0">
                      {expo.year}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-clay-black block mt-1">
                    {currentLang === 'pt' ? expo.locationPT : expo.locationEN}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Permanent Colections (Acervos Permanentes) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5 border-b border-clay-black/30 pb-4 mb-4">
              <Trophy className="w-4 h-4 text-clay-black" />
              <h4 className="font-serif text-lg tracking-wide text-clay-black font-light uppercase">
                {t.collectionsTitle}
              </h4>
            </div>
            <div className="space-y-4">
              {permanentCollections.map((col, idx) => (
                <div key={idx} className="group-list-item py-4 border-b border-clay-light/15 last:border-0 hover:border-clay-black/20 transition-colors">
                  <div className="flex flex-col select-text">
                    <span className="font-serif text-sm text-clay-black font-medium">
                      {currentLang === 'pt' ? col.institutionPT : col.institutionEN}
                    </span>
                    <span className="font-mono text-[10px] text-clay-black mt-1">
                      {currentLang === 'pt' ? col.locationPT : col.locationEN}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
