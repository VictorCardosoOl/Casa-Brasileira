import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLHeadingElement>(null);
  const smallTextRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial States
    gsap.set(leftPanelRef.current, { clipPath: 'inset(0 100% 0 0)' });
    gsap.set(rightPanelRef.current, { clipPath: 'inset(0 0 0 100%)' });
    gsap.set([bigTextRef.current, smallTextRef.current, counterRef.current, ctaRef.current, scrollIndicatorRef.current], { 
      y: 50, 
      opacity: 0 
    });

    // Reveal Panels
    tl.to(leftPanelRef.current, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: 'expo.inOut',
    })
    .to(rightPanelRef.current, {
      clipPath: 'inset(0 0 0 0%)',
      duration: 1.2,
      ease: 'expo.inOut',
    }, '-=1.0');

    // Reveal Content
    tl.to([smallTextRef.current, counterRef.current], {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
    }, '-=0.5')
    .to(bigTextRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
    }, '-=0.6')
    .to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }, '-=0.8')
    .to(scrollIndicatorRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }, '-=0.4');

    // Parallax for Big Text on Scroll
    gsap.to(bigTextRef.current, {
      y: -100,
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
      className="relative h-screen w-full overflow-hidden flex flex-col lg:flex-row bg-casa-cream"
    >
      {/* Left Panel - Image */}
      <div 
        ref={leftPanelRef} 
        className="relative w-full lg:w-[45%] h-[45%] lg:h-full overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" 
          alt="Interior sofisticado Casa Brasileira" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
        
        {/* Top Left Text */}
        <div ref={smallTextRef} className="absolute top-32 left-8 md:left-12 text-white z-10">
          <p className="font-sans text-xs md:text-sm font-medium tracking-[0.2em] uppercase leading-relaxed">
            Modern Brazilian<br/>Cuisine
          </p>
        </div>

        {/* Bottom Left Counter */}
        <div ref={counterRef} className="absolute bottom-8 left-8 md:left-12 text-white z-10">
          <span className="font-mono text-sm">1/5</span>
        </div>
      </div>

      {/* Right Panel - Solid Color & Content */}
      <div 
        ref={rightPanelRef} 
        className="relative w-full lg:w-[55%] h-[55%] lg:h-full bg-casa-pink-100 flex flex-col justify-center lg:justify-end p-8 md:p-12 lg:p-20"
      >
        {/* Bottom Right Big Typography & CTA */}
        <div className="relative w-full flex flex-col lg:block">
          <h1 
            ref={bigTextRef} 
            className="font-serif text-[15vw] lg:text-[12vw] leading-[0.8] text-casa-accent tracking-tighter mix-blend-multiply opacity-90 mb-8 lg:mb-0"
          >
            casa<br/>
            <span className="ml-[1.5ch]">br.</span>
          </h1>
          
          {/* CTA Button - Relative on Mobile, Absolute on Desktop */}
          <div ref={ctaRef} className="lg:absolute lg:top-0 lg:right-12 self-start lg:self-auto mt-4 lg:mt-0">
             <button className="group relative px-8 py-4 bg-casa-accent text-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-casa-accent/30 hover:-translate-y-1">
              <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative flex items-center gap-3 font-medium text-sm tracking-widest uppercase">
                Reservar Mesa <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 text-casa-accent/50 animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
