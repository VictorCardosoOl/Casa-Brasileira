import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

export default function CulinaryConcept() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from('.concept-image', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    }, '-=0.5');

  }, { scope: containerRef });

  return (
    <section id="concept" ref={containerRef} className="py-32 px-6 md:px-12 bg-casa-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24 relative z-10">
          <span className="text-casa-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Arte & Sabor
          </span>
          <h2 ref={titleRef} className="font-serif text-5xl md:text-7xl text-casa-text leading-tight">
            A Poesia do <br/>
            <span className="italic text-casa-accent">Prato Feito</span>
          </h2>
        </div>

        {/* Concept Grid */}
        <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Image 1 - Large Vertical */}
          <div className="concept-image md:col-span-5 relative group">
            <div className="aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl shadow-casa-pink-200/50">
              <img 
                src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2670&auto=format&fit=crop" 
                alt="Ingredientes frescos e coloridos" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-casa-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="mt-4 font-serif text-xl text-casa-text italic text-center md:text-left">
              "Cores que alimentam a alma."
            </p>
          </div>

          {/* Text Block */}
          <div className="concept-image md:col-span-2 flex flex-col items-center justify-center text-center py-12 md:py-0">
            <div className="w-[1px] h-24 bg-casa-accent/30 mb-6" />
            <p className="font-sans text-sm text-casa-text-light uppercase tracking-widest rotate-0 md:rotate-90 whitespace-nowrap">
              Conceito Visual
            </p>
            <div className="w-[1px] h-24 bg-casa-accent/30 mt-6" />
          </div>

          {/* Image 2 - Smaller with Offset */}
          <div className="concept-image md:col-span-5 relative group mt-12 md:mt-32">
            <div className="aspect-square overflow-hidden rounded-[2rem] shadow-2xl shadow-casa-pink-200/50">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" 
                alt="Prato finalizado com elegância" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-casa-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="mt-4 font-serif text-xl text-casa-text italic text-center md:text-right">
              "A beleza da simplicidade brasileira."
            </p>
          </div>

        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-casa-pink-100 rounded-full blur-[100px] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-casa-pink-200 rounded-full blur-[120px] -z-10 opacity-40" />
    </section>
  );
}
