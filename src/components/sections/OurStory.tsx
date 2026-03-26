import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from('.concept-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

  }, { scope: containerRef });

  return (
    <section id="story" ref={containerRef} className="py-24 px-6 lg:pl-40 lg:pr-12 bg-casa-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="concept-content flex flex-col gap-8">
            <h2 className="font-serif text-6xl md:text-7xl text-casa-text leading-tight tracking-tighter uppercase">
              NOSSA HISTÓRIA
            </h2>
            <div className="space-y-6 text-casa-text-light font-sans text-sm md:text-base leading-relaxed max-w-md border-l-2 border-casa-accent pl-6">
              <p>
                Tudo começou na década de 1940, quando as receitas de família eram passadas de geração em geração. Com o desejo de capturar a essência da culinária brasileira, criamos um espaço onde o tradicional encontra o contemporâneo.
              </p>
              <p>
                Muitas variações da nossa história foram contadas, mas a verdade é que cada prato servido aqui carrega o amor e a dedicação de quem entende que a comida é a melhor forma de reunir pessoas queridas.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <span className="font-serif italic text-casa-accent text-xl">Descubra mais</span>
              <button className="px-8 py-3 bg-casa-accent text-white rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-casa-accent-hover transition-colors">
                Reservar Mesa
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="concept-content relative aspect-[4/5] max-w-md mx-auto md:ml-auto rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50 group border-8 border-casa-pink-50">
            <img 
              src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2670&auto=format&fit=crop" 
              alt="Nossa História" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
