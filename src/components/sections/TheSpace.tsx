import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

export default function TheSpace() {
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

    tl.from(textRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(imageRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8');

  }, { scope: containerRef });

  return (
    <section id="space" ref={containerRef} className="py-32 px-6 md:px-12 bg-casa-pink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div ref={textRef} className="flex flex-col gap-8">
          <div className="flex items-center gap-3 text-casa-accent">
            <span className="h-[1px] w-12 bg-casa-accent/50"></span>
            <span className="font-serif italic text-lg tracking-wide">Nossa História</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-casa-text leading-[1.1]">
            Um refúgio de <br/>
            <span className="text-casa-accent italic">memórias.</span>
          </h2>

          <div className="prose prose-lg text-casa-text-light font-light leading-relaxed">
            <p>
              A Casa Brasileira nasceu do desejo de criar um espaço onde o tempo desacelera. 
              Inspirada nas antigas casas de vó, com seus azulejos hidráulicos e cheiro de café fresco, 
              mas com um toque contemporâneo que reflete a mulher moderna.
            </p>
            <p className="mt-4">
              Cada canto foi pensado para acolher. Das mesas postas com linho e flores frescas 
              à iluminação suave que transforma o ambiente conforme o dia avança. É um lugar para 
              se sentir em casa, seja para um almoço rápido ou uma tarde inteira de conversas.
            </p>
          </div>

          <div className="pt-4">
            <button className="px-8 py-3 border border-casa-accent text-casa-accent rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-casa-accent hover:text-white transition-colors duration-300">
              Conheça o Espaço
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div ref={imageRef} className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50 group">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop" 
            alt="Interior aconchegante e iluminado" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-casa-cream via-transparent to-transparent opacity-80" />
          
          {/* Floating Label */}
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
            <span className="font-serif text-casa-accent italic text-sm">
              Rua das Flores, 123 — São Paulo
            </span>
          </div>
        </div>

      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-casa-pink-100 rounded-full blur-[80px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-casa-cream to-transparent pointer-events-none" />
    </section>
  );
}
