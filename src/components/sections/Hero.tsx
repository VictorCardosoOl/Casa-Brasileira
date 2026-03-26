import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
    })
    .from(imageRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
    }, '-=1')
    .from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    }, '-=1');

    // Parallax
    gsap.to(textRef.current, {
      y: -150,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-casa-cream pt-24 md:pl-32 px-6"
    >
      {/* Massive Background Text */}
      <div 
        ref={textRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none"
      >
        <h1 className="font-serif text-[20vw] leading-[0.8] text-casa-accent/10 tracking-tighter whitespace-nowrap">
          CASA<br/>BRASILEIRA
        </h1>
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto mt-12">
        <div ref={contentRef} className="text-center mb-8">
          <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-casa-accent mb-4 block">
            Alta Cozinha do Cotidiano
          </span>
        </div>

        <div ref={imageRef} className="relative w-full max-w-3xl aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl shadow-casa-pink-200/50">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
            alt="Casa Brasileira" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-12 text-center max-w-xl bg-casa-cream/80 backdrop-blur-sm p-6 rounded-2xl">
          <p className="font-serif text-2xl md:text-3xl text-casa-text italic leading-relaxed">
            "Resgatando memórias através do sabor, em um ambiente onde cada detalhe conta uma história."
          </p>
        </div>
      </div>
    </section>
  );
}
