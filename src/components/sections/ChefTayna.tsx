import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function ChefTayna() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from(imageRef.current, {
      scale: 1.05,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    })
    .from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=1');

  }, { scope: containerRef });

  return (
    <section id="chef" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-12 bg-casa-cream relative overflow-hidden border-t border-casa-text/10">
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Image Side */}
        <div ref={imageRef} className="lg:col-span-5 relative aspect-[3/4] overflow-hidden order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2680&auto=format&fit=crop" 
            alt="Chef Tayna Cristina" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
        </div>

        {/* Text Side */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2 lg:pl-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-casa-accent">
            (NOSSA CHEF)
          </span>

          <h2 className="font-editorial text-[10vw] lg:text-[6vw] leading-[0.9] text-casa-text uppercase tracking-tighter">
            TAYNA <br/>
            CRISTINA
          </h2>

          <div className="flex flex-col gap-6 mt-4 max-w-xl">
            <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-casa-text-light leading-relaxed">
              "MINHA COZINHA É UMA EXTENSÃO DA MINHA CASA. É ONDE MISTURO AS MEMÓRIAS DA INFÂNCIA COM A TÉCNICA QUE APRENDI PELO MUNDO. CADA PRATO CONTA UMA HISTÓRIA, E EU QUERO QUE VOCÊ FAÇA PARTE DELA."
            </p>
            <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-casa-text-light leading-relaxed">
              FORMADA EM GASTRONOMIA E APAIXONADA PELAS RAÍZES BRASILEIRAS, TAYNA CRISTINA TRANSFORMOU O CONCEITO DE "PRATO FEITO" EM UMA EXPERIÊNCIA SENSORIAL. SUA FILOSOFIA É SIMPLES: INGREDIENTES FRESCOS, RESPEITO AO PRODUTOR E MUITO AFETO NO PREPARO.
            </p>
          </div>

          <div className="pt-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
              alt="Assinatura Tayna" 
              className="h-12 opacity-30 invert" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
