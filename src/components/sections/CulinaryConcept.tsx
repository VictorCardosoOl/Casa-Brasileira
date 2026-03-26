import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function CulinaryConcept() {
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
    <section id="concept" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-12 bg-casa-cream relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="font-editorial text-[18vw] leading-[0.8] text-casa-accent/5 tracking-tighter whitespace-nowrap">
          CONCEITO
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="concept-content flex flex-col gap-8">
            <h3 className="font-serif text-5xl md:text-6xl text-casa-text leading-tight">
              A Poesia do <br/>
              <span className="italic text-casa-accent">Prato Feito</span>
            </h3>
            <div className="space-y-6 text-casa-text-light font-light leading-relaxed text-lg">
              <p>
                Nossa culinária é uma homenagem às raízes brasileiras. Acreditamos que a verdadeira sofisticação reside na simplicidade dos ingredientes frescos e no preparo cuidadoso.
              </p>
              <p>
                Cada prato é uma viagem no tempo, recriando as receitas de família com técnicas contemporâneas, elevando o trivial ao extraordinário.
              </p>
            </div>
            <button className="w-fit px-8 py-3 border border-casa-accent text-casa-accent rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-casa-accent hover:text-white transition-colors">
              Descubra Mais
            </button>
          </div>

          {/* Image */}
          <div className="concept-content relative aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50 group border-4 border-casa-cream">
            <img 
              src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2670&auto=format&fit=crop" 
              alt="Ingredientes frescos" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
