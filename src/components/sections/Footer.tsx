import { ArrowRight, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 text-stone-200 overflow-hidden py-24 px-6 md:px-12">
      {/* Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-0">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Background Typography */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-serif text-[18vw] leading-[0.8] text-stone-900 opacity-20 whitespace-nowrap block translate-y-[20%]">
          Casa Brasileira
        </span>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-stone-800 pt-16">
          
          {/* Col 1: Brand Identity */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-serif text-5xl text-white mb-2 tracking-tight">CB.</h2>
              <p className="font-serif italic text-stone-400 text-lg">
                Alta cozinha do cotidiano.
              </p>
            </div>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xs opacity-80">
              Resgatando memórias através do sabor, em um ambiente onde cada detalhe conta uma história.
            </p>
          </div>

          {/* Col 2: Location & CTA */}
          <div className="flex flex-col gap-8">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400/60">
              Visite-nos
            </span>
            <div className="flex flex-col gap-6">
              <p className="text-stone-200 font-light leading-relaxed">
                Rua das Flores, 123<br/>
                Jardins, São Paulo - SP
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white hover:text-stone-400 transition-colors w-fit"
              >
                <span className="border-b border-white/30 group-hover:border-stone-400 pb-1 text-sm tracking-wide">
                  Ver no mapa
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Col 3: Social */}
          <div className="flex flex-col gap-8">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400/60">
              Conecte-se
            </span>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group">
                <Instagram className="w-5 h-5" />
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">@casabrasileira</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group">
                <Facebook className="w-5 h-5" />
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">/casabrasileira</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">(11) 99999-9999</span>
              </a>
            </div>
          </div>

          {/* Col 4: Navigation & Credits */}
          <div className="flex flex-col justify-between h-full gap-8">
            <div className="flex flex-col gap-8">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400/60">
                Menu
              </span>
              <nav className="flex flex-col gap-3">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'Conceito', href: '#concept' },
                  { label: 'Espaço', href: '#space' },
                  { label: 'Menu', href: '#menu' },
                  { label: 'Chef', href: '#chef' }
                ].map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href}
                    className="text-stone-400 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="pt-8 border-t border-stone-800 lg:border-none lg:pt-0 opacity-40 hover:opacity-100 transition-opacity duration-500">
              <p className="text-[10px] uppercase tracking-widest text-stone-400">
                &copy; {new Date().getFullYear()} Casa Brasileira.
              </p>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-2">
                Crafted by <span className="text-stone-300">Studio</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
