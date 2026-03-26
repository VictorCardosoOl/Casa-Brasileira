import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SPACE_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop",
];

export default function TheSpace() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % SPACE_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + SPACE_IMAGES.length) % SPACE_IMAGES.length);

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
    <section id="space" ref={containerRef} className="py-32 px-6 md:pl-32 md:pr-12 bg-casa-cream relative overflow-hidden border-t border-casa-text/10">
      
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Text Side */}
        <div ref={textRef} className="lg:col-span-5 flex flex-col gap-8">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-casa-accent">
            (NOSSO ESPAÇO)
          </span>

          <h2 className="font-editorial text-[10vw] lg:text-[6vw] leading-[0.9] text-casa-text uppercase tracking-tighter">
            UM REFÚGIO <br/>
            DE MEMÓRIAS
          </h2>

          <div className="flex flex-col gap-6 mt-4">
            <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-casa-text-light leading-relaxed">
              A CASA BRASILEIRA NASCEU DO DESEJO DE CRIAR UM ESPAÇO ONDE O TEMPO DESACELERA. INSPIRADA NAS ANTIGAS CASAS DE VÓ, COM SEUS AZULEJOS HIDRÁULICOS E CHEIRO DE CAFÉ FRESCO, MAS COM UM TOQUE CONTEMPORÂNEO QUE REFLETE A MULHER MODERNA.
            </p>
            <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-casa-text-light leading-relaxed">
              CADA CANTO FOI PENSADO PARA ACOLHER. DAS MESAS POSTAS COM LINHO E FLORES FRESCAS À ILUMINAÇÃO SUAVE QUE TRANSFORMA O AMBIENTE CONFORME O DIA AVANÇA. É UM LUGAR PARA SE SENTIR EM CASA, SEJA PARA UM ALMOÇO RÁPIDO OU UMA TARDE INTEIRA DE CONVERSAS.
            </p>
          </div>

          <div className="pt-8">
            <button className="bg-casa-text text-casa-cream px-8 py-4 flex items-center gap-4 hover:bg-casa-accent transition-colors w-fit">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em]">
                CONHEÇA O ESPAÇO
              </span>
              <span className="font-light text-lg leading-none">+</span>
            </button>
          </div>
        </div>

        {/* Image Side - Gallery */}
        <div ref={imageRef} className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative h-[500px] md:h-[700px] overflow-hidden group">
            <img 
              key={currentImage}
              src={SPACE_IMAGES[currentImage]} 
              alt="Interior aconchegante e iluminado" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-in fade-in duration-500"
            />
            
            {/* Gallery Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevImage}
                className="w-12 h-12 bg-casa-cream/80 backdrop-blur-sm flex items-center justify-center text-casa-text hover:bg-casa-accent hover:text-casa-cream transition-colors border border-casa-text/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="w-12 h-12 bg-casa-cream/80 backdrop-blur-sm flex items-center justify-center text-casa-text hover:bg-casa-accent hover:text-casa-cream transition-colors border border-casa-text/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Floating Label */}
            <div className="absolute bottom-0 right-0 bg-casa-cream/90 backdrop-blur-md px-6 py-4 border-t border-l border-casa-text/10">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-casa-text">
                SÃO PAULO, BRASIL
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-end gap-4 mt-2">
            {SPACE_IMAGES.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`relative w-24 h-16 overflow-hidden transition-all duration-300 ${
                  currentImage === idx ? 'opacity-100 ring-1 ring-casa-accent ring-offset-2 ring-offset-casa-cream' : 'opacity-40 hover:opacity-80'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
