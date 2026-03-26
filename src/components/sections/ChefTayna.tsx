import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

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
      scale: 1.1,
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
    <section id="chef" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-12 bg-casa-cream relative overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-0">
        <svg className="w-full h-full">
          <filter id="noise-chef">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-chef)" />
        </svg>
      </div>

      {/* Massive Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h2 className="font-editorial text-[18vw] leading-[0.8] text-casa-accent/5 tracking-tighter whitespace-nowrap">
          CHEF TAYNA
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10 mt-24">
        
        {/* Image Side - Artistic Portrait */}
        <div ref={imageRef} className="relative aspect-[3/4] md:aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50 group order-2 lg:order-1 border-4 border-casa-cream">
          <img 
            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2680&auto=format&fit=crop" 
            alt="Chef Tayna Cristina" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-casa-cream/50 via-transparent to-transparent opacity-80" />
          
          {/* Signature Overlay */}
          <div className="absolute bottom-12 left-12">
            <span className="font-serif text-6xl text-casa-accent opacity-50 mix-blend-multiply italic">Tayna</span>
          </div>
        </div>

        {/* Text Side - Personal Narrative */}
        <div ref={textRef} className="flex flex-col gap-10 order-1 lg:order-2">
          <div className="flex items-center gap-4 text-casa-accent">
            <span className="h-[1px] w-16 bg-casa-accent/50"></span>
            <span className="font-serif italic text-xl tracking-wide">Sobre Mim</span>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-casa-text leading-[1.1]">
            Cozinhar é um ato de <br/>
            <span className="text-casa-accent italic">amor.</span>
          </h2>

          <div className="relative pl-8 border-l border-casa-accent/30">
            <Quote className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-casa-accent bg-casa-cream p-1" />
            <p className="font-sans text-xl text-casa-text-light leading-relaxed font-light italic">
              "Minha cozinha é uma extensão da minha casa. É onde misturo as memórias da infância com a técnica que aprendi pelo mundo. Cada prato conta uma história, e eu quero que você faça parte dela."
            </p>
          </div>

          <div className="prose prose-lg text-casa-text-light font-light leading-relaxed">
            <p>
              Formada em Gastronomia e apaixonada pelas raízes brasileiras, Tayna Cristina transformou o conceito de "prato feito" em uma experiência sensorial. 
            </p>
            <p className="mt-4">
              Sua filosofia é simples: ingredientes frescos, respeito ao produtor e muito afeto no preparo. Na Casa Brasileira, ela lidera uma equipe majoritariamente feminina, criando um ambiente de força e delicadeza.
            </p>
          </div>

          <div className="pt-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
              alt="Assinatura Tayna" 
              className="h-16 opacity-50" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
