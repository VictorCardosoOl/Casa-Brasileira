import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function MenuSection() {
  const containerRef = useRef<HTMLElement>(null);
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
      y: 50,
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
    <section id="menu" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-0 bg-casa-cream relative overflow-hidden border-t border-casa-text/10">
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Text */}
        <div ref={textRef} className="lg:col-span-7 flex flex-col gap-6 relative z-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-casa-accent">
            (NOSSO MENU)
          </span>
          <h2 className="font-editorial text-[10vw] lg:text-[6vw] leading-[0.9] text-casa-text uppercase tracking-tight">
            UM MENU DESENHADO <br/>
            PARA SURPREENDER, <br/>
            COMBINANDO SABORES <br/>
            LOCAIS E INTERNACIONAIS
          </h2>
        </div>

        {/* Right Image */}
        <div ref={imageRef} className="lg:col-span-5 relative h-[500px] md:h-[700px] w-full flex flex-col items-end justify-end">
          <div className="w-full h-full absolute right-0 top-0 translate-x-12 md:translate-x-24 flex items-center justify-center">
            <img 
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-gourmet-food-transparent-png-image_13368549.png" 
              alt="Prato do Menu" 
              className="w-[120%] h-auto object-contain drop-shadow-2xl scale-125"
            />
          </div>
          
          {/* Book a Table Button */}
          <button className="relative z-20 bg-casa-cream/80 backdrop-blur-md px-8 py-4 flex items-center gap-4 hover:bg-casa-cream transition-colors mr-12 md:mr-24 mb-12 border border-casa-text/10">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-casa-text">
              RESERVAR MESA
            </span>
            <span className="text-casa-accent font-light text-lg leading-none">+</span>
          </button>
        </div>

      </div>
    </section>
  );
}
