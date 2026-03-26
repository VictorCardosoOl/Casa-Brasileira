import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-casa-cream pt-32 pb-24 px-6 lg:pl-32 lg:pr-12"
    >
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none flex flex-col items-center justify-center">
        <h1 className="font-serif text-[18vw] leading-[0.75] text-casa-accent/20 tracking-tighter whitespace-nowrap">
          BRASILEIRA
        </h1>
      </div>

      {/* Foreground Image */}
      <div ref={imageRef} className="relative z-10 w-full max-w-4xl mt-12">
        <img 
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2513&auto=format&fit=crop" 
          alt="Prato Casa Brasileira" 
          className="w-full h-auto object-contain drop-shadow-2xl"
          style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
        />
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mt-8 flex flex-col items-center text-center gap-4">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[1px] bg-casa-text"></span>
          <span className="font-serif italic text-2xl text-casa-text">Tradição & Sabor</span>
          <span className="w-12 h-[1px] bg-casa-text"></span>
        </div>
        <h2 className="font-sans text-2xl md:text-4xl font-black uppercase tracking-widest text-casa-text">
          SEMPRE UMA REFEIÇÃO PERFEITA
        </h2>
        <div className="flex items-center gap-4 mt-4 text-casa-text">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-casa-accent transition-colors" />
          <Facebook className="w-5 h-5 cursor-pointer hover:text-casa-accent transition-colors" />
        </div>
      </div>
    </section>
  );
}
