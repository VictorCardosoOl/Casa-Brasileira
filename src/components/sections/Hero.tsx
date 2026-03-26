import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1.2, delay: 0.2 })
      .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.8')
      .from(imageRef.current, { y: 40, opacity: 0, duration: 1.2 }, '-=0.6');
  }, { scope: containerRef });

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative w-full bg-casa-cream pt-40 pb-16 px-6 md:px-12 flex flex-col"
    >
      {/* Top Content Area */}
      <div className="w-full max-w-[1600px] mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
        
        {/* Large Title */}
        <div className="lg:col-span-8">
          <h1 
            ref={titleRef}
            className="font-editorial text-[14vw] lg:text-[8.5vw] leading-[0.85] text-casa-text uppercase tracking-tighter"
          >
            CASA <br/>
            BRASILEIRA
          </h1>
        </div>

        {/* Small Description */}
        <div className="lg:col-span-4 lg:pb-4 flex flex-col gap-6">
          <p 
            ref={subtitleRef}
            className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-casa-text-light leading-relaxed max-w-sm"
          >
            O BISTRÔ BRASILEIRO ONDE A TRADIÇÃO ENCONTRA A INOVAÇÃO CULINÁRIA. EXPLORE NOSSOS MENUS E DESCUBRA A FUSÃO PERFEITA DE SABORES AUTÊNTICOS EM UM AMBIENTE ACOLHEDOR E ELEGANTE.
          </p>
          <div className="w-12 h-[1px] bg-casa-accent"></div>
        </div>
      </div>

      {/* Full Width Image Area */}
      <div className="relative w-full mt-16 md:mt-24">
        <div 
          ref={imageRef} 
          className="w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
            alt="Interior da Casa Brasileira" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
