import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1.2, delay: 0.2 })
      .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.8')
      .from(imageRef.current, { y: 40, opacity: 0, duration: 1.2 }, '-=0.6')
      .from(scriptRef.current, { opacity: 0, rotation: 15, scale: 0.5, duration: 1.5, ease: 'elastic.out(1, 0.4)' }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative min-h-screen w-full bg-casa-cream pt-32 pb-16 px-6 md:px-12 flex flex-col items-center justify-start"
    >
      {/* Title Area */}
      <div className="text-center w-full max-w-6xl mx-auto z-10 relative">
        <h1 
          ref={titleRef}
          className="font-editorial text-[16vw] md:text-[11vw] leading-[0.85] text-casa-accent lowercase tracking-tight"
        >
          casa brasileira
        </h1>
        <p 
          ref={subtitleRef}
          className="font-sans text-[10px] md:text-sm uppercase tracking-[0.2em] text-casa-accent mt-6 mb-10"
        >
          Alta cozinha do cotidiano para quem quer sentir
        </p>
      </div>

      {/* Image Area */}
      <div className="relative w-full max-w-5xl mx-auto mt-4">
        <div 
          ref={imageRef} 
          className="p-2 md:p-3 rounded-[2.5rem] border border-casa-accent/20 bg-casa-cream/50 backdrop-blur-sm shadow-2xl shadow-casa-pink-200/40"
        >
          <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
              alt="Casa Brasileira" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Script Overlay */}
        <div 
          ref={scriptRef}
          className="absolute -bottom-6 right-4 md:-bottom-8 md:right-12 z-20 -rotate-6"
        >
          <span className="font-script text-3xl md:text-5xl text-casa-accent">
            role para explorar
          </span>
        </div>
      </div>
    </section>
  );
}
