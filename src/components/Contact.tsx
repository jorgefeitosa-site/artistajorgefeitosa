import { useRef } from 'react';
import { useInView } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.15 });

  const t = {
    pt: {
      seoTitle: 'Contato — Jorge Feitosa · Obras Disponíveis',
      title: 'CONTATO & EXPOSIÇÕES',
      headline: 'Inquérito e Diálogo',
      infoText: 'Para aquisição de obras, projetos expositivos ou residências artísticas, entre em contato através do e-mail.',
      emailLabel: 'E-mail profissional',
      whatsappBtn: 'Falar pelo WhatsApp',
      instaBtn: 'Seguir no Instagram',
      visitInsta: 'Acompanhar Atelier'
    },
    en: {
      seoTitle: 'Contact — Jorge Feitosa · Available Artworks',
      title: 'CONTACT & EXHIBITIONS',
      headline: 'Inquiry & Dialogue',
      infoText: 'For artwork acquisitions, exhibition projects, or artist residencies, please get in touch via email.',
      emailLabel: 'Professional Email',
      whatsappBtn: 'Message on WhatsApp',
      instaBtn: 'Follow on Instagram',
      visitInsta: 'Atelier Instagram'
    }
  }[currentLang];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-white py-28 md:py-40 px-6 md:px-12 select-text overflow-hidden border-t border-clay-light/25 animate-fadeIn"
    >
      <h2 className="sr-only">{t.seoTitle}</h2>

      {/* Abstract Background Ornament to match the Artistic Flair guidelines */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full blur-[160px] opacity-[0.06] bg-clay-black pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* LEFT SIDE: Subtle title block and narrative */}
          <div className="md:col-span-6 space-y-6">
            <span className="font-mono text-[10px] sm:text-xs text-clay-black tracking-[0.3em] uppercase block font-semibold">
              {t.title}
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-clay-black font-light tracking-wide leading-none pb-2">
              {t.headline}
            </h3>
            
            {/* The core requested text */}
            <p className="font-serif text-lg md:text-xl text-clay-black italic leading-relaxed font-light mt-4 pr-4 border-l-2 border-clay-black pl-4 py-1">
              {t.infoText}
            </p>
          </div>

          {/* RIGHT SIDE: Elegant minimal directories & Action button */}
          <div className="md:col-span-6 space-y-10 md:pl-8">
            
            {/* Direct Channels */}
            <div className="space-y-6">
              
              {/* Email Entry */}
              <div className="group border-b border-clay-light/35 pb-5">
                <span className="font-mono text-[9px] text-clay-black tracking-[0.2em] uppercase block mb-1">
                  {t.emailLabel}
                </span>
                <a
                  href="mailto:contato@jorgefeitosa.com?subject=Inquérito%20de%20Obra-Feitosa"
                  className="font-serif text-lg xs:text-xl sm:text-2xl text-clay-black hover:text-clay-black transition-colors block cursor-pointer flex items-center justify-between gap-2 break-all"
                >
                  <span className="font-light">contato@jorgefeitosa.com</span>
                  <Mail className="w-5 h-5 text-clay-black transition-transform group-hover:translate-x-1 shrink-0" />
                </a>
              </div>

            </div>

            {/* Instagram */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/jorgefeitosa.artista/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-clay-black/30 hover:border-clay-black text-clay-black hover:text-clay-black transition-all duration-300 py-3 px-6 font-mono text-[10px] uppercase tracking-[0.25em] cursor-pointer"
                title={t.visitInsta}
              >
                <Instagram className="w-4 h-4" />
                <span>{t.instaBtn}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
