import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function CulinaryConcept() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8');

  }, { scope: containerRef });

  return (
    <section id="concept" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-12 bg-casa-cream relative overflow-hidden border-t border-casa-text/10">
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Title */}
        <div ref={textRef} className="lg:col-span-6 flex flex-col gap-6 relative z-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-casa-accent">
            (SOBRE NÓS)
          </span>
          <h2 className="font-editorial text-[10vw] lg:text-[6vw] leading-[0.9] text-casa-text uppercase tracking-tighter">
            FUSÃO DE <br/>
            TRADIÇÃO E <br/>
            CRIATIVIDADE
          </h2>
        </div>

        {/* Right Content */}
        <div ref={contentRef} className="lg:col-span-6 flex flex-col gap-12 lg:pt-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-casa-text-light leading-relaxed">
              CADA PRATO É UMA VIAGEM NO TEMPO, RECRIANDO AS RECEITAS DE FAMÍLIA COM TÉCNICAS CONTEMPORÂNEAS, ELEVANDO O TRIVIAL AO EXTRAORDINÁRIO. ACREDITAMOS QUE A VERDADEIRA SOFISTICAÇÃO RESIDE NA SIMPLICIDADE DOS INGREDIENTES FRESCOS E NO PREPARO CUIDADOSO.
            </p>
            <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-casa-text-light leading-relaxed">
              NOSSA CULINÁRIA É UMA HOMENAGEM ÀS RAÍZES BRASILEIRAS. EXPLORE NOSSOS MENUS E DESCUBRA A FUSÃO PERFEITA DE SABORES AUTÊNTICOS. NA CASA BRASILEIRA, CADA EXPERIÊNCIA É ÚNICA.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 mt-8">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670&auto=format&fit=crop" 
                alt="Detalhe do prato" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12 md:mt-24">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" 
                alt="Ambiente do restaurante" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
